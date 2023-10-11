'use client'
import { ReactElement } from 'react';
import Image from 'next/image';
import './discover.scss';

import check from '../../../assets/additional/check.svg';
import rightarrow from '../../../assets/additional/rightArrow.svg';
import img1 from '../../../assets/img/480x220/img1.jpg';
import img2 from '../../../assets/img/480x220/img2.jpg';
import img3 from '../../../assets/img/480x220/img3.jpg';
import Link from 'next/link';

const Discover = (): ReactElement => {
    return (
        <section className="discover">
            <h2>Discover more</h2>
            <div className="card-container">
            <div className="card">
                    <Image src={img3} alt='card image' />
                    <p>LEARN ABOUT OTHER SOLUTION</p>
                    <h2>Expert Matching:</h2>
                    <p>Connect companies with top-tier developers tailored to project needs.</p>
                </div>
                <div className="card">
                    <Image src={img1} alt='card image' />
                    <p>READ THE BLOG</p>
                    <h2>Streamlined Process:</h2>
                    <p>Simplify tech resourcing through our efficient, user-friendly platform.</p>
                </div>
                <div className="card">
                    <Image src={img2} alt='card image' />
                    <p>READ THE BLOG</p>
                    <h2>Flexible Engagements:</h2>
                    <p>Offer adaptable commitments, from fractional to full project involvement.</p>
                </div>
                
            </div>
            <div className="readmore">
                <p>Want to read more? </p>
                <Link href=''>Go here <i className="bi bi-chevron-right"></i></Link>
            </div>
        </section>
    );
}

export default Discover;