import React from 'react';
import './lab 7/styles/App.css';
import Navbar from './lab 7/components/Navbar.js';
import LandingPage from './lab 7/components/Landingpage.js';
import Footer from './lab 7/components/footer.js';
import Form from './lab 7/components/Form.js';

function App() {
  return (
    <div>
    <Navbar />
    <LandingPage />
    <Form/>
    <Footer/>
    </div>
  );
}
export default App;