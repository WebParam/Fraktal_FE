'use client'
import { Loader } from 'rsuite';
import 'rsuite/Loader/styles/index.css';
import './DevOverview.scss';
import './otpStyle.scss';
import Link from "next/link";
import { ChangeEvent,  useRef, useState } from "react";
import 'react-responsive-modal/styles.css';
import { IUserSendOTP } from "../../interfaces/user";
import {  ChangePasswordAzure, sendOTP, sendOtpAzure, verifyOtp, verifyOtpAzure } from "../../endpoints/api";
import { usePathname } from 'next/navigation';


interface verifyOtpModalProps {
  onClose: () => any;
  email: string;
}

export const VerifyOtp: React.FC<verifyOtpModalProps> = ({
email
}) => { 

  const [invalidOTP , setInvalidOTP] = useState<boolean>(false)
  const [optSent , setOtpSent] = useState<boolean>(false);
  const [otpValidtated, setOtopValidated] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordChanged, setPasswordChanged]= useState(false);
  const [passwordChangedSuccess, setPasswordChangedSuccess] = useState(false);

  const [otpValues, setOtpValues] = useState(['', '', '', '', '']);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const pathname = usePathname();

  const handleNewPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
    setPasswordError(false);
  } 

  
  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    setPasswordError(false);
  } 

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

    const payload = {
      email,
      otp: String(otp)
    }

    if(otp.toString().length == 5){ 
      const verify = await verifyOtpAzure(payload)
      console.log('verify: ', verify);
      if(verify){
        setOtopValidated(true);
        console.log('otp verified');

        if (pathname != '/developer-overview') {
          window.location.href="../../auth/login"
        } 
       
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
      const onSubmitOTP = await sendOtpAzure( { email: email } as IUserSendOTP);
      if(onSubmitOTP){
        setOtpSent(true)
      }else {
        setOtpSent(false)
        console.error('OTP failed');
      }
    } catch (error) {
   
        console.log('Error:', error);
    }
  } 

  const handlePasswordChange = async (e: any) => {
    e.preventDefault();

    if (newPassword == confirmPassword) {
      try {

        const payload = {
          email,
          newPassword: confirmPassword
        }
        const changePassword = await ChangePasswordAzure(payload);
        setPasswordChanged(true);

        if (changePassword) {
          setPasswordChangedSuccess(true);
        }

        console.log(changePassword);

      } catch (error: any) {

      }
    } else {
      setPasswordError(true);
    }
  }

    return (
    <main id="content" role="main" className="bg-light">
      <section className="otp">
        <div className="otpMain">
          {
            otpValidtated ?  
            <div className="otpForm">
            <form style={{width: '150%'}}>
                {passwordChanged ? 
                <div className="loaderSpinner">
                    {passwordChangedSuccess ?
                    <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="#FD2DC3" className="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                  </svg>
                  <span style={{textAlign: 'center'}}>Changed Successfully, Use your new Password when you log in next time</span>
                  </>:
                  <>
                    <Loader />
                    <span>Changing Password</span>
                  </>
                  }
                </div>:
                   
                <div>
                  <h2>OTP VALIDATED</h2>
                  <label>
                    Enter New Password
                  </label>
                  <div className='newpassword'>
                  <input type="password" value={newPassword} onChange={handleNewPasswordChange} className={`${passwordError && 'passworderror'}`} placeholder="New Password" id="" />
                  <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} className={`${passwordError && 'passworderror'}`}  placeholder="Confirm New Password" id="" />
                  {passwordError && <span style={{color: 'red', fontSize: '12px'}}>Password do not match</span>}
                </div>
                </div>}
                <button disabled={passwordChanged} onClick={handlePasswordChange} className={`${passwordChanged && 'disableButton'}`}>Change</button>
              </form>
          </div>:
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
          }
        </div>
      </section>
    </main>
  )}

