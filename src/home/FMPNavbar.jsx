import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Button,
} from "reactstrap";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const FMPNavbar = (props) => {
  return (
    <div>
      <Navbar className="ColorTarget" expand="md" dark>
        <NavbarBrand href="/">Food Manager Pro</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Button className="submitBTN" onClick={props.clickLogout}>
            Logout
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default FMPNavbar;
