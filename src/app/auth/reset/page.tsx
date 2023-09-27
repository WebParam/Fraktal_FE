"use client"
import Link from 'next/link';
import './reset.scss';
import Image from 'next/image';
import logo from '../../../assets/img/logo.png';
import loginImage from '../../../assets/additional/loginImage.jpg'
import axios from 'axios';
import { useState } from 'react';

function Reset() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
            const response = await axios.post('https://fraktional-web-backend.onrender.com/api/user/sendOTP', { email });
            if (response.status === 200 || response.status === 201) {
              console.log(email);
              console.log('OTP sent successful');
              
            } else {
              // Registration failed, handle error (e.g., display error message).
              console.error('OTP failed');
            }
          } catch (error) {
            // Handle network or other errors
            console.error('Error:', error);
          }
  };


  return (
   <section className="reset">
      <div className="top">
        <Image src={logo} alt='logo'/>
        <Link href='/'><h3><i className="bi bi-chevron-left"></i>Go to main</h3></Link>
      </div>

      <div className="resetMain">
        <div className="reset-image">
          <h2>MailChimp</h2>
          <p className='desc'>“ It has many landing page variations to choose from, which one is always a big advantage. ”</p>
          <Image src={loginImage} alt="" />
          <h3>Lida Reidy</h3>
          <p>Project Manager | Mailchimp</p>
        </div>

        <div className="resetForm">
          <h2>Forgot password?</h2>
          <p>Enter your email address below and we'll get you back on track.</p>

          <form >
            <div>
              <label htmlFor="email">
                <span>Your email</span>
                <span className='cta'><Link href='/auth/login'><i className="bi bi-chevron-left"></i>Back to Log in</Link></span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email@site.com"
                value={email}
                onChange={(e: any) => {
                  setEmail(e.target.value);
                  console.log(email);
                }} 
                />
              </div>
            <button onClick={handleSubmit}>Submit</button>
          </form>

          <p>Don't have an account yet? <span className='cta'><Link href="/auth/register">Sign up here</Link></span></p>
        </div>
      </div>
   </section>
  )
}

export default Reset;
