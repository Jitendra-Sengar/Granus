import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';


const Navheader = () => {

  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded); 
  };

  const handleSelect = () => {
    setExpanded(false); 
  };

  return (
    <>
    <Navbar  fixed='top' expanded={expanded} onToggle={handleToggle} expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Granus</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" onSelect={handleSelect}>
            <Nav.Link as={Link} to="/" onClick={handleSelect}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleSelect}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/services" onClick={handleSelect}>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleSelect}>
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs" onClick={handleSelect}>
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navheader
