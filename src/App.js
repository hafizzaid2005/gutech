
import './App.css';
import Greeting from './component/zaid';
import content from "./component/header";
import Header from './component/header';
import Content from './component/content';
import React from 'react';
import Footer from './component/footer';

function App() {
  return (
    <div>
      <Header />
      <Greeting />
      <Content />
      <Footer />
    </div>
  );
}

export default App;


