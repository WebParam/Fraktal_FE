"use client"
import Link from 'next/link';
import './reset.scss';
import Image from 'next/image';
import logo from '../../../assets/img/logo.png';
import loginImage from '../../../assets/additional/loginImage.jpg'

function Reset() {

  return (
   <section className="reset">
      <div className="top">
        <Image src={logo} alt='logo'/>
        <Link href='/'><h3><i className="bi bi-chevron-left"></i>Go to main</h3></Link>
      </div>

      <div className="resetMain">
        <div className="reset-image">
          <h2>MailChimp</h2>
          <p className='desc'>“ It has many landing page variations to choose from, which one is always a big advantage. ”</p>
          <Image src={loginImage} alt="" />
          <h3>Lida Reidy</h3>
          <p>Project Manager | Mailchimp</p>
        </div>

        <div className="resetForm">
          <h2>Forgot password?</h2>
          <p>Enter your email address below and we'll get you back on track.</p>

          <form action="" method="get">
            <div>
              <label htmlFor="email">
                <span>Your email</span>
                <span className='cta'><Link href='/auth/login'><i className="bi bi-chevron-left"></i>Back to Log in</Link></span>
              </label>
              <input type="email" name="email" id="email" placeholder='name@site.com' />
            </div>

            <button type="submit">Submit</button>
          </form>

          <p>Don't have an account yet? <span className='cta'><Link href="/auth/register">Sign up here</Link></span></p>
        </div>
      </div>
   </section>
  )
}

export default Reset;
