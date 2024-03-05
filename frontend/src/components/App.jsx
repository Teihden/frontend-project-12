import '../assets/styles/styles.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound.jsx';

const App = () => (
  <BrowserRouter>
    <Routes>
      {/* <Route path={['/', '/login']} element={<AuthForm />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
