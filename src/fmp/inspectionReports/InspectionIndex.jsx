import { Component } from "react";
import InspectionTable from "./InspectionTable";
import InspectionEdit from "./InspectionEdit";
import APIURL from "../../helpers/environment";
class InspectionIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inspection: [],
      inspectionEditActive: false,
      inspectionToEdit: {},
      cardOne: "",
      cardTwo: "",
      cardThree: "",
    };
  }

  fetchInspections = () => {
    fetch(`${APIURL}/inspectionreports/`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((inspectionData) => {
        this.setState(
          {
            inspection: inspectionData,
            cardOne: inspectionData.length,
            cardTwo: inspectionData.filter(
              (inspection) => inspection.purpose === "Complaint"
            ).length,
            cardThree: inspectionData.filter(
              (inspection) => inspection.purpose === "Pre-Operational"
            ).length,
          },
          console.log(inspectionData)
        );
      });
  };

  editInspection = (inspection) => {
    this.setState({ inspectionToEdit: inspection });
    console.log(this.state.inspectionToEdit, "from editInspection");
  };

  inspectionEditOn = () => {
    this.setState({ inspectionEditActive: true });
  };

  inspectionEditOff = () => {
    this.setState({ inspectionEditActive: false });
  };

  componentDidMount() {
    this.fetchInspections();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.inspection.length !== this.state.inspection.length) {
      this.setState({
        inspection: this.state.inspection.sort((a, b) => b.id - a.id),
        cardOne: this.state.inspection.length,
        cardTwo: this.state.inspection.filter(
          (inspection) => inspection.purpose === "Complaint"
        ).length,
        cardThree: this.state.inspection.filter(
          (inspection) => inspection.purpose === "Pre-Operational"
        ).length,
      });
    }
  }

  setInspection = (inspection) => {
    this.setState({ inspection: [...this.state.inspection, inspection] });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm">
            <InspectionTable
              inspection={this.state.inspection}
              editInspection={this.editInspection}
              inspectionEditOn={this.inspectionEditOn}
              fetchInspections={this.fetchInspections}
              token={this.props.token}
              setInspection={this.setInspection}
              cardOne={this.state.cardOne}
              cardTwo={this.state.cardTwo}
              cardThree={this.state.cardThree}
            />
          </div>
          {this.state.inspectionEditActive ? (
            <InspectionEdit
              inspectionToEdit={this.state.inspectionToEdit}
              inspectionEditOff={this.inspectionEditOff}
              token={this.props.token}
              fetchInspections={this.fetchInspections}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}

export default InspectionIndex;
