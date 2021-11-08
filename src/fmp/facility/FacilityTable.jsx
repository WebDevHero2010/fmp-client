import { Component } from "react";
import FacilityCreate from "./FacilityCreate";
class FacilityTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  facilityMapper = () => {
    return this.props.facility.map((facility, index) => {
      return (
        <tr key={index}>
          <th>{facility.id}</th>
          <td>{facility.facilityName}</td>
          <td>{facility.address}</td>
          <td>{facility.state}</td>
          <td>{facility.zipcode}</td>
          <td>{facility.phonenumber}</td>
          <td>{facility.facilityType}</td>
          <td>{facility.menuType}</td>
          <td>{facility.operationStatus}</td>
          {/* <td>{facility.ownerEmail}</td>
          <td>{facility.ownerFirstName}</td>
          <td>{facility.ownerLastName}</td>
          <td>{facility.ownerPhoneNumber}</td>
          <td>{facility.ownerAddress}</td>
          <td>{facility.ownerCity}</td>
          <td>{facility.ownerState}</td>
          <td>{facility.ownerZipcode}</td> */}
          <td>
            <button
              className="btn btn-light"
              onClick={() => {
                this.props.editFacility(facility);
                this.props.editOn();
              }}
              type="button"
            >
              Edit/View
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.deleteFacility(facility);
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

  deleteFacility = (facility) => {
    fetch(`http://localhost:3000/facility/delete/${facility.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    }).then(() => this.props.fetchFacility());
  };

  render() {
    return (
      <div className="container-fluid">
        <div
          className="d-flex justify-content-between"
          style={{ paddingTop: "30px" }}
        >
          <h3>Facilities</h3>
          <div>
            <FacilityCreate
              FacilityTable={FacilityTable}
              token={this.props.token}
              setFacility={this.props.setFacility}
            />
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-hover .table-sm">
            <thead className="thead-dark">
              <tr>
                <th scope={"col"}>Facility#</th>
                <th scope={"col"}>Facility Name:</th>
                <th scope={"col"}>Address</th>
                <th scope={"col"}>State</th>
                <th scope={"col"}>Zipcode</th>
                <th scope={"col"}>Phone#</th>
                <th scope={"col"}>Facility Type</th>
                <th scope={"col"}>Menu Type</th>
                <th scope={"col"}>Operation Status</th>
                {/* <th scope={"col"}>Owner Email#</th>
                <th scope={"col"}>Owner Firstname</th>
                <th scope={"col"}>Owner Lastname</th>
                <th scope={"col"}>Owner Phone#</th>
                <th scope={"col"}>Owner Address</th>
                <th scope={"col"}>Owner City</th>
                <th scope={"col"}>Owner State</th>
                <th scope={"col"}>Owner Zipcode</th> */}
                <th scope={"col"}>Actions</th>
              </tr>
            </thead>
            <tbody>{this.facilityMapper()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default FacilityTable;
