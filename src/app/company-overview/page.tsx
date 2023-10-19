'use client'
import Image from "next/image";
import img9 from "../../assets/img/160x160/img9.jpg";
import topVendor from "../../assets/svg/illustrations/top-vendor.svg";
import './DevOverview.scss';

import dropboxicon from "../../assets/svg/brands/dropbox-icon.svg";
import mailchimpicon from "../../assets/svg/brands/mailchimp-icon.svg";
import googleicon from "../../assets/svg/brands/google-icon.svg";
import varsity from "../../assets/svg/brands/the-university-of-manchester.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IDeveloperProfile, IEducationInformation, IWorkExperience } from "../interfaces/user";
import { CreateDeveloperProfile, GetDeveloperProfile, GetStaffInfo, UpdateDeveloperProfile } from "../endpoints/api";
import Cookies from 'universal-cookie'; // Import the libraryconst cookies = new Cookies(); 
import dynamic from "next/dynamic";
const cookies = new Cookies(); // Create an instance of Cookies



function developerOverview() {
  const [workModalOpen, setWorkModalOpen] = useState(false);
  const [EducationModalOpen, setEducationModalOpen] = useState(false);

  //your info form
  const [information, setInformation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [_user, setUser] = useState("");
  const [phone, setPhone] = useState("");
  const [currentProfile, setCurrentProfile] = useState<IDeveloperProfile>();


//company info
const [companyName, setCompanyName] = useState("");
const [companyEmail, setCompanyEmail] = useState("");
const [companyPhone, setCompanyPhone] = useState("");
const [companyAbout, setCompanyAbout] = useState("");


  const loggedInUser = cookies.get("fraktional-user")??"{}";
  const [existingUser, setExistingUser] = useState(false);

  function workModal(): void {
    setWorkModalOpen(true);
  }

  function educationModal(): void {
    setEducationModalOpen(true);
  }

async function _GetCompanyInfo(id:string){

  var res = await GetStaffInfo(id) as any;
  if(res.data){
  setCurrentProfile(res.data);

  // setInformation(res?.data?.personalInformation?.about);
  setFirstName(res?.data?.user.firstName);
  setSurname(res?.data?.user.surname);
  setPhone(res?.data?.user.mobileNumber);
  setUser(res?.data?.user); // change

  setExistingUser(true);
  }

}




useEffect(() => {
  //check url and setActive
  
  loggedInUser._id&& _GetCompanyInfo(loggedInUser?._id);

   
  }, []);



  async function updateProfile(){
    let _id = toast.loading("Updating profile..", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  
    const payload = {
      
    } as IDeveloperProfile

    if(existingUser){
      debugger;
      const res = await UpdateDeveloperProfile(payload, loggedInUser._id);
    }else{
      const res = await CreateDeveloperProfile(payload);
    }
    
    toast.update(_id, {
      render: "Profile updated successfully",
      type: "success",
      isLoading: false,
      autoClose: 2000,
    });
  }

  
  
    return (
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
                    <Image className="avatar-img" src={img9} alt="Image Description" />
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
                    <a className="nav-link active" style={{cursor: 'pointer'}}>
                      <i className="bi-person-badge nav-icon" /> Company info
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " style={{pointerEvents: 'none', cursor: 'none', opacity: '.5'}}>
                      <i className="bi-shield-shaded nav-icon" /> Security
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
        <div className="d-grid gap-3 gap-lg-5">
          {/* Card */}
          <div className="card">
            <div className="card-header border-bottom">
              <h4 className="card-header-title">Your info</h4>
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
                        <Image id="avatarImg" className="avatar-img" src={img9} alt="Image Description" />
                      </label>
                      <div className="d-grid d-sm-flex gap-2 ms-4">
                        <div className="form-attachment-btn btn btn-sm" style={{backgroundColor: '#FD2DC3', color: '#fff'}}>Upload photo
                          <input type="file" className="js-file-attach form-attachment-btn-label" id="avatarUploader" data-hs-file-attach-options="{
                                &quot;textTarget&quot;: &quot;#avatarImg&quot;,
                                &quot;mode&quot;: &quot;image&quot;,
                                &quot;targetAttr&quot;: &quot;src&quot;,
                                &quot;resetTarget&quot;: &quot;.js-file-attach-reset-img&quot;,
                                &quot;resetImg&quot;: &quot;./assets/img/160x160/img1.jpg&quot;
                                &quot;allowTypes&quot;: [&quot;.png&quot;, &quot;.jpeg&quot;, &quot;.jpg&quot;]
                             }" />
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
                      <input type="text" onChange={(e)=> setFirstName(e.target.value)} defaultValue={firstName!="" ? firstName: loggedInUser.firstName} className="form-control" name="firstName" id="firstNameLabel" placeholder="Enter first name" aria-label="Clarice" />
                      {/* <small>This field is required</small> */}
                      <input type="text" onChange={(e)=> setSurname(e.target.value)} defaultValue={surname!="" ?surname: loggedInUser.surname} className="form-control" name="lastName" id="lastNameLabel" placeholder="Enter last name" aria-label="Boone"  />
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
                          {/* <option value="Home">Home</option>
                          <option value="Work">Work</option>
                          <option value="Fax">Fax</option>
                          <option value="Direct">Direct</option> */}
                        </select>
                      </div>
                      {/* End Select */}
                    </div>
                    {/* Container For Input Field */}
                    <div id="addPhoneFieldContainer" />
                    {/* <a href="javascript:;" className="js-create-field form-link">
                      <i className="bi-plus-circle me-1" /> Add phone
                    </a> */}
                  </div>
                </div>
                {/* End Form */}
                {/* Add Phone Input Field */}
                <div id="addPhoneFieldTemplate" style={{display: 'none', position: 'relative'}}>
                  <div className="input-group input-group-add-field">
                    <input type="text" className="js-input-mask-dynamic form-control" value={phone!="" ? phone:loggedInUser.mobileNumber} onChange={(e)=>setPhone(e.target.value)} data-name="additionlPhone" placeholder="+x(xxx)xxx-xx-xx" aria-label="+x(xxx)xxx-xx-xx" data-hs-mask-options="{
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
                {/* Form */}
              
               
                {/* End Form */}
              </form>
            </div>
            {/* End Body */}
            {/* Footer */}
           
            {/* End Footer */}
          </div>
          {/* End Card */}
          <div className="card">
            <div className="card-header border-bottom">
              <h4 className="card-header-title">Company info</h4>
            </div>
            {/* Body */}
            <div className="card-body">
              <form>
                {/* Form */}
                <div className="row mb-4">
                  <label className="col-sm-3 col-form-label form-label">Company logo</label>
                  <div className="col-sm-9">
                    {/* Media */}
                    <div className="d-flex align-items-center">
                      {/* Avatar */}
                      <label className="avatar avatar-xl avatar-circle" htmlFor="avatarUploader">
                        <Image id="avatarImg" className="avatar-img" src={img9} alt="Image Description" />
                      </label>
                      <div className="d-grid d-sm-flex gap-2 ms-4">
                        <div className="form-attachment-btn btn btn-sm" style={{backgroundColor: '#FD2DC3', color: '#fff'}}>Upload photo
                          <input type="file" className="js-file-attach form-attachment-btn-label" id="avatarUploader" data-hs-file-attach-options="{
                                &quot;textTarget&quot;: &quot;#avatarImg&quot;,
                                &quot;mode&quot;: &quot;image&quot;,
                                &quot;targetAttr&quot;: &quot;src&quot;,
                                &quot;resetTarget&quot;: &quot;.js-file-attach-reset-img&quot;,
                                &quot;resetImg&quot;: &quot;./assets/img/160x160/img1.jpg&quot;,
                                &quot;allowTypes&quot;: [&quot;.png&quot;, &quot;.jpeg&quot;, &quot;.jpg&quot;]
                             }" />
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
                  <label htmlFor="firstNameLabel" className="col-sm-3 col-form-label form-label">Company name <i className="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Displayed on public forums, such as Front." /></label>
                  <div className="col-sm-9">
                    <div className="input-group">
                      <input type="text" onChange={(e)=> setCompanyName(e.target.value)} value={companyName} defaultValue={ companyName} className="form-control" name="firstName" id="firstNameLabel" placeholder="Enter company name" aria-label="Clarice" />
                      {/* <small>This field is required</small> */}
                      {/* <input type="text" onChange={(e)=> setSurname(e.target.value)} defaultValue={surname!="" ?surname: loggedInUser.surname} className="form-control" name="lastName" id="lastNameLabel" placeholder="Enter last name" aria-label="Boone"  /> */}
                    </div>
                  </div>
                </div>
                {/* End Form */}
                {/* Form */}
                {/* <div className="row mb-4">
                  <label htmlFor="emailLabel"  className="col-sm-3 col-form-label form-label">Company Email</label>
                  <div className="col-sm-9">
                    <input type="email" readOnly className="form-control" name="email" id="emailLabel" onChange={(e)=>{setCompanyName(e.target.value)}} placeholder="Enter company email" aria-label="clarice@example.com" defaultValue={companyName} value={companyName} />
                  </div>
                </div> */}
                {/* End Form */}
                {/* Form */}
                <div className="js-add-field row mb-4" data-hs-add-field-options="{
                    &quot;template&quot;: &quot;#addPhoneFieldTemplate&quot;,
                    &quot;container&quot;: &quot;#addPhoneFieldContainer&quot;,
                    &quot;defaultCreated&quot;: 0
                  }">
                  <label htmlFor="phoneLabel" className="col-sm-3 col-form-label form-label">Company Phone <span className="form-label-secondary">(Optional)</span></label>
                  <div className="col-sm-9">
                    <div className="input-group">
                      <input type="text" className="js-input-mask form-control" name="phone" id="phoneLabel" placeholder="+x(xx)xxx-xxxx" aria-label="+x(xxx)xxx-xx-xx" value={companyPhone} onChange={(e)=>setCompanyPhone(e.target.value)} defaultValue={companyPhone} data-hs-mask-options="{
                           &quot;mask&quot;: &quot;+{0}(000)000-00-00&quot;
                         }" />
                      {/* Select */}
                      <div className="tom-select-custom">
                        <select className="js-select form-select" name="phoneSelect" data-hs-tom-select-options="{
                              &quot;width&quot;: &quot;8rem&quot;,
                              &quot;hideSearch&quot;: true
                            }">
                          <option value="Mobile" selected>Work</option>
                          {/* <option value="Home">Home</option>
                          <option value="Work">Work</option>
                          <option value="Fax">Fax</option>
                          <option value="Direct">Direct</option> */}
                        </select>
                      </div>
                      {/* End Select */}
                    </div>
                    {/* Container For Input Field */}
                    <div id="addPhoneFieldContainer" />
                    {/* <a href="javascript:;" className="js-create-field form-link">
                      <i className="bi-plus-circle me-1" /> Add phone
                    </a> */}
                  </div>
                </div>
                {/* End Form */}
                {/* Add Phone Input Field */}
                <div id="addPhoneFieldTemplate" style={{display: 'none', position: 'relative'}}>
                  <div className="input-group input-group-add-field">
                    <input type="text" className="js-input-mask-dynamic form-control" value={phone!="" ? phone:loggedInUser.mobileNumber} onChange={(e)=>setPhone(e.target.value)} data-name="additionlPhone" placeholder="+x(xxx)xxx-xx-xx" aria-label="+x(xxx)xxx-xx-xx" data-hs-mask-options="{
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
                {/* Form */}
                {/* <div className="row mb-4">
                  <label className="col-sm-3 col-form-label form-label">About the company</label>
                  <div className="col-sm-9">
                  
                    <div className="quill-custom">
                      <div className="js-quill" style={{height: '15rem'}}>
                        <textarea onChange={(e)=>setCompanyAbout(e.target.value)} name="summary" defaultValue={companyAbout} id="textarea" placeholder="Enter information about the company" style={{height: '100%', width: '100%', padding: '10px'}}></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                */}
                {/* End Form */}
              </form>
            </div>
            {/* End Body */}
            {/* Footer */}
           
            {/* End Footer */}
          </div>
          <div className="card-footer pt-0">
                <div className="d-flex justify-content-end gap-3">
                  <a className="btn btn-white" href="javascript:;">Cancel</a>
                  <a className="btn" onClick={()=>updateProfile()} style={{backgroundColor: '#FD2DC3', color: '#fff'}}>Save changes</a>
                </div>
              </div>
          
          {/* Card */}
          <div className="card">
            <div className="card-header border-bottom">
              <h4 className="card-header-title">Delete your account</h4>
            </div>
            {/* Body */}
            <div className="card-body">
              <p className="card-text">When you delete your account, you lose access to Front account services, and we permanently delete your personal data. You can cancel the deletion for 14 days.</p>
              <div className="mb-4">
                {/* Check */}
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="deleteAccountCheckbox" />
                  <label className="form-check-label" htmlFor="deleteAccountCheckbox">Confirm that I want to delete my account.</label>
                </div>
                {/* End Check */}
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-danger">Delete</button>
              </div>
            </div>
            {/* End Body */}
          </div>
          {/* End Card */}
          
        </div>
      </div>
      {/* End Col */}
    </div>
    {/* End Row */}
  </div>
</main>
    )
}



export default dynamic (() => Promise.resolve(developerOverview), {ssr: false})