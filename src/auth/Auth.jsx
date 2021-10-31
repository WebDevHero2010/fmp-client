import LoginForm from "./LoginForm";
// import { useState } from "react";
import { Container } from "reactstrap";
// import SignupModal from "./SignupModal";

const Auth = (props) => {
  return (
    <Container fluid={true}>
      <LoginForm updateToken={props.updateToken} />
    </Container>
  );
};

export default Auth;
