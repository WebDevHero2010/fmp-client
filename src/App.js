import { Container } from "reactstrap";
import "djibe-material/css/material.css";
import "djibe-material/css/material-plugins.css";
import "djibe-material/js/material.js";
import { Component } from "react";
import FMPNavbar from "./home/FMPNavbar";
import Auth from "./auth/Auth";
import { BrowserRouter as Router } from "react-router-dom";
import FMPSwitch from "./auth/FMPSwitch";
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
      <FMPSwitch token={this.state.sessionToken} />
    ) : (
      // <FacilityIndex token={this.state.sessionToken} />
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
          {this.protectedViews()}
        </Router>
      </Container>
    );
  }
}

export default App;
