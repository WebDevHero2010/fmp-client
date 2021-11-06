import { Component } from "react";
import LoginForm from "./LoginForm";
import { Container } from "reactstrap";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container fluid={true}>
        <LoginForm updateToken={this.props.updateToken} />
      </Container>
    );
  }
}

export default Auth;

// const Auth = (props) => {
//   return (
//     <Container fluid={true}>
//       <LoginForm updateToken={props.updateToken} />
//     </Container>
//   );
// };

// export default Auth;
