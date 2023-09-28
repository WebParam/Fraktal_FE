'use client'
import './otpStyle.scss';
import Link from 'next/link';
import { useState, useRef, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import logo from '../../../assets/img/logo.png';
import loginImage from '../../../assets/additional/loginImage.jpg';
import axios from 'axios';

function OTP() {
  const [otpValues, setOtpValues] = useState(['', '', '', '']);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null)
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
    }
  };
  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    const otp = Number(otpValues.join(''));
  
    try {
      const response = await axios.post('http://localhost:8080/api/users/verify', { email: "prince@webparam.org", otp: otp });
      if (response.status === 200 || response.status === 201) {
        console.log(otp);
        alert("verified");
      } else {
        // Registration failed, handle error (e.g., display error message).
        console.error('OTP failed');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error:', error);
      alert("not verified");  
    }
  };
  

  return (
    <section className="otp">
      <div className="top">
        <Image src={logo} alt='logo'/>
        <Link href='/'><h3><i className="bi bi-chevron-left"></i>Go to main</h3></Link>
      </div>

      <div className="otpMain">
        <div className="otp-image">
          <h2>MailChimp</h2>
          <p className='desc'>“ It has many landing page variations to choose from, which one is always a big advantage. ”</p>
          <Image src={loginImage} alt="" />
          <h3>Lida Reidy</h3>
          <p>Project Manager | Mailchimp</p>
        </div>

        <div className="otpForm">
          <h2>Enter the OTP</h2>
          <p>Enter the OTP sent to the email you provided</p>

          <form onSubmit={handleFormSubmit}>
            <div>
              <label>
                <span></span>
                <span className='cta'><Link href='/auth/reset'><i className="bi bi-chevron-left"></i>Back to reset password</Link></span>
              </label>
              <div className='otpInputs'>
                {inputRefs.map((ref, index) => (
                  <input
                    key={index}
                    type="text"
                    id={`input${index + 1}`}
                    maxLength={1}
                    ref={ref}
                    value={otpValues[index] || ''}
                    onChange={(e) => handleInputChange(e, index)}

                    required
                  />
                ))}
              </div>
            </div>
            <button>Submit</button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default OTP;
