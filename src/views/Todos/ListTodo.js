import React from "react";
import { toast } from "react-toastify";
import AddTodo from "./AddTodo";
import "./ListTodo.scss";
import logo from "../logo.svg";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "Making video" },
      { id: "todo3", title: "Fixing bugs" },
    ],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
  };

  handleDeleteTodo = (todo) => {
    this.setState({
      listTodos: this.state.listTodos.filter((item) => item.id !== todo.id),
    });
    toast.success("Delete successfully");
  };

  handleEditTodo = (todo) => {
    let { editTodo, listTodos } = this.state;
    let isEmtyObj = Object.keys(editTodo).length === 0;
    //save
    if (isEmtyObj === false && editTodo.id === todo.id) {
      if (editTodo.title !== todo.title) {
        let listTodosCopy = [...listTodos];
        let objIndex = listTodos.findIndex((item) => item.id === todo.id);
        listTodosCopy[objIndex].title = editTodo.title;
        this.setState({
          listTodos: listTodosCopy,
          editTodo: {},
        });
        toast.success("Edit successfully");
        return;
      }
      this.setState({
        editTodo: {},
      });
      return;
    }
    //edit
    this.setState({ editTodo: todo });
  };

  handleChangeTitle = (e) => {
    this.setState({
      editTodo: { ...this.state.editTodo, title: e.target.value },
    });
  };

  render() {
    const { listTodos, editTodo } = this.state;
    let isEmtyObj = Object.keys(editTodo).length === 0;
    return (
      <div className="list-todo-container">
        <img src={logo} className="App-logo" alt="logo" />
        <AddTodo addNewTodo={this.addNewTodo} />
        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((todo, index) => (
              <div className="todo-child" key={index}>
                {isEmtyObj === false && editTodo.id === todo.id ? (
                  <span>
                    {index + 1} -{" "}
                    <input
                      value={editTodo.title}
                      onChange={(e) => this.handleChangeTitle(e)}
                    />
                  </span>
                ) : (
                  <span>
                    {index + 1} - {todo.title}
                  </span>
                )}
                <button
                  className="edit"
                  onClick={() => this.handleEditTodo(todo)}
                >
                  {isEmtyObj === false && editTodo.id === todo.id
                    ? "Save"
                    : "Edit"}
                </button>
                <button
                  className="delete"
                  onClick={() => this.handleDeleteTodo(todo)}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default ListTodo;
