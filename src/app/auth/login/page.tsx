"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import './Signin.scss';
import Image from 'next/image';
import logo from '../../../assets/img/logo.png';
import loginImage from '../../../assets/additional/loginImage.jpg'
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

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
    if(!email || !password){

      if(!email){
        setEmailError(true)
      }

      if(!password){
        setPasswordError(true)
      }

    }

    if(!email || !password){
      return;
    }


    let _id = toast.loading("Logging in..", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    try {

 
    

      
            const response = await axios.post('https://fraktional-web-backend.onrender.com/api/login', formData); // Replace with your actual API endpoint URL
      
            if (response.status === 200 || response.status === 201) {
              // Registration successful, you can redirect the user or show a success message.
      toast.update(_id, {
        render: "Logged in successfully",
        type: "success",
        isLoading: false,
      });
      setTimeout(() => {
       // setDisable(false)
        toast.dismiss(_id);
      }, 2000);
              
            } else {
               toast.update(_id, {
          render: "error logging in..",
          type: "error",
          isLoading: false,
        });
        setTimeout(() => {
         // setDisable(false)
          toast.dismiss(_id);
        }, 2000);
            }
          } catch (error) {
              toast.update(_id, {
          render: "error logging in..",
          type: "error",
          isLoading: false,
        });
        setTimeout(() => {
         // setDisable(false)
          toast.dismiss(_id);
        }, 2000);
            console.error('Error:', error);
          }
  };

  
  const inputPasswordStyle = {
    ...(passwordError && {
      outlineStyle: "solid",
     color: "tomato",
      borderWidth: "1px",
    }),
  };
  const inputEmailStyle = {
    ...(emailError && {
      outlineStyle: "solid",
     color: "tomato",
      borderWidth: "1px",
    }),
  };

  return (
   <section className="signin">
          <ToastContainer />
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
               style={inputEmailStyle}

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
              style={inputPasswordStyle}

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
