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
          <ul className="nav-container">
            <li className="item">
              <Link to="/" className="link">Exercises</Link>
            </li>
            <li className="item">
              <Link to="/create" className="link">Create Exercise</Link>
            </li>
            <li className="item">
              <Link to="/user" className="link">Create User</Link>
            </li>
          </ul>
      </nav>
    </div>
  );
}

export default Navbar;
