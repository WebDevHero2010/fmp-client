import { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Button,
  NavbarText,
  Nav,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // Link
} from "reactstrap";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
class FMPNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  loginOptionToggle = () => {
    return this.props.sessionToken === localStorage.getItem("token") ? (
      <div>
        <NavbarText className="userNameText">Hello, Username</NavbarText>
        <Button className="submitBTN" onClick={this.props.clickLogout}>
          Logout
        </Button>
      </div>
    ) : (
      ""
    );
  };
  render() {
    return (
      <div>
        <Navbar className="ColorTarget" expand="md" dark>
          <NavbarBrand href="/">Food Manager Pro</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Nav>
            <Collapse navbar>{this.loginOptionToggle()}</Collapse>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default FMPNavbar;

// const FMPNavbar = (props) => {
//   console.log(props.clickLogout);
//   const loginOptionToggle = () => {
//     return props.sessionToken === localStorage.getItem("token") ? (
//       <div>
//         <NavbarText className="userNameText">Hello, Username</NavbarText>
//         <Button className="submitBTN" onClick={props.clickLogout}>
//           Logout
//         </Button>
//       </div>
//     ) : (
//       ""
//     );
//   };

//   return (
//     <div>
//       <Navbar className="ColorTarget" expand="md" dark>
//         <NavbarBrand href="/">Food Manager Pro</NavbarBrand>
//         <NavbarToggler onClick={function noRefCheck() {}} />
//         <Nav>
//           <Collapse navbar>{loginOptionToggle()}</Collapse>
//         </Nav>
//       </Navbar>
//     </div>
//   );
// };

// export default FMPNavbar;
