import { Container } from "reactstrap";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FMPNavbar from "./home/FMPNavbar";
import Auth from "./auth/Auth";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import FacilityIndex from "./fmp/facility/FacilityIndex";
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
    // console.log(this.state.sessionToken);
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
          {this.protectedViews()}
        </Router>
      </Container>
    );
  }
}

export default App;

// function App() {
//   const [sessionToken, setSessionToken] = useState("");

//   useEffect(() => {
//     if (localStorage.getItem("token")) {
//       setSessionToken(localStorage.getItem("token"));
//     }
//   }, []);

//   const updateToken = (newToken) => {
//     localStorage.setItem("token", newToken);
//     setSessionToken(newToken);
//     console.log(sessionToken);
//   };

//   const clearToken = () => {
//     localStorage.clear();
//     setSessionToken("");
//   };

//   const protectedViews = () => {
//     return sessionToken === localStorage.getItem("token") ? (
//       <FacilityIndex token={sessionToken} />
//     ) : (
//       <Auth updateToken={updateToken} />
//     );
//   };

//   return (
//     <Container fluid="true" className="App">
//       <Router>
//         <FMPNavbar
//           clickLogout={clearToken}
//           updateToken={updateToken}
//           sessionToken={sessionToken}
//         />
//         {protectedViews()}
//       </Router>
//     </Container>
//   );
// }

// export default App;
