import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'


function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join Our Newsletter To Get All New News About MCM Phoenix
            </p>
            <p className='footer-subscription-text'>
                Unsubscribe at anytime
            </p>
            <div className='input-areas'>
                <form>
                    <input type='email' name='email' 
                    placeholder='Your Email' className='footer-input' />
                    <button className='footer-btn' >Subscribe</button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2 className='footer-link-items-h2'>About Us</h2>
                    <Link className='footer-link-link' to='/sign-up'>What We Do</Link>
                    <Link className='footer-link-link' to='/'>Community Members</Link>
                    <Link className='footer-link-link' to='/'>Volunteer</Link>
                    <Link className='footer-link-link' to='/'>Mission Statment</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2 className='footer-link-items-h2'>Contact Us</h2>
                    <Link className='footer-link-link' to='/sign-up'>Message Us</Link>
                    <Link className='footer-link-link' to='/'>Email</Link>
                    <Link className='footer-link-link' to='/'>Phone: (602) 306-4959</Link>
                    <Link className='footer-link-link' to='/'>Instagram</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2 className='footer-link-items-h2'>Donate</h2>
                    <Link className='footer-link-link'  to='/sign-up'>Credit Card</Link>
                    <Link className='footer-link-link' to='/'>Zelle</Link>
                    <Link className='footer-link-link' to='/'>Venmo</Link>
                    <Link className='footer-link-link' to='/'>Cash App</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer