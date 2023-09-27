'use client'
import './stats.scss';
import Image from 'next/image';
import { ReactElement } from 'react';

const Statistics = (): ReactElement => {
    return (
        <section className='stats'>
            <div>
                <h2><i className="bi bi-arrow-down" style={{color: "#ed4c78"}}></i>47%</h2>
                <p>fewer meetings across organizations</p>
            </div>
            <div>
                <h2><i className="bi bi-arrow-up" style={{color: "rgb(0,201,167)"}}></i>23%</h2>
                <p>increase in traffic on webpages with Looms</p>
            </div>
            <div>
            <h2><i className="bi bi-arrow-up" style={{color: "rgb(0,201,167)"}}></i>9.3%</h2>
            <p>boost in reply rates across sales outreach</p>              
            </div>
        </section>
    );
}

export default Statistics;