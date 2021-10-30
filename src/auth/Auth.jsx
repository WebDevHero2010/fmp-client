import { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "../App.css";

class Auth extends Component {
  render() {
    return (
      <div className="LoginApp">
        <h2 className="LoginHeader">Login</h2>
        <Form className="form">
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
            <Button>Submit</Button>
          </div>
        </Form>
      </div>
    );
  }
}
export default Auth;
