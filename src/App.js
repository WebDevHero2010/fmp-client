import { Container } from "reactstrap";
import { Component } from "react";
import "daemonite-material/css/material.css";
import "daemonite-material/js/material.js";
import FMPNavbar from "./home/FMPNavbar";
import Auth from "./auth/Auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import FacilityIndex from "./fmp/facility/FacilityIndex";
import InspectionPublic from "./public/InspectionPublic";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { sessionToken: "" };
  }

  componentDidMount() {
    this.setState({
      sessionToken: localStorage.getItem("token") ?? "",
    });
  }

  updateToken = (newToken) => {
    if (!newToken) return;
    localStorage.setItem("token", newToken);
    this.setState({ sessionToken: newToken });
  };

  clearToken = () => {
    localStorage.clear();
    this.setState({ sessionToken: "" });
  };

  protectedViews = () => {
    return this.state.sessionToken === localStorage.getItem("token") ? (
      <FacilityIndex token={this.state.sessionToken} />
    ) : (
      <Auth updateToken={this.updateToken} />
    );
  };

  render() {
    return (
      <Container fluid="true" className="App">
        <Router>
          <FMPNavbar
            clickLogout={this.clearToken}
            updateToken={this.updateToken}
            sessionToken={this.state.sessionToken}
          />
        </Router>
        {this.protectedViews()}
      </Container>
    );
  }
}

export default App;
