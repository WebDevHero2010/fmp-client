import LoginForm from "./LoginForm";
import { useState } from "react";
import { Container } from "reactstrap";
import SignupModal from "./SignupModal";

const Auth = (props) => {
  const [signupModalActive, setsignupModalActive] = useState(false);
  const signupModalON = () => {
    setsignupModalActive(true);
  };

  const signupModalOFF = () => {
    setsignupModalActive(false);
  };
  return (
    <Container fluid={true}>
      <SignupModal updateToken={props.updateToken} />
      <LoginForm updateToken={props.updateToken} />
    </Container>
  );
};

export default Auth;
