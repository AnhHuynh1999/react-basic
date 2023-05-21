import React from "react";
import axios from "axios";
import "./ListUser.scss";
class ListUser extends React.Component {
  state = {
    listUser: [],
  };
  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=2");
    this.setState({ listUser: res.data.data });
  }
  render() {
    return (
      <div className="list-user-container">
        <div className="list-user-content">
          {this.state.listUser &&
            this.state.listUser.length > 0 &&
            this.state.listUser.map((user, index) => (
              <div className="child" key={user.id}>
                {index + 1}. {user.first_name}- {user.last_name}{" "}
              </div>
            ))}
        </div>
      </div>
    );
  }
}
export default ListUser;
