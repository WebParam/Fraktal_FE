'use client'
import Image from "next/image";
import img9 from "../../assets/img/160x160/img9.jpg";
import topVendor from "../../../assets/svg/illustrations/top-vendor.svg";
import './DevOverview.scss';
import defaultProfilePic from '../../../assets/additional/person-circle.svg'; 
import defaultCompanyPic from '../../../assets/additional/buildings-fill.svg'; 
import AutoComplete from "react-google-autocomplete";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IDeveloperProfile, IEducationInformation, IUpdateStaffAndOrganisation, IUser, IWorkExperience } from "../../interfaces/user";
import { CreateDeveloperProfile, DeleteCompanyProfile, DeleteDeveloperProfile, GetDeveloperProfile, GetOrganisation, GetStaffInfo, UpdateDeveloperProfile, UpdateStaffAndOrganisation, uploadOrgPic, uploadProfilePic } from "../../endpoints/api";
import Cookies from 'universal-cookie'; // Import the libraryconst cookies = new Cookies(); 
import dynamic from "next/dynamic";
const cookies = new Cookies(); // Create an instance of Cookies
import logo from '../../../assets/additional/logo.webp';
import Banner from "../../banner/Banner";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



function developerOverview() {
  const [workModalOpen, setWorkModalOpen] = useState(false);
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


const [companyLoading, setCompanyLoading] = useState(true);

const [position, setPosition] = useState("");


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
  setFirstName(res?.data?.user?.firstName);
  setSurname(res?.data?.user?.surname);
  setPhone(res?.data?.user?.mobileNumber);
  setUser(res?.data?.user); // change\
  setPosition(res?.data?.staff?.position);
  setCurrentProfilePic(res?.data?.user?.profilePicture??defaultProfilePic);
  setStaff(res?.data?.staff);
  setExistingUser(true);
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
  setCompanyLoading(false);
}




useEffect(() => {
  //check url and setActive
  
  loggedInUser._id&& _GetCompanyInfo(loggedInUser?._id);

  console.log(loggedInUser)
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
      firstName:firstName,
      surname:surname,
      mobileNumber:phone,
      position:position,
      companyName:companyName,
      companyPhone:companyPhone,
      companyAbout:companyAbout,
      companyCity:companyCity,
      companyCountry:companyCountry,
      companyEmail:companyEmail,
      staffPosition: position,
      staffId: staff?._id??"",
      userId: loggedInUser._id,
      companyAddress:companyAddress,
      
      
    } as IUpdateStaffAndOrganisation;

    

    if(existingUser){
      
      const res = await UpdateStaffAndOrganisation(payload, loggedInUser._id);
      console.log("res", res);
    }else{
      console.log("trying to create profile");
    }
    
    toast.update(_id, {
      render: "Profile updated successfully",
      type: "success",
      isLoading: false,
      autoClose: 2000,
    });
  }

  const saveProfilePic = async (e: any) => {
    const _zz = toast.loading("Uploading image...", {
      position: "top-center",
      autoClose: false, // Keep it open until the upload is complete
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
      const profilePicDoc = await uploadProfilePic(profilePicUpload,loggedInUser._id??"");
      
      console.log("profres", profilePicDoc);
      const newImage = profilePicDoc.data.data.Location
      const newUser = {...loggedInUser, profilePicture:newImage};
      cookies.remove("fraktional-user", { path: '/' });

      setCurrentProfilePic(newImage);
      
       cookies.set("fraktional-user", newUser as any, { path: "/" });
       toast.dismiss(_zz);

    }else{
        // Handle the error, e.g., show an error notification
        toast.update(_zz, {
          render:"Error saving image",
          type: "error",
          isLoading: false,
        });
        
        // Dismiss the loading notification on error
        setTimeout(() => {
          toast.dismiss(_zz);
        }, 2000); 
    }
  };

  const saveOrgPic = async (e: any) => {
    const _zz = toast.loading("Uploading image...", {
      position: "top-center",
      autoClose: false, // Keep it open until the upload is complete
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
      const profilePicDoc = await uploadOrgPic(profilePicUpload,staff._organisation??"");
      
      const newImage = profilePicDoc.data.data.Location
 

      setCurrentOrgPic(newImage);
       toast.dismiss(_zz);

    }else{
        // Handle the error, e.g., show an error notification
        toast.update(_zz, {
          render:"Error saving image",
          type: "error",
          isLoading: false,
        });
        
        // Dismiss the loading notification on error
        setTimeout(() => {
          toast.dismiss(_zz);
        }, 2000); 
    }
  };


  const signOut = () => {
    cookies.remove("fraktional-user")
    window.location.href="/"
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

    const deleteRes = await DeleteCompanyProfile(currentProfile?._id??"");
    setTimeout(() => {
      // setDisable(false)
      toast.dismiss(_id);
    }, 2000);
  }

  
  
    return (
      <>

      {/* <div className="col-lg-9"> */}
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
                      <Image className="avatar-img" fill={true}  src={currentProfilePic!=""? currentProfilePic: cookies.get("fraktional-user")?.profilePicture??""} alt="Image Description" />
                      </label>
                      <div className="d-grid d-sm-flex gap-2 ms-4">
                        <div className="form-attachment-btn btn btn-sm" style={{backgroundColor: '#FD2DC3', color: '#fff'}}>Upload photo
                          <input onChange={saveProfilePic} type="file" className="js-file-attach form-attachment-btn-label" id="avatarUploader" data-hs-file-attach-options="{
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
                <div className="row mb-4">
                  <label htmlFor="position"  className="col-sm-3 col-form-label form-label">Position</label>
                  <div className="col-sm-9">
                    <input type="text"  onChange={(e)=> setPosition(e.target.value)} className="form-control" name="position" id="position" placeholder="Company position" aria-label="clarice@example.com" defaultValue={position} />
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
                  {
                 companyLoading?
                 <>
                 <div className="row">
                    <div className="col-md-3">
                 <Skeleton
                    circle
                    height={50}
                    width={50}                   
                     containerClassName="avatar-skeleton"
                />
                  <Skeleton width={50} />
                 </div>
                 <div className="col-md-9">
                  <Skeleton /> 
                  <Skeleton count={3} />
                  </div>
                 </div>
              
                 </>:
                 <>
                {/* Form */}
                <div className="row mb-4">
                  <label className="col-sm-3 col-form-label form-label">Company logo</label>
                  <div className="col-sm-9">
                    {/* Media */}
                    <div className="d-flex align-items-center">
                      {/* Avatar */}
                      <label className="avatar avatar-xl avatar-circle" htmlFor="avatarUploader">
                        <Image id="avatarImg"  fill={true}  className="avatar-img" src={currentOrgPic} alt="Image Description" />
                      </label>
                      <div className="d-grid d-sm-flex gap-2 ms-4">
                        <div className="form-attachment-btn btn btn-sm" style={{backgroundColor: '#FD2DC3', color: '#fff'}}>Upload photo
                          <input onChange={saveOrgPic} type="file" className="js-file-attach form-attachment-btn-label" id="avatarUploader" data-hs-file-attach-options="{
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

                <div className="row mb-4">
                  <label htmlFor="firstNameLabel" className="col-sm-3 col-form-label form-label">Company email <i className="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Displayed on public forums, such as Front." /></label>
                  <div className="col-sm-9">
                    <div className="input-group">
                      <input type="text" onChange={(e)=> setCompanyEmail(e.target.value)} value={companyEmail} defaultValue={ companyEmail} className="form-control" name="firstName" id="firstNameLabel" placeholder="Enter company name" aria-label="Clarice" />
                      {/* <small>This field is required</small> */}
                      {/* <input type="text" onChange={(e)=> setSurname(e.target.value)} defaultValue={surname!="" ?surname: loggedInUser.surname} className="form-control" name="lastName" id="lastNameLabel" placeholder="Enter last name" aria-label="Boone"  /> */}
                    </div>
                  </div>
                </div>

                <div className="row mb-4">
                  <label htmlFor="firstNameLabel" className="col-sm-3 col-form-label form-label">Company address <i className="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" title="" /></label>
                  <div className="col-sm-9">
                    <div className="input-group">
                    <AutoComplete
                     className="form-control" 
                     defaultValue={companyAddress}
                        apiKey={"AIzaSyDsGw9PT-FBFk7DvGK46BpvEURMxcfJX5k"}
                        onPlaceSelected={(place) => {
                          console.log(place);
                          
                          setCompanyAddress(place?.formatted_address);
                          setCompanyCity(place.address_components.filter((y:any)=>y.types.includes("locality"))[0].long_name);
                          setCompanyCountry(place.address_components.filter((y:any)=>y.types.includes("country"))[0].long_name);
                          // setGpsLatitude(`${place?.geometry?.location?.lat() || ''}`);
                          // setGpsLongitude(`${place?.geometry?.location?.lng() || ''}`);
                          // console.log(gpsLatitude)
                        }}
                        options={{
                          types: ["geocode", "establishment"],//Must add street addresses not just cities
                          componentRestrictions: { country: "za" },
                        }}
                      />
             </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <label htmlFor="firstNameLabel" className="col-sm-3 col-form-label form-label">Company city <i className="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Displayed on public forums, such as Front." /></label>
                  <div className="col-sm-5">
                    <div className="input-group">
                      <input type="text"  readOnly={true} value={companyCity} defaultValue={ companyCity} className="form-control" name="firstName" id="firstNameLabel" placeholder="Enter company city" aria-label="Clarice" />
                      {/* <small>This field is required</small> */}
                      {/* <input type="text" onChange={(e)=> setSurname(e.target.value)} defaultValue={surname!="" ?surname: loggedInUser.surname} className="form-control" name="lastName" id="lastNameLabel" placeholder="Enter last name" aria-label="Boone"  /> */}
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="input-group">
                      <input type="text" readOnly={true} value={companyCountry} defaultValue={ companyCountry} className="form-control" name="firstName" id="firstNameLabel" placeholder="Enter company country" aria-label="Clarice" />
                      {/* <small>This field is required</small> */}
                      {/* <input type="text" onChange={(e)=> setSurname(e.target.value)} defaultValue={surname!="" ?surname: loggedInUser.surname} className="form-control" name="lastName" id="lastNameLabel" placeholder="Enter last name" aria-label="Boone"  /> */}
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <label className="col-sm-3 col-form-label form-label">About company</label>
                  <div className="col-sm-9">
                    {/* Quill */}
                    <div className="quill-custom">
                      <div className="js-quill" style={{height: '15rem'}}>
                        <textarea onChange={(e)=>setCompanyAbout(e.target.value)} name="summary" defaultValue={companyAbout} id="textarea" placeholder="Enter some information about the company" style={{height: '100%', width: '100%', padding: '10px'}}></textarea>
                      </div>
                    </div>
                    {/* End Quill */}
                  </div>
                </div>
             
                </>
                }
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
                  <input type="checkbox" onChange={()=>setDeleteProfileAccept(!deleteProfileAccept)} className="form-check-input" id="deleteAccountCheckbox" />
                  <label className="form-check-label" htmlFor="deleteAccountCheckbox">Confirm that I want to delete my account.</label>
                </div>
                {/* End Check */}
              </div>
              <div className="d-flex justify-content-end">
                <button  onClick={()=> deleteProfile()} disabled={deleteProfileAccept!=true}  type="submit" className="btn btn-danger">Delete</button>
              </div>
            </div>
            {/* End Body */}
          </div>
          {/* End Card */}
          
        </div>
      {/* </div> */}
     
</>
    )
}



export default dynamic (() => Promise.resolve(developerOverview), {ssr: false})