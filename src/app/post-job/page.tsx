'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { IJobApplication } from '../interfaces/IJobApplication';
import { CreateJob } from '../endpoints/api';
import AutoComplete from "react-google-autocomplete";
import Footer from '../components/Footer/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';


function pricing() {
    const [menuToggler, setMenuToggler] = useState<boolean>(false);
    const [activeStep, setActiveStep] = useState(0);

    //formInputs
    const [country, setCountry] = useState(0);
    const [language, setLanguage] = useState(0);
    const [companyName, setCompanyName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [postcode, setCode] = useState("");
    const [gpsLatitude, setGpsLatitude] = useState("");
    const [gpsLongitude, setGpsLongitude] = useState("");
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [remote, setRemote] = useState(0);
    const [jobtype, setJobType] = useState(0);
    const [hires, setHires] = useState('');
    const [urgency, setUrgency] = useState('');
    const [pay, setPay] = useState(0);
    const [currency, setCurrency] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [period, setPeriod] = useState('');
    const [signingBonus, setSigningBonus] = useState(0);
    const [commisionPay, setCommisionPay] = useState(0);
    const [bonusPay, setBonusPay] = useState(0);
    const [tips, setTips] = useState(0);
    const [otherPay, setOtherPay] = useState(0);
    const [healthInsurance, setHealthInsurance] = useState(0 !== 0);
    const [paidTimeOff, setPaidTimeOff] = useState(0 !== 0);
    const [dentalInsurance, setDentalInsurance] = useState(0 !== 0);
    const [retirememntFund, setRetirememntFund] = useState(0 !== 0);
    const [flexibleSchedule, setFlexibleSchedule] = useState(0 !== 0);
    const [tuition, setTuition] = useState(0 !== 0);
    const [lifeInsurance, setLifeInsurance] = useState(0 !== 0);
    const [retirememntFundMatch, setRetirememntFundMatch] = useState(0 !== 0);
    const [disabilityInsurance, setDisabilityInsurance] = useState(0 !== 0);
    const [retirementPlan,  setRetirementPlan] = useState(0 !== 0);
    const [referalProgram, setReferalProgram] = useState(0 !== 0);
    const [employeeDiscount, setEmployeeDiscount] = useState(0 !== 0);
    const [spendingAccount, setSpendingAccount] = useState(0 !== 0);
    const [relocation, setRelocation] = useState(0 !== 0);
    const [parentalLeave, setParentalLeave] = useState(0 !== 0);
    const [otherBenefits, setOtherBenefits] = useState(0 !== 0);
    const [noBenefits, setNoBenefits] = useState(0 !== 0);
    const [jobSchedule, setJobSchedule] = useState(0);
    const [website, setWebsite] = useState('');
    const [responsibilities, setResponsibilities] = useState('');
    const [methodToRecieveApplications, setMethodToRecieveApplications] = useState(0);
    const [submitResume, setSubmitResume] = useState(0);
    const [dailyUpdateEmailAddress, setDailyUpdateEmailAddress] = useState('');
    const [individualUpDateEmailAddress, setIndividualUpDateEmailAddress] = useState('');
    const [dailyUpdateEmail, setDailyUpdateEmail] = useState(0 !== 0);
    const [individualUpDateEmail, setIndividualUpDateEmail] = useState(0 !== 0);


    async function createJobPost(){

      const payload: IJobApplication = {
        country: country,
        language: language,
        companyName: companyName,
        jobTitle:jobTitle,
        streetAddress:streetAddress,
        city:city,
        state:state,
        zipCode:zipCode,
        remote:remote,
        jobtype:jobtype,
        hires:hires,
        urgency:urgency,
        pay:pay,
        currency:currency,
        fromDate:fromDate,
        toDate:toDate,
        period:period,
        signingBonus:signingBonus,
        commisionPay:commisionPay,
        bonusPay:bonusPay,
        tips:tips,
        otherPay:otherPay,
        healthInsurance:healthInsurance,
        paidTimeOff:paidTimeOff,
        dentalInsurance:dentalInsurance,
        retirememntFund:retirememntFund,
        flexibleSchedule:flexibleSchedule,
        tuition:tuition,
        lifeInsurance:lifeInsurance,    
        retirememntFundMatch:retirememntFundMatch,
        disabilityInsurance:disabilityInsurance,
        retirementPlan:retirementPlan,
        referalProgram:referalProgram,
        employeeDiscount:employeeDiscount,
        spendingAccount:spendingAccount,
        relocation:relocation,
        parentalLeave:parentalLeave,
        otherBenefits:otherBenefits,
        noBenefits:noBenefits,
        jobSchedule:jobSchedule,
        website:website,
        responsibilities:responsibilities,
        methodToRecieveApplications:methodToRecieveApplications,
        submitResume:submitResume,
        dailyUpdateEmailAddress:dailyUpdateEmailAddress,
        individualUpDateEmailAddress:individualUpDateEmailAddress,
        dailyUpdateEmail:dailyUpdateEmail,
        individualUpDateEmail:individualUpDateEmail
      };
      

  
      // const res = await CreateJob(payload);

      console.log(payload)

    }


  function setStepActive(step:number){

    setActiveStep(step);

  }

  const buttonStyle = {
    backgroundColor: '#FD2DC3',
    color: 'white',
  };
  

  const handleRemoteChange = (e : any) => {
    const newValue = parseFloat(e.target.value);
    setRemote(newValue);
  };
  const handleJobTypeChange = (e : any) => {
    const newType = parseFloat(e.target.value);
    setJobType(newType);
  };

  // const handleInputChange = (e : any) => {
  //   setCompanyName(e.target.value);
  // };
    return (


<>
  <>

  {/* ========== MAIN CONTENT ========== */}
  <main id="content" role="main">
    {/* Content */}
    <div className="container content-space-2">
      {/* Step Form */}
      <form
        className="js-step-form"
        data-hs-step-form-options='{
        "progressSelector": "#postJobStepFormProgress",
        "stepsSelector": "#postJobStepFormContent",
        "endSelector": "#postJobFinishBtn",
        "isValidate": false
      }'
      >
        <div className="row">
          <div className="col-lg-4">
            {/* Sticky Block */}
            <div id="stickyBlockStartPoint">
              <div
                className="js-sticky-block"
                data-hs-sticky-block-options='{
               "parentSelector": "#stickyBlockStartPoint",
               "breakpoint": "lg",
               "startPoint": "#stickyBlockStartPoint",
               "endPoint": "#stickyBlockEndPoint",
               "stickyOffsetTop": 20,
               "stickyOffsetBottom": 0
             }'
              >
                {/* Step */}
                <ul
                  id="postJobStepFormProgress"
                  className="js-step-progress step step-icon-xs step-border-last-0 mt-5"
                >
                  <li className={`step-item ${activeStep==0? "active focus":""}`}>
                    <a
                      className="step-content-wrapper"
                      onClick={()=>{setStepActive(0)}}
                      data-hs-step-form-next-options='{
                  "targetSelector": "#postJobStepBasic"
                }'
                    >
                      <span className="step-icon step-icon-soft-dark">1</span>
                      <div className="step-content">
                        <span className="step-title">Getting started</span>
                        <span className="step-title-description step-text">
                          General info about company
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className={`step-item ${activeStep==1? "active focus":""}`}>
                    <a
                      className="step-content-wrapper"
                      onClick={()=>{setStepActive(1)}}
                      data-hs-step-form-next-options='{
                  "targetSelector": "#postJobStepAddress"
                }'
                    >
                      <span className="step-icon step-icon-soft-dark">2</span>
                      <div className="step-content">
                        <span className="step-title">Address</span>
                        <span className="step-title-description step-text">
                          Company location address
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className={`step-item ${activeStep==2? "active focus":""}`}>
                    <a
                      className="step-content-wrapper"
                     onClick={()=>{setStepActive(2)}}
                      data-hs-step-form-next-options='{
                  "targetSelector": "#postJobStepJobDetails"
                }'
                    >
                      <span className="step-icon step-icon-soft-dark">3</span>
                      <div className="step-content">
                        <span className="step-title">Job details</span>
                        <span className="step-title-description step-text">
                          Job type details and more
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className={`step-item ${activeStep==3? "active focus":""}`}>
                    <a
                      className="step-content-wrapper"
                      onClick={()=>{setStepActive(3)}}
                      data-hs-step-form-next-options='{
                  "targetSelector": "#postJobStepPayment"
                }'
                    >
                      <span className="step-icon step-icon-soft-dark">4</span>
                      <div className="step-content">
                        <span className="step-title">Payment</span>
                        <span className="step-title-description step-text">
                          Pay and receive options
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className={`step-item ${activeStep==4? "active focus":""}`}>
                    <a
                      className="step-content-wrapper"
                      onClick={()=>{setStepActive(4)}}
                      data-hs-step-form-next-options='{
                  "targetSelector": "#postJobStepAdditionalJobDetails"
                }'
                    >
                      <span className="step-icon step-icon-soft-dark">5</span>
                      <div className="step-content">
                        <span className="step-title">
                          Additional job details
                        </span>
                        <span className="step-title-description step-text">
                          Job schedule
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className={`step-item ${activeStep==5? "active focus":""}`}>
                    <a
                      className="step-content-wrapper"
                      onClick={()=>{setStepActive(5)}}
                      data-hs-step-form-next-options='{
                  "targetSelector": "#postJobStepJobDescription"
                }'
                    >
                      <span className="step-icon step-icon-soft-dark">6</span>
                      <div className="step-content">
                        <span className="step-title">Job description</span>
                        <span className="step-title-description step-text">
                          Describe the responsibilities of this job
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className={`step-item ${activeStep==6? "active focus":""}`}>
                    <a
                      className="step-content-wrapper"
                      onClick={()=>{setStepActive(6)}}
                      data-hs-step-form-next-options='{
                  "targetSelector": "#postJobStepJobApplicationSettings"
                }'
                    >
                      <span className="step-icon step-icon-soft-dark">7</span>
                      <div className="step-content">
                        <span className="step-title">Application settings</span>
                        <span className="step-title-description step-text">
                          Control job notifications
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
                {/* End Step */}
              </div>
            </div>
            {/* End Sticky Block */}
          </div>
          {/* End Col */}
          <div id="formContainer" className="col-lg-8">
            {/* Content Step Form */}
            <div id="postJobStepFormContent">
              {/* Card */}
              <div id="postJobStepBasic" style={{ display: activeStep!= 0? "none":"" }} className={activeStep==0?"card active":"card"}>
                {/* Header */}
                <div
                  className="card-header bg-img-start"
                  style={{
                    backgroundImage: "url(../assets/svg/components/card-1.svg)"
                  }}
                >
                  <div className="flex-grow-1">
                    <span className="d-lg-none">Step 1 of 7</span>
                    <h3 className="card-header-title">Getting started</h3>
                  </div>
                </div>
                {/* End Header */}
                {/* Body */}
                <div className="card-body">
                  {/* Form */}
                  <div className="mb-4">
                    <label htmlFor="countryLabel" className="form-label">
                      Country
                    </label>
                    {/* Select */}
                    <select
                      id="countryLabel"
                      className="form-select"
                      name="countrySelect"
                      onChange={((e)=>setCountry(parseInt(e.target.value)))}
                    >
                       <option selected={country==0} value={0}>South Africa</option>
                       <option selected={country==1} value={1}>United States</option>

                    </select>
                    {/* End Select */}
                  </div>
                  {/* End Form */}
                  {/* Form */}
                  <div className="mb-4">
                    <label htmlFor="languageLabel" className="form-label">
                      What language will your job posting be displayed in?
                    </label>
                    {/* Select */}
                    <select
                      id="languageLabel"
                      className="form-select"
                      name="languageSelect"
                      onChange={((e)=>setLanguage(parseInt(e.target.value)))}
                    >
                      <option label="empty" />
                      <option value={0}>English (US)</option>
                      <option value={1} selected={language==1}>
                        English (UK)
                      </option>
                      <option value="language3">Deutsch</option>
                      <option value="language4">Dansk</option>
                      <option value="language5">Español</option>
                      <option value="language6">Nederlands</option>
                      <option value="language7">Italiano</option>
                      <option value="language8">中文 (繁體)</option>
                    </select>
                    {/* End Select */}
                  </div>
                  {/* End Form */}
                  {/* Form */}
                  <div className="mb-4">
                    <label htmlFor="companyNameLabel" className="form-label">
                      Company name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="companyName"
                      id="companyNameLabel"
                      placeholder="Htmlstream"
                      aria-label="Htmlstream"
                      onChange={(e) => setCompanyName(String(e.target.value))}
                    />
                  </div>
                  {/* End Form */}
                  {/* Form */}
                  <div className="mb-4">
                    <label htmlFor="jobTitleLabel" className="form-label">
                      Job title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="jobTitleName"
                      id="jobTitleLabel"
                      placeholder="UI/UX Designer"
                      aria-label="UI/UX Designer"
                      onChange={((e)=>setJobTitle(e.target.value))}
                    />
                  </div>
                  {/* End Form */}
                </div>
                {/* End Body */}
                {/* Footer */}
                <div className="card-footer pt-0">
                  <div className="d-flex justify-content-end align-items-center">
                    <button
                    onClick={()=>{setStepActive(1)}}
                      type="button"
                      className="btn btn-primary"
                      style={{ 
                        background: 'linear-gradient(90deg, #FD2DC3 -2.8%, rgba(75, 76, 78, 0.4) 124.34%)',
                        color: 'white'
                      }}
                      data-hs-step-form-next-options='{
                        "targetSelector": "#postJobStepAddress"
                      }'
                    >
                      Save and continue{" "}
                      <i className="bi-chevron-right small ms-1" />
                    </button>
                  </div>
                </div>
                {/* End Footer */}
              </div>
              {/* End Card */}
              {/* Card */}
              <div
                id="postJobStepAddress"
                style={{ display: activeStep!= 1? "none":"" }} 
                className={activeStep==1?"card active":"card"}>
                {/* Header */}
                <div
                  className="card-header bg-img-start"
                  style={{
                    backgroundImage: "url(../assets/svg/components/card-1.svg)"
                  }}
                >
                  <div className="flex-grow-1" >
                    <span className="d-lg-none">Step 2 of 7</span>
                    <h3 className="card-header-title">
                      Commute is the #2 reason candidates withdraw
                    </h3>
                    <p className="card-text">
                      Save time in the interview stage by providing location
                      information.
                    </p>
                  </div>
                </div>
                {/* End Header */}
                {/* Body */}
                <div className="card-body">
                  {/* Form */}
                  <div className="mb-4">
                    <label htmlFor="streetAddressLabel" className="form-label">
                      Enter a street address
                    </label>
                    <p className="small mt-n2">
                      We won't share your street address. We use your location
                      to find candidates in your area.
                    </p>
                    <AutoComplete
                        apiKey={"AIzaSyDsGw9PT-FBFk7DvGK46BpvEURMxcfJX5k"}
                        onPlaceSelected={(place) => {
                          console.log(place);
                          setCity(place?.address_components?.[0]?.long_name || '');
                          setCountry(place?.address_components?.slice(-1)?.[0]?.long_name || '');
                          setStreetAddress(place?.formatted_address || '');
                          setGpsLatitude(`${place?.geometry?.location?.lat() || ''}`);
                          setGpsLongitude(`${place?.geometry?.location?.lng() || ''}`);
                          console.log(gpsLatitude)
                        }}
                        options={{
                          types: ["(cities)"], //Must add street addresses not just cities
                          componentRestrictions: { country: "za" },
                        }}
                      />
                       

                  </div>
                  {/* End Form */}
                  <div className="row gx-3">
                    <div className="col-sm-6">
                      {/* Form */}
                      <div className="mb-4">
                        <label htmlFor="cityLabel" className="form-label">
                          City
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="cityName"
                          id="cityLabel"
                          placeholder="London"
                          aria-label="London"
                          onChange={((e)=>setCity(e.target.value))}
                        />
                      </div>
                      {/* End Form */}
                    </div>
                    {/* End Col */}
                    <div className="col-6 col-sm-3">
                      {/* Form */}
                      <div className="mb-4">
                        <label htmlFor="stateLabel" className="form-label">
                          State
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="stateName"
                          id="stateLabel"
                          placeholder="Camberwell"
                          aria-label="Camberwell"
                          onChange={((e)=>setState(e.target.value))}
                        />
                      </div>
                      {/* End Form */}
                    </div>
                    {/* End Col */}
                    <div className="col-6 col-sm-3">
                      {/* Form */}
                      <div className="mb-4">
                        <label htmlFor="zipCodeLabel" className="form-label">
                          ZIP code
                        </label>
                        <input
                          type="text"
                          className="js-masked-input form-control"
                          name="zipCodeName"
                          id="zipCodeLabel"
                          placeholder="xxx xxx"
                          aria-label="xxx xxx"
                          data-hs-mask-options='{
                           "template": "AA0 0AA"
                         }'
                         onChange={((e)=>setZipCode(e.target.value))}
                        />
                      </div>
                      {/* End Form */}
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                  {/* Form */}
                  <div className="mb-4">
                    <label className="form-label">
                      Can this job be performed remotely, meaning primarily from
                      home? If so, we’ll add a "Remote" tag to your post
                    </label>
                    <div className="d-grid gap-2">
                      {/* Custom Radio */}
                      <label
                        className="form-control"
                        htmlFor="remoteOccasionRadio1"
                      >
                        <span className="form-check custom-radio">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="remoteOccasionRadioName"
                            id="remoteOccasionRadio1"
                            defaultChecked={true}
                            onChange={handleRemoteChange}
                          />
                          <span className="form-check-label">No</span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                      {/* Custom Radio */}
                      <label
                        className="form-control"
                        htmlFor="remoteOccasionRadio2"
                      >
                        <span className="form-check custom-radio">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="remoteOccasionRadioName"
                            id="remoteOccasionRadio2"
                            onChange={handleRemoteChange}
                          />
                          <span className="form-check-label">Yes, always</span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                      {/* Custom Radio */}
                      <label
                        className="form-control"
                        htmlFor="remoteOccasionRadio3"
                      >
                        <span className="form-check custom-radio">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="remoteOccasionRadioName"
                            id="remoteOccasionRadio3"
                            onChange={handleRemoteChange}
                          />
                          <span className="form-check-label">
                            Yes, occasionally
                          </span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                      {/* Custom Radio */}
                    
                    </div>
                  </div>
                  {/* End Form */}
                </div>
                {/* End Body */}
                {/* Footer */}
                <div className="card-footer pt-0">
                  <div className="d-flex align-items-center">
                    <button
                    onClick={()=>{setStepActive(0)}}
                      type="button"
                      className="btn btn-ghost-secondary"
                      data-hs-step-form-prev-options='{
                   "targetSelector": "#postJobStepBasic"
                 }'
                    >
                      <i className="bi-chevron-left small ms-1" /> Previous step
                    </button>
                    <div className="ms-auto">
                      <button
                      onClick={()=>{setStepActive(2)}}
                        type="button"
                        className="btn btn-primary"
                        style={{ 
                          background: 'linear-gradient(90deg, #FD2DC3 -2.8%, rgba(75, 76, 78, 0.4) 124.34%)',
                          color: 'white'
                        }}
                        data-hs-step-form-next-options='{
                          "targetSelector": "#postJobStepJobDetails"
                        }'
                      >
                        Save and continue{" "}
                        <i className="bi-chevron-right small ms-1" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* End Footer */}
              </div>
              {/* End Card */}
              {/* Card */}
              <div
                id="postJobStepJobDetails"
                style={{ display: activeStep!= 2? "none":"" }} 
                className={activeStep==2?"card active":"card"}>
              
                {/* Header */}
                <div
                  className="card-header bg-img-start"
                  style={{
                    backgroundImage: "url(../assets/svg/components/card-1.svg)"
                  }}
                >
                  <div className="flex-grow-1">
                    <span className="d-lg-none">Step 3 of 7</span>
                    <h3 className="card-header-title">Job details</h3>
                  </div>
                </div>
                {/* End Header */}
                {/* Body */}
                <div className="card-body">
                  {/* Form */}
                  <div className="mb-4">
                    <label className="form-label">
                      What type of job is it?
                    </label>
                    <div className="d-grid gap-2">
                      {/* Custom Radio */}
                      <label className="form-control" htmlFor="jobTypeRadio1">
                        <span className="form-check custom-radio">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="jobTypeRadioName"
                            id="jobTypeRadio1"
                            defaultChecked={true}
                            onChange={handleJobTypeChange}
                            
                          />
                          <span className="form-check-label">Full time</span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                      {/* Custom Radio */}
                      <label className="form-control" htmlFor="jobTypeRadio2">
                        <span className="form-check custom-radio">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="jobTypeRadioName"
                            id="jobTypeRadio2"
                            onChange={handleJobTypeChange}
                          />
                          <span className="form-check-label">Part time</span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                      {/* Custom Radio */}
                      <label className="form-control" htmlFor="jobTypeRadio3">
                        <span className="form-check custom-radio">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="jobTypeRadioName"
                            id="jobTypeRadio3"
                            onChange={handleJobTypeChange}
                          />
                          <span className="form-check-label">Temporary</span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                      {/* Custom Radio */}
                      <label className="form-control" htmlFor="jobTypeRadio4">
                        <span className="form-check custom-radio">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="jobTypeRadioName"
                            id="jobTypeRadio4"
                            onChange={handleJobTypeChange}
                          />
                          <span className="form-check-label">Contract</span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                      {/* Custom Radio */}
                      <label className="form-control" htmlFor="jobTypeRadio5">
                        <span className="form-check custom-radio">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="jobTypeRadioName"
                            id="jobTypeRadio5"
                            onChange={handleJobTypeChange}
                          />
                          <span className="form-check-label">Internship</span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                      {/* Custom Radio */}
                      <label className="form-control" htmlFor="jobTypeRadio6">
                        <span className="form-check custom-radio">
                          <input
                            type="radio"
                            className="form-check-input"
                            name="jobTypeRadioName"
                            id="jobTypeRadio6"
                            onChange={handleJobTypeChange}
                          />
                          <span className="form-check-label">
                            Commission only
                          </span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                    </div>
                  </div>
                  {/* End Form */}
                  {/* Form */}
                  <div className="mb-4">
                    <label htmlFor="numberOfHiresLabel" className="form-label">
                      How many hires do you want to make for this position?
                    </label>
                    <p className="small mt-n2">
                      More hires will require more candidates.
                    </p>
                    {/* Select */}
                    <select
                      id="numberOfHiresLabel"
                      className="form-select"
                      name="numberOfHiresSelect"
                      onChange={((e)=>setHires(e.target.value))}
                    >
                      <option value="numberOfHires1" selected={true}>
                        1
                      </option>
                      <option value="numberOfHires2">2</option>
                      <option value="numberOfHires3">3</option>
                      <option value="numberOfHires4">4</option>
                      <option value="numberOfHires5">5</option>
                      <option value="numberOfHires6">6</option>
                      <option value="numberOfHires7">7</option>
                      <option value="numberOfHires8">8</option>
                      <option value="numberOfHires9">9</option>
                      <option value="numberOfHires10">10</option>
                      <option value="numberOfHires10+">10+ hires</option>
                      <option value="numberOfHiresOngoingNeed">
                        I have an ongoing need to fill this role
                      </option>
                    </select>
                    {/* End Select */}
                  </div>
                  {/* End Form */}
                  {/* Form */}
                  <div className="mb-4">
                    <label htmlFor="deadlineLabel" className="form-label">
                      How urgently do you need to make a hire?
                    </label>
                    <p className="small mt-n2">
                      Help us help you hit your deadline.
                    </p>
                    {/* Select */}
                    <select
                      id="deadlineLabel"
                      className="form-select"
                      name="deadlineSelect"
                      onChange={((e)=>setUrgency(e.target.value))}
                    >
                      <option value="deadline1">1 to 3 days</option>
                      <option value="deadline2">3 to 7 days</option>
                      <option value="deadline3">1 to 2 weeks</option>
                      <option value="deadline4">2 to 4 weeks</option>
                      <option value="deadline5" selected={true}>
                        More than 4 weeks
                      </option>
                    </select>
                    {/* End Select */}
                  </div>
                  {/* End Form */}
                </div>
                {/* End Body */}
                {/* Footer */}
                <div className="card-footer pt-0">
                  <div className="d-flex align-items-center">
                    <button
                    onClick={()=>{setStepActive(1)}}
                      type="button"
                      className="btn btn-ghost-secondary"
                      data-hs-step-form-prev-options='{
                   "targetSelector": "#postJobStepAddress"
                 }'
                    >
                      <i className="bi-chevron-left small ms-1" /> Previous step
                    </button>
                    <div className="ms-auto">
                      <button
                      onClick={()=>{setStepActive(3)}}
                        type="button"
                        className="btn btn-primary"
                        style={{ 
                          background: 'linear-gradient(90deg, #FD2DC3 -2.8%, rgba(75, 76, 78, 0.4) 124.34%)',
                          color: 'white'
                        }}
                        data-hs-step-form-next-options='{
                          "targetSelector": "#postJobStepPayment"
                        }'
                      >
                        Save and continue{" "}
                        <i className="bi-chevron-right small ms-1" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* End Footer */}
              </div>
              {/* End Card */}
              {/* Card */}
              <div
                id="postJobStepPayment"
                style={{ display: activeStep!= 3? "none":"" }} 
                className={activeStep==3?"card active":"card"}>
              
                {/* Header */}
                <div
                  className="card-header bg-img-start"
                  style={{
                    backgroundImage: "url(../assets/svg/components/card-1.svg)"
                  }}
                >
                  <div className="flex-grow-1">
                    <span className="d-lg-none">Step 4 of 7</span>
                    <h3 className="card-header-title">What's the pay?</h3>
                    <p className="card-text">
                      Tell job seekers the pay and receive up to two times more
                      applications
                    </p>
                  </div>
                </div>
                {/* End Header */}
                {/* Body */}
                <div className="card-body">
                  <div className="row gx-3">
                    <div className="col-sm-6">
                      {/* Form */}
                      <div className="mb-4">
                        <label
                          htmlFor="jobSalaryTypeLabel"
                          className="form-label"
                        >
                          What is the pay for this job?
                        </label>
                        {/* Select */}
                        <select
                          id="jobSalaryTypeLabel"
                          className="form-select"
                          name="jobSalaryTypeSelect"
                          // onChange={((e)=>setPay(e.target.value))}
                        >
                          <option value="jobSalaryType1" selected={true}>
                            Range
                          </option>
                          <option value="jobSalaryType2">Starting at</option>
                          <option value="jobSalaryType3">Up to</option>
                          <option value="jobSalaryType4">Exact rate</option>
                          <option value="jobSalaryType5">
                            Salary based on experience
                          </option>
                        </select>
                        {/* End Select */}
                      </div>
                      {/* End Form */}
                    </div>
                    {/* End Col */}
                    <div className="col-sm-6">
                      {/* Form */}
                      <div className="mb-4">
                        <label
                          htmlFor="jobSalaryCurrencyLabel"
                          className="form-label"
                        >
                          Currency
                        </label>
                        {/* Select */}
                        <select
                          id="jobSalaryCurrencyLabel"
                          className="form-select"
                          name="jobSalaryCurrencySelect"
                          onChange={((e)=>setCurrency(e.target.value))}
                        >
                          <option value="Rand" selected={true}>
                            ZAR (South African Rand)
                          </option>
                          <option value="currency2">
                            GBP (United Kingdom Pound)
                          </option>
                          <option value="currency3">
                            Euro (Euro Member Countries)
                          </option>
                        </select>
                        {/* End Select */}
                      </div>
                      {/* End Form */}
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                  <div className="row gx-3">
                    <div className="col-6 col-sm-4">
                      {/* Form */}
                      <div className="mb-4">
                        <label htmlFor="salaryFromLabel" className="form-label">
                          From
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="salaryFromName"
                          id="salaryFromLabel"
                          placeholder={""}
                          onChange={((e)=>setFromDate(e.target.value))}
                          // aria-label={0}
                        />
                      </div>
                      {/* End Form */}
                    </div>
                    {/* End Col */}
                    <div className="col-6 col-sm-4">
                      {/* Form */}
                      <div className="mb-4">
                        <label htmlFor="salaryToLabel" className="form-label">
                          To
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="salaryToName"
                          id="salaryToLabel"
                          placeholder={""}
                          onChange={((e)=>setToDate(e.target.value))}
                          // aria-label={0}
                        />
                      </div>
                      {/* End Form */}
                    </div>
                    {/* End Col */}
                    <div className="col-12 col-sm-4">
                      {/* Form */}
                      <div className="mb-4">
                        <label
                          htmlFor="jobSalaryPeriodLabel"
                          className="form-label"
                        >
                          Period
                        </label>
                        {/* Select */}
                        <select
                          id="jobSalaryPeriodLabel"
                          className="form-select"
                          name="jobSalaryPeriodSelect"
                          onChange={((e)=>setPeriod(e.target.value))}
                        >
                          <option value="jobSalaryPeriod1">per hour</option>
                          <option value="jobSalaryPeriod2">per day</option>
                          <option value="jobSalaryPeriod3">per week</option>
                          <option value="jobSalaryPeriod4">per month</option>
                          <option value="jobSalaryPeriod5" selected={true}>
                            per year
                          </option>
                        </select>
                        {/* End Select */}
                      </div>
                      {/* End Form */}
                    </div>
                    {/* End Col */}
                  </div>
                  {/* End Row */}
                  {/* Form */}
                  <div className="mb-4">
                    <label className="form-label">
                      Are there any forms of supplemental pay offered?{" "}
                      <span className="form-label-secondary">(Optional)</span>
                    </label>
                    <div className="d-grid gap-2">
                      {/* Custom Radio */}
                      <label
                        className="form-control"
                        htmlFor="supplementalPayCheckbox1"
                      >
                        <span className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="supplementalPayCheckboxName"
                            id="supplementalPayCheckbox1"
                          />
                          <span className="form-check-label">
                            Signing bonus
                          </span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                      {/* Custom Radio */}
                      <label
                        className="form-control"
                        htmlFor="supplementalPayCheckbox2"
                      >
                        <span className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="supplementalPayCheckboxName"
                            id="supplementalPayCheckbox2"
                          />
                          <span className="form-check-label">
                            Commission pay
                          </span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                      {/* Custom Radio */}
                      <label
                        className="form-control"
                        htmlFor="supplementalPayCheckbox3"
                      >
                        <span className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="supplementalPayCheckboxName"
                            id="supplementalPayCheckbox3"
                          />
                          <span className="form-check-label">Bonus pay</span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                      {/* Custom Radio */}
                      <label
                        className="form-control"
                        htmlFor="supplementalPayCheckbox4"
                      >
                        <span className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="supplementalPayCheckboxName"
                            id="supplementalPayCheckbox4"
                          />
                          <span className="form-check-label">Tips</span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                      {/* Custom Radio */}
                      <label
                        className="form-control"
                        htmlFor="supplementalPayCheckbox5"
                      >
                        <span className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="supplementalPayCheckboxName"
                            id="supplementalPayCheckbox5"
                          />
                          <span className="form-check-label">Other</span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                    </div>
                  </div>
                  {/* End Form */}
                  {/* Form */}
                  <div className="mb-4">
                    <label className="form-label">
                      Are any of the following benefits offered?
                    </label>
                    <div className="row gx-3">
                      <div className="col-md-6">
                        <div className="d-grid gap-2">
                          {/* Custom Radio */}
                          <label
                            className="form-control"
                            htmlFor="benefitsCheckbox1"
                          >
                            <span className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="benefitsCheckboxName"
                                id="benefitsCheckbox1"
                                onChange={((e)=>setHealthInsurance(e.target.checked))}
                              />
                              <span className="form-check-label">
                                Health insurance
                              </span>
                            </span>
                          </label>
                          {/* End Custom Radio */}
                          {/* Custom Radio */}
                          <label
                            className="form-control"
                            htmlFor="benefitsCheckbox2"
                          >
                            <span className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="benefitsCheckboxName"
                                id="benefitsCheckbox2"
                                onChange={((e)=>setPaidTimeOff(e.target.checked))}
                              />
                              <span className="form-check-label">
                                Paid time off
                              </span>
                            </span>
                          </label>
                          {/* End Custom Radio */}
                          {/* Custom Radio */}
                          <label
                            className="form-control"
                            htmlFor="benefitsCheckbox3"
                          >
                            <span className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="benefitsCheckboxName"
                                id="benefitsCheckbox3"
                                onChange={((e)=>setDentalInsurance(e.target.checked))}
                              />
                              <span className="form-check-label">
                                Dental insurance
                              </span>
                            </span>
                          </label>
                          {/* End Custom Radio */}               
                          {/* Custom Radio */}
                          <label
                            className="form-control"
                            htmlFor="benefitsCheckbox6"
                          >
                            <span className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="benefitsCheckboxName"
                                id="benefitsCheckbox6"
                                onChange={((e)=>setFlexibleSchedule(e.target.checked))}
                              />
                              <span className="form-check-label">
                                Flexible schedule
                              </span>
                            </span>
                          </label>
                          {/* End Custom Radio */}
                          {/* Custom Radio */}
                          <label
                            className="form-control"
                            htmlFor="benefitsCheckbox7"
                          >
                            <span className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="benefitsCheckboxName"
                                id="benefitsCheckbox7"
                                onChange={((e)=>setTuition(e.target.checked))}
                              />
                              <span className="form-check-label">
                                Tuition reimbursement
                              </span>
                            </span>
                          </label>
                          {/* End Custom Radio */}
                          {/* Custom Radio */}
                          <label
                            className="form-control"
                            htmlFor="benefitsCheckbox8"
                          >
                            <span className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="benefitsCheckboxName"
                                id="benefitsCheckbox8"
                                onChange={((e)=>setLifeInsurance(e.target.checked))}
                              />
                              <span className="form-check-label">
                                Life insurance
                              </span>
                            </span>
                          </label>
                          {/* End Custom Radio */}
                          {/* Custom Radio */}
                          <label
                            className="form-control"
                            htmlFor="benefitsCheckbox10"
                          >
                            <span className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="benefitsCheckboxName"
                                id="benefitsCheckbox10"
                                onChange={((e)=>setDisabilityInsurance(e.target.checked))}
                              />
                              <span className="form-check-label">
                                Disability insurance
                              </span>
                            </span>
                          </label>
                          {/* End Custom Radio */}
                        </div>
                      </div>
                      {/* End Col */}
                      <div className="col-md-6">
                        <div className="d-grid gap-2">
                          {/* Custom Radio */}
                          <label
                            className="form-control"
                            htmlFor="benefitsCheckbox11"
                          >
                            <span className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="benefitsCheckboxName"
                                id="benefitsCheckbox11"
                                onChange={((e)=>setRetirementPlan(e.target.checked))}
                              />
                              <span className="form-check-label">
                                Retirement plan
                              </span>
                            </span>
                          </label>
                          {/* End Custom Radio */}
                          {/* Custom Radio */}
                          <label
                            className="form-control"
                            htmlFor="benefitsCheckbox13"
                          >
                            <span className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="benefitsCheckboxName"
                                id="benefitsCheckbox13"
                                onChange={((e)=>setEmployeeDiscount(e.target.checked))}
                              />
                              <span className="form-check-label">
                                Employee discount
                              </span>
                            </span>
                          </label>
                          {/* End Custom Radio */}
                          {/* Custom Radio */}
                          <label
                            className="form-control"
                            htmlFor="benefitsCheckbox16"
                          >
                            <span className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="benefitsCheckboxName"
                                id="benefitsCheckbox16"
                                onChange={((e)=>setRelocation(e.target.checked))}
                              />
                              <span className="form-check-label">
                                Relocation assistance
                              </span>
                            </span>
                          </label>
                          {/* End Custom Radio */}
                                            {/* Custom Radio */}
                                            <label
                            className="form-control"
                            htmlFor="benefitsCheckbox16"
                          >
                            <span className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="benefitsCheckboxName"
                                id="benefitsCheckbox16"
                                onChange={((e)=>setReferalProgram(e.target.checked))}
                              />
                              <span className="form-check-label">
                                Referral Program
                              </span>
                            </span>
                          </label>
                          {/* End Custom Radio */}
                          {/* Custom Radio */}
                          <label
                            className="form-control"
                            htmlFor="benefitsCheckbox17"
                          >
                            <span className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="benefitsCheckboxName"
                                id="benefitsCheckbox17"
                                onChange={((e)=>setParentalLeave(e.target.checked))}
                                
                              />
                              <span className="form-check-label">
                                Parental leave
                              </span>
                            </span>
                          </label>
                          {/* End Custom Radio */}
                          {/* Custom Radio */}
                          <label
                            className="form-control"
                            htmlFor="benefitsCheckbox18"
                          >
                            <span className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="benefitsCheckboxName"
                                id="benefitsCheckbox18"
                                onChange={((e)=>setSpendingAccount(e.target.checked))}
                              />
                              <span className="form-check-label">
                                FLexible Spending Account
                              </span>
                            </span>
                          </label>
                          {/* End Custom Radio */}
                          {/* Custom Radio */}
                          <label
                            className="form-control"
                            htmlFor="benefitsCheckbox18"
                          >
                            <span className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="benefitsCheckboxName"
                                id="benefitsCheckbox18"
                                onChange={((e)=>setRetirememntFund(e.target.checked))}
                              />
                              <span className="form-check-label">
                                401k
                              </span>
                            </span>
                          </label>
                          {/* End Custom Radio */}
                                {/* Custom Radio */}
                                <label
                            className="form-control"
                            htmlFor="benefitsCheckbox18"
                          >
                            <span className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="benefitsCheckboxName"
                                id="benefitsCheckbox18"
                                onChange={((e)=>setRetirememntFundMatch(e.target.checked))}
                              />
                              <span className="form-check-label">
                                401k Match
                              </span>
                            </span>
                          </label>
                          {/* End Custom Radio */}
                          {/* Custom Radio */}
                          <label
                            className="form-control"
                            htmlFor="benefitsCheckbox19"
                          >
                            <span className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="benefitsCheckboxName"
                                id="benefitsCheckbox19"
                                onChange={((e)=>setOtherBenefits(e.target.checked))}
                              />
                              <span className="form-check-label">Other</span>
                            </span>
                          </label>
                          {/* End Custom Radio */}
                          {/* Custom Radio */}
                          <label
                            className="form-control"
                            htmlFor="benefitsCheckbox20"
                          >
                            <span className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="benefitsCheckboxName"
                                id="benefitsCheckbox20"
                                defaultChecked={true}
                                onChange={((e)=>setNoBenefits(e.target.checked))}
                              />
                              <span className="form-check-label">None</span>
                            </span>
                          </label>
                          {/* End Custom Radio */}
                        </div>
                      </div>
                      {/* End Col */}
                    </div>
                    {/* End Row */}
                  </div>
                  {/* End Form */}
                </div>
                {/* End Body */}
                {/* Footer */}
                <div className="card-footer pt-0">
                  <div className="d-flex align-items-center">
                    <button
                    onClick={()=>{setStepActive(2)}}
                      type="button"
                      className="btn btn-ghost-secondary"
                      data-hs-step-form-prev-options='{
                   "targetSelector": "#postJobStepJobDetails"
                 }'
                    >
                      <i className="bi-chevron-left small ms-1" /> Previous step
                    </button>
                    <div className="ms-auto">
                      <button
                      onClick={()=>{setStepActive(4)}}
                        type="button"
                        className="btn btn-primary"
                        style={{ 
                          background: 'linear-gradient(90deg, #FD2DC3 -2.8%, rgba(75, 76, 78, 0.4) 124.34%)',
                          color: 'white'
                        }}
                        data-hs-step-form-next-options='{
                          "targetSelector": "#postJobStepAdditionalJobDetails"
                        }'
                      >
                        Save and continue{" "}
                        <i className="bi-chevron-right small ms-1" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* End Footer */}
              </div>
              {/* End Card */}
              {/* Card */}
              <div
                id="postJobStepAdditionalJobDetails"
                style={{ display: activeStep!= 4? "none":"" }} className={activeStep==4?"card active":"card"}>
                {/* Header */}
                <div
                  className="card-header bg-img-start"
                  style={{
                    backgroundImage: "url(../assets/svg/components/card-1.svg)"
                  }}
                >
                  <div className="flex-grow-1">
                    <span className="d-lg-none">Step 5 of 7</span>
                    <h3 className="card-header-title">
                      Additional job details
                    </h3>
                  </div>
                </div>
                {/* End Header */}
                {/* Body */}
                <div className="card-body">
                  {/* Form */}
                  <div className="mb-4">
                    <label className="form-label">
                      What is the schedule for this job?
                    </label>
                    <div className="d-grid gap-2">
                      {/* Custom Radio */}
                      <label
                        className="form-control"
                        htmlFor="officeHoursCheckbox1"
                      >
                        <span className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="officeHoursCheckboxName"
                            id="officeHoursCheckbox1"
                          />
                          <span className="form-check-label">8 hour shift</span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                      {/* Custom Radio */}
                      <label
                        className="form-control"
                        htmlFor="officeHoursCheckbox2"
                      >
                        <span className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="officeHoursCheckboxName"
                            id="officeHoursCheckbox2"
                          />
                          <span className="form-check-label">
                            10 hour shift
                          </span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                      {/* Custom Radio */}
                      <label
                        className="form-control"
                        htmlFor="officeHoursCheckbox3"
                      >
                        <span className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="officeHoursCheckboxName"
                            id="officeHoursCheckbox3"
                          />
                          <span className="form-check-label">
                            12 hour shift
                          </span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                      {/* Custom Radio */}
                      <label
                        className="form-control"
                        htmlFor="officeHoursCheckbox4"
                      >
                        <span className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="officeHoursCheckboxName"
                            id="officeHoursCheckbox4"
                          />
                          <span className="form-check-label">Weekends</span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                      {/* Custom Radio */}
                      <label
                        className="form-control"
                        htmlFor="officeHoursCheckbox5"
                      >
                        <span className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="officeHoursCheckboxName"
                            id="officeHoursCheckbox5"
                          />
                          <span className="form-check-label">
                            Monday to Friday
                          </span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                      {/* Custom Radio */}
                      <label
                        className="form-control"
                        htmlFor="officeHoursCheckbox6"
                      >
                        <span className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="officeHoursCheckboxName"
                            id="officeHoursCheckbox6"
                          />
                          <span className="form-check-label">On call</span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                      {/* Custom Radio */}
                      <label
                        className="form-control"
                        htmlFor="officeHoursCheckbox7"
                      >
                        <span className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="officeHoursCheckboxName"
                            id="officeHoursCheckbox7"
                          />
                          <span className="form-check-label">Holidays</span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                      {/* Custom Radio */}
                      <label
                        className="form-control"
                        htmlFor="officeHoursCheckbox8"
                      >
                        <span className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="officeHoursCheckboxName"
                            id="officeHoursCheckbox8"
                          />
                          <span className="form-check-label">Night shift</span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                      {/* Custom Radio */}
                      <label
                        className="form-control"
                        htmlFor="officeHoursCheckbox9"
                      >
                        <span className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="officeHoursCheckboxName"
                            id="officeHoursCheckbox9"
                          />
                          <span className="form-check-label">Overtime</span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                      {/* Custom Radio */}
                      <label
                        className="form-control"
                        htmlFor="officeHoursCheckbox10"
                      >
                        <span className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="officeHoursCheckboxName"
                            id="officeHoursCheckbox10"
                          />
                          <span className="form-check-label">Day shift</span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                      {/* Custom Radio */}
                      <label
                        className="form-control"
                        htmlFor="officeHoursCheckbox11"
                      >
                        <span className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="officeHoursCheckboxName"
                            id="officeHoursCheckbox11"
                          />
                          <span className="form-check-label">Other</span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                    </div>
                  </div>
                  {/* End Form */}
                  {/* Form */}
                  <div className="mb-4">
                    <label htmlFor="companyWebsiteLabel" className="form-label">
                      Please enter your company's website, if there is one:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="companyWebsite"
                      id="companyWebsiteLabel"
                      placeholder="http://site.com/"
                      aria-label="http://site.com/"
                      onChange={((e)=>setWebsite(e.target.value))}
                    />
                  </div>
                  {/* End Form */}
                </div>
                {/* End Body */}
                {/* Footer */}
                <div className="card-footer pt-0">
                  <div className="d-flex align-items-center">
                    <button
                    onClick={()=>{setStepActive(3)}}
                      type="button"
                      className="btn btn-ghost-secondary"
                      data-hs-step-form-prev-options='{
                   "targetSelector": "#postJobStepPayment"
                 }'
                    >
                      <i className="bi-chevron-left small ms-1" /> Previous step
                    </button>
                    <div className="ms-auto">
                      <button
                      onClick={()=>{setStepActive(5)}}
                        type="button"
                        className="btn btn-primary"
                        style={{ 
                          background: 'linear-gradient(90deg, #FD2DC3 -2.8%, rgba(75, 76, 78, 0.4) 124.34%)',
                          color: 'white'
                        }}
                        data-hs-step-form-next-options='{
                          "targetSelector": "#postJobStepJobDescription"
                        }'
                      >
                        Save and continue{" "}
                        <i className="bi-chevron-right small ms-1" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* End Footer */}
              </div>
              {/* End Card */}
              {/* Card */}
              <div
                id="postJobStepJobDescription"
                style={{ display: activeStep!= 5? "none":"" }} className={activeStep==5?"card active":"card"}>
              
                {/* Header */}
                <div
                  className="card-header bg-img-start"
                  style={{
                    backgroundImage: "url(../assets/svg/components/card-1.svg)"
                  }}
                >
                  <div className="flex-grow-1">
                    <span className="d-lg-none">Step 6 of 7</span>
                    <h3 className="card-header-title">Job description</h3>
                  </div>
                </div>
                {/* End Header */}
                {/* Body */}
                <div className="card-body">
                  {/* Form */}
                  <div className="mb-4">
                    <label className="form-label">
                      Describe the responsibilities of this job, required work
                      experience, skills, or education.
                    </label>
                    {/* <div className="mb-3">
                      <a
                        href="javascript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#realEstateUploadFiles"
                      >
                        Upload a .pdf or .docx
                      </a>
                    </div> */}
                    {/* Quill */}
                    <div className="quill-custom">
                      {/* <div
                        className="js-quill"
                        style={{ height: "15rem" }}
                        data-hs-quill-options='{
                     "placeholder": "Type your message...",
                      "modules": {
                        "toolbar": [
                          ["bold", "italic", "underline", "strike", "link", "image", "blockquote", "code", {"list": "bullet"}]
                        ]
                      }
                     }'
                      ></div> */}
                    </div>
                    {/* End Quill */}
                  </div>
                  {/* End Form */}
                  {/* Form */}
                  <div className="mb-4">
                    {/* <label className="form-label">
                      Include COVID-19 precautions{" "}
                      <span className="badge bg-soft-dark text-dark ms-1">
                        Important to job seekers
                      </span>
                    </label> */}
                    <p className="small mt-n2">
                      We'll save this information to make posting faster in the
                      future.
                    </p>
                    <div className="d-grid gap-2">
                      {/* Custom Radio */}
                      <label
                        className="form-control"
                        htmlFor="covid19PrecautionsCheckbox1"
                      >
                        <span className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="covid19PrecautionsCheckboxName"
                            id="covid19PrecautionsCheckbox1"
                          />
                          <span className="form-check-label">
                            Remote interview process
                          </span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                      {/* Custom Radio */}
                      <label
                        className="form-control"
                        htmlFor="covid19PrecautionsCheckbox2"
                      >
                        <span className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="covid19PrecautionsCheckboxName"
                            id="covid19PrecautionsCheckbox2"
                          />
                          <span className="form-check-label">
                            Personal protective equipment provided or required
                          </span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                      {/* Custom Radio */}
                      <label
                        className="form-control"
                        htmlFor="covid19PrecautionsCheckbox3"
                      >
                        <span className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="covid19PrecautionsCheckboxName"
                            id="covid19PrecautionsCheckbox3"
                          />
                          <span className="form-check-label">
                            Plastic shield at work stations
                          </span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                      {/* Custom Radio */}
                      <label
                        className="form-control"
                        htmlFor="covid19PrecautionsCheckbox4"
                      >
                        <span className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="covid19PrecautionsCheckboxName"
                            id="covid19PrecautionsCheckbox4"
                          />
                          <span className="form-check-label">
                            Temperature screenings
                          </span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                      {/* Custom Radio */}
                      <label
                        className="form-control"
                        htmlFor="covid19PrecautionsCheckbox5"
                      >
                        <span className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="covid19PrecautionsCheckboxName"
                            id="covid19PrecautionsCheckbox5"
                          />
                          <span className="form-check-label">
                            Social distancing guidelines in place
                          </span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                      {/* Custom Radio */}
                      <label
                        className="form-control"
                        htmlFor="covid19PrecautionsCheckbox6"
                      >
                        <span className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="covid19PrecautionsCheckboxName"
                            id="covid19PrecautionsCheckbox6"
                          />
                          <span className="form-check-label">
                            Virtual meetings
                          </span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                      {/* Custom Radio */}
                      <label
                        className="form-control"
                        htmlFor="covid19PrecautionsCheckbox7"
                      >
                        <span className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name="covid19PrecautionsCheckboxName"
                            id="covid19PrecautionsCheckbox7"
                          />
                          <span className="form-check-label">
                            Sanitizing, disinfecting, or cleaning procedures in
                            place
                          </span>
                        </span>
                      </label>
                      {/* End Custom Radio */}
                    </div>
                  </div>
                  {/* End Form */}
                  {/* Form */}
                  <div className="mb-4">
                    <div className="row mb-2">
                      <div className="col-auto align-self-end">
                        <span
                          id="additionalCovid19PrecautionsCountCharacters"
                          className="text-muted"
                        />
                      </div>
                    </div>
                    {/* End Row */}
                    <textarea
                      id="additionalCovid19PrecautionsLabel"
                      className="js-count-characters form-control"
                      placeholder="Ex: All customers are required to wear a mask, curbside pickup available, common surfaces are sanitized regularly, etc."
                      aria-label="Ex: All customers are required to wear a mask, curbside pickup available, common surfaces are sanitized regularly, etc."
                      rows={4}
                      maxLength={250}
                      data-hs-count-characters-options='{
                          "output": "#additionalCovid19PrecautionsCountCharacters"
                        }'
                      defaultValue={""}
                    />
                  </div>
                  {/* End Form */}
                </div>
                {/* End Body */}
                {/* Footer */}
                <div className="card-footer pt-0">
                  <div className="d-flex align-items-center">
                    <button
                    onClick={()=>{setStepActive(4)}}
                      type="button"
                      className="btn btn-ghost-secondary"
                      data-hs-step-form-prev-options='{
                   "targetSelector": "#postJobStepAdditionalJobDetails"
                 }'
                    >
                      <i className="bi-chevron-left small ms-1" /> Previous step
                    </button>
                    <div className="ms-auto">
                      <button
                        type="button"
                        className="btn btn-primary"
                        style={{ 
                          background: 'linear-gradient(90deg, #FD2DC3 -2.8%, rgba(75, 76, 78, 0.4) 124.34%)',
                          color: 'white'
                        }}
                        onClick={()=>{setStepActive(6)}}
                        data-hs-step-form-next-options='{
                          "targetSelector": "#postJobStepJobApplicationSettings"
                        }'
                      >
                        Save and continue{" "}
                        <i className="bi-chevron-right small ms-1" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* End Footer */}
              </div>
              {/* End Card */}
              {/* Card */}
              <div
                id="postJobStepJobApplicationSettings"
                style={{ display: activeStep!= 6? "none":"" }} 
                className={activeStep==6?"card active":"card"}>
              
                {/* Header */}
                <div
                  className="card-header bg-img-start"
                  style={{
                    backgroundImage: "url(../assets/svg/components/card-1.svg)"
                  }}
                >
                  <div className="flex-grow-1">
                    <span className="d-lg-none">Step 7 of 7</span>
                    <h3 className="card-header-title">Application settings</h3>
                  </div>
                </div>
                {/* End Header */}
                {/* Body */}
                <div className="card-body">
                  {/* Form */}
                  <div className="mb-4">
                    <label className="form-label">
                      How do you want to receive applications?{" "}
                      <i
                        className="bi-question-circle"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Email: Screen candidates individually, received by email. In person: We source and send candidates directly to you."
                      />
                    </label>
                    {/* Radio Button Group */}
                    <div
                      className="btn-group btn-group-segment d-flex"
                      role="group"
                      aria-label="Application status checkbox button group"
                    >
                      <input
                        type="checkbox"
                        className="btn-check"
                        name="receiveApplicationsName"
                        id="receiveApplicationsOption1"
                        autoComplete="off"
                        defaultChecked={true}
                        onChange={((e)=>setMethodToRecieveApplications(parseInt(e.target.value)))}
                      />
                      <label
                        className="btn btn-sm"
                        htmlFor="receiveApplicationsOption1"
                      >
                        Email
                      </label>
                      <input
                        type="checkbox"
                        className="btn-check"
                        name="receiveApplicationsName"
                        id="receiveApplicationsOption2"
                        autoComplete="off"
                        onChange={((e)=>setMethodToRecieveApplications(parseInt(e.target.value)))}
                      />
                      <label
                        className="btn btn-sm"
                        htmlFor="receiveApplicationsOption2"
                      >
                        Phone
                      </label>
                      <input
                        type="checkbox"
                        className="btn-check"
                        name="receiveApplicationsName"
                        id="receiveApplicationsOption3"
                        autoComplete="off"
                        onChange={((e)=>setMethodToRecieveApplications(parseInt(e.target.value)))}
                      />
                      <label
                        className="btn btn-sm"
                        htmlFor="receiveApplicationsOption3"
                      >
                        In-person
                      </label>
                    </div>
                    {/* End Radio Button Group */}
                  </div>
                  {/* End Form */}
                  {/* Form */}
                  <div className="mb-4">
                    <label className="form-label">
                      Do you want applicants to submit a resume?
                    </label>
                    {/* Radio Button Group */}
                    <div
                      className="btn-group btn-group-segment d-flex"
                      role="group"
                      aria-label="Application status checkbox button group"
                    >
                      <input
                        type="checkbox"
                        className="btn-check"
                        name="receiveApplicationsName"
                        id="submitApplicationsOption1"
                        autoComplete="off"
                        defaultChecked={true}
                        onChange={((e)=>setSubmitResume(parseInt(e.target.value)))}
                      />
                      <label
                        className="btn btn-sm"
                        htmlFor="submitApplicationsOption1"
                      >
                        Yes
                      </label>
                      <input
                        type="checkbox"
                        className="btn-check"
                        name="receiveApplicationsName"
                        id="submitApplicationsOption2"
                        autoComplete="off"
                        onChange={((e)=>setSubmitResume(parseInt(e.target.value)))}
                      />
                      <label
                        className="btn btn-sm"
                        htmlFor="submitApplicationsOption2"
                      >
                        No
                      </label>
                      <input
                        type="checkbox"
                        className="btn-check"
                        name="receiveApplicationsName"
                        id="submitApplicationsOption3"
                        autoComplete="off"
                      />
                      <label
                        className="btn btn-sm"
                        htmlFor="submitApplicationsOption3"
                      >
                        Optional
                      </label>
                    </div>
                    {/* End Radio Button Group */}
                  </div>
                  {/* End Form */}
                  {/* Form */}
                  <div className="mb-4">
                    <label
                      htmlFor="canditateApplicationsSentToEmailNameLabel"
                      className="form-label"
                    >
                      Daily updates about this job and candidates will be sent
                      to:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="canditateApplicationsSentToEmailName"
                      id="canditateApplicationsSentToEmailNameLabel"
                      placeholder="email@site.com"
                      aria-label="email@site.com"
                      onChange={((e)=>setDailyUpdateEmailAddress(e.target.value))}
                    />
                  </div>
                  {/* End Form */}
                  {/* Form */}
                  <div className="mb-4">
                    <label
                      htmlFor="sendEmailUpdatesCheckbox"
                      className="form-label"
                    >
                      Daily updates about this job and candidates will be sent
                      to:
                    </label>
                    {/* Custom Checkbox */}
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="sendEmailUpdatesCheckbox"
                        defaultChecked={true}
                        onChange={((e)=>setDailyUpdateEmail(e.target.checked))}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="sendEmailUpdatesCheckbox"
                      >
                        Also send an individual email update every time a new
                        candidate applies
                      </label>
                    </div>
                    {/* End Custom Checkbox */}
                  </div>
                  {/* End Form */}
                </div>
                {/* End Body */}
                {/* Footer */}
                <div className="card-footer pt-0">
                  <div className="d-flex align-items-center">
                    <button
                    onClick={()=>{setStepActive(5)}}
                      type="button"
                      className="btn btn-ghost-secondary"
                      data-hs-step-form-prev-options='{
                   "targetSelector": "#postJobStepJobDescription"
                 }'
                    >
                      <i className="bi-chevron-left small ms-1" /> Previous step
                    </button>
                    <div className="ms-auto">
                      <button
                      onClick={()=>{setStepActive(7)}}
                        id="postJobFinishBtn"
                        type="button"
                        className="btn btn-primary"
                        style={{ 
                          background: 'linear-gradient(90deg, #FD2DC3 -2.8%, rgba(75, 76, 78, 0.4) 124.34%)',
                          color: 'white'
                        }}
                      >
                        Save and continue{" "}
                        <i className="bi-chevron-right small ms-1" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* End Footer */}
              </div>
              {/* End Card */}
              {/* Card */}
              <div
                id="postJobStepJobPreviewJob"
                style={{ display: activeStep!== 7? "none":"" }} 
                className={activeStep==7?"card active":"card"}>
              
                {/* Header */}
                <div
                  className="card-header bg-img-start"
                  style={{
                    backgroundImage: "url(../assets/svg/components/card-1.svg)"
                  }}
                >
                  <div className="flex-grow-1">
                    <h3 className="card-header-title">Preview job</h3>
                  </div>
                </div>
                {/* End Header */}
                {/* Body */}
                <div className="card-body">
                  <p>
                    By pressing confirm, you agree that this job will be posted
                    and applications will be processed in accordance with Front
                    Job's <a href="#">Cookie Policy</a>,{" "}
                    <a href="#">Privacy Policy</a> and{" "}
                    <a href="#">Terms of Service</a>. You consent to Front Job
                    informing a user that you have opened, viewed or made a
                    decision regarding the user's application.
                  </p>
                  <hr className="my-4" />
                  <ul className="list-unstyled list-py-3">
                    <li className="border-bottom">
                      <div className="row">
                        <div className="col-sm-8 mb-3 mb-sm-0">
                          <h5>Job Title</h5>
                          <span className="d-block">{jobTitle}</span>
                        </div>
                        {/* End Col */}
                        <div className="col-sm-4">
                          <div className="d-sm-flex justify-content-sm-end">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-primary"
                              data-hs-step-form-prev-options='{
                          "targetSelector": "#postJobStepBasic"
                        }'
                            >
                              <i className="bi-pencil-fill small me-1" /> Edit
                            </button>
                          </div>
                        </div>
                        {/* End Col */}
                      </div>
                      {/* End Row */}
                    </li>
                    <li className="border-bottom">
                      <div className="row">
                        <div className="col-sm-8 mb-3 mb-sm-0">
                          <h5>Company</h5>
                          <span className="d-block">{companyName}</span>
                        </div>
                        {/* End Col */}
                        
                        <div className="col-sm-4">
                          <div className="d-sm-flex justify-content-sm-end">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-primary"
                              data-hs-step-form-prev-options='{
                          "targetSelector": "#postJobStepBasic"
                        }'
                            >
                              <i className="bi-pencil-fill small me-1" /> Edit
                            </button>
                          </div>
                        </div>
                        {/* End Col */}
                      </div>
                      {/* End Row */}
                    </li>
                    <li className="border-bottom">
                      <div className="row">
                        <div className="col-sm-8 mb-3 mb-sm-0">
                          <h5>Location</h5>
                          <span className="d-block mb-2">
                            Remote work allowed: {remote}
                          </span>
                          <span className="d-block">{city}</span>
                        </div>
                        {/* End Col */}
                        <div className="col-sm-4">
                          <div className="d-sm-flex justify-content-sm-end">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-primary"
                              data-hs-step-form-prev-options='{
                          "targetSelector": "#postJobStepAddress"
                        }'
                            >
                              <i className="bi-pencil-fill small me-1" /> Edit
                            </button>
                          </div>
                        </div>
                        {/* End Col */}
                      </div>
                      {/* End Row */}
                    </li>
                    <li className="border-bottom">
                      <div className="row">
                        <div className="col-sm-8 mb-3 mb-sm-0">
                          <h5>Street Address</h5>
                          <span className="d-block">
                            Arch 294 Jewell Street, SE5 0BU, London
                          </span>
                        </div>
                        {/* End Col */}
                        <div className="col-sm-4">
                          <div className="d-sm-flex justify-content-sm-end">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-primary"
                              data-hs-step-form-prev-options='{
                          "targetSelector": "#postJobStepAddress"
                        }'
                            >
                              <i className="bi-pencil-fill small me-1" /> Edit
                            </button>
                          </div>
                        </div>
                        {/* End Col */}
                      </div>
                      {/* End Row */}
                    </li>
                    <li className="border-bottom">
                      <div className="row">
                        <div className="col-sm-8 mb-3 mb-sm-0">
                          <h5>Pay and Benefits</h5>
                          <span className="d-block mb-2">
                            {pay}
                          </span>
                          <span className="d-block">
                            Benefits: Health insurance, Flexible schedule,
                            Employee discount, Relocation assistance
                          </span>
                        </div>
                        {/* End Col */}
                        <div className="col-sm-4">
                          <div className="d-sm-flex justify-content-sm-end">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-primary"
                              data-hs-step-form-prev-options='{
                          "targetSelector": "#postJobStepPayment"
                        }'
                            >
                              <i className="bi-pencil-fill small me-1" /> Edit
                            </button>
                          </div>
                        </div>
                        {/* End Col */}
                      </div>
                      {/* End Row */}
                    </li>
                    <li className="border-bottom">
                      <div className="row">
                        <div className="col-sm-8 mb-3 mb-sm-0">
                          <h5>Job Type</h5>
                          <span className="d-block">{jobtype}</span>
                        </div>
                        {/* End Col */}
                        <div className="col-sm-4">
                          <div className="d-sm-flex justify-content-sm-end">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-primary"
                              data-hs-step-form-prev-options='{
                          "targetSelector": "#postJobStepJobDetails"
                        }'
                            >
                              <i className="bi-pencil-fill small me-1" /> Edit
                            </button>
                          </div>
                        </div>
                        {/* End Col */}
                      </div>
                      {/* End Row */}
                    </li>
                    <li className="border-bottom">
                      <div className="row">
                        <div className="col-sm-8 mb-3 mb-sm-0">
                          {/* <h5>Job Description</h5>
                          <h5>Who we are:</h5>
                          <p>
                            We are reinventing personal communication for the
                            digital era.
                          </p>
                          <p>
                            TouchNote is a creative platform that lets people
                            send custom-made cards, straight from their phone to
                            those they love anywhere in the world. Our easy to
                            use app has helped people nurture their most
                            meaningful relationships over 15 million times and
                            was awarded the Good Web Guide's App of the Year
                            2018.
                          </p>
                          <p>
                            We are a team of passionate and creative individuals
                            trying to make a difference. We're proud to offer a
                            highly collaborative, solution-focused environment
                            that celebrates diversity and has been listed in
                            Deloitte's Technology Fast 50 and The Financial
                            Times Future 100 UK.
                          </p>
                          <h5>The role:</h5>
                          <p>
                            We are looking for a talented mid-level Product
                            Designer to help shape the future of our product
                            experience here at TouchNote.
                          </p>
                          <p>
                            Sitting in the product team and reporting directly
                            to the Head of Design, you'll work extensively with
                            product, growth and our engineering team to
                            understand our user base, and work to improve
                            business needs, related requirements and technical
                            constraints.
                          </p> */}
                          {/* <h5>About you:</h5>
                          <ul className="mb-3">
                            <li>
                              You're always on top of the latest design trends,
                              ambassador of Apple Humans guidelines and Google
                              Material design and a good understanding of
                              transitions and haptic feedback.
                            </li>
                            <li>
                              You're a quick learner, always open-minded and
                              curious, and eager to learn new skills.
                            </li>
                            <li>
                              You have a keen interest and knowledge of
                              gamification and the user onboarding process.
                            </li>
                            <li>
                              You've got a can-do attitude, have a proactive
                              approach to your work, are autonomous and take
                              ownership of your work; a perfectionist and are
                              used to working in a fast-paced environment.
                            </li>
                          </ul> */}
                          {/* <h5>Requirements:</h5>
                          <ul className="mb-3">
                            <li>
                              You're a driven designer and have a minimum of 2-3
                              years of experience in delivering both UX &amp; UI
                              design, including experience in mobile and native
                              applications.
                            </li>
                            <li>
                              You've got proven mobile design and proven UI
                              experience on mobile app design and web: working
                              with sketches, prototypes, wireframes, user flows
                              and UI interactions.
                            </li>
                            <li>
                              Your portfolio is full of beautiful, well thought
                              out interface work that showcases your flair and
                              attention-to-detail. It includes examples of
                              mobile and app products you have worked on (iOS
                              and Android)
                            </li>
                            <li>
                              You've used Figma and are an Adobe Creative Cloud
                              expert (Photoshop, Illustrator, After Effects).
                            </li>
                          </ul> */}
                          {/* <h5>COVID-19 precautions</h5>
                          <span className="d-block">
                            Remote interview process
                          </span> */}
                        </div>
                        {/* End Col */}
                        <div className="col-sm-4">
                          <div className="d-sm-flex justify-content-sm-end">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-primary"
                              data-hs-step-form-prev-options='{
                          "targetSelector": "#postJobStepJobDescription"
                        }'
                            >
                              <i className="bi-pencil-fill small me-1" /> Edit
                            </button>
                          </div>
                        </div>
                        {/* End Col */}
                      </div>
                      {/* End Row */}
                    </li>
                    <li className="border-bottom">
                      <div className="row">
                        <div className="col-sm-8 mb-3 mb-sm-0">
                          <h5>Language</h5>
                          <span className="d-block">{language}</span>
                        </div>
                        {/* End Col */}
                        <div className="col-sm-4">
                          <div className="d-sm-flex justify-content-sm-end">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-primary"
                              data-hs-step-form-prev-options='{
                          "targetSelector": "#postJobStepBasic"
                        }'
                            >
                              <i className="bi-pencil-fill small me-1" /> Edit
                            </button>
                          </div>
                        </div>
                        {/* End Col */}
                      </div>
                      {/* End Row */}
                    </li>
                    <li className="border-bottom">
                      <div className="row">
                        <div className="col-sm-8 mb-3 mb-sm-0">
                          <h5>Expected Hiring Date</h5>
                          <span className="d-block">{urgency}</span>
                        </div>
                        {/* End Col */}
                        <div className="col-sm-4">
                          <div className="d-sm-flex justify-content-sm-end">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-primary"
                              data-hs-step-form-prev-options='{
                          "targetSelector": "#postJobStepJobDetails"
                        }'
                            >
                              <i className="bi-pencil-fill small me-1" /> Edit
                            </button>
                          </div>
                        </div>
                        {/* End Col */}
                      </div>
                      {/* End Row */}
                    </li>
                    <li className="border-bottom">
                      <div className="row">
                        <div className="col-sm-8 mb-3 mb-sm-0">
                          <h5>Hires Needed</h5>
                          <span className="d-block">{hires}</span>
                        </div>
                        {/* End Col */}
                        <div className="col-sm-4">
                          <div className="d-sm-flex justify-content-sm-end">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-primary"
                              data-hs-step-form-prev-options='{
                          "targetSelector": "#postJobStepJobDetails"
                        }'
                            >
                              <i className="bi-pencil-fill small me-1" /> Edit
                            </button>
                          </div>
                        </div>
                        {/* End Col */}
                      </div>
                      {/* End Row */}
                    </li>
                    <li className="border-bottom">
                      <div className="row">
                        <div className="col-sm-8 mb-3 mb-sm-0">
                          <h5>Schedule</h5>
                          <span className="d-block">{jobSchedule}</span>
                        </div>
                        {/* End Col */}
                        <div className="col-sm-4">
                          <div className="d-sm-flex justify-content-sm-end">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-primary"
                              data-hs-step-form-prev-options='{
                          "targetSelector": "#postJobStepAdditionalJobDetails"
                        }'
                            >
                              <i className="bi-pencil-fill small me-1" /> Edit
                            </button>
                          </div>
                        </div>
                        {/* End Col */}
                      </div>
                      {/* End Row */}
                    </li>
                    <li className="border-bottom">
                      <div className="row">
                        <div className="col-sm-8 mb-3 mb-sm-0">
                          <h5>Application Settings</h5>
                          <span className="d-block">
                            Apply method:{" "}
                            <span className="fw-semibold text-dark">{methodToRecieveApplications}</span>
                          </span>
                          <span className="d-block mb-2">
                            Send updates to:{" "}
                            <span className="fw-semibold text-dark">
                            {dailyUpdateEmailAddress}
                            </span>
                          </span>
                          <span className="d-block">
                            Do you want applicants to submit a resume?{" "}
                            <span className="fw-semibold text-dark">{submitResume}</span>
                          </span>
                        </div>
                        {/* End Col */}
                        <div className="col-sm-4">
                          <div className="d-sm-flex justify-content-sm-end">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-primary"
                              data-hs-step-form-prev-options='{
                          "targetSelector": "#postJobStepAdditionalJobDetails"
                        }'
                            >
                              <i className="bi-pencil-fill small me-1" /> Edit
                            </button>
                          </div>
                        </div>
                        {/* End Col */}
                      </div>
                      {/* End Row */}
                    </li>
                  </ul>
                  <p className="small">
                    By clicking "Confirm", you agree to candidates appearing in
                    your dashboard based on the preferences you've selected
                    above. You also agree to our{" "}
                    <a href="#">Front Jobs Terms of Service</a>.
                  </p>
                </div>
                {/* End Body */}
                {/* Footer */}
                <div className="card-footer pt-0">
                  <div className="d-flex align-items-center">
                    <button
                    onClick={()=>{setStepActive(5)}}
                      type="button"
                      className="btn btn-ghost-secondary"
                      data-hs-step-form-prev-options='{
                   "targetSelector": "#postJobStepJobApplicationSettings"
                 }'
                    >
                      <i className="bi-chevron-left small ms-1" /> Previous step
                    </button>
                    <div className="ms-auto">
                      <div className="d-flex gap-3">
                        <button type="button" className="btn btn-white"  style={{ border: '#FD2DC3 ' }}>
                          Save in drafts
                        </button>
                        <button
                          id="postJobFinishBtn"
                          type="button"
                          className="btn btn-primary"
                          style={{ backgroundColor: '#FD2DC3 !important', color: 'white' }}
                          onClick={ createJobPost}
                        >
                          Confirm
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Footer */}
              </div>
              {/* End Card */}
            </div>
            {/* End Content Step Form */}
            {/* Message Body */}
            <div id="successMessageContent" style={{ display: "none" }}>
              <div className="text-center">
                <img
                  className="img-fluid mb-3"
                  src="../assets/svg/illustrations/medal.svg"
                  alt="Image Description"
                  style={{ maxWidth: "15rem" }}
                />
                <div className="mb-4">
                  <h2>Successful!</h2>
                  <p>
                    New{" "}
                    <span className="fw-semibold text-dark">
                      UI/UX Designer
                    </span>{" "}
                    job has been successfully created.
                  </p>
                </div>
                <div className="d-flex justify-content-center">
                  <a
                    className="btn btn-white me-3"
                    href="../demo-jobs/employer.html"
                  >
                    Go to profile <i className="bi-chevron-right small me-1" />
                  </a>
                  <a className="btn btn-primary" href="#">
                    <i className="bi-briefcase-fill me-1" /> Create new job
                  </a>
                </div>
              </div>
            </div>
            {/* End Message Body */}
            {/* Sticky Block End Point */}
            <div id="stickyBlockEndPoint" />
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </form>
      {/* End Step Form */}
    </div>
    {/* End Content */}
  </main>
  {/* ========== END MAIN CONTENT ========== */}
</>
<Footer/>
</>
   
    );
}

export default pricing;