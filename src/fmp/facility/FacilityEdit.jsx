import { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import * as Yup from "yup";
import APIURL from "../../helpers/environment";

class FacilityEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editModal: false,
      editFacilityName: this.props.facilityToEdit.facilityName,
      editAddress: this.props.facilityToEdit.address,
      editState: this.props.facilityToEdit.state,
      editZipcode: this.props.facilityToEdit.zipcode,
      editPhoneNumber: this.props.facilityToEdit.phonenumber,
      editFacilityType: this.props.facilityToEdit.facilityType,
      editMenuType: this.props.facilityToEdit.menuType,
      editOperationStatus: this.props.facilityToEdit.operationStatus,
      editOwnerEmail: this.props.facilityToEdit.ownerEmail,
      editOwnerFirstName: this.props.facilityToEdit.ownerFirstName,
      editOwnerLastName: this.props.facilityToEdit.ownerLastName,
      editOwnerPhoneNumber: this.props.facilityToEdit.ownerPhoneNumber,
      editOwnerAddress: this.props.facilityToEdit.ownerAddress,
      editOwnerCity: this.props.facilityToEdit.ownerCity,
      editOwnerState: this.props.facilityToEdit.ownerState,
      editOwnerZipcode: this.props.facilityToEdit.ownerZipcode,
    };
  }

  facilityUpdate = (fields) => {
    // e.preventDefault();
    // console.log(fields, "facilityUpdate from facilityEdit");
    fetch(`${APIURL}/facility/update/${this.props.facilityToEdit.id}`, {
      method: "PUT",
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
    }).then((res) => {
      this.props.fetchFacility();
      this.props.editOff();
    });
  };

  editToggle = () => {
    this.setState((prevState) => ({ editModal: !prevState.editModal }));
    // console.log(this.state.editModal, "toggle from Edit");
  };

  componentDidMount() {
    this.editToggle();
  }

  render() {
    return (
      <Formik
        initialValues={{
          facilityName: this.state.editFacilityName,
          address: this.state.editAddress,
          state: this.state.editState,
          zipcode: this.state.editZipcode,
          phonenumber: this.state.editPhoneNumber,
          facilityType: this.state.editFacilityType,
          menuType: this.state.editMenuType,
          operationStatus: this.state.editOperationStatus,
          ownerEmail: this.state.editOwnerEmail,
          ownerFirstName: this.state.editOwnerFirstName,
          ownerLastName: this.state.editOwnerLastName,
          ownerPhoneNumber: this.state.editOwnerPhoneNumber,
          ownerAddress: this.state.editOwnerAddress,
          ownerCity: this.state.editOwnerCity,
          ownerState: this.state.editOwnerState,
          ownerZipcode: this.state.editOwnerZipcode,
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
          this.facilityUpdate(fields);
          this.editToggle();
          // console.log(fields);
          // alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
        }}
        render={({ errors, status, touched }) => (
          <div className="container-fluid">
            <Modal
              isOpen={this.state.editModal}
              centered={true}
              editToggle={this.editToggle}
              className="modalStyle"
            >
              <ModalHeader className="font-titles">
                <h3>Edit Facility</h3>
              </ModalHeader>
              <ModalBody>
                <Form>
                  <div className="row">
                    <div className="col">
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
                        <label htmlFor="phonenumber">
                          Facility Phone Number
                        </label>
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
                          as="select"
                          type="string"
                          className={
                            "form-control" +
                            (errors.facilityType && touched.facilityTyAdd
                              ? " is-invalid"
                              : "")
                          }
                        >
                          <option value=""></option>
                          <option value="Restaurant">Restaurant</option>
                          <option value="Tavern">Tavern</option>
                          <option value="Retail">Retail</option>
                          <option value="Restaurant/Tavern">
                            Restaurant/Tavern
                          </option>
                          <option value="Vender Operation">
                            Vender Operation (PHF)
                          </option>
                          <option value="Seasonal Food Service">
                            Seasnonal Food Service
                          </option>
                          <option value="Non-Profit Organization">
                            Non-Profit Organization
                          </option>
                          <option value="Bed and Breakfast">
                            Bed and Breakfast
                          </option>
                          <option value="Concession Stand">
                            Concession Stand
                          </option>
                          <option value="Vending Operation - Micro Markets">
                            Vending Operation - Micro Markets
                          </option>
                          <option value="Mobile Food Sales Truck">
                            Mobile Food Sales Truck
                          </option>
                          <option value="Concession Stand">
                            Concession Stand
                          </option>
                          <option value="Market">Market</option>
                          <option value="School Cafeteria">
                            School Cafeteria
                          </option>
                          <option value="Non-Profit Meal Site">
                            Non-Profit Meal Site
                          </option>
                        </Field>
                        <ErrorMessage
                          name="facilityType"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="menuType">Menu Type</label>
                        <Field
                          as="select"
                          name="menuType"
                          type="string"
                          className={
                            "form-control" +
                            (errors.menuType && touched.menuType
                              ? " is-invalid"
                              : "")
                          }
                        >
                          <option></option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </Field>
                        <ErrorMessage
                          name="menuType"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="operationStatus">
                          Operation Status
                        </label>
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
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="ownerEmail">
                          Owner's Email Address
                        </label>
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
                        <label htmlFor="ownerFirstName">
                          Owner's First Name
                        </label>
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
                    </div>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between">
                      <button type="submit" className="btn btn-outline-success">
                        Save Changes
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => {
                          this.props.editOff();
                          this.editToggle();
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Form>
              </ModalBody>
            </Modal>
          </div>
        )}
      />
    );
  }
}

export default FacilityEdit;
