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
// import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Servicespage from './Finalpages/Servicespage';
import Prices from './Components/Prices';
import  Contact  from './Components/Contact';
import Profilepage from './Components/Profilepage';
import CheckoutBasic from './Components/CheckoutBasic';
import CheckoutPremium from './Components/CheckoutPremium';
import CheckoutUltimate from './Components/CheckoutUltimate';
import AdminDashboard from './dashboard/AdminDashboard';
import Customers from './dashboard/Customers';
import Leads from './dashboard/Leads';
import Faq from './dashboard/Faq';
import Orders from './dashboard/Orders';
import ScrollToTop from "./Components/ScrollToTop";
import Forgot from './Components/Forgot';
import ManageEmployees from './dashboard/ManageEmployees';
import EmpDashboard from './dashboard/EmpDashboard';
import EmployeeLeads from './dashboard/EmployeeLeads';



// ✅ Inline ProtectedRoute
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

const router = createBrowserRouter([
  // Public site routes
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Hero /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/contact', element: <Contact /> },
      { path: '/servicespage', element: <Servicespage /> },
      {path: '/prices', element: <Prices /> },
      { path: '/about', element: <About /> },
      { path: '/profilepage', element: <Profilepage /> },
      { path: '/checkoutbasic', element: <CheckoutBasic /> },
      { path: '/checkoutpremium', element: <CheckoutPremium /> },
      { path: '/checkoutultimate', element: <CheckoutUltimate /> },
      {path: '/ScrollToTop', element: <ScrollToTop/>},
      {path:'/forgot',element:<Forgot/>},

      {
        path: '/navbar',
        element: (
          <ProtectedRoute>
            <Hero />
          </ProtectedRoute>
        ),
      },
    ],
  },

  // Dashboard routes (separate top-level)
  {
    path: '/dashboard',
    element: <App />, // still uses App so Navbar/Footer hiding applies
    children: [
      { path: 'admindashboard', element: <AdminDashboard /> },
      { path: 'customers', element: <Customers /> },
      { path: 'leads', element: <Leads /> },
      {path: 'faq', element: <Faq /> },
      {path:'allOrders',element:<Orders/>},
    { path: 'manageemployees', element: <ManageEmployees /> }, // ✅ NEW
          { path: 'empdashboard', element: <EmpDashboard /> }, // ✅ Added Employee Dashboard route
          {path : 'employeeleads', element : <EmployeeLeads/>}
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);