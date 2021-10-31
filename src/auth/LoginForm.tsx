import { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "../App.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/user/login", {
      method: "POST",
      body: JSON.stringify({
        user: { email: email, password: password },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.updateToken(data.sessionToken);
      });
  };

  render() {
    return (
      <div className="LoginApp">
        <h2 className="LoginHeader">Login</h2>
        <Form className="form" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="exampleEmail">Email Address</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="email@email.com"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
            />
          </FormGroup>
          <div className="LoginButtonSec">
            <Button className="submitBTN">Submit</Button>
            <Button className="signupBTN" color="link">
              Click here to signup
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default LoginForm;
