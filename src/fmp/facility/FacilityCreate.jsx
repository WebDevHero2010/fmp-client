import { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  Button,
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

  fetchPostFacility = (fields) => {
    fetch(`http://localhost:3000/facility/create`, {
      method: "POST",
      body: JSON.stringify({
        facility: {
          facilityName: fields.facilityName,
          address: fields.address,
          state: fields.state,
          zipcode: fields.zipcode,
          phonenumber: fields.phonenumber,
          facilityType: fields.facilityType,
          menuType: fields.menuType,
          operationStatus: fields.operationStatus,
          ownerEmail: fields.ownerEmail,
          ownerFirstName: fields.ownerFirstName,
          ownerLastName: fields.ownerLastName,
          ownerPhoneNumber: fields.ownerPhoneNumber,
          ownerAddress: fields.ownerAddress,
          ownerCity: fields.ownerCity,
          ownerState: fields.ownerState,
          ownerZipcode: fields.ownerState,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((facilityData) => {
        this.props.setFacility(facilityData.log);
        // console.log(facilityData, "fetch from Create");
      });
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
          zipcode: Yup.number().required("Facility Zipcode is Required"),
          phonenumber: Yup.string().required(
            "Facility Phone Number is required"
          ),
          facilityType: Yup.string().required("Facility Type Required"),
          menuType: Yup.string().required("Menu type is required"),
          operationStatus: Yup.string().required(
            "Operation status is Required"
          ),
          ownerEmail: Yup.string().required(
            "Facility Email address is required"
          ),
          ownerFirstName: Yup.string().required(
            "Facility Owner's first name Required"
          ),
          ownerLastName: Yup.string().required("Facility Owner's last name"),
          ownerPhoneNumber: Yup.string().required(
            "Owner's Phone number is Required"
          ),
          ownerAddress: Yup.string().required(
            "Owner's Home Addres is Required"
          ),
          ownerCity: Yup.string().required("Owner City is required"),
          ownerState: Yup.string().required("Owner State is required"),
          ownerZipcode: Yup.string().required("Owner Zipcode is required."),
        })}
        onSubmit={(fields) => {
          console.log(fields);
          // alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
          this.fetchPostFacility(fields);
          this.toggle();
        }}
        render={({ errors, status, touched }) => (
          <Container>
            <Row>
              <Col>
                <Button
                  variant="primary"
                  onClick={this.toggle}
                  className="btn-create"
                >
                  Add Facility
                </Button>
              </Col>
            </Row>
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className="modalStyle"
            >
              <ModalHeader className="font-titles">
                <h3>Add a Facility</h3>
              </ModalHeader>
              <ModalBody>
                <Form>
                  <Col>
                    <div className="form-group">
                      <label htmlFor="facilityName">Facility Name</label>
                      <Field
                        name="facilityName"
                        type="text"
                        className={
                          "form-control" +
                          (errors.facilityName && touched.facilityName
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="facilityName"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="address">Facility Address</label>
                      <Field
                        name="address"
                        type="text"
                        className={
                          "form-control" +
                          (errors.address && touched.address
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="address"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="state">Facility State</label>
                      <Field
                        name="state"
                        type="text"
                        className={
                          "form-control" +
                          (errors.state && touched.state ? " is-invalid" : "")
                        }
                      />
                      <ErrorMessage
                        name="state"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-g•••••••••••••roup">
                      <label htmlFor="zipcode">Facility Zipcode</label>
                      <Field
                        name="zipcode"
                        type="string"
                        className={
                          "form-control" +
                          (errors.zipcode && touched.zipcode
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="zipcode"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phonenumber">Facility Phone Number</label>
                      <Field
                        name="phonenumber"
                        type="string"
                        className={
                          "form-control" +
                          (errors.phonenumber && touched.phonenumber
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="phonenumber"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="facilityType">Facility Type</label>
                      <Field
                        name="facilityType"
                        type="string"
                        className={
                          "form-control" +
                          (errors.facilityType && touched.facilityTyAdd
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="facilityType"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="menuType">Menu Type</label>
                      <Field
                        name="menuType"
                        type="string"
                        className={
                          "form-control" +
                          (errors.menuType && touched.menuType
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="menuType"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="operationStatus">Operation Status</label>
                      <Field
                        name="operationStatus"
                        type="string"
                        className={
                          "form-control" +
                          (errors.operationStatus && touched.operationStatus
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="operationStatus"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                  </Col>
                  <Col>
                    <div className="form-group">
                      <label htmlFor="ownerEmail">Owner's Email Address</label>
                      <Field
                        name="ownerEmail"
                        type="string"
                        className={
                          "form-control" +
                          (errors.ownerEmail && touched.ownerEmail
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="ownerEmail"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ownerFirstName">Owner's First Name</label>
                      <Field
                        name="ownerFirstName"
                        type="string"
                        className={
                          "form-control" +
                          (errors.ownerFirstName && touched.ownerFirstName
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="ownerFirstName"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ownerLastName">Owner's Last Name</label>
                      <Field
                        name="ownerLastName"
                        type="string"
                        className={
                          "form-control" +
                          (errors.ownerLastName && touched.ownerLastName
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="ownerLastName"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ownerPhoneNumber">
                        Owner Phone Number
                      </label>
                      <Field
                        name="ownerPhoneNumber"
                        type="string"
                        className={
                          "form-control" +
                          (errors.ownerPhoneNumber && touched.ownerPhoneNumber
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="ownerPhoneNumber"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ownerAddress">Owner's Address</label>
                      <Field
                        name="ownerAddress"
                        type="string"
                        className={
                          "form-control" +
                          (errors.ownerAddress && touched.ownerAddress
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="ownerAddress"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ownerCity">Owner's City</label>
                      <Field
                        name="ownerCity"
                        type="string"
                        className={
                          "form-control" +
                          (errors.ownerCity && touched.ownerCity
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="ownerCity"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ownerState">Owner's State</label>
                      <Field
                        name="ownerState"
                        type="string"
                        className={
                          "form-control" +
                          (errors.ownerState && touched.ownerState
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="ownerState"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ownerZipcode">Owner's Zipcode</label>
                      <Field
                        name="ownerZipcode"
                        type="string"
                        className={
                          "form-control" +
                          (errors.ownerZipcode && touched.ownerZipcode
                            ? " is-invalid"
                            : "")
                        }
                      />
                      <ErrorMessage
                        name="ownerZipcode"
                        component="div"
                        className="invalid-feedback"
                      />
                    </div>
                    <br />
                  </Col>
                  <div className="CreateModalButtonDiv">
                    <button type="submit" className="btn btn-primary mr-2">
                      Add
                    </button>
                    <Button
                      color="danger"
                      onClick={() => {
                        this.toggle();
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </Form>
              </ModalBody>
            </Modal>
          </Container>
        )}
      />
    );
  }
}

export default FacilityCreate;
