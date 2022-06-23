import React from 'react'
import Post from './Posts'
import { Col, Container, Row } from 'react-bootstrap'
import PostForm from './PostForm'

const [post,setPost] = useState([]);

useEffect(()=>{
  getAllPosts()
},[])


function getAllPosts(){
  axios.get('http://localhost:8080/posts')
  .then(response=>{
     setDepartments(response.data)
  })
  .catch(error=>{
      console.log(error)
  })
}

let postList =null;

postList= posts.map(post=>
<div key ={post.post_id}>
   <Post post= {post}/>
</div>)

const addPost = (post) =>{
  post.push(post);
  console.log(posts);
}
  return (
    <>
    <h1>AllPosts:</h1>
    <Container>
    <Row>
      <Col>{postList}</Col>
      <Col><PostForm submitHandler = {addPost} /></Col>
    </Row>
</Container>
    </>
  )  
}

export default Allposts