'use client'
import './Footer.scss';
import { ReactElement } from 'react';
import Image from 'next/image';

import koala from '../../../assets/additional/koala.png';


const Footer = (): ReactElement => {
    return (
        <footer className="footer">
            <div>
                <div>
                    <Image src={koala} alt='koala'/>
                    <h2>FRAKTIONAL.DEV</h2>
                </div>
                <p><i className="bi bi-geo-alt-fill" style={{color: "white"}}></i> 70 7th Ave Rosebank</p>
                <p><i className="bi bi-telephone-inbound-fill" style={{color: "white"}}></i> 075 173 9986</p>
                <p><i className="bi bi-envelope-fill" style={{color: "white"}}></i> support@webparam.org</p>
            </div>

                <div>
                    <h2>Company</h2>
                    <p>About</p>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>Customers</p>
                    <p>Hire Us</p>
                </div>

                <div>
                    <h2>Features</h2>
                    <p>Press</p>
                    <p>Release Notes</p>
                    <p>Integrations</p>
                    <p>Customers</p>
                    <p>Pricing</p>
                </div>

                <div>
                    <h2>Documentaion</h2>
                    <p>Support</p>
                    <p>Docs</p>
                    <p>Status</p>
                    <p>API Reference</p>
                    <p>Tech Requirements</p>
                </div>
                
                <div>
                    <h2>Resources</h2>
                    <p><i className="bi bi-question-circle-fill"></i>Help</p>
                    <p><i className="bi bi-person-circle"></i>Your Account</p>
                </div>
        </footer>
    );
}

export default Footer;