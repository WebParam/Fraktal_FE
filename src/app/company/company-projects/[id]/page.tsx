'use client'
import Image from "next/image";
import topVendor from "../../assets/svg/illustrations/top-vendor.svg";
import './DevOverview.scss';
import Link from "next/link";
import { useEffect, useState } from "react";
import 'react-responsive-modal/styles.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GetDeveloperProfile } from "../../../endpoints/api";
import { GetProjectsByOrgId } from "../../../endpoints/api";
import Cookies from 'universal-cookie'; // Import the libraryconst cookies = new Cookies(); 
import dynamic from "next/dynamic";
const cookies = new Cookies(); // Create an instance of Cookies
import Banner from "../../../banner/Banner";
import { IJobApplicationViewModel } from "../../../interfaces/IJobApplication";
import { IDeveloperProfile } from "@/app/interfaces/user";
import companyMenu from "../../company-menu";
import InitialsAvatar from 'react-initials-avatar';
import 'react-initials-avatar/lib/ReactInitialsAvatar.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import AvatarGroup from 'react-avatar-group';
const moment = require("moment");

function assignedDeveloperOverview() {
 

const [position, setPosition] = useState("");

const [projectLoading, setProjectLoading] = useState(true);
  const loggedInUser = cookies.get("fraktional-user")??"{}";
  const [projects, setProjects] = useState<IJobApplicationViewModel[]>([]);
  const [devProfile, SetDevProfile] = useState<IDeveloperProfile[]>([]);

  
//IDeveloperProfile
async function _GetAssignedUser(id:string){

  await GetDeveloperProfile(id).then((res:any) => {
    setProjectLoading(false);
      SetDevProfile(res.data);
      const data = res.data;

      console.log("Developer here",data)
  })
 
}
//IJobApplicationViewModel
async function _GetProject(id:string){

  await GetProjectsByOrgId(id).then((res:any) => {
    setProjectLoading(false);
    setProjects(res.data);
      const data = res.data;

      console.log("Project here",data)
  })
 
}





useEffect(() => {
  //check url and setActive

  // loggedInUser._id&& _GetAssignedUser("653b8074526a329483800797");
  _GetProject("65607f2d8b8b98274d4ce397");

  }, []);
  


// function editProject(project:any){
// debugger;
// window?.location?.assign(`/company/post-job/${project?.id}`)

// }
interface TableData {
  name: string;
  specs: string;
  view : string;
}

const data: TableData[] = [  
    {
      name:"Prince Kwanele",
      specs:"React JS",
      view: "project"
    },
    {
      name:"Lihle Mqhayi",
      specs:"SEE SHARP",
      view: "project"
    }
    
  ]


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
              <a href="/company/post-job"className="js-file-attach-reset-img btn btn-white btn-sm">Project Information</a>
              </div>
           </div>
            </div>
          </div>
          {/* End Header */}
          {/* Body */}
          <div className="card-body">
          {/* <div className="avatar avatar-xxl avatar-circle mb-3">

                        </div> */}
            {/* Nav Scroller */}
            <div className="assigned">
              <h3 style={{ color: '#FF7BED' }}>Project Information</h3>
              <p>Organization Information:</p>
              <p>Job Information:</p>
            </div>
            {/* End Tab Content */}
       
          </div>
          
          <div className="card-body">
                  <h3 style={{ color: '#FF7BED' }}>Assigned Developers</h3>
                  <div className="avatar avatar-xxl avatar-circle mb-3">
                
                  <div className="assigned">
                      <table>
                        <thead>
                          <tr>
                            {Object.keys(data[0]).map((headerText, index) => (
                              <th key={index}>{headerText}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((item, rowIndex) => (
                            <tr key={rowIndex}>
                              {Object.entries(item).map(([key, value], colIndex) => (
                                <td key={colIndex}>
                                  {colIndex === Object.keys(item).length - 1 ? (
                                    <span className="eye-icon">👁️</span>
                                  ) : key === 'specs' ? (
                                    <span className="specs-text">{value}</span>
                                  ) : (
                                    value
                                  )}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
            {/* Nav Scroller */}
            <div className="assigned">
         
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



export default dynamic (() => Promise.resolve(assignedDeveloperOverview), {ssr: false})