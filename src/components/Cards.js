import React from 'react'
import Card from 'react-bootstrap/Card';
const Cards = (props) => {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imgurl}  width={50} height={150}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
    </Card>
    </>
  )
}

export default Cards
