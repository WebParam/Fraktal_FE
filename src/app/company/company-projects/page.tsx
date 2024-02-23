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
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import AvatarGroup from 'react-avatar-group';
const moment = require("moment");

function developerOverview() {
    const [selectedOption, setSelectedOption] = useState('ascending');
    const [viewStyle, setViewStyle] = useState('flex');

    const [position, setPosition] = useState("");

    const [projectLoading, setProjectLoading] = useState(true);
      const loggedInUser = cookies.get("fraktional-user")??"{}";
      const [projects, setProjects] = useState<IJobApplication[]>([]);


    async function _GetProjects(id:string){

      await GetProjectsByOrgId(id).then((res:any) => {
        setProjectLoading(false);
          setProjects(res.data);
      })
    }

    const handleSelectChange = (event:any) => {
      setSelectedOption(event.target.value);
      console.log(selectedOption)
    };

    const sortedProjects = projects.sort((a:any, b:any) => {
      console.log(a)
      if (selectedOption === 'ascending') {
        return a.data?.projectName.localeCompare(b.data?.projectName); // A-to-Z based on project name
      } else {
        return b.data?.projectName.localeCompare(a.data?.projectName); // Z-to-A based on project name
      }
    });


    useEffect(() => {
      //check url and setActive
      
      loggedInUser._id&& _GetProjects("655a3ed54b837045859ab384");

      }, []);


    function editProject(project:any){
    debugger;
    window!==undefined && typeof(window)!=='undefined' && window?.location?.assign(`/company/post-job/${project?.id}`)
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
              <div className="row align-items-center mb-5">
                <div className="col-sm mb-3 mb-sm-0">
                  <h3 className="mb-0">
                    {projects && projects.length}  <span className="fw-normal">jobs found</span>
                  </h3>
                </div>
                <div className="col-sm-auto">
                  <div className="d-sm-flex justify-content-sm-end align-items-center">
                    {/* Select */}
                    <div className="mb-2 mb-sm-0 me-sm-2">
                      <select className="form-select form-select-sm">
                        <option value="Relevance" >
                          Relevance
                        </option>
                        <option value="mostRecent">Most recent</option>
                      </select>
                    </div>
                    {/* End Select */}
                    {/* Select */}
                    <div className="mb-2 mb-sm-0 me-sm-2">
                    <select className="form-select form-select-sm" value={selectedOption} onChange={handleSelectChange}>
                      <option value="ascending">A-to-Z</option>
                      <option value="descending">Z-to-A</option>
                    </select>
                    </div>
                    {/* End Select */}
                    {/* Nav */}
                    <ul className="nav nav-segment">
                      <li className="nav-item"  >
                        <a className={`nav-link ${viewStyle == 'grid' && 'active'}`} onClick={() => setViewStyle('grid')}>
                          <i className="bi-grid-fill" />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className={`nav-link ${viewStyle == 'flex' && 'active'}`} onClick={() => setViewStyle('flex')}>
                          <i className="bi-list" />
                        </a>
                      </li>
                    </ul>
                    {/* End Nav */}
                  </div>
                </div>
              </div>

              {/* Nav */}
              <ul className="nav nav-segment nav-fill mb-7" id="featuresTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a className="nav-link active" href="#accountOrdersOne" id="accountOrdersOne-tab" data-bs-toggle="tab" data-bs-target="#accountOrdersOne" role="tab" aria-controls="accountOrdersOne" aria-selected="true">Upcoming</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" href="#accountOrdersTwo" id="accountOrdersTwo-tab" data-bs-toggle="tab" data-bs-target="#accountOrdersTwo" role="tab" aria-controls="accountOrdersTwo" aria-selected="false" tabIndex={-1}>Ongoing</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" href="#accountOrdersThree" id="accountOrdersThree-tab" data-bs-toggle="tab" data-bs-target="#accountOrdersThree" role="tab" aria-controls="accountOrdersThree" aria-selected="false" tabIndex={-1}>Complete </a>
                </li>
              </ul>
              {/* End Nav */}
            </div>
            {/* End Nav Scroller */}
            {/* Tab Content */}
            <div className="tab-content" id="accountOrdersTabContent">
              <div className="tab-pane fade show active" id="accountOrdersOne" role="tabpanel" aria-labelledby="accountOrdersOne-tab">
                {/* Select Group */}
               
                {/* <div className="row row-cols-1 row-cols-sm-2 mb-5"> */}
                <div className={`d-grid gap-5 mb-10 cardsContainer ${viewStyle == 'grid' && 'grid'}`} >
                  {
                    projectLoading?
                    <>
                      <div className="row" style={{padding:"5%"}}>
                        <div className="col-md-3">
                        <Skeleton
                            circle
                            height={50}
                            width={50}                   
                            containerClassName="avatar-skeleton"
                        />
                          {/* <Skeleton width={50} /> */}
                        </div>
                        <div className="col-md-9">
                          <Skeleton /> 
                          <Skeleton count={3} />
                          </div>
                        </div>
                        
                       
                    </>:
                    <>  {
                      sortedProjects?.map((project:any) => {
                        
                        return (
                          <>
                           <div className="card card-bordered">
                              <div className="card-body">
                                {/* Media */}
                                <div className="d-sm-flex">
                                  {/* Media */}
                                  <div className="d-flex align-items-center align-items-sm-start mb-3">
                                    <div className="flex-shrink-0">
                                    <InitialsAvatar name={project?.data.projectName? project?.data.projectName:""} />
                                    </div>
                                    <div className="d-sm-none flex-grow-1 ms-3">
                                      <h6 className="card-title">
                                      <Link className="text-dark" href={`/company/company-projects/${project.data.id}`}>{project?.data.projectName}</Link>
                                        <img
                                          className="avatar avatar-xss ms-1"
                                          src="../assets/svg/illustrations/top-vendor.svg"
                                          alt="Review rating"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                          title="Claimed profile"
                                        />
                                      </h6>
                                    </div>
                                  </div>
                                  {/* End Media */}
                                  <div className="flex-grow-1 ms-sm-3">
                                    <div className="row">
                                      <div className="col col-md-8">
                                        <h3 className="card-title">
                                          <a className="text-dark" href={`/company/company-projects/${project.data.id}`}>
                                          {project?.data.projectName}
                                          </a>
                                        </h3>
                                        <div className="d-none d-sm-inline-block">
                                          <h6 className="card-title">
                                            <Link className="text-dark" href={`/company/company-projects/${project.data.id}`}>
                                            {project?.org.name}
                                            </Link>
                                          </h6>
                                        </div>
                                        <ul className="list-inline list-separator small text-body mt-3">
                                          <li className=""> <strong>Date:</strong> {moment(project.data.startDate).format("DD/MM/YYYY")} to {moment(project.data.endDate).format("DD/MM/YYYY")}</li>
                                        </ul>
                                        <span className="d-block small text-body mt-2">
                                       <strong> Budget:</strong> R{project.data.pay},00
                                        </span>
                                      </div>
                                      {/* End Col */}
                                      <div className="col-auto order-md-3">
                                        {/* Checkbbox Bookmark */}
                                        <div className="form-check form-check-bookmark">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue=""
                                            id="jobsCardBookmarkCheck1"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="jobsCardBookmarkCheck1"
                                          >
                                           <span onClick={()=>editProject(project.data)} className="form-check-bookmark-default" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit job" data-bs-original-title="Edit this job">
                                          <i className="bi-pencil-square" style={{fontSize:"20px"}}/>
                                        </span>
                                            <span
                                              className="form-check-bookmark-active"
                                              data-bs-toggle="tooltip"
                                              data-bs-placement="top"
                                              aria-label="Saved"
                                              data-bs-original-title="Saved"
                                            >
                                                <i className="bi-pencil-square" />
                                            </span>
                                          </label>
                                        </div>
                                        {/* End Checkbbox Bookmark */}
                                      </div>
                                      {/* End Col */}
                                      <div className="col-12 col-md mt-3 mt-md-0">
                                    
                                        {project?.data.remote==1&& 
                                         <span className="badge bg-soft-info text-info me-2">
                                          <span className="legend-indicator bg-info" />
                                          Remote
                                        </span>
                                        
                                        }
                                        <div className="mt-5 ">
                                        <AvatarGroup
                                          avatars={["?", "?", "?","?" /* or IAvatar objects */]}
                                          initialCharacters={1}
                                          max={10}
                                          size={30}
                                          displayAllOnHover
                                          shadow={2}
                                        />
                                        <small style={{fontFamily: 'Avenir',  fontSize: "small"}} className=" ml-2 small text-body">
                                          <strong> 5 resources </strong> 
                                        </small><br/>
                                        <small style={{fontFamily: 'Avenir',  fontSize: "small"}} className=" ml-2 small text-body">
                                          (0 assigned)
                                        </small>
                                        </div>
                                       
                                        
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
                                  <li className="list-inline-item"> {moment(project.data.dateCreated).fromNow()}</li>
                                  <li className="list-inline-item">{project.data.city}</li>
                                  <li className="list-inline-item"> {project?.data.remote==1? "Remote": project?.data.remote==1? "On-site":"Hybrid"  }</li>
                                </ul>
                              </div>
                            </div>
                          </>
                        )
                      })

                    }</>
                    
                  }

                  
           
                </div>

    
                   {/* </div>YY */}
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