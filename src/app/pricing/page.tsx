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
  {/* ========== HEADER ========== */}
  <header
    id="header"
    className="navbar navbar-expand-lg navbar-end navbar-absolute-top navbar-light navbar-show-hide"
    data-hs-header-options='{
      "fixMoment": 1000,
      "fixEffect": "slide"
    }'
  >
    <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />

    {/* Topbar */}
    <div className="container navbar-topbar">
      <nav className="js-mega-menu navbar-nav-wrap">
        {/* Toggler */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#topbarNavDropdown"
          aria-controls="topbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="d-flex justify-content-between align-items-center small">
            <span className="navbar-toggler-text">Topbar</span>
            <span className="navbar-toggler-default">
              <i className="bi-chevron-down ms-2" />
            </span>
            <span className="navbar-toggler-toggled">
              <i className="bi-chevron-up ms-2" />
            </span>
          </span>
        </button>
        {/* End Toggler */}
        <div
          id="topbarNavDropdown"
          className="navbar-nav-wrap-collapse collapse navbar-collapse navbar-topbar-collapse"
        >
          <div className="navbar-toggler-wrapper">
            <div className="navbar-topbar-toggler d-flex justify-content-between align-items-center">
              <span className="navbar-toggler-text small">Topbar</span>
              {/* Toggler */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#topbarNavDropdown"
                aria-controls="topbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="bi-x" />
              </button>
              {/* End Toggler */}
            </div>
          </div>
          <ul className="navbar-nav">
            {/* Demos */}
            <li className="hs-has-mega-menu nav-item">
              <a
                id="demosMegaMenu"
                className="hs-mega-menu-invoker nav-link dropdown-toggle active"
                aria-current="page"
                href="#"
                role="button"
              >
                Demos
              </a>
              {/* Mega Menu */}
              <div
                className="hs-mega-menu dropdown-menu w-100"
                aria-labelledby="demosMegaMenu"
                style={{ minWidth: "40rem" }}
              >
                {/* Promo */}
                <div className="navbar-dropdown-menu-promo">
                  {/* Promo Item */}
                  <div className="navbar-dropdown-menu-promo-item">
                    {/* Promo Link */}
                    <a
                      className="navbar-dropdown-menu-promo-link active"
                      href="./index.html"
                    >
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <span className="svg-icon svg-icon-sm text-primary">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15.6 5.59998L20.9 10.9C21.3 11.3 21.3 11.9 20.9 12.3L17.6 15.6L11.6 9.59998L15.6 5.59998ZM2.3 12.3L7.59999 17.6L11.6 13.6L5.59999 7.59998L2.3 10.9C1.9 11.3 1.9 11.9 2.3 12.3Z"
                                fill="#035A4B"
                              />
                              <path
                                opacity="0.3"
                                d="M17.6 15.6L12.3 20.9C11.9 21.3 11.3 21.3 10.9 20.9L7.59998 17.6L13.6 11.6L17.6 15.6ZM10.9 2.3L5.59998 7.6L9.59998 11.6L15.6 5.6L12.3 2.3C11.9 1.9 11.3 1.9 10.9 2.3Z"
                                fill="#035A4B"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <span className="navbar-dropdown-menu-media-title">
                            Main
                          </span>
                          <p className="navbar-dropdown-menu-media-desc">
                            Over 60 corporate, agency, portfolio, account and
                            many more pages.
                          </p>
                        </div>
                      </div>
                    </a>
                    {/* End Promo Link */}
                  </div>
                  {/* End Promo Item */}
                  {/* Promo Item */}
                  <div className="navbar-dropdown-menu-promo-item">
                    {/* Promo Link */}
                    <a
                      className="navbar-dropdown-menu-promo-link "
                      href="./demo-real-estate/index.html"
                    >
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <span className="svg-icon svg-icon-sm text-primary">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.5 3C5.67157 3 5 3.67157 5 4.5V6H3.5C2.67157 6 2 6.67157 2 7.5C2 8.32843 2.67157 9 3.5 9H5V19.5C5 20.3284 5.67157 21 6.5 21C7.32843 21 8 20.3284 8 19.5V9H20.5C21.3284 9 22 8.32843 22 7.5C22 6.67157 21.3284 6 20.5 6H8V4.5C8 3.67157 7.32843 3 6.5 3Z"
                                fill="#035A4B"
                              />
                              <path
                                opacity="0.3"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M20.5 11H10V17.5C10 18.3284 10.6716 19 11.5 19H15.5C17.3546 19 19.0277 18.2233 20.2119 16.9775C20.1436 16.9922 20.0727 17 20 17C19.4477 17 19 16.5523 19 16V13C19 12.4477 19.4477 12 20 12C20.5523 12 21 12.4477 21 13V15.9657C21.6334 14.9626 22 13.7741 22 12.5C22 11.6716 21.3284 11 20.5 11Z"
                                fill="#035A4B"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <span className="navbar-dropdown-menu-media-title">
                            Real Estate
                          </span>
                          <p className="navbar-dropdown-menu-media-desc">
                            Find the latest homes for sale, real estate market
                            data.
                          </p>
                        </div>
                      </div>
                    </a>
                    {/* End Promo Link */}
                  </div>
                  {/* End Promo Item */}
                  {/* Promo Item */}
                  <div className="navbar-dropdown-menu-promo-item">
                    {/* Promo Link */}
                    <a
                      className="navbar-dropdown-menu-promo-link "
                      href="./demo-jobs/index.html"
                    >
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <span className="svg-icon svg-icon-sm text-primary">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.3"
                                d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z"
                                fill="#035A4B"
                              />
                              <path
                                d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z"
                                fill="#035A4B"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <span className="navbar-dropdown-menu-media-title">
                            Jobs{" "}
                            <span className="badge bg-success rounded-pill ms-1">
                              Hot
                            </span>
                          </span>
                          <p className="navbar-dropdown-menu-media-desc">
                            Search millions of jobs online to find the next step
                            in your career.
                          </p>
                        </div>
                      </div>
                    </a>
                    {/* End Promo Link */}
                  </div>
                  {/* End Promo Item */}
                </div>
                {/* End Promo */}
                {/* Promo */}
                <div className="navbar-dropdown-menu-promo">
                  {/* Promo Item */}
                  <div className="navbar-dropdown-menu-promo-item">
                    {/* Promo Link */}
                    <a
                      className="navbar-dropdown-menu-promo-link "
                      href="./demo-course/index.html"
                    >
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <span className="svg-icon svg-icon-sm text-primary">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20 19H4C2.9 19 2 18.1 2 17H22C22 18.1 21.1 19 20 19Z"
                                fill="#035A4B"
                              />
                              <path
                                opacity="0.3"
                                d="M20 5H4C3.4 5 3 5.4 3 6V17H21V6C21 5.4 20.6 5 20 5Z"
                                fill="#035A4B"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.9167 6.83334H9.91666C9.18899 6.83334 8.66666 7.37744 8.66666 8.08334V13.9167C8.66666 14.6226 9.18899 15.1667 9.91666 15.1667H14.9167C15.1841 15.1667 15.3333 15.0112 15.3333 14.75V14.3333H10.3333C10.1032 14.3333 9.91665 14.1468 9.91665 13.9167C9.91665 13.6866 10.1032 13.5 10.3333 13.5H15.3333V7.25001C15.3333 6.9888 15.1841 6.83334 14.9167 6.83334Z"
                                fill="#035A4B"
                              />
                              <mask
                                id="mask0"
                                mask-type="alpha"
                                maskUnits="userSpaceOnUse"
                                x={8}
                                y={6}
                                width={8}
                                height={10}
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M14.9167 6.83334H9.91666C9.18899 6.83334 8.66666 7.37744 8.66666 8.08334V13.9167C8.66666 14.6226 9.18899 15.1667 9.91666 15.1667H14.9167C15.1841 15.1667 15.3333 15.0112 15.3333 14.75V14.3333H10.3333C10.1032 14.3333 9.91665 14.1468 9.91665 13.9167C9.91665 13.6866 10.1032 13.5 10.3333 13.5H15.3333V7.25001C15.3333 6.9888 15.1841 6.83334 14.9167 6.83334Z"
                                  fill="white"
                                />
                              </mask>
                              <g mask="url(#mask0)"></g>
                            </svg>
                          </span>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <span className="navbar-dropdown-menu-media-title">
                            Course{" "}
                            <span className="badge bg-success rounded-pill ms-1">
                              Hot
                            </span>
                          </span>
                          <p className="navbar-dropdown-menu-media-desc">
                            Learn on your schedule. An online learning and
                            teaching demo.
                          </p>
                        </div>
                      </div>
                    </a>
                    {/* End Promo Link */}
                  </div>
                  {/* End Promo Item */}
                  {/* Promo Item */}
                  <div className="navbar-dropdown-menu-promo-item">
                    {/* Promo Link */}
                    <a
                      className="navbar-dropdown-menu-promo-link "
                      href="./demo-shop/index.html"
                    >
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <span className="svg-icon svg-icon-sm text-primary">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.3"
                                d="M20 22H4C3.4 22 3 21.6 3 21V2H21V21C21 21.6 20.6 22 20 22Z"
                                fill="#035A4B"
                              />
                              <path
                                d="M12 14C9.2 14 7 11.8 7 9V5C7 4.4 7.4 4 8 4C8.6 4 9 4.4 9 5V9C9 10.7 10.3 12 12 12C13.7 12 15 10.7 15 9V5C15 4.4 15.4 4 16 4C16.6 4 17 4.4 17 5V9C17 11.8 14.8 14 12 14Z"
                                fill="#035A4B"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <span className="navbar-dropdown-menu-media-title">
                            E-Commerce
                          </span>
                          <p className="navbar-dropdown-menu-media-desc">
                            Choose an online store &amp; get your business
                            online today!
                          </p>
                        </div>
                      </div>
                    </a>
                    {/* End Promo Link */}
                  </div>
                  {/* End Promo Item */}
                  {/* Promo Item */}
                  <div className="navbar-dropdown-menu-promo-item">
                    {/* Promo Link */}
                    <a
                      className="navbar-dropdown-menu-promo-link "
                      href="./demo-app-marketplace/index.html"
                    >
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <span className="svg-icon svg-icon-sm text-primary">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.3"
                                d="M18 10V20C18 20.6 18.4 21 19 21C19.6 21 20 20.6 20 20V10H18Z"
                                fill="#035A4B"
                              />
                              <path
                                opacity="0.3"
                                d="M11 10V17H6V10H4V20C4 20.6 4.4 21 5 21H12C12.6 21 13 20.6 13 20V10H11Z"
                                fill="#035A4B"
                              />
                              <path
                                opacity="0.3"
                                d="M10 10C10 11.1 9.1 12 8 12C6.9 12 6 11.1 6 10H10Z"
                                fill="#035A4B"
                              />
                              <path
                                opacity="0.3"
                                d="M18 10C18 11.1 17.1 12 16 12C14.9 12 14 11.1 14 10H18Z"
                                fill="#035A4B"
                              />
                              <path
                                opacity="0.3"
                                d="M14 4H10V10H14V4Z"
                                fill="#035A4B"
                              />
                              <path
                                opacity="0.3"
                                d="M17 4H20L22 10H18L17 4Z"
                                fill="#035A4B"
                              />
                              <path
                                opacity="0.3"
                                d="M7 4H4L2 10H6L7 4Z"
                                fill="#035A4B"
                              />
                              <path
                                d="M6 10C6 11.1 5.1 12 4 12C2.9 12 2 11.1 2 10H6ZM10 10C10 11.1 10.9 12 12 12C13.1 12 14 11.1 14 10H10ZM18 10C18 11.1 18.9 12 20 12C21.1 12 22 11.1 22 10H18ZM19 2H5C4.4 2 4 2.4 4 3V4H20V3C20 2.4 19.6 2 19 2ZM12 17C12 16.4 11.6 16 11 16H6C5.4 16 5 16.4 5 17C5 17.6 5.4 18 6 18H11C11.6 18 12 17.6 12 17Z"
                                fill="#035A4B"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <span className="navbar-dropdown-menu-media-title">
                            App Marketplace
                          </span>
                          <p className="navbar-dropdown-menu-media-desc">
                            Find apps and integrates seamlessly with popular
                            apps.
                          </p>
                        </div>
                      </div>
                    </a>
                    {/* End Promo Link */}
                  </div>
                  {/* End Promo Item */}
                </div>
                {/* End Promo */}
                {/* Promo */}
                <div className="navbar-dropdown-menu-promo">
                  {/* Promo Item */}
                  <div className="navbar-dropdown-menu-promo-item">
                    {/* Promo Link */}
                    <a
                      className="navbar-dropdown-menu-promo-link "
                      href="./demo-help-desk/index.html"
                    >
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <span className="svg-icon svg-icon-sm text-primary">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M22.1671 18.1421C22.4827 18.4577 23.0222 18.2331 23.0206 17.7868L23.0039 13.1053V5.52632C23.0039 4.13107 21.8729 3 20.4776 3H8.68815C7.2929 3 6.16183 4.13107 6.16183 5.52632V9H13C14.6568 9 16 10.3431 16 12V15.6316H19.6565L22.1671 18.1421Z"
                                fill="#035A4B"
                              />
                              <path
                                opacity="0.3"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M1.98508 18V13C1.98508 11.8954 2.88051 11 3.98508 11H11.9851C13.0896 11 13.9851 11.8954 13.9851 13V18C13.9851 19.1046 13.0896 20 11.9851 20H4.10081L2.85695 21.1905C2.53895 21.4949 2.01123 21.2695 2.01123 20.8293V18.3243C1.99402 18.2187 1.98508 18.1104 1.98508 18ZM5.99999 14.5C5.99999 14.2239 6.22385 14 6.49999 14H11.5C11.7761 14 12 14.2239 12 14.5C12 14.7761 11.7761 15 11.5 15H6.49999C6.22385 15 5.99999 14.7761 5.99999 14.5ZM9.49999 16C9.22385 16 8.99999 16.2239 8.99999 16.5C8.99999 16.7761 9.22385 17 9.49999 17H11.5C11.7761 17 12 16.7761 12 16.5C12 16.2239 11.7761 16 11.5 16H9.49999Z"
                                fill="#035A4B"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <span className="navbar-dropdown-menu-media-title">
                            Help Desk
                          </span>
                          <p className="navbar-dropdown-menu-media-desc">
                            A customer service demo that helps you balance
                            customer needs.
                          </p>
                        </div>
                      </div>
                    </a>
                    {/* End Promo Link */}
                  </div>
                  {/* End Promo Item */}
                  {/* Promo Item */}
                  <div className="navbar-dropdown-menu-promo-item">
                    {/* Promo Link */}
                    <a
                      className="navbar-dropdown-menu-promo-link"
                      href="https://htmlstream.com/contact-us"
                      target="_blank"
                    >
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <span className="svg-icon svg-icon-sm text-primary">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                opacity="0.3"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 17C16.4183 17 20 13.4183 20 9C20 4.58172 16.4183 1 12 1C7.58172 1 4 4.58172 4 9C4 13.4183 7.58172 17 12 17Z"
                                fill="#035A4B"
                              />
                              <path
                                opacity="0.3"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M6.53819 9L10.568 19.3624L11.976 18.8149L13.3745 19.3674L17.4703 9H6.53819ZM9.46188 11H14.5298L11.9759 17.4645L9.46188 11Z"
                                fill="#035A4B"
                              />
                              <path
                                opacity="0.3"
                                d="M10 22H14V22C14 23.1046 13.1046 24 12 24V24C10.8954 24 10 23.1046 10 22V22Z"
                                fill="#035A4B"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8 17C8 16.4477 8.44772 16 9 16H15C15.5523 16 16 16.4477 16 17C16 17.5523 15.5523 18 15 18C15.5523 18 16 18.4477 16 19C16 19.5523 15.5523 20 15 20C15.5523 20 16 20.4477 16 21C16 21.5523 15.5523 22 15 22H9C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20C8.44772 20 8 19.5523 8 19C8 18.4477 8.44772 18 9 18C8.44772 18 8 17.5523 8 17Z"
                                fill="#035A4B"
                              />
                            </svg>
                          </span>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <span className="navbar-dropdown-menu-media-title">
                            New demo ideas?
                          </span>
                          <p className="navbar-dropdown-menu-media-desc">
                            Send us your suggestions{" "}
                            <i className="bi-box-arrow-up-right ms-1" />
                          </p>
                        </div>
                      </div>
                    </a>
                    {/* End Promo Link */}
                  </div>
                  {/* End Promo Item */}
                  {/* Promo Item */}
                  <div className="navbar-dropdown-menu-promo-item"></div>
                  {/* End Promo Item */}
                </div>
                {/* End Promo */}
              </div>
              {/* End Mega Menu */}
            </li>
            {/* End Demos */}
            {/* Docs */}
            <li
              className="hs-has-mega-menu nav-item"
              data-hs-mega-menu-item-options='{
            "desktop": {
              "maxWidth": "20rem"
            }
          }'
            >
              <a
                id="docsMegaMenu"
                className="hs-mega-menu-invoker nav-link dropdown-toggle"
                href="#"
                role="button"
              >
                Docs
              </a>
              {/* Mega Menu */}
              <div
                className="hs-mega-menu hs-position-right dropdown-menu"
                aria-labelledby="docsMegaMenu"
                style={{ minWidth: "20rem" }}
              >
                {/* Link */}
                <a
                  className="navbar-dropdown-menu-media-link"
                  href="./documentation/index.html"
                >
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <span className="svg-icon svg-icon-sm text-primary">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.3"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.85714 1H11.7364C12.0911 1 12.4343 1.12568 12.7051 1.35474L17.4687 5.38394C17.8057 5.66895 18 6.08788 18 6.5292V19.0833C18 20.8739 17.9796 21 16.1429 21H4.85714C3.02045 21 3 20.8739 3 19.0833V2.91667C3 1.12612 3.02045 1 4.85714 1ZM7 13C7 12.4477 7.44772 12 8 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H8C7.44772 14 7 13.5523 7 13ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H11C11.5523 18 12 17.5523 12 17C12 16.4477 11.5523 16 11 16H8Z"
                            fill="#035A4B"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.85714 3H14.7364C15.0911 3 15.4343 3.12568 15.7051 3.35474L20.4687 7.38394C20.8057 7.66895 21 8.08788 21 8.5292V21.0833C21 22.8739 20.9796 23 19.1429 23H6.85714C5.02045 23 5 22.8739 5 21.0833V4.91667C5 3.12612 5.02045 3 6.85714 3ZM7 13C7 12.4477 7.44772 12 8 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H8C7.44772 14 7 13.5523 7 13ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H11C11.5523 18 12 17.5523 12 17C12 16.4477 11.5523 16 11 16H8Z"
                            fill="#035A4B"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <span className="navbar-dropdown-menu-media-title">
                        Documentation{" "}
                        <span className="badge bg-primary rounded-pill ms-1">
                          v4.3.1
                        </span>
                      </span>
                      <p className="navbar-dropdown-menu-media-desc">
                        Development guides for building projects with Space
                      </p>
                    </div>
                  </div>
                </a>
                {/* End Link */}
                <div className="dropdown-divider" />
                {/* Link */}
                <a
                  className="navbar-dropdown-menu-media-link"
                  href="./snippets/index.html"
                >
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <span className="svg-icon svg-icon-sm text-primary">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.3"
                            d="M21 2H13C12.4 2 12 2.4 12 3V13C12 13.6 12.4 14 13 14H21C21.6 14 22 13.6 22 13V3C22 2.4 21.6 2 21 2ZM15.7 8L14 10.1V5.80005L15.7 8ZM15.1 4H18.9L17 6.40002L15.1 4ZM17 9.59998L18.9 12H15.1L17 9.59998ZM18.3 8L20 5.90002V10.2L18.3 8ZM9 2H3C2.4 2 2 2.4 2 3V21C2 21.6 2.4 22 3 22H9C9.6 22 10 21.6 10 21V3C10 2.4 9.6 2 9 2ZM4.89999 12L4 14.8V9.09998L4.89999 12ZM4.39999 4H7.60001L6 8.80005L4.39999 4ZM6 15.2L7.60001 20H4.39999L6 15.2ZM7.10001 12L8 9.19995V14.9L7.10001 12Z"
                            fill="#035A4B"
                          />
                          <path
                            d="M21 18H13C12.4 18 12 17.6 12 17C12 16.4 12.4 16 13 16H21C21.6 16 22 16.4 22 17C22 17.6 21.6 18 21 18ZM19 21C19 20.4 18.6 20 18 20H13C12.4 20 12 20.4 12 21C12 21.6 12.4 22 13 22H18C18.6 22 19 21.6 19 21Z"
                            fill="#035A4B"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <span className="navbar-dropdown-menu-media-title">
                        Snippets
                      </span>
                      <p className="navbar-dropdown-menu-media-desc">
                        Move quickly with copy-to-clipboard feature
                      </p>
                    </div>
                  </div>
                </a>
                {/* End Link */}
              </div>
              {/* End Mega Menu */}
            </li>
            {/* End Docs */}
          </ul>
        </div>
      </nav>
    </div>
    {/* End Topbar */}

    <div className="container">
      <nav className="js-mega-menu navbar-nav-wrap">
        {/* Default Logo */}
        <a className="navbar-brand" href="./index.html" aria-label="Front">
          <Image
            className="navbar-brand-logo"
            src={logo}
            alt="Logo"
          />
        </a>
        {/* End Default Logo */}
        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-default">
            <i className="bi-list" />
          </span>
          <span className="navbar-toggler-toggled">
            <i className="bi-x" />
          </span>
        </button>
        {/* End Toggler */}
        {/* Collapse */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <div className="navbar-absolute-top-scroller">
            <ul className="navbar-nav">
              {/* Landings */}
              <li className="hs-has-mega-menu nav-item">
                <a
                  id="landingsMegaMenu"
                  className="hs-mega-menu-invoker nav-link dropdown-toggle "
                  aria-current="page"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Landings
                </a>
                {/* Mega Menu */}
                <div
                  className="hs-mega-menu dropdown-menu w-100"
                  aria-labelledby="landingsMegaMenu"
                  style={{ minWidth: "30rem" }}
                >
                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-block">
                      {/* Banner Image */}
                      <div
                        className="navbar-dropdown-menu-banner"
                        style={{
                          backgroundImage:
                            "url(./assets/svg/components/shape-3.svg)"
                        }}
                      >
                        <div className="navbar-dropdown-menu-banner-content">
                          <div className="mb-4">
                            <span className="h2 d-block">Branding Works</span>
                            <p>
                              Experience a level of our quality in both design
                              &amp; customization works.
                            </p>
                          </div>
                          <a
                            className="btn btn-primary btn-transition"
                            href="#"
                          >
                            Learn more <i className="bi-chevron-right small" />
                          </a>
                        </div>
                      </div>
                      {/* End Banner Image */}
                    </div>
                    {/* End Col */}
                    <div className="col-lg-6">
                      <div className="navbar-dropdown-menu-inner">
                        <div className="row">
                          <div className="col-sm mb-3 mb-sm-0">
                            <span className="dropdown-header">Classic</span>
                            <a
                              className="dropdown-item "
                              href="./landing-classic-corporate.html"
                            >
                              Corporate
                            </a>
                            <a
                              className="dropdown-item "
                              href="./landing-classic-analytics.html"
                            >
                              Analytics{" "}
                              <span className="badge bg-primary rounded-pill ms-1">
                                Hot
                              </span>
                            </a>
                            <a
                              className="dropdown-item "
                              href="./landing-classic-studio.html"
                            >
                              Studio
                            </a>
                            <a
                              className="dropdown-item "
                              href="./landing-classic-marketing.html"
                            >
                              Marketing
                            </a>
                            <a
                              className="dropdown-item "
                              href="./landing-classic-advertisement.html"
                            >
                              Advertisement
                            </a>
                            <a
                              className="dropdown-item "
                              href="./landing-classic-consulting.html"
                            >
                              Consulting
                            </a>
                            <a
                              className="dropdown-item "
                              href="./landing-classic-portfolio.html"
                            >
                              Portfolio
                            </a>
                            <a
                              className="dropdown-item "
                              href="./landing-classic-software.html"
                            >
                              Software
                            </a>
                            <a
                              className="dropdown-item "
                              href="./landing-classic-business.html"
                            >
                              Business
                            </a>
                          </div>
                          {/* End Col */}
                          <div className="col-sm">
                            <div className="mb-3">
                              <span className="dropdown-header">App</span>
                              <a
                                className="dropdown-item "
                                href="./landing-app-ui-kit.html"
                              >
                                UI Kit
                              </a>
                              <a
                                className="dropdown-item "
                                href="./landing-app-saas.html"
                              >
                                SaaS
                              </a>
                              <a
                                className="dropdown-item "
                                href="./landing-app-workflow.html"
                              >
                                Workflow
                              </a>
                              <a
                                className="dropdown-item "
                                href="./landing-app-payment.html"
                              >
                                Payment
                              </a>
                              <a
                                className="dropdown-item "
                                href="./landing-app-tool.html"
                              >
                                Tool
                              </a>
                            </div>
                            <span className="dropdown-header">Onepage</span>
                            <a
                              className="dropdown-item "
                              href="./landing-onepage-corporate.html"
                            >
                              Corporate
                            </a>
                            <a
                              className="dropdown-item "
                              href="./landing-onepage-saas.html"
                            >
                              SaaS{" "}
                              <span className="badge bg-primary rounded-pill ms-1">
                                Hot
                              </span>
                            </a>
                          </div>
                          {/* End Col */}
                        </div>
                        {/* End Row */}
                      </div>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
                {/* End Mega Menu */}
              </li>
              {/* End Landings */}
              {/* Company */}
              <li className="hs-has-sub-menu nav-item">
                <a
                  id="companyMegaMenu"
                  className="hs-mega-menu-invoker nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Company
                </a>
                {/* Mega Menu */}
                <div
                  className="hs-sub-menu dropdown-menu"
                  aria-labelledby="companyMegaMenu"
                  style={{ minWidth: "14rem" }}
                >
                  <a className="dropdown-item " href="./page-about.html">
                    About
                  </a>
                  <a className="dropdown-item " href="./page-services.html">
                    Services
                  </a>
                  <a
                    className="dropdown-item "
                    href="./page-customer-stories.html"
                  >
                    Customer Stories
                  </a>
                  <a
                    className="dropdown-item "
                    href="./page-customer-story.html"
                  >
                    Customer Story
                  </a>
                  <a className="dropdown-item " href="./page-careers.html">
                    Careers
                  </a>
                  <a
                    className="dropdown-item "
                    href="./page-careers-overview.html"
                  >
                    Careers Overview
                  </a>
                  <a className="dropdown-item " href="./page-hire-us.html">
                    Hire Us
                  </a>
                  <a
                    className="dropdown-item active"
                    href="./page-pricing.html"
                  >
                    Pricing
                  </a>
                  <a
                    className="dropdown-item "
                    href="./page-contacts-agency.html"
                  >
                    Contacts: Agency
                  </a>
                  <a
                    className="dropdown-item "
                    href="./page-contacts-startup.html"
                  >
                    Contacts: Startup
                  </a>
                </div>
                {/* End Mega Menu */}
              </li>
              {/* End Company */}
              {/* Account */}
              <li className="hs-has-sub-menu nav-item">
                <a
                  id="accountMegaMenu"
                  className="hs-mega-menu-invoker nav-link dropdown-toggle "
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Account
                </a>
                {/* Mega Menu */}
                <div
                  className="hs-sub-menu dropdown-menu"
                  aria-labelledby="accountMegaMenu"
                  style={{ minWidth: "14rem" }}
                >
                  {/* Authentication */}
                  <div className="hs-has-sub-menu nav-item">
                    <a
                      id="authenticationMegaMenu"
                      className="hs-mega-menu-invoker dropdown-item dropdown-toggle "
                      href="#"
                      role="button"
                      aria-expanded="false"
                    >
                      Authentication
                    </a>
                    <div
                      className="hs-sub-menu dropdown-menu"
                      aria-labelledby="authenticationMegaMenu"
                      style={{ minWidth: "14rem" }}
                    >
                      <a
                        className="dropdown-item"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#signupModal"
                      >
                        Signup Modal
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item " href="./page-login.html">
                        Login
                      </a>
                      <a className="dropdown-item " href="./page-signup.html">
                        Signup
                      </a>
                      <a
                        className="dropdown-item "
                        href="./page-reset-password.html"
                      >
                        Reset Password
                      </a>
                      <div className="dropdown-divider" />
                      <a
                        className="dropdown-item "
                        href="./page-login-simple.html"
                      >
                        Login Simple
                      </a>
                      <a
                        className="dropdown-item "
                        href="./page-signup-simple.html"
                      >
                        Signup Simple
                      </a>
                      <a
                        className="dropdown-item "
                        href="./page-reset-password-simple.html"
                      >
                        Reset Password Simple
                      </a>
                    </div>
                  </div>
                  {/* End Authentication */}
                  <a className="dropdown-item " href="./account-overview.html">
                    Personal Info
                  </a>
                  <a className="dropdown-item " href="./account-security.html">
                    Security
                  </a>
                  <a
                    className="dropdown-item "
                    href="./account-notifications.html"
                  >
                    Notifications
                  </a>
                  <a
                    className="dropdown-item "
                    href="./account-preferences.html"
                  >
                    Preferences
                  </a>
                  <a className="dropdown-item " href="./account-orders.html">
                    Orders
                  </a>
                  <a className="dropdown-item " href="./account-wishlist.html">
                    Wishlist
                  </a>
                  <a className="dropdown-item " href="./account-payments.html">
                    Payments
                  </a>
                  <a className="dropdown-item " href="./account-address.html">
                    Address
                  </a>
                  <a className="dropdown-item " href="./account-teams.html">
                    Teams
                  </a>
                </div>
                {/* End Mega Menu */}
              </li>
              {/* End Account */}
              {/* Pages */}
              <li className="hs-has-sub-menu nav-item">
                <a
                  id="pagesMegaMenu"
                  className="hs-mega-menu-invoker nav-link dropdown-toggle "
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Pages
                </a>
                {/* Mega Menu */}
                <div
                  className="hs-sub-menu dropdown-menu"
                  aria-labelledby="pagesMegaMenu"
                  style={{ minWidth: "14rem" }}
                >
                  <a className="dropdown-item " href="./page-faq.html">
                    FAQ
                  </a>
                  <a className="dropdown-item " href="./page-terms.html">
                    Terms &amp; Conditions
                  </a>
                  <a className="dropdown-item " href="./page-privacy.html">
                    Privacy &amp; Policy
                  </a>
                  <a className="dropdown-item " href="./page-coming-soon.html">
                    Coming Soon
                  </a>
                  <a
                    className="dropdown-item "
                    href="./page-coming-soon-simple.html"
                  >
                    Coming Soon: Simple
                  </a>
                  <a
                    className="dropdown-item "
                    href="./page-maintenance-mode.html"
                  >
                    Maintenance Mode
                  </a>
                  <a className="dropdown-item " href="./page-status.html">
                    Status
                  </a>
                  <a className="dropdown-item " href="./page-invoice.html">
                    Invoice
                  </a>
                  <a className="dropdown-item " href="./page-error-404.html">
                    Error 404
                  </a>
                </div>
                {/* End Mega Menu */}
              </li>
              {/* End Pages */}
              {/* Blog */}
              <li className="hs-has-sub-menu nav-item">
                <a
                  id="blogMegaMenu"
                  className="hs-mega-menu-invoker nav-link dropdown-toggle "
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Blog
                </a>
                {/* Mega Menu */}
                <div
                  className="hs-sub-menu dropdown-menu"
                  aria-labelledby="blogMegaMenu"
                  style={{ minWidth: "14rem" }}
                >
                  <a className="dropdown-item " href="./blog-journal.html">
                    Journal
                  </a>
                  <a className="dropdown-item " href="./blog-metro.html">
                    Metro
                  </a>
                  <a className="dropdown-item " href="./blog-newsroom.html">
                    Newsroom
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item " href="./blog-article.html">
                    Article
                  </a>
                  <a
                    className="dropdown-item "
                    href="./blog-author-profile.html"
                  >
                    Author Profile
                  </a>
                </div>
                {/* End Mega Menu */}
              </li>
              {/* End Blog */}
              {/* Portfolio */}
              <li className="hs-has-sub-menu nav-item">
                <a
                  id="portfolioMegaMenu"
                  className="hs-mega-menu-invoker nav-link dropdown-toggle "
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Portfolio
                </a>
                {/* Mega Menu */}
                <div
                  className="hs-sub-menu dropdown-menu"
                  aria-labelledby="portfolioMegaMenu"
                  style={{ minWidth: "14rem" }}
                >
                  <a className="dropdown-item " href="./portfolio-grid.html">
                    Grid
                  </a>
                  <a
                    className="dropdown-item "
                    href="./portfolio-product-article.html"
                  >
                    Product Article
                  </a>
                  <a
                    className="dropdown-item "
                    href="./portfolio-case-studies-branding.html"
                  >
                    Case Studies: Branding
                  </a>
                  <a
                    className="dropdown-item "
                    href="./portfolio-case-studies-product.html"
                  >
                    Case Studies: Product
                  </a>
                </div>
                {/* End Mega Menu */}
              </li>
              {/* End Portfolio */}
              {/* Button */}
              <li className="nav-item">
                <a
                  className="btn btn-primary btn-transition"
                  href="https://themes.getbootstrap.com/product/front-multipurpose-responsive-template/"
                  target="_blank"
                >
                  Buy now
                </a>
              </li>
              {/* End Button */}
            </ul>
          </div>
        </div>
        {/* End Collapse */}
      </nav>
    </div>
  </header>
  {/* ========== END HEADER ========== */}
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
                      <span className="badge bg-primary rounded-pill ms-1">
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
              <a className="card-link ms-2" href="#">
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
          <img
            className="avatar avatar-lg avatar-4x3 avatar-centered"
            src="./assets/svg/brands/amazon-dark.svg"
            alt="Logo"
          />
        </div>
        {/* End Col */}
        <div className="col-4 col-sm-3 col-md-2 py-3">
          <img
            className="avatar avatar-lg avatar-4x3 avatar-centered"
            src="./assets/svg/brands/kaplan-dark.svg"
            alt="Logo"
          />
        </div>
        {/* End Col */}
        <div className="col-4 col-sm-3 col-md-2 py-3">
          <img
            className="avatar avatar-lg avatar-4x3 avatar-centered"
            src="./assets/svg/brands/google-dark.svg"
            alt="Logo"
          />
        </div>
        {/* End Col */}
        <div className="col-4 col-sm-3 col-md-2 py-3">
          <img
            className="avatar avatar-lg avatar-4x3 avatar-centered"
            src="./assets/svg/brands/airbnb-dark.svg"
            alt="Logo"
          />
        </div>
        {/* End Col */}
        <div className="col-4 col-sm-3 col-md-2 py-3">
          <img
            className="avatar avatar-lg avatar-4x3 avatar-centered"
            src="./assets/svg/brands/shopify-dark.svg"
            alt="Logo"
          />
        </div>
        {/* End Col */}
        <div className="col-4 col-sm-3 col-md-2 py-3">
          <img
            className="avatar avatar-lg avatar-4x3 avatar-centered"
            src="./assets/svg/brands/vidados-dark.svg"
            alt="Logo"
          />
        </div>
        {/* End Col */}
        <div className="col-4 col-sm-3 col-md-2 py-3">
          <img
            className="avatar avatar-lg avatar-4x3 avatar-centered"
            src="./assets/svg/brands/capsule-dark.svg"
            alt="Logo"
          />
        </div>
        {/* End Col */}
        <div className="col-4 col-sm-3 col-md-2 py-3">
          <img
            className="avatar avatar-lg avatar-4x3 avatar-centered"
            src="./assets/svg/brands/forbes-dark.svg"
            alt="Logo"
          />
        </div>
        {/* End Col */}
        <div className="col-4 col-sm-3 col-md-2 py-3">
          <img
            className="avatar avatar-lg avatar-4x3 avatar-centered"
            src="./assets/svg/brands/business-insider-dark.svg"
            alt="Logo"
          />
        </div>
        {/* End Col */}
        <div className="col-4 col-sm-3 col-md-2 py-3">
          <img
            className="avatar avatar-lg avatar-4x3 avatar-centered"
            src="./assets/svg/brands/hubspot-dark.svg"
            alt="Logo"
          />
        </div>
        {/* End Col */}
        <div className="col-4 col-sm-3 col-md-2 py-3">
          <img
            className="avatar avatar-lg avatar-4x3 avatar-centered"
            src="./assets/svg/brands/layar-dark.svg"
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
                  <span className="badge bg-warning text-dark rounded-pill ms-1">
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
                <i className="bi-check-circle text-success me-2" />
              </td>
              <td className="table-text-center">
                <i className="bi-check-circle text-success me-2" />
              </td>
              <td />
            </tr>
            <tr>
              <th scope="row" className="text-dark">
                14-days free trial
              </th>
              <td className="table-text-center">
                <i className="bi-check-circle text-success me-2" />
              </td>
              <td className="table-text-center">
                <i className="bi-check-circle text-success me-2" />
              </td>
              <td className="table-text-center">
                <i className="bi-check-circle text-success me-2" />
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-dark">
                No user limit
              </th>
              <td />
              <td className="table-text-center">
                <i className="bi-check-circle text-success me-2" />
              </td>
              <td className="table-text-center">
                <i className="bi-check-circle text-success me-2" />
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-dark">
                Long-term support
              </th>
              <td />
              <td />
              <td className="table-text-center">
                <i className="bi-check-circle text-success me-2" />
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-dark">
                Email support
              </th>
              <td>
                <span className="badge bg-soft-primary text-primary rounded-pill">
                  Add-on available
                </span>
              </td>
              <td />
              <td className="table-text-center">
                <i className="bi-check-circle text-success me-2" />
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-dark">
                Developer tools
              </th>
              <td />
              <td className="table-text-center">
                <i className="bi-check-circle text-success me-2" />
              </td>
              <td />
            </tr>
            <tr>
              <th scope="row" className="text-dark">
                Removal of Front branding
              </th>
              <td />
              <td className="table-text-center">
                <i className="bi-check-circle text-success me-2" />
              </td>
              <td className="table-text-center">
                <i className="bi-check-circle text-success me-2" />
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-dark">
                Active maintenance &amp; support
              </th>
              <td className="table-text-center">
                <i className="bi-check-circle text-success me-2" />
              </td>
              <td className="table-text-center">
                <i className="bi-check-circle text-success me-2" />
              </td>
              <td className="table-text-center">
                <i className="bi-check-circle text-success me-2" />
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-dark">
                Data storage for 365 days
              </th>
              <td />
              <td>
                <span className="badge bg-soft-primary text-primary rounded-pill">
                  Add-on available
                </span>
              </td>
              <td className="table-text-center">
                <i className="bi-check-circle text-success me-2" />
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-dark" />
              <td>
                <button
                  type="button"
                  className="btn btn-soft-dark btn-sm btn-transition"
                >
                  Choose plan
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-soft-dark btn-sm btn-transition"
                >
                  Choose plan
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary btn-sm btn-transition"
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
</>

  </>
   
    );
}

export default pricing;