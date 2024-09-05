import React from 'react'
import { Card } from 'react-bootstrap'
import Placeholder from 'react-bootstrap/Placeholder';
function PlaceholderComp() {
  return (
    <Card style={{ width: '18rem' }}>
    <div style={{width:"100%",height:200,background:"gray"}}/>
    <Card.Body>
      <Placeholder as={Card.Title} animation="glow">
        <Placeholder xs={6} />
      </Placeholder>
      <Placeholder as={Card.Text} animation="glow">
        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
        <Placeholder xs={6} /> <Placeholder xs={8} />
      </Placeholder>
      <Placeholder.Button variant="primary" xs={6} />
    </Card.Body>
  </Card>

  )
}

export default PlaceholderComp