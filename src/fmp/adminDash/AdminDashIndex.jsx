import { Component } from "react";
class AdminDashIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-fluid" style={{ paddingTop: "30px" }}>
        <div className="jumbotron">
          <h1 className="display-4">Food Manager Pro</h1>
          <p className="lead">
            Foods Division managment platform for health officers to manage
            local facilities and inspections
          </p>
          <hr className="my-4" />
          <div className="card-deck d-flex justify-content-between">
            <div
              className="card text-white bg-success mb-3"
              style={{ maxWidth: "25rem" }}
            >
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Primary card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div
              className="card text-white bg-warning mb-3"
              style={{ maxWidth: "25rem" }}
            >
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Primary card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div
              className="card text-white bg-primary mb-3"
              style={{ maxWidth: "25rem" }}
            >
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Primary card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div
              className="card text-white bg-danger mb-3"
              style={{ maxWidth: "25rem" }}
            >
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Primary card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <h3 className="d-flex justify-content-center">
            See below for Resources
          </h3>
          <div className="accordion" id="accordionExample">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Laws Rules and Regulations
                  </button>
                </h2>
              </div>
              <div
                id="collapseOne"
                className="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <a
                    href="https://www.in.gov/health/food-protection/laws-rules-and-regulations/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to learn more
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Certification of Food Handler Requirements
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <a
                    href="https://www.in.gov/health/food-protection/retail-information/certification-of-food-handler-requirements/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to learn more
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Food Protection Division
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <a
                    href="https://www.in.gov/health/food-protection/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click here to learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashIndex;
