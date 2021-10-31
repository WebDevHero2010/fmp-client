import { Container } from "reactstrap";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FMPNavbar from "./home/FMPNavbar";
import AdminDashIndex from "./fmp/adminDash/AdminDashIndex";
import InspectionPublic from "./home/InspectionPublic";
import Auth from "./auth/Auth";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

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
      <AdminDashIndex token={sessionToken} />
    ) : (
      <Auth updateToken={updateToken} />
    );
  };

  return (
    <Router>
      <Container fluid="true" className="App">
        <FMPNavbar clickLogout={clearToken} />
        {protectedViews()}
        <Route path="/public" exact component={InspectionPublic} />
      </Container>
    </Router>
  );
}

export default App;
