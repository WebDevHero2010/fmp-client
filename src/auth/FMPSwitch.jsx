import { Component } from "react";
import FacilityIndex from "../fmp/facility/FacilityIndex";
import InspectionIndex from "../fmp/inspectionReports/InspectionIndex";
import AdminDashIndex from "../fmp/adminDash/AdminDashIndex";
import { Switch, Route } from "react-router-dom";

class FMPSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/inspectionmanager"
            exact
            component={() => <InspectionIndex token={this.props.token} />}
          />
          <Route
            path="/admin"
            exact
            component={() => <AdminDashIndex token={this.props.token} />}
          />
          <Route exact path="/">
            {" "}
            <FacilityIndex token={this.props.token} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default FMPSwitch;
