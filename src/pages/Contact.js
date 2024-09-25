import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'
import toast from 'react-hot-toast';
const Contact = () => {
  const [name, setName]=useState("");
  const [email, setEmail]=useState("");
  const [message, setMessage]=useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    const data={
      Name:name,
      Email:email,
      Message:message
    }
    axios.post('https://sheet.best/api/sheets/6178fe90-ac4d-4251-9eb4-3e3fc138e8d2',data).then((res)=>{
      console.log(res);
      toast.success("Your data submitted successfully")
      // Clearing form fields
      setName('');
      setEmail('');
      setMessage('');
    })
  }

  return (
    <div className="section-padding-top">
      {/* Hero Section */}
      <header className="bg-primary text-white text-center py-5">
        <Container>
          <h1>Contact Us</h1>
          <p>We’d love to hear from you. Get in touch with us today!</p>
        </Container>
      </header>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-5">
        <Container>
          <Row>
            <Col md={6}>
              <h2>Get in Touch</h2>
              <Form onSubmit={handleSubmit} >
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name"  onChange={(e)=>setName(e.target.value)} value={name}/>
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} value={email} />
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Your message" onChange={(e)=>setMessage(e.target.value)} value={message}/>
                </Form.Group>
                <Button variant="primary" type="submit" >
                  Send Message
                </Button>
              </Form>
            </Col>
            <Col md={6}>
              <Card>
                <Card.Body>
                  <h3>Contact Information</h3>
                  <p><strong>Email:</strong> <Link to="mailto:granus8171@gamil.com">granus8171@gmail.com</Link></p>
                  <p><strong>Phone:</strong> +918171627776</p>
                  <p><strong>Address:</strong> H-NO. 153 Mahadev Street<br />
                  Komari, Hathras, UP 202139</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section */}
      <section id="map" className="py-5">
  <Container>
    <Row>
      <Col md={12}>
        <h2>Find Us</h2>
        <div className="map-responsive">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!4v1727222147404!6m8!1m7!1s2kaduF_MIlrCD-AFHhkSSQ!2m2!1d27.7255377525744!2d78.16119546629804!3f20.366844246481648!4f-7.704338191167039!5f0.4000000000000002" 
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </Col>
    </Row>
  </Container>
</section>

    </div>
  );
}

export default Contact;
