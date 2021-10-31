import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label, Alert } from "reactstrap";
import SignupModal from "./SignupModal";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../App.css";

const LoginForm = (props) => {
  const [errorMsg, seterrorMSG] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Please Enter your password"),
    }),

    onSubmit: (values) => {
      handleLogin();
    },
  });

  //for Error Message Alert Element
  const [visible, setVisible] = useState(false);
  const [signupModalActive, setsignupModalActive] = useState(false);
  const signupModalON = () => {
    setsignupModalActive(true);
  };

  const signupModalOFF = () => {
    setsignupModalActive(false);
  };

  let handleLogin = (event) => {
    // event.preventDefault();
    fetch(`http://localhost:3000/user/login`, {
      method: "POST",
      body: JSON.stringify({
        user: { email: formik.values.email, password: formik.values.password },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (
          data.error ===
          "Login failed - Please check email and password and try again"
        ) {
          seterrorMSG(data.error);
        } else if (data.error === "User does not exist.") {
          seterrorMSG(data.error);
        } else {
          props.updateToken(data.sessionToken);
          // props.setUserDisplayName(data.user.name);
        }
      })
      .catch((error) => console.log(error));
    //make Alert for Errors Appear mor dynamic
    errorMsg != "" ? setVisible(true) : setVisible(true);
  };

  return (
    <div className="LoginApp">
      <h2 className="LoginHeader">Login</h2>
      <Form className="form" onSubmit={formik.handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Email Address</Label>
          <Input
            type="email"
            onChange={formik.handleChange}
            name="email"
            id="email"
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="email@email.com"
          />
          <p style={{ color: "red" }}>
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </p>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            input
            type="password"
            onChange={formik.handleChange}
            name="password"
            id="examplepassword"
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="********"
          />
          <p style={{ color: "red" }}>
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </p>
        </FormGroup>
        <div className="LoginButtonSec">
          <Button className="submitBTN">Submit</Button>
          <Button className="signupBTN" color="link" onClick={signupModalON}>
            Click here to signup
          </Button>
        </div>
        <Alert color="danger" isOpen={visible}>
          {errorMsg}
        </Alert>
      </Form>
      {signupModalActive ? (
        <SignupModal
          signupModalOFF={signupModalOFF}
          updateToken={props.updateToken}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default LoginForm;
