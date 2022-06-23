import React from 'react'
import { Button, Card } from 'react-bootstrap'
/* import one from '../assets/1.jpg'; */

const Post = (props) => {
  return (
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Blog Posts List</Card.Title>
    <Card.Text>
      Blog Posts. 
    </Card.Text>
    <Button variant="primary">Go next</Button>
  </Card.Body>
</Card>
  )
}

export default Post;
