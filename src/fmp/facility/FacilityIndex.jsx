import { Component } from "react";
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
        // console.log(facilityData, "fetchfrom Index");
        // console.log(this.state.facility);
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.facility.length !== this.state.facility.length) {
      this.setState({
        facility: this.state.facility.sort((a, b) => b.id - a.id),
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
            />
          </div>
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
        </div>
      </div>
    );
  }
}

export default FacilityIndex;
