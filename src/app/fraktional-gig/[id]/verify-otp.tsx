'use client'
import '../../auth/company-register/DevOverview.scss';
import '../../auth/company-register/otpStyle.scss';
import './newpassword.scss';
import './reset.scss';
import Link from "next/link";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { IDeveloperProfile, IEducationInformation, IUserResetPassword, IUserSendOTP, IVerifyOtp, IWorkExperience } from "../../interfaces/user";
import { CreateDeveloperProfile, GetDeveloperProfile, UpdateDeveloperProfile, resetPassword, sendOTP, verifyOtp } from "../../endpoints/api";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

interface verifyOtpModalProps {
  onClose: () => any;
  email: string;

}



export const VerifyOtp: React.FC<verifyOtpModalProps> = ({
email
}) => { 

  const [invalidOTP , setInvalidOTP] = useState<boolean>(false)
  const [optSent , setOtpSent] = useState<boolean>(false)
  const [otpVeriefied, setOtpverified] = useState<boolean>(true)

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
  
      if (index < 4 && inputRefs[index + 1].current) {
        inputRefs[index + 1].current?.focus();
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

  const handleFormSubmitOTP = async(e: any) => {
    e.preventDefault();
    setOtpSent(false)
    setInvalidOTP(false)
    const otp = Number(otpValues.join(''));

    if(otp.toString().length == 5){
      const verify = await verifyOtp({email,otp})
      if(verify){
//        window.location.href="/company-overview"
        setOtpverified(false)
      }else{
        setInvalidOTP(true)
      }
    }
  };
  

  const ResendOtp = async (e:any) => {
    setInvalidOTP(false)
    setOtpSent(false)
    e.preventDefault()
    try {
      const onSubmitOTP = await sendOTP( { email: email } as IUserSendOTP); // Rename the constant
      if(onSubmitOTP !== 400){
        setOtpSent(true)
      }else if (onSubmitOTP == 400) {
        setOtpSent(false)
        console.error('OTP failed');
      }
    } catch (error) {
   
        console.log('Error:', error);
    }

  } 


  const [password, setPassword] = useState();
  const [confirmedpassword, setConfirmedPassword] = useState('');
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [weakPasswordError, setWeakPasswordError] = useState<boolean>(false);
  const [EmptypasswordError, setEmptypasswordError] = useState<boolean>(false);

  const inputPasswordStyle = {
    ...(EmptypasswordError && {
      outlineStyle: "solid",
     color: "tomato",
      borderWidth: "1px",
    }),
  }; 

  //Reseting the password 
  const handleSubmitNewPass = async (e: any) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

    if(!password){
      setEmptypasswordError(true)
      return
    }

    if(!passwordRegex.test(password)){
      setEmptypasswordError(true)
      setWeakPasswordError(true)
      return
     }

     if(password !== confirmedpassword){
      setEmptypasswordError(true)
      setPasswordError(true)
      return
     }

     try {
      //NK check if used
      // const changePassword = await ChangePasswordAndActivate({email:email, password:password, otp:""} as IUserResetPassword); // Rename the constant
      // if(changePassword){
      //         console.log('reset password successful');
      //  window.location.href="/auth/login"
            
      // }else{
      //     console.error('reset password failed');
      // }
    } catch (error) {
        console.error('Error:', error);
    }

  };

    return (
    <main id="content" role="main" className="bg-light">
   <section className="otp">
    

    <div className="otpMain">
   
{ otpVeriefied ?
    <div className="otpForm">
      <h2>Enter the OTP</h2>
      <p>Enter the OTP sent to the email you provided</p>

      <form >
        <div>
          <label>
            <span></span>
            {invalidOTP &&   <span style={{color :"tomato", fontWeight: "600" , fontSize:"small"}}>Invalid OTP</span>}
          {optSent &&   <span style={{color :"green", fontWeight: "600" , fontSize:"small"}}>OTP sent successfully</span>}
            <span className='cta' onClick={ResendOtp} style ={{color : "var(--bs-heading-color)", cursor:"pointer"}}>resend OTP</span>
          </label>
          <div className='otpInputs'>
{inputRefs.map((ref, index) => (
  <input
    key={index}
    type="text"
    id={`input${index + 1}`}
    maxLength={1}
    ref={ref}
    value={otpValues[index]}
    onChange={(e) => handleInputChange(e, index)}
    className={`otpInput ${otpValues[index] !== '' ? 'incorrect' : ''}`}
    required
  />
))}
</div>

        </div>
        <button onClick={handleFormSubmitOTP}>Submit</button>
      </form>

    </div>
:           <section className="newpassword">


<div className="newpasswordMain">

  <div className="newpasswordForm">
    <h2>Change your password</h2>
    <p style={{textAlign: "center",
    fontSize: "0.7em"}}>it will be used to access your account.</p>

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
      <button type="submit">Change Password</button>
    </form>

  </div>
</div>
</section> }
        

    </div>
      </section>
</main>
    )
}

