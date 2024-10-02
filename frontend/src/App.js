import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
// import Event from './components/Eventlist.js';
import Book from './components/Booking.js';
import Register from './components/Register.js';
import Log from './components/Login.js';
import EventList from './components/Eventlist.js';
import AdminAddEvent from './components/AdminAddEvent';
import Footer from './components/Footer.js';


import logo from './components/DK KD Logo.jpg';
import './App.css';

const isAdmin = true; 

function App() {
  return (
    <Router>
      <div className='navimain'>
        
        <div className="navibar">
          <img className="logo" src={logo} alt="logo" />
          <Link className="home" to="/">HOME</Link>
          
          <Link className="event" to="/events">EVENT LIST</Link>
          <Link className="booking" to="/booking">BOOKING</Link>
          <Link className="login" to="/login">LOGIN</Link>
          {/* <Link className="contact" to="/contact">CONTACT</Link> */}
          {isAdmin && <Link className="admin" to="/admin">ADMIN PAGE</Link>}
        </div>
        {/* <Home/>
        <EventList/>
        <Signup/>
        <Book/>
        <AdminAddEvent/> */}


        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/events" element={<EventList />} />
            <Route path='/signup' element={<Register/>}/>
            
            <Route path="/booking" element={<Book />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/login" element={<Log />} />
            <Route path="/admin" element={<AdminAddEvent />} />
            

            
          </Routes>
          
        </div>
        <div  className='homepage-content'>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
