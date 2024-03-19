// api.js
import axios from "axios";
import {
  IApply,
  IContactForm,
  IDeveloperProfile,
  IUpdateStaffAndOrganisation,
  IUser,
  IUserLogin,
  IUserResetPassword,
  IUserSendOTP,
  IUserUpdatePassword,
  IVerifyOtp,
} from "../interfaces/user";
import { ICompanyRegister } from "../interfaces/organisation";
import { IJobApplication } from "../interfaces/IJobApplication";
import { IApplyForJobRegistration } from "../interfaces/job-registration";
import Cookies from "universal-cookie";
const cookies = new Cookies();
// const url = "http://localhost:8080"
const url = "https://viconet-vercel.vercel.app"
const azureUrl = "https://fraktional-be.azurewebsites.net"
// const azureUrl = "https://localhost:7257"
const user = JSON.stringify(cookies.get("fraktional-user"));

const header =  {
  //  "Authorization": `Anonymous`,
   "Access-Control-Allow-Origin": "*",
   "fraktional-user": user??""
 }

export async function ChangePasswordAndActivate(payload: IUserResetPassword) {
  try {
    const response = await axios.post(
      `${url}/api/user/changePasswordAndActivate`,
      payload
    );

    if (response.status === 200 || response.status === 201) {
      // Registration successful, you can redirect the user or show a success message.
      console.log("password reset successful");
      return true;
    } else {
      console.error("password reset failed");
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}


export async function registerUser(payload: IUser) {
  try {
    const response = await axios.post(`${url}/api/users`, payload);

    if (response.status === 200 || response.status === 201) {
      console.log("Registration successful");
      return true;
    } else {
      console.error("Registration failed");
      return response;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}

export async function UserLogin(payload: IUserLogin) {
  try {

    const response = await axios.post(`${url}/api/login`, payload);

    if (response.status === 200 || response.status === 201) {
      console.log("login successful");
      return response.data;
    } else {
      console.error("login failed");
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}

export async function GetBlog() {
  try {
    const response = await axios.get('https://public-api.wordpress.com/wp/v2/sites/fraktionaldevblog.wordpress.com/posts?_envelope=1');

    if (response.status === 200 || response.status === 201) {
      console.log("Fetched blogs successfully");
      return response.data;
    } else {
      console.error("fetch blogs failed");
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}


export async function uploadProfilePic(profilePic: FormData, userId: string) {
  const config = {
    headers: {
      "content-type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      "fraktional-user": user??""
    },
  };
  const resp = await axios.post(
    `${url}/api/upload_profilepicture/${userId}`,
    profilePic,
    config
  );
  console.log("profilePicRes", resp);
  return resp;
}

export async function uploadOrgPic(profilePic: FormData, userId: string) {
  const config = {
    headers: {
      "content-type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      "fraktional-user": user??""
    },
  };
  const resp = await axios.post(
    `${url}/api/upload_orgpicture/${userId}`,
    profilePic,
    config
  );
  console.log("profilePicRes", resp);
  return resp;
}


export async function GetDeveloperProfile(id: string) {
  try {
    const response = await axios.get(`${url}/api/personnelByUserId/${id}`);
    
    if (response.status === 200 || response.status === 201) {
      console.log("retrieved successful");
      return response;
    } else {
      console.error("retrieve failed");
      return response;
    }
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
}


export async function GetOrganisation(id: string) {
  try {
    const response = await axios.get(`${url}/api/organisation/${id}`);
    
    if (response.status === 200 || response.status === 201) {
      console.log("retrieved successful");
      return response;
    } else {
      console.error("retrieve failed");
      return response;
    }
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
}



export async function GetProjectsByOrgId(id: string) {
  try {
    const response = await axios.get(`${azureUrl}/projects/org/${id}`, { headers: header });
    
    if (response.status === 200 || response.status === 201) {
      console.log("retrieved successful");
      return response;
    } else {
      console.error("retrieve failed");
      return response;
    }
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
}


export async function GetProjectById(id: string) {
  try {
    const response = await axios.get(`${azureUrl}/projects/${id}`,  { headers: header });
    
    if (response.status === 200 || response.status === 201) {
      console.log("retrieved successful");
      return response;
    } else {
      console.error("retrieve failed");
      return response;
    }
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
}


export async function GetAllProjects() {
  try {
    const response = await axios.get(`${azureUrl}/projects/`,  { headers: header });
    
    if (response.status === 200 || response.status === 201) {
      console.log("retrieved successful");
      return response;
    } else {
      console.error("retrieve failed");
      return response;
    }
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
}

export async function GetAllDeveloperProfiles() {
  try {
    const response = await axios.get(`${azureUrl}/personnel/`,  { headers: header });
    
    if (response.status === 200 || response.status === 201) {
      console.log("retrieved successful");
      return response;
    } else {
      console.error("retrieve failed");
      return response;
    }
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
}




export async function DeleteDeveloperProfile(id: string) {
  try {

    const response = await axios.get(`${url}/api/delete/${id}`);
    
    if (response.status === 200 || response.status === 201) {
      console.log("delete successful");
      return response;
    } else {
      console.error("delete failed");
      return response;
    }
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
}

export async function DeleteCompanyProfile(id: string) {
  try {

    const response = await axios.get(`${url}/api/delete/${id}`);
    
    if (response.status === 200 || response.status === 201) {
      console.log("delete successful");
      return response;
    } else {
      console.error("delete failed");
      return response;
    }
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
}


export async function GetStaffInfo(id: string) {
  try {
    const response = await axios.get(`${url}/api/staffuser/${id}`);
    
    if (response.status === 200 || response.status === 201) {
      console.log("retrieved successful");
      return response;
    } else {
      console.error("retrieve failed");
      return response;
    }
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
}

export async function PersonnelExists(email: string) {
  try {
    const response = await axios.get(`${azureUrl}/personnelExists/${email}`,  { headers: header });
    
    if (response.status === 200 || response.status === 201) {
      console.log("retrieved successful");
      return response;
    } else {
      console.error("retrieve failed");
      return response;
    }
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
}

export async function ProjectsByPersonnel() {
  try {
    const response = await axios.get(`${azureUrl}/projects/byPersonnel/`,  { headers: header });
    
    if (response.status === 200 || response.status === 201) {
      console.log("retrieved successful");
      return response;
    } else {
      console.error("retrieve failed");
      return response;
    }
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
}


export async function CreateDeveloperProfile(payload: IDeveloperProfile) {
  try {
    const response = await axios.post(`${url}/api/personnel`, payload, );

    if (response.status === 200 || response.status === 201) {
      console.log("update successful");
      return true;
    } else {
      console.error("update failed");
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}

export async function UpdateDeveloperProfile(
  payload: IDeveloperProfile,
  id: string
) {
  try {
    const response = await axios.post(`${url}/api/personnel/${id}`, payload);

    if (response.status === 200 || response.status === 201) {
      console.log("update successful");
      return true;
    } else {
      console.error("update failed");
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}

export async function UpdateStaffAndOrganisation(
  payload: IUpdateStaffAndOrganisation,
  id: string
) {
  try {
    const response = await axios.post(`${url}/api/staff/${id}`, payload);

    if (response.status === 200 || response.status === 201) {
      console.log("update successful");
      return true;
    } else {
      console.error("update failed");
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}


export async function PostContact(payload: IContactForm) {
  try {
    const response = await axios.post(
      `https://eov2bsfe8acwzc6.m.pipedream.net`,
      payload
    );

    if (response.status === 200 || response.status === 201) {
      console.log("update successful");
      return true;
    } else {
      console.error("update failed");
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}
export async function uploadCV(formData: FormData) {
  const config = {
    headers: {
      "content-type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
    },
  };
  const resp = await axios.post(`${url}/api/upload_cv/1`, formData, config);
  return resp;
}

export async function CreateJob(payload: IJobApplication) {
  try {
    const response = await axios.post(`${azureUrl}/Project`, payload,  { headers: header });

    if (response.status === 200 || response.status === 201) {
      console.log("JOB POSTED");
      return true;
    } else {
      console.error("failed to post");
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}

export async function UpdateJob(payload: IJobApplication) {
  try {
    const response = await axios.put(`${azureUrl}/projects/update`, payload,  { headers: header });

    if (response.status === 200 || response.status === 201) {
      console.log("Job Updated");
      return true;
    } else {
      console.error("Job not updated");
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}

export async function GetApplicantProfile(id: string) {
  try {
    const response = await axios.post(`${url}/api/login/${id}`);

    if (response.status === 200 || response.status === 201) {
      console.log("login successful");
      return true;
    } else {
      console.error("login failed");
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}

export async function resetPassword(payload: IUserResetPassword) {
  try {
    const response = await axios.post(
      `${url}/api/user/resetPassword`,
      payload
    );

    if (response.status === 200 || response.status === 201) {
      // Registration successful, you can redirect the user or show a success message.
      console.log("password reset successful");
      return true;
    } else {
      console.error("password reset failed");
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}

export async function sendOTP(payload: IUserSendOTP) {
  try {
    const response = await axios.post(`${url}/api/user/sendOTP`, payload);

    if (response.status === 200 || response.status === 201) {
      console.log("otp sent successful");
      if (response.data._doc) {
        return response.data._doc;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}

export async function registerOrganisation(payload: ICompanyRegister) {
  try {
    const response = await axios.post(`${url}/api/organisation`, payload);

    if (response.status === 200 || response.status === 201) {
      console.log("password reset successful");
      return true;
    } else {
      console.error("password reset failed");
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}

export async function verifyOtp(payload: IVerifyOtp) {
  try {
    const response = await axios.post(`${url}/api/users/verify`, payload);

    if (response.status === 200 || response.status === 201) {
      if (response.data.code === 400) {
        return false;
      } else {
        console.log("otp verified successful");
        return true;
      }
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}


export async function jobRegistration(payload:any) {
  try {
    const response = await axios.post(`${azureUrl}/apply`, payload,  { headers: header });
  
    if (response.status === 200 || response.status === 201) {
      debugger;
      if (response.data?.personnel?.dateCreated) {
        return response.data;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  }

}


export async function sendOtpAzure(payload: IUserSendOTP) {
  try {
    const response = await axios.post(`${azureUrl}/sendOTP`, payload);
    console.log('response:', response)
    if (response.status === 200 || response.status === 201) {
      console.log("otp sent successful");
        return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}
  export async function onboardDeveloper(payload:any) {
    try {
      const response = await axios.post(`${azureUrl}/apply`, payload,  { headers: header });
    
      if (response.status === 200 || response.status === 201) {
        debugger;
        if (response.data?.personnel?.dateCreated) {
          return response.data;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
}

export async function verifyOtpAzure(payload: IVerifyOtp) {
  try {
    debugger;
    const response = await axios.post(`${azureUrl}/verifyOTP`, payload);
    debugger;
    console.log('verify response: ', response)

    if (response) {
      return true;
    }
  } catch (error) {
    console.error("Error:", error);
    debugger;
    return false;
  }
}

export async function ChangePasswordAzure(payload: IUserUpdatePassword) {
  try {
    const response = await axios.post(`${azureUrl}/updatePassword`,payload);

    if (response.status === 200 || response.status === 201) {
      // Registration successful, you can redirect the user or show a success message.
      console.log("password reset successful");
      return true;
    } else {
      console.error("password reset failed");

}}catch (error) {
  console.error("Error:", error);
  return false;
}
}

export async function addToShortlist(payload:any) {
  try {
    const response = await axios.post(`${azureUrl}/projects/shortlist`, payload,  { headers: header });
  
    if (response.status === 200 || response.status === 201) {
      debugger;
      if (response.data) {
        return response.data;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}

export async function GetShortlist(payload: string[]) {
 
  try {
    const response = await axios.get(`${azureUrl}/personnel/shortlistedPersonnel?${payload.map((id: string) => `users=${id}`).join('&')}`);
    // debugger;
    if (response) {
      // const data = await response.json();
      return response;
    } else {
      console.error('Error:', response);
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
}

export async function uploadCv(payload:any) {
  try {
    const response = await axios.post(`${azureUrl}/uploadCv`, payload,  { headers: header });
  
    if (response.status === 200 || response.status === 201) {
      if (response.data?.personnel?.dateCreated) {
        return response.data;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
    return false;
  }

}

export async function DeleteProject(id: string) {
  try {

    const response = await axios.delete(`${azureUrl}/projects/removeProject/${id}`);
    
    if (response.status === 200 || response.status === 201) {
      return response;
    } else {
      console.error("delete failed");
      return response;
    }
  } catch (error) {
    console.error("Error:", error);
    return error;
  }
}