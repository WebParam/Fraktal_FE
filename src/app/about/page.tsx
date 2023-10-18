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
                    <p className="lead">Fraktional is a web company that builds websites. Businesses of every size—from new startups to public companies—use our theme to build  and manage their businesses online.</p>
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
                    <h2 className="display-4">7</h2>
                    <p className="small">years in business</p>
                    </div>
                </div>
                {/* End Col */}
                <div className="col-sm-4 col-lg-3 mb-7 mb-sm-0">
                    <div className="text-center">
                    <h2 className="display-4">3,5k+</h2>
                    <p className="small">copies sold</p>
                    </div>
                </div>
                {/* End Col */}
                <div className="col-sm-4 col-lg-3">
                    <div className="text-center">
                    <h2 className="display-4">85%</h2>
                    <p className="small">happy customers</p>
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
        <h2>Tools should adapt to the user, not the other way around.</h2>
      </div>
      {/* End Col */}
      <div className="col-lg-6">
        <p>Since 2007, we have helped 25 companies launch over 1k incredible products. We believe the best digital solutions are built at the intersection of business strategy, available technology, and real user's needs.</p>
        <p>Things can get really complex, really quickly, and a pragmatic, synthetic and clear vision is essential to be able to create something that, after all, is meant to be used. Emotions also have a big role to play and developing clear and beautiful aesthetics is of the utmost importance to create a pleasant environment in which the user actually enjoys the time spent in it. In the end, we're all suckers for beautiful things that just work</p>
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
      <h2>Creative minds</h2>
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
            <span className="card-subtitle">Founder / CEO</span>
            <h4 className="card-title">Christina Kray</h4>
            <p className="card-text">I am an ambitious workaholic, but apart from that, pretty simple person.</p>
          </div>
          <div className="card-footer pt-0">
            {/* Socials */}
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a className="btn btn-outline-primary btn-xs btn-icon rounded" href="#">
                  <i className="bi-facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-outline-primary btn-xs btn-icon rounded" href="#">
                  <i className="bi-google" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-outline-primary btn-xs btn-icon rounded" href="#">
                  <i className="bi-twitter" />
                </a>
              </li>
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
            <span className="card-subtitle">Project Manager</span>
            <h4 className="card-title">Jeff Fisher</h4>
            <p className="card-text">I am an ambitious workaholic, but apart from that, pretty simple person.</p>
          </div>
          <div className="card-footer pt-0">
            {/* Socials */}
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a className="btn btn-outline-primary btn-xs btn-icon rounded" href="#">
                  <i className="bi-facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-outline-primary btn-xs btn-icon rounded" href="#">
                  <i className="bi-google" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-outline-primary btn-xs btn-icon rounded" href="#">
                  <i className="bi-twitter" />
                </a>
              </li>
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
            <span className="card-subtitle">Product Designer</span>
            <h4 className="card-title">Amy Forren</h4>
            <p className="card-text">I am an ambitious workaholic, but apart from that, pretty simple person.</p>
          </div>
          <div className="card-footer pt-0">
            {/* Socials */}
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a className="btn btn-outline-primary btn-xs btn-icon rounded" href="#">
                  <i className="bi-facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-outline-primary btn-xs btn-icon rounded" href="#">
                  <i className="bi-google" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-outline-primary btn-xs btn-icon rounded" href="#">
                  <i className="bi-twitter" />
                </a>
              </li>
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
            <span className="card-subtitle">Support Consultant</span>
            <h4 className="card-title">Philip Williams</h4>
            <p className="card-text">I am an ambitious workaholic, but apart from that, pretty simple person.</p>
          </div>
          <div className="card-footer pt-0">
            {/* Socials */}
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a className="btn btn-outline-primary btn-xs btn-icon rounded" href="#">
                  <i className="bi-facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-outline-primary btn-xs btn-icon rounded" href="#">
                  <i className="bi-google" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-outline-primary btn-xs btn-icon rounded" href="#">
                  <i className="bi-twitter" />
                </a>
              </li>
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