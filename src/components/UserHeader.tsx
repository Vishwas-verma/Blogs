import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component<any, any> {

  render() {
    const user = this.props.users.find((user: any) => user.id === this.props.userId);
    if (!user) {
      return null;
    }
    return (
      <div className = {"header"}>{user.name}</div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {users: state.users}
};

export default connect(mapStateToProps)(UserHeader);