'use client'
import Image from "next/image";
import topVendor from "../../assets/svg/illustrations/top-vendor.svg";
import './DevOverview.scss';
import Link from "next/link";
import { useEffect, useState } from "react";
import 'react-responsive-modal/styles.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GetDeveloperProfile, GetProjectById } from "../../../endpoints/api";
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

function assignedDeveloperOverview({ params }: { params: { id: string }}) {
 
  
  const [position, setPosition] = useState("");
  
  const [projectLoading, setProjectLoading] = useState(true);
  const loggedInUser = cookies.get("fraktional-user")??"{}";
  const [project, setProject] = useState<any>();
  const [shortlist, setShortList] = useState([]);
  const [users, setUsers] = useState([])
  const [devProfile, SetDevProfile] = useState<IDeveloperProfile[]>([]);
  let url = '';
  
  
  //IDeveloperProfile
  async function _GetAssignedUser(id:string){
    
    await GetDeveloperProfile(id).then((res:any) => {
      setProjectLoading(false);
      SetDevProfile(res.data);
      const data = res.data;
      console.log('shortlist: ', shortlist)
      console.log("Developer here",data)

      
    })
 
}
//IJobApplicationViewModel
async function _GetProject(id:string){
  
  await GetProjectById(id).then((res:any) => {
    setProjectLoading(false);
    setProject(res.data);
    const data = res.data;
    
    console.log("Project here",data)
  })
  
}



useEffect(() => {
  if (params.id) {
    _GetProject(params.id);
  }

  }, []);
  

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
              <p>Organization Title: Param Solutions</p>
              <p>Job Title: {project?.data.projectName}</p>
            </div>
            {/* End Tab Content */}
       
          </div>
          
                  <h3 style={{ color: '#FF7BED', paddingLeft: '30px' }}>
                  <select name="" id="">
                    <option value="applicants">Applicants</option>
                    <option value="shortlist">ShortListed Developers</option>
                  </select>
                  </h3>
          <div className="card-body" style={{overflowY: 'scroll'}}>
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
                              {project?.data.shortlist.map((dev: any, index: any) => (
                                
                            <tr>
                                <td key={index}>
                                  dev{dev}
                                  {/* {colIndex === Object.keys(item).length - 1 ? (
                                    <span className="eye-icon">👁️</span>
                                  ) : key === 'specs' ? (
                                    <span className="specs-text">{value}</span>
                                  ) : (
                                    value
                                  )} */}
                                </td>
                                <td>{dev}</td>
                                
                                <td>{dev}</td>
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
</>
    )
}



export default dynamic (() => Promise.resolve(assignedDeveloperOverview), {ssr: false})