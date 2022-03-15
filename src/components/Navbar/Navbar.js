import React from 'react';
import { Link} from 'react-router-dom'
import './Navbar.css';

function Navbar() {
  return( 
    <div className='navigation'>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src="/img/logo.svg" alt="logo" />
        </Link>
        <div className="collapse navbar-collapse">
        <ul className="nav-container">
          <li className="item">
          <Link to="/" className="link">Exercises</Link>
          </li>
          <li className="item">
          <Link to="/create" className="link">Create Exercise Log</Link>
          </li>
          <li className="item">
          <Link to="/user" className="link">Create User</Link>
          </li>
        </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
