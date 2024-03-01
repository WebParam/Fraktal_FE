'use client'
import './DevOverview.scss';
import { ChangeEvent, useEffect, useRef, useState } from "react";
import 'react-responsive-modal/styles.css';
import "react-toastify/dist/ReactToastify.css";
import { GetAllDeveloperProfiles, PersonnelExists, onboardDeveloper } from "../../endpoints/api";
import Cookies from 'universal-cookie'; // Import the libraryconst cookies = new Cookies(); 
import dynamic from "next/dynamic";
const cookies = new Cookies(); // Create an instance of Cookies
import 'react-initials-avatar/lib/ReactInitialsAvatar.css';
import 'react-loading-skeleton/dist/skeleton.css'
import { gigs } from '@/app/gigs';
import { IOption, experience, getOptionFromValue, noticePeriods } from '@/app/lib/data';
import { ToastContainer, toast } from 'react-toastify';
import { IApply, IDeveloperProfile } from '@/app/interfaces/user';
import Modal from 'react-responsive-modal';
import Select from "react-select";
const moment = require("moment");

function companyDevelopers() {
  const _gigs = gigs as any[];
  
    const [menuToggler, setMenuToggler] = useState<boolean>(false);
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(''); 
    const [pageState, setPageState] = useState(0); 
    const [missingErrorMessage, setMissingErrorMessage] = useState<string[]>([]);
    const [summary, setSummary] = useState('');
    const [resume, setResume] = useState<File>()
    const [workStatus, setWorkStatus] = useState('no');
    const [currentJob, setCurrentJob] = useState('');
    const [yearsOfExperience, setYearsOfExperience] = useState('');
   const [remote, setRemote] = useState(false);
    const [portfolio, setPortfolio] = useState([]);
    const [expectedSalary, setExpectedSalary] = useState('');
    const [mobileExp, setMobileExp] = useState('');
    const [editModalOpen, setEditModalOpen] = useState<boolean>(false); 
    const [existingModalOpen, setExistingModalOpen] = useState<boolean>(false);
    
    const cookies = new Cookies(); // Create an instance of Cookies
   
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
    const [newlyAddedPersonnel, setNewlyAddedPersonnel] = useState({} as IDeveloperProfile);
    const [search, setSearch] = useState('');
    const [city, setCity] = useState('');
    const [orderDescending, setOrderDescending] = useState("ascending");

    const [personnel, setPersonnel] = useState<IDeveloperProfile[]>();
    
    const [personnelCopy, setPersonnelCopy] = useState<IDeveloperProfile[]>();
    
    const [addNew, setAddNew] = useState(false);

    const uploadCVClick = () => {
        /*Collecting node-element and performing click*/
        inputFileRef?.current?.click();
      }

      async function getDevelopers(){

        let _id = toast.loading("Fetching developers", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        await GetAllDeveloperProfiles().then((res:any) => {
          toast.dismiss(_id);
          setPersonnel(res?.data?.filter((x:any)=>x.user !=null));
          setPersonnelCopy(res?.data?.filter((x:any)=>x.user !=null));
        })
      }
      
      console.log("personnel", personnel);
      
useEffect(() => {
  //check url and setActive
  
  getDevelopers();

  }, []);

    
    function handleNoticePeriod(data: any) {
        const _data = data as IOption;
        debugger;
        setNoticePeriod(_data.value);
    }

    function modalClose(){
        setEditModalOpen(false);
        sendToLogin();

    }
    
    
    function handleExperience(data: any) {
        const _data = data as IOption;
        setYearsOfExperience(_data.value);
    }

    
    const handleLastName = (e: any) => {
        setLastName(e.target.value);
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


            const exists = await PersonnelExists(email) as any;
            if(exists.data?.id){
                // cookies.set('fraktional-user', JSON.stringify(exists.response), { path: '/' });
                // window.location.href = "/developer-overview"
                setExistingModalOpen(true);
            }else{

                debugger;
                if(exists){
                    
                }
    
                e.preventDefault();
                let _id = toast.loading("Please do not navigate away from this page.", {
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
                    notice: noticePeriod ==""?"nt1":noticePeriod??"nt1",
                    rate: expectedSalary,
                    file: resume,
                    projectId:""
                } as IApply;
    
                const formData = new FormData();
                // debugger;
                Object.entries(payload).forEach(([key, value]) => {
                    formData.append(key, value);
                });
    
                setEmailExist(false);
                
                const registrationResult = await onboardDeveloper(formData) ;
                debugger;
                const errorMessage = registrationResult.missing as string[];
             
                console.log(registrationResult)
                if(registrationResult?.personnel?._user){
                 
                    // setEditModalOpen(true)
                    toast.update(_id, {
                        render: "New developer has been added",
                        type: "success",
                        isLoading: false,
                        autoClose: 5000,
                      });
    
                      debugger;
                    //display missing info
                    setMissingErrorMessage(errorMessage);
                    setEditModalOpen(true);
            
                    setNewlyAddedPersonnel(registrationResult.personnel)
    
                 
                }else{
                    debugger;
                    toast.update(_id, {
                        render: "An error occured while adding the developer.",
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
           
        }

        function saveAndCloseEditModal(){

            setEditModalOpen(false)
        
          
          }
     

          const inputEmailStyle = {
            ...(emailExist && {
              outlineStyle: "solid",
             color: "tomato",
              borderWidth: "1px",
            }),
          };

          // console.log("ddsds",resume)

          function sendToLogin(){
            window.location.href = "/developer-overview"
          }

          function sendExistingToLogin(){
            window.location.href = "/auth/login"
    

          }

          const customModalStyles = {
            modal: {
              maxWidth: '50%', 
              width: '50%',
              borderRadius: "10px",
              backgroundColor: "white"
            },
          };


  function handleSearch(event: ChangeEvent<HTMLInputElement>): void {
    setSearch(event.target.value);

    if(search) {
      const arrayCopy = personnelCopy?.filter(dev => dev.personalInformation.name?.toLowerCase().includes(search.toLowerCase()) || dev.currentJob?.toLowerCase().includes(search.toLowerCase()))
      setPersonnelCopy(arrayCopy);
    } 
  }

  function handleSearchCity(event: ChangeEvent<HTMLInputElement>): void {
    setCity(event.target.value);

    if(search) {
      const arrayCopy = personnelCopy?.filter(dev => dev.personalInformation.country?.toLowerCase().includes(city.toLowerCase()) || dev.personalInformation.address?.toLowerCase().includes(city.toLowerCase()) || dev.personalInformation.province?.toLowerCase().includes(city.toLowerCase()))
      setPersonnelCopy(arrayCopy);
    } 
  }

  function handleSetRemote(e: any) {
    setRemote(e.target.value)
    console.log("remote", remote, e.target.value);
  }

  useEffect(() => {
    if (search.length == 0) {
      setPersonnelCopy(personnel);
    }
  }, [search])

  useEffect(() => {
    if (city.length == 0) {
      setPersonnelCopy(personnel);
    }
  }, [city])



    return (
    <>
      <ToastContainer />
        {/* Page Header */}
        <div className="container">
        <Modal open={existingModalOpen} styles={customModalStyles} onClose={() => modalClose()} center>
            <div style={{width:"100%"}}>
            <h4>We have detected an existing profile for the email supplied.</h4>
            <p>Please login to apply for the gig</p>
          
                <button onClick={()=>sendExistingToLogin()} className="btn btn-lg" style={{backgroundColor: '#FD2DC3', color: '#fff', width:"100%"}}>Login</button>
            </div>
           
      </Modal>
 
        <Modal open={editModalOpen} styles={customModalStyles} onClose={() => modalClose()} center>
            <div style={{width:"100%"}}>
            <h4>Added 1 new personnel</h4>
            
            <p><a href={`https://fraktional-be.azurewebsites.net/getPersonnelCv/${newlyAddedPersonnel._user}`} target='__blank'> Download Fraktional CV</a> </p>
      
                <button onClick={()=>{setEditModalOpen(false);  setPageState(0)}} className="btn btn-lg" style={{backgroundColor: '#FD2DC3', width:"40%", color: '#fff',  marginRight:"5%"}}>Back to developer list</button>
                <button onClick={()=>setEditModalOpen(false)} className="btn btn-lg" style={{backgroundColor: '#FD2DC3', color: '#fff', width:"40%", marginLeft:"5%"}}>Add another</button>
            </div>
           
      </Modal>
            
        </div>
        <main className='card' id="content" role="main">
        {
          pageState == 0 &&
          <div className="container content-space-b-2 content-space-b-lg-3">
          <div className=" mx-lg-auto">
          {/* Card */}
        
          <div className="card mb-10">
          <div className="gradient-x-three-sm-primary">
          <button type="button" onClick={()=>setPageState(1)} style={{float:"right", marginTop:"1%", backgroundColor: '#FD2DC3'}} className="btn btn-primary"> + Add new developer</button>
        <div className="container content-space-2">
        
          <form>
            {/* Input Card */}
            <div className="input-card input-card-sm mb-3">
              <div className="input-card-form">
                <label htmlFor="jobTitleForm" className="form-label visually-hidden">Job, title, skills, or company</label>
                <div className="input-group input-group-merge">
                  <span className="input-group-prepend input-group-text">
                    <i className="bi-search" />
                  </span>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="jobTitleForm" 
                    placeholder="Job, title, skills, or company" 
                    aria-label="Job, title, skills, or company" 
                    value={search}
                    onChange={handleSearch}  
                  />
                </div>
              </div>
              <div className="input-card-form">
                <label htmlFor="cityForm" className="form-label visually-hidden">City, state, or zip</label>
                <div className="input-group input-group-merge">
                  <span className="input-group-prepend input-group-text">
                    <i className="bi-geo-alt" />
                  </span>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="cityForm" 
                    placeholder="City, state, or zip" 
                    aria-label="City, state, or zip" 
                    value={city}
                    onChange={handleSearchCity}  
                    />
                </div>
              </div>
              <button type="button" className="btn btn-primary">Search</button>
            </div>
            {/* End Input Card */}
          </form>
          <div className="row align-items-center">
           
            <div className="col-md-auto">
              {/* Switch */}
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="remoteOnlySwitch" checked={remote} onClick={handleSetRemote} />
                <label className="form-check-label" htmlFor="remoteOnlySwitch">Remote only</label>
              </div>
              {/* End Switch */}
            </div>
            {/* End Col */}
          </div>
         
        </div>
      </div>
      <div className="container content-space-t-1 content-space-t-md-2 content-space-b-2 content-space-b-lg-3">
        <div className="row">
          <div className="col-lg-3 order-lg-2">
            {/* Navbar */}
            <div className="navbar-expand-lg mb-5">
              {/* Navbar Toggle */}
              <div className="d-grid">
                <button type="button" className="navbar-toggler btn btn-white mb-3" data-bs-toggle="collapse" data-bs-target="#navbarVerticalNavMenu" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navbarVerticalNavMenu">
                  <span className="d-flex justify-content-between align-items-center">
                    <span className="text-dark">Filter</span>
                    <span className="navbar-toggler-default">
                      <i className="bi-list" />
                    </span>
                    <span className="navbar-toggler-toggled">
                      <i className="bi-x" />
                    </span>
                  </span>
                </button>
              </div>
              {/* End Navbar Toggle */}
              {/* Navbar Collapse */}
              <div id="navbarVerticalNavMenu" className="">
                <div className="w-100">
                  {/* Form */}
                  <form>
                    <div className="mb-5">
                      <h5 className="mb-3">Distance</h5>
                      <p className="form-text">Within <span id="rangeSliderDistance">25</span> km of <span className="fw-semibold text-dark">Johannesburg</span></p>
                      {/* Range Slider */}
                      <div className="range-slider">
                        <div className="js-nouislider noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr" data-hs-nouislider-options="{
                               &quot;range&quot;: {
                                 &quot;min&quot;: 0,
                                 &quot;max&quot;: 100
                               },
                               &quot;connect&quot;: [true, false],
                               &quot;start&quot;: 25,
                               &quot;result_min_target_el&quot;: &quot;#rangeSliderDistance&quot;
                             }">
                          <div className="noUi-base"><div className="noUi-connects"><div className="noUi-connect" style={{transform: 'translate(0%, 0px) scale(0.25, 1)'}} /></div><div className="noUi-origin" style={{transform: 'translate(-75%, 0px)', zIndex: 4}}>
                            <div className="noUi-handle noUi-handle-lower" tabIndex={0} role="slider">
                              <div className="noUi-touch-area" /></div></div></div></div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-5">
                        <span className="text-body">5 km</span>
                        <span className="text-body">100 km</span>
                      </div>
                      {/* End Range Slider */}
                    </div>
                    <div className="mb-5">
                      <h5 className="mb-3">Last updated</h5>
                      {/* Select */}
                      <select className="form-select form-select-sm">
                        <option value="within last day">within last day</option>
                        <option value="within last week">within last week</option>
                        <option value="within last month">within last month</option>
                        <option value="within last 3 months">within last 3 months</option>
                        <option value="within last 6 months" selected>within last 6 months</option>
                        <option value="show all resumes">show all resumes</option>
                      </select>
                      {/* End Select */}
                    </div>
                    <div className="mb-5">
                      <h5 className="mb-3">Job titles</h5>
                      <div className="d-grid gap-2">
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobTitleCheckbox1" />
                          <label className="form-check-label d-flex" htmlFor="jobTitleCheckbox1">Graphic Designer <span className="ms-auto">2</span></label>
                        </div>
                        {/* End Checkboxes */}
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobTitleCheckbox2" />
                          <label className="form-check-label d-flex" htmlFor="jobTitleCheckbox2">UI/UX Designer <span className="ms-auto">2</span></label>
                        </div>
                        {/* End Checkboxes */}
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobTitleCheckbox3" />
                          <label className="form-check-label d-flex" htmlFor="jobTitleCheckbox3">Full Stack Developer <span className="ms-auto">1</span></label>
                        </div>
                        {/* End Checkboxes */}
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobTitleCheckbox4" />
                          <label className="form-check-label d-flex" htmlFor="jobTitleCheckbox4">Information Associate <span className="ms-auto">1</span></label>
                        </div>
                        {/* End Checkboxes */}
                      </div>
                    </div>
                    <div className="mb-5">
                      <h5 className="mb-3">Company</h5>
                      <div className="d-grid gap-2">
                       
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobCompanyCheckbox6" />
                          <label className="form-check-label d-flex" htmlFor="jobCompanyCheckbox6">Param Solutions <span className="ms-auto">6</span></label>
                        </div>
                        {/* End Checkboxes */}
                      </div>
                    </div>
                    <div className="mb-5">
                      <h5 className="mb-3">Years of experience</h5>
                      <div className="d-grid gap-2">
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobYearExperienceCheckbox1" />
                          <label className="form-check-label d-flex" htmlFor="jobYearExperienceCheckbox1">6-10 years <span className="ms-auto">73</span></label>
                        </div>
                        {/* End Checkboxes */}
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobYearExperienceCheckbox2" />
                          <label className="form-check-label d-flex" htmlFor="jobYearExperienceCheckbox2">3-5 years <span className="ms-auto">3</span></label>
                        </div>
                        {/* End Checkboxes */}
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobYearExperienceCheckbox3" />
                          <label className="form-check-label d-flex" htmlFor="jobYearExperienceCheckbox3">More than 10 years <span className="ms-auto">1</span></label>
                        </div>
                        {/* End Checkboxes */}
                      </div>
                    </div>
                    <div className="mb-5">
                      <h5 className="mb-3">Education</h5>
                      <div className="d-grid gap-2">
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobEducationCheckbox1" />
                          <label className="form-check-label d-flex" htmlFor="jobEducationCheckbox1">Bachelors <span className="ms-auto">6</span></label>
                        </div>
                        {/* End Checkboxes */}
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobEducationCheckbox2" />
                          <label className="form-check-label d-flex" htmlFor="jobEducationCheckbox2">Masters <span className="ms-auto">1</span></label>
                        </div>
                        {/* End Checkboxes */}
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobEducationCheckbox3" />
                          <label className="form-check-label d-flex" htmlFor="jobEducationCheckbox3">Associates <span className="ms-auto">1</span></label>
                        </div>
                        {/* End Checkboxes */}
                      </div>
                    </div>
                    <div className="mb-5">
                      <h5 className="mb-3">Assessment <i className="bi-question-circle text-body ml-1" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Assessments shown her6 are summarized for convenience only. View the candidate’s profile for more information, including score ranges for each assessment. Indeed makes no statement as to the skill level of any candidate." data-bs-original-title="Assessments shown her6 are summarized for convenience only. View the candidate’s profile for more information, including score ranges for each assessment. Indeed makes no statement as to the skill level of any candidate." /></h5>
                      <div className="d-grid gap-2">
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobAssessmentCheckbox1" />
                          <label className="form-check-label d-flex" htmlFor="jobAssessmentCheckbox1">Attention to detail <span className="ms-auto">3</span></label>
                        </div>
                        {/* End Checkboxes */}
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobAssessmentCheckbox2" />
                          <label className="form-check-label d-flex" htmlFor="jobAssessmentCheckbox2">Graphic design <span className="ms-auto">7</span></label>
                        </div>
                        {/* End Checkboxes */}
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobAssessmentCheckbox3" />
                          <label className="form-check-label d-flex" htmlFor="jobAssessmentCheckbox3">Social Media <span className="ms-auto">1</span></label>
                        </div>
                        {/* End Checkboxes */}
                        {/* Checkboxes */}
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox"  id="jobAssessmentCheckbox4" />
                          <label className="form-check-label d-flex" htmlFor="jobAssessmentCheckbox4">Marketing <span className="ms-auto">1</span></label>
                        </div>
                        {/* End Checkboxes */}
                      </div>
                    </div>
                    <div className="d-grid">
                      <button type="button" className="btn btn-white btn-transition">Clear all</button>
                    </div>
                  </form>
                  {/* End Form */}
                </div>
              </div>
              {/* End Navbar Collapse */}
            </div>
            {/* End Navbar */}
          </div>
          {/* End Col */}
          <div className="col-lg-9">
            <div className="row align-items-center mb-5">
              <div className="col-sm mb-3 mb-sm-0">
                <h3 className="mb-0">{personnelCopy?.length} developers  <span className="fw-normal"></span></h3>
              </div>
              <div className="col-sm-auto">
                <div className="d-sm-flex justify-content-sm-end align-items-center">
                  {/* Select */}
                  <div className="mb-2 mb-sm-0 me-sm-2">
                    <select className="form-select form-select-sm">
                      <option value="Relevance" selected>Relevance</option>
                      <option value="mostRecent">Most recent</option>
                    </select>
                  </div>
                  {/* End Select */}
                  {/* Select */}
                  <div className="mb-2 mb-sm-0 me-sm-2">
                    <select className="form-select form-select-sm">
                      <option value="ascending" selected>A-to-Z</option>
                      <option value="descending">Z-to-A</option>
                    </select>
                  </div>
                  {/* End Select */}
                  {/* Nav */}
                  <ul className="nav nav-segment">
                    <li className="nav-item">
                      <a className="nav-link">
                        <i className="bi-grid-fill" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" >
                        <i className="bi-list" />
                      </a>
                    </li>
                  </ul>
                  {/* End Nav */}
                </div>
              </div>
            </div>
            {/* End Row */}
            {/* Card List */}
            <div className="d-grid gap-5 mb-10">
             
              
              {
                (personnelCopy && personnelCopy?.length > 0) ? personnelCopy?.map(x=>{                
                return (
                <>
                <div className="card card-bordered">
                <div className="card-body">
                  {/* Media */}
                  <div className="d-sm-flex">
                    {/* Media */}
                    <div className="d-flex align-items-center align-items-sm-start mb-3">
                      <div className="flex-shrink-0">
                        <img className="avatar avatar-sm avatar-4x3"  src={x?.user?.profilePicture} alt="" />
                      </div>
                      <div className="d-sm-none flex-grow-1 ms-3">
                        <h6 className="card-title">
                          <a className="text-dark" href="../demo-jobs/employer.html">Mailchimp</a>
                          <img className="avatar avatar-xss ms-1" src={x?.user?.profilePicture} alt="Review rating" data-toggle="tooltip" data-placement="top" title="Claimed profile" />
                        </h6>
                      </div>
                    </div>
                    {/* End Media */}
                    <div className="flex-grow-1 ms-sm-3">
                      <div className="row">
                        <div className="col col-md-8">
                          <h3 className="card-title">
                            <a className="text-dark" href="../demo-jobs/employer.html">{x?.user?.firstName}  {x?.user?.surname}</a>
                          </h3>
                          <div className="d-none d-sm-inline-block">
                            <h6 className="card-title">
                              <a className="text-dark" href="../demo-jobs/employer.html">{x?.user?.email}</a>
                              {/* <img className="avatar avatar-xss ms-1" src="../assets/svg/illustrations/top-vendor.svg" alt="Review rating" data-toggle="tooltip" data-placement="top" title="Claimed profile" /> */}
                            </h6>
                          </div>
                        </div>
                        {/* End Col */}
                        {/* <div className="col-auto order-md-3">
                          <div className="form-check form-check-bookmark">
                            <input className="form-check-input" type="checkbox"  id="jobsCardBookmarkCheck1" />
                            <label className="form-check-label" htmlFor="jobsCardBookmarkCheck1">
                              <span className="form-check-bookmark-default" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Save this job" data-bs-original-title="Save this job">
                                <i className="bi-star" />
                              </span>
                              <span className="form-check-bookmark-active" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Saved" data-bs-original-title="Saved">
                                <i className="bi-star-fill" />
                              </span>
                            </label>
                          </div>
                        </div> */}
                        {/* End Col */}
                        <div className="col-12 col-md mt-3 mt-md-0">
                          {/* <span className="d-block small text-body mb-1">Fraktional CV</span> */}
                          {/* {
                            x.keySkills.map((x:any)=>{
                              return(
                                <span className="badge bg-soft-info text-info me-2">
                                <span className="legend-indicator bg-info" />{x}
                              </span>
                              )
                            })
                          } */}
                          <a href={`https://fraktional-be.azurewebsites.net/getPersonnelCv/${x._user}`} target='__blank' className="badge bg-soft-info text-info me-2">
                          <span>
                            <span className="legend-indicator bg-info" />Fraktional CV
                          </span>
                          </a>
                        </div>
                        {/* End Col */}
                      </div>
                      {/* End Row */}
                    </div>
                  </div>
                  {/* End Media */}
                </div>
                <div className="card-footer pt-0" style={{display:'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center'}}>
                  <ul className="list-inline list-separator small text-body">
                    <li className="list-inline-item">Posted 7 hours ago</li>
                    <li className="list-inline-item">Oxford</li>
                    <li className="list-inline-item">Full time</li>
                  </ul>

                  <div>
                    {x.user.mobileNumber}
                  </div>
                </div>
              </div>
              {/* End Card */}
              </>
                  )
                }) :
                <div style={{fontSize: '2em', color: '#FD2DC3', height: '100px', lineHeight: '100px', textAlign: 'center'}}>No Devs Found</div> 
              }
             
            
            </div>
            {/* End Card List */}
            {/* Pagination */}
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">
                      <i className="bi-chevron-double-left small" />
                    </span>
                  </a>
                </li>
                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item disabled"><a className="page-link" href="#">...</a></li>
                <li className="page-item"><a className="page-link" href="#">5</a></li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">
                      <i className="bi-chevron-double-right small" />
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
            {/* End Pagination */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>

          </div>
          {/* End Card */}
          {/* Form */}
          
          {/* End Form */}
          </div>
      </div>
        }

{
  pageState == 1 &&

  <div className="container content-space-b-2 content-space-b-lg-3 ">
      <button type="button" onClick={()=>setPageState(0)} style={{float:"right", marginTop:"1%"}} className="btn btn-primary"> Back to list</button>
            <div className="w-lg-75 mx-lg-auto mt-10">
            {/* Card */}
          
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
                        <a className="btn" onClick={()=>uploadCVClick()} style={{backgroundColor: '#FD2DC3', color: '#fff', minWidth:"200px", width :"100%", fontSize:'small'}} id="jobImportResumeDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-dropdown-animation>
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
                
             
                </div>
                </div>
                <div className="col-sm-6">
                <div className="mb-4">
                <label className="form-label" htmlFor="applyForJobNoticePeriod">Notice period *</label>
               
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
               
                {showerror && <h5 style={{ textAlign: 'center', color: 'red',  fontSize:"12px",marginTop: '20px'}}>Please complete all required fields</h5>}
            {emailExist && <h5 style={{ textAlign: 'center', color: 'red', fontSize:"12px", marginTop: '20px'}}>Error sending application. If you have registered previously, please login and try again.</h5>}
                <div className="d-grid mt-5">
                <button type="submit" className="btn btn-lg" style={{backgroundColor: '#FD2DC3', color: '#fff'}}>Add Developer</button>
                </div>
            </form>
         
            {/* End Form */}
            </div>
        </div>
             
   
}
        
   
        </main>
    </>
    )
    
}



export default dynamic (() => Promise.resolve(companyDevelopers), {ssr: false})