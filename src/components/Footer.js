import { Row, Col, Image } from 'react-bootstrap';

function Footer() {
  return (
    <div className="footer-box">
      <div className="footer-sitemap">
        <Row className="d-flex justify-content-center">
          <Col xs={6} md={2}>
            <h5>Home</h5>
            <ul className="footer-menu">
              <li className="py-1"><a href="#">About Us</a></li>
              <li className="py-1"><a href="#">FAQ</a></li>
              <li className="py-1"><a href="#">Contact Us</a></li>
            </ul>
          </Col>
          <Col xs={6} md={2}>
            <h5>CPD</h5>
            <ul className="footer-menu">
              <li className="py-1"><a href="#">Online Courses</a></li>
              <li className="py-1"><a href="#">Events</a></li>
              <li className="py-1"><a href="#">Membership</a></li>
            </ul>
          </Col>
          <Col xs={6} md={2}>
            <h5>Join Us</h5>
            <ul className="footer-menu">
              <li className="py-1"><a href="#">Sign Up as Professiona</a></li>
              <li className="py-1"><a href="#">Sign Up as Provider</a></li>
            </ul>
          </Col>
          <Col xs={6} md={2}>
            <h5>Terms & Condition</h5>
            <ul className="footer-menu">
              <li className="py-1"><a href="#">Terms of Use</a></li>
              <li className="py-1"><a href="#">Privacy Policy</a></li>
              <li className="py-1"><a href="#">Fulfillment Policy</a></li>
            </ul>
          </Col>
          <Col xs={12} md={2}>
            <ul className="footer-menu social-media">
              <li className="py-1" style={{whiteSpace: "nowrap"}}>
                <div className="mb-3">
                  <a href="#Facebook"><img src={require('../assets/icons/Facebook.png')}/></a>
                  <a href="#Google" className="px-2"><img src={require('../assets/icons/Google.png')}/></a>
                  <a href="#Twitter"><img src={require('../assets/icons/Twitter.png')}/></a>
                </div>
              Follow us on social media for more updates!
              </li>
            </ul>
          </Col>
        </Row>
      </div>
      <div className="footer-creator">
        <Image src={require('../assets/v0_308.png')} style={{width:"70px"}}/>
        <span className="ps-2"> &copy; 2018 Lorem Ipsum</span>
      </div>
    </div>
  );
}

export default Footer;
