'use client'
import { useState } from "react";
import './about.scss';
import Image from "next/image";
import Header from "../components/Header/Header";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import Footer from "../components/Footer/Footer";

import img1 from '../../assets/img/480x320/img17.jpg';
import img2 from '../../assets/img/480x320/img6.jpg';
import img3 from '../../assets/img/480x320/img14.jpg';
import img4 from '../../assets/img/480x320/img25.jpg';
import img5 from '../../assets/img/480x320/img16.jpg';
import img6 from '../../assets/img/480x320/img12.jpg';

import team1 from "../../assets/img/160x160/img7.jpg";
import team2 from "../../assets/img/160x160/img3.jpg";
import team3 from "../../assets/img/160x160/img10.jpg";
import team4 from "../../assets/img/160x160/img5.jpg";

function About() {
    const [menuToggler, setMenuToggler] = useState<boolean>(false);
    
    return (
        <>
        <Header 
            menuTogglerFunction={setMenuToggler} 
            menuTogglerValue={menuToggler} 
        />
        <MobileMenu menuToggler={menuToggler} />

        <main id="content" role="main">
            {/* Gallery */}
            <div className="container content-space-t-3 content-space-t-lg-5">
                <div className="w-lg-75 text-center mx-lg-auto">
                {/* Heading */}
                <div className="mb-5 mb-md-10">
                    <h1 className="display-4" style={{color: '#4B4C4E'}}>About Us</h1>
                    <p className="lead">Fraktional.dev is a platform that offers organizations access to on-demand IT engineers for
short-medium term projects.</p>
                </div>
                {/* End Heading */}
                </div>
                <div className="row gx-3">
                <div className="col mb-3">
                    <div className="bg-img-start" style={{height: '15rem'}} >
                    <Image src={img1} alt="card image" loading="lazy" style={{width: '100%', height: '100%'}}/>
                    </div>
                </div>
                {/* End Col */}
                <div className="col-3 d-none d-md-block mb-3">
                    <div className="bg-img-start" style={{height: '15rem'}} >
                        <Image src={img2} alt="card image" loading="lazy" style={{width: '100%', height: '100%'}}/>
                    </div>
                </div>
                {/* End Col */}
                <div className="col mb-3">
                    <div className="bg-img-start" style={{height: '15rem'}} >
                    <Image src={img3} alt="card image" loading="lazy" style={{width: '100%', height: '100%'}}/>
                    </div>
                </div>
                {/* End Col */}
                <div className="w-100" />
                <div className="col mb-3 mb-md-0">
                    <div className="bg-img-start" style={{height: '15rem'}} >
                    <Image src={img4} alt="card image" loading="lazy" style={{width: '100%', height: '100%'}}/>
                    </div>
                </div>
                {/* End Col */}
                <div className="col-4 d-none d-md-block mb-3 mb-md-0">
                    <div className="bg-img-start" style={{height: '15rem'}} >
                    <Image src={img5} alt="card image" loading="lazy" style={{width: '100%', height: '100%'}}/>
                    </div>
                </div>
                {/* End Col */}
                <div className="col">
                    <div className="bg-img-start" style={{height: '15rem'}} >
                    <Image src={img6} alt="card image" loading="lazy" style={{width: '100%', height: '100%'}}/>
                    </div>
                </div>
                {/* End Col */}
                </div>
                {/* End Row */}
            </div>
            {/* End Gallery */}
            {/* Feature Stats */}
            <div className="container content-space-2 content-space-lg-3">
                <div className="row justify-content-lg-center">
                <div className="col-sm-4 col-lg-3 mb-7 mb-sm-0">
                    <div className="text-center">
                    <h2 className="display-4">40% </h2>
                    <p className="small">Reduced Hiring Time</p>
                    </div>
                </div>
                {/* End Col */}
                <div className="col-sm-4 col-lg-3 mb-7 mb-sm-0">
                    <div className="text-center">
                    <h2 className="display-4">98% </h2>
                    <p className="small">Client Satisfaction Rate </p>
                    </div>
                </div>
                {/* End Col */}
                <div className="col-sm-4 col-lg-3">
                    <div className="text-center">
                    <h2 className="display-4">1500+</h2>
                    <p className="small">Vetted Engineers</p>
                    </div>
                </div>
                {/* End Col */}
                </div>
                {/* End Row */}
            </div>
            {/* End Feature Stats */}
  <div className="border-top mx-auto" style={{maxWidth: '25rem'}} />
  {/* Info */}
  <div className="container content-space-2 content-space-lg-3">
    <div className="row justify-content-lg-between">
      <div className="col-lg-4 mb-5 mb-lg-0">
        <h2>Where capacity meets flexibility.</h2>
      </div>
      {/* End Col */}
      <div className="col-lg-6">
        <h3>How We Work.</h3>
        <br/><br/>
        <h4>For Clients</h4>
        <p>Post your project requirements and job listings.
Review developer applications that match your
project's needs.
Select the ideal candidate for your project</p>

<br/><br/>
        <h4>For Developers</h4>
        <p>Submit your CV to showcase your skills and
          experience.
          Receive notifications about projects that match your
          profile.
          Get selected by clients and start working on exciting
          projects</p>

          
<br/><br/>
        <h4>Why Choose Fraktional.dev</h4>
        <p>We make finding the right IT talent or project simple
and convenient.
Our platform is designed to match developers with
their ideal projects.
We prioritize privacy and data security to ensure a
safe and trusted environment.
Join Fraktional.dev today to experience a smarter,
more efficient way to connect IT talent with projects</p>

      </div>
      {/* End Col */}
    </div>
    {/* End Row */}
  </div>
  {/* End Info */}
  <div className="border-top mx-auto" style={{maxWidth: '25rem'}} />
  {/* Team */}
  <div className="container content-space-2 content-space-lg-3">
    {/* Heading */}
    <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
      <span className="text-cap">Our team</span>
      <h2>Passionate about helping you</h2>
    </div>
    {/* End Heading */}
    <div className="row gx-3 mb-5">
      <div className="col-sm-6 col-lg-3 mb-3">
        {/* Card */}
        <div className="card card-transition h-100">
          <div className="card-body">
            <div className="avatar avatar-lg avatar-circle mb-4">
              <Image className="avatar-img" src={team1} alt="Image Description" />
            </div>
            <span className="card-subtitle">John Kitenge</span>
            <h4 className="card-title">Founder / CEO</h4>
            <p className="card-text">I am an ambitious workaholic, passionate about strategical growth in the African market.</p>
          </div>
          <div className="card-footer pt-0">
            {/* Socials */}
            <ul className="list-inline mb-0">
            <li className="list-inline-item">
                <a className="btn btn-outline-primary btn-xs btn-icon rounded" target="_blank" href="https://www.linkedin.com/in/john-kitenge-731a431b0/">
                  <i className="bi-linkedin" />
                </a>
              </li>
              {/* <li className="list-inline-item">
                <a className="btn btn-outline-primary btn-xs btn-icon rounded" href="#">
                  <i className="bi-google" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-outline-primary btn-xs btn-icon rounded" href="#">
                  <i className="bi-twitter" />
                </a>
              </li> */}
            </ul>
            {/* End Socials */}
          </div>
        </div>
        {/* End Card */}
      </div>
      {/* End Col */}
      <div className="col-sm-6 col-lg-3 mb-3">
        {/* Card */}
        <div className="card card-transition h-100">
          <div className="card-body">
            <div className="avatar avatar-lg avatar-circle mb-4">
              <Image className="avatar-img" src={team2} alt="Image Description" />
            </div>
            <span className="card-subtitle">Nobuhle Mazibuko</span>
            <h4 className="card-title">Head of operations</h4>
            <p className="card-text">Focussed on delivering world class customer service.</p>
          </div>
          <div className="card-footer pt-0">
            {/* Socials */}
            <ul className="list-inline mb-0">
            <li className="list-inline-item">
                <a className="btn btn-outline-primary btn-xs btn-icon rounded" target="_blank" href="https://www.linkedin.com/in/nobuhle-mazibuko-progchick/">
                  <i className="bi-linkedin" />
                </a>
              </li>
              {/* <li className="list-inline-item">
                <a className="btn btn-outline-primary btn-xs btn-icon rounded" href="#">
                  <i className="bi-google" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-outline-primary btn-xs btn-icon rounded" href="#">
                  <i className="bi-twitter" />
                </a>
              </li> */}
            </ul>
            {/* End Socials */}
          </div>
        </div>
        {/* End Card */}
      </div>
      {/* End Col */}
      <div className="col-sm-6 col-lg-3 mb-3">
        {/* Card */}
        <div className="card card-transition h-100">
          <div className="card-body">
            <div className="avatar avatar-lg avatar-circle mb-4">
              <Image className="avatar-img" src={team3} alt="Image Description" />
            </div>
            <span className="card-subtitle">Njinu Kimani</span>
            <h4 className="card-title">Head of engineering</h4>
            <p className="card-text">Process optimizer and standards junkie.</p>
          </div>
          <div className="card-footer pt-0">
            {/* Socials */}
            <ul className="list-inline mb-0">
            <li className="list-inline-item">
                <a className="btn btn-outline-primary btn-xs btn-icon rounded" target="_blank" href="https://www.linkedin.com/in/njinu-kimani-1241a575/">
                  <i className="bi-linkedin" />
                </a>
              </li>
              {/* <li className="list-inline-item">
                <a className="btn btn-outline-primary btn-xs btn-icon rounded" href="#">
                  <i className="bi-google" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-outline-primary btn-xs btn-icon rounded" href="#">
                  <i className="bi-twitter" />
                </a>
              </li> */}
            </ul>
            {/* End Socials */}
          </div>
        </div>
        {/* End Card */}
      </div>
      {/* End Col */}
      <div className="col-sm-6 col-lg-3 mb-3">
        {/* Card */}
        <div className="card card-transition h-100">
          <div className="card-body">
            <div className="avatar avatar-lg avatar-circle mb-4">
              <Image className="avatar-img" src={team4} alt="Image Description" />
            </div>
            <span className="card-subtitle">Annie Kapenda</span>
            <h4 className="card-title">Head of growth</h4>
            <p className="card-text">Communicating our value clearly is half the sale won.</p>
          </div>
          <div className="card-footer pt-0">
            {/* Socials */}
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a className="btn btn-outline-primary btn-xs btn-icon rounded" target="_blank" href="https://www.linkedin.com/in/annie-kapenda-00848519b/">
                  <i className="bi-linkedin" />
                </a>
              </li>
              {/* <li className="list-inline-item">
                <a className="btn btn-outline-primary btn-xs btn-icon rounded" href="#">
                  <i className="bi-google" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-outline-primary btn-xs btn-icon rounded" href="#">
                  <i className="bi-twitter" />
                </a>
              </li> */}
            </ul>
            {/* End Socials */}
          </div>
        </div>
        {/* End Card */}
      </div>
      {/* End Col */}
    </div>
    {/* End Row */}
    {/* Card Info */}
    <div className="text-center">
      <div className="card card-info-link card-sm">
        <div className="card-body">
          Want to work with us? <a className="card-link ms-2" style={{color: '#FD2DC3'}} href="./page-hire-us.html">We are hiring <span className="bi-chevron-right small ms-1" /></a>
        </div>
      </div>
    </div>
    {/* End Card Info */}
  </div>
  {/* End Team */}
</main>


        <Footer />
        </>
    )
}

export default About;