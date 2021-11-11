import { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

class InspectionCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { inspectionModalCreate: false, facilityDropDown: [] };
  }

  toggle = () => {
    this.setState((prevState) => ({
      inspectionModalCreate: !prevState.inspectionModalCreate,
    }));
  };

  getFacilityDropdown = () => {
    fetch(`http://localhost:3000/facility/`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((facilityData) => {
        this.setState({ facilityDropDown: facilityData });
      });
  };

  fetchPostInspection = (fields) => {
    // console.log(this.props, "from InspectionCreate");
    fetch(`http://localhost:3000/inspectionreports/create`, {
      method: "POST",
      body: JSON.stringify({
        inspectionreports: {
          purpose: fields.purpose,
          followUpDate: fields.followUpDate,
          releaseDate: fields.releaseDate,
          violationFindings: fields.violationFindings,
          toBeCorrectedBy: fields.toBeCorrectedBy,
          facilityId: fields.facilityId,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((inspectionReportData) => {
        this.props.setInspection(inspectionReportData.log);
      });
  };

  facilityDropDownMapper = () => {
    return this.state.facilityDropDown.map((facility, index) => {
      return (
        <option key={index} value={facility.id}>
          {facility.facilityName}
        </option>
      );
    });
  };

  resetFacilityDropdown = () => {
    this.setState({ facilityDropDown: [""] });
  };

  componentDidMount() {
    this.getFacilityDropdown();
  }

  render() {
    return (
      <Formik
        initialValues={{
          purpose: "",
          followUpDate: "",
          releaseDate: "",
          violationFindings: "",
          toBeCorrectedBy: "",
          facilityId: "",
        }}
        validationSchema={Yup.object().shape({
          purpose: Yup.string().required("Purpose is required"),
          followUpDate: Yup.string().required("Followup Date is required"),
          releaseDate: Yup.string().required("Release Date is required"),
          violationFindings: Yup.string().required(
            "ViolationFindings is Required"
          ),
          toBeCorrectedBy: Yup.string().required(
            "To be Corrected By:(Owner, Employee, etc??)"
          ),
          facilityId: Yup.number().required("Facility Required"),
        })}
        onSubmit={(fields, { resetForm }) => {
          console.log(fields);
          // alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
          this.fetchPostInspection(fields);
          this.toggle();
          resetForm({ fields: this.initialValues });
        }}
        render={({ errors, status, touched }) => (
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm">
                <button
                  onClick={this.toggle}
                  className="btn btn-info"
                  type="button"
                >
                  <i
                    className="material-icons btn-icon-prepend"
                    aria-hidden="true"
                  >
                    add
                  </i>
                  New Inspection
                </button>
              </div>
            </div>
            <Modal
              isOpen={this.state.inspectionModalCreate}
              toggle={this.toggle}
              className="modalStyle"
            >
              <ModalHeader className="font-titles">
                <h3>Inspection Report Creator</h3>
              </ModalHeader>
              <ModalBody>
                <Form>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <label htmlFor="purpose">Purpose</label>
                        <Field
                          name="purpose"
                          type="text"
                          className={
                            "form-control" +
                            (errors.purpose && touched.purpose
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="purpose"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="followUpDate">Followup Date:</label>
                        <Field
                          name="followUpDate"
                          type="text"
                          className={
                            "form-control" +
                            (errors.followUpDate && touched.followUpDate
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="followUpDate"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="releaseDate">Release Date:</label>
                        <Field
                          name="releaseDate"
                          type="text"
                          className={
                            "form-control" +
                            (errors.releaseDate && touched.releaseDate
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="releaseDate"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="violationFindings">
                          Violation Findings
                        </label>
                        <Field
                          name="violationFindings"
                          type="string"
                          className={
                            "form-control" +
                            (errors.violationFindings &&
                            touched.violationFindings
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="violationFindings"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="toBeCorrectedBy">
                          Issues to be Corrected By:
                        </label>
                        <Field
                          name="toBeCorrectedBy"
                          type="string"
                          className={
                            "form-control" +
                            (errors.toBeCorrectedBy && touched.toBeCorrectedBy
                              ? " is-invalid"
                              : "")
                          }
                        />
                        <ErrorMessage
                          name="toBeCorrectedBy"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="facilityId">
                          Facility being inspected
                        </label>
                        <Field
                          name="facilityId"
                          as="select"
                          type="number"
                          className={
                            "form-control" +
                            (errors.facilityId && touched.facilityId
                              ? " is-invalid"
                              : "")
                          }
                        >
                          <option></option>
                          {this.facilityDropDownMapper()}
                        </Field>
                        <ErrorMessage
                          name="facilityId"
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
                        Submit
                      </button>
                      <button
                        type="reset"
                        className="btn btn-outline-danger"
                        onClick={() => {
                          this.toggle();
                          // this.resetFacilityDropdown();
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

export default InspectionCreate;
