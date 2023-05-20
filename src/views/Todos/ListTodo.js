import React from "react";
import AddTodo from "./AddTodo";
import "./ListTodo.scss";
class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "Making video" },
      { id: "todo3", title: "Fixing bugs" },
    ],
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
  };

  render() {
    const { listTodos } = this.state;
    return (
      <div className="list-todo-container">
        <AddTodo addNewTodo={this.addNewTodo}/>
        <div className="list-todo-content">
          {listTodos &&
            listTodos.length > 0 &&
            listTodos.map((todo, index) => (
              <div className="todo-child" key={index}>
                <span>
                  {index + 1} - {todo.title}
                </span>
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default ListTodo;
