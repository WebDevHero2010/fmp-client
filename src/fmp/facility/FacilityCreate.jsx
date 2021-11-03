import { Component } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Container,
  Col,
} from "reactstrap";

class FacilityCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false };
  }

  toggle = () => {
    this.setState((prevState) => ({ modal: !prevState.modal }));
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>Button</Button>
      </div>
    );
  }
}

export default FacilityCreate;
