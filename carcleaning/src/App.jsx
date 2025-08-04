// import logo from './logo.svg';
// import './App.css';
// import Navbar from './Components/Navbar';
// import Login from './Components/Login';
// import Register from './Components/Register';
// import { Outlet } from 'react-router-dom';
// import Footer from './Components/Footer';

// function App() {
//   return (
//     <div>

//  <Outlet/>
//  <Footer/>
//     </div>
//   );
// }

// export default App;





// App.jsx
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  // Hide navbar and footer on these routes
  const hideNavbar = ['/login', '/register', '/admin-dashboard'].includes(location.pathname);
  const hideFooter = ['/login', '/register'].includes(location.pathname); // already working, just an FYI

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <Outlet />
      {!hideFooter && <Footer />}
    </div>
  );
}

export default App;