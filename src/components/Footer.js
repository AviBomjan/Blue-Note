import React from 'react';
import { Button } from './FooterButton';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';  

function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Join the Adventure newsletter to receive our best vacation deals
            </p>
            <p className="footer-subscription-text">
                You can unsubscribe at any time.
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/Sign_Up'>How it works</Link>
                    <Link to='/Hong_Kong'>Hong Kong</Link>
                    <Link to='/Thailand'>Thailand</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Contact Us</h2>
                    <Link to='/Sign_Up'>How it works</Link>
                    <Link to='/Hong_Kong'>Hong Kong</Link>
                    <Link to='/Thailand'>Thailand</Link>
                </div>
            </div>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>Video</h2>
                    <Link to='/Sign_Up'>How it works</Link>
                    <Link to='/Hong_Kong'>Hong Kong</Link>
                    <Link to='/Thailand'>Thailand</Link>
                </div> 

                <div className="footer-link-items">
                    <h2>Social Media</h2>
                    <Link to='/Sign_Up'>How it works</Link>
                    <Link to='/Hong_Kong'>Hong Kong</Link>
                    <Link to='/Thailand'>Thailand</Link>
                </div>
            </div>
            
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to='/' className="social-logo">
                        Blue Note&nbsp;
                        <FontAwesomeIcon icon={faPlaneDeparture} style={{color: "#89cff0",}} />
                    </Link>
                </div>
                <small className="website-rights">Blue Note © 2023</small>
                <div className="social-icons">
                    <Link className="social-icon-link facebook" to="/" target="_blank" aria-label="Facebook"><i className="fab fa-facebook-f" />
                    </Link>
                    <Link className="social-icon-link instagram" to="/" target="_blank" aria-label="Instagram"><i className="fab fa-instagram" />
                    </Link>
                    <Link className="social-icon-link youtube" to="/" target="_blank" aria-label="Youtube"><i className="fab fa-youtube" />
                    </Link>
                    <Link className="social-icon-link twitter" to="/" target="_blank" aria-label="Twitter"><i className="fab fa-twitter" />
                    </Link>
                    <Link className="social-icon-link linkedin" to="/" target="_blank" aria-label="LinkedIn"><i className="fab fa-linkedin" /></Link>
                </div>
                
            </div>  
        </section>
    </div>
  )
}

export default Footer;