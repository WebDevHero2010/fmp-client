import React, { useState } from "react";
import { useFormik } from "formik"; //import Formik
import * as Yup from "yup";
// import APIURL from "../helpers/environment";
import {
  Alert,
  Form,
  Label,
  Input,
  Button,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

const SignupModal = (props) => {
  const [suerrorMSG, suSeterrorMSG] = useState("");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      role: "user",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(4, "Must be more than 4 characters")
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .min(4, "Must be more than 4 characters")
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      role: Yup.string().required("Required"),
      password: Yup.string()
        .required("Please Enter your password")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character(no dashes or underscores)"
        ),
      passwordConfirmation: Yup.string().test(
        "passwords-match",
        "Passwords must match",
        function (value) {
          return this.parent.password === value;
        }
      ),
    }),

    onSubmit: (values) => {
      handleSignUp();
    },
  });

  //useState for Alert element
  const [visible, setVisible] = useState(false);

  let handleSignUp = (values) => {
    fetch(`http://localhost:3000/user/signup`, {
      method: "POST",
      body: JSON.stringify({
        user: {
          email: formik.values.email,
          firstName: formik.values.firstName,
          lastName: formik.values.lastName,
          password: formik.values.password,
          role: formik.values.role,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "User successfully created & added to DB") {
          props.updateToken(data.sessionToken);
          console.log("User successfully created");
        } else {
          suSeterrorMSG(
            "user account already exists please try another email or try signing in under login..."
          );
        }
      })
      .catch((error) => console.log(error));
    //Make Alert for Errors Appear Dynamically
    suerrorMSG != "" ? setVisible(true) : setVisible(true);
  };
  return (
    <Modal isOpen={true} centered={true}>
      <ModalHeader className="d-flex justify-content-center">
        Signup
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={formik.handleSubmit} className="signup">
          <FormGroup>
            <Label htmlFor="firstName">First Name:</Label>
            <Input
              type="text"
              onChange={formik.handleChange}
              name="firstName"
              value={formik.values.firstName}
            />
            <p style={{ color: "red" }}>
              {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
              ) : null}
            </p>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="lastName">Last Name:</Label>
            <Input
              type="text"
              onChange={formik.handleChange}
              name="lastName"
              value={formik.values.lastName}
            />
            <p style={{ color: "red" }}>
              {formik.touched.lastName && formik.errors.lastName ? (
                <div>{formik.errors.lastName}</div>
              ) : null}
            </p>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input
              onChange={formik.handleChange}
              name="email"
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <p style={{ color: "red" }}>
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </p>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="role">Role:</Label>
            <Input
              onChange={formik.handleChange}
              name="role"
              type="select"
              onBlur={formik.handleBlur}
              value={formik.values.role}
            >
              <option value="user">user</option>
              <option value="admin">admin</option>
            </Input>
            <p style={{ color: "red" }}>
              {formik.touched.role && formik.errors.role ? (
                <div>{formik.errors.role}</div>
              ) : null}
            </p>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password:</Label>
            <Input
              input
              type="password"
              onChange={formik.handleChange}
              name="password"
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <p style={{ color: "red" }}>
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </p>
            <FormGroup>
              <Label htmlFor="passwordConfirmation">Confirm Password:</Label>
              <Input
                input
                type="password"
                name="passwordConfirmation"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.passwordConfirmation}
              ></Input>
              <p style={{ color: "red" }}>
                {formik.touched.passwordConfirmation &&
                formik.errors.passwordConfirmation ? (
                  <div>{formik.errors.passwordConfirmation}</div>
                ) : null}
              </p>
            </FormGroup>
            <br></br>
            <br></br>
            <div className="d-flex justify-content-between">
              <Button className="btn-pdf" type="submit">
                Submit
              </Button>
              <Button color="danger" onClick={props.signupModalOFF}>
                Exit
              </Button>
            </div>
            <br />
            <Alert color="danger" isOpen={visible}>
              {suerrorMSG}
            </Alert>
          </FormGroup>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default SignupModal;
