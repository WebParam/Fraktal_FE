export interface IJobApplication{
    country: number,
    language:number,
    companyId:string // New
    creatingUser: String // New
    companyName:string,
    description:string; 
    jobTitle: string,
    streetAddress?:string,
    city:string,
    state:string,
    zipCode:string,
    remote:number,
    jobtype:number,
    hires:string,
    urgency:string,
    pay:number,
    currency:string,
    fromDate:string,
    toDate:string,
    period:string,
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