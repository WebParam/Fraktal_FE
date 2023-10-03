"use client"
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import card11 from '../../assets/svg/components/card-11.svg';
import dots from "../../assets/svg/components/dots-lg.svg";
import Image from 'next/image';


function Pricing() {
    return (
        <>
        
        <main id="content" role="main">
        <div className="overflow-hidden">
            {/* Hero */}
            <div className="position-relative bg-img-start" style={{backgroundImage: `url(${card11})`}}>
            <div className="container content-space-t-3 content-space-t-lg-5 content-space-b-2 content-space-b-lg-3">
                {/* Heading */}
                <div className="w-md-75 w-lg-50 text-center mx-auto mb-9">
                <h1>Find the right plan for your site</h1>
                </div>
                {/* End Heading */}
                {/* Form Switch */}
                <div className="d-flex justify-content-center">
                <div className="form-check form-switch form-switch-between">
                    <label className="form-check-label">Monthly</label>
                    <input className="js-toggle-switch form-check-input" type="checkbox" defaultChecked data-hs-toggle-switch-options="{
                        &quot;targetSelector&quot;: &quot;#pricingCount1, #pricingCount2, #pricingCount3&quot;
                    }" />
                    <label className="form-check-label form-switch-promotion">
                    Annually
                    <span className="form-switch-promotion-container">
                        <span className="form-switch-promotion-body">
                        <svg className="form-switch-promotion-arrow" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 99.3 57" width={48}>
                            <path fill="none" stroke="#bdc5d1" strokeWidth={4} strokeLinecap="round" strokeMiterlimit={10} d="M2,39.5l7.7,14.8c0.4,0.7,1.3,0.9,2,0.4L27.9,42" />
                            <path fill="none" stroke="#bdc5d1" strokeWidth={4} strokeLinecap="round" strokeMiterlimit={10} d="M11,54.3c0,0,10.3-65.2,86.3-50" />
                        </svg>
                        <span className="form-switch-promotion-text">
                            <span className="badge bg-primary rounded-pill ms-1">Save up to 10%</span>
                        </span>
                        </span>
                    </span>
                    </label>
                </div>
                </div>
                {/* End Form Switch */}
            </div>
            </div>
            {/* End Hero */}
            {/* Pricing */}
            <div className="container mt-n5 mt-lg-n10">
            <div className="position-relative zi-1 mb-10">
                <div className="row">
                <div className="col-md mb-3 mb-md-0">
                    {/* Card */}
                    <div className="card h-100 zi-1">
                    <div className="card-header text-center">
                        <div className="mb-2">
                        <span className="fs-5 align-top text-dark fw-semibold">$</span>
                        <span id="pricingCount1" className="fs-1 text-dark fw-semibold" data-hs-toggle-switch-item-options="{
                            &quot;min&quot;: 29,
                            &quot;max&quot;: 19
                            }">29</span>
                        <span>/mo</span>
                        </div>
                        <h3 className="card-title">Professional</h3>
                        <p className="card-text">All the basics for starting a new business</p>
                    </div>
                    <div className="card-body d-flex justify-content-center py-0">
                        {/* List Checked */}
                        <ul className="list-checked list-checked-soft-bg-primary">
                        <li className="list-checked-item">1 user</li>
                        <li className="list-checked-item">Front plan features</li>
                        <li className="list-checked-item">1 app</li>
                        </ul>
                        {/* End List Checked */}
                    </div>
                    <div className="card-footer text-center">
                        <div className="d-grid mb-2">
                        <button type="button" className="btn btn-ghost-primary">Try free for 30 days</button>
                        </div>
                        <p className="card-text text-muted small">No card required</p>
                    </div>
                    </div>
                    {/* End Card */}
                </div>
                {/* End Col */}
                <div className="col-md mb-3 mb-md-0">
                    {/* Card */}
                    <div className="card bg-primary h-100 zi-1">
                    <div className="card-header text-center">
                        <div className="text-white mb-2">
                        <span className="fs-5 align-top fw-semibold">$</span>
                        <span id="pricingCount2" className="fs-1 fw-semibold" data-hs-toggle-switch-item-options="{
                            &quot;min&quot;: 49,
                            &quot;max&quot;: 39
                            }">49</span>
                        <span>/mo</span>
                        </div>
                        <h3 className="card-title text-white">Team</h3>
                        <p className="card-text text-white-70">Everything you need for a growing business</p>
                    </div>
                    <div className="card-body d-flex justify-content-center py-0">
                        {/* List Checked */}
                        <ul className="list-checked list-checked-soft-bg-light">
                        <li className="list-checked-item text-white">3 users</li>
                        <li className="list-checked-item text-white">Front plan features</li>
                        <li className="list-checked-item text-white">3 apps</li>
                        <li className="list-checked-item text-white">Product support</li>
                        </ul>
                        {/* End List Checked */}
                    </div>
                    <div className="card-footer text-center">
                        <div className="d-grid mb-2">
                        <button type="button" className="btn btn-light">Try free for 30 days</button>
                        </div>
                        <p className="card-text text-white-70 small">No card required</p>
                    </div>
                    </div>
                    {/* End Card */}
                </div>
                {/* End Col */}
                <div className="col-md mb-3 mb-md-0">
                    {/* Card */}
                    <div className="card h-100 zi-1">
                    <div className="card-header text-center">
                        <div className="mb-2">
                        <span className="fs-5 align-top text-dark fw-semibold">$</span>
                        <span id="pricingCount3" className="fs-1 text-dark fw-semibold" data-hs-toggle-switch-item-options="{
                            &quot;min&quot;: 69,
                            &quot;max&quot;: 59
                            }">69</span>
                        <span>/mo</span>
                        </div>
                        <h3 className="card-title">Enterprise</h3>
                        <p className="card-text">Advanced features for scaling your business</p>
                    </div>
                    <div className="card-body d-flex justify-content-center py-0">
                        {/* List Checked */}
                        <ul className="list-checked list-checked-soft-bg-primary">
                        <li className="list-checked-item">Unlimited users</li>
                        <li className="list-checked-item">Front plan features</li>
                        <li className="list-checked-item">Unlimited apps</li>
                        <li className="list-checked-item">Product support</li>
                        </ul>
                        {/* End List Checked */}
                    </div>
                    <div className="card-footer text-center">
                        <div className="d-grid mb-2">
                        <button type="button" className="btn btn-ghost-primary">Try free for 30 days</button>
                        </div>
                        <p className="card-text text-muted small">No card required</p>
                    </div>
                    </div>
                    {/* End Card */}
                </div>
                {/* End Col */}
                </div>
                {/* End Row */}
                {/* SVG Elements */}
                <figure className="position-absolute bottom-0 start-0 mb-n7 ms-n7" style={{width: '9rem'}}>
                <svg viewBox="0 0 522 504" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M332 504H510.4C516.8 504 522 498.8 522 492.4V314C522 209.1 436.9 124 332 124C227.1 124 142 209.1 142 314C142 418.9 227.1 504 332 504Z" fill="#00C9A7" />
                    <path d="M190 380H11.6C5.2 380 0 374.8 0 368.4V190C0 85.1 85.1 0 190 0C294.9 0 380 85.1 380 190C380 294.9 294.9 380 190 380Z" fill="#377dff" />
                </svg>
                </figure>
                <figure className="position-absolute top-0 end-0 mt-n8 me-n8" style={{width: '10rem'}}>
                <Image className="img-fluid" src={dots} alt="Image Description" />
                </figure>
                {/* End SVG Elements */}
            </div>
            {/* Card Info */}
            <div className="text-center">
                <div className="card card-info-link card-sm">
                <div className="card-body">
                    Prefer to start with the trial version?  <a className="card-link ms-2" href="#">Go here <span className="bi-chevron-right small ms-1" /></a>
                </div>
                </div>
            </div>
            {/* End Card Info */}
            </div>
            {/* End Pricing */}
        </div>
        {/* Clients */}
        <div className="container content-space-2 content-space-lg-4">
            {/* Heading */}
            <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
            <h2>Trusted by Open Source, enterprise, and more than 33,000 of you</h2>
            </div>
            {/* End Heading */}
            <div className="row justify-content-center text-center">
            <div className="col-4 col-sm-3 col-md-2 py-3">
                {/* <Image className="avatar avatar-lg avatar-4x3 avatar-centered" src="./assets/svg/brands/amazon-dark.svg" alt="Logo" /> */}
            </div>
            {/* End Col */}
            <div className="col-4 col-sm-3 col-md-2 py-3">
                {/* <Image className="avatar avatar-lg avatar-4x3 avatar-centered" src="./assets/svg/brands/kaplan-dark.svg" alt="Logo" /> */}
            </div>
            {/* End Col */}
            <div className="col-4 col-sm-3 col-md-2 py-3">
                {/* <Image className="avatar avatar-lg avatar-4x3 avatar-centered" src="./assets/svg/brands/google-dark.svg" alt="Logo" /> */}
            </div>
            {/* End Col */}
            <div className="col-4 col-sm-3 col-md-2 py-3">
                <img className="avatar avatar-lg avatar-4x3 avatar-centered" src="./assets/svg/brands/airbnb-dark.svg" alt="Logo" />
            </div>
            {/* End Col */}
            <div className="col-4 col-sm-3 col-md-2 py-3">
                <img className="avatar avatar-lg avatar-4x3 avatar-centered" src="./assets/svg/brands/shopify-dark.svg" alt="Logo" />
            </div>
            {/* End Col */}
            <div className="col-4 col-sm-3 col-md-2 py-3">
                <img className="avatar avatar-lg avatar-4x3 avatar-centered" src="./assets/svg/brands/vidados-dark.svg" alt="Logo" />
            </div>
            {/* End Col */}
            <div className="col-4 col-sm-3 col-md-2 py-3">
                <img className="avatar avatar-lg avatar-4x3 avatar-centered" src="./assets/svg/brands/capsule-dark.svg" alt="Logo" />
            </div>
            {/* End Col */}
            <div className="col-4 col-sm-3 col-md-2 py-3">
                <img className="avatar avatar-lg avatar-4x3 avatar-centered" src="./assets/svg/brands/forbes-dark.svg" alt="Logo" />
            </div>
            {/* End Col */}
            <div className="col-4 col-sm-3 col-md-2 py-3">
                <img className="avatar avatar-lg avatar-4x3 avatar-centered" src="./assets/svg/brands/business-insider-dark.svg" alt="Logo" />
            </div>
            {/* End Col */}
            <div className="col-4 col-sm-3 col-md-2 py-3">
                <img className="avatar avatar-lg avatar-4x3 avatar-centered" src="./assets/svg/brands/hubspot-dark.svg" alt="Logo" />
            </div>
            {/* End Col */}
            <div className="col-4 col-sm-3 col-md-2 py-3">
                <img className="avatar avatar-lg avatar-4x3 avatar-centered" src="./assets/svg/brands/layar-dark.svg" alt="Logo" />
            </div>
            {/* End Col */}
            </div>
            {/* End Row */}
        </div>
        {/* End Clients */}
        {/* Pricing Table */}
        <div className="container">
            {/* Heading */}
            <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
            <h2>Pick the plan that works best for you</h2>
            </div>
            {/* End Heading */}
            {/* Table */}
            <div className="table-responsive-lg w-lg-75 mx-lg-auto">
            <table className="table table-lg table-striped table-borderless table-nowrap table-vertical-border-striped">
                <thead className="table-text-center">
                <tr>
                    <th scope="col" style={{width: '40%'}} />
                    <th scope="col" style={{width: '20%'}}>
                    <span className="d-block">Professional</span>
                    <span className="d-block text-muted small">$19/mon</span>
                    </th>
                    <th scope="col" style={{width: '20%'}}>
                    <span className="d-block">Team <span className="badge bg-warning text-dark rounded-pill ms-1">Hot</span></span>
                    <span className="d-block text-muted small">$39/mon</span>
                    </th>
                    <th scope="col" style={{width: '20%'}}>
                    <span className="d-block">Enterprise</span>
                    <span className="d-block text-muted small">$59</span>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row" className="text-dark">Cross-platform UI toolkit</th>
                    <td className="table-text-center"><i className="bi-check-circle text-success me-2" /></td>
                    <td className="table-text-center"><i className="bi-check-circle text-success me-2" /></td>
                    <td />
                </tr>
                <tr>
                    <th scope="row" className="text-dark">14-days free trial</th>
                    <td className="table-text-center"><i className="bi-check-circle text-success me-2" /></td>
                    <td className="table-text-center"><i className="bi-check-circle text-success me-2" /></td>
                    <td className="table-text-center"><i className="bi-check-circle text-success me-2" /></td>
                </tr>
                <tr>
                    <th scope="row" className="text-dark">No user limit</th>
                    <td />
                    <td className="table-text-center"><i className="bi-check-circle text-success me-2" /></td>
                    <td className="table-text-center"><i className="bi-check-circle text-success me-2" /></td>
                </tr>
                <tr>
                    <th scope="row" className="text-dark">Long-term support</th>
                    <td />
                    <td />
                    <td className="table-text-center"><i className="bi-check-circle text-success me-2" /></td>
                </tr>
                <tr>
                    <th scope="row" className="text-dark">Email support</th>
                    <td><span className="badge bg-soft-primary text-primary rounded-pill">Add-on available</span></td>
                    <td />
                    <td className="table-text-center"><i className="bi-check-circle text-success me-2" /></td>
                </tr>
                <tr>
                    <th scope="row" className="text-dark">Developer tools</th>
                    <td />
                    <td className="table-text-center"><i className="bi-check-circle text-success me-2" /></td>
                    <td />
                </tr>
                <tr>
                    <th scope="row" className="text-dark">Removal of Front branding</th>
                    <td />
                    <td className="table-text-center"><i className="bi-check-circle text-success me-2" /></td>
                    <td className="table-text-center"><i className="bi-check-circle text-success me-2" /></td>
                </tr>
                <tr>
                    <th scope="row" className="text-dark">Active maintenance &amp; support</th>
                    <td className="table-text-center"><i className="bi-check-circle text-success me-2" /></td>
                    <td className="table-text-center"><i className="bi-check-circle text-success me-2" /></td>
                    <td className="table-text-center"><i className="bi-check-circle text-success me-2" /></td>
                </tr>
                <tr>
                    <th scope="row" className="text-dark">Data storage for 365 days</th>
                    <td />
                    <td><span className="badge bg-soft-primary text-primary rounded-pill">Add-on available</span></td>
                    <td className="table-text-center"><i className="bi-check-circle text-success me-2" /></td>
                </tr>
                <tr>
                    <th scope="row" className="text-dark" />
                    <td><button type="button" className="btn btn-soft-dark btn-sm btn-transition">Choose plan</button></td>
                    <td><button type="button" className="btn btn-soft-dark btn-sm btn-transition">Choose plan</button></td>
                    <td><button type="button" className="btn btn-primary btn-sm btn-transition">Contact us</button></td>
                </tr>
                </tbody>
            </table>
            </div>
            {/* End Table */}
        </div>
        {/* End Pricing Table */}
        {/* FAQ */}
        <div className="container content-space-2 content-space-lg-3">
            {/* Heading */}
            <div className="w-md-75 w-lg-50 text-center mx-lg-auto mb-5 mb-md-9">
            <h2>Frequently Asked Questions</h2>
            </div>
            {/* End Heading */}
            <div className="row justify-content-md-center">
            <div className="col-sm-6 col-lg-5 mb-3 mb-md-5">
                <h4>Can I cancel at anytime?</h4>
                <p>Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.</p>
            </div>
            {/* End Col */}
            <div className="col-sm-6 col-lg-5 mb-3 mb-md-5">
                <h4>My team has credits. How do we use them?</h4>
                <p>Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.</p>
            </div>
            {/* End Col */}
            <div className="col-sm-6 col-lg-5 mb-3 mb-md-5">
                <h4>How does Front's pricing work?</h4>
                <p>Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.</p>
            </div>
            {/* End Col */}
            <div className="col-sm-6 col-lg-5 mb-3 mb-md-5">
                <h4>How secure is Front?</h4>
                <p>Protecting the data you trust to Front is our first priority. This part is really crucial in keeping the project in line to completion.</p>
            </div>
            {/* End Col */}
            <div className="col-sm-6 col-lg-5 mb-3 mb-md-5">
                <h4>Do you offer discounts?</h4>
                <p>We've built in discounts at each tier for teams. The time has come to bring those ideas and plans to life.</p>
            </div>
            {/* End Col */}
            <div className="col-sm-6 col-lg-5 mb-3 mb-md-5">
                <h4>What is your refund policy?</h4>
                <p>We offer refunds. We aim high at being focused on building relationships with our clients and community.</p>
            </div>
            {/* End Col */}
            </div>
            {/* End Row */}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        </div>
        {/* End FAQ */}
    </main>
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
    <div>
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
    </div>
    </>
  )
}

export default Pricing;