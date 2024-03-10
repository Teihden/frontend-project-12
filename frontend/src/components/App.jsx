import '../assets/styles/styles.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from './NotFoundPage.jsx';
import LoginForm from './LoginForm.jsx';
import routes from '../api/routes.js';
import Navigation from './Navigation.jsx';

const App = () => (
  <BrowserRouter>
    <div className="vh-100 d-flex flex-column">
      <Navigation />
      <Routes>
        <Route path={routes.any()} element={<NotFoundPage />} />
        <Route path={routes.root()} element={<LoginForm />} />
        <Route path={routes.login()} element={<LoginForm />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
