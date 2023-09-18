import Image from 'next/image'
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'src/app/styles/theme.min.css';
import 'src/app/styles/snippets.min.css';
import 'src/app/styles/docs.min.css';
import shape3 from '../assets/svg/components/shape-3.svg';






export default function Home() {
  return (<>
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
          <img
            className="navbar-brand-logo"
            src="./assets/svg/logos/logo.svg"
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
                  className="hs-mega-menu-invoker nav-link dropdown-toggle active"
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
                          `url(${shape3})`
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
                              className="dropdown-item active"
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
                  className="hs-mega-menu-invoker nav-link dropdown-toggle "
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
                  <a className="dropdown-item " href="./page-pricing.html">
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
    {/* Hero */}
    <div className="d-lg-flex position-relative">
      <div className="container d-lg-flex align-items-lg-center content-space-t-3 content-space-lg-0 min-vh-lg-100">
        {/* Heading */}
        <div className="w-100">
          <div className="row">
            <div className="col-lg-5">
              <div className="mb-5">
                <h1 className="display-4 mb-3">
                  Turn your ideas into a
                  <span className="text-primary text-highlight-warning">
                    <span
                      className="js-typedjs"
                      data-hs-typed-options='{
                      "strings": ["startup.", "future.", "success."],
                      "typeSpeed": 90,
                      "loop": true,
                      "backSpeed": 30,
                      "backDelay": 2500
                    }'
                    />
                  </span>
                </h1>
                <p className="lead">
                  Front's feature-rich designed demo pages help you create the
                  best possible product.
                </p>
              </div>
              <div className="d-grid d-sm-flex gap-3">
                <a
                  className="btn btn-primary btn-transition px-6"
                  href="./page-login-simple.html"
                >
                  Get started
                </a>
                <a className="btn btn-link" href="#">
                  Learn more <i className="bi-chevron-right small ms-1" />
                </a>
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
        {/* End Title & Description */}
        {/* SVG Shape */}
        <div
          className="col-lg-7 col-xl-6 d-none d-lg-block position-absolute top-0 end-0 pe-0"
          style={{ marginTop: "6.75rem" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 1137.5 979.2"
            
          >
            <path
              fill="#F9FBFF"
              d="M565.5,957.4c81.1-7.4,155.5-49.3,202.4-115.7C840,739.8,857,570,510.7,348.3C-35.5-1.5-4.2,340.3,2.7,389
        c0.7,4.7,1.2,9.5,1.7,14.2l29.3,321c14,154.2,150.6,267.8,304.9,253.8L565.5,957.4z"
            />
            <defs>
              <path
                id="mainHeroSVG1"
                d="M1137.5,0H450.4l-278,279.7C22.4,430.6,24.3,675,176.8,823.5l0,0C316.9,960,537.7,968.7,688.2,843.6l449.3-373.4V0z"
              />
            </defs>
            <clipPath id="mainHeroSVG2">
              <use xlinkHref="#mainHeroSVG1" />
            </clipPath>
            <g transform="matrix(1 0 0 1 0 0)" clipPath="url(#mainHeroSVG2)">
              <image
                width={750}
                height={750}
               
                transform="matrix(1.4462 0 0 1.4448 52.8755 0)"
              />
            </g>
          </svg>
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
          <li className="list-inline-item list-checked-item">
            Asynchronous collaboration
          </li>
          <li className="list-inline-item list-checked-item">
            Updates and announcements
          </li>
          <li className="list-inline-item list-checked-item">
            Training and team building
          </li>
        </ul>
        {/* End List Checked */}
      </div>
      <div className="row mb-5 mb-md-0">
        <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
          {/* Card */}
          <div className="card card-sm h-100">
            <div className="p-2">
              <img
                className="card-img"
                src="../assets/img/img1.jpg"
                alt="Image Description"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title">Front App</h4>
              <p className="card-text">
                Front App is an easier way to search on Android.
              </p>
              {/* List Pointer */}
              <ul className="list-pointer mb-0">
                <li className="list-pointer-item">Advanced Analytics</li>
                <li className="list-pointer-item">Digital Marketing</li>
                <li className="list-pointer-item">Organization</li>
              </ul>
              {/* End List Pointer */}
            </div>
            <a className="card-footer card-link border-top" href="#">
              Learn more <i className="bi-chevron-right small ms-1" />
            </a>
          </div>
          {/* End Card */}
        </div>
        {/* End Col */}
        <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
          {/* Card */}
          <div className="card card-sm h-100">
            <div className="p-2">
              <img
                className="card-img"
                src="./assets/img/480x220/img2.jpg"
                alt="Image Description"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title">Front Chat</h4>
              <p className="card-text">
                Front Chat is a new way to communicate with your team.
              </p>
              {/* List Pointer */}
              <ul className="list-pointer mb-0">
                <li className="list-pointer-item">Cost Transformation</li>
                <li className="list-pointer-item">Customer Experience</li>
                <li className="list-pointer-item">Mergers and Acquisitions</li>
              </ul>
              {/* End List Pointer */}
            </div>
            <a className="card-footer card-link border-top" href="#">
              Learn more <i className="bi-chevron-right small ms-1" />
            </a>
          </div>
          {/* End Card */}
        </div>
        {/* End Col */}
        <div className="col-sm-6 col-lg-4">
          {/* Card */}
          <div className="card card-sm h-100">
            <div className="p-2">
              <img
                className="card-img"
                src="./assets/img/480x220/img3.jpg"
                alt="Image Description"
              />
            </div>
            <div className="card-body">
              <h4 className="card-title">Front Calendar</h4>
              <p className="card-text">
                Discover an easier way to manage contacts, sales and grow
                lasting relationships.
              </p>
              {/* List Pointer */}
              <ul className="list-pointer mb-0">
                <li className="list-pointer-item">Enterprise Technology</li>
                <li className="list-pointer-item">Private Equity</li>
                <li className="list-pointer-item">Sustainability</li>
              </ul>
              {/* End List Pointer */}
            </div>
            <a className="card-footer card-link border-top" href="#">
              Learn more <i className="bi-chevron-right small ms-1" />
            </a>
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
            <li className="list-inline-item list-checked-item">
              5-star support
            </li>
            <li className="list-inline-item list-checked-item">
              Constant updates
            </li>
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
                  <div className="device-browser-header-browser-bar">
                    www.htmlstream.com/front/
                  </div>
                </div>
                <div className="device-browser-frame">
                  <img
                    className="device-browser-img"
                    src="./assets/img/1618x1010/img6.jpg"
                    alt="Image Description"
                  />
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
              <p>
                We help businesses bring ideas to life in the digital world, by
                designing and implementing the technology tools that they need
                to win.
              </p>
            </div>
            {/* End Heading */}
            {/* List Checked */}
            <ul className="list-checked list-checked-primary mb-5">
              <li className="list-checked-item">
                Less routine – more creativity
              </li>
              <li className="list-checked-item">Hundreds of thousands saved</li>
              <li className="list-checked-item">Scale budgets efficiently</li>
            </ul>
            {/* End List Checked */}
            <a className="btn btn-primary" href="#">
              Get started
            </a>
            <hr className="my-5" />
            <span className="d-block">Trusted by leading companies</span>
            <div className="row">
              <div className="col py-3">
                <img
                  className="avatar avatar-4x3"
                  src="./assets/svg/brands/fitbit-dark.svg"
                  alt="Logo"
                />
              </div>
              {/* End Col */}
              <div className="col py-3">
                <img
                  className="avatar avatar-4x3"
                  src="./assets/svg/brands/forbes-dark.svg"
                  alt="Logo"
                />
              </div>
              {/* End Col */}
              <div className="col py-3">
                <img
                  className="avatar avatar-4x3"
                  src="./assets/svg/brands/mailchimp-dark.svg"
                  alt="Logo"
                />
              </div>
              {/* End Col */}
              <div className="col py-3">
                <img
                  className="avatar avatar-4x3"
                  src="./assets/svg/brands/layar-dark.svg"
                  alt="Logo"
                />
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
          <img
            className="img-fluid rounded-2"
            src="./assets/img/400x500/img31.jpg"
            alt="Image Description"
          />
        </div>
        {/* End Col */}
        <div className="col-md-7">
          {/* Blockquote */}
          <figure className="pe-md-7">
            <div className="mb-4">
              <img
                className="avatar avatar-xl avatar-4x3"
                src="./assets/svg/brands/mailchimp-primary.svg"
                alt="Image Description"
              />
            </div>
            <blockquote className="blockquote blockquote-lg">
              " I'm absolutely floored by the level of care and attention to
              detail the team at Htmlstream have put into this theme and for one
              can guarantee that I will be a return customer. "
            </blockquote>
            <figcaption className="blockquote-footer">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0 d-md-none">
                  <img
                    className="avatar avatar-circle"
                    src="./assets/img/160x160/img4.jpg"
                    alt="Image Description"
                  />
                </div>
                <div className="flex-grow-1 ms-3 ms-md-0">
                  Lewis
                  <span className="blockquote-footer-source">
                    Senior Director of Operations at Mailchimp
                  </span>
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
              <h2 className="display-4">
                <i className="bi-arrow-down-short text-danger" />
                47%
              </h2>
              <p className="mb-0">
                fewer meetings across
                <br />
                organizations
              </p>
            </div>
            {/* End Stats */}
          </div>
          {/* End Col */}
          <div className="col-sm-6 col-md-4 mb-7 mb-md-0">
            {/* Stats */}
            <div className="text-center">
              <h2 className="display-4">
                <i className="bi-arrow-up-short text-success" />
                23%
              </h2>
              <p className="mb-0">
                increase in traffic on
                <br />
                webpages with Looms
              </p>
            </div>
            {/* End Stats */}
          </div>
          {/* End Col */}
          <div className="col-sm-6 col-md-4">
            {/* Stats */}
            <div className="text-center">
              <h2 className="display-4">
                <i className="bi-arrow-up-short text-success" />
                9.3%
              </h2>
              <p className="mb-0">
                boost in reply rates across
                <br />
                sales outreach
              </p>
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
              <img
                className="card-img"
                src="./assets/img/480x320/img33.jpg"
                alt="Image Description"
              />
              <div className="card-body">
                <span className="card-subtitle text-body">Read the blog</span>
                <h4 className="card-title text-inherit">
                  Have a meaningful impact
                </h4>
                <p className="card-text text-body">
                  Opportunities to Front who have proven to be good at executing
                  on them.
                </p>
              </div>
            </a>
            {/* End Card */}
          </div>
          {/* End Col */}
          <div className="col-sm-6 col-lg-4 mb-5">
            {/* Card */}
            <a
              className="card card-flush h-100"
              href="#"
              data-aos="fade-up"
              data-aos-delay={150}
            >
              <img
                className="card-img"
                src="./assets/img/480x320/img34.jpg"
                alt="Image Description"
              />
              <div className="card-body">
                <span className="card-subtitle text-body">Read the blog</span>
                <h4 className="card-title text-inherit">Documentation</h4>
                <p className="card-text text-body">
                  Whether you're a startup or a global enterprise, learn how to
                  integrate with Front.
                </p>
              </div>
            </a>
            {/* End Card */}
          </div>
          {/* End Col */}
          <div className="col-sm-6 col-lg-4 mb-5">
            {/* Card */}
            <a
              className="card card-flush h-100"
              href="#"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <img
                className="card-img"
                src="./assets/img/480x320/img35.jpg"
                alt="Image Description"
              />
              <div className="card-body">
                <span className="card-subtitle text-body">
                  Learn about other solutions
                </span>
                <h4 className="card-title text-inherit">
                  Explore the Snippets tool
                </h4>
                <p className="card-text text-body">
                  Quickly Front sample components, copy-paste codes.
                </p>
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
            Want to read more?{" "}
            <a className="card-link ms-2" href="#">
              Go here <span className="bi-chevron-right small ms-1" />
            </a>
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
          <div className="mb-5">
            <a className="navbar-brand" href="./index.html" aria-label="Space">
              <img
                className="navbar-brand-logo"
                src="./assets/svg/logos/logo.svg"
                alt="Image Description"
              />
            </a>
          </div>
          {/* End Logo */}
          {/* List */}
          <ul className="list-unstyled list-py-1">
            <li>
              <a className="link-sm link-secondary" href="#">
                <i className="bi-geo-alt-fill me-1" /> 153 Williamson Plaza,
                Maggieberg
              </a>
            </li>
            <li>
              <a className="link-sm link-secondary" href="tel:1-062-109-9222">
                <i className="bi-telephone-inbound-fill me-1" /> +1 (062)
                109-9222
              </a>
            </li>
          </ul>
          {/* End List */}
        </div>
        {/* End Col */}
        <div className="col-sm mb-7 mb-sm-0">
          <h5 className="mb-3">Company</h5>
          {/* List */}
          <ul className="list-unstyled list-py-1 mb-0">
            <li>
              <a className="link-sm link-secondary" href="#">
                About
              </a>
            </li>
            <li>
              <a className="link-sm link-secondary" href="#">
                Careers{" "}
                <span className="badge bg-warning text-dark rounded-pill ms-1">
                  We're hiring
                </span>
              </a>
            </li>
            <li>
              <a className="link-sm link-secondary" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="link-sm link-secondary" href="#">
                Customers <i className="bi-box-arrow-up-right small ms-1" />
              </a>
            </li>
            <li>
              <a className="link-sm link-secondary" href="#">
                Hire us
              </a>
            </li>
          </ul>
          {/* End List */}
        </div>
        {/* End Col */}
        <div className="col-sm mb-7 mb-sm-0">
          <h5 className="mb-3">Features</h5>
          {/* List */}
          <ul className="list-unstyled list-py-1 mb-0">
            <li>
              <a className="link-sm link-secondary" href="#">
                Press <i className="bi-box-arrow-up-right small ms-1" />
              </a>
            </li>
            <li>
              <a className="link-sm link-secondary" href="#">
                Release Notes
              </a>
            </li>
            <li>
              <a className="link-sm link-secondary" href="#">
                Integrations
              </a>
            </li>
            <li>
              <a className="link-sm link-secondary" href="#">
                Pricing
              </a>
            </li>
          </ul>
          {/* End List */}
        </div>
        {/* End Col */}
        <div className="col-sm mb-7 mb-sm-0">
          <h5 className="mb-3">Documentation</h5>
          {/* List */}
          <ul className="list-unstyled list-py-1 mb-0">
            <li>
              <a className="link-sm link-secondary" href="#">
                Support
              </a>
            </li>
            <li>
              <a className="link-sm link-secondary" href="#">
                Docs
              </a>
            </li>
            <li>
              <a className="link-sm link-secondary" href="#">
                Status
              </a>
            </li>
            <li>
              <a className="link-sm link-secondary" href="#">
                API Reference
              </a>
            </li>
            <li>
              <a className="link-sm link-secondary" href="#">
                Tech Requirements
              </a>
            </li>
          </ul>
          {/* End List */}
        </div>
        {/* End Col */}
        <div className="col-sm">
          <h5 className="mb-3">Resources</h5>
          {/* List */}
          <ul className="list-unstyled list-py-1 mb-5">
            <li>
              <a className="link-sm link-secondary" href="#">
                <i className="bi-question-circle-fill me-1" /> Help
              </a>
            </li>
            <li>
              <a className="link-sm link-secondary" href="#">
                <i className="bi-person-circle me-1" /> Your Account
              </a>
            </li>
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
              <a className="text-body" href="#">
                Privacy &amp; Policy
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-body" href="#">
                Terms
              </a>
            </li>
            <li className="list-inline-item">
              <a className="text-body" href="#">
                Site Map
              </a>
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
                <button
                  type="button"
                  className="btn btn-soft-secondary btn-xs dropdown-toggle"
                  id="footerSelectLanguage"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-dropdown-animation=""
                >
                  <span className="d-flex align-items-center">
                    <img
                      className="avatar avatar-xss avatar-circle me-2"
                      src="./assets/vendor/flag-icon-css/flags/1x1/us.svg"
                      alt="Image description"
                      width={16}
                    />
                    <span>English (US)</span>
                  </span>
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="footerSelectLanguage"
                >
                  <a
                    className="dropdown-item d-flex align-items-center active"
                    href="#"
                  >
                    <img
                      className="avatar avatar-xss avatar-circle me-2"
                      src="./assets/vendor/flag-icon-css/flags/1x1/us.svg"
                      alt="Image description"
                      width={16}
                    />
                    <span>English (US)</span>
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <img
                      className="avatar avatar-xss avatar-circle me-2"
                      src="./assets/vendor/flag-icon-css/flags/1x1/de.svg"
                      alt="Image description"
                      width={16}
                    />
                    <span>Deutsch</span>
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <img
                      className="avatar avatar-xss avatar-circle me-2"
                      src="./assets/vendor/flag-icon-css/flags/1x1/es.svg"
                      alt="Image description"
                      width={16}
                    />
                    <span>Español</span>
                  </a>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <img
                      className="avatar avatar-xss avatar-circle me-2"
                      src="./assets/vendor/flag-icon-css/flags/1x1/cn.svg"
                      alt="Image description"
                      width={16}
                    />
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
        <p className="text-muted small">
          © Front. 2021 Htmlstream. All rights reserved.
        </p>
        <p className="text-muted small">
          When you visit or interact with our sites, services or tools, we or
          our authorised service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for marketing purposes.
        </p>
      </div>
      {/* End Copyright */}
    </div>
  </footer>
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
            <form className="js-validate needs-validation" noValidate="">
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
                  required=""
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
                  required=""
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
            <form className="js-validate need-validate" noValidate="">
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
                  required=""
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
                  required=""
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
                  required=""
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
            <form className="js-validate need-validate" noValidate="">
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
                  required=""
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

  </>




 

  )
}
