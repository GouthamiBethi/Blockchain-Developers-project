
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { AboutPage } from './pages/About';
import './index.css'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  )
  
}

export default App