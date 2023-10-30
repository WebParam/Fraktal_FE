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
                <p><i className="bi bi-telephone-inbound-fill" style={{color: "white"}}></i> (010) 346 5261</p>
                <p><i className="bi bi-envelope-fill" style={{color: "white"}}></i> accounts@fraktional.dev</p>
            </div>

                <div>
                    <h2><a href="/">Home</a></h2>
                    <p><a href="/about">About</a></p>
                    <p><a href="/fraktional-gig">Gigs</a></p>
                    <p><a href="/fraktional-dev">Devs</a></p>
                    <p>Customers</p>
                    <p><a href='/fraktional-dev'>Hire Us</a></p>
                </div>

                <div>
                    <h2>Features</h2>
                    <p>Press</p>
                    <p>Release Notes</p>
                    <p>Integrations</p>
                    <p>Customers</p>
                    <p><a href='/pricing'>Pricing</a></p>
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
                    <p><i className="bi bi-person-circle"></i><a href='/applicant-profile'>Your Account</a></p>
                </div>
        </footer>
    );
}

export default Footer;