'use client'
import Image from "next/image";
import topVendor from "../../assets/svg/illustrations/top-vendor.svg";
import './DevOverview.scss';
import Link from "next/link";
import { useEffect, useState } from "react";
import 'react-responsive-modal/styles.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GetAllProjects, GetProjectById, GetProjectsByOrgId } from "../../../endpoints/api";
import Cookies from 'universal-cookie'; // Import the libraryconst cookies = new Cookies(); 
import dynamic from "next/dynamic";
const cookies = new Cookies(); // Create an instance of Cookies
import Banner from "../../../banner/Banner";
import { IJobApplication, IJobApplicationViewModel } from "../../../interfaces/IJobApplication";
import companyMenu from "../../company-menu";
import InitialsAvatar from 'react-initials-avatar';
import 'react-initials-avatar/lib/ReactInitialsAvatar.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import AvatarGroup from 'react-avatar-group';
import { getOptionFromValue, skills } from "@/app/lib/data";
import Modal from "react-responsive-modal";
const moment = require("moment");

function developerOverview() {
 

const [position, setPosition] = useState("");
const [tab, setTab] = useState(0);

const [detailModalOpen, setDetailModalOpen] = useState(false);

const [projectLoading, setProjectLoading] = useState(true);
  const loggedInUser = cookies.get("fraktional-user")??"{}";
  const [project, setProject] = useState<IJobApplicationViewModel>();


async function _GetProject(){
  debugger;
  await GetProjectById("6564f67b143ff8d2d5e7ddff").then((res:any) => {
    debugger;
    setProjectLoading(false);
      setProject(res?.data);
  })
}


const customModalStyles = {
  modal: {
    maxWidth: '100%', 
    width: '90%',
    borderRadius: "10px",
    // backgroundColor: "lightpink"
  },
};

useEffect(() => {
  //check url and setActive
  
  _GetProject();

  }, []);


function editProject(project:any){
debugger;
window?.location?.assign(`/company/post-job/${project?.id}`)

}


    return (
      <>

{/* <main id="content" role="main" className="card"> */}
        {/* Page Header */}
        <div className="container pt-4">
          <div className="page-header">
            {/* Profile Cover */}
           
            {/* End Profile Cover */}
            {/* Media */}
            <div className="d-sm-flex align-items-lg-center pt-1 px-3 pb-3">
              <div className="flex-shrink-0 mb-2 mb-sm-0 me-4">
              <InitialsAvatar name={project?.data.projectName? project?.data.projectName:""} />
                {/* <img className="avatar avatar-xl profile-cover-avatar shadow-sm" src="../assets/svg/brands/dropbox-icon.svg" alt="Image Description" /> */}
              </div>
              <div className="flex-grow-1">
                <div className="row">
                  <div className="col-md mb-3 mb-md-0">
                    <h1 className="h2 mb-5">{project?.org.name} 
                    {/* <img className="avatar avatar-xs" src="../assets/svg/illustrations/top-vendor.svg" alt="Review rating" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Claimed profile" data-bs-original-title="Claimed profile" /> */}
                    </h1>
                    {/* Rating */}
                    {/* <div className="d-flex gap-1">
                      <img src="../assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                      <img src="../assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                      <img src="../assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                      <img src="../assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                      <img src="../assets/svg/illustrations/star-half.svg" alt="Review rating" width={14} />
                      <span className="fw-semibold text-dark ms-1">4.5</span>
                      <span className="ms-1">2,391 reviews</span>
                    </div> */}
                    {/* End Rating */}
                  </div>
                  {/* End Col */}
                  <div className="col-md-auto align-self-md-end">
                    <div className="d-grid d-sm-flex gap-2">
                     {tab!=1&& <a className="btn btn-primary" href="#">Assign developer/s</a>}
                      
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
              <div className="js-nav-scroller js-sticky-block hs-nav-scroller-horizontal bg-white zi-2 hs-kill-sticky" data-hs-sticky-block-options="{
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
                    <a className={tab==0 ? "nav-link active": "nav-link"} onClick={()=>setTab(0)}>Project Information</a>
                  </li>
                  <li className="nav-item">
                    <a className={tab==1 ? "nav-link active": "nav-link"} onClick={()=>setTab(1)}>Developers <span className="badge bg-info rounded-pill ms-1">9</span></a>
                  </li>
                  <li className="nav-item">
                    <a className={tab==2 ? "nav-link active": "nav-link"} onClick={()=>setTab(2)}>Company Information</a>
                  </li>
                  <li className="nav-item">
                    <a className={tab==3 ? "nav-link active": "nav-link"} onClick={()=>setTab(3)}>Interviews</a>
                  </li>
                  <li className="nav-item">
                    <a className={tab==4 ? "nav-link active": "nav-link"} onClick={()=>setTab(4)}>Feedback</a>
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
          {/* <h3>About the project</h3> */}
          <div className="row mb-5">

          {tab==0 &&<>
            <div className="col-md-3 order-md-2 mb-3 mb-md-0">
              <div className="ps-md-4">
                {/* List */}
                <ul className="list-unstyled list-py-2">
                  <li>
                    <h5>Dates</h5>
                    <p className="small mb-0"> Start: { moment(project?.data?.fromDate).format("DD/MM/YYYY")} <br/> End: {moment(project?.data?.toDate).format("DD/MM/YYYY")}</p>
                  </li>
                  <li>
                    <h5>Resources</h5>
                    <p className="small mb-0">{project?.data?.hires} developer</p>
                  </li>
                  <li>
                    <h5>Budget</h5>
                    <p className="small mb-0">{project?.data?.pay} ZAR</p>
                  </li>
                  <li>
                    <h5>Skills</h5>
                    {project?.data?.language?.split(",").map((skill:any) => {
                          return (
                            <>
                              <span className="badge bg-soft-info text-info me-2">  
                              <span className="legend-indicator bg-info" />{ getOptionFromValue( [skill], skills)[0]?.label}
                              </span>
                            </>
                          )
                      })}
                  </li>
                
                </ul>
                {/* End List */}
              </div>
            </div>
          </> }

         
            {/* End Col */}
            <div className={tab==0? "col-md-9": "col-md-12"}>
              {tab==0 && 
              <>
                <h5>About the company</h5>
              <div className="mb-5">
                <p>

                  {project?.org.companyAbout}
                </p>
                {/* <p>Capsule was launched in 2009 following the founders' frustration with existing CRM services that were either overly simplistic or far too complex for most businesses. We believe the value of a modern CRM lies in the ability to help businesses stay organized, know more about their customers, build strong relationships and to make the most of sales opportunities, all while minimizing user input. We built Capsule to deliver on these values and today Capsule is used by thousands of businesses of all sizes all over the world.</p>
                <div className="collapse" id="employerOverviewDescriptionCollapse">
                  <p>We're based in Manchester, United Kingdom, a city with a creative heart that was founded on science and industry and the birthplace of the modern computer.</p>
                </div> */}
                {/* <a className="link link-collapse" data-bs-toggle="collapse" href="#employerOverviewDescriptionCollapse" role="button" aria-expanded="false" aria-controls="employerOverviewDescriptionCollapse">
                  <span className="link-collapse-default">Read more</span>
                  <span className="link-collapse-active">Read less</span>
                </a> */}
              </div>


            <h5>About the project</h5>
              <div className="mb-5">
                <p>

                  {project?.data.description}
                </p>
                {/* <p>Capsule was launched in 2009 following the founders' frustration with existing CRM services that were either overly simplistic or far too complex for most businesses. We believe the value of a modern CRM lies in the ability to help businesses stay organized, know more about their customers, build strong relationships and to make the most of sales opportunities, all while minimizing user input. We built Capsule to deliver on these values and today Capsule is used by thousands of businesses of all sizes all over the world.</p>
                <div className="collapse" id="employerOverviewDescriptionCollapse">
                  <p>We're based in Manchester, United Kingdom, a city with a creative heart that was founded on science and industry and the birthplace of the modern computer.</p>
                </div> */}
                {/* <a className="link link-collapse" data-bs-toggle="collapse" href="#employerOverviewDescriptionCollapse" role="button" aria-expanded="false" aria-controls="employerOverviewDescriptionCollapse">
                  <span className="link-collapse-default">Read more</span>
                  <span className="link-collapse-active">Read less</span>
                </a> */}
              </div>

              <h5>Job Responsibilities</h5>
              <div className="mb-5">
                <p>

                  {project?.data.responsibilities}
                </p>
                {/* <p>Capsule was launched in 2009 following the founders' frustration with existing CRM services that were either overly simplistic or far too complex for most businesses. We believe the value of a modern CRM lies in the ability to help businesses stay organized, know more about their customers, build strong relationships and to make the most of sales opportunities, all while minimizing user input. We built Capsule to deliver on these values and today Capsule is used by thousands of businesses of all sizes all over the world.</p>
                <div className="collapse" id="employerOverviewDescriptionCollapse">
                  <p>We're based in Manchester, United Kingdom, a city with a creative heart that was founded on science and industry and the birthplace of the modern computer.</p>
                </div> */}
                {/* <a className="link link-collapse" data-bs-toggle="collapse" href="#employerOverviewDescriptionCollapse" role="button" aria-expanded="false" aria-controls="employerOverviewDescriptionCollapse">
                  <span className="link-collapse-default">Read more</span>
                  <span className="link-collapse-active">Read less</span>
                </a> */}
              </div>
              </>}
              {tab==1 && 
              <>
                  <div className="card">
                  <div className="card-header">
                    <h4 className="card-header-title">Shortlist 
                    <a style={{float:"right"}} onClick={()=>setDetailModalOpen(true)} className="btn btn-primary" >Search</a>
                    </h4>   
                  </div>
                  {/* Table */}
                  <div className="table-responsive">
                    <table className="table table-borderless table-thead-bordered table-nowrap table-align-middle card-table">
                     
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0">
                                <img className="avatar avatar-sm avatar-circle" src="./assets/img/160x160/img8.jpg" alt="Image Description" />
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <a className="d-inline-block link-dark" href="#">
                                  <h6 className="text-hover-primary mb-0">Amanda Harvey <img className="avatar avatar-xss ms-1" src="./assets/svg/illustrations/top-vendor.svg" alt="Image Description" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Verified user" data-bs-original-title="Verified user" /></h6>
                                </a>
                                <small className="d-block">amanda@example.com</small>
                              </div>
                            </div>
                          </td>
                          <td>
                            {/* Select */}
                            <div className="tom-select-custom">
                              <select className="js-select form-select form-select-sm tomselected ts-hidden-accessible" id="tomselect-1" tabIndex={-1}>
                                <option value="memberStatusLabelActive1" data-option-template="<span class=&quot;d-flex align-items-center&quot;><span class=&quot;legend-indicator bg-success me-2&quot;></span> Active</span>">Action</option>
                                <option value="memberStatusLabelInactive1" data-option-template="<span class=&quot;d-flex align-items-center&quot;><span class=&quot;legend-indicator bg-danger me-2&quot;></span> Inactive</span>">Setup interview</option>
                                <option value="memberStatusLabelInactive1" data-option-template="<span class=&quot;d-flex align-items-center&quot;><span class=&quot;legend-indicator bg-danger me-2&quot;></span> Inactive</span>">Replace</option>
                                </select>
                                {/* <div className="ts-wrapper js-select form-select form-select-sm single plugin-change_listener plugin-hs_smart_position plugin-dropdown_input full has-items"><div className="ts-control" role="combobox" aria-haspopup="listbox" aria-expanded="false" aria-controls="tomselect-1-ts-dropdown" id="tomselect-1-ts-control" tabIndex={0}><span className="d-flex align-items-center item" data-value="memberStatusLabelActive1" data-ts-item><span className="legend-indicator bg-success me-2" /> Active</span><input className="items-placeholder" tabIndex={-1} placeholder /></div><div className="tom-select-custom"><div className="ts-dropdown single plugin-change_listener plugin-hs_smart_position plugin-dropdown_input" style={{display: 'none'}}><div className="dropdown-input-wrap" /><div role="listbox" tabIndex={-1} className="ts-dropdown-content" id="tomselect-1-ts-dropdown" /></div></div></div> */}
                            </div>
                            {/* End Select */}
                          </td>
                        
                          <td>
                            <a className="text-body" href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Locked" data-bs-original-title="Locked">
                              <i className="bi-eye-fill" />
                              {/* <i className="bi-trash-fill" /> */}
                            </a>
                            <a className="text-body ml-3" href="javascript:;" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Locked" data-bs-original-title="Locked">
                              {/* <i className="bi-eye-fill" /> */}
                              <i className="bi-trash-fill" />
                            </a>
                          </td>
                        </tr>
                      
                      </tbody>
                    </table>
                  </div>
                  {/* End Table */}
                  {/* Footer */}
                  <div className="card-footer border-top">
                    <div className="d-flex justify-content-end gap-3">
                      <a className="btn btn-white" href="javascript:;">Cancel</a>
                      <a className="btn btn-primary" href="javascript:;">Save changes</a>
                      <a className="btn btn-success" href="javascript:;">Finalize</a>
                    </div>
                  </div>
                  {/* End Footer */}
                </div>

                
              </>}
           
            
            </div>
            {/* End Col */}
          </div>

          {/* End Row */}
        </div>
   
      {/* </main> */}
     
      <Modal styles={customModalStyles}  open={detailModalOpen} onClose={() => setDetailModalOpen(false)} center>
                
      <div className="gradient-x-three-sm-primary">
        <div className="container content-space-2">
          <form>
            {/* Input Card */}
            <div className="input-card input-card-sm mb-3">
              <div className="input-card-form">
                <label htmlFor="jobTitleForm" className="form-label visually-hidden">Job, title, skills, or company</label>
                <div className="input-group input-group-merge">
                  <span className="input-group-prepend input-group-text">
                    <i className="bi-search" />
                  </span>
                  <input type="text" className="form-control" id="jobTitleForm" placeholder="Job, title, skills, or company" aria-label="Job, title, skills, or company" />
                </div>
              </div>
              <div className="input-card-form">
                <label htmlFor="cityForm" className="form-label visually-hidden">City, state, or zip</label>
                <div className="input-group input-group-merge">
                  <span className="input-group-prepend input-group-text">
                    <i className="bi-geo-alt" />
                  </span>
                  <input type="text" className="form-control" id="cityForm" placeholder="City, state, or zip" aria-label="City, state, or zip" />
                </div>
              </div>
              <button type="button" className="btn btn-primary">Search</button>
            </div>
            {/* End Input Card */}
          </form>
          <div className="row align-items-center">
            <div className="col-md-auto mb-3 mb-lg-0">
              <h6 className="mb-1">Limit search to:</h6>
            </div>
            {/* End Col */}
            <div className="col-md mb-3 mb-lg-0">
              {/* Check */}
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="jobSearchToCheckbox1" defaultValue="option1" defaultChecked />
                <label className="form-check-label" htmlFor="jobSearchToCheckbox1">Job title</label>
              </div>
              {/* End Check */}
              {/* Check */}
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="jobSearchToCheckbox2" defaultValue="option2" />
                <label className="form-check-label" htmlFor="jobSearchToCheckbox2">Skills</label>
              </div>
              {/* End Check */}
              {/* Check */}
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="jobSearchToCheckbox3" defaultValue="option3" />
                <label className="form-check-label" htmlFor="jobSearchToCheckbox3">Companies</label>
              </div>
              {/* End Check */}
              {/* Check */}
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="jobSearchToCheckbox4" defaultValue="option4" />
                <label className="form-check-label" htmlFor="jobSearchToCheckbox4">Field of study</label>
              </div>
              {/* End Check */}
            </div>
            <div className="col-md-auto">
              {/* Switch */}
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="remoteOnlySwitch" />
                <label className="form-check-label" htmlFor="remoteOnlySwitch">Remote only</label>
              </div>
              {/* End Switch */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
      </div>
      <div className="container content-space-t-1 content-space-t-md-2 content-space-b-2 content-space-b-lg-3">
        <div className="row">
          <div className="col-lg-3 order-lg-2">
            {/* Navbar */}
            <div className="navbar-expand-lg mb-5">
              {/* Navbar Toggle */}
              <div className="d-grid">
                <button type="button" className="navbar-toggler btn btn-white mb-3" data-bs-toggle="collapse" data-bs-target="#navbarVerticalNavMenu" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navbarVerticalNavMenu">
                  <span className="d-flex justify-content-between align-items-center">
                    <span className="text-dark">Filter</span>
                    <span className="navbar-toggler-default">
                      <i className="bi-list" />
                    </span>
                    <span className="navbar-toggler-toggled">
                      <i className="bi-x" />
                    </span>
                  </span>
                </button>
              </div>
              {/* End Navbar Toggle */}
              {/* Navbar Collapse */}
              <div id="navbarVerticalNavMenu" className="">
                <div className="w-100">
                  {/* Form */}
                  <form>
                    <div className="mb-5">
                      <h5 className="mb-3">Distance</h5>
                      <p className="form-text">Within <span id="rangeSliderDistance">25</span> miles of <span className="fw-semibold text-dark">London</span></p>
                      {/* Range Slider */}
                      <div className="range-slider">
                        <div className="js-nouislider noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr" data-hs-nouislider-options="{
                               &quot;range&quot;: {
                                 &quot;min&quot;: 0,
                                 &quot;max&quot;: 100
                               },
                               &quot;connect&quot;: [true, false],
                               &quot;start&quot;: 25,
                               &quot;result_min_target_el&quot;: &quot;#rangeSliderDistance&quot;
                             }">
                          <div className="noUi-base"><div className="noUi-connects"><div className="noUi-connect" style={{transform: 'translate(0%, 0px) scale(0.25, 1)'}} /></div><div className="noUi-origin" style={{transform: 'translate(-75%, 0px)', zIndex: 4}}>
                            <div className="noUi-handle noUi-handle-lower" tabIndex={0} role="slider">
                              <div className="noUi-touch-area" /></div></div></div></div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-5">
                        <span className="text-body">5 miles</span>
                        <span className="text-body">100 miles</span>
                      </div>
                      {/* End Range Slider */}
                    </div>
                    <div className="mb-5">
                      <h5 className="mb-3">Last updated</h5>
                      {/* Select */}
                      <select className="form-select form-select-sm">
                        <option value="within last day">within last day</option>
                        <option value="within last week">within last week</option>
                        <option value="within last month">within last month</option>
                        <option value="within last 3 months">within last 3 months</option>
                        <option value="within last 6 months" selected>within last 6 months</option>
                        <option value="show all resumes">show all resumes</option>
                      </select>
                      {/* End Select */}
                    </div>
                    <div className="mb-5">
                      <h5 className="mb-3">Job titles</h5>
                      <div className="d-grid gap-2">
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobTitleCheckbox1" />
                          <label className="form-check-label d-flex" htmlFor="jobTitleCheckbox1">Graphic Designer <span className="ms-auto">2</span></label>
                        </div>
                        {/* End Checkboxes */}
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobTitleCheckbox2" defaultChecked />
                          <label className="form-check-label d-flex" htmlFor="jobTitleCheckbox2">UI/UX Designer <span className="ms-auto">2</span></label>
                        </div>
                        {/* End Checkboxes */}
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobTitleCheckbox3" defaultChecked />
                          <label className="form-check-label d-flex" htmlFor="jobTitleCheckbox3">Full Stack Developer <span className="ms-auto">1</span></label>
                        </div>
                        {/* End Checkboxes */}
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobTitleCheckbox4" />
                          <label className="form-check-label d-flex" htmlFor="jobTitleCheckbox4">Information Associate <span className="ms-auto">1</span></label>
                        </div>
                        {/* End Checkboxes */}
                      </div>
                    </div>
                    <div className="mb-5">
                      <h5 className="mb-3">Company</h5>
                      <div className="d-grid gap-2">
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobCompanyCheckbox1" />
                          <label className="form-check-label d-flex" htmlFor="jobCompanyCheckbox1">Capsule <span className="ms-auto">2</span></label>
                        </div>
                        {/* End Checkboxes */}
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobCompanyCheckbox2" />
                          <label className="form-check-label d-flex" htmlFor="jobCompanyCheckbox2">Dropbox <span className="ms-auto">18</span></label>
                        </div>
                        {/* End Checkboxes */}
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobCompanyCheckbox3" />
                          <label className="form-check-label d-flex" htmlFor="jobCompanyCheckbox3">Mailchimp <span className="ms-auto">1</span></label>
                        </div>
                        {/* End Checkboxes */}
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobCompanyCheckbox4" />
                          <label className="form-check-label d-flex" htmlFor="jobCompanyCheckbox4">Google <span className="ms-auto">1</span></label>
                        </div>
                        {/* End Checkboxes */}
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobCompanyCheckbox5" />
                          <label className="form-check-label d-flex" htmlFor="jobCompanyCheckbox5">Prosperops <span className="ms-auto">2</span></label>
                        </div>
                        {/* End Checkboxes */}
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobCompanyCheckbox6" />
                          <label className="form-check-label d-flex" htmlFor="jobCompanyCheckbox6">Figam <span className="ms-auto">6</span></label>
                        </div>
                        {/* End Checkboxes */}
                      </div>
                    </div>
                    <div className="mb-5">
                      <h5 className="mb-3">Years of experience</h5>
                      <div className="d-grid gap-2">
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobYearExperienceCheckbox1" defaultChecked />
                          <label className="form-check-label d-flex" htmlFor="jobYearExperienceCheckbox1">6-10 years <span className="ms-auto">73</span></label>
                        </div>
                        {/* End Checkboxes */}
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobYearExperienceCheckbox2" />
                          <label className="form-check-label d-flex" htmlFor="jobYearExperienceCheckbox2">3-5 years <span className="ms-auto">3</span></label>
                        </div>
                        {/* End Checkboxes */}
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobYearExperienceCheckbox3" />
                          <label className="form-check-label d-flex" htmlFor="jobYearExperienceCheckbox3">More than 10 years <span className="ms-auto">1</span></label>
                        </div>
                        {/* End Checkboxes */}
                      </div>
                    </div>
                    <div className="mb-5">
                      <h5 className="mb-3">Education</h5>
                      <div className="d-grid gap-2">
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobEducationCheckbox1" />
                          <label className="form-check-label d-flex" htmlFor="jobEducationCheckbox1">Bachelors <span className="ms-auto">6</span></label>
                        </div>
                        {/* End Checkboxes */}
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobEducationCheckbox2" />
                          <label className="form-check-label d-flex" htmlFor="jobEducationCheckbox2">Masters <span className="ms-auto">1</span></label>
                        </div>
                        {/* End Checkboxes */}
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobEducationCheckbox3" />
                          <label className="form-check-label d-flex" htmlFor="jobEducationCheckbox3">Associates <span className="ms-auto">1</span></label>
                        </div>
                        {/* End Checkboxes */}
                      </div>
                    </div>
                    <div className="mb-5">
                      <h5 className="mb-3">Assessment <i className="bi-question-circle text-body ml-1" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Assessments shown her6 are summarized for convenience only. View the candidate’s profile for more information, including score ranges for each assessment. Indeed makes no statement as to the skill level of any candidate." data-bs-original-title="Assessments shown her6 are summarized for convenience only. View the candidate’s profile for more information, including score ranges for each assessment. Indeed makes no statement as to the skill level of any candidate." /></h5>
                      <div className="d-grid gap-2">
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobAssessmentCheckbox1" />
                          <label className="form-check-label d-flex" htmlFor="jobAssessmentCheckbox1">Attention to detail <span className="ms-auto">3</span></label>
                        </div>
                        {/* End Checkboxes */}
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobAssessmentCheckbox2" />
                          <label className="form-check-label d-flex" htmlFor="jobAssessmentCheckbox2">Graphic design <span className="ms-auto">7</span></label>
                        </div>
                        {/* End Checkboxes */}
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobAssessmentCheckbox3" />
                          <label className="form-check-label d-flex" htmlFor="jobAssessmentCheckbox3">Social Media <span className="ms-auto">1</span></label>
                        </div>
                        {/* End Checkboxes */}
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobAssessmentCheckbox4" />
                          <label className="form-check-label d-flex" htmlFor="jobAssessmentCheckbox4">Marketing <span className="ms-auto">1</span></label>
                        </div>
                        {/* End Checkboxes */}
                      </div>
                    </div>
                    <div className="d-grid">
                      <button type="button" className="btn btn-white btn-transition">Clear all</button>
                    </div>
                  </form>
                  {/* End Form */}
                </div>
              </div>
              {/* End Navbar Collapse */}
            </div>
            {/* End Navbar */}
          </div>
          {/* End Col */}
          <div className="col-lg-9">
            <div className="row align-items-center mb-5">
              <div className="col-sm mb-3 mb-sm-0">
                <h3 className="mb-0">90 jobs for <span className="fw-normal">UK</span></h3>
              </div>
              <div className="col-sm-auto">
                <div className="d-sm-flex justify-content-sm-end align-items-center">
                  {/* Select */}
                  <div className="mb-2 mb-sm-0 me-sm-2">
                    <select className="form-select form-select-sm">
                      <option value="Relevance" selected>Relevance</option>
                      <option value="mostRecent">Most recent</option>
                    </select>
                  </div>
                  {/* End Select */}
                  {/* Select */}
                  <div className="mb-2 mb-sm-0 me-sm-2">
                    <select className="form-select form-select-sm">
                      <option value="alphabeticalOrderSelect1" selected>A-to-Z</option>
                      <option value="alphabeticalOrderSelect2">Z-to-A</option>
                    </select>
                  </div>
                  {/* End Select */}
                  {/* Nav */}
                  <ul className="nav nav-segment">
                    <li className="nav-item">
                      <a className="nav-link" href="../demo-jobs/job-grid.html">
                        <i className="bi-grid-fill" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="../demo-jobs/job-list.html">
                        <i className="bi-list" />
                      </a>
                    </li>
                  </ul>
                  {/* End Nav */}
                </div>
              </div>
            </div>
            {/* End Row */}
            {/* Card List */}
            <div className="d-grid gap-5 mb-10">
              {/* Card */}
              <div className="card card-bordered">
                <div className="card-body">
                  {/* Media */}
                  <div className="d-sm-flex">
                    {/* Media */}
                    <div className="d-flex align-items-center align-items-sm-start mb-3">
                      <div className="flex-shrink-0">
                        <img className="avatar avatar-sm avatar-4x3" src="../assets/svg/brands/mailchimp-icon.svg" alt="Image Description" />
                      </div>
                      <div className="d-sm-none flex-grow-1 ms-3">
                        <h6 className="card-title">
                          <a className="text-dark" href="../demo-jobs/employer.html">Mailchimp</a>
                          <img className="avatar avatar-xss ms-1" src="../assets/svg/illustrations/top-vendor.svg" alt="Review rating" data-toggle="tooltip" data-placement="top" title="Claimed profile" />
                        </h6>
                      </div>
                    </div>
                    {/* End Media */}
                    <div className="flex-grow-1 ms-sm-3">
                      <div className="row">
                        <div className="col col-md-8">
                          <h3 className="card-title">
                            <a className="text-dark" href="../demo-jobs/employer.html">Senior B2B sales consultant</a>
                          </h3>
                          <div className="d-none d-sm-inline-block">
                            <h6 className="card-title">
                              <a className="text-dark" href="../demo-jobs/employer.html">Mailchimp</a>
                              <img className="avatar avatar-xss ms-1" src="../assets/svg/illustrations/top-vendor.svg" alt="Review rating" data-toggle="tooltip" data-placement="top" title="Claimed profile" />
                            </h6>
                          </div>
                        </div>
                        {/* End Col */}
                        <div className="col-auto order-md-3">
                          {/* Checkbbox Bookmark */}
                          <div className="form-check form-check-bookmark">
                            <input className="form-check-input" type="checkbox"  id="jobsCardBookmarkCheck1" />
                            <label className="form-check-label" htmlFor="jobsCardBookmarkCheck1">
                              <span className="form-check-bookmark-default" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Save this job" data-bs-original-title="Save this job">
                                <i className="bi-star" />
                              </span>
                              <span className="form-check-bookmark-active" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Saved" data-bs-original-title="Saved">
                                <i className="bi-star-fill" />
                              </span>
                            </label>
                          </div>
                          {/* End Checkbbox Bookmark */}
                        </div>
                        {/* End Col */}
                        <div className="col-12 col-md mt-3 mt-md-0">
                          <span className="d-block small text-body mb-1">$125k-$135k yearly</span>
                          <span className="badge bg-soft-info text-info me-2">
                            <span className="legend-indicator bg-info" />Remote
                          </span>
                        </div>
                        {/* End Col */}
                      </div>
                      {/* End Row */}
                    </div>
                  </div>
                  {/* End Media */}
                </div>
                <div className="card-footer pt-0">
                  <ul className="list-inline list-separator small text-body">
                    <li className="list-inline-item">Posted 7 hours ago</li>
                    <li className="list-inline-item">Oxford</li>
                    <li className="list-inline-item">Full time</li>
                  </ul>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="card card-bordered">
                <div className="card-body">
                  {/* Media */}
                  <div className="d-sm-flex">
                    {/* Media */}
                    <div className="d-flex align-items-center align-items-sm-start mb-3">
                      <div className="flex-shrink-0">
                        <img className="avatar avatar-sm avatar-4x3" src="../assets/svg/brands/capsule-icon.svg" alt="Image Description" />
                      </div>
                      <div className="d-sm-none flex-grow-1 ms-3">
                        <h6 className="card-title">
                          <a className="text-dark" href="../demo-jobs/employer.html">Capsule</a>
                        </h6>
                      </div>
                    </div>
                    {/* End Media */}
                    <div className="flex-grow-1 ms-sm-3">
                      <div className="row">
                        <div className="col col-md-8">
                          <h3 className="card-title">
                            <a className="text-dark" href="../demo-jobs/employer.html">Office assistant/Social media assistant</a>
                          </h3>
                          <div className="d-none d-sm-inline-block">
                            <h6 className="card-title">
                              <a className="text-dark" href="../demo-jobs/employer.html">Capsule</a>
                            </h6>
                          </div>
                        </div>
                        {/* End Col */}
                        <div className="col-auto order-md-3">
                          {/* Checkbbox Bookmark */}
                          <div className="form-check form-check-bookmark">
                            <input className="form-check-input" type="checkbox"  id="jobsCardBookmarkCheck2" />
                            <label className="form-check-label" htmlFor="jobsCardBookmarkCheck2">
                              <span className="form-check-bookmark-default" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Save this job" data-bs-original-title="Save this job">
                                <i className="bi-star" />
                              </span>
                              <span className="form-check-bookmark-active" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Saved" data-bs-original-title="Saved">
                                <i className="bi-star-fill" />
                              </span>
                            </label>
                          </div>
                          {/* End Checkbbox Bookmark */}
                        </div>
                        {/* End Col */}
                        <div className="col-12 col-md mt-3 mt-md-0">
                          <span className="d-block small text-body mb-1">$50-$135 hourly</span>
                        </div>
                        {/* End Col */}
                      </div>
                      {/* End Row */}
                    </div>
                  </div>
                  {/* End Media */}
                </div>
                <div className="card-footer pt-0">
                  <ul className="list-inline list-separator small text-body">
                    <li className="list-inline-item">Posted 21 hours ago</li>
                    <li className="list-inline-item">Newcastle</li>
                    <li className="list-inline-item">Part time</li>
                  </ul>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="card card-bordered">
                <div className="card-body">
                  {/* Media */}
                  <div className="d-sm-flex">
                    {/* Media */}
                    <div className="d-flex align-items-center align-items-sm-start mb-3">
                      <div className="flex-shrink-0">
                        <img className="avatar avatar-sm avatar-4x3" src="../assets/svg/brands/dropbox-icon.svg" alt="Image Description" />
                      </div>
                      <div className="d-sm-none flex-grow-1 ms-3">
                        <h6 className="card-title">
                          <a className="text-dark" href="../demo-jobs/employer.html">Dropbox</a>
                        </h6>
                      </div>
                    </div>
                    {/* End Media */}
                    <div className="flex-grow-1 ms-sm-3">
                      <div className="row">
                        <div className="col col-md-8">
                          <h3 className="card-title">
                            <a className="text-dark" href="../demo-jobs/employer.html">Marketing and Communications Manager</a>
                          </h3>
                          <div className="d-none d-sm-inline-block">
                            <h6 className="card-title">
                              <a className="text-dark" href="../demo-jobs/employer.html">Dropbox</a>
                              <img className="avatar avatar-xss ms-1" src="../assets/svg/illustrations/top-vendor.svg" alt="Review rating" data-toggle="tooltip" data-placement="top" title="Claimed profile" />
                            </h6>
                          </div>
                        </div>
                        {/* End Col */}
                        <div className="col-auto order-md-3">
                          {/* Checkbbox Bookmark */}
                          <div className="form-check form-check-bookmark">
                            <input className="form-check-input" type="checkbox"  id="jobsCardBookmarkCheck3" />
                            <label className="form-check-label" htmlFor="jobsCardBookmarkCheck3">
                              <span className="form-check-bookmark-default" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Save this job" data-bs-original-title="Save this job">
                                <i className="bi-star" />
                              </span>
                              <span className="form-check-bookmark-active" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Saved" data-bs-original-title="Saved">
                                <i className="bi-star-fill" />
                              </span>
                            </label>
                          </div>
                          {/* End Checkbbox Bookmark */}
                        </div>
                        {/* End Col */}
                        <div className="col-12 col-md mt-3 mt-md-0">
                          <span className="d-block small text-body mb-1">$5k monthly</span>
                        </div>
                        {/* End Col */}
                      </div>
                      {/* End Row */}
                    </div>
                  </div>
                  {/* End Media */}
                </div>
                <div className="card-footer pt-0">
                  <ul className="list-inline list-separator small text-body">
                    <li className="list-inline-item">Posted 1 day ago</li>
                    <li className="list-inline-item">London</li>
                    <li className="list-inline-item">Full time</li>
                  </ul>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="card card-bordered">
                <div className="card-body">
                  {/* Media */}
                  <div className="d-sm-flex">
                    {/* Media */}
                    <div className="d-flex align-items-center align-items-sm-start mb-3">
                      <div className="flex-shrink-0">
                        <img className="avatar avatar-sm avatar-4x3" src="../assets/svg/brands/prosperops-icon.svg" alt="Image Description" />
                      </div>
                      <div className="d-sm-none flex-grow-1 ms-3">
                        <h6 className="card-title">
                          <a className="text-dark" href="../demo-jobs/employer.html">Prosperops</a>
                        </h6>
                      </div>
                    </div>
                    {/* End Media */}
                    <div className="flex-grow-1 ms-sm-3">
                      <div className="row">
                        <div className="col col-md-8">
                          <h3 className="card-title">
                            <a className="text-dark" href="../demo-jobs/employer.html">Senior backend developer</a>
                          </h3>
                          <div className="d-none d-sm-inline-block">
                            <h6 className="card-title">
                              <a className="text-dark" href="../demo-jobs/employer.html">Prosperops</a>
                            </h6>
                          </div>
                        </div>
                        {/* End Col */}
                        <div className="col-auto order-md-3">
                          {/* Checkbbox Bookmark */}
                          <div className="form-check form-check-bookmark">
                            <input className="form-check-input" type="checkbox"  id="jobsCardBookmarkCheck4" />
                            <label className="form-check-label" htmlFor="jobsCardBookmarkCheck4">
                              <span className="form-check-bookmark-default" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Save this job" data-bs-original-title="Save this job">
                                <i className="bi-star" />
                              </span>
                              <span className="form-check-bookmark-active" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Saved" data-bs-original-title="Saved">
                                <i className="bi-star-fill" />
                              </span>
                            </label>
                          </div>
                          {/* End Checkbbox Bookmark */}
                        </div>
                        {/* End Col */}
                        <div className="col-12 col-md mt-3 mt-md-0">
                          <span className="d-block small text-body mb-1">$75k-$85k yearly</span>
                          <span className="badge bg-soft-info text-info me-2">
                            <span className="legend-indicator bg-info" />Remote
                          </span>
                        </div>
                        {/* End Col */}
                      </div>
                      {/* End Row */}
                    </div>
                  </div>
                  {/* End Media */}
                </div>
                <div className="card-footer pt-0">
                  <ul className="list-inline list-separator small text-body">
                    <li className="list-inline-item">Posted 7 hours ago</li>
                    <li className="list-inline-item">Oxford</li>
                    <li className="list-inline-item">Full time</li>
                  </ul>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="card card-bordered">
                <div className="card-body">
                  {/* Media */}
                  <div className="d-sm-flex">
                    {/* Media */}
                    <div className="d-flex align-items-center align-items-sm-start mb-3">
                      <div className="flex-shrink-0">
                        <img className="avatar avatar-sm avatar-4x3" src="../assets/svg/brands/airbnb-icon.svg" alt="Image Description" />
                      </div>
                      <div className="d-sm-none flex-grow-1 ms-3">
                        <h6 className="card-title">
                          <a className="text-dark" href="../demo-jobs/employer.html">Airbnb</a>
                          <img className="avatar avatar-xss ms-1" src="../assets/svg/illustrations/top-vendor.svg" alt="Review rating" data-toggle="tooltip" data-placement="top" title="Claimed profile" />
                        </h6>
                      </div>
                    </div>
                    {/* End Media */}
                    <div className="flex-grow-1 ms-sm-3">
                      <div className="row">
                        <div className="col col-md-8">
                          <h3 className="card-title">
                            <a className="text-dark" href="../demo-jobs/employer.html">Senior product manager</a>
                          </h3>
                          <div className="d-none d-sm-inline-block">
                            <h6 className="card-title">
                              <a className="text-dark" href="../demo-jobs/employer.html">Airbnb</a>
                              <img className="avatar avatar-xss ms-1" src="../assets/svg/illustrations/top-vendor.svg" alt="Review rating" data-toggle="tooltip" data-placement="top" title="Claimed profile" />
                            </h6>
                          </div>
                        </div>
                        {/* End Col */}
                        <div className="col-auto order-md-3">
                          {/* Checkbbox Bookmark */}
                          <div className="form-check form-check-bookmark">
                            <input className="form-check-input" type="checkbox"  id="jobsCardBookmarkCheck5" />
                            <label className="form-check-label" htmlFor="jobsCardBookmarkCheck5">
                              <span className="form-check-bookmark-default" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Save this job" data-bs-original-title="Save this job">
                                <i className="bi-star" />
                              </span>
                              <span className="form-check-bookmark-active" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Saved" data-bs-original-title="Saved">
                                <i className="bi-star-fill" />
                              </span>
                            </label>
                          </div>
                          {/* End Checkbbox Bookmark */}
                        </div>
                        {/* End Col */}
                        <div className="col-12 col-md mt-3 mt-md-0">
                          <span className="d-block small text-body mb-1">$76k-$98k yearly</span>
                        </div>
                        {/* End Col */}
                      </div>
                      {/* End Row */}
                    </div>
                  </div>
                  {/* End Media */}
                </div>
                <div className="card-footer pt-0">
                  <ul className="list-inline list-separator small text-body">
                    <li className="list-inline-item">Posted 2 days ago</li>
                    <li className="list-inline-item">London</li>
                    <li className="list-inline-item">Full time</li>
                  </ul>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="card card-bordered">
                <div className="card-body">
                  {/* Media */}
                  <div className="d-sm-flex">
                    {/* Media */}
                    <div className="d-flex align-items-center align-items-sm-start mb-3">
                      <div className="flex-shrink-0">
                        <img className="avatar avatar-sm avatar-4x3" src="../assets/svg/brands/figma-icon.svg" alt="Image Description" />
                      </div>
                      <div className="d-sm-none flex-grow-1 ms-3">
                        <h6 className="card-title">
                          <a className="text-dark" href="../demo-jobs/employer.html">Figma</a>
                        </h6>
                      </div>
                    </div>
                    {/* End Media */}
                    <div className="flex-grow-1 ms-sm-3">
                      <div className="row">
                        <div className="col col-md-8">
                          <h3 className="card-title">
                            <a className="text-dark" href="../demo-jobs/employer.html">Administrative Business Partner</a>
                          </h3>
                          <div className="d-none d-sm-inline-block">
                            <h6 className="card-title">
                              <a className="text-dark" href="../demo-jobs/employer.html">Figma</a>
                            </h6>
                          </div>
                        </div>
                        {/* End Col */}
                        <div className="col-auto order-md-3">
                          {/* Checkbbox Bookmark */}
                          <div className="form-check form-check-bookmark">
                            <input className="form-check-input" type="checkbox"  id="jobsCardBookmarkCheck6" />
                            <label className="form-check-label" htmlFor="jobsCardBookmarkCheck6">
                              <span className="form-check-bookmark-default" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Save this job" data-bs-original-title="Save this job">
                                <i className="bi-star" />
                              </span>
                              <span className="form-check-bookmark-active" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Saved" data-bs-original-title="Saved">
                                <i className="bi-star-fill" />
                              </span>
                            </label>
                          </div>
                          {/* End Checkbbox Bookmark */}
                        </div>
                        {/* End Col */}
                        <div className="col-12 col-md mt-3 mt-md-0">
                          <span className="d-block small text-body mb-1">$50k-$100k yearly</span>
                        </div>
                        {/* End Col */}
                      </div>
                      {/* End Row */}
                    </div>
                  </div>
                  {/* End Media */}
                </div>
                <div className="card-footer pt-0">
                  <ul className="list-inline list-separator small text-body">
                    <li className="list-inline-item">Posted 2 days ago</li>
                    <li className="list-inline-item">Liverpool</li>
                    <li className="list-inline-item">Part time</li>
                  </ul>
                </div>
              </div>
              {/* End Card */}
            </div>
            {/* End Card List */}
            {/* Pagination */}
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">
                      <i className="bi-chevron-double-left small" />
                    </span>
                  </a>
                </li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item disabled"><a className="page-link" href="#">...</a></li>
                <li className="page-item"><a className="page-link" href="#">5</a></li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">
                      <i className="bi-chevron-double-right small" />
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
            {/* End Pagination */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>

                              
      </Modal>
    
</>
    )
}



export default dynamic (() => Promise.resolve(developerOverview), {ssr: false})