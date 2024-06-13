import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import React from 'react';
import './index.css';

import RegisterScreen from './Screens/RegisterScreen.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';
import ProfileScreen from './Screens/ProfileScreen.jsx';
import LoginScreen from './Screens/LoginScreen.jsx';
import HomeScreen from './Screens/HomeScreen.jsx';
import store from './store.js';
import App from './App.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='/register' element={<RegisterScreen />} />
      {/* Privates Routes */}
      <Route path='' element={<PrivateRoute />}>
        <Route path='/profile' element={<ProfileScreen />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
