
import './App.css';
import Header from './MYfile/Navbar/Header';
import Home from './MYfile/Home';
import Footer from './MYfile/Footer/Footer2';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Page1 from './MYfile/Page1/Page1';
import Page2 from './MYfile/Page2_about/Page2';
import Page3 from './MYfile/Page3_Services/Page3';
import Page4 from './MYfile/Page4_Expert/Page4';
import Page5 from './MYfile/Page5_contact/Page5';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<Page2 />} />
        <Route path="services" element={<Page3 />} />
        <Route path="expert" element={<Page4 />} />
        <Route path="contact" element={<Page5 />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
