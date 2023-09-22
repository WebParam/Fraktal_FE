"use client"
import Link from 'next/link';
import './Register.scss';
import Image from 'next/image';
import logo from '../../../assets/img/logo.png';
import loginImage from '../../../assets/additional/loginImage.jpg'

function Register() {

  return (
   <section className="register">
      <div className="top">
        <Image src={logo} alt='logo'/>
        <h3><Link href='/'><i className="bi bi-chevron-left"></i>Go to main</Link></h3>
      </div>

      <div className="registerMain">
        <div className="register-image">
          <h2>MailChimp</h2>
          <p className='desc'>“ It has many landing page variations to choose from, which one is always a big advantage. ”</p>
          <Image src={loginImage} alt="" />
          <h3>Lida Reidy</h3>
          <p>Project Manager | Mailchimp</p>
        </div>

        <div className="registerForm">
          <h2>FRAKTIONAL</h2>
          <p>Fill out the form to get started.</p>

          <form action="" method="get">
            <div>
              <label htmlFor="email">Your Email</label>
              <input type="email" name="email" placeholder='email@site.com'/>
            </div>

            <div>
              <label htmlFor="password">
                password
              </label>
              <input type="password" name="password" id="password" placeholder='8+ characters required' />
            </div>

            <div>
              <label htmlFor="password">
                Confirm password
              </label>
              <input type="password" name="password" id="password" placeholder='8+ characters required' />
            </div>

            <button type="submit">Log In</button>
          </form>

          <p>Already have an account? <span className='cta'><Link href="/auth/login">Sign in here</Link></span></p>
        </div>
      </div>
   </section>
  )
}

export default Register;
