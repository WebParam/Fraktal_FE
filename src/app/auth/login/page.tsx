"use client"
import Link from 'next/link';
import './Signin.scss';
import Image from 'next/image';
import logo from '../../../assets/img/logo.png';
import loginImage from '../../../assets/additional/loginImage.jpg'

function SignIn() {

  return (
   <section className="signin">
      <div className="top">
      <Image src={logo} alt='logo'/>
        <Link href='/'><i className="bi bi-chevron-left"></i>Go to main</Link>
      </div>

      <div className="signinMain">
        <div className="login-image">
          <h2>MailChimp</h2>
          <p className='desc'>“ It has many landing page variations to choose from, which one is always a big advantage. ”</p>
          <Image src={loginImage} alt="" />
          <h3>Lida Reidy</h3>
          <p>Project Manager | Mailchimp</p>
        </div>

        <div className="signinForm">
          <h2>Welcome back</h2>
          <p>Login to manage your account.</p>

          <form action="" method="get">
            <div>
              <label htmlFor="email">Your Email</label>
              <input type="email" name="email" placeholder='email@site.com'/>
            </div>

            <div>
              <label htmlFor="password">
                <span>password</span>
                <span className='cta'><Link href='/auth/reset'>Forgot Password</Link></span>
              </label>
              <input type="password" name="password" id="password" placeholder='8+ characters required' />
            </div>

            <button type="submit">Log In</button>
          </form>

          <p>Don't have an account yet? <span className='cta'><Link href="/auth/register">Sign up here</Link></span></p>
        </div>
      </div>
   </section>
  )
}

export default SignIn;
