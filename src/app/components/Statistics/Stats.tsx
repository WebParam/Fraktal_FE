'use client'
import './stats.scss';
import Image from 'next/image';
import { ReactElement } from 'react';

const Statistics = (): ReactElement => {
    return (
        <section className='stats'>
            <div>
                <h2><i className="bi bi-arrow-down" style={{color: "#ed4c78"}}></i>40%</h2>
                <p>Reduced Hiring Time</p>
            </div>
            <div>
                <h2><i className="bi bi-arrow-up" style={{color: "rgb(0,201,167)"}}></i>23%</h2>
                <p>Client Satisfaction Rate</p>
            </div>
            <div>
            <h2><i className="bi bi-arrow-up" style={{color: "rgb(0,201,167)"}}></i>9.3%</h2>
            <p>Over 1,500 Vetted Engineers</p>              
            </div>
        </section>
    );
}

export default Statistics;