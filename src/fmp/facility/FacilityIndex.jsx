// import React, { useState, useEffect } from "react";
import { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import FacilityTable from "./FacilityTable";
import FacilityEdit from "./FacilityEdit";
class FacilityIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { facility: [], editActive: false, facilityToEdit: {} };
  }

  fetchFacility = () => {
    fetch(`http://localhost:3000/facility/`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((facilityData) => {
        this.setState({ facility: facilityData });
        // console.log(facilityData);
        console.log(this.state.facility);
      });
  };

  editFacility = (facility) => {
    this.setState({ facilityToEdit: facility });
    console.log(this.state.facilityToEdit);
  };

  editOn = () => {
    this.setState({ EditActive: true });
  };

  editOff = () => {
    this.setState({ EditActive: false });
  };

  componentDidMount() {
    this.fetchFacility();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevState.facility, "console log prevState from Index");
    if (prevState.facility !== this.state.facility) {
      console.log(prevState.facility, "afterupdate");
    }
  }

  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col>
            <FacilityTable
              facility={this.state.facility}
              editFacility={this.editFacility}
              editOn={this.editOn}
              fetchFacility={this.fetchFacility}
              token={this.props.token}
            />
          </Col>
          {this.editActive ? (
            <FacilityEdit
              facilityToEdit={this.facilityToEdit}
              editOff={this.editOff}
              token={this.props.token}
              fetchFacility={this.fetchFacility}
            />
          ) : (
            <></>
          )}
        </Row>
      </Container>
    );
  }
}

export default FacilityIndex;

// const FacilityIndex = (props) => {
//   const [facility, setFacility] = useState([]);
//   const [editActive, setEditActive] = useState(false);
//   const [facilityToEdit, setFacilityToEdit] = useState({});

//   const fetchFacility = () => {
//     fetch(`http://localhost:3000/facility/`, {
//       method: "GET",
//       headers: new Headers({
//         "Content-Type": "application/json",
//         Authorization: props.token,
//       }),
//     })
//       .then((res) => res.json())
//       .then((facilityData) => {
//         setFacility(facilityData);
//         console.log(facilityData);
//       });
//   };

//   const editFacility = (facility) => {
//     setFacilityToEdit(facility);
//     console.log(facility);
//   };

//   const editOn = () => {
//     setEditActive(true);
//   };

//   const editOff = () => {
//     setEditActive(false);
//   };

//   //componentDidMount

//   useEffect(() => {
//     fetchFacility();
//   }, []);

//   return (
//     <Container fluid={true}>
//       <Row>
//         <Col>
//           <FacilityTable
//             facility={facility}
//             editFacility={editFacility}
//             editOn={editOn}
//             fetchFacility={fetchFacility}
//             token={props.token}
//           />
//         </Col>
//         {editActive ? (
//           <FacilityEdit
//             facilityToEdit={facilityToEdit}
//             editOff={editOff}
//             token={props.token}
//             fetchFacility={fetchFacility}
//           />
//         ) : (
//           <></>
//         )}
//       </Row>
//     </Container>
//   );
// };
// export default FacilityIndex;

//   const [facility, setFacility] = useState([]);
//   const [editActive, setEditActive] = useState(false);
//   const [facilityToEdit, setFacilityToEdit] = useState({});
