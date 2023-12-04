'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { CreateJob, GetApplicantProfile } from '../../endpoints/api';

import './company.scss';

import profilecover from "../../../assets/img/1920x400/img1.jpg";
import dropboxicon from "../../../assets/svg/brands/dropbox-icon.svg";
import star from "../../../assets/svg/illustrations/star.svg";
import halfstar from "../../../assets/svg/illustrations/star-half.svg";
import roundedicon from "../../../assets/svg/illustrations/top-vendor.svg";
import img1 from "../../../assets/img/900x900/img1.jpg";
import img8 from "../../../assets/img/900x900/img8.jpg";
import img7 from "../../../assets/img/900x900/img7.jpg";
import img23 from "../../../assets/img/900x900/img23.jpg";
import img9 from "../../../assets/img/900x900/img9.jpg";
import img3 from "../../../assets/img/160x160/img3.jpg";
import img01 from "../../../assets/img/160x160/img1.jpg";
import img07 from "../../../assets/img/160x160/img7.jpg";
import img06 from "../../../assets/img/160x160/img6.jpg";
import img05 from "../../../assets/img/160x160/img5.jpg";
import ocChatting from "../../../assets/svg/illustrations/oc-chatting.svg";
import img09 from "../../../assets/img/160x160/img9.jpg";
import img01circle from "../../../assets/img/160x160/img1.jpg";
import img08 from "../../../assets/img/480x320/img8.jpg";
import london from "../../../assets/img/480x320/img28.jpg";
import img29 from "../../../assets/img/480x320/img29.jpg";
import img11 from "../../../assets/img/480x320/img11.jpg";
import img10 from "../../../assets/img/480x320/img10.jpg";
import Banner from '../../banner/Banner';

function companyProfile() {
    const [menuToggler, setMenuToggler] = useState<boolean>(false);
    const [activeStep, setActiveStep] = useState(0);

    //formInputs
    const [country, setCountry] = useState(0);
    const [language, setLanguage] = useState(0);
    
    // const router = useRouter()

    async function getApplicantProfile(){
      
      const id= ""; //get from url

      if(id!=undefined){
        const res = await GetApplicantProfile(id as string); //get from api-> kwanele to provide url
      }
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
        <div className="container pt-4">
          <div className="page-header">
            {/* Profile Cover */}
            <div className="profile-cover">
              <div className="profile-cover-img-wrapper">
                <Image className="profile-cover-img" src={profilecover} alt="Image Description" />
              </div>
            </div>
            {/* End Profile Cover */}
            {/* Media */}
            <div className="d-sm-flex align-items-lg-center pt-1 px-3 pb-3">
              <div className="flex-shrink-0 mb-2 mb-sm-0 me-4">
                <Image className="avatar avatar-xl profile-cover-avatar shadow-sm" src={dropboxicon} alt="Image Description" />
              </div>
              <div className="flex-grow-1">
                <div className="row">
                  <div className="col-md mb-3 mb-md-0">
                    <h1 className="h2 mb-1">Dropbox <Image className="avatar avatar-xs" src={roundedicon} alt="Review rating" data-bs-toggle="tooltip" data-bs-placement="top" title="Claimed profile" /></h1>
                    {/* Rating */}
                    <div className="d-flex gap-1">
                      <Image src={star} alt="Review rating" width={14} />
                      <Image src={star} alt="Review rating" width={14} />
                      <Image src={star} alt="Review rating" width={14} />
                      <Image src={star} alt="Review rating" width={14} />
                      <Image src={halfstar} alt="Review rating" width={14} />
                      <span className="fw-semibold text-dark ms-1">4.5</span>
                      <span className="ms-1">2,391 reviews</span>
                    </div>
                    {/* End Rating */}
                  </div>
                  {/* End Col */}
                  <div className="col-md-auto align-self-md-end">
                    <div className="d-grid d-sm-flex gap-2">
                      <a className="btn btn-primary custombtn" href="#">54 Open jobs</a>
                      <a className="btn btn-outline-primary" style={{color: '#FD2DC3 !important'}} href="#">
                        <i className="bi-person-plus-fill me-1" style={{color: '#FD2DC3'}} /> Follow
                      </a>
                    </div>
                  </div>
                  {/* End Col */}
                </div>
                {/* End Row */}
              </div>
            </div>
            {/* End Media */}
            {/* Nav Scroller */}
            <div id="pageHeaderTabParent">
              <div className="js-nav-scroller js-sticky-block hs-nav-scroller-horizontal bg-white zi-2" data-hs-sticky-block-options="{
               &quot;parentSelector&quot;: &quot;#pageHeaderTabParent&quot;,
               &quot;breakpoint&quot;: &quot;lg&quot;,
               &quot;startPoint&quot;: &quot;#pageHeaderTabParent&quot;,
               &quot;endPoint&quot;: &quot;#pageHeaderTabEndPoint&quot;
             }">
                <span className="hs-nav-scroller-arrow-prev" style={{display: 'none'}}>
                  <a className="hs-nav-scroller-arrow-link" href="javascript:;">
                    <i className="bi-chevron-left" />
                  </a>
                </span>
                <span className="hs-nav-scroller-arrow-next" style={{display: 'none'}}>
                  <a className="hs-nav-scroller-arrow-link" href="javascript:;">
                    <i className="bi-chevron-right" />
                  </a>
                </span>
                {/* Nav */}
                <ul className="js-scroll-nav nav nav-tabs page-header-tabs bg-white" id="pageHeaderTab" role="tablist" data-hs-scroll-nav-options="{
                &quot;customOffsetTop&quot;: 40
              }">
                  <li className="nav-item active">
                    <a className="nav-link" href="#about-section">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#jobs-section">Jobs <span className="badge rounded-pill ms-1" style={{backgroundColor: 'rgba(255, 123, 237, 0.15);', color: '#4B4C4E'}}>+9</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#reviews-section">Reviews</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#interview-section">Interview</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#locations-section">Locations</a>
                  </li>
                </ul>
                {/* End Nav */}
              </div>
            </div>
            {/* End Nav Scroller */}
          </div>
        </div>
        {/* End Page Header */}
        {/* Content */}
        <div id="about-section" className="container content-space-t-1">
          <h3>About the company</h3>
          <div className="row mb-5">
            <div className="col-md-3 order-md-2 mb-3 mb-md-0">
              <div className="ps-md-4">
                {/* List */}
                <ul className="list-unstyled list-py-2">
                  <li>
                    <h5>Founded</h5>
                    <p className="small mb-0">2009</p>
                  </li>
                  <li>
                    <h5>Company size</h5>
                    <p className="small mb-0">150 - 300</p>
                  </li>
                  <li>
                    <h5>Avg. Salary</h5>
                    <p className="small mb-0">$25 - $45</p>
                  </li>
                  <li>
                    <h5>Industry</h5>
                    <p className="small mb-0">Information Technology</p>
                  </li>
                  <li>
                    <h5>Links</h5>
                    {/* Socials */}
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a className="btn btn-soft-secondary btn-xs btn-icon rounded-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Capsule on Facebook">
                          <i className="bi-facebook" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="btn btn-soft-secondary btn-xs btn-icon rounded-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Capsule on Twitter">
                          <i className="bi-twitter" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="btn btn-soft-secondary btn-xs btn-icon rounded-circle" href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Capsule on Github">
                          <i className="bi-github" />
                        </a>
                      </li>
                    </ul>
                    {/* End Socials */}
                  </li>
                </ul>
                {/* End List */}
              </div>
            </div>
            {/* End Col */}
            <div className="col-md-9">
              <div className="mb-5">
                <p>Capsule was launched in 2009 following the founders' frustration with existing CRM services that were either overly simplistic or far too complex for most businesses. We believe the value of a modern CRM lies in the ability to help businesses stay organized, know more about their customers, build strong relationships and to make the most of sales opportunities, all while minimizing user input. We built Capsule to deliver on these values and today Capsule is used by thousands of businesses of all sizes all over the world.</p>
                <div className="collapse" id="employerOverviewDescriptionCollapse">
                  <p>We're based in Manchester, United Kingdom, a city with a creative heart that was founded on science and industry and the birthplace of the modern computer.</p>
                </div>
                <a className="link link-collapse" data-bs-toggle="collapse" href="#employerOverviewDescriptionCollapse" role="button" aria-expanded="false" aria-controls="employerOverviewDescriptionCollapse">
                  <span className="link-collapse-default" style={{color: '#FD2DC3'}}>Read more</span>
                  <span className="link-collapse-active" style={{color: '#FD2DC3'}} >Read less</span>
                </a>
              </div>
              <div id="fancyboxGallery">
                <div className="row gx-3">
                  <div className="col-4 col-sm px-2 mb-3 mb-sm-0">
                    {/* Media Viewer */}
                    <a className="media-viewer" href="../assets/img/900x900/img1.jpg" data-fslightbox="jobOverviewGallery">
                      <Image className="img-fluid rounded-2" src={img1} alt="Image Description" />
                      <span className="media-viewer-container">
                        <span className="media-viewer-icon">
                          <i className="bi-plus media-viewer-icon-inner" />
                        </span>
                      </span>
                    </a>
                    {/* End Media Viewer */}
                  </div>
                  {/* End Col */}
                  <div className="col-4 col-sm px-2 mb-3 mb-sm-0">
                    {/* Media Viewer */}
                    <a className="media-viewer" href="../assets/img/900x900/img8.jpg" data-fslightbox="jobOverviewGallery">
                      <Image className="img-fluid rounded-2" src={img8} alt="Image Description" />
                      <span className="media-viewer-container">
                        <span className="media-viewer-icon">
                          <i className="bi-plus media-viewer-icon-inner" />
                        </span>
                      </span>
                    </a>
                    {/* End Media Viewer */}
                  </div>
                  {/* End Col */}
                  <div className="col-4 col-sm px-2 mb-3 mb-sm-0">
                    {/* Media Viewer */}
                    <a className="media-viewer" href="../assets/img/900x900/img7.jpg" data-fslightbox="jobOverviewGallery">
                      <Image className="img-fluid rounded-2" src={img7} alt="Image Description" />
                      <span className="media-viewer-container">
                        <span className="media-viewer-icon">
                          <i className="bi-plus media-viewer-icon-inner" />
                        </span>
                      </span>
                    </a>
                    {/* End Media Viewer */}
                  </div>
                  {/* End Col */}
                  <div className="col-4 col-sm px-2 mb-3 mb-sm-0">
                    {/* Media Viewer */}
                    <a className="media-viewer" href="../assets/img/900x900/img23.jpg" data-fslightbox="jobOverviewGallery">
                      <Image className="img-fluid rounded-2" src={img23} alt="Image Description" />
                      <span className="media-viewer-container">
                        <span className="media-viewer-icon">
                          <i className="bi-plus media-viewer-icon-inner" />
                        </span>
                      </span>
                    </a>
                    {/* End Media Viewer */}
                  </div>
                  {/* End Col */}
                  <div className="col-4 col-sm px-2 mb-3 mb-sm-0">
                    {/* Media Viewer */}
                    <a className="media-viewer" href="../assets/img/900x900/img9.jpg" data-fslightbox="jobOverviewGallery">
                      <Image className="img-fluid rounded-2" src={img9} alt="Image Description" />
                      <span className="media-viewer-container">
                        <span className="media-viewer-icon media-viewer-icon-active">
                          <span className="media-viewer-icon-inner ">+2</span>
                        </span>
                      </span>
                    </a>
                    {/* End Media Viewer */}
                  </div>
                  {/* End Col */}
                </div>
                {/* End Row */}
                <a className="d-none" href="../assets/img/900x900/img2.jpg" data-fslightbox="jobOverviewGallery" />
                <a className="d-none" href="../assets/img/900x900/img19.jpg" data-fslightbox="jobOverviewGallery" />
              </div>
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
        {/* Content */}
        {/* Divider */}
        <div className="container">
          <hr className="my-10" />
        </div>
        {/* End Divider */}
        {/* Card Grid */}
        <div id="jobs-section" className="container">
          <div className="mb-4">
            <h3>Jobs</h3>
            <p>We were not able to detect your location. You can browse through all 105 jobs Capsule has to offer.</p>
          </div>
          {/* Swiper Slider */}
          <div className="js-swiper-employer-jobs swiper swiper-equal-height">
            <div className="swiper-wrapper">
              {/* Slide */}
              <div className="swiper-slide">
                {/* Card */}
                <div className="card card-bordered shadow-none w-100">
                  {/* Card Body */}
                  <div className="card-body">
                    <h3 className="card-title">
                      <a className="text-dark" href="../demo-jobs/employer.html">Senior B2B sales consultant</a>
                    </h3>
                    <span className="d-block small text-body mb-1">$125k-$135k yearly</span>
                    <span className="badge bg-soft-info text-info me-2 remote">
                      <span className="legend-indicator bg-info" />Remote
                    </span>
                  </div>
                  {/* End Card Body */}
                  {/* Card Footer */}
                  <div className="card-footer pt-0">
                    <ul className="list-inline list-separator small text-body">
                      <li className="list-inline-item">Posted 7 hours ago</li>
                      <li className="list-inline-item">Oxford</li>
                      <li className="list-inline-item">Full time</li>
                    </ul>
                  </div>
                  {/* End Card Footer */}
                </div>
                {/* End Card */}
              </div>
              {/* End Slide */}
              {/* Slide */}
              <div className="swiper-slide">
                {/* Card */}
                <div className="card card-bordered shadow-none w-100">
                  {/* Card Body */}
                  <div className="card-body">
                    <h3 className="card-title">
                      <a className="text-dark" href="../demo-jobs/employer.html">Office assistant/Social media assistant</a>
                    </h3>
                    <span className="d-block small text-body mb-1">$50-$135 hourly</span>
                  </div>
                  {/* End Card Body */}
                  {/* Card Footer */}
                  <div className="card-footer pt-0">
                    <ul className="list-inline list-separator small text-body">
                      <li className="list-inline-item">Posted 21 hours ago</li>
                      <li className="list-inline-item">Newcastle</li>
                      <li className="list-inline-item">Part time</li>
                    </ul>
                  </div>
                  {/* End Card Footer */}
                </div>
                {/* End Card */}
              </div>
              {/* End Slide */}
              {/* Slide */}
              <div className="swiper-slide">
                {/* Card */}
                <div className="card card-bordered shadow-none w-100">
                  {/* Card Body */}
                  <div className="card-body">
                    <h3 className="card-title">
                      <a className="text-dark" href="../demo-jobs/employer.html">Marketing and Communications Manager</a>
                    </h3>
                    <span className="d-block small text-body mb-1">$5k monthly</span>
                  </div>
                  {/* End Card Body */}
                  {/* Card Footer */}
                  <div className="card-footer pt-0">
                    <ul className="list-inline list-separator small text-body">
                      <li className="list-inline-item">Posted 1 day ago</li>
                      <li className="list-inline-item">London</li>
                      <li className="list-inline-item">Full time</li>
                    </ul>
                  </div>
                  {/* End Card Footer */}
                </div>
                {/* End Card */}
              </div>
              {/* End Slide */}
              {/* Slide */}
              <div className="swiper-slide">
                {/* Card */}
                <div className="card card-bordered shadow-none w-100">
                  {/* Card Body */}
                  <div className="card-body">
                    <h3 className="card-title">
                      <a className="text-dark" href="../demo-jobs/employer.html">Senior backend developer</a>
                    </h3>
                    <span className="d-block small text-body mb-1">$75k-$85k yearly</span>
                    <span className="badge bg-soft-info text-info me-2 remote">
                      <span className="legend-indicator bg-info" />Remote
                    </span>
                  </div>
                  {/* End Card Body */}
                  {/* Card Footer */}
                  <div className="card-footer pt-0">
                    <ul className="list-inline list-separator small text-body">
                      <li className="list-inline-item">Posted 1 day ago</li>
                      <li className="list-inline-item">Liverpool</li>
                      <li className="list-inline-item">Full time</li>
                    </ul>
                  </div>
                  {/* End Card Footer */}
                </div>
                {/* End Card */}
              </div>
              {/* End Slide */}
              {/* Slide */}
              <div className="swiper-slide">
                {/* Card */}
                <div className="card card-bordered shadow-none w-100">
                  {/* Card Body */}
                  <div className="card-body">
                    <h3 className="card-title">
                      <a className="text-dark" href="../demo-jobs/employer.html">Senior product manager</a>
                    </h3>
                    <span className="d-block small text-body mb-1">$76k-$98k yearly</span>
                  </div>
                  {/* End Card Body */}
                  {/* Card Footer */}
                  <div className="card-footer pt-0">
                    <ul className="list-inline list-separator small text-body">
                      <li className="list-inline-item">Posted 2 days ago</li>
                      <li className="list-inline-item">London</li>
                      <li className="list-inline-item">Full time</li>
                    </ul>
                  </div>
                  {/* End Card Footer */}
                </div>
                {/* End Card */}
              </div>
              {/* End Slide */}
              {/* Slide */}
              <div className="swiper-slide">
                {/* Card */}
                <div className="card card-bordered shadow-none w-100">
                  {/* Card Body */}
                  <div className="card-body">
                    <h3 className="card-title">
                      <a className="text-dark" href="../demo-jobs/employer.html">iOS Engineer</a>
                    </h3>
                    <span className="d-block small text-body mb-1">$500-$1000 weekly</span>
                    <span className="badge bg-soft-info text-info me-2 remote" style={{backgroundColor: 'lightpink !impoortant'}}>
                      <span className="legend-indicator" />Remote
                    </span>
                  </div>
                  {/* End Card Body */}
                  {/* Card Footer */}
                  <div className="card-footer pt-0">
                    <ul className="list-inline list-separator small text-body">
                      <li className="list-inline-item">Posted 3 days ago</li>
                      <li className="list-inline-item">Manchester</li>
                      <li className="list-inline-item">Part time</li>
                    </ul>
                  </div>
                  {/* End Card Footer */}
                </div>
                {/* End Card */}
              </div>
              {/* End Slide */}
            </div>
            {/* Arrows */}
            <div className="js-swiper-employer-jobs-button-next swiper-button-next" />
            <div className="js-swiper-employer-jobs-button-prev swiper-button-prev" />
          </div>
          {/* End Swiper Slider */}
        </div>
        {/* Card Grid */}
        {/* Card Grid */}
        <div className="container content-space-t-2">
          <div className="mb-4">
            <h3>Browse jobs by category</h3>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 1 row-cols-md-3 row-cols-lg-4 mb-5">
            <div className="col mb-3 mb-sm-4">
              {/* Card */}
              <a className="card card-sm card-bordered card-transition h-100" href="../demo-jobs/job-overview.html">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">
                      <h5 className="card-title card-title_costom">Management</h5>
                      <p className="card-text text-body small">4 job positions</p>
                    </div>
                    {/* End Col */}
                    <div className="col-auto">
                      <span className="text-muted">
                        <i className="bi-chevron-right small" />
                      </span>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col mb-3 mb-sm-4">
              {/* Card */}
              <a className="card card-sm card-bordered card-transition h-100" href="../demo-jobs/job-overview.html">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">
                      <h5 className="card-title card-title_costom">App Development</h5>
                      <p className="card-text text-body small">26 job positions</p>
                    </div>
                    {/* End Col */}
                    <div className="col-auto">
                      <span className="text-muted">
                        <i className="bi-chevron-right small" />
                      </span>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col mb-3 mb-sm-4">
              {/* Card */}
              <a className="card card-sm card-bordered card-transition h-100" href="../demo-jobs/job-overview.html">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">
                      <h5 className="card-title card-title_costom">Arts &amp; Entertainment</h5>
                      <p className="card-text text-body small">9 job positions</p>
                    </div>
                    {/* End Col */}
                    <div className="col-auto">
                      <span className="text-muted">
                        <i className="bi-chevron-right small" />
                      </span>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col mb-3 mb-sm-4">
              {/* Card */}
              <a className="card card-sm card-bordered card-transition h-100" href="../demo-jobs/job-overview.html">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">
                      <h5 className="card-title card-title_costom">Accounting</h5>
                      <p className="card-text text-body small">11 job positions</p>
                    </div>
                    {/* End Col */}
                    <div className="col-auto">
                      <span className="text-muted">
                        <i className="bi-chevron-right small" />
                      </span>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col mb-3 mb-sm-4">
              {/* Card */}
              <a className="card card-sm card-bordered card-transition h-100" href="../demo-jobs/job-overview.html">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">
                      <h5 className="card-title card-title_costom">UI Designer</h5>
                      <p className="card-text text-body small">37 job positions</p>
                    </div>
                    {/* End Col */}
                    <div className="col-auto">
                      <span className="text-muted">
                        <i className="bi-chevron-right small" />
                      </span>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col mb-3 mb-sm-4">
              {/* Card */}
              <a className="card card-sm card-bordered card-transition h-100" href="../demo-jobs/job-overview.html">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">
                      <h5 className="card-title card-title_costom">Apps</h5>
                      <p className="card-text text-body small">2 job positions</p>
                    </div>
                    {/* End Col */}
                    <div className="col-auto">
                      <span className="text-muted">
                        <i className="bi-chevron-right small" />
                      </span>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col mb-3 mb-sm-4">
              {/* Card */}
              <a className="card card-sm card-bordered card-transition h-100" href="../demo-jobs/job-overview.html">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">
                      <h5 className="card-title card-title_costom">Content Writer</h5>
                      <p className="card-text text-body small">10 job positions</p>
                    </div>
                    {/* End Col */}
                    <div className="col-auto">
                      <span className="text-muted">
                        <i className="bi-chevron-right small" />
                      </span>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col mb-3 mb-sm-4">
              {/* Card */}
              <a className="card card-sm card-bordered card-transition h-100" href="../demo-jobs/job-overview.html">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">
                      <h5 className="card-title card-title_costom">Analytics</h5>
                      <p className="card-text text-body small">14 job positions</p>
                    </div>
                    {/* End Col */}
                    <div className="col-auto">
                      <span className="text-muted">
                        <i className="bi-chevron-right small" />
                      </span>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
          <a className="btn btn-outline-primary" style={{backgroundColor: '#FD2DC3 !important'}} href="../demo-jobs/job-list.html">View all available jobs <i className="bi-chevron-right small ms-1" /></a>
        </div>
        {/* End Card Grid */}
        {/* Divider */}
        <div className="container">
          <hr className="my-10" />
        </div>
        {/* End Divider */}
        {/* Reviews */}
        <div id="reviews-section" className="container">
          <div className="mb-4">
            <h3>Reviews</h3>
          </div>
          <div className="row">
            <div className="col-md-8 mb-7 mb-md-0">
              <div className="row mb-6">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  {/* Media */}
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <span className="display-4 text-dark">4.5</span>
                    </div>
                    <div className="flex-grow-1 ms-4">
                      {/* Rating */}
                      <div className="d-flex gap-1 mb-2">
                        <Image src={star} alt="Review rating" width={14} />
                        <Image src={star} alt="Review rating" width={14} />
                        <Image src={star} alt="Review rating" width={14} />
                        <Image src={star} alt="Review rating" width={14} />
                        <Image src={halfstar} alt="Review rating" width={14} />
                      </div>
                      {/* End Rating */}
                      <span className="d-block">2,391 reviews</span>
                    </div>
                  </div>
                  {/* End Media */}
                </div>
                {/* End Col */}
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <span className="display-4 text-dark">90%</span>
                    </div>
                    <div className="flex-grow-1 ms-4">
                      <span className="font-size-1">of customers<br />recommend this company</span>
                    </div>
                  </div>
                </div>
                {/* End Col */}
              </div>
              {/* End Row */}
              {/* Comment */}
              <ul className="list-comment mb-7">
                {/* Item */}
                <li className="list-comment-item">
                  {/* Media */}
                  <div className="d-flex mb-3">
                    <div className="flex-shrink-0">
                      <Image className="avatar avatar-circle" src={img3} alt="Image Description" />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5>Dave Austin</h5>
                      <div className="d-flex align-items-center mb-3">
                        <span className="fw-semibold text-dark me-1">5.0</span>
                        <Image className="me-2" src={star} alt="Review rating" width={14} />
                        <small className="d-block">on November 12, 2020</small>
                      </div>
                      <h5>Fun place to work at</h5>
                      <p>You work at your own time. No stress. Although finding jobs are really hard as an entry-level individual with no experience. But I have found 2 jobs without needing any experience.</p>
                    </div>
                  </div>
                  {/* End Media */}
                </li>
                {/* End Item */}
                {/* Item */}
                <li className="list-comment-item">
                  {/* Media */}
                  <div className="d-flex mb-3">
                    <div className="flex-shrink-0">
                      <Image className="avatar avatar-circle" src={img01} alt="Image Description" />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5>Brian Ortega</h5>
                      <div className="d-flex align-items-center mb-3">
                        <span className="fw-semibold text-dark me-1">3.0</span>
                        <Image className="me-2" src={star} alt="Review rating" width={14} />
                        <small className="d-block">on October 25, 2020</small>
                      </div>
                      <h5>Capsule is for contracted freelance writers</h5>
                      <p>It was difficult getting the person I was reporting to to explain what it was they wanted me to do. Trello board was all over the place. Some use word, some use Google docs. There was more time spent *hours* researching and minimal pay for articles. 1 cent per word is not acceptable compared to the research behind it. Applying for jobs costs "contacts" and it's very difficult to get anyone who posts jobs to answer you once you apply, therefore you waste contacts applying. There are alot of unverified payments from people searching for writing help. Be leery and watch what you apply for.</p>
                    </div>
                  </div>
                  {/* End Media */}
                </li>
                {/* End Item */}
                {/* Item */}
                <li className="list-comment-item">
                  {/* Media */}
                  <div className="d-flex mb-3">
                    <div className="flex-shrink-0">
                      <Image className="avatar avatar-circle" src={img07} alt="Image Description" />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5>Maria Williams</h5>
                      <div className="d-flex align-items-center mb-3">
                        <span className="fw-semibold text-dark me-1">5.0</span>
                        <Image className="me-2" src={star} alt="Review rating" width={14} />
                        <small className="d-block">on October 19, 2020</small>
                      </div>
                      <h5>Excellent Company</h5>
                      <p>They have a great training program, I felt very comfortable with my day to day tasks. Very low turn over, management always is available if you have any questions.</p>
                    </div>
                  </div>
                  {/* End Media */}
                </li>
                {/* End Item */}
                {/* Item */}
                <li className="list-comment-item">
                  {/* Media */}
                  <div className="d-flex mb-3">
                    <div className="flex-shrink-0">
                      <Image className="avatar avatar-circle" src={img06} alt="Image Description" />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5>Alex Walters</h5>
                      <div className="d-flex align-items-center mb-3">
                        <span className="fw-semibold text-dark me-1">4.0</span>
                        <Image className="me-2" src={star} alt="Review rating" width={14} />
                        <small className="d-block">on July 04, 2020</small>
                      </div>
                      <h5>Productive and fun Workplace</h5>
                      <p>I'm Diplomatic, personable, and adept at managing sensitive situations. Highly organized, self-motivated, with computers. I'm likeable delecated student of Software Engineering.</p>
                    </div>
                  </div>
                  {/* End Media */}
                </li>
                {/* End Item */}
                {/* Item */}
                <li className="list-comment-item">
                  {/* Media */}
                  <div className="d-flex mb-3">
                    <div className="flex-shrink-0">
                      <Image className="avatar avatar-circle" src={img05} alt="Image Description" />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5>Kurtis Blade</h5>
                      <div className="d-flex align-items-center mb-3">
                        <span className="fw-semibold text-dark me-1">5.0</span>
                        <Image className="me-2" src={star} alt="Review rating" width={14} />
                        <small className="d-block">on March 01, 2020</small>
                      </div>
                      <h5>Nice place</h5>
                      <p>I learned a lot of things while working at this job. A decent workplace to be. Managment is okay and my coworkers we just fine. Very good for beginners.</p>
                    </div>
                  </div>
                  {/* End Media */}
                </li>
                {/* End Item */}
              </ul>
              {/* End Comment */}
              <a href="#" className='viewallreviews'>View all reviews <i className="bi-chevron-right small ms-1" /></a>
              {/* Sticky Block End Point */}
              <div id="stickyBlockEndPoint" />
            </div>
            {/* End Col */}
            <div className="col-md-4">
              <div className="ps-md-4">
                {/* Sticky Block */}
                <div id="stickyBlockStartPoint">
                  <div className="js-sticky-block" data-hs-sticky-block-options="{
                     &quot;parentSelector&quot;: &quot;#stickyBlockStartPoint&quot;,
                     &quot;breakpoint&quot;: &quot;md&quot;,
                     &quot;startPoint&quot;: &quot;#stickyBlockStartPoint&quot;,
                     &quot;endPoint&quot;: &quot;#stickyBlockEndPoint&quot;,
                     &quot;stickyOffsetTop&quot;: 20,
                     &quot;stickyOffsetBottom&quot;: 20
                   }">
                    {/* Card */}
                    <div className="card card-bordered">
                      <div className="card-body">
                        <div className="mb-5">
                          <h3 className="card-title">What would you say about your employer?</h3>
                          <p className="card-text">Help fellow job seekers by sharing your unique experience.</p>
                        </div>
                        <div className="d-grid mb-5">
                          <a className="btn btn-primary btn-sm subscription" href="#">Select a subscription</a>
                        </div>
                        <Image className="card-img-bottom" src={ocChatting} alt="Image Description" />
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
        {/* Reviews */}
        {/* Divider */}
        <div className="container">
          <hr className="my-10" />
        </div>
        {/* End Divider */}
        {/* Card Grid */}
        <div id="interview-section" className="container">
          <div className="mb-4">
            <h3>Interview insights</h3>
            <p>Insights from 209 Front Job users who have interviewed with Capsule within the last 5 years.</p>
          </div>
          <div className="row mb-5">
            <div className="col-md mb-3">
              {/* Card */}
              <div className="card card-bordered shadow-none h-100">
                <div className="card-body">
                  <p className="card-text">Interview experience:</p>
                  <h4 className="card-title">Favorable</h4>
                </div>
              </div>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col-md mb-3">
              {/* Card */}
              <div className="card card-bordered shadow-none h-100">
                <div className="card-body">
                  <p className="card-text">Interview difficulty:</p>
                  <h4 className="card-title">Medium</h4>
                </div>
              </div>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col-md mb-3">
              {/* Card */}
              <div className="card card-bordered shadow-none h-100">
                <div className="card-body">
                  <p className="card-text">Interview process length:</p>
                  <h4 className="card-title">About a day or two</h4>
                </div>
              </div>
              {/* End Card */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
          <div className="mb-4">
            <h4>Interview process length</h4>
          </div>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-5 gx-3 mb-7">
            <div className="col mb-3">
              {/* Card */}
              <div className="card card-sm card-bordered shadow-none h-100">
                <div className="card-body">
                  <h6 className="card-title">About a day or two</h6>
                </div>
                <div className="card-footer pt-0">
                  <span className="card-subtitle">43%</span>
                  <div className="progress" style={{height: '8px'}}>
                    <div className="progress-bar bg-success" role="progressbar" style={{width: '43%'}} aria-valuenow={43} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col mb-3">
              {/* Card */}
              <div className="card card-sm card-bordered shadow-none h-100">
                <div className="card-body">
                  <h6 className="card-title">About a week</h6>
                </div>
                <div className="card-footer pt-0">
                  <span className="card-subtitle">28%</span>
                  <div className="progress" style={{height: '8px'}}>
                    <div className="progress-bar bg-success" role="progressbar" style={{width: '28%'}} aria-valuenow={28} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col mb-3">
              {/* Card */}
              <div className="card card-sm card-bordered shadow-none h-100">
                <div className="card-body">
                  <h6 className="card-title">About two weeks</h6>
                </div>
                <div className="card-footer pt-0">
                  <span className="card-subtitle">17%</span>
                  <div className="progress" style={{height: '8px'}}>
                    <div className="progress-bar bg-success" role="progressbar" style={{width: '17%'}} aria-valuenow={17} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col mb-3">
              {/* Card */}
              <div className="card card-sm card-bordered shadow-none h-100">
                <div className="card-body">
                  <h6 className="card-title">More than one month</h6>
                </div>
                <div className="card-footer pt-0">
                  <span className="card-subtitle">6%</span>
                  <div className="progress" style={{height: '8px'}}>
                    <div className="progress-bar bg-success" role="progressbar" style={{width: '6%'}} aria-valuenow={6} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col mb-3">
              {/* Card */}
              <div className="card card-sm card-bordered shadow-none h-100">
                <div className="card-body">
                  <h6 className="card-title">About a month</h6>
                </div>
                <div className="card-footer pt-0">
                  <span className="card-subtitle">5%</span>
                  <div className="progress" style={{height: '8px'}}>
                    <div className="progress-bar bg-success" role="progressbar" style={{width: '5%'}} aria-valuenow={5} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
              {/* End Card */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
          <div className="mb-4">
            <h4>What candidates say about the interview process at Capsule</h4>
          </div>
          <div className="row mb-3">
            <div className="col-md-6 col-lg-4 mb-5">
              {/* Blockquote */}
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <Image className="avatar avatar-sm avatar-circle" src={img09} alt="Image Description" />
                </div>
                <div className="flex-grow-1 ms-3">
                  <blockquote className="blockquote-left-border blockquote-sm">" My personal details, like, full name, location, and phone numbers. "</blockquote>
                  <div className="blockquote-footer blockquote-sm">
                    <span className="blockquote-footer-source">Shared on September 9, 2020</span>
                    Christina Kray
                  </div>
                </div>
              </div>
              {/* End Blockquote */}
            </div>
            {/* End Col */}
            <div className="col-md-6 col-lg-4 mb-5">
              {/* Blockquote */}
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <Image className="avatar avatar-sm avatar-circle" src={img01circle} alt="Image Description" />
                </div>
                <div className="flex-grow-1 ms-3">
                  <blockquote className="blockquote-left-border blockquote-sm">" What my skills are and what I can offer to them. "</blockquote>
                  <div className="blockquote-footer blockquote-sm">
                    <span className="blockquote-footer-source">Shared on March 24, 2020</span>
                    Brian McManus
                  </div>
                </div>
              </div>
              {/* End Blockquote */}
            </div>
            {/* End Col */}
            <div className="col-md-6 col-lg-4 mb-5">
              {/* Blockquote */}
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <Image className="avatar avatar-sm avatar-circle" src={img01circle} alt="Image Description" />
                </div>
                <div className="flex-grow-1 ms-3">
                  <blockquote className="blockquote-left-border blockquote-sm">" If I know how to do certain job functions. "</blockquote>
                  <div className="blockquote-footer blockquote-sm">
                    <span className="blockquote-footer-source">Shared on June 2, 2020</span>
                    Max Walters
                  </div>
                </div>
              </div>
              {/* End Blockquote */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
          <a className="btn btn-outline-primary" href="#">View all interviews <i className="bi-chevron-right small ms-1" /></a>
        </div>
        {/* Card Grid */}
        {/* Divider */}
        <div className="container">
          <hr className="my-10" />
        </div>
        {/* End Divider */}
        {/* Card Grid */}
        <div id="locations-section" className="container content-space-b-2">
          <div className="mb-4">
            <h3>Capsule locations</h3>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 1 row-cols-md-3 row-cols-lg-4 mb-5">
            <div className="col mb-3">
              {/* Card */}
              <a className="card card-sm card-bordered card-transition h-100" href="#">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <Image className="avatar avatar-sm avatar-circle" src={london} alt="SVG" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="card-title card-title_costom">London, UK</h5>
                        </div>
                      </div>
                    </div>
                    {/* End Col */}
                    <div className="col-auto">
                      <span className="text-muted">
                        <i className="bi-chevron-right small" style={{color: '#FD2DC3'}} />
                      </span>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col mb-3">
              {/* Card */}
              <a className="card card-sm card-bordered card-transition h-100" href="#">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <Image className="avatar avatar-sm avatar-circle" src={img08} alt="SVG" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="card-title card-title_costom">Bristol, UK</h5>
                        </div>
                      </div>
                    </div>
                    {/* End Col */}
                    <div className="col-auto">
                      <span className="text-muted">
                        <i className="bi-chevron-right small" style={{color: '#FD2DC3'}} />
                      </span>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col mb-3">
              {/* Card */}
              <a className="card card-sm card-bordered card-transition h-100" href="#">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <Image className="avatar avatar-sm avatar-circle" src={img29} alt="SVG" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="card-title card-title_costom">Oxford, UK</h5>
                        </div>
                      </div>
                    </div>
                    {/* End Col */}
                    <div className="col-auto">
                      <span className="text-muted">
                        <i className="bi-chevron-right small" style={{color: '#FD2DC3'}} />
                      </span>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col mb-3">
              {/* Card */}
              <a className="card card-sm card-bordered card-transition h-100" href="#">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <Image className="avatar avatar-sm avatar-circle" src={img11} alt="SVG" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="card-title card-title_costom">Edinburgh, UK</h5>
                        </div>
                      </div>
                    </div>
                    {/* End Col */}
                    <div className="col-auto">
                      <span className="text-muted">
                        <i className="bi-chevron-right small" style={{color: '#FD2DC3'}} />
                      </span>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col mb-3">
              {/* Card */}
              <a className="card card-sm card-bordered card-transition h-100" href="#">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <Image className="avatar avatar-sm avatar-circle" src={img10} alt="SVG" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="card-title card-title_costom">Newcastle, UK</h5>
                        </div>
                      </div>
                    </div>
                    {/* End Col */}
                    <div className="col-auto">
                      <span className="text-muted">
                        <i className="bi-chevron-right small" style={{color: '#FD2DC3'}} />
                      </span>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div id="pageHeaderTabEndPoint" className="col mb-3">
              {/* Card */}
              <a className="card card-sm card-bordered card-transition h-100" href="#">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <Image className="avatar avatar-sm avatar-circle" src={london} alt="SVG" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="card-title card-title_costom">Liverpool, UK</h5>
                        </div>
                      </div>
                    </div>
                    {/* End Col */}
                    <div className="col-auto">
                      <span className="text-muted">
                        <i className="bi-chevron-right small" style={{color: '#FD2DC3'}} />
                      </span>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
        {/* Card Grid */}
      </main>
      {/* ========== END MAIN CONTENT ========== */}
</>

</>
   
    );
}

export default companyProfile;