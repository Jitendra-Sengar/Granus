import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const services = [
  {
    title: 'Web Development',
    description: 'We create custom websites tailored to your business needs, focusing on functionality and user experience.',
    image: '/images/web-development.jpg', // Path to your service image
  },
  {
    title: 'Digital Marketing',
    description: 'Our digital marketing services include SEO, PPC, and social media strategies to help your business grow online.',
    image: '/images/digital-marketing.jpg', // Path to your service image
  },
  {
    title: 'Graphic Design',
    description: 'We offer creative graphic design solutions for branding, advertising, and visual communication.',
    image: '/images/graphic-design.jpg', // Path to your service image
  },
  // Add more services as needed
];

const Services = () => {
  return (
    <div className="section-padding-top">
      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5">
        <Container>
          <h1>Our Services</h1>
          <p>Explore the range of services we offer to help your business succeed.</p>
        </Container>
      </header>

      {/* Services Section */}
      <section id="services" className="py-5">
        <Container>
          <Row>
            {services.map((service, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={service.image} alt={service.title} />
                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>
                      {service.description}
                    </Card.Text>
                    <Button variant="primary">Learn More</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-light py-5">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <h2>Ready to Get Started?</h2>
              <p>Contact us today to discuss your project and see how we can help.</p>
              <Button variant="primary" href="mailto:contact@yourcompany.com">Contact Us</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Services;
