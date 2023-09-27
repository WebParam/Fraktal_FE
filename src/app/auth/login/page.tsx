"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import './Signin.scss';
import Image from 'next/image';
import logo from '../../../assets/img/logo.png';
import loginImage from '../../../assets/additional/loginImage.jpg'
import axios from 'axios';

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData; // Destructure the values for easier access

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
            const response = await axios.post('https://fraktional-web-backend.onrender.com/api/login', formData); // Replace with your actual API endpoint URL
      
            if (response.status === 200 || response.status === 201) {
              // Registration successful, you can redirect the user or show a success message.
              console.log('Registration successful');
              
            } else {
              // Registration failed, handle error (e.g., display error message).
              console.error('Registration failed');
            }
          } catch (error) {
            // Handle network or other errors
            console.error('Error:', error);
          }
  };

  return (
   <section className="signin">
      <div className="top">
      <Image src={logo} alt='logo'/>
        <Link href='/'><i className="bi bi-chevron-left"></i>Go to main</Link>
      </div>

      <div className="signinMain">
        <div className="login-image">
          <h2>MailChimp</h2>
          <p className='desc'>“ It has many landing page variations to choose from, which one is always a big advantage. ”</p>
          <Image src={loginImage} alt="" />
          <h3>Lida Reidy</h3>
          <p>Project Manager | Mailchimp</p>
        </div>

        <div className="signinForm">
          <h2>Welcome back</h2>
          <p>Login to manage your account.</p>

          <form action="" method="get" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="email@site.com"
                value={email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="password">
                <span>password</span>
                <span className='cta'><Link href='/auth/reset'>Forgot Password</Link></span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="8+ characters required"
                value={password}
                onChange={handleChange}
              />
            </div>

            <button type="submit">Log In</button>
          </form>

          <p>Don't have an account yet? <span className='cta'><Link href="/auth/register">Sign up here</Link></span></p>
        </div>
      </div>
   </section>
  )
}

export default SignIn;
