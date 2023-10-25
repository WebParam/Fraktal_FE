'use client'
import Image from 'next/image';
import { gigs } from '../../gigs';
import star from "../../../assets/svg/illustrations/star.svg";
import halfstar from "../../../assets/svg/illustrations/star-half.svg";
import laptop from "../../../assets/vendor/bootstrap-icons/icons/laptop.svg";
import dropbox from "../../../assets/svg/brands/dropbox-icon.svg";
import googleDrive from "../../../assets/svg/brands/google-drive-icon.svg";
import { useState } from 'react';

function viewGig({ params }: { params: { id: string }}) {
    const gig = gigs.find(item => item.id === parseInt(params.id));

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [summary, setSummary] = useState('');
    const [resume, setResume] = useState(null)
    const [workStatus, setWorkStatus] = useState('yes');
    const [notice, setnotice] = useState('');
    const [portfolio, setPortfolio] = useState([]);
    const [expectedSalary, setExpectedSalary] = useState('');
    const [mobileExp, setMobileExp] = useState('');

    const handleFirstName = (e: any) => {
        setFirstName(e.target.value);
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

    const handleNotice = (e: any) => {
        setnotice(e.target.value);
    }
    
    const handleSalary = (e: any) => {
        setExpectedSalary(e.target.value);
    }

    const handleMobileExp = (value: any) => {
        setMobileExp(value);
      };


    const handleResume = (e: any) => {
        const file = e.target.files[0];
        setResume(file);
      };

      const handlePortfolio = (e: any) => {
        const file = e.target.files[0];
        setPortfolio(file);
      };


    return (
    <main id="content" role="main">
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
                        <a className="btn" style={{backgroundColor: '#FD2DC3', color: '#fff'}} href="#" id="jobImportResumeDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-dropdown-animation>
                        Import resume from <i className="bi-chevron-down small ms-1" />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="jobImportResumeDropdown">
                        <a className="dropdown-item" href="#">
                            <Image className="avatar avatar-xss avatar-4x3 me-2" src={laptop} alt="Image Description" /> My Computer
                        </a>
                        <a className="dropdown-item" href="#">
                            <Image className="avatar avatar-xss avatar-4x3 me-2" src={dropbox} alt="Image Description" /> Dropbox
                        </a>
                        <a className="dropdown-item" href="#">
                            <Image className="avatar avatar-xss avatar-4x3 me-2" src={googleDrive} alt="Image Description" /> Google Drive
                        </a>
                        </div>
                    </div>
                    {/* End Dropdown */}
                    </div>
                    {/* End Col */}
                </div>
                {/* End Row */}
                </div>
            </div>
            {/* End Card */}
            {/* Form */}
            <form>
                <div className="mb-4">
                <h3>Personal information</h3>
                </div>
                <div className="row">
                <div className="col-sm-6">
                    {/* Form */}
                    <div className="mb-4">
                    <label className="form-label" htmlFor="applyForJobFirstName">First name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="applyForJobNameFirstName" 
                        id="applyForJobFirstName" 
                        placeholder="First name" 
                        aria-label="First name" 
                        value={firstName}
                        onChange={handleFirstName}
                    />
                    </div>
                    {/* End Form */}
                </div>
                <div className="col-sm-6">
                    {/* Form */}
                    <div className="mb-4">
                    <label className="form-label" htmlFor="applyForJobLasttName">Last name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="applyForJobNameLastName" 
                        id="applyForJobLasttName" 
                        placeholder="Last name" 
                        aria-label="Last name" 
                        value={lastName}
                        onChange={handleLastName}
                    />
                    </div>
                    {/* End Form */}
                </div>
                </div>
                {/* End Form */}
                {/* Form */}
                <div className="mb-4">
                <label className="form-label" htmlFor="applyForJobEmail">Email address</label>
                <input 
                    type="email" 
                    className="form-control" 
                    name="applyForJobNameEmail" 
                    id="applyForJobEmail" 
                    placeholder="email@site.com" 
                    aria-label="email@site.com"
                    value={email}
                    onChange={handleEmail}
                />
                </div>
                {/* End Form */}
                {/* Form */}
                <div className="js-add-field mb-4" data-hs-add-field-options="{
                    &quot;template&quot;: &quot;#addPhoneFieldTemplate&quot;,
                    &quot;container&quot;: &quot;#addPhoneFieldContainer&quot;,
                    &quot;defaultCreated&quot;: 0
                }">
                <label className="form-label" htmlFor="applyForJobPhone">Phone <span className="form-label-secondary">(Optional)</span></label>
                <div className="input-group">
                    <input 
                        type="text" 
                        className="js-input-mask form-control" 
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
                {/* Container For Input Field */}
                <div id="addPhoneFieldContainer" />
                <a href="javascript:;" className="js-create-field form-link">
                    <i className="bi-plus-circle me-1" /> Add phone
                </a>
                </div>
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
                <hr className="my-7" />
                <div className="mb-4">
                <h3>Profile</h3>
                </div>
                {/* Form */}
                <div className="mb-4">
                <label className="form-label" htmlFor="applyForJobSummary">Summary</label>
                <textarea 
                className="form-control" 
                name="applyForJobSummaryName" 
                id="applyForJobSummary" 
                placeholder="In a few words, tell us about yourself" 
                aria-label="In a few words, tell us about yourself" 
                rows={6} 
                value={summary}
                onChange={handleSummary} />
                </div>
                {/* End Form */}
                {/* Form */}
                <div className="mb-4">
                <label className="form-label">Resume/CV and Cover Letter <i className="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Maximum file size 10 MB." data-bs-original-title="Maximum file size 10 MB." /></label>
                <div id="resumeAttach" className="js-dropzone dz-dropzone dz-dropzone-card dz-clickable">
                    <div className="dz-message">
                    <input type="file" name="resume" id="resume" onChange={handleResume} />
                    </div>
                </div>
                </div>
                {/* End Form */}
                <hr className="my-7" />
                <div className="mb-4">
                <h3>Details</h3>
                </div>
                <div className="mb-1">
                <label className="input-label">Do you have the right to work in the UK?</label>
                </div>
                {/* Radio Button Group */}
                <div className="btn-group btn-group-segment mb-4" role="group" aria-label="Work status radio button group">
                <input 
                    type="radio" 
                    className="btn-check" 
                    name="applyForJobWorkStatusBtnRadio" 
                    id="applyForJobWorkStatusYesBtnRadio" 
                    autoComplete="off" 
                    checked={workStatus === 'yes'} 
                    onChange={() => handleWorkStatusChange('no')} 
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
                {/* End Radio Button Group */}
                {/* Form */}
                <div className="mb-4">
                <label className="form-label" htmlFor="applyForJobNoticePeriod">Notice period</label>
                <input 
                    type="text" 
                    className="form-control" 
                    name="applyForJobNameNoticePeriod" 
                    id="applyForJobNoticePeriod" 
                    placeholder="2 months" 
                    aria-label="2 months"
                    value={notice}
                    onChange={handleNotice}
                />
                </div>
                {/* End Form */}
                {/* Form */}
                <div className="mb-4">
                <label className="form-label">Upload your portfolio <i className="bi-question-circle text-body ms-1" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Maximum file size 10 MB." data-bs-original-title="Maximum file size 10 MB." /></label>
                <div id="portfolioAttach" className="js-dropzone dz-dropzone dz-dropzone-card dz-clickable">
                    <div className="dz-message">
                    <input type="file" name="portfolio" id="porfolio" onChange={handlePortfolio} />
                    </div>
                </div>
                </div>
                {/* End Form */}
                {/* Form */}
                <div className="mb-4">
                <label className="form-label" htmlFor="applyForJobExpectedSalary">Expected salary</label>
                <input 
                    type="text" 
                    className="form-control" 
                    name="applyForJobNameExpectedSalary" 
                    id="applyForJobExpectedSalary" 
                    placeholder="$5k-$7k" 
                    aria-label="$5k-$7k"
                    value={expectedSalary}
                    onChange={handleSalary} 
                />
                </div>
                {/* End Form */}
                <div className="mb-1">
                <label className="input-label">Do you have experience designing for mobile?</label>
                </div>
                {/* Radio Button Group */}
                <div className="btn-group btn-group-segment mb-4" role="group" aria-label="Mobile experience radio button group">
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
                </div>
                {/* End Radio Button Group */}
                <div className="d-grid mt-5">
                <button type="submit" className="btn btn-lg" style={{backgroundColor: '#FD2DC3', color: '#fff'}}>Send application</button>
                </div>
            </form>
            {/* End Form */}
            </div>
        </div>
        {/* Content */}
    </main>
    )
}

export default viewGig;