"use client"
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './companyRegister.scss';
import { Modal } from 'react-responsive-modal';
import { registerOrganisation, sendOTP } from '@/app/endpoints/api';
import { ICompanyRegister } from '@/app/interfaces/organisation';
import dynamic from 'next/dynamic';
import Link from "next/link";
import Image from "next/image";
import logo from "../../../assets/additional/logo.png";
import loginImage from "../../../assets/additional/loginImage.jpg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from 'react-select';
import { StylesConfig } from 'react-select';
import { IUserSendOTP } from '@/app/interfaces/user';
import {VerifyOtp} from './verify-otp';


function Register() {
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [regEmailError, setRegEmailError] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState<any>();
  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState<ICompanyRegister>({
    userName: "",
    userSurname: "",
    email: "",
    userEmail: "",
    userNumber: "",
    companyNumber: "",
    companyReg: "",
    companyName: "",
    companyAdrress: "",
    position: "",
    title: "Mr",
    password: ""
  });

  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [firstNameError, setFirstNameError] = useState<boolean>(false);
  const [surnameError, setSurnameError] = useState<boolean>(false);
  const [titleError, setTitleError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [mobileNumberError, setMobileNumberError] = useState<boolean>(false);
  const [positionError, setpositionError] = useState<boolean>(false);
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
      formData.userName == "" ||      formData.email == ""||
      formData.password==""||
      formData.userNumber==""||

      formData.userSurname=="" ||
      formData.title == ""
    ) {
      if (formData.userName === "") {
        setFirstNameError(true);
        
      }
      if (formData.email === "") {
        setEmailError(true);
        
      }
      if (formData.password === "") {
        setPasswordError(true);
        
      }
   
      if (formData.userSurname === "") {
        setSurnameError(true);
      
      }
      if (formData.title === "") {
        setTitleError(true);
        
      }
      if (formData.userNumber === "") {
        setMobileNumberError(true);
        
      }
      if (formData.password === "") {
        setPasswordError(true);
        
      }

    if(formData.password !== ""){
      if (formData.password !== confirmPassword) {
        setConfirm_PasswordError(true);
      }
    }
 }

    if (
      formData.userName == "" ||      formData.email == ""||
      formData.password==""||
      formData.userNumber==""||

      formData.userSurname=="" ||
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

         const registrationResult = await registerOrganisation(formData) ;
          
         if(registrationResult){
          setEditModalOpen(true)
  
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


  function saveAndCloseEditModal(){

    setEditModalOpen(false)

  
  }
  
const customModalStyles = {
  modal: {

    width: '40%',
    scrollX:"none"
 
  },
};

  return (
    <section className="register">
      <ToastContainer />
      <Modal styles={customModalStyles}  open={editModalOpen} onClose={() => setEditModalOpen(false)} center>
        <VerifyOtp email = {formData.userEmail} onClose={saveAndCloseEditModal} />
        
      </Modal>
      <div className="top">
      <Link href= "/"> <Image style={{   cursor: "pointer"}} src={logo} alt="logo" /></Link> 
        <Link href="/">
          <i className="bi bi-chevron-left"></i>Go to main
        </Link>
      </div>

      <div className="registerMain">
        <div className="register-image">
          <h2>Param Solutions</h2>
          <p className="desc">
            “So simple and easy to find well paying jobs ”
          </p>
          <Image src={loginImage} alt="" />
          <h3>Atlegang Kola</h3>
          <p>Developer | Param Solutions</p>
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
    <label htmlFor="userName">Your Firstname</label>
    <input
      style={inputNameStyle}
      type="text"
      name="userName"
      placeholder="FirstName"
      value={formData.userName}
      onChange={handleChange}
    />
  </div>

  <div>
    <label htmlFor="userSurname">Your Lastname</label>
    <input
      style={inputSurnameStyle}
      type="text"
      name="userSurname"
      placeholder="surname"
      value={formData.userSurname}
      onChange={handleChange}
    />
  </div>

  <div>
    <label htmlFor="companyNumber">Your Email</label>
    <input
      style={inputMobileNumberStyle}
      type="tel"
      name="userEmail"
      placeholder="Your Email"
      value={formData.userEmail}
      onChange={handleChange}
    />
  </div>

  <div>
    <label htmlFor="userNumber">Your Number</label>
    <input
      style={inputMobileNumberStyle}
      type="tel"
      name="userNumber"
      placeholder="number"
      value={formData.userNumber}
      onChange={handleChange}
    />
  </div>

  <div>
    <label htmlFor="companyNumber">Company Email</label>
    <input
      style={inputMobileNumberStyle}
      type="tel"
      name="email"
      placeholder="Company Email"
      value={formData.email}
      onChange={handleChange}
    />
  </div>

  <div>
    <label htmlFor="companyNumber">Company Number</label>
    <input
      style={inputMobileNumberStyle}
      type="tel"
      name="companyNumber"
      placeholder="Company Number"
      value={formData.companyNumber}
      onChange={handleChange}
    />
  </div>

  <div>
    <label htmlFor="companyReg">Company Registration</label>
    <input
      style={inputMobileNumberStyle}
      type="text"
      name="companyReg"
      placeholder="Company Registration"
      value={formData.companyReg}
      onChange={handleChange}
    />
  </div>

  <div>
    <label htmlFor="companyName">Company Name</label>
    <input
      style={inputMobileNumberStyle}
      type="text"
      name="companyName"
      placeholder="Company Name"
      value={formData.companyName}
      onChange={handleChange}
    />
  </div>

  <div>
    <label htmlFor="companyAdrress">Company Address</label>
    <input
      style={inputMobileNumberStyle}
      type="text"
      name="companyAdrress"
      placeholder="Company Address"
      value={formData.companyAdrress}
      onChange={handleChange}
    />
  </div>

  <div>
    <label htmlFor="position">Position</label>
    <input
      style={inputMobileNumberStyle}
      type="text"
      name="position"
      placeholder="Position"
      value={formData.position}
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
    <label htmlFor="confirmPassword">Confirm password {confirm_PasswordError && <span style={{ color: "tomato", fontWeight: 600, fontSize: "small" }}>* passwords do not match</span>}</label>
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

  <button onClick={() =>
    handleSubmit
   } type="submit">Register</button>
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


