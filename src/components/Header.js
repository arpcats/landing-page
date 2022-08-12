import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function Header() {
  return (
    <div className="header-bg">
      <Container className="py-5">
        <Row>
          <Col xs={12} md={6}>
            <div className="box-info">
            <h1>Your All-in-one CPD Solution</h1>
            <p>laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <Button variant="primary">View All Courses</Button>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="box-form">
              <h2>Join us for free</h2>
              <Form>
                <Form.Group className="mb-3 frm-group" controlId="firstname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter first name" />
                </Form.Group>

                <Form.Group className="mb-3 frm-group" controlId="lastname">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter last name" />
                </Form.Group>

                <Form.Group className="mb-3 frm-group" controlId="email">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3 frm-group" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="text" placeholder="Enter 8 to 10 characters" />
                  <span className="pwd-eye"><img src={require('../assets/eye-solid.png')} alt="icon" /></span>
                </Form.Group>

                <Form.Group className="mb-3 text-remark frm-group" controlId="terms">
                  <Form.Text className="text-muted">
                    By signing up, you agree to our <span>Terms of Use</span> and <span>Privacy Policy</span>
                   </Form.Text>
                 </Form.Group>

                <div className="btn-box">
                  <Button variant="outline-primary" type="submit">Join as Professional</Button>
                  <Button variant="primary" type="submit">Join as CPD Provider</Button>
                </div>

                <div className="text-center text-muted my-2 frm-group">
                  or create an acount using
                </div>

                <div className="btn-box frm-group">
                  <Button variant="primary" type="submit" style={{background:"#475993"}}>
                  <img src={ require('../assets/fb.png') } alt="Facebook"/> Facebook
                  </Button>
                  <Button variant="primary" type="submit">
                    <img src={ require('../assets/google.png') } alt="Google" style={{background:"#307ACF"}} /> Google
                  </Button>
                </div>

              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
