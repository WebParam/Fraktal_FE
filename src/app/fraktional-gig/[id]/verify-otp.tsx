'use client'
import '../../auth/company-register/DevOverview.scss';
import '../../auth/company-register/otpStyle.scss';
import './newpassword.scss';
import './reset.scss';
import { ChangeEvent, useEffect, useRef, useState } from "react";

import 'react-responsive-modal/styles.css';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

interface CompleteApplicationProps {
  onClose: () => any;
 errorMessage:string[]

}



export const CompleteApplication: React.FC<CompleteApplicationProps> = ({
errorMessage
}) => { 

  const [invalidOTP , setInvalidOTP] = useState<boolean>(false)
  const [optSent , setOtpSent] = useState<boolean>(false)





    return (
    <main id="content" role="main" className="bg-light">
   <section className="otp">
      <div className="otpMain">
        {
          errorMessage.length && errorMessage.map((error, index) => {
            return (
              <div key={index} className="errorMessage">{error}</div>
            )
          })
        }
       
      </div>
    </section>
</main>
    )
}

