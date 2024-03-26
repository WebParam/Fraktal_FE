"use client";
import React, { useEffect, useState } from "react";
import { Loader } from 'rsuite';
import "rsuite/Loader/styles/index.css";
import "./Register.scss";
import Cookies from 'universal-cookie';
import Link from "next/link";
import Image from "next/image";
import logo from "../../../assets/additional/logo.webp";
import loginImage from "../../../assets/additional/brad.jpg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerUser} from "@/app/endpoints/api";
import { IUser } from "@/app/interfaces/user";
import Select from 'react-select';
import { StylesConfig } from 'react-select';
import { VerifyOtp } from "./verify-otp";
import Modal from "react-responsive-modal";
import { Alert } from "@mui/material";
// import { useRouter } from 'next/router';


function Register() {
  // const router = useRouter();
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [sendingError, setSendingError] = useState(false);
  const [formData, setFormData] = useState<IUser>({
    title: "mr",
    firstName: "",
    surname: "",
    email: "",
    mobileNumber: "",
    skills: [],
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
  const [skillsError, setSkillsError] = useState<boolean>(false);
  const [skills, setSkills] = useState<any>("")
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [includeSmallLetter, setIncludeSmallLetter] = useState(false);
  const [includeCapsLetter,setIncludeCapsLetter] = useState(false);
  const [includeNumber, setIncludeNumber] = useState(false);
  const [includeSpecialCharacter, setIncludeSpecialCharacter] = useState(false);
  const [includeEightChars, setIncludeEightChars] = useState(false);
  const [numberError, setNumberError] = useState('');
  const [nameError, setNameError] = useState('');
  const [lastnameError, setlastNameError] = useState('');
  const [mailTextError, setMailTextError] = useState('');
  const [loading, setLoading] = useState(false);
  const cookies = new Cookies();


  const [showOptModal, setShowOptModal] = useState(false);



  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSkillsChange = (selectedOptions:any) => {
    const selectedValuesString = scaffold(selectedOptions);
    setSkills(selectedValuesString);
  };


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = document.querySelector('.registerForm');

  if (
      formData.firstName||      formData.email||
      formData.password||
      formData.mobileNumber||

      formData.surname ||
      formData.title
    ) {
      if (formData.firstName === "") {
        form?.scroll({
          top: 20,
          behavior: "smooth"
        })
        setFirstNameError(true);
        return;
      }

      if (formData.firstName) {
        if (/[0-9!@#$%^&*()_+{}\[\]:;<>,.?|\-]/.test(formData.firstName)) {
          setFirstNameError(true)
          setNameError('Name cannot contain numbers or special characters');
          form?.scroll({
            top: 20,
            behavior: "smooth"
          })
          return;
        }
      }



      if (formData.email === "") {
        form?.scroll({
          top: 30,
          behavior: "smooth"
        })
        setEmailError(true);
        return;
      }

      if (formData.email) {
        if (/^\d+$/.test(formData.email.split('@')[0]) || (/^\d+$/.test(formData.email.split('@')[1]))) {
          form?.scroll({
            top: 30,
            behavior: "smooth"
          })
          setEmailError(true);
          setMailTextError('Email cannot contain only numbers')
          return;
        }
      }
      if (formData.password === "") {
        form?.scroll({
          top: 50,
          behavior: "smooth"
        })
        setPasswordError(true);
        return;
      }
   
      if (formData.surname === "") {
        form?.scroll({
          top: 30,
          behavior: "smooth"
        })
        setSurnameError(true);
        return;
      }

      if (formData.surname) {
        if (/[0-9!@#$%^&*()_+{}\[\]:;<>,.?|\-]/.test(formData.surname)) {
          setSurnameError(true);
          setlastNameError('Last Name cannot contain numbers or special characters');
          form?.scroll({
            top: 30,
            behavior: "smooth"
          })
          return;
        }
      }

      if (formData.title === "") {
        setTitleError(true);
        return;
      }
      if (formData.mobileNumber === "" ) {
        setMobileNumberError(true);
        return;
      }

      if (formData.mobileNumber) {
        if (!/^\d*$/.test(formData.mobileNumber)) {
          setMobileNumberError(true);
          setNumberError('Phone number cannot contain letters')
          return;
        }

        if (formData.mobileNumber.length > 10) {
          setMobileNumberError(true);
          setNumberError('Phone number cannot be more than 10 numbers')
          return;
        }
      }

      if (confirmPassword === "") {
        setConfirm_PasswordError(true);
        return;
      }

      if (formData.password !== confirmPassword) {
        setConfirm_PasswordError(true);
        setPasswordError(true);
        return;
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
          try {


           const registrationResult = await registerUser(formData) ;

           if(registrationResult){
        
           setEditModalOpen(true)
           cookies.set('myCookie', formData.email);
           toast.dismiss(_id);
           } else {
            setSendingError(true);
           }
           
           console.log('register result: ', registrationResult);
           toast.done(_id);
           return;
          
          } catch (error:any) {
         
            const statusCode = error.response ? error.response.status : null;
          
            if (statusCode === 400) {
              alert('email already exists');
              toast.update(_id, {
                render: `Email addrress already exists`,
                type: "error",
                isLoading: false,
              });
            } else if (statusCode === 401) {
         
              toast.update(_id, {
                render: `Unauthorized: ${error.message}`,
                type: "error",
                isLoading: false,
              });
            } else {
          
              toast.update(_id, {
                render: `An error occurred: ${error.message}`,
                type: "error",
                isLoading: false,
              });
            }
          
            setTimeout(() => {
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

  const inputSkillsStyle = {
    ...(skillsError && {
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

  const scaffold = (options:any) => {
    const values = options?.map((option:any) => option.value);
    return values.join(',');
  }

  const skillOptions = [
    { value: 'software', label: 'Software Development' },
    { value: 'project', label: 'Project Management' },
    { value: 'testing', label: 'Software Testing' },
    { value: 'analyst', label: 'Business Analysis' },
    { value: 'devops', label: 'Devops' },
    { value: 'architecture', label: 'Software Architecture' }
  ];

  const customModalStyles = {
    modal: {
      maxWidth: '40%', 
      width: '50%',
      minWidth: '310px',
      borderRadius: "10px",
      // backgroundColor: "lightpink",
      margin: ' 0 auto !important',
      border: 'none'
    },
  };

  function saveAndCloseEditModal(){
    setEditModalOpen(false)
  }

    useEffect(() => {
      if (formData.firstName) {
        setFirstNameError(false);
        setNameError('')
      }

      if (formData.surname) {
        setSurnameError(false);
        setlastNameError('')
      }

      if (formData.email) {
        setEmailError(false);
        setSendingError(false);
        setMailTextError('')
      }

      if (formData.mobileNumber?.trim()) {
        setMobileNumberError(false);
        setNumberError('');
      }

      if (formData.password == confirmPassword) {
        setPasswordError(false);
        setConfirm_PasswordError(false);
      }

      if (/[a-z]/.test(formData?.password || '')) {
        setIncludeSmallLetter(true);
      } else {
        setIncludeSmallLetter(false);
      }

      if (/[A-Z]/.test(formData?.password || '')) {
        setIncludeCapsLetter(true);
      } else {
        setIncludeCapsLetter(false);
      }

      if (/[0-9]/.test(formData?.password || '')) {
        setIncludeNumber(true);
      } else {
        setIncludeNumber(false);
      }

      if (/[^a-zA-Z0-9]/.test(formData?.password || '')) {
        setIncludeSpecialCharacter(true);
      } else {
        setIncludeSpecialCharacter(false);
      }

      if (formData.password && formData.password?.length > 8) {
        setIncludeEightChars(true);
      } else {
        setIncludeEightChars(false);
      }

    }, [formData.firstName, formData.surname, formData.email, formData.mobileNumber, formData.password, confirmPassword])


  return (
    <section className="register">
      <ToastContainer />
      <Modal styles={customModalStyles}  open={editModalOpen} onClose={() => setEditModalOpen(false)} center>
        <VerifyOtp email = {formData.email!} password = {formData.password!} onClose={saveAndCloseEditModal} />
      </Modal>
      <div className="top">
      <Link href= "/"> <Image style={{ cursor: "pointer"}} src={logo} alt="logo" /></Link> 
        {/* <Link href="/">
          <i className="bi bi-chevron-left"></i>Go to main
        </Link> */}
      </div>

      <div className="registerMain">
        <div className="register-image">
          <h2>Param Solutions</h2>
          <p className="desc">
            “So simple and easy to find well paying jobs ”
          </p>
          <Image src={loginImage} alt="" />
          <h3>Bradley Matjie</h3>
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
              <label htmlFor="firstName">Your Firstname</label>
              <input
              style={inputNameStyle}
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
              />
              {nameError && <span style={{color: 'tomato', fontSize: '12px'}}>{nameError}</span>}
            </div>

            <div>
              <label htmlFor="surname">Your Lastname</label>
              <input
                style={inputSurnameStyle}
                type="text"
                name="surname"
                placeholder="Enter your surname"
                value={formData.surname}
                onChange={handleChange}
              />
               {lastnameError && <span style={{color: 'tomato', fontSize: '12px'}}>{lastnameError}</span>}
            </div>

            <div>
              <label htmlFor="email">Your Email</label>
              <input
                     style={inputEmailStyle}
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
               {mailTextError && <span style={{color: 'tomato', fontSize: '12px'}}>{mailTextError}</span>}
            </div>

            <div>
              <label htmlFor="mobileNumber">Your Number</label>
              <input
                     style={inputMobileNumberStyle}
                type="tel"
                name="mobileNumber"
                placeholder="Enter your mobile number"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
              {numberError && <span style={{color: 'tomato', fontSize: '10px'}}>{numberError}</span>}
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                     style={inputPasswordStyle}
                type="password"
                name="password"
                id="password"
                placeholder="Enter a password"
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
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </div>
            {sendingError && <span style={{color: 'tomato', fontSize: '12px', textAlign: 'center'}}>The email you provided already exists, please log in</span>}

            <div style={{fontSize: '12px', display: 'flex',flexDirection: 'column', gap: '0'}}>
              Password:
              <p style={{margin: '0', color: `${includeSmallLetter ? 'green':'tomato'}`}}>- must include a small letter</p>
              <p style={{margin: '0', color: `${includeCapsLetter ? 'green':'tomato'}`}}>- must include Capital letter</p>
              <p style={{margin: '0', color: `${includeNumber ? 'green':'tomato'}`}}>- must include a number</p>
              <p style={{margin: '0', color: `${includeSpecialCharacter ? 'green':'tomato'}`}}>- must include special characters</p>
              <p style={{margin: '0', color: `${includeEightChars ? 'green':'tomato'}`}}>- must include 8+ characters</p>
            </div>
            <button type="submit">Register</button>
            
          </form>

          <p>
            Already have an account?{" "}
            {loading ? <Loader speed="fast" />:<span className="cta" onClick={() => setLoading(true)}>
              <Link href="/auth/login">Sign in here</Link>
            </span>}
          </p>

          <p>
          Read our terms and conditions{" "}
            <span className="cta">
              <Link href="/terms-and-conditions">T's and C's here</Link>
            </span>
          </p>

        </div>
      </div>
    </section>
  );
}

export default Register;
function scaffold(selectedOptions: any) {
  throw new Error("Function not implemented.");
}

