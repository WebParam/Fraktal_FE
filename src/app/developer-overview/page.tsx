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
import { IDeveloperProfile, IEducationInformation, IWorkExperience } from "../interfaces/user";
import { GetDeveloperProfile, UpdateDeveloperProfile } from "../endpoints/api";


function developerOverview() {
  const [workModalOpen, setWorkModalOpen] = useState(false);
  const [EducationModalOpen, setEducationModalOpen] = useState(false);

  //form
  const [information, setInformation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");

  const [currentJob, setCurrentJob] = useState("");
  const [previousWorkExperience, setPreviousWorkExperience] = useState<IWorkExperience[]>([]);
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [education, setEducation] = useState<IEducationInformation[]>([]);
  const [keyCourses, setKeyCourses] = useState("");
  const [cvUrl, setCVUrl] = useState("");
  const [_user, setUser] = useState("");
  const [preferedWorkMethod, setPreferedWorkMethod] = useState("");
  const [phone, setPhone] = useState("");
  const [currentProfile, setCurrentProfile] = useState<IDeveloperProfile>();
  const [gender, setGender] = useState(0);
  function workModal(): void {
    setWorkModalOpen(true);
  }

  function educationModal(): void {
    setEducationModalOpen(true);
  }

async function _GetDeveloperProfile(id:string){

  var res = await GetDeveloperProfile(id) as any;
  setCurrentProfile(res.data);

  setInformation(res?.data?.information);
  setFirstName(res?.data?.firstName);
  setSurname(res?.data?.surname);
  setCurrentJob(res?.data?.currentJob);
  setPreviousWorkExperience(res?.data?.previousWorkExperience);
  setYearsOfExperience(res?.data?.yearsOfExperience);
  setEducation(res?.data?.education);
  setKeyCourses(res?.data?.keyCourses);
  setCVUrl(res?.data?.cvUrl);
  setUser(res?.data?.user); // change
  setPreferedWorkMethod(res?.data?.preferedWorkMethod);

}


function addWorkExperience(){

}

function addEducation(){

}

useEffect(() => {
  //check url and setActive
 _GetDeveloperProfile("")
  
  }, []);



  async function updateProfile(){

    const payload = {
      firstName:firstName,
      surname:surname,
      information: information, 
      currentJob:currentJob,
      previousWorkExperience:[],
      yearsOfExperience:yearsOfExperience,
      education:[], 
      keySkills:"", 
      keyCourses:keyCourses,
      cvUrl:cvUrl,
      personalInformation:"",
      _user: "",
      preferedWorkMethod: preferedWorkMethod
    } as IDeveloperProfile

    const res = await UpdateDeveloperProfile(payload);

  }
  
    return (
    <main id="content" role="main" className="bg-light">
  {/* Breadcrumb */}
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
              <li className="breadcrumb-item active" aria-current="page">Personal Info</li>
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
                  <h4 className="card-title mb-0">Natalie Curtis</h4>
                  <p className="card-text small">natalie@example.com</p>
                </div>
                {/* End Avatar */}
                {/* Nav */}
                <span className="text-cap">Account</span>
                {/* List */}
                <ul className="nav nav-sm nav-tabs nav-vertical mb-4">
                  <li className="nav-item">
                    <a className="nav-link active" href="./account-overview.html">
                      <i className="bi-person-badge nav-icon" /> Personal info
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="./account-security.html">
                      <i className="bi-shield-shaded nav-icon" /> Security
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="./account-notifications.html">
                      <i className="bi-bell nav-icon" /> Notifications
                      <span className="badge bg-soft-dark text-dark rounded-pill nav-link-badge">1</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="./account-preferences.html">
                      <i className="bi-sliders nav-icon" /> Preferences
                    </a>
                  </li>
                </ul>
                {/* End List */}
                <span className="text-cap">Shopping</span>
                {/* List */}
                <ul className="nav nav-sm nav-tabs nav-vertical mb-4">
                  <li className="nav-item">
                    <a className="nav-link " href="./account-orders.html">
                      <i className="bi-basket nav-icon" /> Your orders
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="./account-wishlist.html">
                      <i className="bi-heart nav-icon" /> Wishlist
                      <span className="badge bg-soft-dark text-dark rounded-pill nav-link-badge">2</span>
                    </a>
                  </li>
                </ul>
                {/* End List */}
                <span className="text-cap">Billing</span>
                {/* List */}
                <ul className="nav nav-sm nav-tabs nav-vertical">
                  <li className="nav-item">
                    <a className="nav-link " href="./account-payments.html">
                      <i className="bi-credit-card nav-icon" /> Payments
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="./account-address.html">
                      <i className="bi-geo-alt nav-icon" /> Address
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="./account-teams.html">
                      <i className="bi-people nav-icon" /> Teams
                      <span className="badge bg-soft-dark text-dark rounded-pill nav-link-badge">+2 new users</span>
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
      {/* End Col */}
      <div className="col-lg-9">
        <div className="d-grid gap-3 gap-lg-5">
          {/* Card */}
          <div className="card">
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
                  <label htmlFor="firstNameLabel" className="col-sm-3 col-form-label form-label">Full name <i className="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Displayed on public forums, such as Front." /></label>
                  <div className="col-sm-9">
                    <div className="input-group">
                      <input type="text" onChange={(e)=> setFirstName(e.target.value)} className="form-control" name="firstName" id="firstNameLabel" placeholder="Clarice" aria-label="Clarice" defaultValue="Natalie" />
                      <input type="text" onChange={(e)=> setSurname(e.target.value)} className="form-control" name="lastName" id="lastNameLabel" placeholder="Boone" aria-label="Boone" defaultValue="Curtis" />
                    </div>
                  </div>
                </div>
                {/* End Form */}
                {/* Form */}
                <div className="row mb-4">
                  <label htmlFor="emailLabel"  className="col-sm-3 col-form-label form-label">Email</label>
                  <div className="col-sm-9">
                    <input type="email" readOnly className="form-control" name="email" id="emailLabel" placeholder="clarice@example.com" aria-label="clarice@example.com" defaultValue="natalie@example.com" />
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
                      <input type="text" className="js-input-mask form-control" name="phone" id="phoneLabel" placeholder="+x(xxx)xxx-xx-xx" aria-label="+x(xxx)xxx-xx-xx" defaultValue="+1(605)5618929" data-hs-mask-options="{
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
                    <a href="javascript:;" className="js-create-field form-link">
                      <i className="bi-plus-circle me-1" /> Add phone
                    </a>
                  </div>
                </div>
                {/* End Form */}
                {/* Add Phone Input Field */}
                <div id="addPhoneFieldTemplate" style={{display: 'none', position: 'relative'}}>
                  <div className="input-group input-group-add-field">
                    <input type="text" className="js-input-mask-dynamic form-control" onChange={(e)=>setPhone(e.target.value)} data-name="additionlPhone" placeholder="+x(xxx)xxx-xx-xx" aria-label="+x(xxx)xxx-xx-xx" data-hs-mask-options="{
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
                <div className="row mb-4">
                  <label className="col-sm-3 col-form-label form-label">Gender</label>
                  <div className="col-sm-9">
                    <div className="input-group input-group-md-down-break">
                      {/* Radio Check */}
                      <label className="form-control" htmlFor="genderTypeRadio1">
                        <span className="form-check">
                          <input  onChange={(e)=>setGender(0)}  type="radio" className="form-check-input" name="genderTypeRadio" id="genderTypeRadio1" />
                          <span className="form-check-label">Male</span>
                        </span>
                      </label>
                      {/* End Radio Check */}
                      {/* Radio Check */}
                      <label className="form-control" htmlFor="genderTypeRadio2">
                        <span className="form-check">
                          <input onChange={(e)=>setGender(1)} type="radio" className="form-check-input" name="genderTypeRadio" id="genderTypeRadio2" defaultChecked />
                          <span className="form-check-label">Female</span>
                        </span>
                      </label>
                      {/* End Radio Check */}
                      {/* Radio Check */}
                      <label className="form-control" htmlFor="genderTypeRadio3">
                        <span className="form-check">
                          <input onChange={(e)=>setGender(2)}   type="radio" className="form-check-input" name="genderTypeRadio" id="genderTypeRadio3" />
                          <span className="form-check-label">Other</span>
                        </span>
                      </label>
                      {/* End Radio Check */}
                    </div>
                  </div>
                </div>
                {/* End Form */}
                {/* Form */}
                <div className="row mb-4">
                  <label className="col-sm-3 col-form-label form-label">Summary</label>
                  <div className="col-sm-9">
                    {/* Quill */}
                    <div className="quill-custom">
                      <div className="js-quill" style={{height: '15rem'}}>
                        <textarea onChange={(e)=>setInformation(e.target.value)} name="summary" id="textarea" placeholder="enter summary" style={{height: '100%', width: '100%', padding: '10px'}}></textarea>
                      </div>
                    </div>
                    {/* End Quill */}
                  </div>
                </div>
               
                {/* End Form */}
              </form>
            </div>
            {/* End Body */}
            {/* Footer */}
            <div className="card-footer pt-0">
              <div className="d-flex justify-content-end gap-3">
                <a className="btn btn-white" href="javascript:;">Cancel</a>
                <a className="btn" href="javascript:;" style={{backgroundColor: '#FD2DC3', color: '#fff'}}>Save changes</a>
              </div>
            </div>
            {/* End Footer */}
          </div>
          {/* End Card */}
          <div className="card">
            <div className="card-header border-bottom">
              <h4 className="card-header-title">Documents</h4>
            </div>
            {/* Body */}
            <div className="card-body">
              
              <div className="mb-4">
                {/* Check */}
                <div className="form-check-downloadCV">
                    <button >DOWNLOAD CV</button>
                </div>
                {/* End Check */}
              </div>
            </div>
            {/* End Body */}
          </div>
          <div className="card">
            <div className="card-header border-bottom">
              <h4 className="card-header-title">Work Experience</h4>
            </div>
            {/* Body */}
            <div className="card-body">
              
              <div className="mb-4">
                <ul className="step step-icon-sm">

                  {previousWorkExperience.map(x=>{
                    return   <li className="step-item">
                    <div className="step-content-wrapper">
                      <div className="step-avatar step-avatar-sm">
                        <Image className="step-avatar-img" src={dropboxicon} alt="Image Description" />
                      </div>
                      <div className="step-content">
                        <h5 className="step-title">{x.jobTitle}</h5>
                        <span className="d-block text-dark">{x.employer} - {x.location}</span>
                        <small className="d-block mb-4">{x.startDate} to {x.endDate}</small>
                        <p className="text-body mb-0">{x.responsibilities?.content}.</p>
                      </div>
                    </div>
                  </li>
                  })}
                
                  {/* <li className="step-item">
                    <div className="step-content-wrapper">
                      <div className="step-avatar step-avatar-sm">
                        <Image className="step-avatar-img" src={mailchimpicon} alt="Image Description" />
                      </div>
                      <div className="step-content">
                        <h5 className="step-title">Senior Software Engineer</h5>
                        <span className="d-block text-dark">Mailchimp - London</span>
                        <small className="d-block mb-4">November 2014 to December 2016</small>
                        <p className="text-body mb-0">This is an excellent company and they reward their employees. It's becoming a big company but it's still private, so the culture is as good as it gets at 1,000+ employees if you ask me. Managers are still adapting to the growth I think, but everyone has to. Great place to work.</p>
                      </div>
                    </div>
                  </li>
                  <li className="step-item">
                    <div className="step-content-wrapper">
                      <div className="step-avatar step-avatar-sm">
                        <Image className="step-avatar-img" src={googleicon} alt="Image Description" />
                      </div>
                      <div className="step-content">
                        <h5 className="step-title">Junior Software Engineer</h5>
                        <span className="d-block text-dark">Google - London</span>
                        <small className="d-block mb-4">January 2014 to November 2014</small>
                        <p className="text-body mb-0">Work in Google is one of the beautiful experience I can do in my entire life. There are a lot of interesting thing to learn and manager respect your time and your personality.</p>
                      </div>
                    </div>
                  </li> */}
                </ul>
              </div>

              <button className="add" onClick={workModal}>Add</button>
              {workModalOpen
               &&  
               <Modal 
                open={workModalOpen}
                closeOnOverlayClick={true}
                onClose={() => setWorkModalOpen(false)} 
                center
                >
                  Modal content for work experience
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
                {education.map(x=>{

                  return <>

                      <li className="step-item">
                        <div className="step-content-wrapper">
                          <div className="step-avatar step-avatar-sm">
                            <Image className="step-avatar-img" src={varsity} alt="Image Description" />
                          </div>
                          <div className="step-content">
                            <h5 className="step-title">{x.qualification}</h5>
                            <span className="d-block text-dark">{x.instituteName}</span>
                            <small className="d-block">{x.dateCompleted}</small>
                          </div>
                        </div>
                      </li>

                  </>
                }
               )

                }
                    
                      {/* <li className="step-item">
                        <div className="step-content-wrapper">
                          <span className="step-icon step-icon-soft-dark">
                            <i className="bi-award" />
                          </span>
                          <div className="step-content">
                            <h5 className="step-title">Bachelor's degree in Computer Software Engineering</h5>
                            <span className="d-block text-dark">University of Oxford - Oxford</span>
                            <small className="d-block">October 2009 to May 2012</small>
                          </div>
                        </div>
                      </li> */}
                    </ul>
              </div>
              <button className="add" onClick={educationModal}>Add</button>
              {EducationModalOpen
               &&  
               <Modal 
                open={EducationModalOpen} 
                closeOnOverlayClick={true} 
                onClose={() => setEducationModalOpen(false)} 
                center
                >
                  Modal content for education
               </Modal>}
            </div>
            {/* End Body */}
          </div>

          <div className="card">
            <div className="card-header border-bottom">
              <h4 className="card-header-title">Links</h4>
            </div>
            {/* Body */}
            <div className="card-body">
              <div className="mb-4">
              <div className="linksContainer">
                  <p>
                    Portfolio
                  </p>
                  <input 
                    type="text" 
                    className="portfolioInput"
                    placeholder="www.portfoliolink.com" 
                  />
                </div>

                <div className="linksContainer">
                  <p>Linkedin (url)</p>
                  <input type="text" className="linkedinInput" placeholder="linkedin.com/username" />
                </div>
              </div>
            </div>
            {/* End Body */}
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

export default developerOverview;