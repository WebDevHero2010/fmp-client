import { Component } from "react";
import { Button, NavbarText } from "reactstrap";
import "../App.css";
class FMPNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  loginOptionToggle = () => {
    return this.props.sessionToken === localStorage.getItem("token") ? (
      <div>
        <NavbarText className="userNameText">Hello, Username</NavbarText>
        <Button className="submitBTN" onClick={this.props.clickLogout}>
          Logout
        </Button>
      </div>
    ) : (
      ""
    );
  };
  render() {
    return (
      <div>
        <nav
          className={
            "navbar navbar-expand-lg navbar-dark bg-dark justify-content-between"
          }
        >
          <a className={"navbar-brand"} href="/">
            Food Manager Pro
          </a>
          <div>{this.loginOptionToggle()}</div>
        </nav>
      </div>
    );
  }
}

export default FMPNavbar;
