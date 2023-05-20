import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    title: "",
  };

  handleOnChangeTitle = (event) => {
    this.setState({ title: event.target.value });
  };

  handleAddTodo = () => {
    if (!this.state.title) {
      toast.info("Vui lòng nhập ");
      return;
    }
    let todo = {
      id: Math.floor(Math.random() * 100000),
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
    this.setState({ title: "" });
    toast.success("Wow so easy");
  };

  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input
          type="text"
          value={title}
          onChange={(e) => this.handleOnChangeTitle(e)}
        />
        <button
          type="button"
          className="add"
          onClick={() => this.handleAddTodo()}
        >
          Add
        </button>
      </div>
    );
  }
}
export default AddTodo;
