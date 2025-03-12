import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Blog from './pages/Blog';
import Upcoming_Classes from './pages/Upcoming_Classes';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
};

const MainRoutes = () => {
  const location = useLocation();
  const noNavbarRoutes = ['/login', '/sing-up'];

  return (
    <>
      {!noNavbarRoutes.includes(location.pathname) && <Layout />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/upcoming-classes" element={<Upcoming_Classes />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/sing-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
