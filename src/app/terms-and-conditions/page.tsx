'use client'

import React, { useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer';
import MobileMenu from '../components/MobileMenu/MobileMenu';
import '../terms-and-conditions/style.css'


const page = () => {

    const [menuToggler, setMenuToggler] = useState<boolean>(false);
  return (

    <div> 
    <Header
            menuTogglerFunction={setMenuToggler}
            menuTogglerValue={menuToggler}
        />
       <MobileMenu menuToggler={menuToggler} />

      
            <div className='tnc-container'  style={{ }}>
                <div className="mb-5 mb-md-10" style={{textAlign:"center"}}>
                        <h1 className="display-4" style={{color: '#4B4C4E'}}>Terms and Conditions</h1>
                        <p className="lead">Keep up to date with the latest news and developments.</p>
                </div>

                <div style={{  textAlign: 'justify'}}>
                    <h2>1. Acceptance of Terms</h2>
                    <p>By accessing and using the services provided by <span style={{color: '#FD2DC3 '}}>Fraktional.dev</span>, 
                        you agree to be bound by the terms and conditions outlined herein. 
                        If you do not agree with any of these terms, you are prohibited 
                        from using or accessing our services.
                    </p>
                </div>
                <div style={{textAlign: 'justify', paddingTop: '3%'}}>
                    <h2>2. Services</h2>
                    <p>By accessing and using the services provided by <span style={{color: '#FD2DC3 '}}>Fraktional.dev</span>, 
                        you agree to be bound by the terms and conditions outlined herein. 
                        If you do not agree with any of these terms, you are prohibited 
                        from using or accessing our services. By accessing and using the services provided by <span style={{color: '#FD2DC3 '}}>Fraktional.dev</span>, 
                        you agree to be bound by the terms and conditions outlined herein. 
                        If you do not agree with any of these terms, you are prohibited 
                        from using or accessing our services. By accessing and using the services provided by <span style={{color: '#FD2DC3 '}}>Fraktional.dev</span>, 
                        you agree to be bound by the terms and conditions outlined herein. 
                        If you do not agree with any of these terms, you are prohibited 
                        from using or accessing our services.
                    </p>
                </div>
                <div style={{ textAlign: 'justify', paddingTop: '3%'}}>
                    <h2>3. Payment and Invoicing</h2>
                    <p>By accessing and using the services provided by <span style={{color: '#FD2DC3 '}}>Fraktional.dev</span>, 
                        you agree to be bound by the terms and conditions outlined herein. 
                        If you do not agree with any of these terms, you are prohibited 
                        from using or accessing our services. By accessing and using the services provided by <span style={{color: '#FD2DC3 '}}>Fraktional.dev</span>, 
                        you agree to be bound by the terms and conditions outlined herein. 
                        If you do not agree with any of these terms, you are prohibited 
                        from using or accessing our services.
                        By accessing and using the services provided by <span style={{color: '#FD2DC3 '}}>Fraktional.dev</span>, 
                        you agree to be bound by the terms and conditions outlined herein. 
                        If you do not agree with any of these terms, you are prohibited 
                        from using or accessing our services.
                    </p>
                </div>
                <div style={{ textAlign: 'justify', paddingTop: '3%'}}>
                    <h2>4. Intellectual Property</h2>
                    <p>By accessing and using the services provided by <span style={{color: '#FD2DC3 '}}>Fraktional.dev</span>, 
                        you agree to be bound by the terms and conditions outlined herein. 
                        If you do not agree with any of these terms, you are prohibited 
                        from using or accessing our services. By accessing and using the services provided by <span style={{color: '#FD2DC3 '}}>Fraktional.dev</span>, 
                        you agree to be bound by the terms and conditions outlined herein. 
                        If you do not agree with any of these terms, you are prohibited 
                        from using or accessing our services. By accessing and using the services provided by <span style={{color: '#FD2DC3 '}}>Fraktional.dev</span>, 
                        you agree to be bound by the terms and conditions outlined herein. 
                        If you do not agree with any of these terms, you are prohibited 
                        from using or accessing our services.
                    </p>
                </div>
                <div style={{ textAlign: 'justify', paddingTop: '3%'}}>
                    <h2>5. Confidentiality</h2>
                    <p>By accessing and using the services provided by <span style={{color: '#FD2DC3 '}}>Fraktional.dev</span>, 
                        you agree to be bound by the terms and conditions outlined herein. 
                        If you do not agree with any of these terms, you are prohibited 
                        from using or accessing our services. By accessing and using the services provided by <span style={{color: '#FD2DC3 '}}>Fraktional.dev</span>, 
                        you agree to be bound by the terms and conditions outlined herein. 
                        If you do not agree with any of these terms, you are prohibited 
                        from using or accessing our services. By accessing and using the services provided by <span style={{color: '#FD2DC3 '}}>Fraktional.dev</span>, 
                        you agree to be bound by the terms and conditions outlined herein. 
                        If you do not agree with any of these terms, you are prohibited 
                        from using or accessing our services.
                    </p>
                </div>
                <div style={{ textAlign: 'justify', paddingTop: '3%'}}>
                    <h2>6.  Project Changes</h2>
                    <p>Any changes to the project scope, timeline, or specifications must be 
                        agreed upon in writing by both parties. 
                        Additional charges may apply for changes requested by the client.Any changes to the project scope, timeline, or specifications must be 
                        agreed upon in writing by both parties. 
                        Additional charges may apply for changes requested by the client.Any changes to the project scope, timeline, or specifications must be 
                        agreed upon in writing by both parties. 
                        Additional charges may apply for changes requested by the client.Any changes to the project scope, timeline, or specifications must be 
                        agreed upon in writing by both parties. 
                        Additional charges may apply for changes requested by the client.
                    </p>
                </div>
            </div>

            <Footer/>
    
    </div>
    
  )
}

export default page