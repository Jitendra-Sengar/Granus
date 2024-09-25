import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const About = () => {
  return (
    <div className="section-padding-top">
      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5">
        <Container>
          <h1>About Us</h1>
          <p>Discover our story, mission, and the team behind our success.</p>
        </Container>
      </header>

      {/* Company Overview */}
      <section id="overview" className="py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h2>Our Story</h2>
              <p>
                Founded in 2019, Granus has been a leading business in the agricultural sector, committed to providing exceptional service to the farmers and the industrial buyers. Our journey began with a vision to innovate and excel, and we have continually evolved to meet the needs of our clients.
              </p>
              <p>
                Our team of dedicated professionals works tirelessly to deliver high-quality solutions that drive success. We believe in fostering strong relationships with our clients and are driven by a passion for excellence.
              </p>
            </Col>
            <Col md={6}>
              <Image src="" alt="Our Team" fluid />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission Statement */}
      <section id="mission" className="bg-light py-5">
        <Container>
          <Row>
            <Col md={12}>
              <h2>Our Mission</h2>
              <p>
                Our mission is to lead the industry with innovative solutions and outstanding customer service. We are dedicated to making a positive impact through our work and building lasting partnerships based on trust and integrity.
              </p>
              <Button variant="primary">Learn More</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section id="team" className="py-5">
        <Container>
          <Row>
            <Col md={12}>
              <h2>Meet Our Team</h2>
            </Col>
            <Col md={4} className="mb-4">
              <Image src="" alt="CEO" roundedCircle fluid />
              <h4>Jitendra Sengar</h4>
              <p>CEO & Founder</p>
            </Col>
            {/* Add more team members here */}
            <Col md={4} className="mb-4">
              <Image src="" alt="Team Member" roundedCircle fluid />
              <h4>Raj Kumar</h4>
              <p>Chief Operating Officer</p>
            </Col>
            <Col md={4} className="mb-4">
              <Image src="" alt="Team Member" roundedCircle fluid />
              <h4>Deepu Daksha</h4>
              <p>Head of Marketing</p>
            </Col>
            <Col md={4} className="mb-4">
              <Image src="" alt="Team Member" roundedCircle fluid />
              <h4>Lokesh Prajapati</h4>
              <p>Muneem Ji</p>
            </Col>
            <Col md={4} className="mb-4">
              <Image src="" alt="Team Member" roundedCircle fluid />
              <h4>Gopal Srivastav</h4>
              <p>Labourer</p>
            </Col>
            <Col md={4} className="mb-4">
              <Image src="" alt="Team Member" roundedCircle fluid />
              <h4>Dharamveer</h4>
              <p>Labourer</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-light py-5">
        <Container>
          <Row>
            <Col md={12}>
              <h2>Contact Us</h2>
              <p>If you have any questions or would like to get in touch, please reach out to us:</p>
              <p>Email: <Link to="mailto:granus8171@gmail.com">granus8171@gmail.com</Link></p>
              <p>Phone: +918171627776</p>
              
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default About;
