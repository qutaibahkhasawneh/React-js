import React from 'react'
import { NavLink } from 'react-router-dom'; // for active link in navigation
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Single from './Single';
import './nav.css';

function Nav() {
  return (
    <Router>
    <div className="App">

        {/* start */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#"><Link to="/">Movie Api</Link></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                <a className="nav-link" ><NavLink to="/">Home</NavLink></a>
                </li>
                <li className="nav-item">
                <a className="nav-link"> <NavLink to="/about">About Us</NavLink></a>
                </li>
                <li className="nav-item">
                <a className="nav-link "> <NavLink to="/contact">Contact Us</NavLink></a>
                </li>
            </ul>
            
            </div>
        </nav>
        {/* end */}
    <Routes>
            <Route path='/' element={< Home />}></Route>
            <Route path='/about' element={< About />}></Route>
             <Route path='/contact' element={< Contact />}></Route>
            <Route path='/single/:id' element={< Single />}></Route> 
    </Routes>
    </div>
</Router>
  )
}

export default Nav