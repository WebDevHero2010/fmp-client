import { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import * as Yup from "yup";

class InspectionEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inspectionEditModal: false,
      editPurpose: this.props.inspectionToEdit.purpose,
      editFollowUpDate: this.props.inspectionToEdit.followUpDate,
      editReleaseDate: this.props.inspectionToEdit.releaseDate,
      editViolationFindings: this.props.inspectionToEdit.violationFindings,
      editToBeCorrectedBy: this.props.inspectionToEdit.toBeCorrectedBy,
      editFacilityId: this.props.inspectionToEdit.facilityId,
      facilityDropDown: [],
    };
  }

  inspectionUpdate = (fields) => {
    fetch(
      `http://localhost:3000/inspectionreports/update/${this.props.inspectionToEdit.id}`,
      {
        method: "PUT",
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
      }
    ).then((res) => {
      this.props.fetchInspections();
      this.props.inspectionEditOff();
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

  inspectionEditToggle = () => {
    this.setState((prevState) => ({
      inspectionEditModal: !prevState.inspectionEditModal,
    }));
  };

  componentDidMount() {
    this.inspectionEditToggle();
  }

  render() {
    return (
      <Formik
        initialValues={{
          purpose: this.state.editPurpose,
          followUpDate: this.state.editFollowUpDate,
          releaseDate: this.state.editReleaseDate,
          violationFindings: this.state.editViolationFindings,
          toBeCorrectedBy: this.state.editToBeCorrectedBy,
          facilityId: this.state.editFacilityId,
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
        onSubmit={(fields) => {
          // alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
          this.inspectionUpdate(fields);
          this.inspectionEdittoggle();
        }}
        render={({ errors, status, touched }) => (
          <div className="container-fluid">
            <Modal
              isOpen={this.state.inspectionEditModal}
              centered={true}
              inspectionEditToggle={this.inspectionEditToggle}
              className="modalStyle"
            >
              <ModalHeader className="font-titles">
                <h3>Edit Inspection Report</h3>
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
                        <label htmlFor="facilityId">FacilityId</label>
                        <Field
                          name="facilityId"
                          disabled={true}
                          className={
                            "form-control" +
                            (errors.facilityId && touched.facilityId
                              ? " is-invalid"
                              : "")
                          }
                        >
                          {/* {this.facilityDropDownMapper()} */}
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
                          this.props.inspectionEditOff();
                          // this.inspectionEdittoggle();
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

export default InspectionEdit;
