import { Component } from "react";
import FacilityIndex from "../fmp/facility/FacilityIndex";
import InspectionIndex from "../fmp/inspectionReports/InspectionIndex";
import AdminDashIndex from "../fmp/adminDash/AdminDashIndex";
import { BrowserRouter as Switch, Route } from "react-router-dom";

class FMPSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/InspectionManager" exact component={InspectionIndex} />
          <Route path="/admin" exact component={AdminDashIndex} />
          <Route exact path="/">
            {" "}
            <FacilityIndex token={this.props.token} />
            {/* {console.log(this.props.token)} */}
          </Route>
        </Switch>
      </div>
    );
  }
}

export default FMPSwitch;
