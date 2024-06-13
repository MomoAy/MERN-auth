import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import Header from './Components/Header';

const App = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Container className="py-2">
        <Outlet />
      </Container>
    </>
  )
}

export default App;
