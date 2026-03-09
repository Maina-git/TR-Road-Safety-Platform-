import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



const App = () => {
  return (
     <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <Footer/>
     </Router>
     </>
  );
}

export default App;
