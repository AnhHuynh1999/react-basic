import React from "react";

class ChildComponent extends React.Component {
  render() {
    return (
      <>
        {this.props.dataList?.map((item, index) => (
          <div key={index}>
            {item.name} - {item.salary}{" "}
            <span onClick={() => this.props.deleteJob(item.id)}> X </span>
          </div>
        ))}
      </>
    );
  }
}

export default ChildComponent;
