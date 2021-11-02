import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import FacilityTable from "./FacilityTable";
import FacilityEdit from "./FacilityEdit";

const FacilityIndex = (props) => {
  const [facility, setFacility] = useState([]);
  const [editActive, setEditActive] = useState(false);
  const [facilityToEdit, setFacilityToEdit] = useState({});

  const fetchFacility = () => {
    fetch(`http://localhost:3000/facility/`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((facilityData) => {
        setFacility(facilityData);
        console.log(facilityData);
      });
  };

  const editFacility = (facility) => {
    setFacilityToEdit(facility);
    console.log(facility);
  };

  const editOn = () => {
    setEditActive(true);
  };

  const editOff = () => {
    setEditActive(false);
  };

  useEffect(() => {
    fetchFacility();
  }, []);

  return (
    <Container fluid={true}>
      <Row>
        <Col>
          <FacilityTable
            facility={facility}
            editFacility={editFacility}
            editOn={editOn}
            fetchFacility={fetchFacility}
            token={props.token}
          />
        </Col>
        {editActive ? (
          <FacilityEdit
            facility={facilityToEdit}
            editOff={editOff}
            token={props.token}
            fetchFacility={fetchFacility}
          />
        ) : (
          <></>
        )}
      </Row>
    </Container>
  );
};
export default FacilityIndex;
