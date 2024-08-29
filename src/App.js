  import React from 'react';
  import './App.css';
  import Header from './components/header';
  import { Route, Routes } from 'react-router-dom';
  import Home from './components/home';
  import Portfolio from './components/portfolio';
  import About from './components/about';
  import Resume from './components/resume';
  import Service from './components/service';
  import Footer from './components/footer';

  function App() {
    return (
      <>
        <Header className="header" />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/service' element={<Service />} />
        </Routes>
        <Footer className="footer" />
      </>
    );
  }

  export default App;
