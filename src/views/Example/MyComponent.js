import React from "react";
import AddComponent from "./AddComponent";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
  /* 
 JSX cho phép hàm trong js có thểm trả ra code html

 */
  state = {
    list: [
      { id: 1, name: "Ngân hàng", salary: 10000 },
      { id: 1, name: "Ngân hàng", salary: 10000 },
    ],
  };

  addJob = (job) => {
    this.setState({
      list: [...this.state.list, job],
    });
  };

  deleteJob = (id) => {
    this.setState({
      list: this.state.list.filter((job) => job.id !== id),
    });
  };

  render() {
    return (
      <>
        <AddComponent addJob={this.addJob} />
        <ChildComponent deleteJob={this.deleteJob} dataList={this.state.list} />
      </>
    );
  }
}
export default MyComponent;
