import React from 'react'

const Header = () => {
  return (
   <div>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
  <div className="navbar-absolute-top-scroller">
    <ul className="navbar-nav">
      {/* Landings */}
      <li className="hs-has-mega-menu nav-item">
        <a
          id="landingsMegaMenu"
          className="hs-mega-menu-invoker nav-link dropdown-toggle active"
          aria-current="page"
          href="#"
          role="button"
          aria-expanded="false"
        >
          Landings
        </a>
        {/* Mega Menu */}
        <div
          className="hs-mega-menu dropdown-menu w-100"
          aria-labelledby="landingsMegaMenu"
          style={{ minWidth: "30rem" }}
        >
          <div className="row">
            <div className="col-lg-6 d-none d-lg-block">
              {/* Banner Image */}
              <div
                className="navbar-dropdown-menu-banner"
                style={{
                  backgroundImage: "url(./assets/svg/components/shape-3.svg)"
                }}
              >
                <div className="navbar-dropdown-menu-banner-content">
                  <div className="mb-4">
                    <span className="h2 d-block">Branding Works</span>
                    <p>
                      Experience a level of our quality in both design &amp;
                      customization works.
                    </p>
                  </div>
                  <a className="btn btn-primary btn-transition" href="#">
                    Learn more <i className="bi-chevron-right small" />
                  </a>
                </div>
              </div>
              {/* End Banner Image */}
            </div>
            {/* End Col */}
            <div className="col-lg-6">
              <div className="navbar-dropdown-menu-inner">
                <div className="row">
                  <div className="col-sm mb-3 mb-sm-0">
                    <span className="dropdown-header">Classic</span>
                    <a
                      className="dropdown-item "
                      href="./landing-classic-corporate.html"
                    >
                      Corporate
                    </a>
                    <a
                      className="dropdown-item "
                      href="./landing-classic-analytics.html"
                    >
                      Analytics{" "}
                      <span className="badge bg-primary rounded-pill ms-1">
                        Hot
                      </span>
                    </a>
                    <a
                      className="dropdown-item "
                      href="./landing-classic-studio.html"
                    >
                      Studio
                    </a>
                    <a
                      className="dropdown-item "
                      href="./landing-classic-marketing.html"
                    >
                      Marketing
                    </a>
                    <a
                      className="dropdown-item "
                      href="./landing-classic-advertisement.html"
                    >
                      Advertisement
                    </a>
                    <a
                      className="dropdown-item "
                      href="./landing-classic-consulting.html"
                    >
                      Consulting
                    </a>
                    <a
                      className="dropdown-item "
                      href="./landing-classic-portfolio.html"
                    >
                      Portfolio
                    </a>
                    <a
                      className="dropdown-item "
                      href="./landing-classic-software.html"
                    >
                      Software
                    </a>
                    <a
                      className="dropdown-item "
                      href="./landing-classic-business.html"
                    >
                      Business
                    </a>
                  </div>
                  {/* End Col */}
                  <div className="col-sm">
                    <div className="mb-3">
                      <span className="dropdown-header">App</span>
                      <a
                        className="dropdown-item "
                        href="./landing-app-ui-kit.html"
                      >
                        UI Kit
                      </a>
                      <a
                        className="dropdown-item "
                        href="./landing-app-saas.html"
                      >
                        SaaS
                      </a>
                      <a
                        className="dropdown-item "
                        href="./landing-app-workflow.html"
                      >
                        Workflow
                      </a>
                      <a
                        className="dropdown-item "
                        href="./landing-app-payment.html"
                      >
                        Payment
                      </a>
                      <a
                        className="dropdown-item "
                        href="./landing-app-tool.html"
                      >
                        Tool
                      </a>
                    </div>
                    <span className="dropdown-header">Onepage</span>
                    <a
                      className="dropdown-item "
                      href="./landing-onepage-corporate.html"
                    >
                      Corporate
                    </a>
                    <a
                      className="dropdown-item "
                      href="./landing-onepage-saas.html"
                    >
                      SaaS{" "}
                      <span className="badge bg-primary rounded-pill ms-1">
                        Hot
                      </span>
                    </a>
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
        {/* End Mega Menu */}
      </li>
      {/* End Landings */}
      {/* Company */}
      <li className="hs-has-sub-menu nav-item">
        <a
          id="companyMegaMenu"
          className="hs-mega-menu-invoker nav-link dropdown-toggle "
          href="#"
          role="button"
          aria-expanded="false"
        >
          Company
        </a>
        {/* Mega Menu */}
        <div
          className="hs-sub-menu dropdown-menu"
          aria-labelledby="companyMegaMenu"
          style={{ minWidth: "14rem" }}
        >
          <a className="dropdown-item " href="./page-about.html">
            About
          </a>
          <a className="dropdown-item " href="./page-services.html">
            Services
          </a>
          <a className="dropdown-item " href="./page-customer-stories.html">
            Customer Stories
          </a>
          <a className="dropdown-item " href="./page-customer-story.html">
            Customer Story
          </a>
          <a className="dropdown-item " href="./page-careers.html">
            Careers
          </a>
          <a className="dropdown-item " href="./page-careers-overview.html">
            Careers Overview
          </a>
          <a className="dropdown-item " href="./page-hire-us.html">
            Hire Us
          </a>
          <a className="dropdown-item " href="./page-pricing.html">
            Pricing
          </a>
          <a className="dropdown-item " href="./page-contacts-agency.html">
            Contacts: Agency
          </a>
          <a className="dropdown-item " href="./page-contacts-startup.html">
            Contacts: Startup
          </a>
        </div>
        {/* End Mega Menu */}
      </li>
      {/* End Company */}
      {/* Account */}
      <li className="hs-has-sub-menu nav-item">
        <a
          id="accountMegaMenu"
          className="hs-mega-menu-invoker nav-link dropdown-toggle "
          href="#"
          role="button"
          aria-expanded="false"
        >
          Account
        </a>
        {/* Mega Menu */}
        <div
          className="hs-sub-menu dropdown-menu"
          aria-labelledby="accountMegaMenu"
          style={{ minWidth: "14rem" }}
        >
          {/* Authentication */}
          <div className="hs-has-sub-menu nav-item">
            <a
              id="authenticationMegaMenu"
              className="hs-mega-menu-invoker dropdown-item dropdown-toggle "
              href="#"
              role="button"
              aria-expanded="false"
            >
              Authentication
            </a>
            <div
              className="hs-sub-menu dropdown-menu"
              aria-labelledby="authenticationMegaMenu"
              style={{ minWidth: "14rem" }}
            >
              <a
                className="dropdown-item"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#signupModal"
              >
                Signup Modal
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item " href="./page-login.html">
                Login
              </a>
              <a className="dropdown-item " href="./page-signup.html">
                Signup
              </a>
              <a className="dropdown-item " href="./page-reset-password.html">
                Reset Password
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item " href="./page-login-simple.html">
                Login Simple
              </a>
              <a className="dropdown-item " href="./page-signup-simple.html">
                Signup Simple
              </a>
              <a
                className="dropdown-item "
                href="./page-reset-password-simple.html"
              >
                Reset Password Simple
              </a>
            </div>
          </div>
          {/* End Authentication */}
          <a className="dropdown-item " href="./account-overview.html">
            Personal Info
          </a>
          <a className="dropdown-item " href="./account-security.html">
            Security
          </a>
          <a className="dropdown-item " href="./account-notifications.html">
            Notifications
          </a>
          <a className="dropdown-item " href="./account-preferences.html">
            Preferences
          </a>
          <a className="dropdown-item " href="./account-orders.html">
            Orders
          </a>
          <a className="dropdown-item " href="./account-wishlist.html">
            Wishlist
          </a>
          <a className="dropdown-item " href="./account-payments.html">
            Payments
          </a>
          <a className="dropdown-item " href="./account-address.html">
            Address
          </a>
          <a className="dropdown-item " href="./account-teams.html">
            Teams
          </a>
        </div>
        {/* End Mega Menu */}
      </li>
      {/* End Account */}
      {/* Pages */}
      <li className="hs-has-sub-menu nav-item">
        <a
          id="pagesMegaMenu"
          className="hs-mega-menu-invoker nav-link dropdown-toggle "
          href="#"
          role="button"
          aria-expanded="false"
        >
          Pages
        </a>
        {/* Mega Menu */}
        <div
          className="hs-sub-menu dropdown-menu"
          aria-labelledby="pagesMegaMenu"
          style={{ minWidth: "14rem" }}
        >
          <a className="dropdown-item " href="./page-faq.html">
            FAQ
          </a>
          <a className="dropdown-item " href="./page-terms.html">
            Terms &amp; Conditions
          </a>
          <a className="dropdown-item " href="./page-privacy.html">
            Privacy &amp; Policy
          </a>
          <a className="dropdown-item " href="./page-coming-soon.html">
            Coming Soon
          </a>
          <a className="dropdown-item " href="./page-coming-soon-simple.html">
            Coming Soon: Simple
          </a>
          <a className="dropdown-item " href="./page-maintenance-mode.html">
            Maintenance Mode
          </a>
          <a className="dropdown-item " href="./page-status.html">
            Status
          </a>
          <a className="dropdown-item " href="./page-invoice.html">
            Invoice
          </a>
          <a className="dropdown-item " href="./page-error-404.html">
            Error 404
          </a>
        </div>
        {/* End Mega Menu */}
      </li>
      {/* End Pages */}
      {/* Blog */}
      <li className="hs-has-sub-menu nav-item">
        <a
          id="blogMegaMenu"
          className="hs-mega-menu-invoker nav-link dropdown-toggle "
          href="#"
          role="button"
          aria-expanded="false"
        >
          Blog
        </a>
        {/* Mega Menu */}
        <div
          className="hs-sub-menu dropdown-menu"
          aria-labelledby="blogMegaMenu"
          style={{ minWidth: "14rem" }}
        >
          <a className="dropdown-item " href="./blog-journal.html">
            Journal
          </a>
          <a className="dropdown-item " href="./blog-metro.html">
            Metro
          </a>
          <a className="dropdown-item " href="./blog-newsroom.html">
            Newsroom
          </a>
          <div className="dropdown-divider" />
          <a className="dropdown-item " href="./blog-article.html">
            Article
          </a>
          <a className="dropdown-item " href="./blog-author-profile.html">
            Author Profile
          </a>
        </div>
        {/* End Mega Menu */}
      </li>
      {/* End Blog */}
      {/* Portfolio */}
      <li className="hs-has-sub-menu nav-item">
        <a
          id="portfolioMegaMenu"
          className="hs-mega-menu-invoker nav-link dropdown-toggle "
          href="#"
          role="button"
          aria-expanded="false"
        >
          Portfolio
        </a>
        {/* Mega Menu */}
        <div
          className="hs-sub-menu dropdown-menu"
          aria-labelledby="portfolioMegaMenu"
          style={{ minWidth: "14rem" }}
        >
          <a className="dropdown-item " href="./portfolio-grid.html">
            Grid
          </a>
          <a className="dropdown-item " href="./portfolio-product-article.html">
            Product Article
          </a>
          <a
            className="dropdown-item "
            href="./portfolio-case-studies-branding.html"
          >
            Case Studies: Branding
          </a>
          <a
            className="dropdown-item "
            href="./portfolio-case-studies-product.html"
          >
            Case Studies: Product
          </a>
        </div>
        {/* End Mega Menu */}
      </li>
      {/* End Portfolio */}
      {/* Button */}
      <li className="nav-item">
        <a
          className="btn btn-primary btn-transition"
          href="https://themes.getbootstrap.com/product/front-multipurpose-responsive-template/"
          target="_blank"
        >
          Buy now
        </a>
      </li>
      {/* End Button */}
    </ul>
  </div>
</div>

   </div>
  )
}

export default Header