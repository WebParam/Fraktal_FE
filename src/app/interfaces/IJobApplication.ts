export interface IJobApplication{
    //new
    id?:string,
    projectType:string,
    projectSector:string,
    country: number,
    language:string,
    companyId:string // New
    creatingUser: String // New
    projectName:string,
    description:string; 
    projectTeam: string,
    streetAddress?:string,
    city:string,
    state:string,
    zipCode?:string,
    remote:number,
    jobtype:number,
    hires:number,
    urgency:number,
    pay:number,
    currency:number,
    fromDate:string,
    toDate:string,
    period:number,
    signingBonus?:number //default  to 0 in the backend if not provided
    commisionPay?:number //default  to 0 in the backend if not provided
    bonusPay?:number //default  to 0 in the backend if not provided
    tips?:number //default  to 0 in the backend if not provided
    otherPay?:number //default  to 0 in the backend if not provided
    healthInsurance:boolean,
    paidTimeOff:boolean,
    dentalInsurance:boolean,
    retirememntFund:boolean,
    flexibleSchedule:boolean,
    tuition:boolean,
    lifeInsurance:boolean,    
    retirememntFundMatch:boolean,
    disabilityInsurance:boolean,
    retirementPlan:boolean,
    referalProgram:boolean,
    employeeDiscount:boolean,
    spendingAccount:boolean,
    relocation:boolean,
    parentalLeave:boolean,
    otherBenefits:boolean,
    noBenefits:boolean
    //
    jobSchedule:number,
    //
    website:string,
    //
    responsibilities:string,
    //
    methodToRecieveApplications:number,
    submitResume:number,
    dailyUpdateEmailAddress?:string, //empty string if not provided
    individualUpDateEmailAddress?:string //empty string if not provided
    dailyUpdateEmail?:boolean, //false if not provided
    individualUpDateEmail?:boolean //false if not provided


}

export interface IJobApplicationViewModel{
    data:IJobApplicationViewModel;
    // org:IOrganisation

}