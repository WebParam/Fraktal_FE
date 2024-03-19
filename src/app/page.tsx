"use client"
import Image from 'next/image';
import './homepage.scss';
import Link from 'next/link';
import koalaPopUp from '../assets/additional/koalapopup.jpg';
import card1 from "../assets/additional/images/laptop.png";
import card2 from "../assets/additional/images/pinkHat.png";
import card3 from "../assets/additional/images/robot.png";
import fraktionalOverview from "../assets/additional/images/fraktionalOverview.png";
import fitbit from "../assets/svg/brands/stb.png";
import forbes from "../assets/svg/brands/toyota.png";
import mailchimp from "../assets/svg/brands/sanlam.png";
import layar from "../assets/svg/brands/avis.png";
import bigAvatar from '../assets/additional/testimonyImage.jpg';
import mailchimplogo from "../assets/svg/brands/mailchimp-primary.svg";
import smallAvatar from '../assets/additional/testimonyAvatar.jpg';
import card4 from "../assets/additional/images/meeting1.png";
import card5 from "../assets/additional/images/meeting2.png";
import card6 from "../assets/additional/images/meeting3.png";
import koala from '../assets/additional/koala.png';
import macbook from '../assets/img/laptop.png';
import Footer from './components/Footer/Footer';
import sanlam from '../assets/img/sanlam.png';
import discovery from '../assets/img/discovery.png';
import banner1 from '../assets/img/banner1.png'
import dynamic from "next/dynamic";
import TypedText from './TypedText';
import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header'
import MobileMenu from './components/MobileMenu/MobileMenu';
import TransitionsModal from './components/Modal/TransitionsModal';
import Layout from './layout';
import { url } from 'inspector';
import lazySizes from 'lazysizes';
import { GetBlog } from './endpoints/api';
import { useParams } from 'next/navigation';
import router from 'next/router';
import moment from 'moment';
import background from '../assets/img/banner1.png';
import backf from './images/Background.png'
import cards from '../assets/img/Asset 2.png';
import Parallaxx from './components/parallax/page';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Cookies from 'universal-cookie';




function HomePage() {
  const [menuToggler, setMenuToggler] = useState(false);
  const [blogData, setBlogData] = useState<any>(null);
  const [open, setOpen] = React.useState(false);

  const { id } = useParams();
  console.log
  
  const handleBlogClick = (blog: any) => {
    router.push(`/blog-posts/${blog.id}`);
    // cookies.set('blog', blog);
    return;
  };

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    // bgcolor: 'background.paper',
    height: 'auto', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center'
  };


  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const cookies = new Cookies();
  console.log(cookies.getAll)


  useEffect(() => {
    const timer = setTimeout(() => {
      handleOpen();
    }, 5000);
  
    // Clean up the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);
  



  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const data = await GetBlog();
        
        if (data) {
        }
        setBlogData(data.body);
        console.log(data.body);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, []); 


  return (
    <div>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
    <Box sx={style}>
      <div  style={{ width: '100%',background: 'linear-gradient(90deg, rgb(253, 45, 195) -2.8%, rgba(0, 63, 189, 0.4) 124.34%)', height: '100%', padding: '10%', position: 'relative'}} className='koalaPopUp'>
        {/* <Image  alt='koalabg' src={koalaPopUp} className='signupPopup'/> */}
        <div style={{position: 'absolute', left: '96%', top: '1.5%', paddingTop: '-10%'}}>
        <button style={{ backgroundColor: 'transparent', border: 'none', fontSize: '20px', cursor: 'pointer' , position: 'absolute', top: '0', right: '0'}} onClick={handleClose}>
            &#x2715; {/* Close icon (x) */}
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center', alignItems: 'center', width: '100%', flexWrap: 'wrap', textAlign: 'center', height: '100%' }}>
          <h2 style={{color: 'white', marginBottom: '10px'}}>WELCOME TO FRAKTIONAL.DEV</h2>
          <p style={{ paddingLeft: '10%', paddingRight: '10%', color: 'white' }}>where innovation meets code, and the possibilities of technology unfold at your fingertips</p>
          <div style={{ width: '90%', height: '59px', borderRadius: '8px', border: '1px solid rgba(255, 123)'}} className='buttonsContainer'>
            <div>
              <button disabled>
                <Link href='#' style={{color: '#252525'}}>Sign up as a Company</Link>
              </button>
            </div>
            <div>
              <button>
                <Link href='/auth/register' style={{color: 'white'}}>Sign up as a Dev</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Box>
    </Modal> 
    <Layout
      title='fraktional'  description="hhhhh" type="dddd"
    >
    <Header 
      menuTogglerFunction={setMenuToggler} 
      menuTogglerValue={menuToggler} 
    />
    <MobileMenu menuToggler={menuToggler} />
    {/* ========== MAIN CONTENT ========== */}
    <main id="content" role="main" >
      {/* Hero */}
      
    <div 
      style={{
        backgroundImage: `url(${banner1.src})`,  
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      >
        <div className="container d-lg-flex align-items-lg-center content-space-t-3 content-space-lg-0 min-vh-lg-100" >
          {/* Heading */}
          <div data-aos="fade-right" className="w-100">
            <div className="row">
              <div className="col-lg-5">
                <div className="mb-5">
                  <h1 className="display-4 mb-3 heroText" style={{fontSize:'calc(1.475rem + 1.5vw)'}}>
                    Looking for a <br /> Fraktional
                    <span className="text-primary text-highlight-warning">
                      <span className="animatedText">
                        <TypedText />
                      </span>
                    </span>
                  </h1>
                  <p className="lead">We connect developers and organizations with each other for short to medium term projects.</p>
                </div>
                <div className="d-grid d-sm-flex gap-3">
                  <a className="ctabutton-1  btn-transition hover:text-white py-2 px-5" href="/fraktional-dev">Get an F-Dev</a>
                  <a className="ctabutton-1  btn-transition hover:text-white py-2 px-5" href="/fraktional-gig">Get an F-Gig</a>
                </div>

                
              </div>
              {/* End Col */}
            </div>
            {/* End Row */}
          </div>
          {/* End Title & Description */}
          <div data-aos="fade-left" className="col-lg-7 col-xl-6 d-none d-lg-block position-absolute top-0 end-0 pe-0 koalaContainer" style={{marginTop: '6.75rem'}}>
           
            <img 
              src={cards.src} 
              height={100}
              width={400}
              alt='cards' 
              className='koalaHero' 
            />
         
          </div>
        </div>
      </div>
      {/* End Hero */}
      {/* Card Grid */}
      <div data-aos="fade-up" className="container content-space-2 content-space-t-xl-3 content-space-b-lg-3" >
        {/* Heading */}
        <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5">
          <h2>Expertise Across Domains: Transforming Tech, Data, and Intelligence</h2>
        </div>
        {/* End Heading */}
        <div className="text-center mb-10">
          {/* List Checked */}
          
          <ul className="list-inline list-checked list-checked-primary">
            <li className="list-inline-item list-checked-item">Innovate. Implement. Inspire.</li>
            <li className="list-inline-item list-checked-item">Analyze. Architect. Advance</li>
            <li className="list-inline-item list-checked-item">Discover. Decode. Dominate.</li>
          </ul>
          {/* End List Checked */}
        </div>
        <div className="row mb-5 mb-md-0">
          <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
            {/* Card */}
            <div className="card card-sm h-100">
              <div className="p-2" >
              <Image
                priority={true}
                className="card-img"
                src={macbook.src}
                alt="Image Description"
                width={80}
                height={80}
              />
{/* 
              <img
              src="https://res.cloudinary.com/domhrpxzy/image/upload/v1705914738/rsuia2h2tlt9utkt8ifr.png"
                loading="lazy"
                data-sizes="auto"
                className="lazyload" /> */}
              </div>
              <div className="card-body">
                <h4 className="card-title">Software engineers:</h4>
                <p className="card-text">Get a software engineer for new/existing builds.</p>
                {/* List Pointer */}
                <ul className="list-pointer mb-0">
                  <li className="list-pointer-item">Full-Stack Developer</li>
                  <li className="list-pointer-item">Mobile Developer</li>
                  <li className="list-pointer-item">QA Testor</li>
                </ul>
                {/* End List Pointer */}
              </div>
              <div><TransitionsModal text='We offer a selection of qualified engineers, ranging from senior to intermediate levels, to
                  effectively meet your project needs.'/></div>
              {/* <a className="card-footer card-link border-top" >Learn more <i className="bi-chevron-right small ms-1" /></a> */}
            </div>

            
            {/* End Card */}
          </div>
          {/* End Col */}
          <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
            {/* Card */}
            <div className="card card-sm h-100">
              <div className="p-2">
                <Image className="card-img" width={80} height={80} src={card2.src} alt="Image Description" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Data Engineering:</h4>
                <p className="card-text">Acquire expert data engineers for foundational and advanced architectures.</p>
                {/* List Pointer */}
                <ul className="list-pointer mb-0">
                  <li className="list-pointer-item">Machine Learning specialist</li>
                  <li className="list-pointer-item">Natural Language Processing</li>
                  <li className="list-pointer-item">Predictive Analytics</li>
                </ul>
                {/* End List Pointer */}
              </div>
              <div><TransitionsModal text='Choose from our pool of experienced data engineers, spanning senior to intermediate
                                expertise, for optimal data solutions.'/></div>
            </div>
            {/* End Card */}
          </div>
          {/* End Col */}
          <div className="col-sm-6 col-lg-4">
            {/* Card */}
            <div className="card card-sm h-100">
              <div className="p-2">
                <Image className="card-img"  width={80} height={80} src={card3.src} alt="Image Description" />
              </div>
              <div className="card-body">
                <h4 className="card-title">AI/ML Engineers:</h4>
                <p className="card-text">Secure skilled ML engineers for innovative and ongoing projects.</p>
                {/* List Pointer */}
                <ul className="list-pointer mb-0">
                  <li className="list-pointer-item">Big Data Specialist</li>
                  <li className="list-pointer-item">Cloud Specialist</li>
                  <li className="list-pointer-item">Data Analyst</li>
                </ul>
                {/* End List Pointer */}
              </div>
              <div><TransitionsModal text='We have proficient ML engineers, from senior to intermediate, for your data-driven initiatives.'/></div>
            </div>
            {/* End Card */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>

        
      <div>
  
     
    </div>




      {/* End Card Grid */}
      {/* Features */}
      <div className="position-relative rounded-2 mx-3 mx-lg-10 fraktionalDev">

        <div className="container content-space-2 content-space-lg-3 ">
          {/* Heading */}
          <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5">
            <h2>Fraktional.dev: Where Capacity Meets Flexibility</h2>
            <p>Unlock tailored tech opportunities, balance costs, and connect effortlessly through Fraktional.</p>
          </div>
          {/* End Heading */}
          <div className="text-center mb-10">
            {/* List Checked */}
            <ul className="list-inline list-checked list-checked-primary">
              <li className="list-inline-item list-checked-item">Flexible.</li>
              <li className="list-inline-item list-checked-item">Reliable.</li>
              <li className="list-inline-item list-checked-item">Efficient</li>
            </ul>
            {/* End List Checked */}
          </div>
          <div className="row">
            <div className="col-lg-7 mb-9 mb-lg-0">
              <div className="pe-lg-6">
                {/* Browser Device */}
                <figure className="device-browser">
                  <div className="device-browser-header">
                    <div className="device-browser-header-btn-list">
                      <span className="device-browser-header-btn-list-btn" />
                      <span className="device-browser-header-btn-list-btn" />
                      <span className="device-browser-header-btn-list-btn" />
                    </div>
                    <div className="device-browser-header-browser-bar">www.fraktional.dev/</div>
                  </div>
                  <div className="device-browser-frame">
                    <Image className="device-browser-img" src={fraktionalOverview} alt="Image Description" />
                  </div>
                </figure>
                {/* End Browser Device */}
              </div>
            </div>
            {/* End Col */}
            <div className="col-lg-5">
              {/* Heading */}
              <div className="mb-4">
                <h2>Are You Settling for Rigid Tech Resourcing?</h2>
                <p>Don't be confined by traditional hiring practices. With Fraktional, dive into a dynamic pool of expertise tailored to your immediate project needs.</p>
              </div>
              {/* End Heading */}
              {/* List Checked */}
              <ul className="list-checked list-checked-primary mb-5">
                <li className="list-checked-item">24 hour turnaround</li>
                <li className="list-checked-item">Specialist Skills</li>
                <li className="list-checked-item">30 Days Onboarding</li>
              </ul>
              {/* End List Checked */}
              <a className="btn btn-primary getStarted" style={{border:"0px", background: 'linear-gradient(90deg, #FD2DC3 -2.8%, rgba(0, 63, 189, 0.4) 124.34%)'}} href="/fraktional-dev">Get started</a>
              <hr className="my-5" />
              <span className="d-block">Trusted by leading companies</span>
              <div className="">

                <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                <div>
                  <Image style={{height:"40px", width:"40px"}} className="avatar avatar-4x3" src={fitbit} alt="Logo" />
                </div>

                <div>
                <Image style={{height:"40px", width:"40px"}} className="avatar avatar-4x3" src={forbes} alt="Logo" />
                </div>
                
                <div>
                <Image style={{height:"60px", width:"60px" }} className="avatar avatar-4x3" src={sanlam} alt="Logo" />
                </div>

                <div>
                <Image style={{height:"45px",width:"45px" }} className="avatar avatar-4x3" src={discovery} alt="Logo" />
                </div>
                </div>


                
               
                
              </div>
              {/* End Row */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
      </div>
      {/* End Features */}
      {/* Testimonials */}
      <div className="container content-space-2 content-space-lg-3">
        <div className="row align-items-md-center">
          <div data-aos="fade-right" className="col-md-5 d-none d-md-block">
            <Image className="img-fluid rounded-2" src={bigAvatar} alt="Image Description" />
          </div>
          {/* End Col */}
          <div className="col-md-7">
            {/* Blockquote */}
            <figure className="pe-md-7">
              <div className="mb-4">
                {/* <Image className="avatar avatar-xl avatar-4x3" src={mailchimplogo} alt="Image Description" /> */}
              </div>
              <blockquote data-aos="fade-top" className="blockquote blockquote-lg" style={{maxWidth:"100%"}}>" I'm absolutely floored by speed and quality of service that was provided and can guarantee that I will be a return customer. "</blockquote>
              <figcaption className="blockquote-footer">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0 d-md-none">
                    <Image className="avatar avatar-circle" src={smallAvatar} alt="Image Description" />
                  </div>
                  <div data-aos="fade" className="flex-grow-1 ms-3 ms-md-0">
                    Kweku
                    <span data-aos="fade" className="blockquote-footer-source">Founder: The App Lab</span>
                  </div>
                </div>
              </figcaption>
            </figure>
            {/* End Blockquote */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>
      {/* End Testimonials */}
      {/* Stats */}
      


      <div data-aos="zoom-in-up" className="stats rounded-2 mx-3 mx-lg-10">
        <div className="container content-space-2">
          <div className="row justify-content-center">
            <div className="col-sm-6 col-md-4 mb-7 mb-md-0">
              {/* Stats */}
              <div className="text-center">
                <h2 className="display-4"><i className="bi-arrow-down-short text-danger" />40%</h2>
                <p className="mb-0">Reduced Hiring<br />Time</p>
              </div>
              {/* End Stats */}
            </div>
            {/* End Col */}
            <div className="col-sm-6 col-md-4 mb-7 mb-md-0">
              {/* Stats */}
              <div className="text-center">
                <h2 className="display-4"><i className="bi-arrow-up-short text-success" />98%</h2>
                <p className="mb-0">Client Satisfaction<br />Rate</p>
              </div>
              {/* End Stats */}
            </div>
            {/* End Col */}
            <div className="col-sm-6 col-md-4">
              {/* Stats */}
              <div className="text-center">
                <h2 className="display-4"><i className="bi-arrow-up-short text-success" />9.3%</h2>
                <p className="mb-0">Over 1,500 Vetted <br />Engineers</p>
              </div>
              {/* End Stats */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
      </div>
      {/* End Stats */}
      {/* Card Grid */}
      <div data-aos="fade-up" className="container content-space-2 content-space-lg-3">
        {/* Heading */}
        <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5">
          <h2>Discover more</h2>
        </div>
        {/* End Heading */}
        <div style={{backgroundColor: 'brown', display: 'flex'}}>

        </div>
        <div className="overflow-hidden">
  <div className="row gx-lg-7">
    {Array.isArray(blogData) &&
      blogData
        .slice(0, 3) // Display only the first 3 blogs (the latest ones)
        .map((data: any, index: number) => (
          <div key={index} className="col-sm-6 col-lg-4 mb-5">
            {/* Card */}
            <a
              onClick={handleBlogClick}
              href={`/blog-posts/${data.id}`}
              className="card card-flush h-100"
              data-aos="fade-up"
            >
              <img
                style={{ height: '300px', width: '100%' }}
                className="card-img"
                src={data.jetpack_featured_media_url}
                alt="Image Description"
              />
              <div className="card-body">
                <span className="card-subtitle text-body">Read the blog</span>
                <h3
                  className="card-title"
                  style={{ color: '#252525' }}
                  dangerouslySetInnerHTML={{
                    __html: `${data.title.rendered.substring(0, 50)} ${
                      data.title.rendered.length > 60 ? '...' : ''
                    }`,
                  }}
                />

                <p className="card-text text-body">
                  <p
                    className="mb-5"
                    style={{ color: '#252525' }}
                    dangerouslySetInnerHTML={{
                      __html: `${data.content.rendered.substring(0, 200)} ${
                        data.content.rendered.length > 200 ? '...' : ''
                      }`,
                    }}
                  />
                </p>
                <p className="mt-3 text-sm text-blue-500">
                  {moment(data.date).format('DD/MM/YYYY')}
                </p>
              </div>
            </a>
            {/* End Card */}
          </div>
        ))}
  </div>
  {/* End Row */}
</div>
        
        {/* Card Info */}
        <div className="text-center">
          <div className="card card-info-link card-sm">
            <div className="card-body">
              Want to read more? <a className="card-link ms-2" href={`/blog-posts`} style={{color: '#FD2DC3'}}>Go here <span className="bi-chevron-right small ms-1" /></a>
            </div>
          </div>
        </div>
        {/* End Card Info */}
      </div>
      {/* End Card Grid */}
    </main>
    <Parallaxx/>           
    <Footer />
    </Layout>
  </div>
  )
}

export default dynamic (() => Promise.resolve(HomePage), {ssr: false})

