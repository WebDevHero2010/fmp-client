import { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Modal, ModalHeader, ModalBody } from "reactstrap";
class SignupModal extends Component {
  constructor(props) {
    super(props);
    this.state = { suerrorMSG: "" };
  }

  handleSubmit = (fields) => {
    fetch("http://localhost:3000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        user: {
          email: fields.email,
          password: fields.password,
          firstName: fields.firstName,
          lastName: fields.lastName,
          role: fields.role,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "User successfully created & added to DB") {
          this.props.dataUpdate(data);
        } else {
          this.setState({
            suerrorMSG:
              "user account already exists please try another email or try signing in under login...",
          });
        }
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          password: "",
          passwordConfirm: "",
          role: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("A valid email is required")
            .required("Email is required"),
          firstName: Yup.string().required("Firstname is required"),
          lastName: Yup.string().required("Lastname is required"),
          password: Yup.string()
            .matches(
              /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
              "Password must contain at least 8 characters, one uppercase, one number and one special case character"
            )
            .required("Password is Required"),
          passwordConfirm: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Passwords must match"
          ),
          role: Yup.string().required("Please select a Role from the dropdown"),
        })}
        onSubmit={(fields, { resetForm }) => {
          this.handleSubmit(fields);
          // this.props.signupModalOFF();
          resetForm({ fields: this.initialValues });
        }}
        render={({ errors, status, touched }) => (
          <div className="container-fluid">
            <div className="row"></div>
            <Modal isOpen={true} centered={true}>
              <ModalHeader className="d-flex justify-content-center">
                Signup
              </ModalHeader>
              <ModalBody>
                <Form>
                  <div className="row">
                    <div className="col">
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
                        <label htmlFor="firstName">First Name:</label>
                        <Field
                          name="firstName"
                          type="text"
                          className={
                            "form-control" +
                            (errors.firstName && touched.firstName
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="firstName"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <Field
                          name="lastName"
                          type="text"
                          className={
                            "form-control" +
                            (errors.lastName && touched.lastName
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="lastName"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="role">Role</label>
                        <Field
                          as="select"
                          name="role"
                          type="string"
                          className={
                            "form-control" +
                            (errors.role && touched.role ? " is-invalid" : "")
                          }
                        >
                          <option value=""></option>
                          <option value="user">user</option>
                          <option value="admin">admin</option>
                        </Field>
                        <ErrorMessage
                          name="role"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <Field
                          name="password"
                          type="password"
                          className={
                            "form-control" +
                            (errors.password && touched.password
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="passwordConfirm">
                          Confirm password
                        </label>
                        <Field
                          name="passwordConfirm"
                          type="password"
                          className={
                            "form-control" +
                            (errors.passwordConfirm && touched.passwordConfirm
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="passwordConfirm"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between">
                      <button type="submit" className="btn btn-outline-success">
                        sign up!
                      </button>
                      <button
                        type="reset"
                        className="btn btn-outline-danger"
                        onClick={() => {
                          this.props.signupModalOFF();
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Form>
                <br />
                {this.state.suerrorMSG === "" ? (
                  ""
                ) : (
                  <div className="alert alert-danger" role="alert">
                    {this.state.suerrorMSG}
                  </div>
                )}
              </ModalBody>
            </Modal>
          </div>
        )}
      />
    );
  }
}

export default SignupModal;
