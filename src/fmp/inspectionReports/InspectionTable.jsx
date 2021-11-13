import React, { Component } from "react";
import InspectionCreate from "./InspectionCreate";
var _ = require("lodash");

class InspectionTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.inspectionMapper();
  }

  inspectionMapper = () => {
    return this.props.inspection.map((inspection, index) => {
      return (
        <tr key={index}>
          <th>{inspection.id}</th>
          <td>{inspection.purpose}</td>
          <td>{inspection.followUpDate}</td>
          <td>{inspection.releaseDate}</td>
          <td>{inspection.violationFindings}</td>
          <td>{inspection.toBeCorrectedBy}</td>
          <td>{_.capitalize(inspection.facility.facilityName)}</td>
          <td>{Date(inspection.createdAt)}</td>
          <td>
            <button
              className="btn btn-light"
              onClick={() => {
                this.props.editInspection(inspection);
                this.props.inspectionEditOn();
              }}
              type="button"
            >
              Edit/View
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.deleteInspectionReport(inspection);
              }}
              type="button"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  deleteInspectionReport = (inspection) => {
    fetch(`http://localhost:3000/inspectionreports/delete/${inspection.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    }).then(() => this.props.fetchInspections());
  };

  render() {
    return (
      <div className="container-fluid">
        <div
          className="card-deck d-flex justify-content-between"
          style={{ paddingTop: "30px" }}
        >
          <div
            className="card text-white bg-success mb-3"
            style={{ maxWidth: "25rem" }}
          >
            <div className="card-header d-flex justify-content-center">
              <h5>Inspection Count</h5>
            </div>
            <div className="card-body">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <h1 className="d-flex justify-content-center row">
                      {this.props.cardOne}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="card text-white bg-info mb-3"
            style={{ maxWidth: "25rem" }}
          >
            <div className="card-header d-flex justify-content-center">
              <h5>Inspections Created by Complaint</h5>
            </div>
            <div className="card-body">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <h1 className="d-flex justify-content-center row">
                      {this.props.cardTwo}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ paddingTop: "30px" }}
        >
          <h3>Inspection Reports</h3>
          <div>
            <InspectionCreate
              InspectionTable={InspectionTable}
              token={this.props.token}
              setInspection={this.props.setInspection}
            />
          </div>
        </div>
        <div className="table-responsive">
          <table
            className="table table-striped table-hover .table-sm"
            id="inspectionTable"
          >
            <thead className="thead-dark">
              <tr>
                <th scope={"col"}>Inspection ID#:</th>
                <th scope={"col"}>Purpose:</th>
                <th scope={"col"}>Follow Update:</th>
                <th scope={"col"}>Release Date:</th>
                <th scope={"col"}>Violation Findings:</th>
                <th scope={"col"}>To Be Corrected By:</th>
                <th scope={"col"}>Facility Inspected:</th>
                <th scope={"col"}>Created At:</th>
                <th scope={"col"}>Actions</th>
              </tr>
            </thead>
            <tbody>{this.inspectionMapper()}</tbody>
          </table>
        </div>
        <div></div>
      </div>
    );
  }
}

export default InspectionTable;
