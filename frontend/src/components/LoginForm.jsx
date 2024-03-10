import { useFormik } from 'formik';
import { Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../assets/images/avatar-2.jpg';
import routes from '../api/routes.js';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values, { setSubmitting }) => {
      console.debug(values);
      setSubmitting(false);
    },
  });

  return (
    <div className="container-fluid h-100 d-flex justify-content-center align-content-center">
      <Card className="m-auto shadow-sm mw-100" style={{ width: 550, maxWidth: '100%' }}>
        <Card.Img className="w-50 img-fluid mx-auto d-block rounded-circle mb-2" variant="top" src={image} />
        <Card.Header className="p-2">
          <h1 className="h3 text-center">Войти</h1>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="form-floating mb-2">
              <Form.Control
                id="username"
                name="username"
                required
                autoComplete="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                placeholder="Ваш ник"
              />
              <Form.Label>Ваш ник</Form.Label>
            </Form.Group>
            <Form.Group className="form-floating mb-3">
              <Form.Control
                id="password"
                name="password"
                required
                autoComplete="current-password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Ваш пароль"
              />
              <Form.Label>Ваш пароль</Form.Label>
            </Form.Group>
            <Button className="w-100 mb-2" variant="outline-secondary" type="submit" disabled={formik.isSubmitting}>Войти</Button>
          </Form>
        </Card.Body>
        <Card.Footer className="p-2">
          <div className="text-center fw-bold">
            <span>Нет аккаунта?</span>
            {' '}
            <Link to={routes.signup()}>Регистрация</Link>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default LoginForm;
