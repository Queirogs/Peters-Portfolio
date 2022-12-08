import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Design from './pages/Design';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div class="bg-project-white">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Design />} />
          <Route path="/design" element={<Design />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
