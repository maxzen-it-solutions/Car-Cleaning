
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import App from './App';
import Login from './Components/Login';
import Register from './Components/Register';
import Navbar from './Components/Navbar';

// ✅ Inline ProtectedRoute
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Navigate to="/login" /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },

      // ✅ Protected Route for Navbar
      {
        path: '/navbar',
        element: (
          <ProtectedRoute>
            <Navbar />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
