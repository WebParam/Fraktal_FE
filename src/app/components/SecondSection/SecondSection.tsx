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
            <h2>Expertise Across Domains: Transforming Tech, Data, and Intelligence</h2>
            <div className="top-container">
                <div>
                    <Image src={check} alt='checkmark' width={20} height={20} />
                    Innovate. Implement. Inspire.
                </div>
                <div>
                    <Image src={check} alt='checkmark' width={20} height={20}/>
                    Analyze. Architect. Advance
                </div>
                <div>
                    <Image src={check} alt='checkmark' width={20} height={20}/>
                    Discover. Decode. Dominate.
                </div>
            </div>
            <div className="card-container">
                <div className="card">
                    <div className='topPart'>
                        <Image src={img1} alt='card image' />
                        <h2>Software Developers:</h2>
                        <p>Building dynamic applications across platforms for optimal user experiences.</p>
                    </div>
                    <div>
                        <div><Image src={rightarrow} alt='right arrow'/><p>Full-Stack Developer</p></div>
                        <div><Image src={rightarrow} alt='right arrow'/><p>Mobile Developer</p></div>
                        <div><Image src={rightarrow} alt='right arrow'/><p>QA Testor</p></div>
                    </div>
                    <div className='more'>
                        Learn more <Image src={rightarrow} alt='right arrow'/>
                    </div>
                </div>
                <div className="card">
                    <div className='topPart'>
                        <Image src={img2} alt='card image' />
                        <h2>Data Engineering:</h2>
                        <p>Crafting robust data infrastructures to drive informed business decisions.</p>
                    </div>
                    <div>
                        <div><Image src={rightarrow} alt='right arrow'/><p>Big Data Specialist</p></div>
                        <div><Image src={rightarrow} alt='right arrow'/><p>Cloud Specialist</p></div>
                        <div><Image src={rightarrow} alt='right arrow'/><p>Data Analysts</p></div>                    
                    </div>
                    <div className='more'>
                        Learn more <Image src={rightarrow} alt='right arrow'/>
                    </div>
                </div>
                <div className="card">
                    <div className='topPart'>
                        <Image src={img3} alt='card image' />
                        <h2>AI/ML Engineers:</h2>
                        <p>Designing intelligent systems that learn, adapt, and predict outcomes.</p>
                    </div>
                    <div>
                        <div><Image src={rightarrow} alt='right arrow'/><p>Machine Learning specialist</p></div>
                        <div><Image src={rightarrow} alt='right arrow'/><p>Natural Language Processing</p></div>
                        <div><Image src={rightarrow} alt='right arrow'/><p>Predictive Analytics</p></div>                      
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