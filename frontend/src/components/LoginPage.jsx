import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { Card, Form, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { actions } from '../store/index.js';
import { sendData } from '../api/httpapi.js';
import image from '../assets/images/avatar-2.jpg';
import routes from '../api/routes.js';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [authFailed, setAuthFailed] = useState(false);
  const inputRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values, { setSubmitting }) => {
      console.debug(values);
      setAuthFailed(false);
      setSubmitting(true);

      sendData({
        url: routes.loginPath(),
        body: values,
        onSuccessCb: (resp) => {
          dispatch(actions.setCredentials(resp.data));
          navigate(routes.rootPage());
        },
        onErrorCb: (err) => {
          if (err.response?.status === 401) {
            setAuthFailed(true);
            inputRef.current.focus();
          }
        },
        onFinallyCb: () => {
          setSubmitting(false);
        },
      });
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
                autoComplete="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                placeholder="Ваш ник"
                required
                isInvalid={authFailed}
                ref={inputRef}
              />
              <Form.Label>Ваш ник</Form.Label>
            </Form.Group>
            <Form.Group className="form-floating mb-3">
              <Form.Control
                id="password"
                name="password"
                autoComplete="current-password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Ваш пароль"
                required
                isInvalid={authFailed}
              />
              <Form.Label>Ваш пароль</Form.Label>
              {authFailed && <Form.Control.Feedback type="invalid" tooltip>Неверные имя пользователя или пароль</Form.Control.Feedback>}
            </Form.Group>
            <Button className="w-100 mb-2" variant="outline-secondary" type="submit" disabled={formik.isSubmitting}>Войти</Button>
          </Form>
        </Card.Body>
        <Card.Footer className="p-2">
          <div className="text-center fw-bold">
            <span>Нет аккаунта?</span>
            {' '}
            <Link to={routes.signupPage()}>Регистрация</Link>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default LoginPage;
