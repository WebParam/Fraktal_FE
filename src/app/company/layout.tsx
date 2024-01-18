'use client'
import Image from "next/image";
import topVendor from "../../assets/svg/illustrations/top-vendor.svg";
import './DevOverview.scss';
import Link from "next/link";
import { useEffect, useState } from "react";
import 'react-responsive-modal/styles.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GetProjectsByOrgId } from "../endpoints/api";
import Aos from 'aos';
import "aos/dist/aos.css"
import Banner from "../banner/Banner";
import { IJobApplication } from "../interfaces/IJobApplication";
import companyMenu from "./company-menu";
import { IDeveloperProfile, IEducationInformation, IUpdateStaffAndOrganisation, IUser, IWorkExperience } from "../interfaces/user";
import { CreateDeveloperProfile, DeleteCompanyProfile, DeleteDeveloperProfile, GetDeveloperProfile, GetOrganisation, GetStaffInfo, UpdateDeveloperProfile, UpdateStaffAndOrganisation, uploadOrgPic, uploadProfilePic } from "../endpoints/api";
import Cookies from 'universal-cookie'; // Import the libraryconst cookies = new Cookies(); 
import dynamic from "next/dynamic";
const cookies = new Cookies(); // Create an instance of Cookies
import defaultProfilePic from '../../assets/additional/person-circle.svg'; 
import defaultCompanyPic from '../../assets/additional/buildings-fill.svg'; 
import Script from "next/script";




  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    const [position, setPosition] = useState("");


const [EducationModalOpen, setEducationModalOpen] = useState(false);

  const [deleteProfileAccept, setDeleteProfileAccept] = useState(false);
  //your info form
  const [information, setInformation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [_user, setUser] = useState("");
  const [phone, setPhone] = useState("");
  const [currentProfile, setCurrentProfile] = useState<IDeveloperProfile>();
  const [currentProfilePic, setCurrentProfilePic] = useState(defaultProfilePic);
  const [currentOrgPic, setCurrentOrgPic] = useState(defaultCompanyPic);
//company info
const [companyName, setCompanyName] = useState("");
const [companyEmail, setCompanyEmail] = useState("");
const [companyPhone, setCompanyPhone] = useState("");
const [companyAbout, setCompanyAbout] = useState("");
const [companyAddress, setCompanyAddress] = useState("");
const [staff, setStaff] = useState<any>();
const [companyCity, setCompanyCity] = useState("");
const [companyCountry, setCompanyCountry] = useState("");


const loggedInUser = cookies.get("fraktional-user")??"{}";
const [projects, setProjects] = useState<IJobApplication[]>([]);

    
    useEffect(() => {
      // here you can add your aos options
      Aos.init({
        offset: 100,
      });
      loggedInUser._id&& _GetCompanyInfo(loggedInUser?._id);

  console.log(loggedInUser)

    }, []);
  
  async function _GetCompanyInfo(id:string){

    var res = await GetStaffInfo(id) as any;
    if(res.data){
    setCurrentProfile(res.data);
  
    // setInformation(res?.data?.personalInformation?.about);
    setFirstName(res?.data?.user?.firstName);
    setSurname(res?.data?.user?.surname);
    setPhone(res?.data?.user?.mobileNumber);
    setUser(res?.data?.user); // change\
    setPosition(res?.data?.staff?.position);
    setCurrentProfilePic(res?.data?.user?.profilePicture??defaultProfilePic);
    setStaff(res?.data?.staff);
    const company = await GetOrganisation(res?.data?.staff?._organisation) as any;
    if(company.data){
      
      setCompanyName(company.data?.organisation?.name);
      setCompanyPhone(company.data?.organisation?.companyPhone);
      setCompanyAbout(company.data?.organisation?.companyAbout)
      setCompanyCountry(company?.data?.organisation?.companyCountry);
      setCompanyCity(company?.data?.organisation?.companyCity);
      setCompanyEmail(company?.data?.organisation?.companyEmail);
      setCompanyAddress(company?.data?.organisation?.companyAddress)
      setCurrentOrgPic(company?.data?.organisation?.logo??defaultCompanyPic)
  
    }
  
    }
  }



  
async function _GetProjects(id:string){

  await GetProjectsByOrgId(id).then((res:any) => {

      setProjects(res.data.data);
  })
}

const signOut = () => {
  cookies.remove("fraktional-user")
  window.location.href="/"
}
   

    return (
      <>

<html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link
                href="https://fonts.googleapis.com/css?family=Poppins"
                rel="stylesheet"
              />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link
                href="https://fonts.cdnfonts.com/css/avenir"
                rel="stylesheet"
              />
               
              <Script
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
    />
    <Script strategy="lazyOnload">
      {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                  page_path: window.location.pathname,
                  });
              `}
    </Script>
    </head>
   
      <body> 
      <div className="top">
        <Banner />
      </div>
      
      
       <main id="content" role="main" className="bg-light">
       <ToastContainer />
   {/* Breadcrumb */}
   <div className="navbar-dark" style={{backgroundColor: '#FD2DC3'}}>
     <div className="container content-space-1 content-space-b-lg-3" >
       <div className="row align-items-center">
         <div className="col">
           <div className="d-none d-lg-block">
             <h1 className="h2 text-white">Company info</h1>
           </div>
           {/* Breadcrumb */}
           <nav aria-label="breadcrumb">
             <ol className="breadcrumb breadcrumb-light mb-0">
               <li className="breadcrumb-item">Account</li>
               <li className="breadcrumb-item active" aria-current="page">Company Info</li>
             </ol>
           </nav>
           {/* End Breadcrumb */}
         </div>
 
         <div className="col Gotohome">
           <Link href='/' >Go to Home</Link>
         </div>
       </div>
     </div>
   </div>
   {/* End Breadcrumb */}
   {/* Content */}
   <div className="container content-space-1 content-space-t-lg-0 content-space-b-lg-2 mt-lg-n10">
     <div className="row">
 
     <div className="col-lg-3">
                 {/* Navbar */}
                 <div className="navbar-expand-lg navbar-light">
                 <div id="sidebarNav" className="navbar-collapse navbar-vertical">
                     {/* Card */}
                     <div className="card flex-grow-1 mb-5">
                     <div className="card-body">
                         {/* Avatar */}
                         <div className="d-none d-lg-block text-center mb-5">
                         <div className="avatar avatar-xxl avatar-circle mb-3">
                             <Image className="avatar-img" fill={true}  src={currentProfilePic != "" ? currentProfilePic: cookies.get("fraktional-user")?.profilePicture??""} alt="Image Description" />
                             <Image className="avatar-status avatar-lg-status" src={topVendor} alt="Image Description" data-bs-toggle="tooltip" data-bs-placement="top" title="Verified user" />
                         </div>
 
                         <h4 className="card-title mb-0">{firstName!=""? firstName: loggedInUser.firstName} {surname!=""? surname: loggedInUser.surname}</h4>
                         <p className="card-text small">{loggedInUser.email}</p>
                         </div>
                         {/* End Avatar */}
                         {/* Nav */}
                         <span className="text-cap">Account</span>
                         {/* List */}
                         <ul className="nav nav-sm nav-tabs nav-vertical mb-4">
                         <li className="nav-item">
                             <a href="/company/company-overview"
                             //TODO: ATL:
                              // className={ window&& window?.location?.href?.includes("company-overview") ?"nav-link active" :"nav-link"} style={{cursor: 'pointer'}}
                              >
                             <i className="bi-person-badge nav-icon" /> Company info
                             </a>
                         </li>
                         <li className="nav-item">
                             <a 
                             //TODO: ATL
                            //  className={ window && window?.location?.href?.includes("company-projects") || window?.location?.href?.includes("post-job") ?"nav-link active" :"nav-link"} 
                             href="/company/company-projects"
                             >
                             <i className=" bi-code-slash nav-icon" /> Projects
                             </a>
                         </li>
                         <li className="nav-item">
                             <a className="nav-link " style={{pointerEvents: 'none', cursor: 'none', opacity: '.5'}}>
                             <i className="bi-bell nav-icon" /> Notifications
                             {/* <span className="badge bg-soft-dark text-dark rounded-pill nav-link-badge">1</span> */}
                             </a>
                         </li>
                         <li className="nav-item">
                             <a className="nav-link " style={{pointerEvents: 'none', cursor: 'none', opacity: '.5'}}>
                             <i className="bi-sliders nav-icon" /> Preferences
                             </a>
                         </li>
                         <li className="nav-item">
                             <a onClick={signOut}  className="nav-link " style={{ cursor:'pointer', opacity: '.5'}}>
                             <i className="bi bi-box-arrow-right nav-icon"/> Sign Out
                             </a>               
                         </li>
                         </ul>
                         {/* End List */}
                     </div>
                     </div>
                     {/* End Card */}
                 </div>
                 </div>
                 {/* End Navbar */}
             </div>
 
       {/* End Col */}
      
       <div className="col-lg-9">
         {/* Card */}
         {children}
         {/* End Card */}
       </div>
       {/* End Col */}
     </div>
     {/* End Row */}
   </div>
 </main>

      
 
</body>
    </html>
      </>
    )
}
