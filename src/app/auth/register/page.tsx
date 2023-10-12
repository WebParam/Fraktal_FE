"use client";
import React, { useState } from "react";
import "./Register.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../assets/additional/logo.png";
import loginImage from "../../../assets/additional/loginImage.jpg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerUser} from "@/app/endpoints/api";
import { IUser } from "@/app/interfaces/user";

function Register() {
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [formData, setFormData] = useState<IUser>({
    title: "mr", // Default title
    firstName: "",
    surname: "",
    email: "",
    mobileNumber: "",

    password: "",

  }) ;

  const [firstNameError, setFirstNameError] = useState<boolean>(false);
  const [surnameError, setSurnameError] = useState<boolean>(false);
  const [titleError, setTitleError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [mobileNumberError, setMobileNumberError] = useState<boolean>(false);
  const [roleError, setRoleError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [confirm_PasswordError, setConfirm_PasswordError] = useState<boolean>(false);
  const [regError, setRegErrro] = useState<boolean>(false);

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(formData);
    console.log(confirmPassword)
    


  if (
      formData.firstName||
      formData.email||
      formData.password||
      formData.mobileNumber||

      formData.surname ||
      formData.title
    ) {
      if (formData.firstName === "") {
        setFirstNameError(true);
        
      }
      if (formData.email === "") {
        setEmailError(true);
        
      }
      if (formData.password === "") {
        setPasswordError(true);
        
      }
   
      if (formData.surname === "") {
        setSurnameError(true);
      
      }
      if (formData.title === "") {
        setTitleError(true);
        
      }
      if (formData.mobileNumber === "") {
        setMobileNumberError(true);
        
      }
      if (confirmPassword === "") {
        setConfirm_PasswordError(true);
        
      }

      if (formData.password !== confirmPassword) {
        setConfirm_PasswordError(true);
        setPasswordError(true);
      }
    }


    if (
      formData.firstName == ""||
      formData.email == "" ||
      formData.password == ""||
      formData.mobileNumber== ""||
      formData.surname == "" ||
      formData.title == ""
    ){
      return;
    }

      let _id = toast.loading("Registering user..", {
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

            if (!emailRegex.test(formData.email!)) {
              toast.update(_id, {
                render: "Invalid email address",
                type: "error",
                isLoading: false,
              });
              setTimeout(() => {
               // setDisable(false)
                toast.dismiss(_id);
              }, 2000);
                 return;
            }else if(!passwordRegex.test(formData.password!)){
             toast.update(_id, {
               render:
                 "Password must contain at least 8 characters, including uppercase and lowercase letters, numbers, and special characters",
               type: "error",
               isLoading: false,
             });
             setTimeout(() => {
            //  setDisable(false)
              toast.dismiss(_id);
            }, 2000);
            return;
            }

           const registrationResult = await registerUser(formData) ;
            
           if(registrationResult){
            toast.update(_id, {
              render: "user registered successfully",
              type: "success",
              isLoading: false,
            });
            setTimeout(() => {
             // setDisable(false)
              toast.dismiss(_id);
            }, 2000);
           }else{
            toast.update(_id, {
              render: "error registering user",
              type: "error",
              isLoading: false,
            });
            setTimeout(() => {
             // setDisable(false)
              toast.dismiss(_id);
            }, 2000);
           }
          
          } catch (error) {
            // Handle errors
            toast.update(_id, {
              render: "error registering user",
              type: "error",
              isLoading: false,
            });
            setTimeout(() => {
             // setDisable(false)
              toast.dismiss(_id);
            }, 2000);
            console.error("Error:", error);
          }
        


      
     
    };
    



  const inputNameStyle = {
    ...(firstNameError && {
      outlineStyle: "solid",
     color: "tomato",
      borderWidth: "1px",
    }),
  };
  
  const inputSurnameStyle = {
    ...(surnameError && {
      outlineStyle: "solid",
     color: "tomato",
      borderWidth: "1px",
    }),
  };
  const inputTitleStyle = {
    ...(titleError && {
      outlineStyle: "solid",
     color: "tomato",
      borderWidth: "1px",
    }),
  };



  const inputRoleStyle = {
    ...(roleError && {
      outlineStyle: "solid",
     color: "tomato",
      borderWidth: "1px",
    }),
  };

  const inputMobileNumberStyle = {
    ...(mobileNumberError && {
      outlineStyle: "solid",
     color: "tomato",
      borderWidth: "1px",
    }),
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

  const inputConfirm_PasswordStyle = {
    ...(confirm_PasswordError && {
      outlineStyle: "solid",
     color: "tomato",
      borderWidth: "1px",
    }),
  };


  return (
    <section className="register">
      <ToastContainer />

      <div className="top">
      <Link href= "/"> <Image style={{   cursor: "pointer"}} src={logo} alt="logo" /></Link> 
        <Link href="/">
          <i className="bi bi-chevron-left"></i>Go to main
        </Link>
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
              <label htmlFor="title">Title </label> 
              <select
             style={inputTitleStyle}
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
              style={inputNameStyle}
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
                     style={inputSurnameStyle}
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
                     style={inputEmailStyle}
                type="email"
                name="email"
                placeholder="email@site.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

    

            <div>
              <label htmlFor="mobileNumber">Your Number</label>
              <input
                     style={inputMobileNumberStyle}
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
                     style={inputPasswordStyle}
                type="password"
                name="password"
                id="password"
                placeholder="8+ characters required"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword">Confirm password {confirm_PasswordError &&  <span style={{color : "tomato", fontWeight: 600, fontSize: "small"}}>* passwords do not match</span>}</label> 
              <input
               style={inputConfirm_PasswordStyle}

                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="8+ characters required"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </div>

            <button type="submit">Register</button>
          </form>

          <p>
            Already have an account?{" "}
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
