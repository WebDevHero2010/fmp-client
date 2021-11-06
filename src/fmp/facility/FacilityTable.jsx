import { Component } from "react";
import { Table, Button, Container, Row, Col } from "reactstrap";
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
          <th scope="row">{facility.id}</th>
          <td>{facility.facilityName}</td>
          <td>{facility.address}</td>
          <td>{facility.state}</td>
          <td>{facility.zipcode}</td>
          <td>{facility.phonenumber}</td>
          <td>{facility.facilityType}</td>
          <td>{facility.menuType}</td>
          <td>{facility.operationStatus}</td>
          <td>{facility.ownerEmail}</td>
          <td>{facility.ownerFirstName}</td>
          <td>{facility.ownerLastName}</td>
          <td>{facility.ownerPhoneNumber}</td>
          <td>{facility.ownerAddress}</td>
          <td>{facility.ownerCity}</td>
          <td>{facility.ownerState}</td>
          <td>{facility.ownerZipcode}</td>
          <td>
            <Button
              className="btn-update"
              color="black"
              onClick={() => {
                this.props.editFacility(facility);
                this.props.editOn();
              }}
            >
              Update
            </Button>
            <Button
              color="black"
              onClick={() => {
                this.deleteFacility(facility);
              }}
            >
              Delete
            </Button>
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
      <Container>
        <Row className="facility-padding">
          <Col>
            <h1 className="font-titles">Facilities</h1>
          </Col>
          <Col>
            <FacilityCreate
              FacilityTable={FacilityTable}
              token={this.props.token}
            />
          </Col>
          <hr />
        </Row>
        <Table id="facilityTable" borderless hover>
          <thead>
            <tr className="font-table">
              <th>Facility#</th>
              <th>Facility Name:</th>
              <th>Address</th>
              <th>State</th>
              <th>Zipcode</th>
              <th>Phone#</th>
              <th>Facility Type</th>
              <th>Menu Type</th>
              <th>Operation Status</th>
              <th>Owner Email#</th>
              <th>Owner Firstname</th>
              <th>Owner Lastname</th>
              <th>Owner Phone#</th>
              <th>Owner Address</th>
              <th>Owner City</th>
              <th>Owner State</th>
              <th>Owner Zipcode</th>
            </tr>
          </thead>
          <tbody>{this.facilityMapper()}</tbody>
        </Table>
      </Container>
    );
  }
}

export default FacilityTable;

// const FacilityTable = (props) => {
//   const deleteFacility = (facility) => {
//     fetch(`http://localhost:3000/facility/delete/${facility.id}`, {
//       method: "DELETE",
//       headers: new Headers({
//         "Content-Type": "application/json",
//         Authorization: props.token,
//       }),
//     }).then(() => props.fetchFacility());
//   };
//   console.log(props.facility);

//   const facilityMapper = () => {
//     return props.facility.map((facility, index) => {
//       return (
//         <tr key={index}>
//           <th scope="row">{facility.id}</th>
//           <td>{facility.facilityName}</td>
//           <td>{facility.address}</td>
//           <td>{facility.state}</td>
//           <td>{facility.zipcode}</td>
//           <td>{facility.phonenumber}</td>
//           <td>{facility.facilityType}</td>
//           <td>{facility.menuType}</td>
//           <td>{facility.operationStatus}</td>
//           <td>{facility.ownerEmail}</td>
//           <td>{facility.ownerFirstName}</td>
//           <td>{facility.ownerLastName}</td>
//           <td>{facility.ownerPhoneNumber}</td>
//           <td>{facility.ownerAddress}</td>
//           <td>{facility.ownerCity}</td>
//           <td>{facility.ownerState}</td>
//           <td>{facility.ownerZipcode}</td>
//           <td>
//             <Button
//               className="btn-update"
//               color="black"
//               onClick={() => {
//                 props.editFacility(facility);
//                 props.editOn();
//               }}
//             >
//               Update
//             </Button>
//             <Button
//               className="btn-delete"
//               color="black"
//               onClick={() => {
//                 deleteFacility(facility);
//               }}
//             >
//               Delete
//             </Button>
//           </td>
//         </tr>
//       );
//     });
//   };

//   return (
//     <Container>
//       <Row className="facility-padding">
//         {/* <Col>
//           <h1 className="font-titles">Facilities</h1>
//         </Col> */}
//         <Col>
//           <FacilityCreate FacilityTable={FacilityTable} token={props.token} />
//         </Col>
//         <hr />
//       </Row>
//       <Table id="facilityTable" borderless hover>
//         <thead>
//           <tr className="font-table">
//             <th>Facility#</th>
//             <th>Facility Name:</th>
//             <th>Address</th>
//             <th>State</th>
//             <th>Zipcode</th>
//             <th>Phone#</th>
//             <th>Facility Type</th>
//             <th>Menu Type</th>
//             <th>Operation Status</th>
//             <th>Owner Email#</th>
//             <th>Owner Firstname</th>
//             <th>Owner Lastname</th>
//             <th>Owner Phone#</th>
//             <th>Owner Address</th>
//             <th>Owner City</th>
//             <th>Owner State</th>
//             <th>Owner Zipcode</th>
//           </tr>
//         </thead>
//         <tbody>{facilityMapper()}</tbody>
//       </Table>
//     </Container>
//   );
// };

// export default FacilityTable;
