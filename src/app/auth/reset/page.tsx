'use client'
import { Loader } from 'rsuite';
import "rsuite/Loader/styles/index.css";
import './otpStyle.scss';
import './newpassword.scss';
import './reset.scss';
import { useRouter } from 'next/navigation'; 
import Link from 'next/link';
import { useState, useRef, ChangeEvent, FormEvent,useEffect } from 'react';
import Image from 'next/image';
import logo from '../../../assets/additional/logo.png';
import loginImage from '../../../assets/additional/loginImage.jpg';
import axios from 'axios';
import { resetPassword, sendOTP } from '@/app/endpoints/api';
import { IUserResetPassword, IUserSendOTP } from '@/app/interfaces/user';
import './incorrectOtp.css'

function OTP() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [confirmedpassword, setConfirmedPassword] = useState('');
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [weakPasswordError, setWeakPasswordError] = useState<boolean>(false);
  const [EmptypasswordError, setEmptypasswordError] = useState<boolean>(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [changePasswordbuttonClicked, setChangePasswordbuttonClicked] = useState(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [regEmailError, setRegEmailError] = useState<boolean>(false);

  const [emailsent, setEmailSent] = useState(false);
  const [otpsent, setOtpSent] = useState(false);
  const[otp, setOtp] = useState<Number>(0);

  const [userDetails, setUserDetails] = useState<any>();

  const router = useRouter();

  const [otpValues, setOtpValues] = useState(['', '', '', '', '']);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
  
    if (/^[0-9]$/.test(value)) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);
  
      if (index <= 4) {
        inputRefs[index + 1]?.current && inputRefs[index + 1].current?.focus();
        const otp = Number(newOtpValues.join(''));
        setOtp(otp);
      }
  
      // Remove the "incorrect" class when a valid input is entered
      e.target.classList.remove('incorrect');
     
    
    } else {
      // Clear the input if the value is not a number
      const newOtpValues = [...otpValues];
      newOtpValues[index] = '';
      setOtpValues(newOtpValues);
  
      // Optionally, you can move focus back to the previous input
      if (index > 0 && inputRefs[index - 1].current) {
        inputRefs[index - 1].current?.focus();
      }
  
      // Add the "incorrect" class to trigger the animation
      e.target.classList.add('incorrect');
    }
  };
  
  //Reseting the password 
  const handleSubmitNewPass = async (e: any) => {
    e.preventDefault();
    setChangePasswordbuttonClicked(true);

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

    if(!password){
      setEmptypasswordError(true)
      setChangePasswordbuttonClicked(true)
      return;
    }

    
    //TODO: BRAD: check this function below, its preventing resetting a password. 
    //The error message should read: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character."


    // if(!passwordRegex.test(password)){
    //   setEmptypasswordError(true)
    //   setWeakPasswordError(true)
    //   return
    //  }

     if(password != confirmedpassword){
      setEmptypasswordError(true)
      setPasswordError(true)
      return;
     }

     try {
      const changePassword = await resetPassword({email:email, password:password, otp:otp} as IUserResetPassword); // Rename the constant
      if(changePassword){
        setChangePasswordbuttonClicked(false);
              console.log('reset password successful');
        router.push('/auth/login');
            
      }else{
          console.error('reset password failed');
      }
    } catch (error) {
        console.error('Error:', error);
    }

  };

  //confirming OTP
  // const handleFormSubmitOTP = (e: FormEvent) => {
  //   e.preventDefault();
  
  //   const otp = Number(otpValues.join(''));
  //   if(userDetails.otp == otp){
  //     setOtpSent(true);
  //     setEmailSent(false);
  //     setOtp(otp);
  //     console.log('OTP:', otp);
  //   }else{
  //     alert("invalid otp");
  //   }
  
  // };
  
  useEffect(() => {
 if(email){
  if (userDetails) {
    setEmailSent(true);

  }else{
    setEmailError(false);
    setRegEmailError(true)
  }
 }
  }, [userDetails]);

  const handleSubmitReset = async (e: any) => {
    e.preventDefault();
    setButtonClicked(true);
    if (!email) {
      setEmailError(true);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setRegEmailError(false)
      setEmailError(true);
      return;
    }


    try {
      const onSubmitOTP = await sendOTP( { email: email } as IUserSendOTP); // Rename the constant
      if(onSubmitOTP !== 400){
        setEmailError(false);

        setRegEmailError(false);
        setUserDetails(onSubmitOTP);
      }else if (onSubmitOTP == 400) {
        setEmailError(false);
        setButtonClicked(false);
        setRegEmailError(true);
        console.error('OTP failed');
      }
    } catch (error) {
   
        console.log('Error:', error);
    }


  };
    const inputEmailStyle = {
      ...(emailError && {
        outlineStyle: "solid",
       color: "tomato",
        borderWidth: "1px",
      }),
    };
    const inputPasswordStyle = {
      ...(EmptypasswordError && {
        outlineStyle: "solid",
       color: "tomato",
        borderWidth: "1px",
      }),
    };
  if (emailsent) {
    return (

      <>  
    
    
      <section className="newpassword">
      <div className="top">
      <Image src={logo} alt='logo'/>
        {/* <Link href='/'><i className="bi bi-chevron-left"></i>Go to main</Link> */}
      </div>

    
      <div className="newpasswordMain">
        <div className="newpassword-image">
          <h2>Param Solutions</h2>
          <p className='desc'>“ Great service for rectruitment companies placing candidates onto contracts. Really a time-saver ”</p>
          <Image src={loginImage} alt="" />
          <h3>Nobuhle</h3>
          <p>Project Manager | Param Solutions </p>
        </div>

        <div className="newpasswordForm">
          

            <div className="otpForm" style={{textAlign:"center"}}>
              <h2>Enter the OTP</h2>
              <p>Enter the OTP sent to the email you provided</p>

              <form >
                <div>
                
                  <div className='otpInputs' style={{flexDirection:"row"}}>
                  {inputRefs.map((ref, index) => (
                    <input
                      key={index}
                      type="text"
                      id={`input${index + 1}`}
                      maxLength={1}
                      ref={ref}
                      style={{width:"20%", float:"left"}}
                      value={otpValues[index]}
                      onChange={(e) => handleInputChange(e, index)}
                      className={`otpInput ${otpValues[index] !== '' ? 'incorrect' : ''}`}
                      required
                    />
                  ))}
                </div>

                </div>
                {/* <button>Submit</button> */}
              </form>

            </div>
          {/* </div> */}
          
          <h2>Change your password</h2>
          <p>it will be used to access your account.</p>

          {/* <div className="otpMain"> */}
          <form onSubmit={handleSubmitNewPass}>
            <div>
              <label htmlFor="password">New Password{passwordError && <span style={{marginRight: "12em", color: "tomato", fontWeight: 600, fontSize: "small"}}>* passwords do not match</span>}
              {weakPasswordError && <span style={{color: "tomato", fontWeight: 600, fontSize: "small"}}>* weak password</span>}</label>
              <input style={inputPasswordStyle}
                type="password"
                name="password"
                placeholder="8+ characters required"
                value={password}
                onChange={(e: any) => {
                  setEmptypasswordError(false)
                    setPassword(e.target.value);
                  }}
              />
            </div>

            <div>
              <label htmlFor="confirmedpassword">Confirm New Password</label>
              <input    style={inputPasswordStyle}
                type="password"
                name="confirmedpassword"
                placeholder="8+ characters required"
                value={confirmedpassword}
                onChange={(e: any) => {
                  setEmptypasswordError(false)
                    setConfirmedPassword(e.target.value);
                  }}
              />
            </div>
            <button type="submit" style={{display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
              {!changePasswordbuttonClicked ? 'Change Password' : <Loader speed='fast' />}
              </button>
          </form>

          <label>
                    <span></span>
                    <span className='cta'><Link href='/auth/reset'><i className="bi bi-chevron-left"></i>Back to reset password</Link></span>
                  </label>
        </div>
      </div>
      </section>
      </>
    
    )
  }else {
    return (  
        <section className="reset">
        <div className="top">
          <Image src={logo} alt='logo' onClick={() => router.push('/')} />
          {/* <button onClick={() => router.push('/')}><i className="bi bi-chevron-left"></i>Go to main</button> */}
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

            <form>
              <div>
                <label htmlFor="email">
                  <span>Your email {emailError &&  <span style = {{color : "tomato", fontWeight: 600, fontSize: "small"  }}>* Invalid email address</span>}
                  {regEmailError &&  <span style = {{color : "tomato", fontWeight: 600, fontSize: "small"  }}>* Email address not registered</span>}
                  </span>
                  <span className='cta'><Link href='/auth/login'><i className="bi bi-chevron-left"></i>Back to Log in</Link></span>
                </label>
                <input
                  style={inputEmailStyle}
                  type="email"
                  name="email"
                  placeholder="email@site.com"
                  value={email}
                  onChange={(e: any) => {
                    setEmail(e.target.value);
                    setEmailError(false);

          setRegEmailError(false);
                  }} 
                />
              </div>
              <button onClick={handleSubmitReset} style={{display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
              {!buttonClicked ? 'Submit' : <Loader speed='fast' />}
              </button>
              
            </form>

            <p>Don't have an account yet? <span className='cta'><Link href="/auth/register">Sign up here</Link></span></p>
          </div>
        </div>
        </section>
    )
  }
}

export default OTP;
