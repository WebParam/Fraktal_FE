export interface IUser {
    _id?:string;
    title?: string;
    firstName?: string;
    surname?:string;
    email?:string;
    password?:string;
    mobileNumber?:string;
    skills?:string[];
    //userstate: 
    //0 = otp unverified
    //1 = otp verified
    //2 = deleted
    //3 = onboarded - reset password
    type?:string;
    //type
    //0: personnel
    //2: staff
    status?:number;
    otp?: string | Number;
    profilePicture?:string
  }

  export interface IUserLogin extends IUser {
    email:string;
    password:string;
  } 


  export interface IUserResetPassword extends IUser {
    email:string;
    password:string;
    otp:string | Number;
  }

  
  export interface IUserSendOTP {
    email:string;
  
  }

  export interface IJobResponsibilities{
    content:string
  }

  export interface IVerifyOtp{
    email:string
    otp:string | Number
  }
  
export interface IContactForm{
  details:string,
  firstName:string,
  lastName:string,
  email:string,
  phone:string
}
  export interface IDeveloperProfile{
    information :string,
    currentJob:string,
    previousWorkExperience:IWorkExperience[],
    yearsOfExperience:string, 
    education:IEducationInformation[], 
    keySkills:string,
    keyCourses :string, 
    cvUrl:string, 
    personalInformation:IPersonalInformation, 
    _user:string,
    preferedWorkMethod:string
  }

  export interface IWorkExperience{
    employer?:string,
    jobTitle?:string,
    startDate?:string,
    endDate?:string
    responsibilities?:IJobResponsibilities,
    location?:string
  }

  export interface IPersonalInformation{
    _id?:string;
    about? :string;
    name?:string;
    surname?:string;
    dateOfBirth?	:string; //not sent
    address?	:string; //not sent
    country?:string; //not sent 
    province?:string;
  }


  export interface IEducationInformation{
    instituteName:string,
    qualification:string,
    dateCompleted:string
  }

  export interface IApplyForJobRegistration{

    // create a user in db using these fields.
    // generate an otp and send it to user, set the users password the same as otp 
    // user will have to verify otp and then change password
    firstName:string, 
    lastName:string, 
    email:string, 
    phone:string, 
// save these fields to personnel
    summary:string, //personnel->personnal information -> bio
    resume:string, // personnel -> cvurl
    workStatus:string, // personnel -> add new field (nullable)
    notice:string, // personnel -> add new field (nullable)
    portfolio:string, // personnel -> add new field (nullable)
    expectedSalary:string, // personnel -> add new field (nullable)
  }