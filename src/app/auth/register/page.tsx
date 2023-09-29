'use client'
import React, { useState } from 'react';
import './Register.scss';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../assets/img/logo.png';
import loginImage from '../../../assets/additional/loginImage.jpg';
import axios from 'axios';

function Register() {
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formData, setFormData] = useState({
    title: 'mr', // Default title
    firstName: '',
    surname: '',
    email: '',
    mobileNumber: '',
    role: '',
    password: '',
    confirmPassword: '',
    
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(formData)

    if (formData.password !== confirmPassword) {
        console.log('password do not')
      return;
    }

    try {
            const response = await axios.post('https://fraktional-web-backend.onrender.com/api/users', formData); // Replace with your actual API endpoint URL
      
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
      console.log(formData);
  };

  return (
    <section className="register">
      <div className="top">
        <Image src={logo} alt="logo" />
        <h3>
          <Link href="/">
            <i className="bi bi-chevron-left"></i>Go to main
          </Link>
        </h3>
      </div>

      <div className="registerMain">
        <div className="register-image">
          <h2>MailChimp</h2>
          <p className="desc">
            “ It has many landing page variations to choose from, which one is
            always a big advantage. ”
          </p>
          <Image src={loginImage} alt="" />
          <h3>Lida Reidy</h3>
          <p>Project Manager | Mailchimp</p>
        </div>

        <div className="registerForm">
          <h2>FRAKTIONAL</h2>
          <p>Fill out the form to get started.</p>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Title</label>
              <select
                name="title"
                value={formData.title}
                onChange={handleChange}
              >
                <option value="mr">Mr</option>
                <option value="mrs">Mrs</option>
                <option value="miss">Miss</option>
              </select>
            </div>

            <div>
              <label htmlFor="firstName">Your Firstname</label>
              <input
                type="text"
                name="firstName"
                placeholder="FirstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="surname">Your Lastname</label>
              <input
                type="text"
                name="surname"
                placeholder="surname"
                value={formData.surname}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="email@site.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="role">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                  <option >select role</option>
                <option value="developer">developer</option>
                <option value="company">company</option>
              </select>
            </div>

            <div>
              <label htmlFor="mobileNumber">Your Number</label>
              <input
                type="tel"
                name="mobileNumber"
                placeholder="number"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="8+ characters required"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword">Confirm password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="8+ characters required"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value)
                }}
              />
            </div>

            <button type="submit">Register</button>
          </form>

          <p>
            Already have an account?{' '}
            <span className="cta">
              <Link href="/auth/login">Sign in here</Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Register;
