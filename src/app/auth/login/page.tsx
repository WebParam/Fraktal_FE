"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./Signin.scss";
import Image from "next/image";
import logo from "../../../assets/additional/logo.png";
import loginImage from "../../../assets/additional/loginImage.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserLogin } from "@/app/endpoints/api";
import { IUserLogin } from "@/app/interfaces/user";
import Cookies from 'universal-cookie'; // Import the libraryconst cookies = new Cookies(); 
const cookies = new Cookies(); // Create an instance of Cookies

function SignIn() {
  const [formData, setFormData] = useState<IUserLogin>({
    email: "",
    password: "",
    skills:[]
  });
  
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [invaliLoginError, setInvalidLoginError] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [skills, setSkills] = useState<string[]>([])

  //const { email, password } = formData; // Destructure the values for easier access

  // const handleChange = (e: any) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const handleSubmit = async (e: any) => {
    setInvalidLoginError(false)
    e.preventDefault();
    if (!email || !password) {
      if (!email) {
        setEmailError(true);
      }

      if (!password) {
        setPasswordError(true);
      }
    }

    if (!email || !password) {
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
      const loginResult = await UserLogin({email, password, skills}); // Rename the constant
      if (loginResult) {
        debugger;
        cookies.set('fraktional-user', JSON.stringify(loginResult), { path: '/' });
        toast.update(_id, {
          render: "Logged in successfully",
          type: "success",
          isLoading: false,
        });

        if(loginResult.type==0){
          window.location.href = "/developer-overview"
        }else{
          window.location.href = "/company-overview"
        }
        setTimeout(() => {
          // setDisable(false)
          toast.dismiss(_id);
        }, 2000);
      } else {
    
        toast.dismiss(_id);
        setInvalidLoginError(true)

      }
    } catch (error) {
      // Handle errors
      setInvalidLoginError(true)
      toast.dismiss(_id);
   
      console.error("Error:", error);
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
      <Link href= "/"> <Image style={{   cursor: "pointer"}} src={logo} alt="logo" /></Link> 
        <Link href="/">
          <i className="bi bi-chevron-left"></i>Go to main
        </Link>
      </div>

      <div className="signinMain">
        <div className="login-image">
          <h2>MailChimp</h2>
          <p className="desc">
            “ It has many landing page variations to choose from, which one is
            always a big advantage. ”
          </p>
          <Image src={loginImage} alt="" />
          <h3>Lida Reidy</h3>
          <p>Project Manager | Mailchimp</p>
        </div>

        <div className="signinForm">
          <h2>Welcome back</h2>
          <p>Login to manage your account.</p>

          <form action="" method="get" onSubmit={handleSubmit}>
            <div>
            <div className = "label-loginError" style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
            <label htmlFor="email">Your Email</label>
              {invaliLoginError && <span style={{ color: "tomato", fontSize : "13px", fontWeight:"600", marginRight: "180px"}}>Invalid email or password</span>}
            </div>
              <input
                style={inputEmailStyle}
                type="email"
                name="email"
                placeholder="email@site.com"
               
                onChange={(e) => {
                 setEmail(e.target.value);
                  setEmailError(false)
                }}
              />
            </div>

            <div>
              <label htmlFor="password">
                <span>password</span>
                <span className="cta">
                  <Link href="/auth/reset">Forgot Password</Link>
                </span>
              </label>
              <input
                style={inputPasswordStyle}
                type="password"
                name="password"
                id="password"
                placeholder="8+ characters required"
               
                onChange={(e) => {
                  setPassword(e.target.value)
                  setPasswordError(false)

                }}
              />
            </div>

            <button type="submit">Log In</button>
          </form>

          <p>
            Don't have an account yet?{" "}
            <span className="cta">
              <Link href="/auth/register">Sign up here</Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
