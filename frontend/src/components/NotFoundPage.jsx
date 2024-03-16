import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../assets/images/404.svg';
import routes from '../api/routes';

const NotFoundPage = () => (
  <div className="text-center h-75">
    <div style={{ height: 300 }}>
      <Image className="mh-100" src={image} fluid />
    </div>
    <h1 className="h4 text-muted">Страница не найдена</h1>
    <p className="text-muted">
      <span>Но вы можете перейти</span>
      {' '}
      <Link to={routes.rootPage()}>на главную страницу</Link>
    </p>
  </div>
);

export default NotFoundPage;
