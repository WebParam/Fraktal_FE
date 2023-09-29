"use client"
import React, { useState } from 'react';
import Link from 'next/link';
//import './newpassword.scss';
import Image from 'next/image';
import logo from '../../../assets/img/logo.png';
import loginImage from '../../../assets/additional/loginImage.jpg'
import axios from 'axios';

function newPassword() {
  const [password, setPassword] = useState('');
  const [confirmedpassword, setConfirmedPassword] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    
    try {
            const response = await axios.post('http://localhost:8080/api/user/changePassword', {email:"prince@webparam.org", password: confirmedpassword }); // Replace with your actual API endpoint URL
      
            if (response.status === 200 || response.status === 201) {
              // Registration successful, you can redirect the user or show a success message.
              console.log('Registration successful');
              
            } else {
              // Registration failed, handle error (e.g., display error message).
              console.error('Registration failed');
            }``
          } catch (error) {
            // Handle network or other errors
            console.error('Error:', error);
          }
  };



  return (
   <section className="newpassword">
      <div className="top">
      <Image src={logo} alt='logo'/>
        <Link href='/'><i className="bi bi-chevron-left"></i>Go to main</Link>
      </div>

      <div className="newpasswordMain">
        <div className="newpassword-image">
          <h2>MailChimp</h2>
          <p className='desc'>“ It has many landing page variations to choose from, which one is always a big advantage. ”</p>
          <Image src={loginImage} alt="" />
          <h3>Lida Reidy</h3>
          <p>Project Manager | Mailchimp</p>
        </div>

        <div className="newpasswordForm">
          <h2>Change your password</h2>
          <p>it will be used to access your account.</p>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="password">New Password</label>
              <input
                type="password"
                name="password"
                placeholder="8+ characters required"
                value={password}
                onChange={(e: any) => {
                    setPassword(e.target.value);
                  }}
              />
            </div>

            <div>
              <label htmlFor="confirmedpassword">Confirm New Password</label>
              <input
                type="password"
                name="confirmedpassword"
                placeholder="8+ characters required"
                value={confirmedpassword}
                onChange={(e: any) => {
                    setConfirmedPassword(e.target.value);
                  }}
              />
            </div>
            <button type="submit">Change Password</button>
          </form>

        </div>
      </div>
   </section>
  )
}

export default newPassword;
