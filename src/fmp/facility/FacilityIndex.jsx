import { Component } from "react";
import FacilityTable from "./FacilityTable";
import FacilityEdit from "./FacilityEdit";
import APIURL from "../../helpers/environment";
class FacilityIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facility: [],
      editActive: false,
      facilityToEdit: {},
      facCardOne: "",
      facCardTwo: "",
      facCardThree: "",
    };
  }

  fetchFacility = () => {
    fetch(`${APIURL}/facility/`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((facilityData) => {
        this.setState({
          facility: facilityData,
          facCardOne: facilityData.filter(
            (facility) => facility.operationStatus === "Open"
          ).length,
          facCardTwo: facilityData.filter(
            (facility) => facility.operationStatus === "Suspended"
          ).length,
          facCardThree: facilityData.filter(
            (facility) => facility.operationStatus === "Closed"
          ).length,
        });
      });
  };

  editFacility = (facility) => {
    this.setState({ facilityToEdit: facility });
    console.log(this.state.facilityToEdit, "from editFacility");
  };

  editOn = () => {
    this.setState({ editActive: true });
    // console.log(this.state.editActive, "editOn fired off");
  };

  editOff = () => {
    this.setState({ editActive: false });
    // console.log(this.state.editActive, "editOff fired off");
  };

  componentDidMount() {
    this.fetchFacility();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.facility.length !== this.state.facility.length) {
      this.setState({
        facility: this.state.facility.sort((a, b) => b.id - a.id),
        facCardOne: this.state.facility.filter(
          (facility) => facility.operationStatus === "Open"
        ).length,
        facCardTwo: this.state.facility.filter(
          (facility) => facility.operationStatus === "Suspended"
        ).length,
        facCardThree: this.state.facility.filter(
          (facility) => facility.operationStatus === "Closed"
        ).length,
      });
    }
  }

  setFacility = (facility) => {
    this.setState({ facility: [...this.state.facility, facility] });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm">
            <FacilityTable
              facility={this.state.facility}
              editFacility={this.editFacility}
              editOn={this.editOn}
              fetchFacility={this.fetchFacility}
              token={this.props.token}
              setFacility={this.setFacility}
              facCardOne={this.state.facCardOne}
              facCardTwo={this.state.facCardTwo}
              facCardThree={this.state.facCardThree}
            />
          </div>
          {this.state.editActive ? (
            <FacilityEdit
              facilityToEdit={this.state.facilityToEdit}
              editOff={this.editOff}
              token={this.props.token}
              fetchFacility={this.fetchFacility}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}

export default FacilityIndex;
