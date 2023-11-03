'use client'
import './DevOverview.scss';
import './otpStyle.scss';
import Link from "next/link";
import { ChangeEvent,  useRef, useState } from "react";
import 'react-responsive-modal/styles.css';
import { IUserSendOTP } from "../../interfaces/user";
import {  sendOTP, verifyOtp } from "../../endpoints/api";

interface verifyOtpModalProps {
  onClose: () => any;
  email: string;
}

export const VerifyOtp: React.FC<verifyOtpModalProps> = ({
email
}) => { 

  const [invalidOTP , setInvalidOTP] = useState<boolean>(false)
  const [optSent , setOtpSent] = useState<boolean>(false)

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
        window.location.href="../../auth/login"
       
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

    return (
    <main id="content" role="main" className="bg-light">
   <section className="otp">


    <div className="otpMain">
   

      <div className="otpForm">
        <h2>Enter the OTP</h2>
        <p>Enter the OTP sent to the email you provided</p>

        <form >
          <div>
            <label>
              <span></span>
              {invalidOTP &&   <span style={{color :"tomato", fontWeight: "600" , fontSize:"small"}}>Invalid OTP</span>}
            {optSent &&   <span style={{color :"green", fontWeight: "600" , fontSize:"small"}}>OTP sent successfully</span>}
              <span className='cta' onClick={ResendOtp}>resend otp</span>
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
    </div>
      </section>
</main>
    )
}

