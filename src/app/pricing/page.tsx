'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import './pricing.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
import checkmark from '../../assets/additional/check.svg';
import dots from '../../assets/additional/dots.svg';
import Header from '../components/Header/Header';
import MobileMenu from '../components/MobileMenu/MobileMenu';

import amazon from '../../assets/svg/brands/amazon-dark.svg';
import kaplan from '../../assets/svg/brands/kaplan-dark.svg';
import google from '../../assets/svg/brands/google-dark.svg';
import airbnb from '../../assets/svg/brands/airbnb-dark.svg';
import shopify from '../../assets/svg/brands/shopify-dark.svg';
import vidados from '../../assets/svg/brands/vidados-dark.svg';
import capsule from '../../assets/svg/brands/capsule-dark.svg';
import forbes from '../../assets/svg/brands/forbes-dark.svg';
import businesinsider from '../../assets/svg/brands/business-insider-dark.svg';
import hubspot from '../../assets/svg/brands/hubspot-dark.svg';
import layar from '../../assets/svg/brands/layar-dark.svg';

function pricing() {
    const [menuToggler, setMenuToggler] = useState<boolean>(false);

    const removeMenu = () => {
        setMenuToggler(prev => false);
      }


    return (
    <>
    <Header 
        menuTogglerFunction={setMenuToggler} 
        menuTogglerValue={menuToggler}  
      />

      <MobileMenu removeMenu={removeMenu} menuToggler={menuToggler} />
        <section className='pricing'>
            <h2>Find the right plan for your site</h2>
                <div className="monthlyORanually">
                    <div className='downarrow'>
                        <svg className="form-switch-promotion-arrow downarrow" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 99.3 57" width="48">
                        <path fill="none" stroke="#bdc5d1" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" d="M2,39.5l7.7,14.8c0.4,0.7,1.3,0.9,2,0.4L27.9,42"></path>
                        <path fill="none" stroke="#bdc5d1" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" d="M11,54.3c0,0,10.3-65.2,86.3-50"></path>
                        </svg> 
                        <p>save up to 10%</p>
                    </div>
                    
                    <div className='mon-An'>
                        <p>Monthly</p>
                        <div className="input">
                            <input type="checkbox" name="" id="" />
                        </div>
                    <p>Annually</p>
                    </div>
            </div>

            <div className="pricesContainer">
                <div className="card">
                    <h2><span className='dollar'>$</span>19 <span className='mo'>/mo</span></h2>
                    <h3>Proffesional</h3>
                    <p>All the basics for starting a new business</p>

                    <ul>
                        <li><Image src={checkmark} alt='checkmark' /> 1 user</li>
                        <li><Image src={checkmark} alt='checkmark' />FrakTional plan features</li>
                        <li><Image src={checkmark} alt='checkmark' />1 app</li>
                    </ul>

                    <h4>Try free for 30 days</h4>
                    <p>No card required</p>
                </div>

                <div className="card active">
                    <h2><span className='dollar'>$</span>39 <span className='mo'>/mo</span></h2>
                    <h3>Team</h3>
                    <p>Everything you need for a growing a business</p>

                    <ul>
                        <li><Image src={checkmark} alt='checkmark' />3 user</li>
                        <li><Image src={checkmark} alt='checkmark' />FrakTional plan features</li>
                        <li><Image src={checkmark} alt='checkmark' />3 app</li>
                        <li><Image src={checkmark} alt='checkmark' />Product suport</li>
                    </ul>

                    <h4>Try free for 30 days</h4>
                    <p>No card required</p>
                </div>

                <div className="card">
                    <h2><span className='dollar'>$</span>59 <span className='mo'>/mo</span></h2>
                    <h3>Enterprise</h3>
                    <p>Advanced features for scaling your business</p>

                    <ul>
                        <li><Image src={checkmark} alt='checkmark' />unlimited user</li>
                        <li><Image src={checkmark} alt='checkmark' />FrakTional plan features</li>
                        <li><Image src={checkmark} alt='checkmark' />Unlimited app</li>
                        <li><Image src={checkmark} alt='checkmark' />Product support</li>
                    </ul>

                    <h4>Try free for 30 days</h4>
                    <p>No card required</p>
                </div>
            </div>
            <div className="dots">
                <Image src={dots} alt='dots image' />
            </div>

            <div className="gohere">
                <p>Prefer to start with the trial version? <Link href=''>Go here</Link></p>
            </div>

            <div className="companylogos">
                <h2>Trusted by Open Source, enterprise, and more than 33,000 of you</h2>
                <div className="logos">
                    <Image src={amazon} alt='logo' />
                    <Image src={kaplan} alt='logo' />
                    <Image src={google} alt='logo' />
                    <Image src={airbnb} alt='logo' />
                    <Image src={shopify} alt='logo' />
                    <Image src={vidados} alt='logo' />
                    <Image src={capsule} alt='logo' />
                    <Image src={forbes} alt='logo' />
                    <Image src={businesinsider} alt='logo' />
                    <Image src={hubspot} alt='logo' />
                    <Image src={layar} alt='logo' />
                </div>
            </div>
        </section>
    </>
    );
}

export default pricing;