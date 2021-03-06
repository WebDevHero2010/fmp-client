import { Container } from "reactstrap";
import "djibe-material/css/material.css";
import "djibe-material/css/material-plugins.css";
import "djibe-material/js/material.js";
import { Component } from "react";
import FMPNavbar from "./home/FMPNavbar";
import Auth from "./auth/Auth";
import { BrowserRouter as Router } from "react-router-dom";
import FMPSwitch from "./auth/FMPSwitch";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { sessionToken: "", sessionUser: [] };
  }

  componentDidMount() {
    this.setState({
      sessionToken: localStorage.getItem("token") ?? "",
      sessionUser: localStorage.getItem("user") ?? "",
    });
  }

  componentDidUpdate() {
    this.dataUpdate();
  }
  // updateToken = (newToken) => {
  //   if (!newToken) return;
  //   localStorage.setItem("token", newToken);
  //   this.setState({ sessionToken: newToken });
  // };

  // updateUser = (user) => {
  //   if (!user) return;
  //   localStorage.setItem("user", user);
  //   this.setState({ sessionUser: user });
  // };

  dataUpdate = (data) => {
    if (!data) return;
    localStorage.setItem("token", data.sessionToken);
    localStorage.setItem("user", data.user);
    this.setState({ sessionToken: data.sessionToken });
    this.setState({ sessionUser: data.user });
    // console.log(this.state.sessionUser, "from app.js");
  };

  clearToken = () => {
    localStorage.clear();
    this.setState({ sessionToken: "" });
    this.setState({ sessionUser: [] });
  };

  protectedViews = () => {
    return this.state.sessionToken === localStorage.getItem("token") ? (
      <FMPSwitch token={this.state.sessionToken} dataUpdate={this.dataUpdate} />
    ) : (
      // <FacilityIndex token={this.state.sessionToken} />
      <Auth updateToken={this.updateToken} dataUpdate={this.dataUpdate} />
    );
  };

  render() {
    return (
      <Container fluid="true" className="App">
        <Router>
          <FMPNavbar
            clickLogout={this.clearToken}
            updateToken={this.updateToken}
            updateUser={this.updateUser}
            dataUpdate={this.dataUpdate}
            sessionToken={this.state.sessionToken}
            sessionUser={this.state.sessionUser}
          />
          {this.protectedViews()}
        </Router>
      </Container>
    );
  }
}

export default App;
