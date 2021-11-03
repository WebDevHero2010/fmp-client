import { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Button,
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
  };

  render() {
    return (
      <Formik
        initialValues={{
          facilityName: "",
          address: "",
          state: "",
          zipcode: "",
          phonenumber: "",
          facilityType: "",
          menuType: "",
          operationStatus: "",
          ownerEmail: "",
          ownerFirstName: "",
          ownerLastName: "",
          ownerPhoneNumber: "",
          ownerAddress: "",
          ownerCity: "",
          ownerState: "",
          ownerZipcode: "",
        }}
        validationSchema={Yup.object().shape({
          facilityName: Yup.string().required("Facility Name is required"),
          address: Yup.string().required("Facility Address is required"),
          state: Yup.string().required("Facility State is required"),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
        })}
        onSubmit={(fields) => {
          alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
        }}
        render={({ errors, status, touched }) => (
          <Modal>
            <Form>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <Field
                  name="firstName"
                  type="text"
                  className={
                    "form-control" +
                    (errors.firstName && touched.firstName ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <Field
                  name="lastName"
                  type="text"
                  className={
                    "form-control" +
                    (errors.lastName && touched.lastName ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  name="email"
                  type="text"
                  className={
                    "form-control" +
                    (errors.email && touched.email ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  name="password"
                  type="password"
                  className={
                    "form-control" +
                    (errors.password && touched.password ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field
                  name="confirmPassword"
                  type="password"
                  className={
                    "form-control" +
                    (errors.confirmPassword && touched.confirmPassword
                      ? " is-invalid"
                      : "")
                  }
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary mr-2">
                  Register
                </button>
                <button type="reset" className="btn btn-secondary">
                  Reset
                </button>
              </div>
            </Form>
          </Modal>
        )}
      />
    );
  }
}

export default FacilityCreate;
