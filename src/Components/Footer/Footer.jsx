import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Devansh Agrawal</h1>

            <ul className="footer_list">
                <li>
                    <a href="#" className="footer_link">About</a>
                </li>
                <li>
                    <a href="#" className="footer_link">Portfolio</a>
                </li>
                <li>
                    <a href="#" className="footer_link">Services</a>
                </li>
            </ul>

            <div className="footer_social">
                <a href="#" target="_blank"  className="footer_social-link"><i className="bx bxl-instagram"></i></a>
                <a href="#" target="_blank"  className="footer_social-link"><i className="bx bxl-facebook"></i></a>
                <a href="#" target="_blank"  className="footer_social-link"><i className="bx bxl-linkedin"></i></a>
                <a href="#" target="_blank"  className="footer_social-link"><i className="bx bxl-github"></i></a>
            </div>

            <span className='footer_copy'>&#169; Devansh Agrawal. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer