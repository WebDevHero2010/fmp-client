import { Container } from "reactstrap";
import { Component } from "react";

class AdminDashIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <br />
        <h1 className="adminDashH1">Administrator Dashboard</h1>
      </Container>
    );
  }
}

export default AdminDashIndex;
