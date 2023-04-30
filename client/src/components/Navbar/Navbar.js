import React from 'react';
import { Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { navInfo } from '../../data/navInfo';
import './Navbar.css';

function Navbar() {
  const { isLoggedIn } = useSelector((state) => state.user);
  return( 
    <div className='navigation'>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src="/img/logo.svg" alt="logo" />
        </Link>
        {
          isLoggedIn ? 
          (<ul className="nav-container">
            {
              navInfo.map((info) =>{
                return(
                  <li key={info.id}>
                    <Link to={info.link}>{info.text}</Link>
                  </li>
                )
              })
            }
          </ul>)
          :
         ( <ul className='nav-container'>
            <li>
              <Link to="/auth" style={{ textDecoration:'none' }}>Get Started</Link>
            </li>
          </ul>)
        }
      </nav>
    </div>
  );
}

export default Navbar;
