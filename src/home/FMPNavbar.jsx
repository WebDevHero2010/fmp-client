import { Component } from "react";
import { Button, NavbarText } from "reactstrap";
import { Link } from "react-router-dom";
class FMPNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  loginOptionToggle = () => {
    return this.props.sessionToken === localStorage.getItem("token") ? (
      <div className="row" style={{ padding: "5px" }}>
        <NavbarText className="userNameText">Hello, Username</NavbarText>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Tools
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link className="dropdown-item" to="/InspectionManager">
              Inspection Manager
            </Link>
            <a class="dropdown-item" href="/">
              Facility
            </a>
            <a class="dropdown-item" href="/">
              temp
            </a>
          </div>
        </div>
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
