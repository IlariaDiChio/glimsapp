import React, {useState} from 'react'
import {Form,Button} from 'react-bootstrap';


const PostForm = (props) =>{

const [postNickName, setPostNickName] = useState('');
const [post, setPost] = useState('');

const addPost = (e)=> {
    e.preventDefault();
    let post ={
        "Post_id":6,
        "post_Nickname":postNickName,
        "post_text":post
    }
    console.log(post);
    props.submitHandler(post);
}


return (
    <Form onSubmit={addPost}>
    <Form.Group className="mb-3" controlId="formPostNickName">
      <Form.Label>Post NickName</Form.Label>
      <Form.Control type="text" placeholder="Enter your nickname" value={postNickName}
        onChange ={event=>setPostNickName(event.target.value)}/>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formPost">
      <Form.Label>Post</Form.Label>
      <Form.Control type="text" placeholder="Type your post" value={post}
        onChange ={event=>setPost(event.target.value)}/>
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
)
}

export default PostForm