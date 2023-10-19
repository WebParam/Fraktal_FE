"use client"
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fraktional-dev.scss';
import Header from '../components/Header/Header';
import MobileMenu from '../components/MobileMenu/MobileMenu';
import companySvg from '../../assets/additional/svg1.svg';
import threePointers from '../../assets/additional/three-pointers.svg';
import appDeskImage from '../../assets/additional/appImage.jpg';
import signupimage from '../../assets/img/1618x1010/img5.jpg';
import signupimage1 from '../../assets/img/1618x1010/img4.jpg';
import illustration1 from '../../assets/svg/illustrations/oc-person-3.svg';
import logo from '../../assets/additional/logo.webp'
import Image from 'next/image';
import { registerOrganisation } from '@/app/endpoints/api';
import { ICompanyRegister } from '@/app/interfaces/organisation';
import dynamic from 'next/dynamic';
import Footer from '../components/Footer/Footer';


function Fraktional() {
  const router = useRouter();
  const [menuToggler, setMenuToggler] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [formData, setFormData] = useState<ICompanyRegister>({
    email:"",
    password:"",
    userName:"",
    userSurname: "",
    // mobileNumber: z.string(),  
    userNumber: "",
    companyNumber:"",
    companyReg: "",
    companyName:"",
    companyAdrress: "",
    position:"",
    title:"",
    userEmail:"",  
    
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
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [editModuleModalOpen, setEditModuleModalOpen] = useState<boolean>(false);
  const [skills, setSkills] = useState<any>("")

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleInputChange = (e: any) => {
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

  // Validate the form fields here and set errors if any
  const errors = {} as any;

  // Example: Validate that the first name is not empty
  if (!formData.userName.trim()) {
    errors.userName = 'Please enter your first name';
  }

  // Example: Validate that the last name is not empty
  if (!formData.userSurname.trim()) {
    errors.userSurname = 'Please enter your last name';
  }

  // Example: Validate email format
  if (!formData.userEmail.trim()) {
    errors.userEmail = 'Please enter your email address';
  } else if (!isValidEmail(formData.userEmail)) {
    errors.userEmail = 'Please enter a valid email address';
  }

  // Example: Validate that the company number is not empty
  if (!formData.companyNumber.trim()) {
    errors.companyNumber = 'Please enter your mobile number';
  }

  // Example: Validate that the company name is not empty
  if (!formData.companyName.trim()) {
    errors.companyName = 'Please enter Company Name';
  }

  // Example: Validate that the company address is not empty
  if (!formData.companyAdrress.trim()) {
    errors.companyAddress = 'Please enter Company Address';
  }

  // Example: Validate email format for company email
  if (!formData.email.trim()) {
    errors.companyEmail = 'Please enter Company Email';
  } else if (!isValidEmail(formData.email)) {
    errors.companyEmail = 'Please enter a valid Company Email address';
  }

  // Example: Validate that the position is not empty
  if (!formData.position.trim()) {
    errors.position = 'Please enter Your Position In This Company';
  }

  // Example: Validate password length
  if (formData.password.length < 8) {
    errors.password = 'Your password must include 8+ characters';
  }


 setFormErrors(errors);

 if (Object.keys(errors).length === 0) {
  try {
    const Addorganisation = await registerOrganisation( formData as ICompanyRegister); // Rename the constant
    if(Addorganisation){
            console.log('Registration successful');
      window.location.href = "/auth/login";
          
    }else{
        console.error('Registration failed');
    }
  } catch (error) {
      console.error('Error:', error);
  }
 }
 
    console.log(formData);
  };
  

  const removeMenu = () => {
    setMenuToggler(prev => false);
  }


  return (
    <div>           
      <Header 
        menuTogglerFunction={setMenuToggler} 
        menuTogglerValue={menuToggler}  
      />

      <MobileMenu  menuToggler={menuToggler} />
      <main id="content" role="main" className='companyRegister'>
      <Modal styles={customModalStyles}  open={editModalOpen} onClose={() => setEditModalOpen(false)} center>
        <VerifyOtp email = {formData.userEmail} onClose={saveAndCloseEditModal} />
      </Modal>
        <div className="container position-relative content-space-t-3 content-space-t-md-4 content-space-t-lg-4">
          <div className="row justify-content-lg-between align-items-lg-center">
            <div className="col-md-10 col-lg-5">
        
              <div className="mb-7">
                <h1 className="display-4 mb-3">
                  Build your<br />
                  <span className="text-primary text-highlight-warning">
                    <span className="js-typedjs" data-hs-typed-options="{
                      &quot;strings&quot;: [&quot;perfect&quot;, &quot;future&quot;, &quot;dream&quot;],
                      &quot;typeSpeed&quot;: 90,
                      &quot;loop&quot;: true,
                      &quot;backSpeed&quot;: 30,
                      &quot;backDelay&quot;: 2500
                    }" />
                  </span>fraktional team
                </h1>
                <p className="lead">Whatever your goal - we will get you there.</p>
              </div>
              {/* End Title & Description */}
              <div className="d-none d-lg-block">
                <Image className="img-fluid" src={companySvg} alt="Image Description" />
              </div>
            </div>
            {/* End Col */}
            <div className="col-lg-6">
              {/* Form */}
              <form className="js-validate needs-validation company-form" onSubmit={handleSubmit}>
                {/* Card */}
                <div className="card no-border" >
                  <div className="card-header border-bottom text-center">
                    <h4 className="card-header-title">Try it free 
                    {/* for 7 days <span className="badge text-dark rounded-pill startingPrice" style={{backgroundColor: 'lightpink'}}>starting at $59</span> */}
                    </h4>
                  </div>
                  <div className="card-body form-body">
                    <div className="inputs-container container row">
                      <div className="mb-4 col-md-6">
                        <label className="form-label" htmlFor="signupHeroFormFirstName">First name</label>
                        <input 
                          type="text" 
                          className="form-control form-control-sm" 
                          name="userName" 
                          value={formData.userName}
                          onChange={handleInputChange}
                          id="signupHeroFormFirstName" 
                          placeholder="First name" 
                          aria-label="First name" 
                          
                          required 
                        />
                        <span className="invalid-feedback">Please enter your first name</span>
                      </div>
                      
                      <div className="mb-4 col-md-6" >
                        <label className="form-label" htmlFor="signupHeroFormLasttName">Last name</label>
                        <input 
                          type="text" 
                          className="form-control form-control-sm" 
                          name="userSurname" 
                          value={formData.userSurname}
                          onChange={handleInputChange}
                          id="signupHeroFormLasttName" 
                          placeholder="Last name" 
                          aria-label="Last name" 
                          required 
                        />
                        <span className="invalid-feedback">Please enter your last name</span>
                      </div>
                      
                      <div className="mb-4 col-md-6" >
                        <label className="form-label" htmlFor="signupHeroFormWorkEmail">Email address</label>
                        <input 
                          type="email" 
                          className="form-control form-control-sm" 
                          name="userEmail" 
                          value={formData.userEmail}
                          onChange={handleInputChange}
                          id="signupHeroFormWorkEmail" 
                          placeholder="email@site.com" 
                          aria-label="email@site.com" 
                          required 
                        />
                        <span className="invalid-feedback">Please enter your email address</span>
                      </div>
                    
                      <div className="mb-4 col-md-6" >
                        <label className="form-label" htmlFor="signupHeroFormCompanyNumber">Mobile Number</label>
                        <input 
                          type="text" 
                          className="form-control form-control-sm" 
                          name="companyNumber" 
                          value={formData.companyNumber}
                            onChange={handleInputChange}
                          id="signupHeroFormCompanyNumber" 
                          placeholder="Mobile Number" 
                          aria-label="Mobile Number" 
                          required 
                        />
                        <span className="invalid-feedback">Please enter Company Number</span>
                      </div>
                      <div className="mb-4 col-md-6" >
                        <label className="form-label" htmlFor="signupHeroFormCompanyName">Company Name</label>
                        <input 
                          type="text" 
                          className="form-control form-control-sm" 
                          name="companyName" 
                          value={formData.companyName}
                          onChange={handleInputChange}
                          id="signupHeroFormCompanyName" 
                          placeholder="Company Name" 
                          aria-label="Company Name" 
                          required 
                        />
                        <span className="invalid-feedback">Please enter Company Name</span>
                      </div>
                      
                      <div className="mb-4 col-md-6" >
                        <label className="form-label" htmlFor="signupHeroFormCompanyEmail">Company Email</label>
                        <input 
                          type="text" 
                          className="form-control form-control-sm" 
                          name="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          id="signupHeroFormCompanyEmail" 
                          placeholder="Company Email" 
                          aria-label="Company Email" 
                          required 
                        />
                        <span className="invalid-feedback">Please enter Company Email</span>
                      </div>

                      
                      <div className="mb-4">
                        <label className="form-label" htmlFor="signupHeroFormCompanyAddress">Company Address</label>
                        <input 
                          type="text" 
                          className="form-control form-control-sm" 
                          name="companyAdrress" 
                          value={formData.companyAdrress}
                          onChange={handleInputChange}
                          id="signupHeroFormCompanyAddress" 
                          placeholder="Company Address" 
                          aria-label="Company Address" 
                          required 
                        />
                        <span className="invalid-feedback">Please enter Company Address</span>
                      </div>
                  
                  
            
                      <div className="mb-4">
                        <label className="form-label" htmlFor="signupHeroFormPosition">Position</label>
                        <input 
                          type="text" 
                          className="form-control form-control-sm" 
                          name="position" 
                          value={formData.position}
                          onChange={handleInputChange}
                          id="signupHeroFormPosition" 
                          placeholder="Position At Company" 
                          aria-label="Position" 
                          required 
                        />
                        <span className="invalid-feedback">Please enter Your Position In This Company</span>
                      </div>

                      <div className="mb-4 col-md-6" >
                        <label className="form-label" htmlFor="signupHeroFormSignupPassword">Password</label>
                        <input   value={formData.password} 
                         onChange={handleInputChange}
                        type="password" className="form-control form-control-sm" name="password" id="signupHeroFormSignupPassword" placeholder="8+ characters required" aria-label="8+ characters required" required />
                        <span className="invalid-feedback">Your password must include 8+ characters</span>
                      </div>

                      <div className="mb-4 col-md-6" data-hs-validation-validate-class>
                        <label className="form-label" htmlFor="signupHeroFormSignupConfirmPassword">Confirm password</label>
                        <input 
                          type="password" 
                          className="form-control form-control-sm" 
                          name="confirmPassword" 
                          value={confirmPassword}
                          onChange={(e)=>setConfirmPassword(e.target.value)}
                          id="signupHeroFormSignupConfirmPassword" 
                          placeholder="8+ characters required" 
                          aria-label="8+ characters required" 
                          required data-hs-validation-equal-field="#signupHeroFormSignupPassword" 
                        />
                        <span className="invalid-feedback">Password does not match the confirm password</span>
                      </div>
                    
                      </div>
                    {/* Check */}
                    <div className="form-check mb-4">
                      <input type="checkbox" className="form-check-input" id="signupHeroFormPrivacyCheck" name="signupFormPrivacyCheck" required />
                      <label className="form-check-label small" htmlFor="signupHeroFormPrivacyCheck"> By submitting this form I have read and acknowledged the <a href="./page-privacy.html">Privacy Policy</a></label>
                      <span className="invalid-feedback">Please accept our Privacy Policy.</span>
                    </div>
                    {/* End Check */}
                    <div className="d-grid mb-3">
                      <button type="submit" className="btn btn-primary btn-lg" style={{border:"0px",backgroundImage: 'linear-gradient(90deg, #FD2DC3 -2.8%, rgba(75, 76, 78, 0.40) 124.34%)'}}>Claim your free trial</button>
                    </div>
                  </div>
                </div>
                {/* End Card */}
              </form>
              {/* End Form */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
        {/* End Hero */}
        {/* Icon Blocks */}
        <div id="aboutSection" className="container content-space-t-2 content-space-t-lg-3">
          {/* Heading */}
          <div className="w-lg-75 text-center mx-auto mb-5 mb-sm-9">
            <h2 className="h1">Where Capacity Meets Flexibility</h2>
            <p>Unlock tailored tech opportunities, balance costs, and connect effortlessly through Fraktional. Flexible. Reliable. Efficient</p>
          </div>
          {/* End Heading */}
          <div className="row">
            <div className="col-md-4 mb-7">
              {/* Icon Blocks */}
              <div className="text-center px-lg-3">
                <span className="svg-icon svg-icon-lg text-primary mb-3">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.6 5.59998L20.9 10.9C21.3 11.3 21.3 11.9 20.9 12.3L17.6 15.6L11.6 9.59998L15.6 5.59998ZM2.3 12.3L7.59999 17.6L11.6 13.6L5.59999 7.59998L2.3 10.9C1.9 11.3 1.9 11.9 2.3 12.3Z" fill="#035A4B" />
                    <path opacity="0.3" d="M17.6 15.6L12.3 20.9C11.9 21.3 11.3 21.3 10.9 20.9L7.59998 17.6L13.6 11.6L17.6 15.6ZM10.9 2.3L5.59998 7.6L9.59998 11.6L15.6 5.6L12.3 2.3C11.9 1.9 11.3 1.9 10.9 2.3Z" fill="#035A4B" />
                  </svg>
                </span>
                <h3>Expert Matching</h3>
                <p>Connect companies with top-tier developers tailored to project needs</p>
              </div>
              {/* End Icon Blocks */}
            </div>
            {/* End Col */}
            <div className="col-md-4 mb-7">
              {/* Icon Blocks */}
              <div className="text-center px-lg-3">
                <span className="svg-icon svg-icon-lg text-primary mb-3">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M4.85714 1H11.7364C12.0911 1 12.4343 1.12568 12.7051 1.35474L17.4687 5.38394C17.8057 5.66895 18 6.08788 18 6.5292V19.0833C18 20.8739 17.9796 21 16.1429 21H4.85714C3.02045 21 3 20.8739 3 19.0833V2.91667C3 1.12612 3.02045 1 4.85714 1ZM7 13C7 12.4477 7.44772 12 8 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H8C7.44772 14 7 13.5523 7 13ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H11C11.5523 18 12 17.5523 12 17C12 16.4477 11.5523 16 11 16H8Z" fill="#035A4B" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.85714 3H14.7364C15.0911 3 15.4343 3.12568 15.7051 3.35474L20.4687 7.38394C20.8057 7.66895 21 8.08788 21 8.5292V21.0833C21 22.8739 20.9796 23 19.1429 23H6.85714C5.02045 23 5 22.8739 5 21.0833V4.91667C5 3.12612 5.02045 3 6.85714 3ZM7 13C7 12.4477 7.44772 12 8 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H8C7.44772 14 7 13.5523 7 13ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H11C11.5523 18 12 17.5523 12 17C12 16.4477 11.5523 16 11 16H8Z" fill="#035A4B" />
                  </svg>
                </span>
                <h3>Streamlined Process</h3>
                <p>Simplify tech resourcing through our efficient, user-friendly platform.</p>
              </div>
              {/* End Icon Blocks */}
            </div>
            {/* End Col */}
            <div className="col-md-4 mb-7">
              {/* Icon Blocks */}
              <div className="text-center px-lg-3">
                <span className="svg-icon svg-icon-lg text-primary mb-3">
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15 19.5229C15 20.265 15.9624 20.5564 16.374 19.9389L22.2227 11.166C22.5549 10.6676 22.1976 10 21.5986 10H17V4.47708C17 3.73503 16.0376 3.44363 15.626 4.06106L9.77735 12.834C9.44507 13.3324 9.80237 14 10.4014 14H15V19.5229Z" fill="#035A4B" />
                    <path opacity="0.3" fillRule="evenodd" clipRule="evenodd" d="M3 6.5C3 5.67157 3.67157 5 4.5 5H9.5C10.3284 5 11 5.67157 11 6.5C11 7.32843 10.3284 8 9.5 8H4.5C3.67157 8 3 7.32843 3 6.5ZM3 18.5C3 17.6716 3.67157 17 4.5 17H9.5C10.3284 17 11 17.6716 11 18.5C11 19.3284 10.3284 20 9.5 20H4.5C3.67157 20 3 19.3284 3 18.5ZM2.5 11C1.67157 11 1 11.6716 1 12.5C1 13.3284 1.67157 14 2.5 14H6.5C7.32843 14 8 13.3284 8 12.5C8 11.6716 7.32843 11 6.5 11H2.5Z" fill="#035A4B" />
                  </svg>
                </span>
                <h3>Flexible Engagements</h3>
                <p> Offer adaptable commitments, from fractional to full project involvement.</p>
              </div>
              {/* End Icon Blocks */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
        {/* End Icon Blocks */}
        {/* Devices */}
        <div className="container">
          <div className="w-75 mx-auto mb-7">
            <Image className="img-fluid" src={threePointers} alt="SVG Arrow" />
          </div>
          {/* Heading */}
          <div className="w-md-60 w-lg-50 text-center mx-auto mb-7">
            <p><span className="text-dark fw-semibold">It is fast and easy.</span> Create your first development team with Fraktional.</p>
          </div>
          {/* End Heading */}
          {/* Devices */}
          <div className="devices" style={{overflow:"visible"}}>
            {/* Mobile Device */}
            <figure className="device-mobile rotated-3d-right">
              <div className="device-mobile-frame">
                <Image className="device-mobile-img" src={appDeskImage} alt="Image Description" />
              </div>
            </figure>
            {/* End Mobile Device */}
            {/* Browser Device */}
            <figure className="device-browser">
              <div className="device-browser-header">
                <div className="device-browser-header-btn-list">
                  <span className="device-browser-header-btn-list-btn" />
                  <span className="device-browser-header-btn-list-btn" />
                  <span className="device-browser-header-btn-list-btn" />
                </div>
              </div>
            </figure>
            {/* End Browser Device */}
          </div>
          {/* End Devices */}
          <div className="text-center mx-auto launching-text" style={{maxWidth: '20rem'}}>
            <p className="small">We are launching soon. Join the priority list for information and early access.</p>
          </div>
        </div>
        {/* End Devices */}
        {/* Feature Stats */}
        <div className="content-space-2 content-space-lg-3 content">
          <div className="rounded-2 mx-3 mx-xl-10">
            <div className="container content-space-2 content-container">
              <div className="row col-md-divider col-divider-rotated ">
                <div className="col-md-4 container-item">
                  <div data-aos="fade-up" data-aos-delay={100}>
                    {/* Stats */}
                    <div className="text-center px-md-3 px-lg-8">
                      <span className="svg-icon svg-icon-lg mb-3">
                        <svg width={71} height={64} viewBox="0 0 71 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M36.4408 14.7697L41.59 25.3653C41.59 25.5633 41.7881 25.5633 41.8871 25.6624L53.4729 27.2467C53.7699 27.2467 53.968 27.7419 53.7699 28.0389L45.3529 36.1589C45.1549 36.3569 45.1549 36.4559 45.1549 36.654L47.1353 48.2398C47.1353 48.5368 46.8383 48.9329 46.4422 48.7349L36.0447 43.1896C35.8466 43.1896 35.7476 43.1896 35.5496 43.1896L25.1521 48.7349C24.855 48.9329 24.3599 48.5368 24.4589 48.2398L26.4394 36.654C26.4394 36.4559 26.4394 36.3569 26.2413 36.1589L17.8243 28.138C17.5273 27.8409 17.6263 27.3458 18.1214 27.3458L29.7072 25.6624C29.9052 25.6624 30.0042 25.4643 30.0042 25.3653L35.2525 14.7697C35.7476 14.3737 36.2427 14.3737 36.4408 14.7697Z" fill="#F5CA99" />
                          <path opacity="0.25" d="M55.4534 6.15489L56.9387 8.92754C56.9387 8.92754 56.9387 8.92754 57.1368 8.92754L60.2065 9.42266C60.4046 9.42266 60.4046 9.62072 60.2065 9.62072L57.929 11.8982C57.929 11.8982 57.929 11.8982 57.929 12.0963L58.4241 15.166C58.4241 15.3641 58.226 15.3641 58.226 15.3641L55.4534 13.7797H55.2553L52.4827 15.265C52.2846 15.265 52.2846 15.265 52.2846 15.067L52.7797 11.9973V11.7992L50.5022 9.5217V9.42266L53.5719 8.92754C53.5719 8.92754 53.5719 8.92754 53.77 8.92754L55.2553 6.15489C55.2553 5.95684 55.2553 5.95684 55.4534 6.15489Z" fill="#F5CA99" />
                          <path opacity="0.25" d="M12.1799 0.609375L13.4672 3.38204C13.4672 3.38204 13.4672 3.38204 13.6653 3.38204L16.636 3.87716C16.834 3.87716 16.834 4.07521 16.636 4.07521L14.5565 6.1547C14.5565 6.1547 14.5565 6.1547 14.5565 6.35275L15.0516 9.32346C15.0516 9.52151 14.8535 9.52151 14.8535 9.52151L12.2789 8.03616C12.2789 8.03616 12.2789 8.03616 12.0809 8.03616L9.40723 9.42249C9.20918 9.42249 9.20918 9.42249 9.20918 9.22444L9.7043 6.25373C9.7043 6.25373 9.7043 6.25373 9.7043 6.05568L7.42676 3.97618V3.87716L10.3975 3.38204C10.3975 3.38204 10.3975 3.38204 10.5955 3.38204L11.8828 0.609375C11.9818 0.609375 12.1799 0.609375 12.1799 0.609375Z" fill="#F5CA99" />
                          <path opacity="0.25" d="M13.7643 49.7252L15.2496 52.4978C15.2496 52.4978 15.2496 52.4978 15.4477 52.4978L18.5174 52.993C18.7155 52.993 18.7155 53.191 18.5174 53.191L16.2399 55.4685C16.2399 55.4685 16.2399 55.4685 16.2399 55.6666L16.735 58.7363C16.735 58.9344 16.5369 58.9344 16.5369 58.9344L13.7643 57.449H13.5662L10.8926 58.8353C10.6945 58.8353 10.6945 58.8354 10.6945 58.6373L11.1897 55.5676V55.3695L8.91211 53.191V52.993L11.9818 52.4978C11.9818 52.4978 11.9818 52.4978 12.1799 52.4978L13.4672 49.7252C13.6652 49.6261 13.7643 49.6261 13.7643 49.7252Z" fill="#F5CA99" />
                          <path opacity="0.25" d="M60.2063 53.2901L61.7907 56.3598C61.7907 56.3598 61.7907 56.3598 61.9888 56.3598L65.4546 56.8549C65.6526 56.8549 65.6526 57.053 65.4546 57.152L62.979 59.6276C62.979 59.6276 62.979 59.6276 62.979 59.8257L63.6722 63.2915C63.6722 63.4895 63.4741 63.4895 63.4741 63.4895L60.4044 61.9052H60.2063L57.1366 63.4895C56.9386 63.4895 56.9386 63.4895 56.9386 63.2915L57.6317 59.8257V59.6276L55.1561 57.152C54.9581 56.954 55.1561 56.954 55.1561 56.8549L58.622 56.3598H58.82L60.4044 53.2901C59.8102 53.1911 60.0083 53.1911 60.2063 53.2901Z" fill="#F5CA99" />
                        </svg>
                      </span>
                      <p className="mb-0"><span className="text-dark fw-semibold">98%</span> Client Satisfaction Rate</p>
                    </div>
                    {/* End Stats */}
                  </div>
                </div>
                {/* End Col */}
                <div className="col-md-4 container-item">
                  <div data-aos="fade-up">
                    {/* Stats */}
                    <div className="text-center px-md-3 px-lg-8">
                      <span className="svg-icon svg-icon-lg mb-3">
                        <svg width={68} height={58} viewBox="0 0 68 58" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x={30} y={20} width={38} height={38}>
                            <path d="M49.2621 57.7238C59.5984 57.7238 67.9776 49.3446 67.9776 39.0083C67.9776 28.6721 59.5984 20.2928 49.2621 20.2928C38.9258 20.2928 30.5466 28.6721 30.5466 39.0083C30.5466 49.3446 38.9258 57.7238 49.2621 57.7238Z" fill="white" />
                          </mask>
                          <g mask="url(#mask0)">
                            <path d="M66.5 39C66.5 29.335 58.665 21.5 49 21.5C39.335 21.5 31.5 29.335 31.5 39C31.5 48.665 39.335 56.5 49 56.5C58.665 56.5 66.5 48.665 66.5 39Z" fill="url(#pattern0)" stroke="white" strokeWidth={3} />
                          </g>
                          <mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x={15} y={0} width={38} height={38}>
                            <path d="M34.2621 37.7238C44.5984 37.7238 52.9776 29.3446 52.9776 19.0083C52.9776 8.67205 44.5984 0.292847 34.2621 0.292847C23.9258 0.292847 15.5466 8.67205 15.5466 19.0083C15.5466 29.3446 23.9258 37.7238 34.2621 37.7238Z" fill="white" />
                          </mask>
                          <g mask="url(#mask1)">
                            <path d="M51.5 19C51.5 9.33502 43.665 1.5 34 1.5C24.335 1.5 16.5 9.33502 16.5 19C16.5 28.665 24.335 36.5 34 36.5C43.665 36.5 51.5 28.665 51.5 19Z" fill="url(#pattern1)" stroke="white" strokeWidth={3} />
                          </g>
                          <mask id="mask2" mask-type="alpha" maskUnits="userSpaceOnUse" x={0} y={20} width={38} height={38}>
                            <path d="M19.2621 57.7238C29.5984 57.7238 37.9776 49.3446 37.9776 39.0083C37.9776 28.6721 29.5984 20.2928 19.2621 20.2928C8.92583 20.2928 0.546631 28.6721 0.546631 39.0083C0.546631 49.3446 8.92583 57.7238 19.2621 57.7238Z" fill="white" />
                          </mask>
                          <g mask="url(#mask2)">
                            <path d="M36.5 39C36.5 29.335 28.665 21.5 19 21.5C9.33502 21.5 1.5 29.335 1.5 39C1.5 48.665 9.33502 56.5 19 56.5C28.665 56.5 36.5 48.665 36.5 39Z" fill="url(#pattern2)" stroke="white" strokeWidth={3} />
                          </g>
                          <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
                              <use xlinkHref="#image0" transform="scale(0.01)" />
                            </pattern>
                            <pattern id="pattern1" patternContentUnits="objectBoundingBox" width={1} height={1}>
                              <use xlinkHref="#image1" transform="scale(0.00625)" />
                            </pattern>
                            <pattern id="pattern2" patternContentUnits="objectBoundingBox" width={1} height={1}>
                              <use xlinkHref="#image2" transform="scale(0.01)" />
                            </pattern>
                            <image id="image0" width={100} height={100} xlinkHref="data:image/jpeg;base64,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" />
                            // <image id="image1" width={160} height={160} xlinkHref="data:image/jpeg;base64,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" />
                            <image id="image2" width={100} height={100} xlinkHref="data:image/jpeg;base64,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" />
                          </defs>
                        </svg>
                      </span>
                      <p className="mb-0">Over <span className="text-dark fw-semibold">40%</span> Reduced Hiring Time</p>
                    </div>
                    {/* End Stats */}
                  </div>
                </div>
                {/* End Col */}
                <div className="col-md-4 container-item">
                  <div data-aos="fade-up" data-aos-delay={100}>
                    {/* Stats */}
                    <div className="text-center px-md-3 px-lg-8">
                      <span className="svg-icon svg-icon-lg mb-3">
                        <svg width={71} height={64} viewBox="0 0 71 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M47.4324 1.59973H19.9038C17.9233 1.59973 16.438 3.08509 16.438 5.06556V55.9638C16.438 57.9442 17.9233 59.4296 19.9038 59.4296H56.0475C58.0279 59.4296 59.5133 57.9442 59.5133 55.9638V47.4477V21.3055V13.8787L47.4324 1.59973Z" stroke="#21325B" strokeWidth="1.98047" />
                          <path d="M48.6206 14.8689C47.5313 14.8689 46.8381 13.9776 46.8381 13.0864V2.29285L59.4141 14.8689H48.6206Z" fill="#21325B" />
                          <path d="M47.7294 21.1074H27.7266" stroke="#21325B" strokeWidth="1.98047" strokeLinecap="round" />
                          <path d="M47.7294 27.9401H27.7266" stroke="#21325B" strokeWidth="1.98047" strokeLinecap="round" />
                          <path d="M47.7294 34.7727H27.7266" stroke="#21325B" strokeWidth="1.98047" strokeLinecap="round" />
                          <path d="M47.7294 41.9023H27.7266" stroke="#21325B" strokeWidth="1.98047" strokeLinecap="round" />
                          <path opacity="0.2" d="M16.9331 55.7657V10.4128C16.9331 9.02652 15.8439 7.93726 14.4575 7.93726H13.9624C12.5761 7.93726 11.4868 9.02652 11.4868 10.4128V61.014C11.4868 62.4003 12.5761 63.4896 13.9624 63.4896H16.8341H51.1953C52.5817 63.4896 53.6709 62.4003 53.6709 61.014V60.5188C53.6709 59.1325 52.5817 58.0433 51.1953 58.0433H19.3097C17.9234 58.1423 16.9331 57.152 16.9331 55.7657Z" fill="#21325B" />
                        </svg>
                      </span>
                      
                      <p className="mb-0">Over <span className="text-dark fw-semibold">1,500</span> Vetted Engineers</p>
                    </div>
                    {/* End Stats */}
                  </div>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
          </div>
        </div>
        {/* End Feature Stats */}
        {/* Pricing */}
     
        {/* End Pricing */}
        {/* Mockup Card */}
        <div className="container d-none d-md-block content-space-2 content-space-lg-3">
          <div className="bg-light p-4 pb-md-0 pe-md-0 pt-md-10 ps-md-7">
            <div className="position-relative overflow-hidden">
              <div className="row justify-content-lg-between">
                <div className="col-md-4 py-5 pb-md-10">
                  <div className="mb-5">
                    <h2>Fraktional takes care of your recruitment functions so that you can focus on project delivery.</h2>
                  </div>
                  <a className="btn btn-outline-primary" href="./auth/register">Sign up today</a>
                </div>
                {/* End Col */}
                <div className="col-sm-6 col-lg-5">
                  {/* Devices */}
                  <div className="devices position-absolute top-0 start-50">
                    {/* Browser Device */}
                    <figure className="device-browser-frame rotated-3d-left">
                      <div className="device-browser-frame">
                        <Image className="device-browser-img" src={signupimage} alt="Image Description" />
                      </div>
                    </figure>
                    {/* End Browser Device */}
                  </div>
                  {/* End Devices */}
                  {/* Devices */}
                  <div className="devices position-absolute top-0 start-50 mt-10 ms-5">
                    {/* Browser Device */}
                    <figure className="device-browser-frame rotated-3d-left">
                      <div className="device-browser-frame">
                        <Image className="device-browser-img" src={signupimage1} alt="Image Description" />
                      </div>
                    </figure>
                    {/* End Browser Device */}
                  </div>
                  {/* End Devices */}
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
          </div>
        </div>
        {/* End Mockup Card */}
        {/* Testimonials */}
        <div className="container content-space-b-2 content-space-b-lg-3">
          <div className="text-center mb-5">
            <Image className="avatar" src={illustration1} alt="Illustration" />
          </div>
          {/* Blockquote */}
          <figure className="w-md-75 text-center mx-md-auto">
            <blockquote className="blockquote">“ I just wanted to say that I'm very happy with my developer team. They are reliable and extremely efficient. ”</blockquote>
            <figcaption className="blockquote-footer text-center">
              Renate
              <span className="blockquote-footer-source">Tech Lead | Toyota</span>
            </figcaption>
          </figure>
          {/* End Blockquote */}
        </div>
        {/* End Testimonials */}
        {/* Events */}
    
        {/* End Events */}
        {/* Careers */}
    
        {/* End Careers */}
        {/* Map */}
     
        {/* End Map */}
      </main>
      {/* ========== END MAIN CONTENT ========== */}
      {/* ========== FOOTER ========== */}
      <Footer />
            {/* End Footer *
      {/* ========== END FOOTER ========== */}
      {/* ========== SECONDARY CONTENTS ========== */}
      {/* Sign Up */}
      <div className="modal fade" id="signupModal" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            {/* Header */}
            <div className="modal-close">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            {/* End Header */}
            {/* Body */}
            <div className="modal-body">
              {/* Log in */}
              <div id="signupModalFormLogin" style={{display: 'none', opacity: 0}}>
                {/* Heading */}
                <div className="text-center mb-7">
                  <h2>Log in</h2>
                  <p>Don't have an account yet?
                    <a className="js-animation-link link" href="javascript:;" role="button" data-hs-show-animation-options="{
                        &quot;targetSelector&quot;: &quot;#signupModalFormSignup&quot;,
                        &quot;groupName&quot;: &quot;idForm&quot;
                      }">Sign up</a>
                  </p>
                </div>
                {/* End Heading */}
                <div className="d-grid gap-2">
                  <a className="btn btn-white btn-lg" href="#">
                    <span className="d-flex justify-content-center align-items-center">
                      <img className="avatar avatar-xss me-2" src="./assets/svg/brands/google-icon.svg" alt="Image Description" />
                      Log in with Google
                    </span>
                  </a>
                  <a className="js-animation-link btn btn-primary btn-lg" href="#" data-hs-show-animation-options="{
                      &quot;targetSelector&quot;: &quot;#signupModalFormLoginWithEmail&quot;,
                      &quot;groupName&quot;: &quot;idForm&quot;
                    }">Log in with Email</a>
                </div>
              </div>
              {/* End Log in */}
              {/* Log in with Modal */}
              <div id="signupModalFormLoginWithEmail" style={{display: 'none', opacity: 0}}>
                {/* Heading */}
                <div className="text-center mb-7">
                  <h2>Log in</h2>
                  <p>Don't have an account yet?
                    <a className="js-animation-link link" href="javascript:;" role="button" data-hs-show-animation-options="{
                        &quot;targetSelector&quot;: &quot;#signupModalFormSignup&quot;,
                        &quot;groupName&quot;: &quot;idForm&quot;
                      }">Sign up</a>
                  </p>
                </div>
                {/* End Heading */}
                <form className="js-validate needs-validation" noValidate>
                  {/* Form */}
                  <div className="mb-3">
                    <label className="form-label" htmlFor="signupModalFormLoginEmail">Your email</label>
                    <input type="email" className="form-control form-control-lg" name="email" id="signupModalFormLoginEmail" placeholder="email@site.com" aria-label="email@site.com" required />
                    <span className="invalid-feedback">Please enter a valid email address.</span>
                  </div>
                  {/* End Form */}
                  {/* Form */}
                  <div className="mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <label className="form-label" htmlFor="signupModalFormLoginPassword">Password</label>
                      <a className="js-animation-link form-label-link" href="javascript:;" data-hs-show-animation-options="{
                      &quot;targetSelector&quot;: &quot;#signupModalFormResetPassword&quot;,
                      &quot;groupName&quot;: &quot;idForm&quot;
                    }">Forgot Password?</a>
                    </div>
                    <input type="password" className="form-control form-control-lg" name="password" id="signupModalFormLoginPassword" placeholder="8+ characters required" aria-label="8+ characters required" required minLength={8} />
                    <span className="invalid-feedback">Please enter a valid password.</span>
                  </div>
                  {/* End Form */}
                  <div className="d-grid mb-3">
                    <button type="submit" className="btn btn-primary form-control-lg">Log in</button>
                  </div>
                </form>
              </div>
              {/* End Log in with Modal */}
              {/* Sign up */}
              <div id="signupModalFormSignup">
                {/* Heading */}
                <div className="text-center mb-7">
                  <h2>Sign up</h2>
                  <p>Already have an account?
                    <a className="js-animation-link link" href="javascript:;" role="button" data-hs-show-animation-options="{
                        &quot;targetSelector&quot;: &quot;#signupModalFormLogin&quot;,
                        &quot;groupName&quot;: &quot;idForm&quot;
                      }">Log in</a>
                  </p>
                </div>
                {/* End Heading */}
                <div className="d-grid gap-3">
                  <a className="btn btn-white btn-lg" href="#">
                    <span className="d-flex justify-content-center align-items-center">
                      <img className="avatar avatar-xss me-2" src="./assets/svg/brands/google-icon.svg" alt="Image Description" />
                      Sign up with Google
                    </span>
                  </a>
                  <a className="js-animation-link btn btn-primary btn-lg" href="#" data-hs-show-animation-options="{
                      &quot;targetSelector&quot;: &quot;#signupModalFormSignupWithEmail&quot;,
                      &quot;groupName&quot;: &quot;idForm&quot;
                    }">Sign up with Email</a>
                  <div className="text-center">
                    <p className="small mb-0">By continuing you agree to our <a href="#">Terms and Conditions</a></p>
                  </div>
                </div>
              </div>
              {/* End Sign up */}
              {/* Sign up with Modal */}
              <div id="signupModalFormSignupWithEmail" style={{display: 'none', opacity: 0}}>
                {/* Heading */}
                <div className="text-center mb-7">
                  <h2>Sign up</h2>
                  <p>Already have an account?
                    <a className="js-animation-link link" href="javascript:;" role="button" data-hs-show-animation-options="{
                        &quot;targetSelector&quot;: &quot;#signupModalFormLogin&quot;,
                        &quot;groupName&quot;: &quot;idForm&quot;
                      }">Log in</a>
                  </p>
                </div>
                {/* End Heading */}
                <form className="js-validate need-validate" noValidate>
                  {/* Form */}
                  <div className="mb-3">
                    <label className="form-label" htmlFor="signupModalFormSignupEmail">Your email</label>
                    <input type="email" className="form-control form-control-lg" name="email" id="signupModalFormSignupEmail" placeholder="email@site.com" aria-label="email@site.com" required />
                    <span className="invalid-feedback">Please enter a valid email address.</span>
                  </div>
                  {/* End Form */}
                  {/* Form */}
                  <div className="mb-3">
                    <label className="form-label" htmlFor="signupModalFormSignupPassword">Password</label>
                    <input type="password" className="form-control form-control-lg" name="password" id="signupModalFormSignupPassword" placeholder="8+ characters required" aria-label="8+ characters required" required />
                    <span className="invalid-feedback">Your password is invalid. Please try again.</span>
                  </div>
                  {/* End Form */}
                  {/* Form */}
                  <div className="mb-3" data-hs-validation-validate-class>
                    <label className="form-label" htmlFor="signupModalFormSignupConfirmPassword">Confirm password</label>
                    <input type="password" className="form-control form-control-lg" name="confirmPassword" id="signupModalFormSignupConfirmPassword" placeholder="8+ characters required" aria-label="8+ characters required" required data-hs-validation-equal-field="#signupModalFormSignupPassword" />
                    <span className="invalid-feedback">Password does not match the confirm password.</span>
                  </div>
                  {/* End Form */}
                  <div className="d-grid mb-3">
                    <button type="submit" className="btn btn-primary form-control-lg">Sign up</button>
                  </div>
                  <div className="text-center">
                    <p className="small mb-0">By continuing you agree to our <a href="#">Terms and Conditions</a></p>
                  </div>
                </form>
              </div>
              {/* End Sign up with Modal */}
              {/* Reset Password */}
              <div id="signupModalFormResetPassword" style={{display: 'none', opacity: 0}}>
                {/* Heading */}
                <div className="text-center mb-7">
                  <h2>Forgot password?</h2>
                  <p>Enter the email address you used when you joined and we'll send you instructions to reset your password.</p>
                </div>
                {/* En dHeading */}
                <form className="js-validate need-validate" noValidate>
                  <div className="mb-3">
                    {/* Form */}
                    <div className="d-flex justify-content-between align-items-center">
                      <label className="form-label" htmlFor="signupModalFormResetPasswordEmail" tabIndex={0}>Your email</label>
                      <a className="js-animation-link form-label-link" href="javascript:;" data-hs-show-animation-options="{
                        &quot;targetSelector&quot;: &quot;#signupModalFormLogin&quot;,
                        &quot;groupName&quot;: &quot;idForm&quot;
                      }">
                        <i className="bi-chevron-left small" /> Back to Log in
                      </a>
                    </div>
                    <input type="email" className="form-control form-control-lg" name="email" id="signupModalFormResetPasswordEmail" tabIndex={1} placeholder="Enter your email address" aria-label="Enter your email address" required />
                    <span className="invalid-feedback">Please enter a valid email address.</span>
                    {/* End Form */}
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary form-control-lg">Submit</button>
                  </div>
                </form>
              </div>
              {/* End Reset Password */}
            </div>
            {/* End Body */}
            {/* Footer */}
            
            {/* End Footer */}
          </div>
        </div>
      </div>
      {/* Go To */}
      <a className="js-go-to go-to position-fixed" href="javascript:;" style={{visibility: 'hidden'}} data-hs-go-to-options="{
      &quot;offsetTop&quot;: 700,
      &quot;position&quot;: {
        &quot;init&quot;: {
          &quot;right&quot;: &quot;2rem&quot;
        },
        &quot;show&quot;: {
          &quot;bottom&quot;: &quot;2rem&quot;
        },
        &quot;hide&quot;: {
          &quot;bottom&quot;: &quot;-2rem&quot;
        }
      }
    }">
        <i className="bi-chevron-up" />
      </a>
      {/* ========== END SECONDARY CONTENTS ========== */}
      {/* JS Global Compulsory  */}
      {/* JS Implementing Plugins */}
      {/* JS Front */}
      {/* JS Plugins Init. */}
      </div>
  );
}
    


export default dynamic (() => Promise.resolve(Fraktional), {ssr: false})