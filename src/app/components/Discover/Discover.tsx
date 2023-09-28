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
                    <Image src={img1} alt='card image' />
                    <p>READ THE BLOG</p>
                    <h2>Have a meaningful impact</h2>
                    <p>Opportunities to Front who have proven to be good at executing on them.</p>
                </div>
                <div className="card">
                    <Image src={img2} alt='card image' />
                    <p>READ THE BLOG</p>
                    <h2>Documentation</h2>
                    <p>Whether you're a startup or a global enterprise, learn how to  intergrate with a front.</p>
                </div>
                <div className="card">
                    <Image src={img3} alt='card image' />
                    <p>LEARN ABOUT OTHER SOLUTION</p>
                    <h2>Explore the snippets tool</h2>
                    <p>Quickly Front sample components, copy-paste codes.</p>
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