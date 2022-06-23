import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Allposts from './componets/AllPosts';

function App() {

  return (
    <BrowserRouter>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand to="/">React App with Router</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">BlogPosts</Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>




    <Routes>
        <Route path="/" exact element={<Allposts />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;