import Card from 'react-bootstrap/Card'
import React from 'react'

function Cards (props) {
  return (
    <Card className="mb-3">
    <Card.Body>
      <Card.Img variant="top" src={props.src} />
      <Card.Text className="pt-2">
        {props.text}
      </Card.Text>
    </Card.Body>
  </Card>

  )
}
export default Cards
