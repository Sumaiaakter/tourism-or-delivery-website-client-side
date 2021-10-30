import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer mt-5 p-5">
            <div className="row">
                <div className="col-md-4">
                    <h2>Best <span className="text-dark">Tour</span></h2>
                    <p>I am passionate and I travel the world not just as a tourist but to understand cultures. I have lived with Masai tribe. I travel the world and bring it back in the form of a research book!!!</p>
                </div>
                <div className="col-md-4">
                    <h2>Contact us</h2>
                    <p>San Francisco, USA</p>
                    <p>Omaha, NE, 34563</p>
                    <p>Tel: 375935374</p>
                    <p>Email: info@besttourever.com</p>
                </div>
                <div className="col-md-4">
                    <h2>Follow us</h2>
                    <p><i class="fab fa-facebook"></i> facebook.com</p>
                    <p><i class="fab fa-twitter-square"></i> twitter.com</p>
                    <p><i class="fab fa-linkedin"></i> linkedin.com</p>


                </div>
            </div>
            <hr />
            <p><span className="text-white">copyright@tourismwebsite-2021</span></p>
        </div>
    );
};

export default Footer;