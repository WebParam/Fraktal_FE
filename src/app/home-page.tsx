"use client"
import React , {useState} from 'react'
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'src/app/styles/theme.min.css';
import 'src/app/styles/snippets.min.css';
import 'src/app/styles/docs.min.css';
import logo from './images/FraktionalLogo.png'
import image2 from './images/img2.png'
import Image from 'next/image';
import Image1 from './images/img1.jpg';
import Image2 from './images/img2.jpg';
import Image6 from './images/img6.jpg';
import Image3 from './images/img3.jpg';
import Image31 from './images/img31.jpg';
import image4 from './images/img4.jpg';
import fitbit from './images/company-logos/fitbit-gray.png';
import forbesdark from './images/company-logos/forbes-dark.png';
import us from './images/country-flags/us.png';
import layarDark from './images/company-logos/layar-dark.png';
import mailchip from './images/company-logos/mailchimp-dark.png';
import mailchipPrimary from './images/company-logos/mailchimp-primary.png';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import { FaBars, FaTimes } from 'react-icons/fa'; 
import "./styles/home.css"
import Header from './components/header';

export default function Home() {



  return (
    <div>
    <main   id="content" role="main">
 <Header/>
      <div >
        <div className="container d-lg-flex align-items-lg-center content-space-t-3 content-space-lg-0 min-vh-lg-100">
          {/* Heading */}
          <div className="w-100">
            <div className="row">
              <div className="col-lg-5">
                <div className="mb-5">
                  <h1 className="display-4 mb-3">
                    Turn your ideas into a
                    <span className="text-primary text-highlight-warning">
                      <span className="js-typedjs" data-hs-typed-options="{
                        &quot;strings&quot;: [&quot;startup.&quot;, &quot;future.&quot;, &quot;success.&quot;],
                        &quot;typeSpeed&quot;: 90,
                        &quot;loop&quot;: true,
                        &quot;backSpeed&quot;: 30,
                        &quot;backDelay&quot;: 2500
                      }" />
                    </span>
                  </h1>
                  <p className="lead">Front's feature-rich designed demo pages help you create the best possible product.</p>
                </div>
                <div className="d-grid d-sm-flex gap-3">
                  <a className="btn btn-primary btn-transition px-6" href="/auth/login">Get started</a>
                  <a className="btn btn-link" href="#">Learn more <i className="bi-chevron-right small ms-1" /></a>
                </div>
              </div>
              {/* End Col */}
            </div>
            {/* End Row */}
          </div>
          {/* End Title & Description */}
          {/* SVG Shape */}
          <div className="col-lg-7 col-xl-6 d-none d-lg-block position-absolute top-0 end-0 pe-0" style={{marginTop: '6.75rem'}}>
            <Image width={400} height={50} src = {image2} alt = "image2" />
          </div>
          {/* End SVG Shape */}
        </div>
      </div>
      {/* End Hero */}
      {/* Card Grid */}
      <div className="container content-space-2 content-space-t-xl-3 content-space-b-lg-3">
        {/* Heading */}
        <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5">
          <h2>Learn to develop sites with components and design systems</h2>
        </div>
        {/* End Heading */}
        <div className="text-center mb-10">
          {/* List Checked */}
          <ul className="list-inline list-checked list-checked-primary">
            <li className="list-inline-item list-checked-item">Asynchronous collaboration</li>
            <li className="list-inline-item list-checked-item">Updates and announcements</li>
            <li className="list-inline-item list-checked-item">Training and team building</li>
          </ul>
          {/* End List Checked */}
        </div>
        <div className="row mb-5 mb-md-0">
          <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
            {/* Card */}
            <div className="card card-sm h-100">
              <div className="p-2">
                <Image width={400} height={50} className = "image-card" src = {Image1} alt = "image2" />

              </div>
              <div className="card-body">
                <h4 className="card-title">Front App</h4>
                <p className="card-text">Front App is an easier way to search on Android.</p>
                {/* List Pointer */}
                <ul className="list-pointer mb-0">
                  <li className="list-pointer-item">Advanced Analytics</li>
                  <li className="list-pointer-item">Digital Marketing</li>
                  <li className="list-pointer-item">Organization</li>
                </ul>
                {/* End List Pointer */}
              </div>
              <a className="card-footer card-link border-top" href="#">Learn more <i className="bi-chevron-right small ms-1" /></a>
            </div>
            {/* End Card */}
          </div>
          {/* End Col */}
          <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
            {/* Card */}
            <div className="card card-sm h-100">
              <div className="p-2">
                <Image width={400} height={50} className = "image-card" src = {Image2} alt = "image2" />

              </div>
              <div className="card-body">
                <h4 className="card-title">Front Chat</h4>
                <p className="card-text">Front Chat is a new way to communicate with your team.</p>
                {/* List Pointer */}
                <ul className="list-pointer mb-0">
                  <li className="list-pointer-item">Cost Transformation</li>
                  <li className="list-pointer-item">Customer Experience</li>
                  <li className="list-pointer-item">Mergers and Acquisitions</li>
                </ul>
                {/* End List Pointer */}
              </div>
              <a className="card-footer card-link border-top" href="#">Learn more <i className="bi-chevron-right small ms-1" /></a>
            </div>
            {/* End Card */}
          </div>
          {/* End Col */}
          <div className="col-sm-6 col-lg-4">
            {/* Card */}
            <div className="card card-sm h-100">
              <div className="p-2">
                <Image width={400} height={50} className = "image-card" src = {Image3} alt = "image2" />

              </div>
              <div className="card-body">
                <h4 className="card-title">Front Calendar</h4>
                <p className="card-text">Discover an easier way to manage contacts, sales and grow lasting relationships.</p>
                {/* List Pointer */}
                <ul className="list-pointer mb-0">
                  <li className="list-pointer-item">Enterprise Technology</li>
                  <li className="list-pointer-item">Private Equity</li>
                  <li className="list-pointer-item">Sustainability</li>
                </ul>
                {/* End List Pointer */}
              </div>
              <a className="card-footer card-link border-top" href="#">Learn more <i className="bi-chevron-right small ms-1" /></a>
            </div>
            {/* End Card */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>
      {/* End Card Grid */}
      {/* Features */}
      <div className="position-relative bg-light rounded-2 mx-3 mx-lg-10">
        <div className="container content-space-2 content-space-lg-3">
          {/* Heading */}
          <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5">
            <h2>Wow your audience from the first second</h2>
            <p>The powerful and flexible theme for all kinds of businesses</p>
          </div>
          {/* End Heading */}
          <div className="text-center mb-10">
            {/* List Checked */}
            <ul className="list-inline list-checked list-checked-primary">
              <li className="list-inline-item list-checked-item">Responsive</li>
              <li className="list-inline-item list-checked-item">5-star support</li>
              <li className="list-inline-item list-checked-item">Constant updates</li>
            </ul>
            {/* End List Checked */}
          </div>
          <div className="row">
            <div className="col-lg-7 mb-9 mb-lg-0">
              <div className="pe-lg-6">
                {/* Browser Device */}
                <figure className="device-browser">
                  <div className="device-browser-header">
                    <div className="device-browser-header-btn-list">
                      <span className="device-browser-header-btn-list-btn" />
                      <span className="device-browser-header-btn-list-btn" />
                      <span className="device-browser-header-btn-list-btn" />
                    </div>
                    <div className="device-browser-header-browser-bar">www.htmlstream.com/front/</div>
                  </div>
                  <div className="device-browser-frame">
                    <Image width={700} height={100} className = "image-card" src = {Image6} alt = "image2" />

                  </div>
                </figure>
                {/* End Browser Device */}
              </div>
            </div>
            {/* End Col */}
            <div className="col-lg-5">
              {/* Heading */}
              <div className="mb-4">
                <h2>Collaborative tools to design user experience</h2>
                <p>We help businesses bring ideas to life in the digital world, by designing and implementing the technology tools that they need to win.</p>
              </div>
              {/* End Heading */}
              {/* List Checked */}
              <ul className="list-checked list-checked-primary mb-5">
                <li className="list-checked-item">Less routine – more creativity</li>
                <li className="list-checked-item">Hundreds of thousands saved</li>
                <li className="list-checked-item">Scale budgets efficiently</li>
              </ul>
              {/* End List Checked */}
              <a className="btn btn-primary" href="/auth/login">Get started</a>
              <hr className="my-5" />
              <span className="d-block">Trusted by leading companies</span>
              <div className="row">
                <div className="col py-3">
                <Image className = "image-card" src = {fitbit} alt = "image2" />
                </div>
                {/* End Col */}
                <div className="col py-3">
                <Image className = "image-card" src = {forbesdark} alt = "image2" />

                </div>
                {/* End Col */}
                <div className="col py-3">
                <Image className = "image-card" src = {mailchip} alt = "image2" />

                </div>
                {/* End Col */}
                <div className="col py-3">
                <Image className = "image-card" src = {layarDark} alt = "image2" />

                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
      </div>
      {/* End Features */}
      {/* Testimonials */}
      <div className="container content-space-2 content-space-lg-3">
        <div className="row align-items-md-center">
          <div className="col-md-5 d-none d-md-block">
          <Image className = "image-card" src = {Image31} alt = "image2" />
          </div>
          {/* End Col */}
          <div className="col-md-7">
            {/* Blockquote */}
            <figure className="pe-md-7">
              <div className="mb-4">
              <Image className = "image-card" src = {mailchipPrimary} alt = "image2" />

              </div>
              <blockquote className="blockquote blockquote-lg">" I'm absolutely floored by the level of care and attention to detail the team at Htmlstream have put into this theme and for one can guarantee that I will be a return customer. "</blockquote>
              <figcaption className="blockquote-footer">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0 d-md-none">
                  <Image className = "image-card" src = {image4} alt = "image2" />
                  </div>
                  <div className="flex-grow-1 ms-3 ms-md-0">
                    Lewis
                    <span className="blockquote-footer-source">Senior Director of Operations at Mailchimp</span>
                  </div>
                </div>
              </figcaption>
            </figure>
            {/* End Blockquote */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>
      {/* End Testimonials */}
      {/* Stats */}
      <div className="bg-light rounded-2 mx-3 mx-lg-10">
        <div className="container content-space-2">
          <div className="row justify-content-center">
            <div className="col-sm-6 col-md-4 mb-7 mb-md-0">
              {/* Stats */}
              <div className="text-center">
                <h2 className="display-4"><i className="bi-arrow-down-short text-danger" />47%</h2>
                <p className="mb-0">fewer meetings across<br />organizations</p>
              </div>
              {/* End Stats */}
            </div>
            {/* End Col */}
            <div className="col-sm-6 col-md-4 mb-7 mb-md-0">
              {/* Stats */}
              <div className="text-center">
                <h2 className="display-4"><i className="bi-arrow-up-short text-success" />23%</h2>
                <p className="mb-0">increase in traffic on<br />webpages with Looms</p>
              </div>
              {/* End Stats */}
            </div>
            {/* End Col */}
            <div className="col-sm-6 col-md-4">
              {/* Stats */}
              <div className="text-center">
                <h2 className="display-4"><i className="bi-arrow-up-short text-success" />9.3%</h2>
                <p className="mb-0">boost in reply rates across<br />sales outreach</p>
              </div>
              {/* End Stats */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
      </div>
      {/* End Stats */}
      {/* Card Grid */}
      <div className="container content-space-2 content-space-lg-3">
        {/* Heading */}
        <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5">
          <h2>Discover more</h2>
        </div>
        {/* End Heading */}
        <div className="overflow-hidden">
          <div className="row gx-lg-7">
            <div className="col-sm-6 col-lg-4 mb-5">
              {/* Card */}
              <a className="card card-flush h-100" href="#" data-aos="fade-up">
                <img className="card-img" src="./assets/img/480x320/img33.jpg" alt="Image Description" />
                <div className="card-body">
                  <span className="card-subtitle text-body">Read the blog</span>
                  <h4 className="card-title text-inherit">Have a meaningful impact</h4>
                  <p className="card-text text-body">Opportunities to Front who have proven to be good at executing on them.</p>
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col-sm-6 col-lg-4 mb-5">
              {/* Card */}
              <a className="card card-flush h-100" href="#" data-aos="fade-up" data-aos-delay={150}>
                <img className="card-img" src="./assets/img/480x320/img34.jpg" alt="Image Description" />
                <div className="card-body">
                  <span className="card-subtitle text-body">Read the blog</span>
                  <h4 className="card-title text-inherit">Documentation</h4>
                  <p className="card-text text-body">Whether you're a startup or a global enterprise, learn how to integrate with Front.</p>
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col-sm-6 col-lg-4 mb-5">
              {/* Card */}
              <a className="card card-flush h-100" href="#" data-aos="fade-up" data-aos-delay={200}>
                <img className="card-img" src="./assets/img/480x320/img35.jpg" alt="Image Description" />
                <div className="card-body">
                  <span className="card-subtitle text-body">Learn about other solutions</span>
                  <h4 className="card-title text-inherit">Explore the Snippets tool</h4>
                  <p className="card-text text-body">Quickly Front sample components, copy-paste codes.</p>
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
        {/* Card Info */}
        <div className="text-center">
          <div className="card card-info-link card-sm">
            <div className="card-body">
              Want to read more? <a className="card-link ms-2" href="#">Go here <span className="bi-chevron-right small ms-1" /></a>
            </div>
          </div>
        </div>
        {/* End Card Info */}
      </div>
      {/* End Card Grid */}
    </main>
    {/* ========== END MAIN CONTENT ========== */}
    {/* ========== FOOTER ========== */}
    <footer className="bg-light">
      <div className="container pb-1 pb-lg-7">
        <div className="row content-space-t-2">
          <div className="col-lg-3 mb-7 mb-lg-0">
            {/* Logo */}

            {/* End Logo */}
            {/* List */}
            <ul className="list-unstyled list-py-1">
              <li><a className="link-sm link-secondary" href="#"><i className="bi-geo-alt-fill me-1" /> 153 Williamson Plaza, Maggieberg</a></li>
              <li><a className="link-sm link-secondary" href="tel:1-062-109-9222"><i className="bi-telephone-inbound-fill me-1" /> +1 (062) 109-9222</a></li>
            </ul>
            {/* End List */}
          </div>
          {/* End Col */}
          <div className="col-sm mb-7 mb-sm-0">
            <h5 className="mb-3">Company</h5>
            {/* List */}
            <ul className="list-unstyled list-py-1 mb-0">
              <li><a className="link-sm link-secondary" href="#">About</a></li>
              <li><a className="link-sm link-secondary" href="#">Careers <span className="badge bg-warning text-dark rounded-pill ms-1">We're hiring</span></a></li>
              <li><a className="link-sm link-secondary" href="#">Blog</a></li>
              <li><a className="link-sm link-secondary" href="#">Customers <i className="bi-box-arrow-up-right small ms-1" /></a></li>
              <li><a className="link-sm link-secondary" href="#">Hire us</a></li>
            </ul>
            {/* End List */}
          </div>
          {/* End Col */}
          <div className="col-sm mb-7 mb-sm-0">
            <h5 className="mb-3">Features</h5>
            {/* List */}
            <ul className="list-unstyled list-py-1 mb-0">
              <li><a className="link-sm link-secondary" href="#">Press <i className="bi-box-arrow-up-right small ms-1" /></a></li>
              <li><a className="link-sm link-secondary" href="#">Release Notes</a></li>
              <li><a className="link-sm link-secondary" href="#">Integrations</a></li>
              <li><a className="link-sm link-secondary" href="#">Pricing</a></li>
            </ul>
            {/* End List */}
          </div>
          {/* End Col */}
          <div className="col-sm mb-7 mb-sm-0">
            <h5 className="mb-3">Documentation</h5>
            {/* List */}
            <ul className="list-unstyled list-py-1 mb-0">
              <li><a className="link-sm link-secondary" href="#">Support</a></li>
              <li><a className="link-sm link-secondary" href="#">Docs</a></li>
              <li><a className="link-sm link-secondary" href="#">Status</a></li>
              <li><a className="link-sm link-secondary" href="#">API Reference</a></li>
              <li><a className="link-sm link-secondary" href="#">Tech Requirements</a></li>
            </ul>
            {/* End List */}
          </div>
          {/* End Col */}
          <div className="col-sm">
            <h5 className="mb-3">Resources</h5>
            {/* List */}
            <ul className="list-unstyled list-py-1 mb-5">
              <li><a className="link-sm link-secondary" href="#"><i className="bi-question-circle-fill me-1" /> Help</a></li>
              <li><a className="link-sm link-secondary" href="#"><i className="bi-person-circle me-1" /> Your Account</a></li>
            </ul>
            {/* End List */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
        <div className="border-top my-7" />
        <div className="row mb-7">
          <div className="col-sm mb-3 mb-sm-0">
            {/* Socials */}
            <ul className="list-inline list-separator mb-0">
              <li className="list-inline-item">
                <a className="text-body" href="#">Privacy &amp; Policy</a>
              </li>
              <li className="list-inline-item">
                <a className="text-body" href="#">Terms</a>
              </li>
              <li className="list-inline-item">
                <a className="text-body" href="#">Site Map</a>
              </li>
            </ul>
            {/* End Socials */}
          </div>
          <div className="col-sm-auto">
            {/* Socials */}
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a className="btn btn-soft-secondary btn-xs btn-icon" href="#">
                  <i className="bi-facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-soft-secondary btn-xs btn-icon" href="#">
                  <i className="bi-google" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-soft-secondary btn-xs btn-icon" href="#">
                  <i className="bi-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-soft-secondary btn-xs btn-icon" href="#">
                  <i className="bi-github" />
                </a>
              </li>
              <li className="list-inline-item">
                {/* Button Group */}
                <div className="btn-group">
                  <button type="button" className="btn btn-soft-secondary btn-xs " >
                    <span className="d-flex align-items-center">
                    <Image className = "image-card" src = {us} width={16} alt = "image2" />
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
          <p className="text-muted small">© Front. 2021 Htmlstream. All rights reserved.</p>
          <p className="text-muted small">When you visit or interact with our sites, services or tools, we or our authorised service providers may use cookies for storing information to help provide you with a better, faster and safer experience and for marketing purposes.</p>
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
    {/*  */}
    {/* JS Plugins Init. */}
    </div>
    
  )
}
