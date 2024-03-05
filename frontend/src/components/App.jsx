import '../assets/styles/styles.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from './NotFoundPage.jsx';

const App = () => (
  <BrowserRouter>
    <Routes>
      {/* <Route path={['/', '/login']} element={<AuthForm />} /> */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
