export interface IApplyForJobRegistration{

    // create a user in db using these fields.
    // generate an otp and send it to user, set the users password the same as otp 
    // user will have to verify otp and then change password
    firstName:string, 
    lastName:string, 
    email:string, 
    phone:string, 

  // create new personnel with this info and save these fields

    summary:string, //personnel->personnal information -> bio
    resume:string, // personnel -> cvurl
    workStatus:string, // personnel -> current job 
    yearsOfExperience:string, // personnel -> years of experience (nullable)
    expectedSalary:string, // personnel -> add new field (nullable)
    notice:string, // personnel -> add new field (nullable)

  // dont save this for now we will use it to assign the dev to the project
  }