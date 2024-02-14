'use client'
import Image from "next/image";
import img9 from "../../assets/img/160x160/img9.jpg";
import topVendor from "../../assets/svg/illustrations/top-vendor.svg";
import './DevOverview.scss';
import logo from '../../assets/additional/logo.webp';
import Select from "react-select";
import dropboxicon from "../../assets/svg/brands/dropbox-icon.svg";
import mailchimpicon from "../../assets/svg/brands/mailchimp-icon.svg";
import googleicon from "../../assets/svg/brands/google-icon.svg";
import varsity from "../../assets/svg/brands/the-university-of-manchester.svg";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { IDeveloperProfile, IEducationInformation, IWorkExperience } from "../interfaces/user";
import { CreateDeveloperProfile, DeleteDeveloperProfile, GetDeveloperProfile, UpdateDeveloperProfile, uploadCV, uploadProfilePic } from "../endpoints/api";
import Cookies from 'universal-cookie';
import Banner from "../banner/Banner";
import dynamic from "next/dynamic";
import { Logout } from "../lib/function";
import InitialsAvatar from 'react-initials-avatar';
import 'react-initials-avatar/lib/ReactInitialsAvatar.css';
import { IOption, degrees, experience, getLabelFromValue, getOptionFromValue, noticePeriods, skills, universities } from "../lib/data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StylesConfig } from 'react-select';
import moment from"moment";
import { VerifyOtp } from "../auth/register/verify-otp";
// const moment = require("moment");

const cookies = new Cookies();




function developerOverview() {
  const [workModalOpen, setWorkModalOpen] = useState(false);
  const [workStatus, setWorkStatus] = useState("no");
  const [EducationModalOpen, setEducationModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  //form
  const handleWorkStatusChange = (value: any) => {
    setWorkStatus(value);
  };
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);

  const [information, setInformation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");

  const [currentJob, setCurrentJob] = useState("");
  const [previousWorkExperience, setPreviousWorkExperience] = useState<IWorkExperience[]>([]);
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [education, setEducation] = useState<IEducationInformation[]>([]);
  const [keyCourses, setKeyCourses] = useState("");
  const [expectedRate, setExpectedRate] = useState("0");
  const [keySkills, setKeySkills] = useState<any[]>([]);
  const [noticePeriod, setNoticePeriod] = useState("");
  const [cvUrl, setCVUrl] = useState("");
  const [_user, setUser] = useState("");
  const [preferedWorkMethod, setPreferedWorkMethod] = useState("");
  const [phone, setPhone] = useState("");
  const [currentProfile, setCurrentProfile] = useState<IDeveloperProfile>();
  const [gender, setGender] = useState(0);

  // modals
  const [wrk_employer, setWrk_employee] = useState("");
  const [wrk_jobTitle, setWrk_jobTitle] = useState("");
  const [wrk_startDate, setWrk_startDate] = useState("");
  const [wrk_endDate, setWrkendDate] = useState("");
  const [wrk_responsibilities, setWrk_responsibilities] = useState("");
  const [wrk_location, setWrkLocation] = useState("");

  const [wrk_employerError, setWrk_employeeError] = useState(false);
  const [wrk_jobTitleError, setWrk_jobTitleError] = useState(false);
  const [wrk_startDateError, setWrk_startDateError] = useState(false);
  const [wrk_endDateError, setWrkendDateError] = useState(false);
  const [wrk_responsibilitiesError, setWrk_responsibilitiesError] = useState(false);
  const [wrk_locationError, setWrkLocationError] = useState(false);


  const [menuItem, setMenu] = useState(1);

  const [editEducation, setEditEducation] = useState(0);  
  const [isEditEducation, setIsEditEducation] = useState(false);  
  const [editWork, setEditWork] = useState(0);  
  const [isEditWork, setIsEditWork] = useState(false);  

  const [edu_InsituteName, setEduInstituteName] = useState("");
  const [edu_Qualification, setEduQualification] = useState("");
  const [edu_completionDate, setEduCompletionDate] = useState("");

  
  const [edu_InsituteNameError, setEduInstituteNameError] = useState(false);
  const [edu_QualificationError, setEduQualificationError] = useState(false);
  const [edu_completionDateError, setEduCompletionDateError] = useState(false);
  const [currentProfilePicError, setCurrentProfilePicError] = useState(false);

  const [currentProfilePic, setCurrentProfilePic] = useState("");
  const loggedInUser = cookies.get("fraktional-user")??"{}";
  debugger;
  const [existingUser, setExistingUser] = useState(false);
    const [updatePasswordModal, setUpdatePasswordModal] = useState(false);
    const [deleteProfileAccept, setDeleteProfileAccept] = useState(false);
    
    const [updatePasswordAccept, setUpdatePasswordAccept] = useState(false);
  const [cv, setCV] = useState<Blob | undefined>();
  const [hasChanged, setHasChanged] = useState(false);
  const cvPayload = new FormData();
  const hiddenCVInput = useRef<HTMLInputElement>(null);
  const saveCV = (e: any) => {
    setCV(e.target.files[0]);

    setHasChanged(true);
  };
const isApply = loggedInUser?.id? true: false;

function editEducationInfo(index:number){

const target = education[index];
setEduInstituteName(target.instituteName);
setEduQualification(target.qualification);
var date = moment(target.dateCompleted, 'YYYY-MM-DD').format('YYYY-MM-DD');
setEduCompletionDate(date);
setEditEducation(index);
setEducationModalOpen(true);
setIsEditEducation(true);
}

function editWorkExperience(index:number){
  const target = previousWorkExperience[index];
  debugger;
  setWrk_employee(target.employer??"");
  setWrkLocation(target.location??"");
  setWrk_jobTitle(target.jobTitle??"");
  setWrk_responsibilities(target.responsibilities?.content??"");
setWrkendDate(target.endDate??"");
setWrk_startDate(target.startDate??"");
setWorkModalOpen(true);
setIsEditWork(true);

  // setEduQualification(target.qualification);
  // var date = moment(target.dateCompleted, 'YYYY-MM-DD').format('YYYY-MM-DD');
  // setEduCompletionDate(date);
  // setEditEducation(index);
  // setEducationModalOpen(true);
  // setIsEditEducation(true);
}

  async function deleteProfile(){
    let _id = toast.loading("Deleting your profile..", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    const deleteRes = await DeleteDeveloperProfile(currentProfile?._id??"");
    setTimeout(() => {
      // setDisable(false)
      toast.dismiss(_id);
    }, 2000);
    setDeleteModalOpen(false);
  }
  const saveProfilePic = async (e: any) => {
    let _id = toast.loading("Updating profile picture..", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    const pp = e.target.files[0];
    // updateProfilePic();
    const profilePicUpload = new FormData();

    if(pp){
      profilePicUpload.append("profilePic", pp as Blob);
      const profilePicDoc = await uploadProfilePic(profilePicUpload,loggedInUser._id??loggedInUser?.id??"");
      
      console.log("profres", profilePicDoc);
      const newImage = profilePicDoc.data.data.Location
      const newUser = {...loggedInUser, profilePicture:newImage};
      cookies.remove("fraktional-user", { path: '/' });

      setCurrentProfilePic(newImage);
      
       cookies.set("fraktional-user", newUser as any, { path: "/" });
    }
    setTimeout(() => {
      // setDisable(false)
      toast.dismiss(_id);
    }, 2000);
  };

  
  function workModal(): void {
    setWorkModalOpen(true);
  }

  console.log("DSDS", cv);
  function educationModal(): void {
    setEducationModalOpen(true);
  }

  const handleCvClick = (event:any) => {
    if (hiddenCVInput !== null && hiddenCVInput.current!=null) {
      hiddenCVInput?.current.click();
    }
  };

async function _GetDeveloperProfile(id:string){
debugger;
  let _id = toast.loading("Loading your profile..", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  
  var res = await GetDeveloperProfile(id) as any;
  if(res.data){
  setCurrentProfile(res.data);
setNoticePeriod(res?.data?.noticePeriod)
  setInformation(res?.data?.personalInformation?.about);
  setFirstName(res?.data?.firstName);
  setPhone(res?.data?.phone);
  setSurname(res?.data?.surname);
  setCurrentJob(res?.data?.currentJob);

  setPreviousWorkExperience(res?.data?.previousWorkExperience);
  setYearsOfExperience(res?.data?.yearsOfExperience);

  setEducation(res?.data?.education);
  setKeyCourses(res?.data?.keyCourses);
  setCVUrl(res?.data?.cvUrl);
  setUser(res?.data?.user); // change
  setPreferedWorkMethod(res?.data?.preferedWorkMethod);
  setExistingUser(true);
  setKeySkills(res?.data?.keySkills);
  setWorkStatus(res?.data?.workStatus);
  setExpectedRate(res?.data?.expectedRate);
  
  }
  setTimeout(() => {
    // setDisable(false)
    toast.dismiss(_id);
  }, 2000);
}


function addWorkExperience(){
  if (!wrk_jobTitle.trim()) {
    setWrk_jobTitleError(true);
    return;
  }

  if (!wrk_employer.trim()) {
    setWrk_employeeError(true);
    return;
  } else {
    setWrk_employeeError(false);
  }

  if (!wrk_location.trim()) {
    setWrkLocationError(true);
    return;
  } else {
    setWrkLocationError(false);
  }

  if (!wrk_startDate.trim()) {
    setWrk_startDateError(true);
    return;
  } else {
    setWrk_startDateError(false);
  }

  
  if (!wrk_endDate.trim()) {
    setWrkendDateError(true);
    return;
  } else {
    setWrkendDateError(false);
  }

  if (!wrk_responsibilities.trim()) {
    setWrk_responsibilitiesError(true);
    return;
  } else {
    setWrk_responsibilitiesError(false);
  }

  const payload = {

    employer:wrk_employer,
    jobTitle:wrk_jobTitle,
    startDate:wrk_startDate,
    endDate:wrk_endDate,
    responsibilities:{content: wrk_responsibilities},
    location:wrk_location
  } as IWorkExperience
  debugger;
  if(isEditWork){
    debugger;
    const _new = previousWorkExperience;
    const  newPayload = _new.splice(editWork,1,payload)
     setPreviousWorkExperience(_new);
     setIsEditWork(false);
  }else{
    setPreviousWorkExperience([...previousWorkExperience, payload]);
  }

  setWrk_employee("");
  setWrk_jobTitle("");
  setWrk_startDate("");
  setWrkendDate("");
  setWrkLocation("");
  setWrk_responsibilities("");
  setWorkModalOpen(false);





}

function removeWorkExperience(index:number){
  const filtered = previousWorkExperience.filter((x,i)=> {return i!=index });
  setPreviousWorkExperience(filtered);
}

function addEducation(){

  if (!edu_Qualification.trim()) {
    setEduQualificationError(true);
    return;
  } else {
    setEduQualificationError(false);
  }

  if (!edu_InsituteName.trim()) {
    setEduInstituteNameError(true);
    return;
  } else {
    setEduInstituteNameError(false);
  }

  if (!edu_completionDate.trim()) {
    setEduCompletionDateError(true);
    return;
  } else {
    setEduCompletionDateError(false);
  }

  const payload = {
    instituteName: edu_InsituteName,
    qualification:edu_Qualification,
    dateCompleted:edu_completionDate
  } as IEducationInformation;

  if(isEditEducation){
    
    const _new = education;
    const  newPayload = _new.splice(editEducation,1,payload)

     setEducation(_new);
     setIsEditEducation(false);
  }else{
    setEducation([...education, payload]);
  }


  setEduCompletionDate("");
  setEduQualification("");
  setEduInstituteName("");
  setEducationModalOpen(false)
}

function removeEducation(index:number){
  const filtered = education.filter((x,i)=> {return i!=index });
  setEducation(filtered);
}

function handleSelectQualification(data: any) {
  const _data = data as IOption;
  setEduQualification(_data.value);
}


function handleNoticePeriod(data: any) {
  const _data = data as IOption;
  setNoticePeriod(_data.value);
}


function handleExperience(data: any) {
  const _data = data as IOption;
  setYearsOfExperience(_data.value);
}

function handleSkills(data: any) {
  const _data = data as IOption[];
  debugger;
  setKeySkills(_data.map(x=>x.value));
}



function handleSelectInstitute(data: any) {
  const _data = data as IOption;
  setEduInstituteName(_data.value);
}


const frakcvUrl = `https://fraktional-be.azurewebsites.net/getPersonnelCv/${loggedInUser._id}`

useEffect(() => {
  //check url and setActive

  if(loggedInUser._id||loggedInUser.id){
    debugger;
     _GetDeveloperProfile(loggedInUser?._id ?? loggedInUser?.id)
    }
   
  }, []);



  async function updateProfile(){
    // setSaving(true)
    setHasChanged(false)
    let _id = toast.loading("Updating your profile..", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  let payload = {
      firstName:firstName,
      surname:surname,
      information: information, 
      currentJob:currentJob,
      previousWorkExperience:previousWorkExperience,
      yearsOfExperience:yearsOfExperience,
      education:education, 
      keySkills:keySkills, 
      keyCourses:keyCourses,
      cvUrl:cvUrl,
      personalInformation:{about:information},
      _user: loggedInUser._id ??loggedInUser.id,
      preferedWorkMethod: preferedWorkMethod,
      user:loggedInUser._id??loggedInUser.id,
    } as IDeveloperProfile;

    if (cv) {
      cvPayload.append("cv", cv as Blob);
      const cvDoc = await uploadCV(cvPayload);
      const path = cvDoc.data.data.Location;
      payload.cvUrl = path;
    }


  

    if(existingUser){
      
      var t = currentProfile;
      const res = await UpdateDeveloperProfile(payload, currentProfile?._id??"");
    }else{
      const res = await CreateDeveloperProfile(payload);
    }
    
    
    toast.dismiss(_id);
  }

  async function completeApplication(){
    // setSaving(true)
    setHasChanged(false)
    let _id = toast.loading("Submitting your application..", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  let payload = {
      firstName:firstName,
      surname:surname,
      information: information, 
      currentJob:currentJob,
      previousWorkExperience:previousWorkExperience,
      yearsOfExperience:yearsOfExperience,
      education:education, 
      keySkills:keySkills, 
      keyCourses:keyCourses,
      cvUrl:cvUrl,
      personalInformation:{about:information},
      _user: loggedInUser._id,
      preferedWorkMethod: preferedWorkMethod,
      user:loggedInUser._id,
    } as IDeveloperProfile;

    if (cv) {
      cvPayload.append("cv", cv as Blob);
      const cvDoc = await uploadCV(cvPayload);
      const path = cvDoc.data.data.Location;
      payload.cvUrl = path;
    }


  

    if(existingUser){
      
      var t = currentProfile;
      const res = await UpdateDeveloperProfile(payload, currentProfile?._id??"");
    }else{
      const res = await CreateDeveloperProfile(payload);
    }
    
    if(isApply){
      setEditModalOpen(true);
    }

    toast.dismiss(_id);
  }

  function closeModal(){
    setEditModalOpen(false);
    sendToLogin();
  }


  function getURL(){
    if(cv!=undefined){
   var _cv =  window.URL.createObjectURL(cv) as string;
   return  _cv;
  }
}
const style = {
  control: (base:any, state:any) => ({
    ...base,
    border: state.isFocused ? 0 : 0,
    // This line disable the blue border
    boxShadow: state.isFocused ? 0 : 0,
    "&:hover": {
      border: state.isFocused ? 0 : 0
    }
  })
};
const customModalStyles = {
  modal: {
    maxWidth: '50%', 
    width: '50%',
    borderRadius: "10px",
    backgroundColor: "white"
  },
};
function sendToLogin(){
 Logout();

}

console.log("DDD", loggedInUser);
    return (
      <>
      <div className="top">
      <ToastContainer />
        <Banner />
      </div>
    <main id="content" role="main" className="bg-light">
  {/* Breadcrumb */}
  <Modal open={editModalOpen} styles={customModalStyles} onClose={() => closeModal()} center>
            <div style={{width:"100%"}}>
            <h4>Your job application has been submitted.</h4>
         
           {/* <p>A new account has also been created.</p> */}
            <p>To track your application please check your email at {loggedInUser?.email} for your login details.</p>

                <button onClick={()=>sendToLogin()} className="btn btn-lg" style={{backgroundColor: '#FD2DC3', color: '#fff', width:"100%"}}>Login</button>
            </div>
           
      </Modal>
  <div className="navbar-dark" style={{backgroundColor: '#FD2DC3'}}>
    <div className="container content-space-1 content-space-b-lg-3" >
      <div className="row align-items-center">
        <div className="col">
          <div className="d-none d-lg-block">
            <h1 className="h2 text-white">Personal info</h1>
          </div>
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb breadcrumb-light mb-0">
              <li className="breadcrumb-item">Account</li>
              <li className="breadcrumb-item" aria-current="page">Personal Info</li>
            </ol>
          </nav>
          {/* End Breadcrumb */}
        </div>
        {!isApply&&
        <div className="col Gotohome">
          <Link href='/' >Go to Home</Link>
        </div>
      }
      </div>
    </div>
  </div>
  {/* End Breadcrumb */}
  {/* Content */}
  <div data-aos="fade-right" className="container content-space-1 content-space-t-lg-0 content-space-b-lg-2 mt-lg-n10">
    <div className="row">
    {!isApply&&
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
                 <Image className="avatar-img" fill={true}  src={currentProfilePic!=""? currentProfilePic: cookies.get("fraktional-user")?.profilePicture??""} alt="Image Description" />
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
               <li className="nav-item"  onClick={()=>setMenu(1)} >
                 <a className={menuItem==1?"nav-link active" :"nav-link"} style={{cursor: 'pointer'}}>
                   <i className="bi-person-badge nav-icon" /> Personal info
                 </a>
               </li>
              
               <li className="nav-item">
                 <a className="nav-link " style={{pointerEvents: 'none', cursor:'none', opacity: '.5'}}>
                   <i className="bi-briefcase nav-icon" /> Gigs
                 </a>
               </li>
               <li className="nav-item">
                 <a className="nav-link " style={{pointerEvents: 'none', cursor: 'none', opacity: '.5'}}>
                   <i className="bi-calendar nav-icon" /> Interviews
                   {/* <span className="badge bg-soft-dark text-dark rounded-pill nav-link-badge">1</span> */}
                 </a>
               </li>
               
               <li className="nav-item">
                 <a className="nav-link " style={{pointerEvents: 'none', cursor:'none', opacity: '.5'}}>
                   <i className="bi-bell nav-icon" /> Notifications
                 </a>
               </li>
               <li className="nav-item" onClick={()=>setMenu(2)}>
                 <a className={menuItem==2?"nav-link active" :"nav-link"}   style={{cursor: 'pointer'}}>
                   <i className="bi-shield-shaded nav-icon" /> Security
                 </a>
               </li>
               <li className="nav-item">
                 <a className="nav-link " onClick={()=>Logout()}>
                   <i className="bi-sliders nav-icon" /> Logout
                 </a>
               </li>
             </ul>
           </div>
         </div>
         {/* End Card */}
       </div>
     </div>
     {/* End Navbar */}
   </div>
    }
     
      {/* End Col */}
      <div className= {!isApply?"col-lg-9":"col-lg-12"}>
        <div className="d-grid gap-3 gap-lg-5">
          {/* Card */}
          
          {menuItem==1 &&
            <>
                    <div className="card" data-aos="fade-left">
            <div className="card-header border-bottom">
              <h4 className="card-header-title">Basic info</h4>
            </div>
            {/* Body */}
            <div className="card-body">
              <form>
                {/* Form */}
                <div className="row mb-4">
                  <label className="col-sm-3 col-form-label form-label">Profile photo</label>
                  <div className="col-sm-9">
                    {/* Media */}
                    <div className="d-flex align-items-center">
                      {/* Avatar */}
                      <label className="avatar avatar-xl avatar-circle" htmlFor="avatarUploader">
                        <Image id="avatarImg" className="avatar-img" 
                        fill={true}
                         src={currentProfilePic!=""? currentProfilePic: cookies.get("fraktional-user")?.profilePicture??""}
                        alt="Image Description" />
                      </label>
                      <div className="d-grid d-sm-flex gap-2 ms-4">
                        <div className="form-attachment-btn btn btn-sm" style={{backgroundColor: '#FD2DC3', color: '#fff'}}>Upload photo
                          <input type="file"  onChange={saveProfilePic} 
                          className="js-file-attach form-attachment-btn-label"
                        
                          id="avatarUploader" 
                                />
                        </div>
                        {/* End Avatar */}
                        <button type="button" className="js-file-attach-reset-img btn btn-white btn-sm">Delete</button>
                      </div>
                    </div>
                    {/* End Media */}
                  </div>
                </div>
                {/* End Form */}
                {/* Form */}
                <div className="row mb-4">
                  <label htmlFor="firstNameLabel" className="col-sm-3 col-form-label form-label">Full name <i className="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Displayed on public forums, such as Front." /></label>
                  <div className="col-sm-9">
                    <div className="input-group">
                      <input type="text" onChange={(e)=> setFirstName(e.target.value)} defaultValue={firstName!="" && firstName!=undefined? firstName: loggedInUser.firstName} className="form-control" name="firstName" id="firstNameLabel" placeholder="Enter first name" aria-label="Clarice" />
                      {/* <small>This field is required</small> */}
                      <input type="text" onChange={(e)=> setSurname(e.target.value)} defaultValue={surname!="" && surname!=undefined ?surname: loggedInUser.surname} className="form-control" name="lastName" id="lastNameLabel" placeholder="Enter last name" aria-label="Boone"  />
                    </div>
                  </div>
                </div>
                {/* End Form */}
                {/* Form */}
                <div className="row mb-4">
                  <label htmlFor="emailLabel"  className="col-sm-3 col-form-label form-label">Email</label>
                  <div className="col-sm-9">
                    <input type="email" readOnly className="form-control" name="email" id="emailLabel" placeholder="Email" aria-label="clarice@example.com" defaultValue={loggedInUser.email} />
                  </div>
                </div>
                {/* End Form */}
                {/* Form */}
                <div className="js-add-field row mb-4" data-hs-add-field-options="{
                    &quot;template&quot;: &quot;#addPhoneFieldTemplate&quot;,
                    &quot;container&quot;: &quot;#addPhoneFieldContainer&quot;,
                    &quot;defaultCreated&quot;: 0
                  }">
                  <label htmlFor="phoneLabel" className="col-sm-3 col-form-label form-label">Phone <span className="form-label-secondary">(Optional)</span></label>
                  <div className="col-sm-9">
                    <div className="input-group">
                      <input type="text" className="js-input-mask form-control" name="phone" id="phoneLabel" placeholder="+x(xx)xxx-xxxx" aria-label="+x(xxx)xxx-xx-xx" defaultValue={loggedInUser.mobileNumber} data-hs-mask-options="{
                           &quot;mask&quot;: &quot;+{0}(000)000-00-00&quot;
                         }" />
                      {/* Select */}
                      <div className="tom-select-custom">
                        <select className="js-select form-select" name="phoneSelect" data-hs-tom-select-options="{
                              &quot;width&quot;: &quot;8rem&quot;,
                              &quot;hideSearch&quot;: true
                            }">
                          <option value="Mobile" selected>Mobile</option>
                        </select>
                      </div>
                    </div>

                    <div id="addPhoneFieldContainer" />
                  </div>
                </div>
                      
                {/* <div className="row mb-4">
                  <label className="col-sm-3 col-form-label form-label">Gender</label>
                  <div className="col-sm-9">
                    <div className="input-group input-group-md-down-break">
                     
                      <label className="form-control" htmlFor="genderTypeRadio1">
                        <span className="form-check">
                          <input  onChange={(e)=>setGender(0)}  type="radio" className="form-check-input" name="genderTypeRadio" id="genderTypeRadio1" />
                          <span className="form-check-label">Male</span>
                        </span>
                      </label>
                    
                      <label className="form-control" htmlFor="genderTypeRadio2">
                        <span className="form-check">
                          <input onChange={(e)=>setGender(1)} type="radio" className="form-check-input" name="genderTypeRadio" id="genderTypeRadio2" />
                          <span className="form-check-label">Female</span>
                        </span>
                      </label>

                      <label className="form-control" htmlFor="genderTypeRadio3">
                        <span className="form-check">
                          <input onChange={(e)=>setGender(2)}   type="radio" className="form-check-input" name="genderTypeRadio" id="genderTypeRadio3" />
                          <span className="form-check-label">Other</span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div> */}
                {/* Form */}
                <div className="row mb-4">
                  <label className="col-sm-3 col-form-label form-label">Bio</label>
                  <div className="col-sm-9">
                    {/* Quill */}
                    <div className="quill-custom">
                      <div className="js-quill" style={{height: '15rem'}}>
                        <textarea onChange={(e)=>setInformation(e.target.value)} name="summary" defaultValue={information} id="textarea" placeholder="Enter bio" style={{height: '100%', width: '100%', padding: '10px'}}></textarea>
                      </div>
                    </div>
                    {/* End Quill */}
                  </div>
                </div>
               
                {/* End Form */}
                {/* End Form */}
                <div className="row mb-4">
                  <label htmlFor="firstNameLabel" className="col-sm-3 col-form-label form-label">Current Employment <i className="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Your notice period" /></label>
                  <div className="col-sm-9">
                  <div className="row">
                  <div className="col-sm-6">
                <div className="mb-1">
                <label className="input-label">Are you currently working? *</label>
                </div>
                {/* Radio Button Group */}
                <div className="btn-group col-md-12 btn-group-segment mb-4" role="group" aria-label="Work status radio button group">
                
                <input 
                    type="radio" 
                    className="btn-check" 
                    name="applyForJobWorkStatusBtnRadio" 
                    id="applyForJobWorkStatusYesBtnRadio" 
                    autoComplete="off"
                    checked={workStatus === 'yes'}
                    onChange={() => handleWorkStatusChange('yes')} 
                />
                <label className="btn btn-sm" htmlFor="applyForJobWorkStatusYesBtnRadio"><i className="bi-hand-thumbs-up me-1" /> Yes</label>
                <input 
                    type="radio" 
                    className="btn-check" 
                    name="applyForJobWorkStatusBtnRadio" 
                    id="applyForJobWorkStatusNoBtnRadio" 
                    autoComplete="off" 
                    checked={workStatus === 'no'} 
                    onChange={() => handleWorkStatusChange('no')} 
                />
                <label className="btn btn-sm" htmlFor="applyForJobWorkStatusNoBtnRadio"><i className="bi-hand-thumbs-down me-1" /> No</label>
                
              
                </div>
                </div>
                {
                  workStatus=="yes" && (
                    <div className="col-md-6" style={{marginTop: "5%"}}>
                    <div className="input-group">

                    <Select
                    className="form-control selectControl"
                  
                    options={noticePeriods}
                    value={getOptionFromValue([noticePeriod], noticePeriods)}
                    placeholder="Notice period"
                    styles={style}
                    onChange={
                      handleNoticePeriod
                    }
                    isSearchable={false}
                    isMulti={false}
                  />
                
                   
                    </div>
                    </div>
                  )
                }
               </div>
                   
                  </div>
               
                </div>
                
                <div className="row mb-4">
                  <label className="col-sm-3 col-form-label form-label">Prefered work method</label>
                  <div className="col-sm-9">
                    <div className="input-group input-group-md-down-break">
                      {/* Radio Check */}
                      <label className="form-control" htmlFor="preferedWorkMethod0">
                        <span className="form-check">
                          <input  onChange={(e)=>setPreferedWorkMethod("0")} checked={preferedWorkMethod=="0"} type="radio" className="form-check-input" name="genderTypeRadio" id="preferedWorkMethod0" />
                          <span className="form-check-label">Remote</span>
                        </span>
                      </label>
                      {/* End Radio Check */}
                      {/* Radio Check */}
                      <label className="form-control" htmlFor="preferedWorkMethod1">
                        <span className="form-check">
                          <input onChange={(e)=>setPreferedWorkMethod("1")} type="radio" checked={preferedWorkMethod=="1"}  className="form-check-input" name="genderTypeRadio" id="preferedWorkMethod1" />
                          <span className="form-check-label">Hybrid</span>
                        </span>
                      </label>
                      {/* End Radio Check */}
                      {/* Radio Check */}
                      <label className="form-control" htmlFor="preferedWorkMethod2">
                        <span className="form-check">
                          <input onChange={(e)=>setPreferedWorkMethod(" ")}  checked={preferedWorkMethod=="2"}  type="radio" className="form-check-input" name="genderTypeRadio" id="preferedWorkMethod2" />
                          <span className="form-check-label">On Site</span>
                        </span>
                      </label>
                      {/* End Radio Check */}
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <label htmlFor="emailLabel"  className="col-sm-3 col-form-label form-label">Cuurent Salary</label>
                  <div className="col-sm-9">
                  <div className="col-sm-6">
                    <input value={expectedRate} onChange={(e)=>setExpectedRate(e.target.value)} type="number" className="form-control" name="rate" id="emailLabel" placeholder="Rate per hour" aria-label="200" defaultValue={"0"} />
                    </div>
                  </div>
                  
                </div>
                <div className="row mb-4">
                  <label htmlFor="emailLabel"  className="col-sm-3 col-form-label form-label">Years of experience</label>
                  <div className="col-sm-9">
                <div className="col-md-6">
                    <div className="input-group">

                    <Select
                    className="form-control selectControl"
                  
                    options={experience}
                    value={getOptionFromValue([yearsOfExperience], experience)}
                    placeholder="Years of experience"
                    styles={style}
                    onChange={
                      handleExperience
                    }
                    isSearchable={false}
                    isMulti={false}
                  />
                
                   
                    </div>
                    </div>
                    </div>
                    </div>
                {/* Add Phone Input Field */}
                <div id="addPhoneFieldTemplate" style={{display: 'none', position: 'relative'}}>
                  <div className="input-group input-group-add-field">
                    <input type="text" className="js-input-mask-dynamic form-control" value={phone!="" ? phone:loggedInUser.mobileNumber} onChange={(e)=>setPhone(e.target.value)} data-name="additionlPhone" placeholder="+(00) 00 000 0000" aria-label="+(00) 00 000 0000" data-hs-mask-options="{
                         &quot;mask&quot;: &quot;+{0}(000)000-00-00&quot;
                       }" />
                    {/* Select */}
                    <div className="tom-select-custom">
                      <select className="js-select-dynamic form-select" data-name="additionlPhoneSelect" data-hs-tom-select-options="{
                              &quot;width&quot;: &quot;8rem&quot;,
                              &quot;hideSearch&quot;: true
                            }">
                        <option value="Mobile" selected>Mobile</option>
                        <option value="Home">Home</option>
                        <option value="Work">Work</option>
                        <option value="Fax">Fax</option>
                        <option value="Direct">Direct</option>
                      </select>
                    </div>
                    {/* End Select */}
                  </div>
                  <a className="js-delete-field input-group-add-field-delete" href="javascript:;">
                    <i className="bi-x-lg" />
                  </a>
                </div>
                {/* End Add Phone Input Field */}
                {/* Form */}
               
         
                {/* End Form */}

              </form>
            </div>
            {/* End Body */}
            {/* Footer */}
            {!isApply&&
              <div className="card-footer pt-0">
              <div className="d-flex justify-content-end gap-3">
                <a className="btn btn-white" href="javascript:;">Cancel</a>
                <a className="btn" onClick={()=>updateProfile()} style={{backgroundColor: '#FD2DC3', color: '#fff'}}>Save changes</a>
              </div>
            </div>

            }
            
            {/* End Footer */}
          </div>
          {/* End Card */}
          {
            !isApply && <div className="card">
            <div className="card-header border-bottom">
              <h4 className="card-header-title">Documents</h4>
            </div>
            {/* Body */}
            <div className="card-body">
              
              <div className="mb-4">
                {/* Check */}
                <div className="form-check-downloadCV">
                    <button onClick={handleCvClick}>Upload CV</button>
                    <input
                      ref={hiddenCVInput}
                      style={{ display:"none" }}
                      className="form-control inputfile ml-5"
                      type="file"
                      id="cv"
                      name="cv"
                      onChange={saveCV}
                    /> 
                  
                {/* End Check */}
              </div>
              { (cvUrl && cvUrl != "") && (
                      <a style={{float:"right"}} href={cvUrl} target="_blank">
                         
                        <label className="l-18-n" style={{margin: "10px"}}>Original CV</label>
                      </a>
                       )}     
                       
                  { cv!=undefined && (
                      <a style={{float:"right"}}  href={getURL()??""} target="_blank">
                         
                        <label className="l-18-n" style={{margin: "10px"}}>View CV</label>
                      </a>
                  )}

                    <a style={{float:"right"}} href={frakcvUrl} target="_blank">
                         
                        <label className="l-18-n" style={{margin: "10px"}}> Fraktional CV</label>
                      </a>
                </div>
            </div>
            {/* End Body */}
          </div>
          }
          
          <div className="card">
            <div className="card-header border-bottom">
              <h4 className="card-header-title">Competencies</h4>
            </div>
            {/* Body */}
              <div className="card-body">
              <div className="mb-4">
              <div className="row mb-4">
                  <label htmlFor="firstNameLabel" className="col-sm-3 col-form-label form-label">Your competencies <i className="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Displayed on public forums, such as Front." /></label>
                  <div className="col-sm-9">
                    <div className="input-group">
                    <Select
                    className="form-control selectControl"
                  
                    options={skills}
                    value={getOptionFromValue(keySkills, skills)}
                    placeholder="Search Skills"
                    styles={style}
                    onChange={
                      handleSkills
                    }
                    isSearchable={true}
                    isMulti={true}
                  />
                    </div>
                  </div>
                </div>
                
                
                  
                
              </div>
            </div>
            </div>
            
          <div className="card">
            <div className="card-header border-bottom">
              <h4 className="card-header-title">Work Experience</h4>
            </div>
            
            {/* Body */}
            <div className="card-body">
             
              <div className="mb-4">
                <ul className="step step-icon-sm">

                  {previousWorkExperience?.map((x,i)=>{
                    return   <li className="step-item">
                    <div className="step-content-wrapper">
                      <div className="step-avatar step-avatar-sm">
                        {/* <Image className="step-avatar-img" src={dropboxicon} alt="Image Description" /> */}
                        <InitialsAvatar name={x.employer??""} />
                      </div>
                      <div className="step-content">
                        <h5 className="step-title">{x.jobTitle}</h5>
                        <span className="d-block text-dark">{x.employer} - {x.location}</span>
                        <small className="d-block mb-4">{moment(x.startDate).format("MMMM YYYY")} to {moment(x.endDate).format("MMMM YYYY")}</small>
                        <p className="text-body mb-0">{x.responsibilities?.content}</p>
                      </div>
                      <span style={{margin:"10px"}} onClick={()=>{editWorkExperience(i)}}><i className="bi-pencil-square nav-icon"></i></span>
                          <span style={{margin:"10px"}} onClick={()=>{removeWorkExperience(i)}}>   <i className="bi-trash3 nav-icon" /> </span>
                      {/* <span onClick={()=>{removeWorkExperience(i)}}>Delete</span> */}
                    </div>
                  </li>
                  })}
                
                  
                </ul>
              </div>
              <a onClick={workModal} href="javascript:;" className="js-create-field form-link" style={{color: '#FD2DC3'}}>
                <i className="bi-plus-circle me-1" /> Add
              </a>
              {/* <button className="add" onClick={workModal}>Add</button> */}
           
              {workModalOpen
               &&  
               <Modal 
               classNames={{modal:"card"}}
                open={workModalOpen}
                closeOnOverlayClick={true}
                onClose={() => setWorkModalOpen(false)} 
                center
                >
                  <div>
                    <div className="card-body">
                      {/* Heading */}
                      <div className="text-center mb-5 mb-md-9">
                        <h2>Add your work experience</h2>
                      </div>
                      {/* Form */}
                      <form >
                        <div className="row gx-3">
                          <div className="col-sm-6">
                            {/* Form */}
                            <div className="mb-3">
                              <label className="form-label" htmlFor="hireUsFormTitle">Title</label>
                              <input 
                                type="text" 
                                className={`form-control form-control-lg ${wrk_jobTitleError ? 'err':''}`} 
                                name="Title" 
                                id="Title" 
                                placeholder="Title" 
                                aria-label="Title"
                                onChange={(e)=>{setWrk_jobTitle(e.target.value)}}
                                defaultValue={wrk_jobTitle}
                              />
                            </div>
                            {/* End Form */}
                          </div>
                          {/* End Col */}
                          <div className="col-sm-6">
                            {/* Form */}
                            <div className="mb-3">
                              <label className="form-label" htmlFor="CompanyName">Company Name</label>
                              <input 
                                type="text" 
                                className={`form-control form-control-lg ${wrk_employerError ? 'err': ''}`}
                                name="CompanyName" 
                                placeholder="Company Name" 
                                aria-label="Company Name" 
                                onChange={(e)=>{setWrk_employee(e.target.value)}}
                                defaultValue={wrk_employer}
                                />
                            </div>
                          </div>
                        </div>
   
                        <div className="row gx-3">
                          <div className="col-sm-6">
                            {/* Form */}
                            <div className="mb-3">
                              <label className="form-label" htmlFor="locationWork">Location</label>
                              <input 
                                type="text" 
                                className={`form-control form-control-lg ${wrk_locationError ? 'err':''}`}
                                name="LocationWork" 
                                placeholder="eg. Johannesburg" 
                                aria-label="Location"
                                onChange={(e)=>{setWrkLocation(e.target.value)}}
                                defaultValue={wrk_location}
                                // value={workData.Location}
                                // onChange={handleChange}
                                required
                              />
                            </div>
                            {/* End Form */}
                          </div>
                          {/* End Col */}
                          <div className="col-sm-6">
                            {/* Form */}
                            <div className="mb-3">
                              <label className="form-label" htmlFor="durationStartwork">Duration</label>
                              <div className="dateInputs">
                                <input 
                                  type="date" 
                                  className={`form-control form-control-lg ${wrk_startDateError ? 'err':''}`} 
                                  name="DurationStartwork" 
                                  id="DurationStartwork" 
                                  aria-label="Duration" 
                                  onChange={(e)=>{setWrk_startDate(e.target.value)}}
                                  defaultValue={wrk_startDate}
                                  // value={workData.DurationStart}
                                  // onChange={handleChange}
                                />to
                                <input 
                                  type="date" 
                                  className={`form-control form-control-lg ${wrk_endDateError ? 'err': ''}`}
                                  name="durationEndwork" 
                                  id="durationEndwork" 
                                  aria-label="Duration" 
                                  onChange={(e)=>{setWrkendDate(e.target.value)}}
                                  defaultValue={wrk_endDate}
                                  // value={workData.DurationEnd}
                                  // onChange={handleChange}
                                  />
                              </div>
                            </div>
                            {/* End Form */}
                          </div>
                          {/* End Col */}
                        </div>
                        {/* End Row */}
                        {/* Form */}
                        <div className="mb-3">
                          <label className="form-label" htmlFor="description">Details (responsibilities & key activities)</label>
                          <textarea 
                            className={`form-control form-control-lg ${wrk_responsibilitiesError ? 'err':''}`}
                            name="Description" 
                            id="Description" 
                            placeholder="Tell us about your ..." 
                            aria-label="description" 
                            rows={4}
                            value={wrk_responsibilities}
                            defaultValue={wrk_responsibilities}
                            onChange={(e) => setWrk_responsibilities(state => e.target.value)}
                            // value={workData.description}
                            // onChange={handleChange}
                            />
                        </div>
                        {/* End Form */}
                        <div className="d-grid">
                          <button type="submit"onClick={(e)=>{e.preventDefault(); addWorkExperience()}} className="btn btn-lg" style={{backgroundColor: '#FD2DC3', color: '#fff'}}>Save changes</button>
                        </div>
                      </form>
                      {/* End Form */}
                    </div>
                  </div>
               </Modal>}
            </div>
            {/* End Body */}
          </div>

          <div className="card">
            <div className="card-header border-bottom">
              <h4 className="card-header-title">Education</h4>
            </div>
            {/* Body */}
            <div className="card-body">
              
              <div className="mb-4">
              <ul className="step step-icon-sm">
                {education?.map((x,i)=>{

                  return <>

                      <li className="step-item">
                        <div className="step-content-wrapper">
                          <div className="step-avatar step-avatar-sm">
                          <InitialsAvatar name={x.instituteName??""} />
                            {/* <Image className="step-avatar-img" src={varsity} alt="Image Description" /> */}
                          </div>
                          <div className="step-content">
                            <h5 className="step-title">{ getLabelFromValue(
                              x.qualification,
                                degrees
                              )==""? x.qualification:
                              getLabelFromValue(
                                x.qualification,
                                  degrees
                                )

                            }</h5>
                            <span className="d-block text-dark">
                            { getLabelFromValue(
                              x.instituteName,
                                universities
                              ) ==""? x.instituteName
                              :getLabelFromValue(
                                x.instituteName,
                                  universities
                                )
                            }

                            </span>
                            <small className="d-block">{x.dateCompleted}</small>
                          </div>
                          <span style={{margin:"10px"}} onClick={()=>{editEducationInfo(i)}}><i className="bi-pencil-square nav-icon"></i></span>
                          <span style={{margin:"10px"}} onClick={()=>{removeEducation(i)}}>   <i className="bi-trash3 nav-icon" /> </span>
                        </div>
                      </li>

                  </>
                }
               )

                }
              </ul>
              <a onClick={educationModal} href="javascript:;" className="js-create-field form-link" style={{color: '#FD2DC3'}}>
                <i className="bi-plus-circle me-1" /> Add
              </a>
              </div>
              {EducationModalOpen
               &&  
               <Modal 
               classNames={{modal:"card min-modal"}}
                open={EducationModalOpen} 
                closeOnOverlayClick={true} 
                onClose={() => setEducationModalOpen(false)} 
                center
                >
                   <div >
                    <div className="card-body">
                      {/* Heading */}
                      <div className="text-center mb-5 mb-md-9">
                        <h2>Add education details</h2>
                      </div>
                      {/* Form */}
                      <form>
                      <div className="row gx-3">
                          <div className="col-sm-12">
                            {/* Form */}
                            <div className="mb-3">
                              <label className="form-label" htmlFor="hireUsFormTitle">Certificate</label>
                              <input 
                                type="text" 
                                className={`form-control form-control-lg ${edu_QualificationError ? 'err':''}`} 
                                name="Certificate" 
                                id="certifficate" 
                                placeholder="eg. Master's degree in Computer Software Engineering" 
                                aria-label="Certificate" 
                                onChange={(e)=>{setEduQualification(e.target.value)}}
                                defaultValue={edu_Qualification}
                                // value={educationData.certificate}
                                // onChange={handleChangeEducation}
                              />

                              {/* <Select
                                className={`form-control form-control-lg ${edu_QualificationError ? 'err':''}`} 
                                  options={degrees as any}
                                  placeholder="Search Degree / Diploma"
                                  styles={style}
                                  onChange={handleSelectQualification}
                                  isSearchable={true}
                                  
                                /> */}

                            </div>
                            {/* End Form */}
                          </div>
                          {/* End Col */}
                        
                          {/* End Col */}
                        </div>



                        <div className="row gx-3">
                  
                          {/* End Col */}
                          <div className="col-sm-8">
                            {/* Form */}
                            <div className="mb-3">
                              <label className="form-label" htmlFor="hireUsFormCompanyName">Institute</label>
                              <input 
                                type="text" 
                                className={`form-control form-control-lg ${edu_InsituteNameError ? 'err':''}`} 
                                name="SchoolName" 
                                id="schoolName" 
                                placeholder="Institute Name" 
                                aria-label="Institute Name" 
                                onChange={(e)=>{setEduInstituteName(e.target.value)}}
                                defaultValue={edu_InsituteName}
                                // value={educationData.schoolName}
                                // onChange={handleChangeEducation}  
                              />
                                {/* <Select
                                className={`form-control form-control-lg ${edu_InsituteNameError ? 'err':''}`} 
                                  options={universities as any}
                                  placeholder="Search Institute"
                                  styles={style}
                                  onChange={handleSelectInstitute}
                                  isSearchable={true}
                                /> */}
                            </div>
                            {/* End Form */}
                          </div>
                          <div className="col-sm-4">
                            {/* Form */}
                            <div className="mb-3">
                              <label className="form-label" htmlFor="hireUsFormDuation">Completion date</label>
                              <div className="dateInputs">
                                <input 
                                  type="date" 
                                  onChange={(e)=>{setEduCompletionDate(e.target.value)}}
                                  className={`form-control form-control-lg ${edu_completionDateError ? 'err':''}`}
                                  name="durationStart" 
                                  id="durationStartEdu" 
                                  defaultValue={edu_completionDate}
                                  aria-label="durationEdu" 
                                  // value={educationData.DurationStartedu}
                                  // onChange={handleChangeEducation}
                                  />
                               
                              </div>
                            </div>
                            {/* End Form */}
                          </div>
                          {/* End Col */}
                        </div>
                        {/* End Row */}
                        
                        {/* End Row */}
                        <div className="d-grid">
                          <button  onClick={(e)=>{e.preventDefault(); addEducation()}} className="btn btn-lg" style={{backgroundColor: '#FD2DC3', color: '#fff'}}>Save changes</button>
                        </div>
                      </form>
                      {/* End Form */}
                    </div>
                  </div>
               </Modal>
               
               }
            </div>
            {/* End Body */}
          </div>

       
            {!isApply&&

               <div className="card-footer pt-0">
               <div className="d-flex justify-content-end gap-3">
                 <a className="btn btn-white" href="javascript:;">Cancel</a>
                 <a className="btn" onClick={()=>updateProfile()} style={{backgroundColor: '#FD2DC3', color: '#fff'}}>Save changes</a>
               </div>
             </div>
            }
               {isApply&&
            
            <div className="card-footer pt-0">
            <div className="d-flex justify-content-end gap-3">
              <a className="btn" onClick={()=>completeApplication()} style={{backgroundColor: '#FD2DC3', color: '#fff', width:"100%"}}>Complete application</a>
            </div>
          </div>
         }
         
          </>
          }

          
          {/* Card */}
          {menuItem==2 &&
          <>
        
          <div className="card" data-aos="fade-right">
            <div className="card-header border-bottom">
              <h4 className="card-header-title">Update your password</h4>
            </div>
            {/* Body */}
            {updatePasswordModal==true
               &&  
               <Modal 
               classNames={{modal:"card"}}
                open={updatePasswordModal}
                closeOnOverlayClick={true}
                onClose={() => setUpdatePasswordModal(false)} 
                center
                >
                  <div>
                    <div className="card-body">
                      {/* Heading */}
                      <div className="text-center mb-5 mb-md-9" style={{marginBottom: "0px !important"}}>
                        <h2>Update your password</h2>
                      </div>
                      <div className="row gx-3">
                          <div className="col-sm-12">
                            {/* Form */}
                            <div className="mb-3">
                              {/* <label className="form-label" htmlFor="hireUsFormTitle">Certificate</label> */}
                              <VerifyOtp email = {loggedInUser?.email} onClose={()=>{}} />

                              {/* <Select
                                className={`form-control form-control-lg ${edu_QualificationError ? 'err':''}`} 
                                  options={degrees as any}
                                  placeholder="Search Degree / Diploma"
                                  styles={style}
                                  onChange={handleSelectQualification}
                                  isSearchable={true}
                                  
                                /> */}

                            </div>
                            {/* End Form */}
                          </div>
                          {/* End Col */}
                        
                          {/* End Col */}
                        </div>
                      {/* Form */}
                      <form >
                      
                        {/* End Form */}
                        {/* <div className="d-grid">
                           <button type="submit"onClick={(e)=>{e.preventDefault(); setUpdatePasswordModal(false)}} className="btn btn-lg" style={{backgroundColor: '#FD2DC3', color: '#fff'}}>Cancel</button>
                        </div> */}
                      </form>
                      {/* End Form */}
                    </div>
                  </div>
               </Modal>}
            <div className="card-body">
       
            <div className="card-body">
              <p className="card-text">When you update your password, an OTP will be sent to {loggedInUser?.email}.</p>
              <div className="mb-4">
                {/* Check */}
                <div className="form-check">
                  <input type="checkbox"  onChange={()=>setUpdatePasswordAccept(!updatePasswordAccept)}  className="form-check-input" id="updatePasswordCheckbox" />
                  <label className="form-check-label" htmlFor="updatePasswordCheckbox">Confirm that I want to update my password.</label>
                </div>
                {/* End Check */}
              </div>
              <div className="d-flex justify-content-end">
              <button style={{width:"100%"}} disabled={updatePasswordAccept!=true} onClick={()=> setUpdatePasswordModal(true)} className="btn btn-primary">Update your password</button>
              </div>

           
            </div>
            {/* End Body */}
          </div>
          </div>

          <div className="card" data-aos="fade-left">
            <div className="card-header border-bottom">
              <h4 className="card-header-title">Delete your account</h4>
            </div>
            {/* Body */}
            {deleteModalOpen==true
               &&  
               <Modal 
               classNames={{modal:"card"}}
                open={workModalOpen}
                closeOnOverlayClick={true}
                onClose={() => setDeleteModalOpen(false)} 
                center
                >
                  <div>
                    <div className="card-body">
                      {/* Heading */}
                      <div className="text-center mb-5 mb-md-9">
                        <h2>Delete your profile</h2>
                      </div>
                      {/* Form */}
                      <form >
                      
                        {/* End Form */}
                        <div className="d-grid">
                          <button type="submit"onClick={(e)=>{e.preventDefault(); deleteProfile()}} className="btn btn-lg" style={{backgroundColor: '#FD2DC3', color: '#fff'}}>Confirm</button>
                          <button type="submit"onClick={(e)=>{e.preventDefault(); setDeleteModalOpen(false)}} className="btn btn-lg" style={{backgroundColor: '#FD2DC3', color: '#fff'}}>Cancel</button>
                        </div>
                      </form>
                      {/* End Form */}
                    </div>
                  </div>
               </Modal>}
            <div className="card-body">
              <p className="card-text">When you delete your account, you lose access to Fraktional account services, and we permanently delete your personal data. You can cancel the deletion for 14 days.</p>
              <div className="mb-4">
                {/* Check */}
                <div className="form-check">
                  <input type="checkbox"  onChange={()=>setDeleteProfileAccept(!deleteProfileAccept)}  className="form-check-input" id="deleteAccountCheckbox" />
                  <label className="form-check-label" htmlFor="deleteAccountCheckbox">Confirm that I want to delete my account.</label>
                </div>
                {/* End Check */}
              </div>
              <div className="d-flex justify-content-end">
                <button onClick={()=> deleteProfile()} disabled={deleteProfileAccept!=true} className="btn btn-danger">Delete</button>
              </div>
            </div>
            {/* End Body */}
          </div>
          </>
          }
          {/* End Card */}
          
        </div>
      </div>
      {/* End Col */}
    </div>
    {/* End Row */}
  </div>
</main>
</>
    )
}

export default dynamic (() => Promise.resolve(developerOverview), {ssr: false})