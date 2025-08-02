import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About';  // Changed from Components to Pages
// import { Contact } from 'lucide-react';

import Contact from './Components/Contact';

function App() {
  return (
    <div >
     <Navbar/>
     <Contact/>
     <About />
    <Footer/>
    
    </div>

  )
}

export default App;