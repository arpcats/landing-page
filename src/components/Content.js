import React, { useEffect } from 'react';
import { Container, Carousel, Row, Col, Button, Form, Nav, Card, ListGroup}  from 'react-bootstrap';
import * as bootstrap from 'bootstrap';

/*Sample Images*/
const courses = [
  require("../assets/popular-courses-0.png"),
  require("../assets/popular-courses-1.png"),
  require("../assets/popular-courses-2.png"),
  require("../assets/popular-courses-3.png"),
  require("../assets/popular-courses-0.png"),
  require("../assets/popular-courses-1.png"),
  require("../assets/popular-courses-2.png"),
  require("../assets/popular-courses-3.png")
];

const carouselSlide = () => {
  let cardCarousel = document.querySelector("#cardCarousel");
  if (window.matchMedia("(min-width: 768px)").matches) {
    new bootstrap.Carousel(cardCarousel, {
      interval: false,
    });

    var carouselWidth = document.querySelector("#cardCarousel .carousel-inner").scrollWidth;
    var cardWidth = document.querySelector("#cardCarousel .carousel-item").offsetWidth;
    var scrollPosition = 0;

    var carouselInner = document.querySelector("#cardCarousel .carousel-inner");
    var next = document.querySelector("#cardCarousel .carousel-control-next");
    var prev = document.querySelector("#cardCarousel .carousel-control-prev");

    next.addEventListener("click", function(){
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        carouselInner.scrollLeft += cardWidth;
      }
    });

    prev.addEventListener("click", function(){
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        carouselInner.scrollLeft -= cardWidth;
      }
    });
  }
}

function Content() {

  useEffect(() => {
    carouselSlide();
   }, []);

  return (
    <>
      <Container className="courses">
        <h2 className="title">Popular Courses</h2>
        <div className="select-courses">
          <Form.Select size="lg">
            <option>All Courses</option>
          </Form.Select>
        </div>
        {/* Content Navigation */}
        <Nav variant="pills" className="justify-content-center nav-list" defaultActiveKey="/Agriculture">
          <Nav.Item>
            <Nav.Link href="/Agriculture">Agriculture</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Architecture</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Criminilogy</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">Medicine</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-4">Midwifery</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-5">Nursing</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-6">Veterinary Medicine</Nav.Link>
          </Nav.Item>
        </Nav>

        {/*All Popular Courses*/}
          <Carousel id="cardCarousel" className="my-5" slide={false}>
            {Array.from(courses).map((img, idx) => (
            <Carousel.Item key={idx}>
                <Card className="card-courses">
                  <Card.Body>
                  <Card.Img variant="top"  className="p-2 " src={img} />
                    <Card.Title>Lastest Updates in Small Animal Cardiology Practice</Card.Title>
                    <Card.Text>
                      <span  className="card-price">Php 750.00</span>
                      <span className="float-end card-rating">
                        <img src={require('../assets/star.png')} alt="icon-star" /> 2458
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
            </Carousel.Item>
            ))}
          </Carousel>
        <div className="text-center my-5">
          <Button variant="outline-primary" type="submit">View all courses</Button>
        </div>
      </Container>

      {/*Banner Thumbnail Event*/}
      <div className="event">
        <Container fluid="md">
          <h2 className="title">Events</h2>
          <p className="subTitle">Join Upcoing CPD Accredited Training, Events and Seminars</p>
          <Row className="mt-5">
            <Col md="6">
              <div className="card mb-3 p-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={require('../assets/v0_126.png')} className="img-fluid event-image" alt="Thumbnail"/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body pt-0 pb-0">
                      <h5 className="card-title">Lorem Ipsum Set Dolor</h5>
                      <p className="card-text mb-2"><small className="text-muted">Jan 27, 2022</small></p>
                      <p className="card-text">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil iure reprehenderit qui in ea voluptate velit esse quam nihil...</p>
                      <p className="card-text btn-see-more"><small>See more</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6">
              <div className="card mb-3 p-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={require('../assets/v0_133.png')} className="img-fluid event-image" alt="Thumbnail"/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body pt-0 pb-0">
                      <h5 className="card-title">Lorem Ipsum Set Dolor</h5>
                      <p className="card-text mb-2"><small className="text-muted">Jan 27, 2022</small></p>
                      <p className="card-text">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil iure reprehenderit qui in ea voluptate velit esse quam nihil...</p>
                      <p className="card-text btn-see-more"><small>See more</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6">
              <div className="card mb-3 p-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={require('../assets/v0_141.png')} className="img-fluid event-image" alt="Thumbnail"/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body pt-0 pb-0">
                      <h5 className="card-title">Lorem Ipsum Set Dolor</h5>
                      <p className="card-text mb-2"><small className="text-muted">Jan 27, 2022</small></p>
                      <p className="card-text">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil iure reprehenderit qui in ea voluptate velit esse quam nihil...</p>
                      <p className="card-text btn-see-more"><small>See more</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6">
              <div className="card mb-3 p-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={require('../assets/v0_148.png')} className="img-fluid event-image" alt="Thumbnail"/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body pt-0 pb-0">
                      <h5 className="card-title">Lorem Ipsum Set Dolor</h5>
                      <p className="card-text mb-2"><small className="text-muted">Jan 27, 2022</small></p>
                      <p className="card-text">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil iure reprehenderit qui in ea voluptate velit esse quam nihil...</p>
                      <p className="card-text btn-see-more"><small>See more</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <div className="text-center my-5">
            <Button variant="outline-light" type="submit">View all courses</Button>
          </div>
        </Container>
      </div>

      {/*Membership*/}
      <Container className="membership">
        <h2 className="title">Memberships</h2>
        <p className="subTitle">Join Accredited Professional Organizations in your field</p>
        <Row className="g-3">
          <Col md="6">
            <Card className="bg-dark text-white">
              <Card.Img className="border border-0" src={require('../assets/v0_163.png')} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>ARCPP Membership Renewal for Registered Nurse</Card.Title>
                <Card.Text>Php 750.00</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md="6">
            <Card className="bg-dark text-white mb-3">
              <Card.Img className="border border-0" src={require('../assets/v0_172.png')} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>ARCPP Membership Renewal for Registered Nurse</Card.Title>
                <Card.Text>Php 750.00</Card.Text>
              </Card.ImgOverlay>
            </Card>

            <Card className="bg-dark text-white mt-3">
              <Card.Img className="border border-0"  src={require('../assets/v0_179.png')} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>ARCPP Membership Renewal for Registered Nurse</Card.Title>
                <Card.Text>Php 750.00</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>

      {/*Counter*/}
      <div className="average">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col xs={6} md={2}>
              <div className="numbers">
                <p>05</p>
                <span>National Organizations</span>
              </div>
            </Col>
            <Col xs={6} md={2}>
              <div className="numbers">
                <p>27</p>
                <span>Board Professions</span>
              </div>
            </Col>
            <Col xs={6} md={2}>
              <div className="numbers">
                <p>1.5K+</p>
                <span>Signed-up Professionals</span>
              </div>
            </Col>
            <Col xs={6} md={2}>
              <div className="numbers">
                <p>20</p>
                <span>Sectoral Organizatons</span>
              </div>
            </Col>
            <Col xs={6} md={2}>
              <div className="numbers">
                <p>P71.4</p>
                <span>Average Price per Unit</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/*Contact Form*/}
      <Container className="my-5 contact-form">
        <Row>
          <Col md="5">
            <h2>Get In Touch</h2>
            <ListGroup variant="flush" className="me-5 pe-5">
              <ListGroup.Item>
                <p className="mt-3 mb-2" style={{color:"#FE5F06"}}>Phones</p>
                <p>+63 02 500 6230</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p className="mt-3 mb-2" style={{color:"#FE5F06"}}>E-mails</p>
                <p>support@icpdgateway.ph</p>
              </ListGroup.Item>
              <ListGroup.Item>
                <p className="mt-3 mb-2" style={{color:"#FE5F06"}}>Address</p>
                <p>Lorem Ipsum Street, Manila PH</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md="7">
            <h2>Contact  Form</h2>
            <Form className="mt-4">
              <Row>
                <Col xs={12} md={6}>
                  <div className="py-2">
                    <Form.Control placeholder="Full Name" />
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="py-2">
                    <Form.Control placeholder="Contact Number" />
                  </div>
                </Col>
                <Col md={12}>
                  <div className="py-2">
                  <Form.Control as="textarea" rows={6}  placeholder="Your Message" />
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="py-2">
                    <Form.Control placeholder="Email address" />
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="d-grid gap-2 py-2">
                    <Button variant="primary" type="submit">Send Message</Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Content;
