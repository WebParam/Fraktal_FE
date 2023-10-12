'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IJobApplication } from '../interfaces/IJobApplication';
import { CreateJob, GetApplicantProfile } from '../endpoints/api';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router'
import './applicant.scss';
import img9 from '../../assets/img/160x160/img9.jpg';
import dropboxicon from "../../assets/svg/brands/dropbox-icon.svg";
import mailchimpicon from "../../assets/svg/brands/mailchimp-icon.svg";
import googleicon from "../../assets/svg/brands/google-icon.svg";
import varsity from "../../assets/svg/brands/the-university-of-manchester.svg";
import ocChatting from "../../assets/svg/illustrations/oc-chatting.svg";

function applicantProfile() {
    const [menuToggler, setMenuToggler] = useState<boolean>(false);
    const [activeStep, setActiveStep] = useState(0);

    //formInputs
    const [country, setCountry] = useState(0);
    const [language, setLanguage] = useState(0);


    async function getApplicantProfile(){

      const id="" //get from url
      if(id!=undefined){
        const res = await GetApplicantProfile(id as string);    //get from api: kwanele to provide endpoint 
      }

      //check response is successful and display success step

    }
 
    useEffect(() => {
      //check url and setActive
      getApplicantProfile();
      
      }, []);

    return (
          <>
          <>
          {/* ========== MAIN CONTENT ========== */}
          <main id="content" role="main" style={{marginTop: '80px'}}>
                {/* Page Header */}
                <div className="container content-space-t-2">
                  <div className="page-header">
                    {/* Media */}
                    <div className="d-flex align-items-lg-center">
                      <div className="flex-shrink-0">
                        <Image className="avatar avatar-xl avatar-circle" src={img9} alt="Image Description" />
                      </div>
                      <div className="flex-grow-1 ms-4">
                        <div className="row">
                      <div className="col-lg mb-3 mb-lg-0">
                        <h1 className="page-header-title h2">Maria Williams</h1>
                        <ul className="list-inline list-separator">
                          <li className="list-inline-item">
                            <i className="bi-geo-alt-fill text-primary me-1" style={{color: 'pink !important'}}/> London, UK
                          </li>
                          <li className="list-inline-item">maria@gmail.com</li>
                          <li className="list-inline-item">+1 (062) 109-9222</li>
                        </ul>
                      </div>
                      {/* End Col */}
                      <div className="col-lg-auto align-self-lg-end text-lg-right">
                        <div className="d-flex gap-2">
                          <a className="btn btn-primary btn-sm contactme" href="#">
                            <i className="bi-envelope-fill me-1" /> Contact me
                          </a>
                          {/* Dropdown */}
                          <div className="dropdown">
                            <a className="btn btn-outline-primary btn-sm btn-icon" href="#" id="employeeProfileShareDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-dropdown-animation>
                              <i className="bi-share-fill" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="employeeProfileShareDropdown">
                              <a className="dropdown-item" href="#">
                                <i className="bi-facebook dropdown-item-icon" /> Facebook
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="bi-twitter dropdown-item-icon" /> Twitter
                              </a>
                              <a className="dropdown-item" href="#">
                                <i className="bi-linkedin dropdown-item-icon" /> LinkedIn
                              </a>
                            </div>
                          </div>
                          {/* End Dropdown */}
                        </div>
                      </div>
                      {/* End Col */}
                    </div>
                    {/* End Row */}
                  </div>
                </div>
                {/* End Media */}
              </div>
            </div>
            {/* End Page Header */}
            {/* Content */}
            <div className="container content-space-2">
              <div className="row">
                <div className="col-lg-8">
                  <div className="mb-8">
                    <h3>Bio</h3>
                    <p>A Frontend developer, and UI/UX Designer offering over 8 years of success in various leadership roles in the areas of Web design and development and customer support. I love coding and problem solving. Love working on both server and client side code. I like to get to know my clients closely to facilitate better communication.</p>
                    <ul className="mb-4">
                      <li>Authorized to work in the UK for any employer</li>
                      <li>Willing to relocate to anywhere</li>
                    </ul>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="mb-4">
                          <h5>Desired job title</h5>
                          <p>UI Designer/Developer</p>
                        </div>
                        <div className="mb-4">
                          <h5>Desired job types</h5>
                          <p>Full time</p>
                        </div>
                      </div>
                      {/* End Col */}
                      <div className="col-sm-6">
                        <div className="mb-4">
                          <h5>Desired work schedule</h5>
                          <p>Monday to Friday</p>
                        </div>
                        <div className="mb-4">
                          <h5>Desired salary</h5>
                          <p>$90k per year</p>
                        </div>
                      </div>
                      {/* End Col */}
                    </div>
                    {/* End Row */}
                  </div>
                  <div className="mb-8">
                    <div className="mb-4">
                      <h3>Work experience</h3>
                    </div>
                    {/* Step */}
                    <ul className="step step-icon-sm">
                      <li className="step-item">
                        <div className="step-content-wrapper">
                          <div className="step-avatar step-avatar-sm">
                            <Image className="step-avatar-img" src={dropboxicon} alt="Image Description" />
                          </div>
                          <div className="step-content">
                            <h5 className="step-title">Head of IT Department</h5>
                            <span className="d-block text-dark">Dropbox - London</span>
                            <small className="d-block mb-4">December 2016 to Present</small>
                            <p className="text-body mb-0">The company has high expectations and using OKRs there is a mutual understanding of expectations and performance.</p>
                          </div>
                        </div>
                      </li>
                      <li className="step-item">
                        <div className="step-content-wrapper">
                          <div className="step-avatar step-avatar-sm">
                            <Image className="step-avatar-img" src={mailchimpicon} alt="Image Description" />
                          </div>
                          <div className="step-content">
                            <h5 className="step-title">Senior Software Engineer</h5>
                            <span className="d-block text-dark">Mailchimp - London</span>
                            <small className="d-block mb-4">November 2014 to December 2016</small>
                            <p className="text-body mb-0">This is an excellent company and they reward their employees. It's becoming a big company but it's still private, so the culture is as good as it gets at 1,000+ employees if you ask me. Managers are still adapting to the growth I think, but everyone has to. Great place to work.</p>
                          </div>
                        </div>
                      </li>
                      <li className="step-item">
                        <div className="step-content-wrapper">
                          <div className="step-avatar step-avatar-sm">
                            <Image className="step-avatar-img" src={googleicon} alt="Image Description" />
                          </div>
                          <div className="step-content">
                            <h5 className="step-title">Junior Software Engineer</h5>
                            <span className="d-block text-dark">Google - London</span>
                            <small className="d-block mb-4">January 2014 to November 2014</small>
                            <p className="text-body mb-0">Work in Google is one of the beautiful experience I can do in my entire life. There are a lot of interesting thing to learn and manager respect your time and your personality.</p>
                          </div>
                        </div>
                      </li>
                      <li className="step-item">
                        <div className="step-content-wrapper">
                          <span className="step-icon step-icon-soft-dark">
                            <i className="bi-briefcase-fill" />
                          </span>
                          <div className="step-content">
                            <h5 className="step-title">Internship</h5>
                            <span className="d-block text-dark">Htmlstream under Pixeel Ltd. - London</span>
                            <small className="d-block mb-4">December 2013 to January 2014</small>
                            <p className="text-body mb-0">My first steps...</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    {/* End Step */}
                  </div>
                  <div className="mb-8">
                    <div className="mb-3">
                      <h3>Education</h3>
                    </div>
                    {/* Step */}
                    <ul className="step step-icon-sm">
                      <li className="step-item">
                        <div className="step-content-wrapper">
                          <div className="step-avatar step-avatar-sm">
                            <Image className="step-avatar-img" src={varsity} alt="Image Description" />
                          </div>
                          <div className="step-content">
                            <h5 className="step-title">Master's degree in Computer Software Engineering</h5>
                            <span className="d-block text-dark">The University of Manchester - Manchester</span>
                            <small className="d-block">October 2012 to December 2013</small>
                          </div>
                        </div>
                      </li>
                      <li className="step-item">
                        <div className="step-content-wrapper">
                          <span className="step-icon step-icon-soft-dark">
                            <i className="bi-award" />
                          </span>
                          <div className="step-content">
                            <h5 className="step-title">Bachelor's degree in Computer Software Engineering</h5>
                            <span className="d-block text-dark">University of Oxford - Oxford</span>
                            <small className="d-block">October 2009 to May 2012</small>
                          </div>
                        </div>
                      </li>
                    </ul>
                    {/* End Step */}
                  </div>
                  <div className="mb-8">
                    <div className="mb-3">
                      <h3>Skills</h3>
                    </div>
                    <span className="badge bg-soft-dark text-dark py-2 px-3 m-1">Bootstrap (8 years)</span>
                    <span className="badge bg-soft-dark text-dark py-2 px-3 m-1">HTML5 (8 years)</span>
                    <span className="badge bg-soft-dark text-dark py-2 px-3 m-1">CSS3 (8 years)</span>
                    <span className="badge bg-soft-dark text-dark py-2 px-3 m-1">SASS (7 years)</span>
                    <span className="badge bg-soft-dark text-dark py-2 px-3 m-1">User Interface (UI) (8 years)</span>
                    <span className="badge bg-soft-dark text-dark py-2 px-3 m-1">Adobe Photoshop (3 years)</span>
                    <span className="badge bg-soft-dark text-dark py-2 px-3 m-1">Adobe Illustrator (5 years)</span>
                    <span className="badge bg-soft-dark text-dark py-2 px-3 m-1">Figma (1 year)</span>
                  </div>
                  <div className="mb-8">
                    <div className="mb-3">
                      <h3>Languages</h3>
                    </div>
                    <ul className="list-unstyled list-py-1">
                      <li><span className="text-dark">English <span className="text-body small ms-1">— Native</span></span></li>
                      <li><span className="text-dark">Deutsch <span className="text-body small ms-1">— Fluent</span></span></li>
                      <li><span className="text-dark">French <span className="text-body small ms-1">— Beginner</span></span></li>
                    </ul>
                  </div>
                  <div className="mb-3">
                    <h3>Links</h3>
                  </div>
                  <ul className="list-unstyled list-py-1">
                    <li><a href="#">www.github.com/maria-w</a></li>
                    <li><a href="#">www.twitter.com/maria-w</a></li>
                  </ul>
                  {/* Sticky Block End Point */}
                  <div id="stickyBlockEndPoint" />
                </div>
                {/* End Col */}
                <div className="col-lg-4">
                  <div className="ps-lg-4">
                    {/* Sticky Block */}
                    <div id="stickyBlockStartPoint">
                      <div className="js-sticky-block" data-hs-sticky-block-options="{
                        &quot;parentSelector&quot;: &quot;#stickyBlockStartPoint&quot;,
                        &quot;breakpoint&quot;: &quot;lg&quot;,
                        &quot;startPoint&quot;: &quot;#stickyBlockStartPoint&quot;,
                        &quot;endPoint&quot;: &quot;#stickyBlockEndPoint&quot;,
                        &quot;stickyOffsetTop&quot;: 20,
                        &quot;stickyOffsetBottom&quot;: 20
                      }">
                        {/* Card */}
                        <div className="card card-bordered">
                          <div className="card-body">
                            <div className="mb-5">
                              <h3>Search millions of resumes across your industry and location.</h3>
                            </div>
                            <div className="d-grid mb-5">
                              <a className="btn btn-primary contactme" href="#">Select a subscription</a>
                            </div>
                            <div className="w-65 mx-auto">
                              <Image className="card-img-bottom" src={ocChatting} alt="Image Description" />
                            </div>
                          </div>
                        </div>
                        {/* End Card */}
                      </div>
                    </div>
                    {/* End Sticky Block */}
                  </div>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
            </div>
            {/* Content */}
          </main>
          {/* ========== END MAIN CONTENT ========== */}
    </>

    </>
   
    );
}

export default applicantProfile;