import { Component } from "react";
import APIURL from "../../helpers/environment";
class AdminDashIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      adminCardOne: "",
      adminCardTwo: "",
      adminCardThree: "",
    };
  }

  componentDidMount() {
    this.fetchUsers();
    this.userMapper();
  }

  fetchUsers = () => {
    fetch(`${APIURL}/user/userlist`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((userListData) => {
        this.setState({
          userList: userListData,
          adminCardOne: userListData.length,
          adminCardTwo: userListData.filter((user) => user.role === "admin")
            .length,
          adminCardThree: userListData.filter((user) => user.role === "user")
            .length,
        });
      });
  };

  userMapper = () => {
    return this.state.userList.map((user, index) => {
      return (
        <tr key={index}>
          <th>{user.id}</th>
          <td>{user.email}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.role}</td>
        </tr>
      );
    });
  };
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
              <div className="card-header d-flex justify-content-center">
                <h5>Registered Users</h5>
              </div>
              <div className="card-body">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h1 className="d-flex justify-content-center row">
                        {this.state.adminCardOne}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card text-white bg-info mb-3"
              style={{ maxWidth: "25rem" }}
            >
              <div className="card-header d-flex justify-content-center">
                <h5> Admin User Count</h5>
              </div>
              <div className="card-body">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h1 className="d-flex justify-content-center row">
                        {this.state.adminCardTwo}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card text-white bg-warning mb-3"
              style={{ maxWidth: "25rem" }}
            >
              <div className="card-header d-flex justify-content-center">
                <h5>Standard User Count</h5>
              </div>
              <div className="card-body">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <h1 className="d-flex justify-content-center row">
                        {this.state.adminCardThree}
                      </h1>
                    </div>
                  </div>
                </div>
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
        <div>
          <div className="d-flex justify-content-center">
            <h3>Current User List</h3>
          </div>
          <div className="table-responsive">
            <table
              className="table table-striped table-hover .table-sm"
              id="userTable"
            >
              <thead className="thead-dark">
                <tr>
                  <th scope={"col"}>UserID#</th>
                  <th scope={"col"}>Email:</th>
                  <th scope={"col"}>First Name:</th>
                  <th scope={"col"}>Last Name:</th>
                  <th scope={"col"}>Role:</th>
                </tr>
              </thead>
              <tbody>{this.userMapper()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashIndex;
