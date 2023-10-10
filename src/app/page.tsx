"use client"
import Image from 'next/image';
import heroImage from '../assets/additional/heroImage.jpg';
import card1 from "../assets/img/480x220/img1.jpg";
import card2 from "../assets/img/480x220/img2.jpg";
import card3 from "../assets/img/480x220/img3.jpg";
import img6 from "../assets/img/1618x1010/img7.jpg";
import fitbit from "../assets/svg/brands/fitbit-dark.svg";
import forbes from "../assets/svg/brands/forbes-dark.svg";
import mailchimp from "../assets/svg/brands/mailchimp-dark.svg";
import layar from "../assets/svg/brands/layar-dark.svg";
import bigAvatar from '../assets/additional/testimonyImage.jpg';
import mailchimplogo from "../assets/svg/brands/mailchimp-primary.svg";
import smallAvatar from '../assets/additional/testimonyAvatar.jpg';
import card4 from "../assets/img/480x320/img33.jpg";
import card5 from "../assets/img/480x320/img34.jpg";
import card6 from "../assets/img/480x320/img35.jpg";

export default function HomePage() {

  return (
    <div>
    {/* ========== MAIN CONTENT ========== */}
    <main id="content" role="main">
      {/* Hero */}
      <div className="d-lg-flex position-relative">
        <div className="container d-lg-flex align-items-lg-center content-space-t-3 content-space-lg-0 min-vh-lg-100">
          {/* Heading */}
          <div className="w-100">
            <div className="row">
              <div className="col-lg-5">
                <div className="mb-5">
                  <h1 className="display-4 mb-3">
                    Turn your ideas into a
                    <span className="text-primary text-highlight-warning">
                      <span className="js-typedjs" data-hs-typed-options="{
                        &quot;strings&quot;: [&quot;startup.&quot;, &quot;future.&quot;, &quot;success.&quot;],
                        &quot;typeSpeed&quot;: 90,
                        &quot;loop&quot;: true,
                        &quot;backSpeed&quot;: 30,
                        &quot;backDelay&quot;: 2500
                      }" />
                    </span>
                  </h1>
                  <p className="lead">Front's feature-rich designed demo pages help you create the best possible product.</p>
                </div>
                <div className="d-grid d-sm-flex gap-3">
                  <a className="btn btn-primary btn-transition px-6" href="./page-login-simple.html">Get started</a>
                  <a className="btn btn-link" href="#">Learn more <i className="bi-chevron-right small ms-1" /></a>
                </div>
              </div>
              {/* End Col */}
            </div>
            {/* End Row */}
          </div>
          {/* End Title & Description */}
          {/* SVG Shape */}
          <div className="col-lg-7 col-xl-6 d-none d-lg-block position-absolute top-0 end-0 pe-0" style={{marginTop: '6.75rem'}}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1137.5 979.2">
              <path fill="#F9FBFF" d="M565.5,957.4c81.1-7.4,155.5-49.3,202.4-115.7C840,739.8,857,570,510.7,348.3C-35.5-1.5-4.2,340.3,2.7,389
          c0.7,4.7,1.2,9.5,1.7,14.2l29.3,321c14,154.2,150.6,267.8,304.9,253.8L565.5,957.4z" />
              <defs>
                <path id="mainHeroSVG1" d="M1137.5,0H450.4l-278,279.7C22.4,430.6,24.3,675,176.8,823.5l0,0C316.9,960,537.7,968.7,688.2,843.6l449.3-373.4V0z" />
              </defs>
              <clipPath id="mainHeroSVG2">
                <use xlinkHref="#mainHeroSVG1" />
              </clipPath>
              <g transform="matrix(1 0 0 1 0 0)" clipPath="url(#mainHeroSVG2)">
                <Image width={750} height={750} src={heroImage} style={{transform: "matrix(1.4462 0 0 1.4448 52.8755 0)"}} alt='hero image' />
              </g>
            </svg>
          </div>
          {/* End SVG Shape */}
        </div>
      </div>
      {/* End Hero */}
      {/* Card Grid */}
      <div className="container content-space-2 content-space-t-xl-3 content-space-b-lg-3">
        {/* Heading */}
        <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5">
          <h2>Learn to develop sites with components and design systems</h2>
        </div>
        {/* End Heading */}
        <div className="text-center mb-10">
          {/* List Checked */}
          <ul className="list-inline list-checked list-checked-primary">
            <li className="list-inline-item list-checked-item">Asynchronous collaboration</li>
            <li className="list-inline-item list-checked-item">Updates and announcements</li>
            <li className="list-inline-item list-checked-item">Training and team building</li>
          </ul>
          {/* End List Checked */}
        </div>
        <div className="row mb-5 mb-md-0">
          <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
            {/* Card */}
            <div className="card card-sm h-100">
              <div className="p-2">
                <Image className="card-img" src={card1} alt="Image Description" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Front App</h4>
                <p className="card-text">Front App is an easier way to search on Android.</p>
                {/* List Pointer */}
                <ul className="list-pointer mb-0">
                  <li className="list-pointer-item">Advanced Analytics</li>
                  <li className="list-pointer-item">Digital Marketing</li>
                  <li className="list-pointer-item">Organization</li>
                </ul>
                {/* End List Pointer */}
              </div>
              <a className="card-footer card-link border-top" href="#">Learn more <i className="bi-chevron-right small ms-1" /></a>
            </div>
            {/* End Card */}
          </div>
          {/* End Col */}
          <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
            {/* Card */}
            <div className="card card-sm h-100">
              <div className="p-2">
                <Image className="card-img" src={card2} alt="Image Description" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Front Chat</h4>
                <p className="card-text">Front Chat is a new way to communicate with your team.</p>
                {/* List Pointer */}
                <ul className="list-pointer mb-0">
                  <li className="list-pointer-item">Cost Transformation</li>
                  <li className="list-pointer-item">Customer Experience</li>
                  <li className="list-pointer-item">Mergers and Acquisitions</li>
                </ul>
                {/* End List Pointer */}
              </div>
              <a className="card-footer card-link border-top" href="#">Learn more <i className="bi-chevron-right small ms-1" /></a>
            </div>
            {/* End Card */}
          </div>
          {/* End Col */}
          <div className="col-sm-6 col-lg-4">
            {/* Card */}
            <div className="card card-sm h-100">
              <div className="p-2">
                <Image className="card-img" src={card3} alt="Image Description" />
              </div>
              <div className="card-body">
                <h4 className="card-title">Front Calendar</h4>
                <p className="card-text">Discover an easier way to manage contacts, sales and grow lasting relationships.</p>
                {/* List Pointer */}
                <ul className="list-pointer mb-0">
                  <li className="list-pointer-item">Enterprise Technology</li>
                  <li className="list-pointer-item">Private Equity</li>
                  <li className="list-pointer-item">Sustainability</li>
                </ul>
                {/* End List Pointer */}
              </div>
              <a className="card-footer card-link border-top" href="#">Learn more <i className="bi-chevron-right small ms-1" /></a>
            </div>
            {/* End Card */}
          </div>
          {/* End Col */}
        </div>
        {/* End Row */}
      </div>
      {/* End Card Grid */}
      {/* Features */}
      <div className="position-relative bg-light rounded-2 mx-3 mx-lg-10">
        <div className="container content-space-2 content-space-lg-3">
          {/* Heading */}
          <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5">
            <h2>Wow your audience from the first second</h2>
            <p>The powerful and flexible theme for all kinds of businesses</p>
          </div>
          {/* End Heading */}
          <div className="text-center mb-10">
            {/* List Checked */}
            <ul className="list-inline list-checked list-checked-primary">
              <li className="list-inline-item list-checked-item">Responsive</li>
              <li className="list-inline-item list-checked-item">5-star support</li>
              <li className="list-inline-item list-checked-item">Constant updates</li>
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
                    <div className="device-browser-header-browser-bar">www.htmlstream.com/front/</div>
                  </div>
                  <div className="device-browser-frame">
                    <Image className="device-browser-img" src={img6} alt="Image Description" />
                  </div>
                </figure>
                {/* End Browser Device */}
              </div>
            </div>
            {/* End Col */}
            <div className="col-lg-5">
              {/* Heading */}
              <div className="mb-4">
                <h2>Collaborative tools to design user experience</h2>
                <p>We help businesses bring ideas to life in the digital world, by designing and implementing the technology tools that they need to win.</p>
              </div>
              {/* End Heading */}
              {/* List Checked */}
              <ul className="list-checked list-checked-primary mb-5">
                <li className="list-checked-item">Less routine – more creativity</li>
                <li className="list-checked-item">Hundreds of thousands saved</li>
                <li className="list-checked-item">Scale budgets efficiently</li>
              </ul>
              {/* End List Checked */}
              <a className="btn btn-primary" href="#">Get started</a>
              <hr className="my-5" />
              <span className="d-block">Trusted by leading companies</span>
              <div className="row">
                <div className="col py-3">
                  <Image className="avatar avatar-4x3" src={fitbit} alt="Logo" />
                </div>
                {/* End Col */}
                <div className="col py-3">
                  <Image className="avatar avatar-4x3" src={forbes} alt="Logo" />
                </div>
                {/* End Col */}
                <div className="col py-3">
                  <Image className="avatar avatar-4x3" src={mailchimp} alt="Logo" />
                </div>
                {/* End Col */}
                <div className="col py-3">
                  <Image className="avatar avatar-4x3" src={layar} alt="Logo" />
                </div>
                {/* End Col */}
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
          <div className="col-md-5 d-none d-md-block">
            <Image className="img-fluid rounded-2" src={bigAvatar} alt="Image Description" />
          </div>
          {/* End Col */}
          <div className="col-md-7">
            {/* Blockquote */}
            <figure className="pe-md-7">
              <div className="mb-4">
                <Image className="avatar avatar-xl avatar-4x3" src={mailchimplogo} alt="Image Description" />
              </div>
              <blockquote className="blockquote blockquote-lg">" I'm absolutely floored by the level of care and attention to detail the team at Htmlstream have put into this theme and for one can guarantee that I will be a return customer. "</blockquote>
              <figcaption className="blockquote-footer">
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0 d-md-none">
                    <Image className="avatar avatar-circle" src={smallAvatar} alt="Image Description" />
                  </div>
                  <div className="flex-grow-1 ms-3 ms-md-0">
                    Lewis
                    <span className="blockquote-footer-source">Senior Director of Operations at Mailchimp</span>
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
      <div className="bg-light rounded-2 mx-3 mx-lg-10">
        <div className="container content-space-2">
          <div className="row justify-content-center">
            <div className="col-sm-6 col-md-4 mb-7 mb-md-0">
              {/* Stats */}
              <div className="text-center">
                <h2 className="display-4"><i className="bi-arrow-down-short text-danger" />47%</h2>
                <p className="mb-0">fewer meetings across<br />organizations</p>
              </div>
              {/* End Stats */}
            </div>
            {/* End Col */}
            <div className="col-sm-6 col-md-4 mb-7 mb-md-0">
              {/* Stats */}
              <div className="text-center">
                <h2 className="display-4"><i className="bi-arrow-up-short text-success" />23%</h2>
                <p className="mb-0">increase in traffic on<br />webpages with Looms</p>
              </div>
              {/* End Stats */}
            </div>
            {/* End Col */}
            <div className="col-sm-6 col-md-4">
              {/* Stats */}
              <div className="text-center">
                <h2 className="display-4"><i className="bi-arrow-up-short text-success" />9.3%</h2>
                <p className="mb-0">boost in reply rates across<br />sales outreach</p>
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
      <div className="container content-space-2 content-space-lg-3">
        {/* Heading */}
        <div className="w-md-75 w-lg-50 text-center mx-md-auto mb-5">
          <h2>Discover more</h2>
        </div>
        {/* End Heading */}
        <div className="overflow-hidden">
          <div className="row gx-lg-7">
            <div className="col-sm-6 col-lg-4 mb-5">
              {/* Card */}
              <a className="card card-flush h-100" href="#" data-aos="fade-up">
                <Image className="card-img" src={card4} alt="Image Description" />
                <div className="card-body">
                  <span className="card-subtitle text-body">Read the blog</span>
                  <h4 className="card-title text-inherit">Have a meaningful impact</h4>
                  <p className="card-text text-body">Opportunities to Front who have proven to be good at executing on them.</p>
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col-sm-6 col-lg-4 mb-5">
              {/* Card */}
              <a className="card card-flush h-100" href="#" data-aos="fade-up" data-aos-delay={150}>
                <Image className="card-img" src={card5} alt="Image Description" />
                <div className="card-body">
                  <span className="card-subtitle text-body">Read the blog</span>
                  <h4 className="card-title text-inherit">Documentation</h4>
                  <p className="card-text text-body">Whether you're a startup or a global enterprise, learn how to integrate with Front.</p>
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Col */}
            <div className="col-sm-6 col-lg-4 mb-5">
              {/* Card */}
              <a className="card card-flush h-100" href="#" data-aos="fade-up" data-aos-delay={200}>
                <Image className="card-img" src={card6} alt="Image Description" />
                <div className="card-body">
                  <span className="card-subtitle text-body">Learn about other solutions</span>
                  <h4 className="card-title text-inherit">Explore the Snippets tool</h4>
                  <p className="card-text text-body">Quickly Front sample components, copy-paste codes.</p>
                </div>
              </a>
              {/* End Card */}
            </div>
            {/* End Col */}
          </div>
          {/* End Row */}
        </div>
        {/* Card Info */}
        <div className="text-center">
          <div className="card card-info-link card-sm">
            <div className="card-body">
              Want to read more? <a className="card-link ms-2" href="#">Go here <span className="bi-chevron-right small ms-1" /></a>
            </div>
          </div>
        </div>
        {/* End Card Info */}
      </div>
      {/* End Card Grid */}
    </main>
    {/* ========== END MAIN CONTENT ========== */}
  </div>
  )
}

