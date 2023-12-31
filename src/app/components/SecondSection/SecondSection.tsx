'use client'
import { ReactElement } from 'react';
import Image from 'next/image';
import './SecondSection.scss';

import check from '../../../assets/additional/check.svg';
import rightarrow from '../../../assets/additional/rightArrow.svg';
import img1 from '../../../assets/img/480x220/img1.jpg';
import img2 from '../../../assets/img/480x220/img2.jpg';
import img3 from '../../../assets/img/480x220/img3.jpg';

const SecondSection = (): ReactElement => {
    return (
        <section className="secondSection">
            <h2>Learn to develop sites with components and design systems</h2>
            <div className="top-container">
                <div>
                    <Image src={check} alt='checkmark' width={20} height={20}/>
                    Asynchronous collaboration
                </div>
                <div>
                    <Image src={check} alt='checkmark' width={20} height={20}/>
                    Updates and announcements 
                </div>
                <div>
                    <Image src={check} alt='checkmark' width={20} height={20}/>
                    Training and team building
                </div>
            </div>
            <div className="card-container">
                <div className="card">
                    <Image src={img1} alt='card image' />
                    <h2>front App</h2>
                    <p>Front App is an easier way to search on Android.</p>
                    <div>
                        <div><Image src={rightarrow} alt='right arrow'/>Advanced Analytics</div>
                        <div><Image src={rightarrow} alt='right arrow'/>Digital Marketing</div>
                        <div><Image src={rightarrow} alt='right arrow'/>Organisation</div>
                    </div>
                    <div className='more'>
                        Learn more <Image src={rightarrow} alt='right arrow'/>
                    </div>
                </div>
                <div className="card">
                    <Image src={img2} alt='card image' />
                    <h2>Front Chat</h2>
                    <p>Front Chat is a new way to communicate with your team.</p>
                    <div>
                        <div><Image src={rightarrow} alt='right arrow'/>Cost Transformation</div>
                        <div><Image src={rightarrow} alt='right arrow'/>Customer Experience</div>
                        <div><Image src={rightarrow} alt='right arrow'/>Mergers and Acquisitions</div>                    
                    </div>
                    <div className='more'>
                        Learn more <Image src={rightarrow} alt='right arrow'/>
                    </div>
                </div>
                <div className="card">
                    <Image src={img3} alt='card image' />
                    <h2>Front Calendar</h2>
                    <p>Discover an easier way to manage contacts.</p>
                    <div>
                        <div><Image src={rightarrow} alt='right arrow'/>Enterprise Technology</div>
                        <div><Image src={rightarrow} alt='right arrow'/>Private Equity</div>
                        <div><Image src={rightarrow} alt='right arrow'/>Sustainability</div>                      
                    </div>
                    <div className='more'>
                        Learn more <Image src={rightarrow} alt='right arrow'/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SecondSection;