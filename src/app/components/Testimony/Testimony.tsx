'use client'
import './Testimony.scss';
import Image from 'next/image';
import { ReactElement } from 'react';
import testimonyImage from '../../../assets/additional/testimonyImage.jpg';
import testimonyAvatar from '../../../assets/additional/testimonyAvatar.jpg';

const Testimony = (): ReactElement => {
    return (
        <section className="testimony">
            <div className='testimony-image'>
                <Image src={testimonyImage} alt='testimony image' />
            </div>
            <div className='testimony-texts'>
                <h2>MailChimp</h2>
                <p>
                    {
                    `" I'm absolutely floored by the 
                    level of care and attention to 
                    detail the team at Htmlstream 
                    have put into this theme and 
                    for one can guarantee that I 
                    will be a return customer. "`
                    }
                </p>
                <div>
                    <Image src={testimonyAvatar} alt='profile' />
                    <div>
                        <h2>Lewis</h2>
                        <p>Senior Director of Operations at Mailchimp</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimony;