// api.js
import axios from 'axios';
import { IDeveloperProfile, IUser, IUserLogin, IUserResetPassword, IUserSendOTP } from '../interfaces/user';
import {ICompanyRegister } from '../interfaces/organisation';
import { IJobApplication } from '../interfaces/IJobApplication';

const url = "http://localhost:8080";
const renderUrl = "http://localhost:8080";

export async function registerUser(payload:IUser) {
  try {
    const response = await axios.post(`${url}/api/users`, payload);

    if (response.status === 200 || response.status === 201) {
      // Registration successful, you can redirect the user or show a success message.
      console.log('Registration successful');
      return true;
    } else {
      // Registration failed, handle error (e.g., display error message).
      console.error('Registration failed');
      return false;;
    }
  } catch (error) {
    // Handle network or other errors
    console.error('Error:', error);
    return false;
  }
}

export async function UserLogin(payload:IUserLogin) {
  try {
    const response = await axios.post(`${url}/api/login`, payload);

    if (response.status === 200 || response.status === 201) {
      // Registration successful, you can redirect the user or show a success message.
      console.log('login successful');
      return response.data;
    } else {
      // Registration failed, handle error (e.g., display error message).
      console.error('login failed');
      return false;;
    }
  } catch (error) {
    // Handle network or other errors
    console.error('Error:', error);
    return false;
  }
}

export async function GetDeveloperProfile(id:string) {
  try {
    const response = await axios.get(`${url}/api/personnelByUserId/${id}`);
debugger;
    if (response.status === 200 || response.status === 201) {
      // Registration successful, you can redirect the user or show a success message.
      console.log('retrieved successful');
      return response;
    } else {
      // Registration failed, handle error (e.g., display error message).
      console.error('retrieve failed');
      return response;;
    }
  } catch (error) {
    // Handle network or other errors
    console.error('Error:', error);
    return error;
  }
}

export async function GetStaffInfo(id:string) {
  try {
    const response = await axios.get(`${url}/api/staffuser/${id}`);
debugger;
    if (response.status === 200 || response.status === 201) {
      // Registration successful, you can redirect the user or show a success message.
      console.log('retrieved successful');
      return response;
    } else {
      // Registration failed, handle error (e.g., display error message).
      console.error('retrieve failed');
      return response;;
    }
  } catch (error) {
    // Handle network or other errors
    console.error('Error:', error);
    return error;
  }
}


export async function CreateDeveloperProfile(payload:IDeveloperProfile) {
  try {
    const response = await axios.post(`${url}/api/personnel`, payload);

    if (response.status === 200 || response.status === 201) {
      // Registration successful, you can redirect the user or show a success message.
      console.log('update successful');
      return true;
    } else {
      // Registration failed, handle error (e.g., display error message).
      console.error('update failed');
      return false;;
    }
  } catch (error) {
    // Handle network or other errors
    console.error('Error:', error);
    return false;
  }
}

export async function UpdateDeveloperProfile(payload:IDeveloperProfile, id:string) {
  try {
    const response = await axios.post(`${url}/api/personnel/${id}`, payload);

    if (response.status === 200 || response.status === 201) {
      // Registration successful, you can redirect the user or show a success message.
      console.log('update successful');
      return true;
    } else {
      // Registration failed, handle error (e.g., display error message).
      console.error('update failed');
      return false;;
    }
  } catch (error) {
    // Handle network or other errors
    console.error('Error:', error);
    return false;
  }
}



export async function CreateJob(payload:IJobApplication) {
  try {
    const response = await axios.post(`${url}/api/jobApplications`, payload);

    if (response.status === 200 || response.status === 201) {
      // Registration successful, you can redirect the user or show a success message.
      console.log('login successful');
      return true;
    } else {
      // Registration failed, handle error (e.g., display error message).
      console.error('login failed');
      return false;;
    }
  } catch (error) {
    // Handle network or other errors
    console.error('Error:', error);
    return false;
  }
}



export async function GetApplicantProfile(id:string) {
  try {
    const response = await axios.post(`${url}/api/login/${id}`);

    if (response.status === 200 || response.status === 201) {
      // Registration successful, you can redirect the user or show a success message.
      console.log('login successful');
      return true;
    } else {
      // Registration failed, handle error (e.g., display error message).
      console.error('login failed');
      return false;;
    }
  } catch (error) {
    // Handle network or other errors
    console.error('Error:', error);
    return false;
  }
}



export async function resetPassword(payload:IUserResetPassword) {
    try {
      const response = await axios.post(`${renderUrl}/api/user/resetPassword`, payload);
  
      if (response.status === 200 || response.status === 201) {
        // Registration successful, you can redirect the user or show a success message.
        console.log('password reset successful');
        return true;
      } else {
        // Registration failed, handle error (e.g., display error message).
        console.error('password reset failed');
        return false;;
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error:', error);
      return false;
    }
  }
  
  

export async function sendOTP(payload:IUserSendOTP) {
    try {
      const response = await axios.post(`${renderUrl}/api/user/sendOTP`, payload);
  
      if (response.status === 200 || response.status === 201) {
        // Registration successful, you can redirect the user or show a success message.
        console.log('otp sent successful');
        if ( response.data._doc){
            return response.data._doc;
        } else {
          return false;
        }

      } else {
        // Registration failed, handle error (e.g., display error message).
        return false;
      }
      
    } catch (error) {
      // Handle network or other errors
      console.error('Error:', error);
      return false;
    }
  }

  export async function registerOrganisation(payload: ICompanyRegister) {
    try {
      const response = await axios.post(`${url}/api/organisation`, payload);
  
      if (response.status === 200 || response.status === 201) {

        console.log('password reset successful');
        return true;
      } else {
        // Registration failed, handle error (e.g., display error message).
        console.error('password reset failed');
        return false;;
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error:', error);
      return false;
    }
  }

  
