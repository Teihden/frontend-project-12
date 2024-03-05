import { Container, Navbar, Image } from 'react-bootstrap';
import image from '../assets/images/404.svg';

const NotFoundPage = () => (
  <div className="h-100">
    <div className="h-100" id="chat">
      <div className="d-flex flex-column h-100">
        <Navbar className="shadow-sm" bg="light" expand="lg" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="/">Hexlet Chat</Navbar.Brand>
          </Container>
        </Navbar>
        <div className="text-center h-75">
          <div style={{ height: 300 }}>
            <Image className="mh-100" src={image} fluid />
          </div>
          <h1 className="h4 text-muted">Страница не найдена</h1>
          <p className="text-muted">
            <span>Но вы можете перейти</span>
            {' '}
            <a href="/">на главную страницу</a>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
