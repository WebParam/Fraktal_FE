"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import './jobs.scss';
import Header from '../components/Header/Header';
import MobileMenu from '../components/MobileMenu/MobileMenu';
import { gigs } from '../gigs';
import img23 from "../../assets/img/900x900/img23.jpg";
import topVendor from "../../assets/svg/illustrations/top-vendor.svg";
import capsule from "../../assets/svg/brands/capsule-icon.svg";
import img24 from "../../assets/img/900x900/img24.jpg";
import Footer from '../components/Footer/Footer';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { GetAllProjects, GetProjectById } from '../endpoints/api';
import { IJobApplication } from '../interfaces/IJobApplication';

function jobs() {
    const [menuToggler, setMenuToggler] = useState<boolean>(false);
    const [projects, setProjects] = useState<IJobApplication[]>([]);

    const loadAllProjects = async()=>{
        const res = await GetAllProjects() as any ;
        debugger;
        const resData = res.data.map((x:any)=>x.data) as IJobApplication[];
        setProjects(resData);    
      }

    
  useEffect(() => {
    
     loadAllProjects();
   },[]);

    return (
    <>
        <Header 
            menuTogglerFunction={setMenuToggler} 
            menuTogglerValue={menuToggler} 
        />
        <MobileMenu menuToggler={menuToggler} />
        <main id="content" role="main">
            {/* Hero */}
            <div className="position-relative gradient-x-three-sm-primary rounded-2 content-space-t-md-1 content-space-b-md-2 mx-md-10" style={{paddingTop: '100px !important'}}>
                <div className="container position-relative content-space-t-2 content-space-t-lg-3 content-space-b-1">
                <div className="row position-relative zi-2">
                    <div className="col-lg-8">
                    {/* Heading */}
                    <div className="w-lg-75 text-center text-lg-start mb-5 mb-lg-7">
                        <h1 className="display-4">Find the most<br /><span className="text-highlight-warning" style={{color: '#FD2DC3'}}>exciting</span> jobs</h1>
                    </div>
                    {/* End Heading */}
                    <form>
                        {/* Input Card */}
                        <div className="input-card input-card-sm">
                        <div className="input-card-form">
                            <label htmlFor="jobTitleForm" className="form-label visually-hidden">Job, title, skills, or company</label>
                            <div className="input-group input-group-merge">
                            <span className="input-group-prepend input-group-text">
                                <i className="bi-search" />
                            </span>
                            <input type="text" className="form-control" id="jobTitleForm" placeholder="Job, title, skills, or company" aria-label="Job, title, skills, or company" />
                            </div>
                        </div>
                        <div className="input-card-form">
                            <label htmlFor="cityForm" className="form-label visually-hidden">City</label>
                            <div className="input-group input-group-merge">
                            <span className="input-group-prepend input-group-text">
                                <i className="bi-geo-alt" />
                            </span>
                            <input type="text" className="form-control" id="cityForm" placeholder="City" aria-label="City, state, or zip" />
                            </div>
                        </div>
                        <button type="button" className="btn btn-primary" disabled={true} style={{background: '#FD2DC3 !important', border: 'none'}}>Search</button>
                        </div>
                        {/* End Input Card */}
                    </form>
                    <p className="form-text">Search through 120+ jobs</p>
                    </div>
                    {/* End Col */}
                </div>
                {/* End Row */}
                <div className="d-none d-lg-block col-lg-6 position-lg-absolute top-0 end-0">
                    <Image className="img-fluid rounded-2" src={img23} alt="Image Description" />
                    {/* SVG Shape */}
                    <div className="position-absolute top-0 start-0 zi-n1 mt-n6 ms-n7" style={{width: '10rem'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 335.2 335.2" width={100} height={100}>
                        <circle fill="#FD2DC3" opacity=".7" cx="167.6" cy="167.6" r="130.1" />
                    </svg>
                    </div>
                    {/* End SVG Shape */}
                    {/* SVG Shape */}
                    <div className="position-absolute bottom-0 end-0 zi-n1 mb-n6 me-n10" style={{width: '10rem'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 335.2 335.2" width={120} height={120}>
                        <circle fill="none" stroke="#FD2DC3" strokeWidth={75} cx="167.6" cy="167.6" r="130.1" />
                    </svg>
                    </div>
                    {/* End SVG Shape */}
                    {/* <p className="form-text">Powered by: <Image className="avatar avatar-sm avatar-4x3" src={google} alt="Image Description" /></p> */}
                </div>
                </div>
            </div>
            {/* End Hero */}
            {/* Card Grid */}
            <div className="container content-space-2 content-space-t-lg-4 content-space-b-lg-3">
                {/* Heading */}
                <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-7">
                <h2>Explore over 2 million tech and startup job-opportunities</h2>
                <p>Find a job you love. <a className="link"  style={{color: '#FD2DC3'}}>Superchange your career.</a></p>
                </div>
           
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 mb-5">
               
                {/* {projects.map(gig => (
                <div className="col mb-5" key={gig.id}>
                    <div className="card card-bordered h-100">
                    <div className="card-body">
                        <div className="row mb-3">
                        <div className="col">
                            <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                             </div>
                            <div className="flex-grow-1 ms-3">
                                <h6 className="card-title">
                                <a className="text-dark" href="#">{gig.projectName}</a>
                                <Image className="avatar avatar-xss ms-1" src={topVendor} alt="Review rating" data-toggle="tooltip" data-placement="top" title="Claimed profile" />
                                </h6>
                            </div>
                            </div>
                        </div>
                        </div>
                        <h3 className="card-title">
                        <Link className="text-dark" href={`/fraktional-gig/${gig.id}`}>
                            {gig.projectSector}
                        </Link>
                        </h3>
                        <span className="d-block small text-body mb-1">{gig.pay}</span>
                        <span className="badge me-2" style={{backgroundColor: 'lightpink', color: '#fff'}}>
                        <span className="legend-indicator bg-info" />{gig.remote}
                        </span>
                    </div>
                    <div className="card-footer pt-0">
                        <ul className="list-inline list-separator small text-body">
                        <li className="list-inline-item">Posted {gig.fromDate}</li>
                        <li className="list-inline-item">{gig.city}</li>
                        <li className="list-inline-item">{gig.hires}</li>
                        </ul>
                    </div>
                    </div>
                </div>
                ))} */}
               
                {gigs.map(gig => (
                <div className="col mb-5" key={gig.id}>
                    {/* Card */}
                    <div className="card card-bordered h-100">
                    {/* Card Body */}
                    <div className="card-body">
                        <div className="row mb-3">
                        <div className="col">
                            {/* Media */}
                            <div className="d-flex align-items-center">
                            <div className="flex-shrink-0">
                                <Image className="avatar avatar-sm avatar-4x3" src={gig.img} alt="Image Description" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h6 className="card-title">
                                <a className="text-dark" href="#">{gig.companyname}</a>
                                <Image className="avatar avatar-xss ms-1" src={topVendor} alt="Review rating" data-toggle="tooltip" data-placement="top" title="Claimed profile" />
                                </h6>
                            </div>
                            </div>
                            {/* End Media */}
                        </div>
                        {/* End Col */}
                        </div>
                        {/* End Row */}
                        <h3 className="card-title">
                        <Link className="text-dark" href={`/fraktional-gig/${gig.id}`}>
                            {gig.position}
                        </Link>
                        </h3>
                        <span className="d-block small text-body mb-1">{gig.salary}</span>
                        <span className="badge me-2" style={{backgroundColor: 'lightpink', color: '#fff'}}>
                        <span className="legend-indicator bg-info" />{gig.remote}
                        </span>
                    </div>
                    {/* End Card Body */}
                    {/* Card Footer */}
                    <div className="card-footer pt-0">
                        <ul className="list-inline list-separator small text-body">
                        <li className="list-inline-item">Posted {gig.posted}</li>
                        <li className="list-inline-item">{gig.location}</li>
                        <li className="list-inline-item">{gig.jobType}</li>
                        </ul>
                    </div>
                    {/* End Card Footer */}
                    </div>
                    {/* End Card */}
                </div>
                ))}
                
                {/* End Col */}
               
                {/* End Col */}
                </div>
                {/* End Row */}
                <div className="text-center">
                <a className="btn" href="/auth/register" style={{color: '#FD2DC3'}}>View all jobs <i className="bi-chevron-right small ms-1" /></a>
                </div>
            </div>
            {/* End Card Grid */}
            {/* Testimonials */}
            <div className="overflow-hidden gradient-x-three-sm-primary rounded-2 mx-md-10">
                <div className="container content-space-2 content-space-lg-3">
                <div className="row justify-content-center align-items-lg-center">
                    <div className="col-10 col-sm-8 col-lg-5 mb-10 mb-lg-0">
                    <div className="position-relative">
                        <Image className="img-fluid rounded-2" src={img24} alt="Image Description" />
                        {/* SVG Shape */}
                        <div className="position-absolute top-0 start-0 zi-n1 mt-n6 ms-n7" style={{width: '10rem'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 335.2 335.2" width={100} height={100}>
                            <circle fill="#FD2DC3" opacity=".7" cx="167.6" cy="167.6" r="130.1" />
                        </svg>
                        </div>
                        {/* End SVG Shape */}
                        {/* SVG Shape */}
                        <div className="position-absolute bottom-0 end-0 zi-n1 mb-n6 me-n10" style={{width: '10rem'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 335.2 335.2" width={120} height={120}>
                            <circle fill="none" stroke="#FD2DC3" strokeWidth={75} cx="167.6" cy="167.6" r="130.1" />
                        </svg>
                        </div>
                        {/* End SVG Shape */}
                    </div>
                    </div>
                    {/* End Col */}
                    <div className="col-lg-7">
                    <div className="ps-lg-6">
                        <div className="mb-3">
                        <Image className="avatar" src={capsule} alt="Image Description" />
                        </div>
                        {/* Blockquote */}
                        <figure className="mb-5">
                        <blockquote className="blockquote blockquote-lg">" Save time and effort in your hiring journey. Fraktional's simple process let you source, screen, and hire faster. "</blockquote>
                        <figcaption className="blockquote-footer">
                            Nicole
                            <span className="blockquote-footer-source">Project manager | Param</span>
                        </figcaption>
                        </figure>
                        {/* End Blockquote */}
                        <div className="row">
                        <div className="col-sm-6 col-md-4 mb-3 mb-sm-0">
                            <h2 className="mb-1" style={{color: '#FD2DC3'}}>40%</h2>
                            <p className="small mb-0">Reduced hiring time</p>
                        </div>
                        {/* End Col */}
                        <div className="col-sm-6 col-md-4 mb-3 mb-sm-0">
                            <h2 className="mb-1" style={{color: '#FD2DC3'}}>98%</h2>
                            <p className="small mb-0">Client satisfaction rate</p>
                        </div>
                        {/* End Col */}
                        <div className="col-sm-6 col-md-4">
                            <h2 className="mb-1" style={{color: '#FD2DC3'}}>1500+</h2>
                            <p className="small mb-0">vetted engineers</p>
                        </div>
                        {/* End Col */}
                        </div>
                        {/* End Row */}
                    </div>
                    </div>
                    {/* End Col */}
                </div>
                {/* End Row */}
                </div>
            </div>
            {/* End Testimonials */}
            {/* Card Grid */}
            <div className="container content-space-2 content-space-lg-3">
                {/* Heading */}
                <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-7">
                <h2>Find a gig</h2>
                <p>Find a job you love. <a href="#" style={{color: '#FD2DC3'}}>Search according to your career interests.</a></p>
                </div>
                {/* End Heading */}
                <div className="row row-cols-1 row-cols-sm-2 1 row-cols-md-3 row-cols-lg-4 mb-5">
                <div className="col mb-3 mb-sm-4">
                    {/* Card */}
                    <a className="card card-sm card-bordered card-transition h-100">
                    <div className="card-body">
                        <div className="row align-items-center">
                        <div className="col">
                            <h5 className="card-title">Management</h5>
                            <p className="card-text text-body small">4 job positions</p>
                        </div>
                        {/* End Col */}
                        <div className="col-auto">
                            <span className="text-muted">
                            <i className="bi-chevron-right small" />
                            </span>
                        </div>
                        {/* End Col */}
                        </div>
                        {/* End Row */}
                    </div>
                    </a>
                    {/* End Card */}
                </div>
                {/* End Col */}
                <div className="col mb-3 mb-sm-4">
                    {/* Card */}
                    <a className="card card-sm card-bordered card-transition h-100" >
                    <div className="card-body">
                        <div className="row align-items-center">
                        <div className="col">
                            <h5 className="card-title">App Development</h5>
                            <p className="card-text text-body small">26 job positions</p>
                        </div>
                        {/* End Col */}
                        <div className="col-auto">
                            <span className="text-muted">
                            <i className="bi-chevron-right small" />
                            </span>
                        </div>
                        {/* End Col */}
                        </div>
                        {/* End Row */}
                    </div>
                    </a>
                    {/* End Card */}
                </div>
                {/* End Col */}
                <div className="col mb-3 mb-sm-4">
                    {/* Card */}
                    <a className="card card-sm card-bordered card-transition h-100" >
                    <div className="card-body">
                        <div className="row align-items-center">
                        <div className="col">
                            <h5 className="card-title">Arts &amp; Entertainment</h5>
                            <p className="card-text text-body small">9 job positions</p>
                        </div>
                        {/* End Col */}
                        <div className="col-auto">
                            <span className="text-muted">
                            <i className="bi-chevron-right small" />
                            </span>
                        </div>
                        {/* End Col */}
                        </div>
                        {/* End Row */}
                    </div>
                    </a>
                    {/* End Card */}
                </div>
                {/* End Col */}
                <div className="col mb-3 mb-sm-4">
                    {/* Card */}
                    <a className="card card-sm card-bordered card-transition h-100">
                    <div className="card-body">
                        <div className="row align-items-center">
                        <div className="col">
                            <h5 className="card-title">Accounting</h5>
                            <p className="card-text text-body small">11 job positions</p>
                        </div>
                        {/* End Col */}
                        <div className="col-auto">
                            <span className="text-muted">
                            <i className="bi-chevron-right small" />
                            </span>
                        </div>
                        {/* End Col */}
                        </div>
                        {/* End Row */}
                    </div>
                    </a>
                    {/* End Card */}
                </div>
                {/* End Col */}
                <div className="col mb-3 mb-sm-4">
                    {/* Card */}
                    <a className="card card-sm card-bordered card-transition h-100">
                    <div className="card-body">
                        <div className="row align-items-center">
                        <div className="col">
                            <h5 className="card-title">UI Designer</h5>
                            <p className="card-text text-body small">37 job positions</p>
                        </div>
                        {/* End Col */}
                        <div className="col-auto">
                            <span className="text-muted">
                            <i className="bi-chevron-right small" />
                            </span>
                        </div>
                        {/* End Col */}
                        </div>
                        {/* End Row */}
                    </div>
                    </a>
                    {/* End Card */}
                </div>
                {/* End Col */}
                <div className="col mb-3 mb-sm-4">
                    {/* Card */}
                    <a className="card card-sm card-bordered card-transition h-100" >
                    <div className="card-body">
                        <div className="row align-items-center">
                        <div className="col">
                            <h5 className="card-title">Apps</h5>
                            <p className="card-text text-body small">2 job positions</p>
                        </div>
                        {/* End Col */}
                        <div className="col-auto">
                            <span className="text-muted">
                            <i className="bi-chevron-right small" />
                            </span>
                        </div>
                        {/* End Col */}
                        </div>
                        {/* End Row */}
                    </div>
                    </a>
                    {/* End Card */}
                </div>
                {/* End Col */}
                <div className="col mb-3 mb-sm-4">
                    {/* Card */}
                    <a className="card card-sm card-bordered card-transition h-100" >
                    <div className="card-body">
                        <div className="row align-items-center">
                        <div className="col">
                            <h5 className="card-title">Content Writer</h5>
                            <p className="card-text text-body small">10 job positions</p>
                        </div>
                        {/* End Col */}
                        <div className="col-auto">
                            <span className="text-muted">
                            <i className="bi-chevron-right small" />
                            </span>
                        </div>
                        {/* End Col */}
                        </div>
                        {/* End Row */}
                    </div>
                    </a>
                    {/* End Card */}
                </div>
                {/* End Col */}
                <div className="col mb-3 mb-sm-4">
                    {/* Card */}
                    <a className="card card-sm card-bordered card-transition h-100">
                    <div className="card-body">
                        <div className="row align-items-center">
                        <div className="col">
                            <h5 className="card-title">Analytics</h5>
                            <p className="card-text text-body small">14 job positions</p>
                        </div>
                        {/* End Col */}
                        <div className="col-auto">
                            <span className="text-muted">
                            <i className="bi-chevron-right small" />
                            </span>
                        </div>
                        {/* End Col */}
                        </div>
                        {/* End Row */}
                    </div>
                    </a>
                    {/* End Card */}
                </div>
                {/* End Col */}
                </div>
                {/* End Row */}
                <div className="text-center">
                <a className="btn view-All-Startups-Text" href="/auth/register" >View all companies <i className="bi-chevron-right small ms-1" /></a>
                </div>
            </div>
            {/* End Card Grid */}
        </main>
        <Footer />
    </>
    )
}



export default dynamic (() => Promise.resolve(jobs), {ssr: false})

