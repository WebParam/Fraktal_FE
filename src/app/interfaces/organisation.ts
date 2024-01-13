
export interface ICompanyRegister{
  email: string;
  password: string;
  userName:string;
  userSurname: string;
  // mobileNumber: z.string(),  
  userNumber: string;
  companyNumber: string;
  companyReg: string;
  companyName:string;
  companyAddress?: string;
  position:string;
  title?:string;
  userEmail:string;  
  companyPhone?:string;
  companyAbout?:string;
  companyCity?:string;
  companyCountry?:string;
}



export interface IOrganisationViewModel{
  email: string;
  password: string;
  userName:string;
  userSurname: string;
  // mobileNumber: z.string(),  
  userNumber: string;
  companyNumber: string;
  companyReg: string;
  companyName:string;
  companyAddress?: string;
  position:string;
  title?:string;
  userEmail:string;  
  companyPhone?:string;
  companyAbout?:string;
  companyCity?:string;
  companyCountry?:string;
}
