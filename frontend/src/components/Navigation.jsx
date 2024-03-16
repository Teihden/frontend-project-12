import { Container, Navbar } from 'react-bootstrap';

const Nav = () => (
  <Navbar className="shadow-sm" bg="white" expand="lg" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="/">Hexlet Chat</Navbar.Brand>
    </Container>
  </Navbar>
);

export default Nav;
