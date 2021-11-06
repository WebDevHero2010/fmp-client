import { Container } from "reactstrap";
// import React, {}
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FMPNavbar from "./home/FMPNavbar";
// import AdminDashIndex from "./fmp/adminDash/AdminDashIndex";
// import InspectionPublic from "./public/InspectionPublic";
import Auth from "./auth/Auth";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import FacilityIndex from "./fmp/facility/FacilityIndex";

function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <FacilityIndex token={sessionToken} />
    ) : (
      <Auth updateToken={updateToken} />
    );
  };

  return (
    <Container fluid="true" className="App">
      <Router>
        <FMPNavbar
          clickLogout={clearToken}
          updateToken={updateToken}
          sessionToken={sessionToken}
        />
        {protectedViews()}
      </Router>
    </Container>
  );
}

export default App;
