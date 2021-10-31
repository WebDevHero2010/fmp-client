import LoginForm from "./LoginForm";
import { Container } from "reactstrap";

const Auth = (props) => {
  return (
    <Container fluid={true}>
      <LoginForm updateToken={props.updateToken} />
    </Container>
  );
};

export default Auth;
