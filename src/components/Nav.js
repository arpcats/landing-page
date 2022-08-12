import { Container, Button, Nav, Navbar, Image } from 'react-bootstrap';

function NavMenu() {
  return (
    <Navbar bg="light" expand="lg" style={{height:"70px"}}>
      <Container className="mobile-view" style={{display:"none"}}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Home" active>Home</Nav.Link>
            <Nav.Link href="#Courses">Courses</Nav.Link>
            <Nav.Link href="#Events">Events</Nav.Link>
            <Nav.Link href="#Membership">Membership</Nav.Link>
            <Nav.Link href="#ContactUs">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home">
          <Button variant="outline-primary">Login</Button>
        </Navbar.Brand>
      </Container>

      <Container className="pc-view">
        <Navbar.Brand href="#home">
          <Image src={require('../assets/v0_308.png')} className="img-logo"/>
        </Navbar.Brand>
        <div className="center-nav d-flex justify-content-center">
          <Nav className="me-auto">
            <Nav.Link href="#Home" active>Home</Nav.Link>
            <Nav.Link href="#Courses">Courses</Nav.Link>
            <Nav.Link href="#Events">Events</Nav.Link>
            <Nav.Link href="#Membership">Membership</Nav.Link>
            <Nav.Link href="#ContactUs">Contact Us</Nav.Link>
          </Nav>
        </div>

        <Nav className="box-account">
          <Nav.Link href="#Login">
            <Button variant="outline-primary">Login</Button>
          </Nav.Link>
          <Nav.Link href="#Join">
            <Button variant="primary">Join</Button>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
