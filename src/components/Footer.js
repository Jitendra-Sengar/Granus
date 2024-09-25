import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <Container>
        <Row>
        <Col md={3} className="mb-4 text-center">
            <Image 
              src="/logo.png" 
              alt="Company Logo" 
              fluid 
              style={{ maxWidth: '150px' }} 
            />
          </Col>
          {/* About Section */}
          <Col md={3} className="mb-4">
            <h5>About Us</h5>
            <p>
              We are a leading business offering top-notch service to the farmers by buying their agricultural raw material directly from their homes and also supply this goods to the industrial buyers. Our mission is to deliver excellence in every project we undertake.
            </p>
          </Col>

          {/* Links Section */}
          <Col md={3} className="mb-4">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" style={{ textDecoration: 'none' }}> Home</Link></li>
              <li><Link to="/about" style={{ textDecoration: 'none' }}> About Us</Link></li>
              <li><Link to="/services" style={{ textDecoration: 'none' }}> Services</Link></li>
              <li><Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link></li>
              <li><Link to="/blogs" style={{ textDecoration: 'none' }}> Blogs</Link></li>
            </ul>
          </Col>

          {/* Contact Section */}
          <Col md={3} className="mb-4">
            <h5>Contact Us</h5>
            <p>
              H-NO. 153 Mahadev Street<br />
              Komari, Hathras, UP 202139
            </p>
            <p>Email: granus8171@gmail.com</p>
            <p>Phone: +8171627776</p>
            {/* Social Media Icons */}
            <div className="mt-3">
              <a href="https://www.facebook.com" className="text-light me-3">
                <FaFacebookF />
              </a>
              <a href="https://www.twitter.com" className="text-light me-3">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com" className="text-light me-3">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com" className="text-light">
                <FaLinkedin />
              </a>
            </div>
          </Col>
          
        </Row>
        <Row className="pt-3 border-top border-secondary">
          <Col className="text-center">
            <p>&copy; 2024 Granus All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

