import { Navbar, Container } from "react-bootstrap";

const FMPNavbar = () => {
  return (
    <Navbar variant="dark" bg="dark">
      <Container>
        <Navbar.Brand href="#home">Food Manager Pro</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Signed in as: User</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default FMPNavbar;
