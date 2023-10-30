"use client"
import { useState,useEffect } from 'react';
import Link from 'next/link';


export default function Nav() {
  const [activeNav, setActiveNav] = useState<number>(0);
  useEffect(() => {
  
  //check url and setActive

  const currentUrl = window.location.href;
    debugger;
      if(currentUrl.includes("post-job")){
        setActive(3);
      }

      if(currentUrl.includes("pricing")){
        setActive(2);
      }
  }, []);

  
  const setActive = (activeNumber:number) => {
    setActiveNav(activeNumber);
  }



  
  return (
    <>

        
<div className="navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link href="/">
                        Home
                      </Link>
                    </li>
                    {/* Dropdown */}
                    <li className="hs-has-sub-menu nav-item">
                      <a
                        id="listingsDropdown"
                        className={activeNav ==1? "hs-mega-menu-invoker nav-link dropdown-toggle active ": "hs-mega-menu-invoker nav-link dropdown-toggle "}
                       
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Listings
                      </a>
                      <div
                        className="hs-sub-menu dropdown-menu"
                        aria-labelledby="listingsDropdown"
                        style={{ minWidth: "14rem" }}
                      >
                        <a className="dropdown-item " href="../demo-jobs/job-list.html">
                          Listing
                        </a>
                        <a className="dropdown-item " href="../demo-jobs/job-grid.html">
                          Listing (Grid)
                        </a>
                      </div>
                    </li>
                    {/* End Dropdown */}
                    {/* Dropdown */}
                    <li className="hs-has-sub-menu nav-item">
                      <a
                        id="pagesDropdown"
                        className={activeNav ==2? "hs-mega-menu-invoker nav-link dropdown-toggle active ": "hs-mega-menu-invoker nav-link dropdown-toggle "}
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Pages
                      </a>
                      <div
                        className="hs-sub-menu dropdown-menu"
                        aria-labelledby="listingsDropdown"
                        style={{ minWidth: "14rem" }}
                      >
                        <a
                          className="dropdown-item "
                          href="../demo-jobs/job-overview.html"
                        >
                          Job Overview
                        </a>
                        <a
                          className="dropdown-item "
                          href="../demo-jobs/apply-for-job.html"
                        >
                          Apply for Job
                        </a>
                        <a className="dropdown-item " href="../demo-jobs/employee.html">
                          Employee (Applicant)
                        </a>
                        <a className="dropdown-item " href="../demo-jobs/employer.html">
                          Employer (Company)
                        </a>
                      </div>
                    </li>
                    {/* End Dropdown */}
                    <li className="nav-item">
                      <a className={activeNav ==3? "nav-link active ": "nav-link"} 
                       href="/post-job">
                       Post a job
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="btn btn-primary btn-transition"
                        href="../demo-jobs/post-job.html"
                      >
                        Post a job
                      </a>
                    </li>
                  </ul>
                </div>
    </>
  )
}

