'use client'
import React, {useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MobileMenu from '../components/MobileMenu/MobileMenu';
import './faq.scss'


const faq = () => {
  const [menuToggler, setMenuToggler] = useState<boolean>(false);
  const [toggleApplicantDropdown, setToggleApplicantDropdown] = useState<number>();
  
  function showHideApplicantDropdown(currentdropdown: number){
    setToggleApplicantDropdown(currentdropdown);
  }

  return (
    <>
     <Header 
        menuTogglerFunction={setMenuToggler} 
        menuTogglerValue={menuToggler} 
      />
      <MobileMenu menuToggler={menuToggler} />
  {/* ========== MAIN CONTENT ========== */}
  <main id="content" role="main">
    {/* Hero */}
    <div
      className="bg-img-start"
      style={{ backgroundImage: "url(./assets/svg/components/card-11.svg)" }}
    >
      <div className="container content-space-t-3 content-space-t-lg-5 content-space-b-2">
        <div className="w-md-75 w-lg-50 text-center mx-md-auto">
          <h1>FAQ</h1>
          <p>Search our FAQ for answers to anything you might ask.</p>
        </div>
      </div>
    </div>
    {/* End Hero */}
    {/* FAQ */}
    <div className="container content-space-2 content-space-b-lg-3">
      <div className="w-lg-75 mx-lg-auto">
        <div className="d-grid gap-10">
          <div className="d-grid gap-3">
            <h2>Support</h2>
            {/* Accordion */}
            <div
              className="accordion accordion-flush accordion-lg"
              id="accordionFAQBasics"
            >
              {/* Accordion Item */}
              <div className="accordion-item">
                <div className="accordion-header" id="headingBasicsThree">
                  <a
                     onClick={()=>{showHideApplicantDropdown(0)}}
                    className={`accordion-button collapsed ${toggleApplicantDropdown == 0 ? 'open' : ''}`}
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseBasicsThree"
                    aria-expanded="false"
                    aria-controls="collapseBasicsThree"
                  >
                   How will I know when the full platform is live, and I can start using it, with the
                    involvement of the company and developers?
                  </a>
                </div>
                <div
                  id="collapseBasicsThree"
                  className= {toggleApplicantDropdown==0 ?"accordion-collapse collapse show" :"accordion-collapse collapse"}
                  aria-labelledby="headingBasicsThree"
                  data-bs-parent="#accordionFAQBasics"
                >
                  <div className="accordion-body" style={{visibility:"visible"}}>
                  To stay informed about when the full platform is live, it's advisable to sign up for notifications
                  through the company's website or platform. Simply provide your contact details, such as your
                  email address, and opt in to receive updates. This way, you'll be among the first to know when
                  the platform is ready for use, as the company or developers will send you notifications or alerts
                  as soon as it goes live. This will ensure that you stay up-to-date with the platform's progress and
                  are promptly informed when it's accessible for us.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="headingBasicsThree">
                  <a
                     onClick={()=>{showHideApplicantDropdown(1)}}
                    className={`accordion-button collapsed ${toggleApplicantDropdown == 1 ? 'open' : ''}`}
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseBasicsThree"
                    aria-expanded="false"
                    aria-controls="collapseBasicsThree"
                  >
                    Will I have the capability to post job listings or projects on the platform
                  </a>
                </div>
                <div
                  id="collapseBasicsThree"
                  className= {toggleApplicantDropdown==1 ?"accordion-collapse collapse show" :"accordion-collapse collapse"}
                  aria-labelledby="headingBasicsThree"
                  data-bs-parent="#accordionFAQBasics"
                >
                  <div className="accordion-body" style={{visibility:"visible"}}>
                  Yes, you will indeed have the capability to post jobs or projects on our platform. This feature will
                    enable you to share opportunities for developers to sign up and participate.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="headingBasicsThree">
                  <a
                     onClick={()=>{showHideApplicantDropdown(2)}}
                    className={`accordion-button collapsed ${toggleApplicantDropdown == 2 ? 'open' : ''}`}
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseBasicsThree"
                    aria-expanded="false"
                    aria-controls="collapseBasicsThree"
                  >
                    Can I Receive Notifications for Job Matches Based on My Skills as a Developer
                  </a>
                </div>
                <div
                  id="collapseBasicsThree"
                  className= {toggleApplicantDropdown==2 ?"accordion-collapse collapse show" :"accordion-collapse collapse"}
                  aria-labelledby="headingBasicsThree"
                  data-bs-parent="#accordionFAQBasics"
                >
                  <div className="accordion-body" style={{visibility:"visible"}}>
                  Yes, you can receive notifications for job opportunities that match your skills as a developer.
                  Simply sign up on our platform, and you will be automatically notified about new job listings and
                  projects that align with your expertise.
                  </div>
                </div>
              </div>
             
        
              
              {/* End Accordion Item */}
            </div>
            {/* End Accordion */}
          </div>
        </div>
      </div>
    </div>
    {/* End FAQ */}
  </main>
  {/* ========== END MAIN CONTENT ========== */}
  {/* ========== FOOTER ========== */}
  <Footer/>
  {/* ========== END FOOTER ========== */}
  {/* ========== SECONDARY CONTENTS ========== */}
  {/* Sign Up */}
  <div
    className="modal fade"
    id="signupModal"
    tabIndex={-1}
    role="dialog"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        {/* Header */}
        <div className="modal-close">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        {/* End Header */}
        {/* Body */}
        <div className="modal-body">
          {/* Log in */}
          <div
            id="signupModalFormLogin"
            style={{ display: "none", opacity: 0 }}
          >
            {/* Heading */}
            <div className="text-center mb-7">
              <h2>Log in</h2>
              <p>
                Don't have an account yet?
                <a
                  className="js-animation-link link"
                  href="javascript:;"
                  role="button"
                  data-hs-show-animation-options='{
                   "targetSelector": "#signupModalFormSignup",
                   "groupName": "idForm"
                 }'
                >
                  Sign up
                </a>
              </p>
            </div>
            {/* End Heading */}
            <div className="d-grid gap-2">
              <a className="btn btn-white btn-lg" href="#">
                <span className="d-flex justify-content-center align-items-center">
                  <img
                    className="avatar avatar-xss me-2"
                    src="./assets/svg/brands/google-icon.svg"
                    alt="Image Description"
                  />
                  Log in with Google
                </span>
              </a>
              <a
                className="js-animation-link btn btn-primary btn-lg"
                href="#"
                data-hs-show-animation-options='{
                 "targetSelector": "#signupModalFormLoginWithEmail",
                 "groupName": "idForm"
               }'
              >
                Log in with Email
              </a>
            </div>
          </div>
          {/* End Log in */}
          {/* Log in with Modal */}
          <div
            id="signupModalFormLoginWithEmail"
            style={{ display: "none", opacity: 0 }}
          >
            {/* Heading */}
            <div className="text-center mb-7">
              <h2>Log in</h2>
              <p>
                Don't have an account yet?
                <a
                  className="js-animation-link link"
                  href="javascript:;"
                  role="button"
                  data-hs-show-animation-options='{
                   "targetSelector": "#signupModalFormSignup",
                   "groupName": "idForm"
                 }'
                >
                  Sign up
                </a>
              </p>
            </div>
            {/* End Heading */}
            <form className="js-validate needs-validation" >
              {/* Form */}
              <div className="mb-3">
                <label
                  className="form-label"
                  htmlFor="signupModalFormLoginEmail"
                >
                  Your email
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  name="email"
                  id="signupModalFormLoginEmail"
                  placeholder="email@site.com"
                  aria-label="email@site.com"
                  required
                />
                <span className="invalid-feedback">
                  Please enter a valid email address.
                </span>
              </div>
              {/* End Form */}
              {/* Form */}
              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center">
                  <label
                    className="form-label"
                    htmlFor="signupModalFormLoginPassword"
                  >
                    Password
                  </label>
                  <a
                    className="js-animation-link form-label-link"
                    href="javascript:;"
                    data-hs-show-animation-options='{
                 "targetSelector": "#signupModalFormResetPassword",
                 "groupName": "idForm"
               }'
                  >
                    Forgot Password?
                  </a>
                </div>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  name="password"
                  id="signupModalFormLoginPassword"
                  placeholder="8+ characters required"
                  aria-label="8+ characters required"
                  required
                  minLength={8}
                />
                <span className="invalid-feedback">
                  Please enter a valid password.
                </span>
              </div>
              {/* End Form */}
              <div className="d-grid mb-3">
                <button
                  type="submit"
                  className="btn btn-primary form-control-lg"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
          {/* End Log in with Modal */}
          {/* Sign up */}
          <div id="signupModalFormSignup">
            {/* Heading */}
            <div className="text-center mb-7">
              <h2>Sign up</h2>
              <p>
                Already have an account?
                <a
                  className="js-animation-link link"
                  href="javascript:;"
                  role="button"
                  data-hs-show-animation-options='{
                   "targetSelector": "#signupModalFormLogin",
                   "groupName": "idForm"
                 }'
                >
                  Log in
                </a>
              </p>
            </div>
            {/* End Heading */}
            <div className="d-grid gap-3">
              <a className="btn btn-white btn-lg" href="#">
                <span className="d-flex justify-content-center align-items-center">
                  <img
                    className="avatar avatar-xss me-2"
                    src="./assets/svg/brands/google-icon.svg"
                    alt="Image Description"
                  />
                  Sign up with Google
                </span>
              </a>
              <a
                className="js-animation-link btn btn-primary btn-lg"
                href="#"
                data-hs-show-animation-options='{
                 "targetSelector": "#signupModalFormSignupWithEmail",
                 "groupName": "idForm"
               }'
              >
                Sign up with Email
              </a>
              <div className="text-center">
                <p className="small mb-0">
                  By continuing you agree to our{" "}
                  <a href="#">Terms and Conditions</a>
                </p>
              </div>
            </div>
          </div>
          {/* End Sign up */}
          {/* Sign up with Modal */}
          <div
            id="signupModalFormSignupWithEmail"
            style={{ display: "none", opacity: 0 }}
          >
            {/* Heading */}
            <div className="text-center mb-7">
              <h2>Sign up</h2>
              <p>
                Already have an account?
                <a
                  className="js-animation-link link"
                  href="javascript:;"
                  role="button"
                  data-hs-show-animation-options='{
                   "targetSelector": "#signupModalFormLogin",
                   "groupName": "idForm"
                 }'
                >
                  Log in
                </a>
              </p>
            </div>
            {/* End Heading */}
            <form className="js-validate need-validate" noValidate>
              {/* Form */}
              <div className="mb-3">
                <label
                  className="form-label"
                  htmlFor="signupModalFormSignupEmail"
                >
                  Your email
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  name="email"
                  id="signupModalFormSignupEmail"
                  placeholder="email@site.com"
                  aria-label="email@site.com"
                  required
                />
                <span className="invalid-feedback">
                  Please enter a valid email address.
                </span>
              </div>
              {/* End Form */}
              {/* Form */}
              <div className="mb-3">
                <label
                  className="form-label"
                  htmlFor="signupModalFormSignupPassword"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  name="password"
                  id="signupModalFormSignupPassword"
                  placeholder="8+ characters required"
                  aria-label="8+ characters required"
                  required
                />
                <span className="invalid-feedback">
                  Your password is invalid. Please try again.
                </span>
              </div>
              {/* End Form */}
              {/* Form */}
              <div className="mb-3" data-hs-validation-validate-class="">
                <label
                  className="form-label"
                  htmlFor="signupModalFormSignupConfirmPassword"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  name="confirmPassword"
                  id="signupModalFormSignupConfirmPassword"
                  placeholder="8+ characters required"
                  aria-label="8+ characters required"
                  required
                  data-hs-validation-equal-field="#signupModalFormSignupPassword"
                />
                <span className="invalid-feedback">
                  Password does not match the confirm password.
                </span>
              </div>
              {/* End Form */}
              <div className="d-grid mb-3">
                <button
                  type="submit"
                  className="btn btn-primary form-control-lg"
                >
                  Sign up
                </button>
              </div>
              <div className="text-center">
                <p className="small mb-0">
                  By continuing you agree to our{" "}
                  <a href="#">Terms and Conditions</a>
                </p>
              </div>
            </form>
          </div>
          {/* End Sign up with Modal */}
          {/* Reset Password */}
          <div
            id="signupModalFormResetPassword"
            style={{ display: "none", opacity: 0 }}
          >
            {/* Heading */}
            <div className="text-center mb-7">
              <h2>Forgot password?</h2>
              <p>
                Enter the email address you used when you joined and we'll send
                you instructions to reset your password.
              </p>
            </div>
            {/* En dHeading */}
            <form className="js-validate need-validate" noValidate>
              <div className="mb-3">
                {/* Form */}
                <div className="d-flex justify-content-between align-items-center">
                  <label
                    className="form-label"
                    htmlFor="signupModalFormResetPasswordEmail"
                    tabIndex={0}
                  >
                    Your email
                  </label>
                  <a
                    className="js-animation-link form-label-link"
                    href="javascript:;"
                    data-hs-show-animation-options='{
                   "targetSelector": "#signupModalFormLogin",
                   "groupName": "idForm"
                 }'
                  >
                    <i className="bi-chevron-left small" /> Back to Log in
                  </a>
                </div>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  name="email"
                  id="signupModalFormResetPasswordEmail"
                  tabIndex={1}
                  placeholder="Enter your email address"
                  aria-label="Enter your email address"
                  required
                />
                <span className="invalid-feedback">
                  Please enter a valid email address.
                </span>
                {/* End Form */}
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary form-control-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* End Reset Password */}
        </div>
        {/* End Body */}
        {/* Footer */}
        <div className="modal-footer d-block text-center py-sm-5">
          <small className="text-cap mb-4">
            Trusted by the world's best teams
          </small>
          <div className="w-85 mx-auto">
            <div className="row justify-content-between">
              <div className="col">
                <img
                  className="img-fluid"
                  src="./assets/svg/brands/gitlab-gray.svg"
                  alt="Logo"
                />
              </div>
              {/* End Col */}
              <div className="col">
                <img
                  className="img-fluid"
                  src="./assets/svg/brands/fitbit-gray.svg"
                  alt="Logo"
                />
              </div>
              {/* End Col */}
              <div className="col">
                <img
                  className="img-fluid"
                  src="./assets/svg/brands/flow-xo-gray.svg"
                  alt="Logo"
                />
              </div>
              {/* End Col */}
              <div className="col">
                <img
                  className="img-fluid"
                  src="./assets/svg/brands/layar-gray.svg"
                  alt="Logo"
                />
              </div>
              {/* End Col */}
            </div>
          </div>
          {/* End Row */}
        </div>
        {/* End Footer */}
      </div>
    </div>
  </div>
  {/* Go To */}
    <a
      className="js-go-to go-to position-fixed"
      href="javascript:;"
      style={{ visibility: "hidden" }}
      data-hs-go-to-options='{
  "offsetTop": 700,
  "position": {
    "init": {
      "right": "2rem"
    },
    "show": {
      "bottom": "2rem"
    },
    "hide": {
      "bottom": "-2rem"
    }
  }
      }'
  >
    <i className="bi-chevron-up" />
  </a>
  {/* ========== END SECONDARY CONTENTS ========== */}
  {/* JS Implementing Plugins */}
  {/* JS Front */}
  {/* JS Plugins Init. */}
</>

  )
}

export default faq;