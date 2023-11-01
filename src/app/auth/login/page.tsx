"use client";
import React, { useState, useEffect } from "react";

import Link from "next/link";
import "./Signin.scss";
import Image from "next/image";
import logo from "../../../assets/additional/logo.png";
import loginImage from "../../../assets/additional/loginImage.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserLogin } from "@/app/endpoints/api";
import { IUserLogin } from "@/app/interfaces/user";
import Modal from "react-responsive-modal";
import { VerifyOtp } from "../register/verify-otp";
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
  const [userVerifyError, setUserVerifyError] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [skills, setSkills] = useState<string[]>([])
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const emailValue = cookies.get('myCookie');

  //const { email, password } = formData; // Destructure the values for easier access

  // const handleChange = (e: any) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const userDetails = cookies.get('fraktional-user');

  useEffect(() => {
    console.log(userDetails);
  
    if (userDetails?._id) {
      if (userDetails.status === 1) {
        if (userDetails.type === 0) {
          window.location.href = "/developer-overview";
        } else {
          
          window.location.href = "/company-overview";
        }
      }
    } else {
      cookies.set('fraktional-user', JSON.stringify(false));
      window.location.href = "/auth/login";
    }
  }, []);

  
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
      const loginResult = await UserLogin({email, password}); // Rename the constant
      if (loginResult) {

        if(loginResult.status == 1){

          cookies.set('fraktional-user', JSON.stringify(loginResult), { path: '/' });
 
          if(loginResult.type==0){
            window.location.href = "/developer-overview"
          }else{
            window.location.href = "/company-overview"
          }
          setTimeout(() => {
            // setDisable(false)
            toast.dismiss(_id);
          }, 2000);
        }else{
          setTimeout(() => {
            // setDisable(false)
            toast.dismiss(_id);
          });
          setUserVerifyError(true)
          setTimeout(() => {
            // setDisable(false)
            setEditModalOpen(true)
          }, 2000);
        }
  
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

  const customModalStyles = {
    modal: {
      maxWidth: '40%', 
      width: '50%',
      borderRadius: "10px",
      backgroundColor: "lightpink"
    },
  };
  function saveAndCloseEditModal(){

    setEditModalOpen(false)  
  }

  const getCookie = () => {
    // Get a cookie
    

  }

  useEffect(() => {
    const userDetails = cookies.get('fraktional-user');
    console.log(userDetails);
  
    if (userDetails?._id) {
      if (userDetails.status === 1) {
        if (userDetails.type === 0) {
          window.location.href = "/developer-overview";
        } else {
          window.location.href = "/company-overview";
        }
<<<<<<< HEAD
      }
    } else {
      window.location.href = "/auth/login";
    }
  }, [cookies]); // Include cookies in the dependency array if it's being updated
=======

      }
      else {
        cookies.set('fraktional-user', JSON.stringify(false), { path: '/' });
  
      }
    }   
  }, [0]); // Include cookies in the dependency array if it's being updated
>>>>>>> c2ed07f0b3f80a706d04b6f86449f212d1473e02
  
  

  return (
    <section className="signin">
      <ToastContainer />
      <Modal styles={customModalStyles}  open={editModalOpen} onClose={() => setEditModalOpen(false)} center>
        <VerifyOtp email = {emailValue!} onClose={saveAndCloseEditModal} />
      </Modal>
      <div className="top">
      <Link href= "/"> <Image style={{   cursor: "pointer"}} src={logo} alt="logo" /></Link> 
        <Link href="/">
          <i className="bi bi-chevron-left"></i>Go to main
        </Link>
      </div>

      <div className="signinMain">
        <div className="login-image">
          <h2>Login</h2>
          <p className="desc">
            “ Quick and easy access to a large variety of highly sought talent. ”
          </p>
          <Image src={loginImage} alt="" />
          <h3>Victoria</h3>
          <p>Project Manager | Float</p>
        </div>

        <div className="signinForm">
          <h2>Welcome back</h2>
          <p>Login to manage your account.</p>

          <form action="" method="get" onSubmit={handleSubmit}>
            <div>
            <div className = "label-loginError" style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
            <label htmlFor="email">Your Email</label>
            {userVerifyError && <span style={{ color: "tomato", fontSize : "13px", fontWeight:"600", marginRight: "100px"}}>Email address not verified</span>}

              {invaliLoginError && <span style={{ color: "tomato", fontSize : "13px", fontWeight:"600", marginRight: "150px"}}>Invalid email or password</span>}
            </div>
              <input
                style={inputEmailStyle}
                type="email"
                name="email"
                placeholder="Enter your email address"
               
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
                placeholder="Enter your password"
               
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

        {/* {userVerifyError ? (
          <p>
           {" "}
            <span onClick={() => setEditModalOpen(true)} className="cta">
              <Link className="link-login-1" href={'#'}>Verify your email</Link>
            </span>
          </p>
        ) : null} */}

          

          <div className="group-1">
          <div className="line-1-login"></div>
            <div> Sign up as a <a href="../../fraktional-dev" className="link-login-1">Company</a></div>
            <div>Sign up as a <a href="../../auth/register" className="link-login-1">Developer</a></div>
          </div>
        </div>
      </div>

      
    </section>
  );
}

export default SignIn;
