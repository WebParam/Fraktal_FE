'use client'
import React, {useState } from 'react';
import Header from '../components/Header/Header';
import MobileMenu from '../components/MobileMenu/MobileMenu';
import Footer from '../components/Footer/Footer';


const page = () => {

  const [toggleApplicantDropdown, setToggleApplicantDropdown] = useState<number>(0);
  const [menuToggler, setMenuToggler] = useState(false);

  function showHideApplicantDropdown(currentdropdown: number){
    setToggleApplicantDropdown(currentdropdown);
  }

  return (
    <>
  {/* ========== HEADER ========== */}
  <Header 
        menuTogglerFunction={setMenuToggler} 
        menuTogglerValue={menuToggler} 
      />
      <MobileMenu menuToggler={menuToggler} />
   
  {/* ========== END HEADER ========== */}
  {/* ========== MAIN CONTENT ========== */}
  <main id="content" role="main">
    {/* Hero */}
    <div
      className="bg-img-start"
      style={{ backgroundImage: "url(./assets/svg/components/card-11.svg)" }}
    >
      <div className="container content-space-t-3 content-space-t-lg-5 content-space-b-2">
        <div className="w-md-75 w-lg-50 text-center mx-md-auto">
          <h1>FAQ</h1>
          <p>Search our FAQ for answers to anything you might ask.</p>
        </div>
      </div>
    </div>
    {/* End Hero */}
    {/* FAQ */}
    <div className="container content-space-2 content-space-b-lg-3">
      <div className="w-lg-75 mx-lg-auto">
        <div className="d-grid gap-10">
          <div className="d-grid gap-3">
            <h2>Support</h2>
            {/* Accordion */}
            <div
              className="accordion accordion-flush accordion-lg"
              id="accordionFAQBasics"
            >
              {/* Accordion Item */}
              <div className="accordion-item">
                <div className="accordion-header" id="headingBasicsOne">
                  <a
                    onClick={()=>{showHideApplicantDropdown(0)}}
                    className="accordion-button"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseBasicsOne"
                    aria-expanded="true"
                    aria-controls="collapseBasicsOne"
                  >
                    How can I post a job listing for my project on fraktional.dev?
                  </a>
                </div>
                <div
                  id="collapseBasicsOne"
                  className= {toggleApplicantDropdown==0 ?"accordion-collapse collapse show" :"accordion-collapse collapse"}
                  aria-labelledby="headingBasicsOne"
                  data-bs-parent="#accordionFAQBasics"
                >
                  <div className="accordion-body" style={{visibility:"visible"}}>
                    You can purchase the themes on Bootstrap Themes via any
                    major credit/debit card (via Stripe) or with your Paypal
                    account. We don't support cryptocurrencies or invoicing at
                    this time.
                  </div>
                </div>
              </div>
              {/* End Accordion Item */}
              {/* Accordion Item */}
              <div className="accordion-item">
                <div className="accordion-header" id="headingBasicsTwo">

                  <a
                  onClick={()=>{showHideApplicantDropdown(1)}}
                    className="accordion-button"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseBasicsTwo"
                    aria-expanded="false"
                    aria-controls="collapseBasicsTwo"
                  >
                    What information should I include in the job posting?
                  </a>
                </div>
                <div
                  id="collapseBasicsTwo"
                  className= {toggleApplicantDropdown==1 ?"accordion-collapse collapse show" :"accordion-collapse collapse"}
                  aria-labelledby="headingBasicsTwo"
                  data-bs-parent="#accordionFAQBasics"
                >
                  <div className="accordion-body" style={{visibility:"visible"}}>
                    If you'd like a refund please reach out to us at{" "}
                    <a href="#">themes@getbootstrap.com</a>. If you need
                    technical help with the theme before a refund please reach
                    out to the seller first and they can get in touch with us if
                    they're unable to resolve the issue.
                  </div>
                </div>
              </div>
              {/* End Accordion Item */}
              {/* Accordion Item */}
              <div className="accordion-item">
                <div className="accordion-header" id="headingBasicsThree">
                  <a
                     onClick={()=>{showHideApplicantDropdown(2)}}
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseBasicsThree"
                    aria-expanded="false"
                    aria-controls="collapseBasicsThree"
                  >
                    How does the platform match me with potential developers?
                  </a>
                </div>
                <div
                  id="collapseBasicsThree"
                  className= {toggleApplicantDropdown==2 ?"accordion-collapse collapse show" :"accordion-collapse collapse"}
                  aria-labelledby="headingBasicsThree"
                  data-bs-parent="#accordionFAQBasics"
                >
                  <div className="accordion-body" style={{visibility:"visible"}}>
                    You'll receive an email from Bootstrap themes once your
                    purchase is complete.
                  </div>
                </div>
              </div>
              {/* End Accordion Item */}
              {/* Accordion Item */}
              <div className="accordion-item">
                <div className="accordion-header" id="headingBasicsFour">
                  <a
                    onClick={()=>{showHideApplicantDropdown(3)}}
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseBasicsFour"
                    aria-expanded="false"
                    aria-controls="collapseBasicsFour"
                  >
                   What is the typical timeline for finding a developer for my project?
                  </a>
                </div>
                <div
                  id="collapseBasicsFour"
                  className= {toggleApplicantDropdown==3 ?"accordion-collapse collapse show" :"accordion-collapse collapse"}
                  aria-labelledby="headingBasicsFour"
                  data-bs-parent="#accordionFAQBasics"
                >
                  <div className="accordion-body" style={{visibility:"visible"}}>
                    There are three license types - <a href="#">Standard</a>,{" "}
                    <a href="#">Multisite</a>, and <a href="#">Extended</a>.
                    We've provided the table below for a quick look at the
                    difference between the them, as well as a few examples of
                    ways each license could be used. If you'd like more of the
                    nitty-gritty details you can find them below and always feel
                    free to reach out with any questions you have at{" "}
                    <a href="#">themes@getbootstrap.com</a>.
                  </div>
                </div>
              </div>
              {/* End Accordion Item */}
              {/* Accordion Item */}
              <div className="accordion-item">
                <div className="accordion-header" id="headingBasicsFive">
                  <a
                    onClick={()=>{showHideApplicantDropdown(4)}}
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseBasicsFive"
                    aria-expanded="false"
                    aria-controls="collapseBasicsFive"
                  >
                    How do I communicate with developers during the selection process?

                  </a>
                </div>
                <div
                  id="collapseBasicsFive"
                  className= {toggleApplicantDropdown==4 ?"accordion-collapse collapse show" :"accordion-collapse collapse"}
                  aria-labelledby="headingBasicsFive"
                  data-bs-parent="#accordionFAQBasics"
                >
                  <div className="accordion-body" style={{visibility:"visible"}}>
                    If you lose the link for a theme you purchased, don't panic!
                    We've got you covered. You can login to your account, tap
                    your avatar in the upper right corner, and tap Purchases. If
                    you didn't create a login or can't remember the information,
                    you can use our handy Redownload page, just remember to use
                    the same email you originally made your purchases with.
                  </div>
                </div>
              </div>
              {/* End Accordion Item */}
              {/* Accordion Item */}
              <div className="accordion-item">
                <div className="accordion-header" id="headingBasicsSix">
                  <a
                    onClick={()=>{showHideApplicantDropdown(5)}}
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseBasicsSix"
                    aria-expanded="false"
                    aria-controls="collapseBasicsSix"
                  >
                    Where can I get help if I need assistance with the platform?
                  </a>
                </div>
                <div
                  id="collapseBasicsSix"
                  className= {toggleApplicantDropdown==5 ?"accordion-collapse collapse show" :"accordion-collapse collapse"}
                  aria-labelledby="headingBasicsSix"
                  data-bs-parent="#accordionFAQBasics"
                >
                  <div className="accordion-body" style={{visibility:"visible"}}>
                    There may be times when you need to upgrade your license
                    from the original type you purchased and we have a solution
                    that ensures you can apply your original purchase cost to
                    the new license purchase.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="headingBasicsSix">
                  <a
                    onClick={()=>{showHideApplicantDropdown(6)}}
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseBasicsSix"
                    aria-expanded="false"
                    aria-controls="collapseBasicsSix"
                  >
                    Can I provide feedback or reviews for developers I've worked with?
                  </a>
                </div>
                <div
                  id="collapseBasicsSix"
                  className= {toggleApplicantDropdown==6 ?"accordion-collapse collapse show" :"accordion-collapse collapse"}
                  aria-labelledby="headingBasicsSix"
                  data-bs-parent="#accordionFAQBasics"
                >
                  <div className="accordion-body" style={{visibility:"visible"}}>
                    There may be times when you need to upgrade your license
                    from the original type you purchased and we have a solution
                    that ensures you can apply your original purchase cost to
                    the new license purchase.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="headingBasicsSix">
                  <a
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseBasicsSix"
                    aria-expanded="false"
                    aria-controls="collapseBasicsSix"
                    onClick={()=>{showHideApplicantDropdown(7)}}
                  >
                    Is there a process for resolving disputes between clients and developers?
                  </a>
                </div>
                <div
                  id="collapseBasicsSix"
                  className= {toggleApplicantDropdown==7 ?"accordion-collapse collapse show" :"accordion-collapse collapse"}
                  aria-labelledby="headingBasicsSix"
                  data-bs-parent="#accordionFAQBasics"
                >
                  <div className="accordion-body" style={{visibility:"visible"}}>
                    There may be times when you need to upgrade your license
                    from the original type you purchased and we have a solution
                    that ensures you can apply your original purchase cost to
                    the new license purchase.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="headingBasicsSix">
                  <a
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseBasicsSix"
                    aria-expanded="false"
                    aria-controls="collapseBasicsSix"
                    onClick={()=>{showHideApplicantDropdown(8)}}
                  >
                    How are project timelines and milestones managed?
                  </a>
                </div>
                <div
                  id="collapseBasicsSix"
                  className= {toggleApplicantDropdown==8 ?"accordion-collapse collapse show" :"accordion-collapse collapse"}
                  aria-labelledby="headingBasicsSix"
                  data-bs-parent="#accordionFAQBasics"
                >
                  <div className="accordion-body" style={{visibility:"visible"}}>
                    There may be times when you need to upgrade your license
                    from the original type you purchased and we have a solution
                    that ensures you can apply your original purchase cost to
                    the new license purchase.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="headingBasicsSix">
                  <a
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseBasicsSix"
                    aria-expanded="false"
                    aria-controls="collapseBasicsSix"
                    onClick={()=>{showHideApplicantDropdown(9)}}
                  >
                   What if I need to make changes to the project's scope after selecting a developer?
                  </a>
                </div>
                <div
                  id="collapseBasicsSix"
                  className= {toggleApplicantDropdown==9 ?"accordion-collapse collapse show" :"accordion-collapse collapse"}
                  aria-labelledby="headingBasicsSix"
                  data-bs-parent="#accordionFAQBasics"
                >
                  <div className="accordion-body" style={{visibility:"visible"}}>
                    There may be times when you need to upgrade your license
                    from the original type you purchased and we have a solution
                    that ensures you can apply your original purchase cost to
                    the new license purchase.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="headingBasicsSix">
                  <a
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseBasicsSix"
                    aria-expanded="false"
                    aria-controls="collapseBasicsSix"
                    onClick={()=>{showHideApplicantDropdown(10)}}
                  >
                    How can I ensure the confidentiality of my project details?
                  </a>
                </div>
                <div
                  id="collapseBasicsSix"
                  className= {toggleApplicantDropdown==10 ?"accordion-collapse collapse show" :"accordion-collapse collapse"}
                  aria-labelledby="headingBasicsSix"
                  data-bs-parent="#accordionFAQBasics"
                >
                  <div className="accordion-body" style={{visibility:"visible"}}>
                    There may be times when you need to upgrade your license
                    from the original type you purchased and we have a solution
                    that ensures you can apply your original purchase cost to
                    the new license purchase.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="headingBasicsSix">
                  <a
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseBasicsSix"
                    aria-expanded="false"
                    aria-controls="collapseBasicsSix"
                    onClick={()=>{showHideApplicantDropdown(11)}}
                  >
                   Can I request additional information from developers during the selection process?
                  </a>
                </div>
                <div
                  id="collapseBasicsSix"
                  className= {toggleApplicantDropdown==11 ?"accordion-collapse collapse show" :"accordion-collapse collapse"}
                  aria-labelledby="headingBasicsSix"
                  data-bs-parent="#accordionFAQBasics"
                >
                  <div className="accordion-body" style={{visibility:"visible"}}>
                    There may be times when you need to upgrade your license
                    from the original type you purchased and we have a solution
                    that ensures you can apply your original purchase cost to
                    the new license purchase.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="headingBasicsSix">
                  <a
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseBasicsSix"
                    aria-expanded="false"
                    aria-controls="collapseBasicsSix"
                    onClick={()=>{showHideApplicantDropdown(12)}}
                  >
                   What is the process for canceling a project once a developer is selected?
                  </a>
                </div>
                <div
                  id="collapseBasicsSix"
                  className= {toggleApplicantDropdown==12 ?"accordion-collapse collapse show" :"accordion-collapse collapse"}
                  aria-labelledby="headingBasicsSix"
                  data-bs-parent="#accordionFAQBasics"
                >
                  <div className="accordion-body"  style={{visibility:"visible"}} >
                    There may be times when you need to upgrade your license
                    from the original type you purchased and we have a solution
                    that ensures you can apply your original purchase cost to
                    the new license purchase.
                  </div>
                </div>
              </div>
              {/* End Accordion Item */}
            </div>
            {/* End Accordion */}
          </div>
          <div className="d-grid gap-3">
            <h2>Payments</h2>
            {/* Accordion */}
            <div
              className="accordion accordion-flush accordion-lg"
              id="accordionFAQSupport"
            >
              {/* Accordion Item */}
              <div className="accordion-item">
                <div className="accordion-header" id="headingSupportOne">
                  <a
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSupportOne"
                    aria-expanded="false"
                    aria-controls="collapseSupportOne"
                    onClick={()=>{showHideApplicantDropdown(13)}}
                  >
                    How does the payment process work for hiring developers?
                  </a>
                </div>
                <div
                  id="collapseSupportOne"
                  className= {toggleApplicantDropdown==13 ?"accordion-collapse collapse show" :"accordion-collapse collapse"}
                  aria-labelledby="headingSupportOne"
                  data-bs-parent="#accordionFAQSupport"
                >
                  <div className="accordion-body" style={{visibility:"visible"}}>
                    Technical support for each theme is given directly by the
                    creator of the theme. You'll be given a link to contact
                    their support in a couple places:
                    <ul>
                      <li>
                        Your confirmation email: Each theme in your confirmation
                        email will have both the download link for your theme,
                        and a "support" link which will connect you directly
                        with the sellers support system or email.
                      </li>
                      <li>
                        While logged in to your account go to Purchases &gt;
                        Click the Order # &gt; Get Support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <div className="accordion-header" id="headingSupportOne">
                  <a
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSupportOne"
                    aria-expanded="false"
                    aria-controls="collapseSupportOne"
                    onClick={()=>{showHideApplicantDropdown(14)}}
                  >
                    Are there any additional fees or charges for using the platform?
                  </a>
                </div>
                <div
                  id="collapseSupportOne"
                  className= {toggleApplicantDropdown==14 ?"accordion-collapse collapse show" :"accordion-collapse collapse"}
                  aria-labelledby="headingSupportOne"
                  data-bs-parent="#accordionFAQSupport"
                >
                  <div className="accordion-body" style={{visibility:"visible"}}>
                    Technical support for each theme is given directly by the
                    creator of the theme. You'll be given a link to contact
                    their support in a couple places:
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <div className="accordion-header" id="headingSupportOne">
                  <a
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSupportOne"
                    aria-expanded="false"
                    aria-controls="collapseSupportOne"
                    onClick={()=>{showHideApplicantDropdown(15)}}
                  >
                    Can I set project milestones and payments?
                  </a>
                </div>
                <div
                  id="collapseSupportOne"
                  className= {toggleApplicantDropdown==15 ?"accordion-collapse collapse show" :"accordion-collapse collapse"}
                  aria-labelledby="headingSupportOne"
                  data-bs-parent="#accordionFAQSupport"
                >
                  <div className="accordion-body" style={{visibility:"visible"}}>
                    Technical support for each theme is given directly by the
                    creator of the theme. You'll be given a link to contact
                    their support in a couple places:
                  </div>
                </div>
              </div>


              <div className="accordion-item">
                <div className="accordion-header" id="headingSupportOne">
                  <a
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSupportOne"
                    aria-expanded="false"
                    aria-controls="collapseSupportOne"
                    onClick={()=>{showHideApplicantDropdown(16)}}
                  >
                    What if I'm not satisfied with the developer's work? Do I still need to pay?
                  </a>
                </div>
                <div
                  id="collapseSupportOne"
                  className= {toggleApplicantDropdown==16 ?"accordion-collapse collapse show" :"accordion-collapse collapse"}
                  aria-labelledby="headingSupportOne"
                  data-bs-parent="#accordionFAQSupport"
                >
                  <div className="accordion-body" style={{visibility:"visible"}}>
                    Technical support for each theme is given directly by the
                    creator of the theme. You'll be given a link to contact
                    their support in a couple places:
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <div className="accordion-header" id="headingSupportOne">
                  <a
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSupportOne"
                    aria-expanded="false"
                    aria-controls="collapseSupportOne"
                    onClick={()=>{showHideApplicantDropdown(17)}}
                  >
                    Is there an escrow or payment protection system in place?
                  </a>
                </div>
                <div
                  id="collapseSupportOne"
                  className= {toggleApplicantDropdown==17 ?"accordion-collapse collapse show" :"accordion-collapse collapse"}
                  aria-labelledby="headingSupportOne"
                  data-bs-parent="#accordionFAQSupport"
                >
                  <div className="accordion-body" style={{visibility:"visible"}}>
                    Technical support for each theme is given directly by the
                    creator of the theme. You'll be given a link to contact
                    their support in a couple places:
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="headingSupportOne">
                  <a
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSupportOne"
                    aria-expanded="false"
                    aria-controls="collapseSupportOne"
                    onClick={()=>{showHideApplicantDropdown(18)}}
                  >
                    What happens if there are disputes related to payment?
                  </a>
                </div>
                <div
                  id="collapseSupportOne"
                  className= {toggleApplicantDropdown==18 ?"accordion-collapse collapse show" :"accordion-collapse collapse"}
                  aria-labelledby="headingSupportOne"
                  data-bs-parent="#accordionFAQSupport"
                >
                  <div className="accordion-body" style={{visibility:"visible"}}>
                    Technical support for each theme is given directly by the
                    creator of the theme. You'll be given a link to contact
                    their support in a couple places:
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="headingSupportOne">
                  <a
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSupportOne"
                    aria-expanded="false"
                    aria-controls="collapseSupportOne"
                    onClick={()=>{showHideApplicantDropdown(19)}}
                  >
                    Can I request invoices or receipts for payments made to developers?
                  </a>
                </div>
                <div
                  id="collapseSupportOne"
                  className= {toggleApplicantDropdown==19 ?"accordion-collapse collapse show" :"accordion-collapse collapse"}
                  aria-labelledby="headingSupportOne"
                  data-bs-parent="#accordionFAQSupport"
                >
                  <div className="accordion-body" style={{visibility:"visible"}}>
                    Technical support for each theme is given directly by the
                    creator of the theme. You'll be given a link to contact
                    their support in a couple places:
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="headingSupportOne">
                  <a
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSupportOne"
                    aria-expanded="false"
                    aria-controls="collapseSupportOne"
                    onClick={()=>{showHideApplicantDropdown(20)}}
                  >
                    How are payments structured for fixed-price and hourly projects?
                  </a>
                </div>
                <div
                  id="collapseSupportOne"
                  className= {toggleApplicantDropdown==20 ?"accordion-collapse collapse show" :"accordion-collapse collapse"}
                  aria-labelledby="headingSupportOne"
                  data-bs-parent="#accordionFAQSupport"
                >
                  <div className="accordion-body" style={{visibility:"visible"}}>
                    Technical support for each theme is given directly by the
                    creator of the theme. You'll be given a link to contact
                    their support in a couple places:
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="headingSupportOne">
                  <a
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSupportOne"
                    aria-expanded="false"
                    aria-controls="collapseSupportOne"
                    onClick={()=>{showHideApplicantDropdown(21)}}
                  >
                    What if I need to adjust the project budget during its duration?
                  </a>
                </div>
                <div
                  id="collapseSupportOne"
                  className= {toggleApplicantDropdown==21 ?"accordion-collapse collapse show" :"accordion-collapse collapse"}
                  aria-labelledby="headingSupportOne"
                  data-bs-parent="#accordionFAQSupport"
                >
                  <div className="accordion-body" style={{visibility:"visible"}}>
                    Technical support for each theme is given directly by the
                    creator of the theme. You'll be given a link to contact
                    their support in a couple places:
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="headingSupportOne">
                  <a
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSupportOne"
                    aria-expanded="false"
                    aria-controls="collapseSupportOne"
                    onClick={()=>{showHideApplicantDropdown(22)}}
                  >
                    Is there a way to ensure that the work delivered by developers meets my expectations
before making a final payment?
                  </a>
                </div>
                <div
                  id="collapseSupportOne"
                  className= {toggleApplicantDropdown==22 ?"accordion-collapse collapse show" :"accordion-collapse collapse"}
                  aria-labelledby="headingSupportOne"
                  data-bs-parent="#accordionFAQSupport"
                >
                  <div className="accordion-body" style={{visibility:"visible"}}>
                    Technical support for each theme is given directly by the
                    creator of the theme. You'll be given a link to contact
                    their support in a couple places:
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="headingSupportOne">
                  <a
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSupportOne"
                    aria-expanded="false"
                    aria-controls="collapseSupportOne"
                    onClick={()=>{showHideApplicantDropdown(23)}}
                  >
                    How do I report inappropriate behavior from clients?
                  </a>
                </div>
                <div
                  id="collapseSupportOne"
                  className= {toggleApplicantDropdown==23 ?"accordion-collapse collapse show" :"accordion-collapse collapse"}
                  aria-labelledby="headingSupportOne"
                  data-bs-parent="#accordionFAQSupport"
                >
                  <div className="accordion-body" style={{visibility:"visible"}}>
                    Technical support for each theme is given directly by the
                    creator of the theme. You'll be given a link to contact
                    their support in a couple places:
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <div className="accordion-header" id="headingSupportOne">
                  <a
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSupportOne"
                    aria-expanded="false"
                    aria-controls="collapseSupportOne"
                    onClick={()=>{showHideApplicantDropdown(24)}}
                  >
                    Is there a mechanism to track the status of my applications?
                  </a>
                </div>
                <div
                  id="collapseSupportOne"
                  className= {toggleApplicantDropdown==24 ?"accordion-collapse collapse show" :"accordion-collapse collapse"}
                  aria-labelledby="headingSupportOne"
                  data-bs-parent="#accordionFAQSupport"
                >
                  <div className="accordion-body" style={{visibility:"visible"}}>
                    Technical support for each theme is given directly by the
                    creator of the theme. You'll be given a link to contact
                    their support in a couple places:
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <div className="accordion-header" id="headingSupportOne">
                  <a
                    className="accordion-button collapsed"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSupportOne"
                    aria-expanded="false"
                    aria-controls="collapseSupportOne"
                    onClick={()=>{showHideApplicantDropdown(25)}}
                  >
                    What should I do if a project's scope or requirements change after I'm selected
                  </a>
                </div>
                <div
                  id="collapseSupportOne"
                  className= {toggleApplicantDropdown==25 ?"accordion-collapse collapse show" :"accordion-collapse collapse"}
                  aria-labelledby="headingSupportOne"
                  data-bs-parent="#accordionFAQSupport"
                >
                  <div className="accordion-body" style={{visibility:"visible"}}>
                    Technical support for each theme is given directly by the
                    creator of the theme. You'll be given a link to contact
                    their support in a couple places:
                  </div>
                </div>
              </div>
              {/* End Accordion Item */}

    


              {/* End Accordion Item */}
            </div>
            {/* End Accordion */}
          </div>
        </div>
      </div>
    </div>
    {/* End FAQ */}
  </main>
  {/* ========== END MAIN CONTENT ========== */}
  {/* ========== FOOTER ========== */}
  <Footer/>
  {/* ========== END FOOTER ========== */}
  {/* ========== SECONDARY CONTENTS ========== */}
  {/* Sign Up */}
  <div
    className="modal fade"
    id="signupModal"
    tabIndex={-1}
    role="dialog"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        {/* Header */}
        <div className="modal-close">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        {/* End Header */}
        {/* Body */}
        <div className="modal-body">
          {/* Log in */}
          <div
            id="signupModalFormLogin"
            style={{ display: "none", opacity: 0 }}
          >
            {/* Heading */}
            <div className="text-center mb-7">
              <h2>Log in</h2>
              <p>
                Don't have an account yet?
                <a
                  className="js-animation-link link"
                  href="javascript:;"
                  role="button"
                  data-hs-show-animation-options='{
                   "targetSelector": "#signupModalFormSignup",
                   "groupName": "idForm"
                 }'
                >
                  Sign up
                </a>
              </p>
            </div>
            {/* End Heading */}
            <div className="d-grid gap-2">
              <a className="btn btn-white btn-lg" href="#">
                <span className="d-flex justify-content-center align-items-center">
                  <img
                    className="avatar avatar-xss me-2"
                    src="./assets/svg/brands/google-icon.svg"
                    alt="Image Description"
                  />
                  Log in with Google
                </span>
              </a>
              <a
                className="js-animation-link btn btn-primary btn-lg"
                href="#"
                data-hs-show-animation-options='{
                 "targetSelector": "#signupModalFormLoginWithEmail",
                 "groupName": "idForm"
               }'
              >
                Log in with Email
              </a>
            </div>
          </div>
          {/* End Log in */}
          {/* Log in with Modal */}
          <div
            id="signupModalFormLoginWithEmail"
            style={{ display: "none", opacity: 0 }}
          >
            {/* Heading */}
            <div className="text-center mb-7">
              <h2>Log in</h2>
              <p>
                Don't have an account yet?
                <a
                  className="js-animation-link link"
                  href="javascript:;"
                  role="button"
                  data-hs-show-animation-options='{
                   "targetSelector": "#signupModalFormSignup",
                   "groupName": "idForm"
                 }'
                >
                  Sign up
                </a>
              </p>
            </div>
            {/* End Heading */}
            <form className="js-validate needs-validation" >
              {/* Form */}
              <div className="mb-3">
                <label
                  className="form-label"
                  htmlFor="signupModalFormLoginEmail"
                >
                  Your email
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  name="email"
                  id="signupModalFormLoginEmail"
                  placeholder="email@site.com"
                  aria-label="email@site.com"
                  required
                />
                <span className="invalid-feedback">
                  Please enter a valid email address.
                </span>
              </div>
              {/* End Form */}
              {/* Form */}
              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center">
                  <label
                    className="form-label"
                    htmlFor="signupModalFormLoginPassword"
                  >
                    Password
                  </label>
                  <a
                    className="js-animation-link form-label-link"
                    href="javascript:;"
                    data-hs-show-animation-options='{
                 "targetSelector": "#signupModalFormResetPassword",
                 "groupName": "idForm"
               }'
                  >
                    Forgot Password?
                  </a>
                </div>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  name="password"
                  id="signupModalFormLoginPassword"
                  placeholder="8+ characters required"
                  aria-label="8+ characters required"
                  required
                  minLength={8}
                />
                <span className="invalid-feedback">
                  Please enter a valid password.
                </span>
              </div>
              {/* End Form */}
              <div className="d-grid mb-3">
                <button
                  type="submit"
                  className="btn btn-primary form-control-lg"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
          {/* End Log in with Modal */}
          {/* Sign up */}
          <div id="signupModalFormSignup">
            {/* Heading */}
            <div className="text-center mb-7">
              <h2>Sign up</h2>
              <p>
                Already have an account?
                <a
                  className="js-animation-link link"
                  href="javascript:;"
                  role="button"
                  data-hs-show-animation-options='{
                   "targetSelector": "#signupModalFormLogin",
                   "groupName": "idForm"
                 }'
                >
                  Log in
                </a>
              </p>
            </div>
            {/* End Heading */}
            <div className="d-grid gap-3">
              <a className="btn btn-white btn-lg" href="#">
                <span className="d-flex justify-content-center align-items-center">
                  <img
                    className="avatar avatar-xss me-2"
                    src="./assets/svg/brands/google-icon.svg"
                    alt="Image Description"
                  />
                  Sign up with Google
                </span>
              </a>
              <a
                className="js-animation-link btn btn-primary btn-lg"
                href="#"
                data-hs-show-animation-options='{
                 "targetSelector": "#signupModalFormSignupWithEmail",
                 "groupName": "idForm"
               }'
              >
                Sign up with Email
              </a>
              <div className="text-center">
                <p className="small mb-0">
                  By continuing you agree to our{" "}
                  <a href="#">Terms and Conditions</a>
                </p>
              </div>
            </div>
          </div>
          {/* End Sign up */}
          {/* Sign up with Modal */}
          <div
            id="signupModalFormSignupWithEmail"
            style={{ display: "none", opacity: 0 }}
          >
            {/* Heading */}
            <div className="text-center mb-7">
              <h2>Sign up</h2>
              <p>
                Already have an account?
                <a
                  className="js-animation-link link"
                  href="javascript:;"
                  role="button"
                  data-hs-show-animation-options='{
                   "targetSelector": "#signupModalFormLogin",
                   "groupName": "idForm"
                 }'
                >
                  Log in
                </a>
              </p>
            </div>
            {/* End Heading */}
            <form className="js-validate need-validate" noValidate>
              {/* Form */}
              <div className="mb-3">
                <label
                  className="form-label"
                  htmlFor="signupModalFormSignupEmail"
                >
                  Your email
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  name="email"
                  id="signupModalFormSignupEmail"
                  placeholder="email@site.com"
                  aria-label="email@site.com"
                  required
                />
                <span className="invalid-feedback">
                  Please enter a valid email address.
                </span>
              </div>
              {/* End Form */}
              {/* Form */}
              <div className="mb-3">
                <label
                  className="form-label"
                  htmlFor="signupModalFormSignupPassword"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  name="password"
                  id="signupModalFormSignupPassword"
                  placeholder="8+ characters required"
                  aria-label="8+ characters required"
                  required
                />
                <span className="invalid-feedback">
                  Your password is invalid. Please try again.
                </span>
              </div>
              {/* End Form */}
              {/* Form */}
              <div className="mb-3" data-hs-validation-validate-class="">
                <label
                  className="form-label"
                  htmlFor="signupModalFormSignupConfirmPassword"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  name="confirmPassword"
                  id="signupModalFormSignupConfirmPassword"
                  placeholder="8+ characters required"
                  aria-label="8+ characters required"
                  required
                  data-hs-validation-equal-field="#signupModalFormSignupPassword"
                />
                <span className="invalid-feedback">
                  Password does not match the confirm password.
                </span>
              </div>
              {/* End Form */}
              <div className="d-grid mb-3">
                <button
                  type="submit"
                  className="btn btn-primary form-control-lg"
                >
                  Sign up
                </button>
              </div>
              <div className="text-center">
                <p className="small mb-0">
                  By continuing you agree to our{" "}
                  <a href="#">Terms and Conditions</a>
                </p>
              </div>
            </form>
          </div>
          {/* End Sign up with Modal */}
          {/* Reset Password */}
          <div
            id="signupModalFormResetPassword"
            style={{ display: "none", opacity: 0 }}
          >
            {/* Heading */}
            <div className="text-center mb-7">
              <h2>Forgot password?</h2>
              <p>
                Enter the email address you used when you joined and we'll send
                you instructions to reset your password.
              </p>
            </div>
            {/* En dHeading */}
            <form className="js-validate need-validate" noValidate>
              <div className="mb-3">
                {/* Form */}
                <div className="d-flex justify-content-between align-items-center">
                  <label
                    className="form-label"
                    htmlFor="signupModalFormResetPasswordEmail"
                    tabIndex={0}
                  >
                    Your email
                  </label>
                  <a
                    className="js-animation-link form-label-link"
                    href="javascript:;"
                    data-hs-show-animation-options='{
                   "targetSelector": "#signupModalFormLogin",
                   "groupName": "idForm"
                 }'
                  >
                    <i className="bi-chevron-left small" /> Back to Log in
                  </a>
                </div>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  name="email"
                  id="signupModalFormResetPasswordEmail"
                  tabIndex={1}
                  placeholder="Enter your email address"
                  aria-label="Enter your email address"
                  required
                />
                <span className="invalid-feedback">
                  Please enter a valid email address.
                </span>
                {/* End Form */}
              </div>
              <div className="d-grid">
                <button
                  type="submit"
                  className="btn btn-primary form-control-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          {/* End Reset Password */}
        </div>
        {/* End Body */}
        {/* Footer */}
        <div className="modal-footer d-block text-center py-sm-5">
          <small className="text-cap mb-4">
            Trusted by the world's best teams
          </small>
          <div className="w-85 mx-auto">
            <div className="row justify-content-between">
              <div className="col">
                <img
                  className="img-fluid"
                  src="./assets/svg/brands/gitlab-gray.svg"
                  alt="Logo"
                />
              </div>
              {/* End Col */}
              <div className="col">
                <img
                  className="img-fluid"
                  src="./assets/svg/brands/fitbit-gray.svg"
                  alt="Logo"
                />
              </div>
              {/* End Col */}
              <div className="col">
                <img
                  className="img-fluid"
                  src="./assets/svg/brands/flow-xo-gray.svg"
                  alt="Logo"
                />
              </div>
              {/* End Col */}
              <div className="col">
                <img
                  className="img-fluid"
                  src="./assets/svg/brands/layar-gray.svg"
                  alt="Logo"
                />
              </div>
              {/* End Col */}
            </div>
          </div>
          {/* End Row */}
        </div>
        {/* End Footer */}
      </div>
    </div>
  </div>
  {/* Go To */}
  <a
    className="js-go-to go-to position-fixed"
    href="javascript:;"
    style={{ visibility: "hidden" }}
    data-hs-go-to-options='{
 "offsetTop": 700,
 "position": {
   "init": {
     "right": "2rem"
   },
   "show": {
     "bottom": "2rem"
   },
   "hide": {
     "bottom": "-2rem"
   }
 }
     }'
  >
    <i className="bi-chevron-up" />
  </a>
  {/* ========== END SECONDARY CONTENTS ========== */}
  {/* JS Implementing Plugins */}
  {/* JS Front */}
  {/* JS Plugins Init. */}
</>

  )
}

export default page