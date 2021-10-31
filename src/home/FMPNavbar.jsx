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
import Auth from "../auth/Auth";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const FMPNavbar = (props) => {
  const loginSignupHide = () => {
    return props.sessionToken === localStorage.getItem("token") ? (
      <Button className="btn-navbar" color="black" onClick={props.clickLogout}>
        Logout
      </Button>
    ) : (
      <Auth updateToken={props.updateToken} />
    );
  };

  // const resourceViews = () => {
  //   return props.sessionToken === localStorage.getItem("token") ? (
  //     <UncontrolledDropdown>
  //       <DropdownToggle caret className="btn-navbar" color="black">
  //         Resources
  //       </DropdownToggle>
  //       <DropdownMenu>
  //         <DropdownItem>
  //           <Link className='btn-dropdown' to="/hotels"> Hotels in your area </Link>
  //         </DropdownItem>
  //         <DropdownItem>
  //           <Link className='btn-dropdown' to="/petcare">Pet Boarding in your area </Link>
  //         </DropdownItem>
  //       </DropdownMenu>
  //     </UncontrolledDropdown>
  //   ) : (
  //     ""
  //   );
  // };

  return (
    <div>
      <Navbar className="ColorTarget" expand="md" dark>
        <NavbarBrand href="/">Food Manager Pro</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Nav>
          <Collapse navbar>
            <NavbarText className="userNameText">Hello, username</NavbarText>
            <Button className="submitBTN" onClick={props.clickLogout}>
              Logout
            </Button>
          </Collapse>
        </Nav>
      </Navbar>
    </div>
  );
};

export default FMPNavbar;
