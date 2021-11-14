import { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import SignupModal from "./SignupModal";
import "../App.css";
import LogoDark from "../public/assets/FMP-dark.png";
import APIURL from "../helpers/environment";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { errorMsg: "", visible: false, signupModalActive: false };
  }

  signupModalON = () => {
    this.setState({ signupModalActive: true });
  };

  signupModalOFF = () => {
    this.setState({ signupModalActive: false });
  };

  handleLogin = (fields) => {
    fetch(`${APIURL}/user/login`, {
      method: "POST",
      body: JSON.stringify({
        user: { email: fields.email, password: fields.password },
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
          this.setState({ errorMsg: data.error });
        } else if (data.error === "User does not exist.") {
          this.setState({ errorMsg: data.error });
        } else {
          this.props.dataUpdate(data);
          // props.updateToken(data);
          // console.log(data);
        }
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("A valid email is required")
            .required("Email is required"),
          password: Yup.string().required("Password is Required"),
        })}
        onSubmit={(fields, { resetForm }) => {
          this.handleLogin(fields);
          resetForm({ fields: this.initialValues });
        }}
        render={({ errors, status, touched }) => (
          <div className="LoginApp">
            <div
              className="div d-flex justify-content-center"
              style={{ paddingTop: "30px" }}
            >
              <img
                src={LogoDark}
                alt="Food Manager Pro Logo"
                srcset=""
                width="250"
                height="250"
              />
            </div>
            <h2 className="LoginHeader">Login</h2>
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
                </div>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-warning">
                    Login
                  </button>
                  <button
                    type="reset"
                    className="btn btn-link"
                    onClick={() => {
                      this.signupModalON();
                    }}
                  >
                    Signup Here!!!
                  </button>
                </div>
              </div>
              <br />
              {this.state.errorMsg === "" ? (
                ""
              ) : (
                <div className="alert alert-danger" role="alert">
                  {this.state.errorMsg}
                </div>
              )}
            </Form>
            {this.state.signupModalActive ? (
              <SignupModal
                signupModalOFF={this.signupModalOFF}
                updateUserData={this.props.updateUserData}
                updateToken={this.props.updateToken}
                dataUpdate={this.props.dataUpdate}
              />
            ) : (
              <></>
            )}
          </div>
        )}
      />
    );
  }
}

export default LoginForm;

// const LoginForm = (props) => {
//   const [errorMsg, seterrorMSG] = useState("");

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: Yup.object({
//       email: Yup.string().email("Invalid email address").required("Required"),
//       password: Yup.string().required("Please Enter your password"),
//     }),

//     onSubmit: (values) => {
//       handleLogin();
//     },
//   });

//   //for Error Message Alert Element
//   const [visible, setVisible] = useState(false);
//   const [signupModalActive, setsignupModalActive] = useState(false);
//   const signupModalON = () => {
//     setsignupModalActive(true);
//   };

//   const signupModalOFF = () => {
//     setsignupModalActive(false);
//   };

//   let handleLogin = (event) => {
//     fetch(`http://localhost:3000/user/login`, {
//       method: "POST",
//       body: JSON.stringify({
//         user: { email: formik.values.email, password: formik.values.password },
//       }),
//       headers: new Headers({
//         "Content-Type": "application/json",
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (
//           data.error ===
//           "Login failed - Please check email and password and try again"
//         ) {
//           seterrorMSG(data.error);
//         } else if (data.error === "User does not exist.") {
//           seterrorMSG(data.error);
//         } else {
//           props.dataUpdate(data);
//           // props.updateToken(data);
//           // console.log(data);
//         }
//       })
//       .catch((error) => console.log(error));
//     //make Alert for Errors Appear mor dynamic
//     errorMsg != "" ? setVisible(true) : setVisible(true);
//   };

//   return (
//     <div className="LoginApp">
//       <div
//         className="div d-flex justify-content-center"
//         style={{ paddingTop: "30px" }}
//       >
//         <img
//           src={LogoDark}
//           alt="Food Manager Pro Logo"
//           srcset=""
//           width="250"
//           height="250"
//         />
//       </div>
//       <h2 className="LoginHeader">Login</h2>
//       <Form className="form" onSubmit={formik.handleSubmit}>
//         <FormGroup>
//           <Label for="exampleEmail">Email Address</Label>
//           <Input
//             type="email"
//             onChange={formik.handleChange}
//             name="email"
//             id="email"
//             onBlur={formik.handleBlur}
//             value={formik.values.email}
//             placeholder="email@email.com"
//           />
//           <p style={{ color: "red" }}>
//             {formik.touched.email && formik.errors.email ? (
//               <div>{formik.errors.email}</div>
//             ) : null}
//           </p>
//         </FormGroup>
//         <FormGroup>
//           <Label for="examplePassword">Password</Label>
//           <Input
//             input
//             type="password"
//             onChange={formik.handleChange}
//             name="password"
//             id="examplepassword"
//             onBlur={formik.handleBlur}
//             value={formik.values.password}
//             placeholder="********"
//           />
//           <p style={{ color: "red" }}>
//             {formik.touched.password && formik.errors.password ? (
//               <div>{formik.errors.password}</div>
//             ) : null}
//           </p>
//         </FormGroup>
//         <div className="LoginButtonSec">
//           <button type="submit" className="btn btn-warning">
//             Login
//           </button>
//           <button
//             type="button"
//             className="btn btn-link"
//             onClick={signupModalON}
//           >
//             Click here to signup!
//           </button>
//         </div>
//         <Alert color="danger" isOpen={visible}>
//           {errorMsg}
//         </Alert>
//       </Form>
//       {signupModalActive ? (
//         <SignupModal
//           signupModalOFF={signupModalOFF}
//           updateToken={props.updateToken}
//         />
//       ) : (
//         <></>
//       )}
//     </div>
//   );
// };

// export default LoginForm;
