'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import './pricing.scss';
import './checkbox.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
import checkmark from '../../assets/additional/check.svg';
import dots from '../../assets/svg/components/dots-lg.svg';
import Header from '../components/Header/Header';
import MobileMenu from '../components/MobileMenu/MobileMenu';
import card11 from '../../assets/img/card-11.svg';
import amazon from '../../assets/svg/brands/amazon-dark.svg';
import kaplan from '../../assets/svg/brands/kaplan-dark.svg';
import google from '../../assets/svg/brands/google-dark.svg';
import airbnb from '../../assets/svg/brands/airbnb-dark.svg';
import shopify from '../../assets/svg/brands/shopify-dark.svg';
import vidados from '../../assets/svg/brands/vidados-dark.svg';
import capsule from '../../assets/svg/brands/capsule-dark.svg';
import forbes from '../../assets/svg/brands/forbes-dark.svg';
import businesinsider from '../../assets/svg/brands/business-insider-dark.svg';
import hubspot from '../../assets/svg/brands/hubspot-dark.svg';
import layar from '../../assets/svg/brands/layar-dark.svg';
import Footer from '../components/Footer/Footer';
import logo from '../../assets/additional/logo.png';

function pricing() {
    const [menuToggler, setMenuToggler] = useState<boolean>(false);

    return (
  <>
  <>
  <Header 
        menuTogglerFunction={setMenuToggler} 
        menuTogglerValue={menuToggler} 
      />
      <MobileMenu menuToggler={menuToggler} />
  {/* ========== MAIN CONTENT ========== */}
  <main id="content" role="main">
    <div className="overflow-hidden">
      {/* Hero */}
      <div
        className="position-relative bg-img-start"
        style={{ backgroundImage: `url(${card11})` }}
      >
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
              <input
                className="js-toggle-switch form-check-input"
                type="checkbox"
                data-hs-toggle-switch-options='{
                 "targetSelector": "#pricingCount1, #pricingCount2, #pricingCount3"
               }'
              />
              <label className="form-check-label form-switch-promotion">
                Annually
                <span className="form-switch-promotion-container">
                  <span className="form-switch-promotion-body">
                    <svg
                      className="form-switch-promotion-arrow"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 99.3 57"
                      width={48}
                    >
                      <path
                        fill="none"
                        stroke="#bdc5d1"
                        strokeWidth={4}
                        strokeLinecap="round"
                        strokeMiterlimit={10}
                        d="M2,39.5l7.7,14.8c0.4,0.7,1.3,0.9,2,0.4L27.9,42"
                      />
                      <path
                        fill="none"
                        stroke="#bdc5d1"
                        strokeWidth={4}
                        strokeLinecap="round"
                        strokeMiterlimit={10}
                        d="M11,54.3c0,0,10.3-65.2,86.3-50"
                      />
                    </svg>
                    <span className="form-switch-promotion-text">
                      <span className="badge bg-primary rounded-pill ms-1 save">
                        Save up to 10%
                      </span>
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
                    <span className="fs-5 align-top text-dark fw-semibold">
                      $
                    </span>
                    <span
                      id="pricingCount1"
                      className="fs-1 text-dark fw-semibold"
                      data-hs-toggle-switch-item-options='{
                       "min": 29,
                       "max": 19
                     }'
                    >
                      29
                    </span>
                    <span>/mo</span>
                  </div>
                  <h3 className="card-title">Professional</h3>
                  <p className="card-text">
                    All the basics for starting a new business
                  </p>
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
                    <button type="button" className="btn btn-ghost-primary">
                      Try free for 30 days
                    </button>
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
                    <span
                      id="pricingCount2"
                      className="fs-1 fw-semibold"
                      data-hs-toggle-switch-item-options='{
                       "min": 49,
                       "max": 39
                     }'
                    >
                      49
                    </span>
                    <span>/mo</span>
                  </div>
                  <h3 className="card-title text-white">Team</h3>
                  <p className="card-text text-white-70">
                    Everything you need for a growing business
                  </p>
                </div>
                <div className="card-body d-flex justify-content-center py-0">
                  {/* List Checked */}
                  <ul className="list-checked list-checked-soft-bg-light">
                    <li className="list-checked-item text-white">3 users</li>
                    <li className="list-checked-item text-white">
                      Front plan features
                    </li>
                    <li className="list-checked-item text-white">3 apps</li>
                    <li className="list-checked-item text-white">
                      Product support
                    </li>
                  </ul>
                  {/* End List Checked */}
                </div>
                <div className="card-footer text-center">
                  <div className="d-grid mb-2">
                    <button type="button" className="btn btn-light">
                      Try free for 30 days
                    </button>
                  </div>
                  <p className="card-text text-white-70 small">
                    No card required
                  </p>
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
                    <span className="fs-5 align-top text-dark fw-semibold">
                      $
                    </span>
                    <span
                      id="pricingCount3"
                      className="fs-1 text-dark fw-semibold"
                      data-hs-toggle-switch-item-options='{
                       "min": 69,
                       "max": 59
                     }'
                    >
                      69
                    </span>
                    <span>/mo</span>
                  </div>
                  <h3 className="card-title">Enterprise</h3>
                  <p className="card-text">
                    Advanced features for scaling your business
                  </p>
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
                    <button type="button" className="btn btn-ghost-primary">
                      Try free for 30 days
                    </button>
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
          <figure
            className="position-absolute bottom-0 start-0 mb-n7 ms-n7"
            style={{ width: "9rem" }}
          >
            <svg
              viewBox="0 0 522 504"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M332 504H510.4C516.8 504 522 498.8 522 492.4V314C522 209.1 436.9 124 332 124C227.1 124 142 209.1 142 314C142 418.9 227.1 504 332 504Z"
                fill="#00C9A7"
              />
              <path
                d="M190 380H11.6C5.2 380 0 374.8 0 368.4V190C0 85.1 85.1 0 190 0C294.9 0 380 85.1 380 190C380 294.9 294.9 380 190 380Z"
                fill="#377dff"
              />
            </svg>
          </figure>
          <figure
            className="position-absolute top-0 end-0 mt-n8 me-n8"
            style={{ width: "10rem" }}
          >
            <Image
              className="img-fluid"
              src={dots}
              alt="Image Description"
            />
          </figure>
          {/* End SVG Elements */}
        </div>
        {/* Card Info */}
        <div className="text-center">
          <div className="card card-info-link card-sm">
            <div className="card-body">
              Prefer to start with the trial version?{" "}
              <a className="card-link ms-2" href="#" style={{color: '#FD2DC3'}}>
                Go here <span className="bi-chevron-right small ms-1" />
              </a>
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
          <Image
            className="avatar avatar-lg avatar-4x3 avatar-centered"
            src={amazon}
            alt="Logo"
          />
        </div>
        {/* End Col */}
        <div className="col-4 col-sm-3 col-md-2 py-3">
          <Image
            className="avatar avatar-lg avatar-4x3 avatar-centered"
            src={kaplan}
            alt="Logo"
          />
        </div>
        {/* End Col */}
        <div className="col-4 col-sm-3 col-md-2 py-3">
          <Image
            className="avatar avatar-lg avatar-4x3 avatar-centered"
            src={google}
            alt="Logo"
          />
        </div>
        {/* End Col */}
        <div className="col-4 col-sm-3 col-md-2 py-3">
          <Image
            className="avatar avatar-lg avatar-4x3 avatar-centered"
            src={airbnb}
            alt="Logo"
          />
        </div>
        {/* End Col */}
        <div className="col-4 col-sm-3 col-md-2 py-3">
          <Image
            className="avatar avatar-lg avatar-4x3 avatar-centered"
            src={shopify}
            alt="Logo"
          />
        </div>
        {/* End Col */}
        <div className="col-4 col-sm-3 col-md-2 py-3">
          <Image
            className="avatar avatar-lg avatar-4x3 avatar-centered"
            src={vidados}
            alt="Logo"
          />
        </div>
        {/* End Col */}
        <div className="col-4 col-sm-3 col-md-2 py-3">
          <Image
            className="avatar avatar-lg avatar-4x3 avatar-centered"
            src={capsule}
            alt="Logo"
          />
        </div>
        {/* End Col */}
        <div className="col-4 col-sm-3 col-md-2 py-3">
          <Image
            className="avatar avatar-lg avatar-4x3 avatar-centered"
            src={forbes}
            alt="Logo"
          />
        </div>
        {/* End Col */}
        <div className="col-4 col-sm-3 col-md-2 py-3">
          <Image
            className="avatar avatar-lg avatar-4x3 avatar-centered"
            src={businesinsider}
            alt="Logo"
          />
        </div>
        {/* End Col */}
        <div className="col-4 col-sm-3 col-md-2 py-3">
          <Image
            className="avatar avatar-lg avatar-4x3 avatar-centered"
            src={hubspot}
            alt="Logo"
          />
        </div>
        {/* End Col */}
        <div className="col-4 col-sm-3 col-md-2 py-3">
          <Image
            className="avatar avatar-lg avatar-4x3 avatar-centered"
            src={layar}
            alt="Logo"
          />
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
              <th scope="col" style={{ width: "40%" }} />
              <th scope="col" style={{ width: "20%" }}>
                <span className="d-block">Professional</span>
                <span className="d-block text-muted small">$19/mon</span>
              </th>
              <th scope="col" style={{ width: "20%" }}>
                <span className="d-block">
                  Team{" "}
                  <span className="badge text-dark rounded-pill ms-1" style={{backgroundColor: 'lightpink'}}>
                    Hot
                  </span>
                </span>
                <span className="d-block text-muted small">$39/mon</span>
              </th>
              <th scope="col" style={{ width: "20%" }}>
                <span className="d-block">Enterprise</span>
                <span className="d-block text-muted small">$59</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="text-dark">
                Cross-platform UI toolkit
              </th>
              <td className="table-text-center">
                <i className="bi-check-circle me-2" style={{color: '#FD2DC3'}} />
              </td>
              <td className="table-text-center">
                <i className="bi-check-circle me-2" style={{color: '#FD2DC3'}} />
              </td>
              <td />
            </tr>
            <tr>
              <th scope="row" className="text-dark">
                14-days free trial
              </th>
              <td className="table-text-center">
                <i className="bi-check-circle me-2" style={{color: '#FD2DC3'}} />
              </td>
              <td className="table-text-center">
                <i className="bi-check-circle me-2" style={{color: '#FD2DC3'}} />
              </td>
              <td className="table-text-center">
                <i className="bi-check-circle me-2" style={{color: '#FD2DC3'}} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-dark">
                No user limit
              </th>
              <td />
              <td className="table-text-center">
                <i className="bi-check-circle me-2" style={{color: '#FD2DC3'}} />
              </td>
              <td className="table-text-center">
                <i className="bi-check-circle me-2" style={{color: '#FD2DC3'}} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-dark">
                Long-term support
              </th>
              <td />
              <td />
              <td className="table-text-center">
                <i className="bi-check-circle me-2" style={{color: '#FD2DC3'}} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-dark">
                Email support
              </th>
              <td>
                <span className="badge text-primary rounded-pill" style={{backgroundColor: '#FD2DC3', color: '#fff !important'}}>
                  Add-on available
                </span>
              </td>
              <td />
              <td className="table-text-center">
                <i className="bi-check-circle me-2" style={{color: '#FD2DC3'}} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-dark">
                Developer tools
              </th>
              <td />
              <td className="table-text-center">
                <i className="bi-check-circle me-2" style={{color: '#FD2DC3'}} />
              </td>
              <td />
            </tr>
            <tr>
              <th scope="row" className="text-dark">
                Removal of Front branding
              </th>
              <td />
              <td className="table-text-center">
                <i className="bi-check-circle me-2" style={{color: '#FD2DC3'}} />
              </td>
              <td className="table-text-center">
                <i className="bi-check-circle me-2" style={{color: '#FD2DC3'}} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-dark" >
                Active maintenance &amp; support
              </th>
              <td className="table-text-center">
                <i className="bi-check-circle me-2" style={{color: '#FD2DC3'}} />
              </td>
              <td className="table-text-center">
                <i className="bi-check-circle me-2" style={{color: '#FD2DC3'}} />
              </td>
              <td className="table-text-center">
                <i className="bi-check-circle me-2" style={{color: '#FD2DC3'}} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-dark">
                Data storage for 365 days
              </th>
              <td />
              <td>
                <span className="badge text-primary rounded-pill" style={{backgroundColor: '#', color: '#fff !important'}}>
                  Add-on available
                </span>
              </td>
              <td className="table-text-center">
                <i className="bi-check-circle me-2" style={{color: '#FD2DC3'}} />
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-dark" />
              <td>
                <button
                  type="button"
                  className="btn btn-sm btn-transition"
                  style={{backgroundColor: '#ED5C9B', color: '#fff !important'}}
                >
                  Choose plan
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-sm btn-transition"
                  style={{backgroundColor: '#ED5C9B', color: '#fff !important'}}
                >
                  Choose plan
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary btn-sm btn-transition"
                  style={{backgroundColor: '#FD2DC3', color: '#fff !important', border: 'none'}}
                >
                  Contact us
                </button>
              </td>
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
          <p>
            Yes, you can cancel anytime no questions are asked while you cancel
            but we would highly appreciate if you will give us some feedback.
          </p>
        </div>
        {/* End Col */}
        <div className="col-sm-6 col-lg-5 mb-3 mb-md-5">
          <h4>My team has credits. How do we use them?</h4>
          <p>
            Once your team signs up for a subscription plan. This is where we
            sit down, grab a cup of coffee and dial in the details.
          </p>
        </div>
        {/* End Col */}
        <div className="col-sm-6 col-lg-5 mb-3 mb-md-5">
          <h4>How does Front's pricing work?</h4>
          <p>
            Our subscriptions are tiered. Understanding the task at hand and
            ironing out the wrinkles is key.
          </p>
        </div>
        {/* End Col */}
        <div className="col-sm-6 col-lg-5 mb-3 mb-md-5">
          <h4>How secure is Front?</h4>
          <p>
            Protecting the data you trust to Front is our first priority. This
            part is really crucial in keeping the project in line to completion.
          </p>
        </div>
        {/* End Col */}
        <div className="col-sm-6 col-lg-5 mb-3 mb-md-5">
          <h4>Do you offer discounts?</h4>
          <p>
            We've built in discounts at each tier for teams. The time has come
            to bring those ideas and plans to life.
          </p>
        </div>
        {/* End Col */}
        <div className="col-sm-6 col-lg-5 mb-3 mb-md-5">
          <h4>What is your refund policy?</h4>
          <p>
            We offer refunds. We aim high at being focused on building
            relationships with our clients and community.
          </p>
        </div>
        {/* End Col */}
      </div>
      {/* End Row */}
    </div>
    {/* End FAQ */}
  </main>
  {/* ========== END MAIN CONTENT ========== */}
  <Footer />
  </>
  </>
   
    );
}

export default pricing;