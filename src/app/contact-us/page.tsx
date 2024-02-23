'use client'
import React, { useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer';
import { PostContact } from '../endpoints/api';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MobileMenu from '../components/MobileMenu/MobileMenu';
import './contactus.scss';
import Layout from '../layout';

const contactus = () => {
  const [menuToggler, setMenuToggler] = useState<boolean>(false);

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [details, setDetails] = useState<string>("");


  async function Post(){
    let _id = toast.loading("Sending contact request..", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  

    const payload = {
      firstName,
      lastName,
      email,
      phone,
      details
    }

    const res = await PostContact(payload);
    toast.update(_id, {
      render: "Request sent successfully",
      type: "success",
      isLoading: false,
      autoClose: 2000,
    });
    
  }
  
  return (
    <div>
       <Layout
        title='fraktional'  description="hhhhh" type="dddd"
      >
        <>
  {/* ========== HEADER ========== */}
  <Header 
        menuTogglerFunction={setMenuToggler} 
        menuTogglerValue={menuToggler}  
      />
  <MobileMenu menuToggler={menuToggler} />
  {/* ========== MAIN CONTENT ========== */}
  <main id="content" role="main">
  <ToastContainer />
    {/* Contact Form */}
    <div className="container content-space-t-3 content-space-t-lg-5 content-space-b-2">
      <div className="row">
        <div className="col-lg-6 mb-9 mb-lg-0">
          {/* Heading */}
          <div className="mb-5">
            <h1>Get in touch</h1>
            <p>We'd love to talk about how we can help you.</p>
          </div>
          {/* End Heading */}
          {/* Leaflet */}
          <div className="overflow-hidden" style={{ border: '0'}}>
            <iframe
            width={600}
            height={450}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/search?key=AIzaSyBvivpZTRxbl7MY6aAqhHaDKqK-bp1fnXM&q=The+Workshop+70+7th+Ave+Parktown+JHB+2196"
        ></iframe>
          </div>
          {/* End Leaflet */}
          <div className="row" style={{marginTop: '40px'}}>
            <div className="col-sm-6">
              <h5 className="mb-1">Call us:</h5>
              <p>(010) 346 5261</p>
            </div>
            {/* End Col */}
            <div className="col-sm-6">
              <h5 className="mb-1">Email us:</h5>
              <p>accounts@fraktional.org</p>
            </div>
            {/* End Col */}
            <div className="col-sm-6">
              <h5 className="mb-1">Address:</h5>
              <p>70 7th Ave Parktown, JHB, 2196</p>
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
        {/* End Col */}
        <div className="col-lg-6">
          <div className="ps-lg-5">
            {/* Card */}
            <div className="card" style={{border:"0px !important"}}>
              <div className="card-header border-bottom text-center">
                <h3 className="card-header-title">General enquiries</h3>
              </div>
              <div className="card-body">
                {/* Form */}
                <form >
                  <div className="row gx-3">
                    <div className="col-sm-6">
                      {/* Form */}
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="hireUsFormFirstName"
                        >
                          First name
                        </label>
                        <input
                        onChange={(e=>setFirstName(e.target.value))}
                          type="text"
                          className="form-control form-control-lg"
                          name="hireUsFormNameFirstName"
                          id="hireUsFormFirstName"
                          placeholder="First name"
                          aria-label="First name"
                        />
                      </div>
                      {/* End Form */}
                    </div>
                    {/* End Col */}
                    <div className="col-sm-6">
                      {/* Form */}
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="hireUsFormLasttName"
                        >
                          Last name
                        </label>
                        <input
                        onChange={(e=>setLastName(e.target.value))}
                          type="text"
                          className="form-control form-control-lg"
                          name="hireUsFormNameLastName"
                          id="hireUsFormLasttName"
                          placeholder="Last name"
                          aria-label="Last name"
                        />
                      </div>
                      {/* End Form */}
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                  <div className="row gx-3">
                    <div className="col-sm-6">
                      {/* Form */}
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="hireUsFormWorkEmail"
                        >
                          Email address
                        </label>
                        <input
                        onChange={(e=>setEmail(e.target.value))}
                          type="email"
                          className="form-control form-control-lg"
                          name="hireUsFormNameWorkEmail"
                          id="hireUsFormWorkEmail"
                          placeholder="email@site.com"
                          aria-label="email@site.com"
                        />
                      </div>
                      {/* End Form */}
                    </div>
                    {/* End Col */}
                    <div className="col-sm-6">
                      {/* Form */}
                      <div className="mb-3">
                        <label className="form-label" htmlFor="hireUsFormPhone">
                          Phone{" "}
                          <span className="form-label-secondary">
                            (Optional)
                          </span>
                        </label>
                        <input
                        onChange={(e=>setPhone(e.target.value))}
                          type="text"
                          className="form-control form-control-lg"
                          name="hireUsFormNamePhone"
                          id="hireUsFormPhone"
                          placeholder="+x(xxx)xxx-xx-xx"
                          aria-label="+x(xxx)xxx-xx-xx"
                        />
                      </div>
                      {/* End Form */}
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                  {/* Form */}
                  <div className="mb-3">
                    <label className="form-label" htmlFor="hireUsFormDetails">
                      Details
                    </label>
                    <textarea
                    onChange={(e=>setDetails(e.target.value))}
                      className="form-control form-control-lg"
                      name="hireUsFormNameDetails"
                      id="hireUsFormDetails"
                      placeholder="Tell us about your needs..."
                      aria-label="Tell us about your needs..."
                      rows={4}
                      defaultValue={""}
                    />
                  </div>
                  {/* End Form */}
                  <div className="d-grid">
                    <button type="submit" onClick={(e)=>{e.preventDefault(); Post()}} className="btn" style={{border:"none", backgroundColor: '#FD2DC3', color: '#fff'}}>
                      Send enquiry
                    </button>
                  </div>
                  <div className="text-center">
                    <p className="form-text">
                      We'll get back to you in 1-2 business days.
                    </p>
                  </div>
                </form>
                {/* End Form */}
              </div>
            </div>
            {/* End Card */}
          </div>
        </div>
      </div>
    </div>
    {/* End Contact Form */}
  </main>

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
            <form className="js-validate needs-validation" noValidate>
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
  {/* JS Global Compulsory  */}
  {/* JS Implementing Plugins */}
  {/* JS Front */}
  {/* JS Plugins Init. */}
</></Layout>

    </div>
  )
}

export default contactus