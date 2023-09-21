"use client"
import React from 'react'
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'src/app/styles/theme.min.css';
import 'src/app/styles/snippets.min.css';
import 'src/app/styles/docs.min.css';;
import Header from '@/app/components/header';

function page() {
  return (
    <div>
    <main id="content" role="main">
    <Header/>
      {/* Form */}
      <div className="container content-space-3 content-space-t-lg-4 content-space-b-lg-3">
        <div className="flex-grow-1 mx-auto" style={{maxWidth: '28rem'}}>
          {/* Heading */}
          <div className="text-center mb-5 mb-md-7">
            <h1 className="h2">Welcome to Fraktional</h1>
            <p>Fill out the form to get started.</p>
          </div>
          {/* End Heading */}
          {/* Form */}
          <form className="js-validate needs-validation" noValidate>
            {/* Form */}
            <div className="mb-3">
              <label className="form-label" htmlFor="signupSimpleSignupEmail">Your email</label>
              <input type="email" className="form-control form-control-lg" name="email" id="signupSimpleSignupEmail" placeholder="email@site.com" aria-label="email@site.com" required />
              <span className="invalid-feedback">Please enter a valid email address.</span>
            </div>
            {/* End Form */}
            {/* Form */}
            <div className="mb-3">
              <label className="form-label" htmlFor="signupSimpleSignupPassword">Password</label>
              <div className="input-group input-group-merge" data-hs-validation-validate-class>
                <input type="password" className="js-toggle-password form-control form-control-lg" name="password" id="signupSimpleSignupPassword" placeholder="8+ characters required" aria-label="8+ characters required" required data-hs-toggle-password-options="{
                     &quot;target&quot;: [&quot;.js-toggle-password-target-1&quot;, &quot;.js-toggle-password-target-2&quot;],
                     &quot;defaultClass&quot;: &quot;bi-eye-slash&quot;,
                     &quot;showClass&quot;: &quot;bi-eye&quot;,
                     &quot;classChangeTarget&quot;: &quot;.js-toggle-passowrd-show-icon-1&quot;
                   }" />
                <a className="js-toggle-password-target-1 input-group-append input-group-text" href="javascript:;">
                  <i className="js-toggle-passowrd-show-icon-1 bi-eye" />
                </a>
              </div>
              <span className="invalid-feedback">Your password is invalid. Please try again.</span>
            </div>
            {/* End Form */}
            {/* Form */}
            <div className="mb-3">
              <label className="form-label" htmlFor="signupSimpleSignupConfirmPassword">Confirm password</label>
              <div className="input-group input-group-merge" data-hs-validation-validate-class>
                <input type="password" className="js-toggle-password form-control form-control-lg" name="confirmPassword" id="signupSimpleSignupConfirmPassword" placeholder="8+ characters required" aria-label="8+ characters required" required data-hs-validation-equal-field="#signupSimpleSignupPassword" data-hs-toggle-password-options="{
                   &quot;target&quot;: [&quot;.js-toggle-password-target-1&quot;, &quot;.js-toggle-password-target-2&quot;],
                   &quot;defaultClass&quot;: &quot;bi-eye-slash&quot;,
                   &quot;showClass&quot;: &quot;bi-eye&quot;,
                   &quot;classChangeTarget&quot;: &quot;.js-toggle-passowrd-show-icon-2&quot;
                 }" />
                <a className="js-toggle-password-target-2 input-group-append input-group-text" href="javascript:;">
                  <i className="js-toggle-passowrd-show-icon-2 bi-eye" />
                </a>
              </div>
              <span className="invalid-feedback">Password does not match the confirm password.</span>
            </div>
            {/* End Form */}
            {/* Check */}
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="signupHeroFormPrivacyCheck" name="signupFormPrivacyCheck" required />
              <label className="form-check-label small" htmlFor="signupHeroFormPrivacyCheck"> By submitting this form I have read and acknowledged the <a href="./page-privacy.html">Privacy Policy</a></label>
              <span className="invalid-feedback">Please accept our Privacy Policy.</span>
            </div>
            {/* End Check */}
            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-primary btn-lg">Sign up</button>
            </div>
            <div className="text-center">
              <p>Already have an account? <a className="link" href="/auth/login">Log in here</a></p>
            </div>
          </form>
          {/* End Form */}
        </div>
      </div>
      {/* End Form */}
    </main>
    {/* ========== END MAIN CONTENT ========== */}
    {/* ========== FOOTER ========== */}
    <footer className="bg-dark">
      <div className="container pb-1 pb-lg-5">
        <div className="row content-space-t-2">
          <div className="col-lg-3 mb-7 mb-lg-0">
            {/* Logo */}
            <div className="mb-5">
              <a className="navbar-brand" href="./index.html" aria-label="Space">
                <img className="navbar-brand-logo" src="./assets/svg/logos/logo-white.svg" alt="Image Description" />
              </a>
            </div>
            {/* End Logo */}
            {/* List */}
            <ul className="list-unstyled list-py-1">
              <li><a className="link-sm link-light" href="#"><i className="bi-geo-alt-fill me-1" /> 153 Williamson Plaza, Maggieberg</a></li>
              <li><a className="link-sm link-light" href="tel:1-062-109-9222"><i className="bi-telephone-inbound-fill me-1" /> +1 (062) 109-9222</a></li>
            </ul>
            {/* End List */}
          </div>
          {/* End Col */}
          <div className="col-sm mb-7 mb-sm-0">
            <h5 className="text-white mb-3">Company</h5>
            {/* List */}
            <ul className="list-unstyled list-py-1 mb-0">
              <li><a className="link-sm link-light" href="#">About</a></li>
              <li><a className="link-sm link-light" href="#">Careers <span className="badge bg-warning text-dark rounded-pill ms-1">We're hiring</span></a></li>
              <li><a className="link-sm link-light" href="#">Blog</a></li>
              <li><a className="link-sm link-light" href="#">Customers <i className="bi-box-arrow-up-right small ms-1" /></a></li>
              <li><a className="link-sm link-light" href="#">Hire us</a></li>
            </ul>
            {/* End List */}
          </div>
          {/* End Col */}
          <div className="col-sm mb-7 mb-sm-0">
            <h5 className="text-white mb-3">Features</h5>
            {/* List */}
            <ul className="list-unstyled list-py-1 mb-0">
              <li><a className="link-sm link-light" href="#">Press <i className="bi-box-arrow-up-right small ms-1" /></a></li>
              <li><a className="link-sm link-light" href="#">Release Notes</a></li>
              <li><a className="link-sm link-light" href="#">Integrations</a></li>
              <li><a className="link-sm link-light" href="#">Pricing</a></li>
            </ul>
            {/* End List */}
          </div>
          {/* End Col */}
          <div className="col-sm mb-7 mb-sm-0">
            <h5 className="text-white mb-3">Documentation</h5>
            {/* List */}
            <ul className="list-unstyled list-py-1 mb-0">
              <li><a className="link-sm link-light" href="#">Support</a></li>
              <li><a className="link-sm link-light" href="#">Docs</a></li>
              <li><a className="link-sm link-light" href="#">Status</a></li>
              <li><a className="link-sm link-light" href="#">API Reference</a></li>
              <li><a className="link-sm link-light" href="#">Tech Requirements</a></li>
            </ul>
            {/* End List */}
          </div>
          {/* End Col */}
          <div className="col-sm">
            <h5 className="text-white mb-3">Resources</h5>
            {/* List */}
            <ul className="list-unstyled list-py-1 mb-5">
              <li><a className="link-sm link-light" href="#"><i className="bi-question-circle-fill me-1" /> Help</a></li>
              <li><a className="link-sm link-light" href="#"><i className="bi-person-circle me-1" /> Your Account</a></li>
            </ul>
            {/* End List */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
        <div className="border-top border-white-10 my-7" />
        <div className="row mb-7">
          <div className="col-sm mb-3 mb-sm-0">
            {/* Socials */}
            <ul className="list-inline list-separator list-separator-light mb-0">
              <li className="list-inline-item">
                <a className="link-sm link-light" href="#">Privacy &amp; Policy</a>
              </li>
              <li className="list-inline-item">
                <a className="link-sm link-light" href="#">Terms</a>
              </li>
              <li className="list-inline-item">
                <a className="link-sm link-light" href="#">Site Map</a>
              </li>
            </ul>
            {/* End Socials */}
          </div>
          <div className="col-sm-auto">
            {/* Socials */}
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a className="btn btn-soft-light btn-xs btn-icon" href="#">
                  <i className="bi-facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-soft-light btn-xs btn-icon" href="#">
                  <i className="bi-google" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-soft-light btn-xs btn-icon" href="#">
                  <i className="bi-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-soft-light btn-xs btn-icon" href="#">
                  <i className="bi-github" />
                </a>
              </li>
              <li className="list-inline-item">
                {/* Button Group */}
                <div className="btn-group">
                  <button type="button" className="btn btn-soft-light btn-xs dropdown-toggle" id="footerSelectLanguage" data-bs-toggle="dropdown" aria-expanded="false" data-bs-dropdown-animation>
                    <span className="d-flex align-items-center">
                      <img className="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/us.svg" alt="Image description" width={16} />
                      <span>English (US)</span>
                    </span>
                  </button>
                  <div className="dropdown-menu" aria-labelledby="footerSelectLanguage">
                    <a className="dropdown-item d-flex align-items-center active" href="#">
                      <img className="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/us.svg" alt="Image description" width={16} />
                      <span>English (US)</span>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <img className="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/de.svg" alt="Image description" width={16} />
                      <span>Deutsch</span>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <img className="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/es.svg" alt="Image description" width={16} />
                      <span>Español</span>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                      <img className="avatar avatar-xss avatar-circle me-2" src="./assets/vendor/flag-icon-css/flags/1x1/cn.svg" alt="Image description" width={16} />
                      <span>中文 (繁體)</span>
                    </a>
                  </div>
                </div>
                {/* End Button Group */}
              </li>
            </ul>
            {/* End Socials */}
          </div>
        </div>
        {/* Copyright */}
        <div className="w-md-85 text-lg-center mx-lg-auto">
          <p className="text-white-50 small">© Front. 2021 Htmlstream. All rights reserved.</p>
          <p className="text-white-50 small">When you visit or interact with our sites, services or tools, we or our authorised service providers may use cookies for storing information to help provide you with a better, faster and safer experience and for marketing purposes.</p>
        </div>
        {/* End Copyright */}
      </div>
    </footer>
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
          <div className="modal-footer d-block text-center py-sm-5">
            <small className="text-cap mb-4">Trusted by the world's best teams</small>
            <div className="w-85 mx-auto">
              <div className="row justify-content-between">
                <div className="col">
                  <img className="img-fluid" src="./assets/svg/brands/gitlab-gray.svg" alt="Logo" />
                </div>
                {/* End Col */}
                <div className="col">
                  <img className="img-fluid" src="./assets/svg/brands/fitbit-gray.svg" alt="Logo" />
                </div>
                {/* End Col */}
                <div className="col">
                  <img className="img-fluid" src="./assets/svg/brands/flow-xo-gray.svg" alt="Logo" />
                </div>
                {/* End Col */}
                <div className="col">
                  <img className="img-fluid" src="./assets/svg/brands/layar-gray.svg" alt="Logo" />
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
  )
}

export default page


