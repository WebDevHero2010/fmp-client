import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavbarToggler,
  UncontrolledDropdown,
  NavLink,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  NavbarText,
} from "reactstrap";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const FMPNavbar = () => {
  return (
    <div>
      <Navbar className="ColorTarget" expand="md" dark>
        <NavbarBrand href="/">Food Manager Pro</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Username</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default FMPNavbar;
