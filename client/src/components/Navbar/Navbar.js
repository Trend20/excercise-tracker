import React from 'react';
import { Link} from 'react-router-dom'
import { navInfo } from '../../data/navInfo';
import './Navbar.css';

function Navbar() {
  return( 
    <div className='navigation'>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src="/img/logo.svg" alt="logo" />
        </Link>
          <ul className="nav-container">
            {
              navInfo.map((info) =>{
                return(
                  <li key={info.id}>
                    <Link to={info.link}>{info.text}</Link>
                  </li>
                )
              })
            }
            <li>
              <Link>Get Started</Link>
            </li>
          </ul>
      </nav>
    </div>
  );
}

export default Navbar;
