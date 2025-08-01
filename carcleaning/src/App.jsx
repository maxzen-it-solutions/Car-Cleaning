import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Register';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>

 <Outlet/>
    </div>
  );
}

export default App;
