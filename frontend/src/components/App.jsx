import '../assets/styles/styles.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NotFoundPage from './NotFoundPage.jsx';
import ChatPage from './ChatPage.jsx';
import LoginPage from './LoginPage.jsx';
import Navigation from './Navigation.jsx';
import routes from '../api/routes.js';

const App = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <div className="vh-100 d-flex flex-column">
        <Navigation />
        <Routes>
          <Route path={routes.anyPage()} element={<NotFoundPage />} />
          <Route
            path={routes.rootPage()}
            element={auth?.token
              ? <ChatPage />
              : <Navigate to={routes.loginPage()} />}
          />
          <Route path={routes.loginPage()} element={<LoginPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
