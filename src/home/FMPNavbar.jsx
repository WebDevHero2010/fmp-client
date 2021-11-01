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
// import Auth from "../auth/Auth";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const FMPNavbar = (props) => {
  const loginOptionToggle = () => {
    return props.sessionToken === localStorage.getItem("token") ? (
      <div>
        <NavbarText className="userNameText">Hello, Username</NavbarText>
        <Button className="submitBTN" onClick={props.clickLogout}>
          Logout
        </Button>
      </div>
    ) : (
      ""
    );
  };

  return (
    <div>
      <Navbar className="ColorTarget" expand="md" dark>
        <NavbarBrand href="/">Food Manager Pro</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Nav>
          <Collapse navbar>{loginOptionToggle()}</Collapse>
        </Nav>
      </Navbar>
    </div>
  );
};

export default FMPNavbar;
