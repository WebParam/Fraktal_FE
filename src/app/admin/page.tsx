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
import LineChart from './Chart/chart';
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
        
          </div>
        </div>
        {/* End Page Header */}
        {/* Content */}
        <div className="container content-space-1 content-space-b-lg-3">
        <div className="overhead">Overview</div>
          <div className="w-lg-75 mx-lg-auto">
            {/* Card */}
            <div className='displayCards'>
            <div className="card1">
              <div className="card-body">Total Users</div>
            </div>
  
                <div className="card2">
              <div className="card-body">Developers</div>
            
            </div>
            <div className="card2">
              <div className="card-body">Companies</div>
            
            </div>
            </div>
            {/* End Card */}
            <div className="card3">
              <div className="card-body">Users</div>
              <LineChart/>
            </div>
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