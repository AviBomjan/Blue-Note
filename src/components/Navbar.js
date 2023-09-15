import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';  
import { Button } from './SignInButton';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    }
    else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton()
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>

          {/* Logo */}
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Blue Note&nbsp;
            <FontAwesomeIcon icon={faPlaneDeparture} style={{color: "#89cff0",}} />
          </Link>
          
          {/* Hamburger Menu */}
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          
          {/* When an item on hamburger menu is clicked, should close the menu */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {/* Home Link */}
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            {/* Hong Kong */}
            <li className='nav-item'>
              <Link to='/Hong_Kong' className='nav-links' onClick={closeMobileMenu}>
                Hong Kong
              </Link>
            </li>
            {/* Thailand */}
            <li className='nav-item'>
              <Link to='/Thailand' className='nav-links' onClick={closeMobileMenu}>
                Thailand
              </Link>
            </li>
            
            {/* Sign Up */}
            <li className='nav-item'>
              <Link to='/Sign-In' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign In
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar

