import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FMPFooter from "./home/FMPFooter";
import FMPNavbar from "./home/FMPNavbar";
import FMPHeader from "./home/FMPHeader";
import "./App.css";

function App() {
  return (
    <Container fluid="true" className="App">
      <FMPNavbar />
      <FMPFooter />
      <FMPHeader />
    </Container>
  );
}

export default App;
