import { Component } from "react";
import { NavbarText } from "reactstrap";
import { BrowserRouter as Switch, Route, Router, Link } from "react-router-dom";
class FMPNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  loginOptionToggle = () => {
    return this.props.sessionToken === localStorage.getItem("token") ? (
      <div className="row" style={{ padding: "5px" }}>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <NavbarText>
              Hello {this.props.sessionUserData.firstName}{" "}
              {this.props.sessionUserData.lastName}
            </NavbarText>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ color: "white" }}
              >
                Tools
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/inspectionmanager">
                  Inspection Manager
                </Link>
                <Link className="dropdown-item" to="/">
                  Facility Manager
                </Link>
                <Link className="dropdown-item" to="/admin">
                  Admin Tools
                </Link>
              </div>
            </li>
            <button
              className="btn btn-light"
              type="button"
              onClick={this.props.clickLogout}
            >
              Logout
            </button>
          </ul>
        </div>
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
          <a className="navbar-brand" href="/">
            Food Manager Pro
          </a>
          <div>{this.loginOptionToggle()}</div>
        </nav>
      </div>
    );
  }
}

export default FMPNavbar;
