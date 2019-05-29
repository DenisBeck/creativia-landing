import React from 'react';
import './App.css';

import Header from './sections/Header/Header';
import About from './sections/About/About';
import Portfolio from './sections/Portfolio/Portfolio';
import Clients from './sections/Clients/Clients';
import Team from './sections/Team/Team';
import Blog from './sections/Blog/Blog';
import Contacts from './sections/Contacts/Contacts';
import Footer from './sections/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Portfolio />
      <Clients />
      <Team />
      <Blog />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
