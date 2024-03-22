'use client'
import Image from "next/image";
import topVendor from "../../assets/svg/illustrations/top-vendor.svg";
import './DevOverview.scss';
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import 'react-responsive-modal/styles.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GetDeveloperProfile, GetProjectById, GetShortlist } from "../../../endpoints/api";
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
  const [search, setSearch] = useState('');
 
  
  // const [position, setPosition] = useState("");
  
  const [projectLoading, setProjectLoading] = useState(true);
  // const loggedInUser = cookies.get("fraktional-user")??"{}";
  const [project, setProject] = useState<any>();
  const [shortlist, setShortList] = useState<IDeveloperProfile[]>([]);
  const [shortlistCopy, setshortlistCopy] = useState<IDeveloperProfile[]>([]);
  const [loading, setLoading] = useState(false);

  
  
  //IDeveloperProfile
//   async function _GetAssignedUser(id:string){
    
//     await GetDeveloperProfile(id).then((res:any) => {
//       setProjectLoading(false);
//       SetDevProfile(res.data);
//       const data = res.data;
//       console.log('shortlist: ', shortlist)
//       console.log("Developer here",data)
//     })
 
// }
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
  }},[])

  useEffect(() => {
  (async function getData() {

    if (project) {

      try {
        const shortlist = await GetShortlist(project.data.shortlist)
        console.log('shortlist: ', shortlist)
        if (shortlist) {
          setShortList(shortlist.data);
          setshortlistCopy(shortlist.data);
          setLoading(true);
        } else {
          setLoading(true);
        }
      } catch(error: any) {
        alert(error);
        setLoading(false);
      }
    }
  })()


  }, [project]);
  
  console.log('shortlist data: ', shortlist);



  
function handleSearch(event: ChangeEvent<HTMLInputElement>): void {
  setSearch(event.target.value);

  if(search) {
    const arrayCopy = shortlist?.filter(dev => dev.user?.firstName?.toLowerCase().includes(search.toLowerCase()) || dev.user?.surname?.toLowerCase().includes(search.toLowerCase()))
    setshortlistCopy(arrayCopy);
  } 
}

useEffect(() => {
  if (search.length == 0) {
    setshortlistCopy(shortlist);
  }
}, [search])

    return (
      <>  
      {/* End Col */}
     
      {/* <div className="col-lg-9"> */}
        {/* Card */}
        <div className="card">
          {/* He  er */}
          <div className="card-header border-bottom">
            
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
          <div style={{display: 'flex', justifyContent: 'space-between', margin: '0 20px'}}>
            <h3 style={{ color: '#FF7BED', paddingLeft: '30px' }}>
            Applicants: {shortlistCopy.length}
            </h3>

            <form className="input-group input-group-merge" style={{maxWidth: '200px'}}>
              <div className="input-group-prepend input-group-text">
                <i className="bi-search" />
              </div>
              <input 
                type="search" 
                className="form-control" 
                placeholder="Search Developers" 
                aria-label="Search projects" 
                value={search}
                onChange={handleSearch}  
                />
            </form>
          </div>
          {loading ? 
          <div className="card-body candidates" style={{overflowY: 'scroll'}}>
                  <div className="avatar avatar-xxl avatar-circle mb-3">
                
                  <div className="assigned">
                      <table>
                        <thead>
                          <tr>
                            {/* {Object.keys(data[0]).map((headerText, index) => ( */}
                              <th>Full Name</th>
                              <th>Email</th>
                              <th>Years Of Experience</th>
                              <th>Cv</th>
                              <th style={{borderRight: '1px solid grey'}}>Standardised CV</th>
                            {/* ))} */}
                          </tr>
                        </thead>
                        <tbody style={{position: 'relative'}}>
                              {shortlistCopy.length > 0 ? shortlistCopy.map((dev: any) => ( 
                                <tr>
                                  <td key={dev.user?.id}>
                                    {`${dev.user?.firstName} ${dev.user?.surname}`}
                                  </td>
                                  <td style={{fontSize:'14px'}}>{dev.user?.email}</td>
                                  <td>{dev.yearsOfExperience.slice(3,)}</td>
                                  
                                  <td><Link href={dev.cvUrl} style={{fontSize:'12px'}}>Download Cv</Link></td>
                                  <td><Link href={dev.cvUrl} style={{color: '#FF7BED', fontSize:'12px'}}>Download CV</Link></td>
                                </tr>
                              )): 
                            <div style={{ color: 'tomato',position: 'absolute', right: '10%',left: '0', height: '50px',bottom: '0', top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center'}}>
                              Couldn't fetch applicants... 
                            </div>}
                        </tbody>
                      </table>
                    </div>
                  </div>
            {/* Nav Scroller */}
            <div className="assigned">
         
            </div>
            {/* End Tab Content */}
          </div>:
          <SkeletonTheme highlightColor="#f5f5f5">
            <div style={{margin: '0 20px'}}>
              <Skeleton height={50}  />
              <Skeleton height={50} />
              <Skeleton height={50} />
            </div>
          </SkeletonTheme>}
          {/* End Body */}
        </div>
</>
    )
}



export default dynamic (() => Promise.resolve(assignedDeveloperOverview), {ssr: false})