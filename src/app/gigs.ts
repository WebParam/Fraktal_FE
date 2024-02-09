
import mailchimp from "../assets/svg/brands/frontapp-icon.svg";
import capsule from "../assets/svg/brands/capsule-icon.svg";
import prosperus from "../assets/svg/brands/prosperops-icon.svg";
import guideline from "../assets/svg/brands/guideline-icon.svg"; 

export const filterJob=(searchKey:string[], cityKey?:string)=>{



    const filteredBySearchFields= gigs.filter((gig)=>{
        if(searchKey.length==1 && searchKey[0]=="") return gig;
       return searchKey.some(item => gig.searchFields?.includes(item))
    })
    debugger;
    if(cityKey){   
        const filteredByCities =  filteredBySearchFields.filter((gig)=>{
            if(cityKey=="") return gig;
            return gig.location?.toLowerCase().includes(cityKey?.toLowerCase());
        })

        return filteredByCities;
    }

    return filteredBySearchFields;

}


export const gigs = [
    {
        id: 1,
        companyname: 'J-T Consulting',
        searchFields:["jhb", "developer", "c#", "senior", "devops", "engineer", "full time", "remote"],
        position: 'Senior Devops Engineer',
        salary: 'R125k-R135k month',
        location: 'JHB',
        jobType: 'Full Time',
        img: mailchimp,
        posted: 'today',
        remote: 'remote',
        description:"We are looking for a Senior DevOps Engineer to join our team. You will be responsible for helping to design, develop, and maintain our cloud infrastructure and services. You will be part of a small team of dedicated engineers who are passionate about delivering an exceptional user experience to our customers."
    },
    {
        id: 2,
        companyname: 'Tuto',
        searchFields:["developer", "intermediate", "pta", "front end", "front", "react", "part time", "remote", "js", "javascript", "front end developer", "front end", "intermediate js", "intermediate js developer", "intermediate js front end developer", "intermediate front end developer", "intermediate front end"],
        position: 'Intermediate JS Front End Developer',
        salary: 'R500 Hourly',
        location: 'PTA',
        jobType: 'Part Time',
        img: capsule,
        posted: 'today',
        remote: 'remote',
        description:"We are looking for a Senior DevOps Engineer to join our team. You will be responsible for helping to design, develop, and maintain our cloud infrastructure and services. You will be part of a small team of dedicated engineers who are passionate about delivering an exceptional user experience to our customers."
    },
    {
        id: 3,
        companyname: 'Tuto',
        searchFields:["cpt", "business analyst", "senior", "part time", "on site", "business", "analyst", "senior business analyst"],
        position: 'Senior Business Analyst',
        salary: 'R900 Hourly',
        location: 'CPT',
        jobType: 'Part Time',
        img: capsule,
        posted: '1 day ago',
        remote: 'on-site',
        description:"We are looking for a Senior DevOps Engineer to join our team. You will be responsible for helping to design, develop, and maintain our cloud infrastructure and services. You will be part of a small team of dedicated engineers who are passionate about delivering an exceptional user experience to our customers."
  
    },
    // {
    //     id: 4,
    //     companyname: 'Prosperops',
    //     position: 'Senior Project Manager',
    //     salary: 'R750 Hourly',
    //     location: 'Cape Town',
    //     jobType: 'Full Time',
    //     img: prosperus,
    //     posted: '1 day ago',
    //     remote: 'on-site',
    //     description:"We are looking for a Senior DevOps Engineer to join our team. You will be responsible for helping to design, develop, and maintain our cloud infrastructure and services. You will be part of a small team of dedicated engineers who are passionate about delivering an exceptional user experience to our customers."
  
    // },
    // {
    //     id: 5,
    //     companyname: 'The App Lab',
    //     position: 'Senior product manager',
    //     salary: 'R75K per month',
    //     location: 'Johannesburg',
    //     jobType: 'Full Time',
    //     img: capsule,
    //     posted: '1 day ago',
    //     remote: 'on-site',
    //     description:"We are looking for a Senior DevOps Engineer to join our team. You will be responsible for helping to design, develop, and maintain our cloud infrastructure and services. You will be part of a small team of dedicated engineers who are passionate about delivering an exceptional user experience to our customers."
  
    // },
    // {
    //     id: 6,
    //     companyname: 'Guideline',
    //     position: 'iOS Engineer',
    //     salary: 'R800 Hourly',
    //     location: 'Johannesburg',
    //     jobType: 'Part Time',
    //     img: guideline,
    //     posted: '1 day ago',
    //     remote: 'remote',
    //     description:"We are looking for a Senior DevOps Engineer to join our team. You will be responsible for helping to design, develop, and maintain our cloud infrastructure and services. You will be part of a small team of dedicated engineers who are passionate about delivering an exceptional user experience to our customers."
  
    // }
]