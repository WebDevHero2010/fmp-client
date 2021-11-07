import { Component } from "react";
class AdminDashIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container" style={{ paddingTop: "30px" }}>
        <div className="jumbotron">
          <h1 className="display-4">Food Manager Pro</h1>
          <p className="lead">
            Foods Division managment platform for health officers to manage
            local facilities and inspections
          </p>
          <hr className="my-4" />
          <p></p>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashIndex;
