'use client'
import './id.scss';
import Image from 'next/image';
import { gigs } from '../../gigs';
import star from "../../../assets/svg/illustrations/star.svg";
import halfstar from "../../../assets/svg/illustrations/star-half.svg";
import laptop from "../../../assets/vendor/bootstrap-icons/icons/laptop.svg";
import dropbox from "../../../assets/svg/brands/dropbox-icon.svg";
import googleDrive from "../../../assets/svg/brands/google-drive-icon.svg";
import { useRef, useState } from 'react';
import { escape } from 'querystring';
import Link from 'next/link';
import { jobRegistration } from '@/app/endpoints/api';
import { IApply, IApplyForJobRegistration } from '@/app/interfaces/user';
import { VerifyOtp } from './verify-otp';
import Modal from 'react-responsive-modal';
import MobileMenu from '@/app/components/MobileMenu/MobileMenu';
import Header from '@/app/components/Header/Header';
import Select from "react-select";
import Footer from '@/app/components/Footer/Footer';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IOption, experience, getOptionFromValue, noticePeriods } from '@/app/lib/data';

function viewGig({ params }: { params: { id: string }}) {
    const _gigs = gigs as any[];
    const gig = _gigs.find(item => item?.id === parseInt(params.id));

    const [menuToggler, setMenuToggler] = useState<boolean>(false);
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [summary, setSummary] = useState('');
    const [resume, setResume] = useState<File>()
    const [workStatus, setWorkStatus] = useState('no');
    const [currentJob, setCurrentJob] = useState('');
    const [yearsOfExperience, setYearsOfExperience] = useState('');
   
    const [portfolio, setPortfolio] = useState([]);
    const [expectedSalary, setExpectedSalary] = useState('');
    const [mobileExp, setMobileExp] = useState('');
    const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
    // const userInformation = {
    //     firstName: firstName,
    //     lastName: lastName,
    //     email: email,
    //     phone: phone,
    //     summary: summary,
    //     resume: resume,
    //     workStatus: workStatus,
    //     notice: noticePeriod,
    //     portfolio: portfolio,
    //     expectedSalary: expectedSalary,
    //     mobileExp: mobileExp,
    //     // jobid: params.id
    //   } ;

    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [summaryError, setSummaryError] = useState(false);
    const [resumeError, setResumeError] = useState(false)
    // const [workStatusError, setWorkStatusError] = useState(false);
    const [yearsOfExperienceError, setyearsOfExperienceError] = useState(false);
    const [noticeError, setnoticeError] = useState(false);
    const [portfolioError, setPortfolioError] = useState(false);
    const [expectedSalaryEroor, setExpectedSalaryError] = useState(false);
    // const [mobileExpError, setMobileExpError] = useState(false);
    const [showerror, setShowErrorMessage] = useState(false);
    const [noticePeriod, setNoticePeriod] = useState("");
    const [emailExist, setEmailExist] = useState(false);
    const uploadCVClick = () => {
        /*Collecting node-element and performing click*/
        inputFileRef?.current?.click();
      }
    const handleFirstName = (e: any) => {
        setFirstName(e.target.value);
    }

    
    function handleNoticePeriod(data: any) {
        const _data = data as IOption;
        debugger;
        setNoticePeriod(_data.value);
    }

    
    
    function handleExperience(data: any) {
        const _data = data as IOption;
        setYearsOfExperience(_data.value);
    }

    
    const handleLastName = (e: any) => {
        setLastName(e.target.value);
    }

    const handleJob = (e: any) => {
        setCurrentJob(e.target.value);
    }

    
    const handleEmail = (e: any) => {
        setEmail(e.target.value);
    }

    
    const handlePhone= (e: any) => {
        setPhone(e.target.value);
    }

    
    const handleSummary = (e: any) => {
        setSummary(e.target.value);
    }

    const handleWorkStatusChange = (value: any) => {
        setWorkStatus(value);
      };

    const handleYearsOfExperience = (e: any) => {
        setYearsOfExperience(e.target.value);
    }

    const handleNotice = (e: any) => {
        setNoticePeriod(e.target.value);
    }
    
    const handleSalary = (e: any) => {
        setExpectedSalary(e.target.value);
    }

    const handleMobileExp = (value: any) => {
        setMobileExp(value);
      };


      const handleResume = (e: any) => {
        const file = e.target.files[0];
      
        if (file) {
          const fileName = file.name;
          setResume(file);
      
          setResumeError(false);
        }
      };
      
      const handlePortfolio = (e: any) => {
        const file = e.target.files[0];
        setPortfolio(file);
      };

      const handleSubmit = (e: any) => {
            e.preventDefault();

            if(resume==undefined){
                setResumeError(true);
                setShowErrorMessage(true);
               return;
            }
         debugger;
            
            if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
                setEmailError(true);
                setShowErrorMessage(true);return;
            } else {
                setEmailError(false);
                setShowErrorMessage(false);
            }
        
            if (!phone || !/^\d+$/.test(phone)) {
               setPhoneError(true)
               setShowErrorMessage(true);return;
            } else {
                setPhoneError(false);
                setShowErrorMessage(false);
            }

            if (!resume) {
                setResumeError(true);
                setShowErrorMessage(true);return;
            } else {
                setResumeError(false);
                setShowErrorMessage(false);
            }
            if (!yearsOfExperience) {
                setyearsOfExperienceError(true)
                setShowErrorMessage(true);return;
             } else {
                setyearsOfExperienceError(false);
                 setShowErrorMessage(false);
             }

            if (!noticePeriod.trim()) {
                setnoticeError(true);
                setShowErrorMessage(true);return;
            } else {
                setnoticeError(false);
                setShowErrorMessage(false);
            }
            
          

            if (!/^\d+$/.test(expectedSalary)) {
                setExpectedSalaryError(true);
                setShowErrorMessage(true);return;
            } else {
                setExpectedSalaryError(false);
                setShowErrorMessage(false);
            }
            applyForJob(e);
        }   


        const applyForJob = async (e: any) => {
            e.preventDefault();
            let _id = toast.loading("Creating your profile, please wait..", {
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
    email: email,
    phone: phone,
    employed: workStatus,
    experience: yearsOfExperience,
    notice: noticePeriod,
    rate: expectedSalary,
    file: resume,
} as IApply;

const formData = new FormData();

Object.entries(payload).forEach(([key, value]) => {
    formData.append(key, value);
});

            
            const registrationResult = await jobRegistration(formData) ;
            debugger;
          
            console.log(registrationResult)
            if(registrationResult?._user){
                // setEditModalOpen(true)
                toast.update(_id, {
                    render: "Your profile has been created. Please check your email and login to verify and complete your details.",
                    type: "success",
                    isLoading: false,
                    autoClose: 5000,
                  });
                  window.location.href = "/auth/login"

            }else{
                debugger;
                toast.update(_id, {
                    render: "Profile not created, please try again.",
                    type: "error",
                    isLoading: false,
                    autoClose: 5000
                  });
                setEmailExist(true)
                window.scrollTo({
                    top: 10,
                    behavior: 'smooth' // For smooth scrolling
                });
            }
        }

        function saveAndCloseEditModal(){

            setEditModalOpen(false)
        
          
          }
        const customModalStyles = {
            modal: {
              maxWidth: '40%', 
              width: '50%',
              borderRadius: "10px",
              backgroundColor: "lightpink"
            },
          };

          const inputEmailStyle = {
            ...(emailExist && {
              outlineStyle: "solid",
             color: "tomato",
              borderWidth: "1px",
            }),
          };

          console.log("ddsds",resume)
    return (
        <>
          <Header 
            menuTogglerFunction={setMenuToggler} 
            menuTogglerValue={menuToggler} 
        />
        <MobileMenu menuToggler={menuToggler} />
        
    <main id="content" role="main">
         <Modal styles={customModalStyles}  open={editModalOpen} onClose={() => setEditModalOpen(false)} center>
        <VerifyOtp email = {email} onClose={saveAndCloseEditModal} />
      </Modal>

      <ToastContainer />
        {/* <Link className="back" style={{margin: '40px', display: 'block', color: '#4B4C4E'}} href='/fraktional-gig'>
        <i className="bi bi-chevron-left"></i> back
        </Link> */}
        {/* Page Header */}
        <div className="container content-space-t-2">
            <div className="w-lg-75 mx-lg-auto">
            <div className="page-header">
                {/* Media */}
                <div className="d-sm-flex mb-3">
                <div className="flex-shrink-0 mb-2 mb-sm-0">
                    <Image className="avatar avatar-lg mb-3" src={gig?.img} alt="Image Description" />
                </div>
                <div className="flex-grow-1 ms-sm-4">
                    <div className="row">
                    <div className="col">
                        <h1 className="page-header-title h2">{gig?.position}</h1>
                    </div>
                    {/* End Col */}
                    <div className="col-auto">
                        {/* Checkbbox Bookmark */}
                        <div className="form-check form-check-bookmark">
                        <input className="form-check-input" type="checkbox" id="jobsPageHeaderBookmarkCheck" />
                        <label className="form-check-label" htmlFor="jobsPageHeaderBookmarkCheck">
                            <span className="form-check-bookmark-default">
                            <i className="bi-star me-1" /> Save this job
                            </span>
                            <span className="form-check-bookmark-active">
                            <i className="bi-star-fill me-1" /> Saved
                            </span>
                        </label>
                        </div>
                        {/* End Checkbbox Bookmark */}
                    </div>
                    {/* End Col */}
                    </div>
                    {/* End Row */}
                    <ul className="list-inline list-separator d-flex align-items-center mb-2">
                    <li className="list-inline-item">
                        <a style={{color: '#FD2DC3'}}>{gig?.companyname}</a>
                    </li>
                    <li className="list-inline-item">
                        {/* Rating */}
                        <a className="d-flex gap-1" href="../demo-jobs/employer.html">
                        <Image src={star} alt="Review rating" width={14} />
                        <Image src={star} alt="Review rating" width={14} />
                        <Image src={star} alt="Review rating" width={14} />
                        <Image src={star} alt="Review rating" width={14} />
                        <Image src={halfstar} alt="Review rating" width={14} />
                        <span className="ms-1" style={{color: '#FD2DC3'}}>2,391 reviews</span>
                        </a>
                        {/* End Rating */}
                    </li>
                    </ul>
                    <ul className="list-inline list-separator small text-body mb-2">
                    <li className="list-inline-item">Posted {gig?.posted}</li>
                    <li className="list-inline-item">{gig?.location}, South Africa</li>
                    <li className="list-inline-item">{gig?.jobType}</li>
                    </ul>
                </div>
                </div>
                {/* End Media */}
            </div>
            </div>
        </div>
        {/* End Page Header */}
        {/* Content */}
        <div className="container content-space-1 content-space-b-lg-3">
            <div className="w-lg-75 mx-lg-auto">
            {/* Card */}
            <div className="row align-items-sm-center" style={{padding:"5%",marginBottom:"5%"}}>
                    {gig?.description}
            </div>
            <div className="card card-bordered mb-10">
                <div className="card-body">
                
                <div className="row align-items-sm-center">
                    <div className="col-sm mb-2 mb-sm-0">
                    <h5 className="card-title text-uppercase">
                        <i className="bi-lightning-charge-fill me-1" /> Autofill application
                    </h5>
                    <p className="card-text small">Save time by importing your resume.</p>
                    </div>
                    {/* End Col */}
                    <div className="col-sm-auto">
                    {/* Dropdown */}
                    <div className="dropdown">
                        <a className="btn" onClick={()=>uploadCVClick()} style={{backgroundColor: '#FD2DC3', color: '#fff', width :"200px", fontSize:'small'}} id="jobImportResumeDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-dropdown-animation>
                       Upload CV
                        </a>
                        <p style={{float: "left",  marginRight: "10px", marginTop: "10px"}}>{resume && <small><i className="bi-file-arrow-up" /> {resume.name}  </small>}</p>
                        <input type="file"  ref={inputFileRef}

         name="resume" id="resume" onChange={handleResume} style={{display:"none"}}/>
                    </div>
                    {resumeError && <span style={{color : "red",fontWeight:"600", fontSize:"10px",marginLeft:"15px"}}>Please attach your resume</span>}
                    {/* End Dropdown */}
                    </div>
                    {/* End Col */}
                </div>
                {/* End Row */}
                </div>
            </div>
            {/* End Card */}
            {/* Form */}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                <h3>Personal information</h3>
                </div>
                <div className="row">
                <div className="col-sm-6">
                <div className="mb-4">
                <label className="form-label" htmlFor="applyForJobEmail">Email address *</label>
                {/* {emailExist && <span style={{color : "red", fontSize:"small",fontWeight:"600", marginLeft:"15px"}}>Email address already registered</span>} */}
                <input 
                    type="email" 
                    className={`form-control ${emailError ? 'error':''}`} 
                    name="applyForJobNameEmail" 
                    id="applyForJobEmail" 
                    placeholder="email@site.com" 
                    aria-label="email@site.com"
                    value={email}
                    onChange={handleEmail}
                   
                />
                </div>
                </div>
                <div className="col-sm-6">
                <div className="js-add-field mb-4" data-hs-add-field-options="{
                    &quot;template&quot;: &quot;#addPhoneFieldTemplate&quot;,
                    &quot;container&quot;: &quot;#addPhoneFieldContainer&quot;,
                    &quot;defaultCreated&quot;: 0
                }">
                <label className="form-label" htmlFor="applyForJobPhone">Phone *</label>
                <div className="input-group">
                    <input 
                        type="text" 
                        className={`js-input-mask form-control ${phoneError ? 'error':''}`} 
                        name="applyForJobNamePhone" 
                        id="applyForJobPhone" 
                        placeholder="+x(xxx)xxx-xx-xx" 
                        aria-label="+x(xxx)xxx-xx-xx" 
                        value={phone}
                        onChange={handlePhone}
                        data-hs-mask-options="{
                            &quot;mask&quot;: &quot;+{0}(000)000-00-00&quot;
                            }" 
                    />
                    {/* Select */}
                    <select className="form-select" name="applyForJobPhoneSelect" style={{maxWidth: '8rem'}}>
                    <option value="Mobile" selected>Mobile</option>
                    <option value="Home">Home</option>
                    <option value="Work">Work</option>
                    <option value="Fax">Fax</option>
                    <option value="Direct">Direct</option>
                    </select>
                    {/* End Select */}
                </div>
             
                </div>
                                </div>
                </div>
                {/* End Form */}
                {/* Form */}
              
                {/* End Form */}
                {/* Form */}
               
                {/* End Form */}
                {/* Add Phone Input Field */}
                <div id="addPhoneFieldTemplate" style={{display: 'none', position: 'relative'}}>
                <div className="input-group input-group-add-field">
                    <input type="text" className="js-input-mask form-control" data-name="applyForJobNameAdditionalPhone" id="applyForJobAdditionalPhone" placeholder="+x(xxx)xxx-xx-xx" aria-label="+x(xxx)xxx-xx-xx" data-hs-mask-options="{
                        &quot;mask&quot;: &quot;+{0}(000)000-00-00&quot;
                    }" />
                    {/* Select */}
                    <select className="form-select" data-name="applyForJobAdditionalPhoneSelect" style={{maxWidth: '8rem'}}>
                    <option value="Mobile" selected>Mobile</option>
                    <option value="Home">Home</option>
                    <option value="Work">Work</option>
                    <option value="Fax">Fax</option>
                    <option value="Direct">Direct</option>
                    </select>
                    {/* End Select */}
                    <a className="js-delete-field input-group-add-field-delete" href="javascript:;">
                    <i className="bi-x-lg" />
                    </a>
                </div>
                </div>
                {/* End Add Phone Input Field */}
                {/* <hr className="my-7" />
                <div className="mb-4">
                <h3>Profile</h3>
                </div> */}
                {/* Form */}
                {/* <div className="mb-4">
                <label className="form-label" htmlFor="applyForJobSummary">Summary</label>
                <textarea 
                className={`form-control ${summaryError ? 'error':''}`} 
                name="applyForJobSummaryName" 
                id="applyForJobSummary" 
                placeholder="In a few words, tell us about yourself" 
                aria-label="In a few words, tell us about yourself" 
                rows={6} 
                value={summary}
                onChange={handleSummary} />
                {summaryError ? <p style={{color: 'red'}}>Please provide more than 20 characters</p>: ''}
                </div> */}
                {/* End Form */}
                {/* Form */}
                
                {/* End Form */}
                {/* <hr className="my-7" />
                <div className="mb-4">
                <h3>Details</h3>
                </div> */}
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
                    checked={workStatus == 'yes'}
                    onChange={() => handleWorkStatusChange('yes')} 
                />
                <label className="btn btn-sm" htmlFor="applyForJobWorkStatusYesBtnRadio"><i className="bi-hand-thumbs-up me-1" /> Yes</label>
                <input 
                    type="radio" 
                    className="btn-check" 
                    name="applyForJobWorkStatusBtnRadio" 
                    id="applyForJobWorkStatusNoBtnRadio" 
                    autoComplete="off" 
                    checked={workStatus == 'no'} 
                    onChange={() => handleWorkStatusChange('no')} 
                />
                <label className="btn btn-sm" htmlFor="applyForJobWorkStatusNoBtnRadio"><i className="bi-hand-thumbs-down me-1" /> No</label>
                
                {/* {workStatus =="yes" && <div className="">
                <label className="form-label" htmlFor="applyForJobNoticePeriod">Please provide some more details about your current job roles and responsibilities</label>
                <textarea 
                    cols={6}
                    className="form-control" 
                    name="applyForCurrentJob" 
                    id="applyForCurrentJob" 
                    placeholder="Please enter current job details" 
                    aria-label="Please enter current job details"
                    value={currentJob}
                    onChange={handleJob}
                />
                </div>
                } */}
                </div>
                </div>
                <div className="col-sm-6">
                <div className="mb-4">
                <label className="form-label" htmlFor="applyForJobNoticePeriod">Notice period *</label>
                {/* <input 
                    type="text" 
                    className={`form-control ${noticeError ? 'error':''}`} 
                    name="applyForJobNameNoticePeriod" 
                    id="applyForJobNoticePeriod" 
                    placeholder="" 
                    aria-label=""
                    value={notice}
                    onChange={handleNotice}
                /> */}
                  <Select
                    className="select-padded "
                    isDisabled={workStatus != 'yes'}
                    options={noticePeriods}
                    value={getOptionFromValue([noticePeriod], noticePeriods)}
                    placeholder="Notice period"
                    // styles={style}
                    onChange={
                      handleNoticePeriod
                    }
                    isSearchable={false}
                    isMulti={false}
                  />
                </div>
                </div>
                {/* End Radio Button Group */}
                {/* Form */}
            
                </div>
                <div className="row">
               
                <div className="col-sm-6">
                <div className="mb-4">
                <label className="form-label" htmlFor="applyForJobNoticePeriod">Years Of Experience *</label>
                {/* <input 
                    type="text" 
                    className={`form-control ${yearsOfExperienceError ? 'error':''}`} 
                    name="applyForJobNameNoticePeriod" 
                    id="applyForJobNoticePeriod" 
                    placeholder="" 
                    aria-label=""
                    value={yearsOfExperience}
                    onChange={handleYearsOfExperience}
                /> */}
                 <Select
                    className="select-padded "
                    options={experience}
                    value={getOptionFromValue([yearsOfExperience], experience)}
                    placeholder="Years of experience"
                    // styles={style}
                    onChange={
                        handleExperience
                    }
                    isSearchable={false}
                    isMulti={false}
                  />
                </div>
                </div>
                {/* End Form */}
                {/* Form */}
                {/* <div className="mb-4">
                <label className="form-label">Upload your portfolio <i className="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Maximum file size 10 MB." data-bs-original-title="Maximum file size 10 MB." /></label>
                <div id="portfolioAttach" className={`js-dropzone dz-dropzone dz-dropzone-card dz-clickable ${portfolioError ? 'error':''}`}>
                    <div className="dz-message">
                    <input type="file" name="portfolio" id="porfolio" onChange={handlePortfolio} />
                    </div>
                </div>
                </div> */}
                {/* End Form */}
                {/* Form */}
       
                <div className="col-sm-6">
                <div className="mb-4">
                <label className="form-label" htmlFor="applyForJobExpectedSalary">Current Salary *</label>
                <input 
                    type="number" 
                    className={`form-control ${expectedSalaryEroor ? 'error':''}`} 
                    name="applyForJobNameExpectedSalary" 
                    id="applyForJobExpectedSalary" 
                    placeholder="" 
                    aria-label=""
                    value={expectedSalary}
                    onChange={handleSalary}
                />
                </div>
                </div>
                </div>
                {/* End Form */}
                {/* <div className="mb-1">
                <label className="input-label">Do you have experience designing for mobile?</label>
                </div> */}
                {/* Radio Button Group */}
                {/* <div className="btn-group btn-group-segment mb-4" role="group" aria-label="Mobile experience radio button group">
                    <input
                    type="radio"
                    className="btn-check"
                    name="applyForJobWorkExperienceBtnRadio"
                    id="applyForJobWorkExperienceYesBtnRadio"
                    autoComplete="off"
                    checked={mobileExp === 'yes'} // Check if 'Yes' is selected
                    onChange={() => handleMobileExp('yes')} // Handle 'Yes' selection
                    />
                    <label className="btn btn-sm" htmlFor="applyForJobWorkExperienceYesBtnRadio"><i className="bi-hand-thumbs-up me-1" /> Yes</label>

                    <input
                    type="radio"
                    className="btn-check"
                    name="applyForJobWorkExperienceBtnRadio"
                    id="applyForJobWorkExperienceNoBtnRadio"
                    autoComplete="off"
                    checked={mobileExp === 'no'} // Check if 'No' is selected
                    onChange={() => handleMobileExp('no')} // Handle 'No' selection
                    />
                    <label className="btn btn-sm" htmlFor="applyForJobWorkExperienceNoBtnRadio"><i className="bi-hand-thumbs-down me-1" /> No</label>
                </div> */}
                {/* End Radio Button Group */}
                {showerror && <h5 style={{ textAlign: 'center', color: 'red',  fontSize:"12px",marginTop: '20px'}}>Please complete all required fields</h5>}
            {emailExist && <h5 style={{ textAlign: 'center', color: 'red', fontSize:"12px", marginTop: '20px'}}>Error sending application. If you have registered previously, please login and try again.</h5>}
                <div className="d-grid mt-5">
                <button type="submit" className="btn btn-lg" style={{backgroundColor: '#FD2DC3', color: '#fff'}}>Apply</button>
                </div>
            </form>
         
            {/* End Form */}
            </div>
        </div>
        {/* Content */}
    </main>
    <Footer />
    </>
    )
}

export default viewGig;