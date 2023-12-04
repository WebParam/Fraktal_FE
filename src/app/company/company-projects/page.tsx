'use client'
import Image from "next/image";
import topVendor from "../../assets/svg/illustrations/top-vendor.svg";
import './DevOverview.scss';
import Link from "next/link";
import { useEffect, useState } from "react";
import 'react-responsive-modal/styles.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GetProjectsByOrgId } from "../../endpoints/api";
import Cookies from 'universal-cookie'; // Import the libraryconst cookies = new Cookies(); 
import dynamic from "next/dynamic";
const cookies = new Cookies(); // Create an instance of Cookies
import Banner from "../../banner/Banner";
import { IJobApplication } from "../../interfaces/IJobApplication";
import companyMenu from "../company-menu";
import InitialsAvatar from 'react-initials-avatar';
import 'react-initials-avatar/lib/ReactInitialsAvatar.css';


function developerOverview() {
 

const [position, setPosition] = useState("");


  const loggedInUser = cookies.get("fraktional-user")??"{}";
  const [projects, setProjects] = useState<IJobApplication[]>([]);


async function _GetProjects(id:string){

  await GetProjectsByOrgId(id).then((res:any) => {
debugger;
      setProjects(res.data);
  })
}




useEffect(() => {
  //check url and setActive
  
  loggedInUser._id&& _GetProjects("655a3ed54b837045859ab384");

  }, []);


function editProject(project:any){
debugger;
window?.location?.assign(`/company/post-job/${project?.id}`)

}


    return (
      <>
    

  
      {/* End Col */}
     
      {/* <div className="col-lg-9"> */}
        {/* Card */}
        <div className="card">
          {/* He  er */}
          <div className="card-header border-bottom">
            <div className="row">
              <div className="col-md-6 mb-3 mb-md-0">
            <form className="input-group input-group-merge">
              <div className="input-group-prepend input-group-text">
                <i className="bi-search" />
              </div>
              <input type="search" className="form-control" placeholder="Search projects" aria-label="Search projects" />
            </form>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-md-end align-items-md-center">
              <a href="/company/post-job"className="js-file-attach-reset-img btn btn-white btn-sm">Create new project</a>
              </div>
           </div>
            </div>
          </div>
          {/* End Header */}
          {/* Body */}
          <div className="card-body">
            {/* Nav Scroller */}
            <div className="js-nav-scroller hs-nav-scroller-horizontal">
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
              <ul className="nav nav-segment nav-fill mb-7" id="featuresTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a className="nav-link active" href="#accountOrdersOne" id="accountOrdersOne-tab" data-bs-toggle="tab" data-bs-target="#accountOrdersOne" role="tab" aria-controls="accountOrdersOne" aria-selected="true">Active</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" href="#accountOrdersTwo" id="accountOrdersTwo-tab" data-bs-toggle="tab" data-bs-target="#accountOrdersTwo" role="tab" aria-controls="accountOrdersTwo" aria-selected="false" tabIndex={-1}>Historic</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" href="#accountOrdersThree" id="accountOrdersThree-tab" data-bs-toggle="tab" data-bs-target="#accountOrdersThree" role="tab" aria-controls="accountOrdersThree" aria-selected="false" tabIndex={-1}>Canceled </a>
                </li>
              </ul>
              {/* End Nav */}
            </div>
            {/* End Nav Scroller */}
            {/* Tab Content */}
            <div className="tab-content" id="accountOrdersTabContent">
              <div className="tab-pane fade show active" id="accountOrdersOne" role="tabpanel" aria-labelledby="accountOrdersOne-tab">
                {/* Select Group */}
               
                <div className="row row-cols-1 row-cols-sm-2 mb-5">

                    {
                      projects?.map((project:any) => {
                        
                        return (
                          <>
                          <div className="col mb-5">
                             {/* Card */}
                            <div className="card card-bordered h-100">
                              {/* Card Body */}
                              <div className="card-body">
                                <div className="row mb-3">
                                  <div className="col">
                                    {/* Media */}
                                    <div className="d-flex align-items-center">
                                      <div className="flex-shrink-0">
                                        {/* <img className="avatar avatar-sm avatar-4x3" src="../assets/svg/brands/capsule-icon.svg" alt="Image Description" /> */}
                                        <InitialsAvatar name={project?.data.projectName? project?.data.projectName:""} />
                                      </div>
                                      <div className="flex-grow-1 ms-3">
                                        <h6 className="card-title">
                                          <a className="text-dark" href="../demo-jobs/employer.html">{project?.data.projectName}</a>
                                        </h6>
                                      </div>
                                    </div>
                                    {/* End Media */}
                                  </div>
                                  {/* End Col */}
                                  <div className="col-auto">
                                    {/* Checkbbox Bookmark */}
                                    <div className="form-check form-check-bookmark">
                                      <input className="form-check-input" type="checkbox" id="jobsCardBookmarkCheck2" />
                                      <label className="form-check-label" htmlFor="jobsCardBookmarkCheck2">
                                        <span onClick={()=>editProject(project.data)} className="form-check-bookmark-default" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit job" data-bs-original-title="Edit this job">
                                          <i className="bi-pencil-square" />
                                        </span>
                                        {/* <span className="form-check-bookmark-active" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Saved" data-bs-original-title="Saved">
                                          <i className="bi-star-fill" />
                                        </span> */}
                                      </label>
                                    </div>
                                    {/* End Checkbbox Bookmark */}
                                  </div>
                                  {/* End Col */}
                                </div>
                                {/* End Row */}
                                <h3 className="card-title">
                                  <a className="text-dark" href="../demo-jobs/employer.html">{project?.data.projectName}</a>
                                </h3>
                                <span className="d-block small text-body mb-1">{project.data.pay} hourly</span>
                              </div>
                              {/* End Card Body */}
                              {/* Card Footer */}
                              <div className="card-footer pt-0">
                                <ul className="list-inline list-separator small text-body">
                                  <li className="list-inline-item">Posted 21 hours ago</li>
                                  <li className="list-inline-item">{project?.data.remote==0? "In-Office": project?.data.remote==1?"Remote":"Hybrid"}</li>
                                  <li className="list-inline-item">{project?.data.city}</li>
                                </ul>
                              </div>
                              {/* End Card Footer */}
                            </div>
                            {/* End Card */}
                          </div>
                          </>
                        )
                      })

                    }
           
    
                   </div>
              </div>
            </div>
            {/* End Tab Content */}
          </div>
          {/* End Body */}
        </div>
        {/* End Card */}
      {/* </div> */}
      {/* End Col */}
    
</>
    )
}



export default dynamic (() => Promise.resolve(developerOverview), {ssr: false})