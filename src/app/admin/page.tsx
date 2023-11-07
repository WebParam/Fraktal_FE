'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IJobApplication } from '../interfaces/IJobApplication';
import { CreateJob } from '../endpoints/api';
import { preventDefault } from '@/assets/vendor/tom-select/dist/types/utils';
import SideNav from './Nav/sidenav';
import AdminBanner from './Banner/banner';
import FrakLogo from '../images/FraktionalLogo.png'
import './admin.scss'
// import 'bootstrap/dist/css/bootstrap.min.css';




function admin() {
 

    const [applicants, setApplicants] = useState<any[]>([]);
    const [toggleApplicantDropdown, setToggleApplicantDropdown] = useState<boolean>(false);
    const [allApplicants, setAllApplicants] = useState<any[]>();
    const [availableApplicants, setAvailableApplicants] = useState<any[]>();


    function showHideApplicantDropdown(){
      setToggleApplicantDropdown(!toggleApplicantDropdown);
    }

    function addApplicant(applicant:any){
      setApplicants([...applicants, applicant]);
      filterAvailableApplicants([...applicants, applicant]);
    }
 
    function removeApplicant(index:any){

      const filteredApplicants = applicants.filter((x,i)=>{
        return index!=i;
      })
      debugger;
      setApplicants(filteredApplicants);

    }

    function GetAllApplicants(){
      const fakeData = [  
        {
          id:"0",
          name:"Atlegang Kola",
          position:"Software Developer",
          skills:"React JS"
        },
        {
          id:"1",
          name:"Prince Kwanele",
          position:"Angular Developer",
          skills:"Anuglar JS"
        },
        {
          id:"2",
          name:"Lihle Surname",
          position:"SQL Developer",
          skills:"SQL, C#"
        }
        
      
      ]
      //get from api
      setAllApplicants(fakeData);
      filterAvailableApplicants([]);

    }

    function filterAvailableApplicants(_applicants:any[]){
      const fakeData = [  
        {
          id:"0",
          name:"Atlegang Kola",
          position:"Software Developer",
          skills:"React JS"
        },
        {
          id:"1",
          name:"Prince Kwanele",
          position:"Angular Developer",
          skills:"Anuglar JS"
        },
        {
          id:"2",
          name:"Lihle Surname",
          position:"SQL Developer",
          skills:"SQL, C#"
        }
        
      
      ]
      const allUsedApplicants = _applicants?.map(x=>x.id)??[];

      const availApplicants = fakeData?.filter(x=> !allUsedApplicants?.includes(x.id));
      debugger;
      setAvailableApplicants(availApplicants);
    }
 
    useEffect(() => {
      
  
      //check url and setActive
     GetAllApplicants()
      
      }, []);




  

    return (


<>
  {/* ========== MAIN CONTENT ========== */}
  
  <main id="content" role="main">
        {/* Page Header */}
        <div className='frakLogoDiv'>
                <Image
                    src={FrakLogo}
                    alt="logo"
                    className="fraklogo"
                />
            </div>
        <div className='navigation'>
        <SideNav/>
        </div>
        <div className='banner-container'>
        <div className='ban'>
        <AdminBanner/>
        </div>
        </div>
        <div className="container content-space-t-2">
          <div className="w-lg-75 mx-lg-auto">
            <div className="page-header">
              {/* Media */}
              <div className="d-sm-flex mb-3">
                <div className="flex-shrink-0 mb-2 mb-sm-0">
            
                </div>
                <div className="flex-grow-1 ms-sm-4">
                  <div className="row">
                    <div className="col">
                      {/* <h1 className="page-header-title h2">UX/UI Designer</h1> */}
                    </div>
                    {/* End Col */}
                    <div className="col-auto">
                      <div className='statCards'>

                      </div>
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                  <ul className="list-inline list-separator d-flex align-items-center mb-2">
                    <li className="list-inline-item">
                      {/* <a className="link" href="../demo-jobs/employer.html">Capsule</a> */}
                    </li>
                    <li className="list-inline-item">
                      {/* Rating */}
                      {/* <a className="d-flex gap-1" href="../demo-jobs/employer.html">
                        <img src="../assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                        <img src="../assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                        <img src="../assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                        <img src="../assets/svg/illustrations/star.svg" alt="Review rating" width={14} />
                        <img src="../assets/svg/illustrations/star-half.svg" alt="Review rating" width={14} />
                        <span className="ms-1">2,391 reviews</span>
                      </a> */}
                      {/* End Rating */}
                    </li>
                  </ul>
                  {/* <ul className="list-inline list-separator small text-body mb-2">
                    <li className="list-inline-item">Posted 7 hours ago</li>
                    <li className="list-inline-item">Oxford, England, United Kingdom</li>
                    <li className="list-inline-item">Full time</li>
                  </ul> */}
                </div>
              </div>
              {/* End Media */}
            </div>
          </div>
        </div>
        {/* End Page Header */}
        {/* Content */}
        <div className="container content-space-1 content-space-b-lg-3">
          <div className="w-lg-75 mx-lg-auto">
            {/* Card */}
            <div className="card card-bordered mb-10">
              <div className="card-body">
                <div className="row align-items-sm-center">
                  <div className="col-sm mb-2 mb-sm-0">
                    <h5 className="card-title text-uppercase">
                      {/* <i className="bi-lightning-charge-fill me-1" /> Autofill application */}
                    </h5>
                    {/* <p className="card-text small">Save time by importing your resume.</p> */}
                  </div>
                  {/* End Col */}
                  <div className="col-sm-auto">
                    {/* Dropdown */}
                    <div className="dropdown ">
                      {/* <a className={toggleApplicantDropdown==true ?"btn btn-primary show" : "btn btn-primary"} onClick={()=>{showHideApplicantDropdown()}}id="jobImportResumeDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-dropdown-animation>
                        Import resume from <i className="bi-chevron-down small ms-1" />
                      </a> */}
                      <div className= {toggleApplicantDropdown==true ?"dropdown-menu show" :"dropdown-menu"}aria-labelledby="jobImportResumeDropdown" 
                          style={{
                            opacity:toggleApplicantDropdown==true ? 1:0, 
                            position:toggleApplicantDropdown==true? "absolute":"relative",
                            inset: "0px auto auto 0px",
                            margin: "0px",
                            transform: "translate3d(0px, 47.5px, 0px)",
                            // translateY(10px) translateY(-10px),
                            transition: "transform 300ms ease 0s",
                            // opacity "300ms ease 0s"
                            }}>
                              {availableApplicants?.map(x=><>
                                 <a onClick={()=>addApplicant(x)} className="dropdown-item" href="#">
                                   {x.name} || {x.position} || {x.skills}
                                  </a>
                              </>)}
                        {/* <a className="dropdown-item" href="#">
                          <img className="avatar avatar-xss avatar-4x3 me-2" src="../assets/vendor/bootstrap-icons/icons/laptop.svg" alt="Image Description" /> My Computer
                        </a>
                        <a className="dropdown-item" href="#">
                          <img className="avatar avatar-xss avatar-4x3 me-2" src="../assets/svg/brands/dropbox-icon.svg" alt="Image Description" /> Dropbox
                        </a>
                        <a className="dropdown-item" href="#">
                          <img className="avatar avatar-xss avatar-4x3 me-2" src="../assets/svg/brands/google-drive-icon.svg" alt="Image Description" /> Google Drive
                        </a> */}
                      </div>
                    </div>
                    {/* End Dropdown */}
                  </div>
                  {/* End Col */}
                </div>
                {/* End Row */}
              </div>
            </div>
            {/* End Card */}
          
          </div>
        </div>
        {/* Content */}
         {/* Card Grid */}
      <div className="container content-space-t-2">
        <div className="mb-4">
          {/* <h3>Browse jobs by category</h3> */}
        </div>
        <div className="row row-cols-1 row-cols-sm-2 1 row-cols-md-3 row-cols-lg-4 mb-5">
       {
        applicants.map((x,i)=>
          
          <>
           <div className="col mb-3 mb-sm-4">
            {/* Card */}
            <a className="card card-sm card-bordered card-transition h-100" onClick={(e)=>{e.preventDefault()}}>
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col">
                    <h5 className="card-title text-inherit">{x.name}</h5>
                    <p>{x.position} ||{x.skills}</p>
                    <p className="card-text text-body small" onClick={()=>removeApplicant(i)}>Remove applicant</p>
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
          </>
        )
       }
         
        </div>
        {/* End Row */}
        {/* <a className="btn btn-outline-primary" href="../demo-jobs/job-list.html">View all available jobs <i className="bi-chevron-right small ms-1" /></a> */}
      </div>
      {/* End Card Grid */}
      </main>
      {/* ========== END MAIN CONTENT ========== */}
</>
   
    );
}

export default admin;