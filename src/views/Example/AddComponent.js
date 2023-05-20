import React from "react";

class AddComponent extends React.Component {
  state = {
    job: {
      id: null,
      name: "",
      salary: null,
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.job.salary && !this.state.job.name) {
      alert("Vui lòng nhập tên và lương");
      return;
    }
    this.props.addJob({
      ...this.state.job,
      id: Math.floor(Math.random() * 100),
    });
    this.setState({
      job: {
        id: null,
        name: "",
        salary: 0,
      },
    });
  };

  onSalaryChange = (e) => {
    this.setState({
      job: { ...this.state.job, [e.target.name]: e.target.value },
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} action="" method="post">
        <div>
          <input
            value={this.state.job.name}
            placeholder="Tên"
            type="text"
            name="name"
            onChange={this.onSalaryChange}
          ></input>
        </div>
        <div>
          <input
            value={this.state.job.salary}
            placeholder="Lương"
            type="number"
            name="salary"
            onChange={this.onSalaryChange}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AddComponent;
