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

import Hero from './Components/Hero';
import About from './Components/About';
import  Contact  from './Components/Contact';
import AdminDashboard from './Components/AdminDashboard';



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
      {path: '/contact', element: <Contact />},
      {path: '/about', element: <About />},
      {path:'/admin-dashboard', element:<AdminDashboard/>},
  
    
      {
        path: '/navbar',
        element: (
          <ProtectedRoute>
            <Hero/>
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