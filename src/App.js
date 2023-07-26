import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Header from './components/layout/Header';
import Courses from './components/courses/Courses';
import Footer from './components/layout/Footer';
import Login from './components/auth/Login';

function App() {
  return (
    <Router>
      <Header />
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
