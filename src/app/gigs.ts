
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
        id: "65c628df282f79971828b674",
        companyname: 'Param Solutions',
        searchFields:["jhb", "developer", "c#", "senior", ".net","engineer", "part time", "remote"],
        position: 'Intermediate / Senior .NET Engineer',
        salary: 'Salary: Market Related',
        location: 'JHB',
        jobType: 'Part Time',
        img: mailchimp,
        posted: 'today',
        remote: 'remote',
        description:`Calling all intermediate (3+ years) & senior (5+ years) .NET developers who dream of working from anywhere, on projects that fuel their passion! At Fraktional, we're not just another coding gig. 
        <br/>
         Say goodbye to fluorescent lights and endless meetings. With us, you set your schedule, choose your projects, and code from your dream workspace (beach hammock, anyone?).  <br/><br/>

                But wait, there's more!<br/>
                    Work on projects with amazing teams, pushing the boundaries of innovation.<br/>
                    Level up your skills with opportunities to grow.<br/>
                    Enjoy competitive pay and benefits that fit your freelance lifestyle.<br/>
                    Be part of a supportive community of brilliant minds who share your passion for code.<br/>
                    Think you've got the coding chops? Here's what we're looking for:<br/><br/>
                    - Solid .NET expertise (C#, ASP.NET MVC, Entity Framework)<br/>
                    - 3+ years & 5+ of experience building web applications<br/>
                    - A collaborative spirit and a thirst for learning<br/>
                    - The ability to work independently and manage your time like a pro

        `
    },
    {
        id: "65c628df282f79971828b6745",
        companyname: 'Param Solutions',
        searchFields:["jhb", "developer", "c#", "senior", ".net","engineer", "part time", "remote"],
        position: 'Intermediate / Senior Java Developer',
        salary: 'Salary: Market Related',
        location: 'JHB',
        jobType: 'Part Time',
        img: mailchimp,
        posted: 'today',
        remote: 'remote',
        description:`
                Are you a Java developer who thrives on building powerful, scalable applications? Do you have a passion for clean code and a hunger for challenging projects? Then we want YOU!<br/>
        We're seeking both intermediate and senior-level Java developers to join our dynamic team. Whether you're a rising star or a seasoned pro, we have the perfect opportunity to push your skills to the limit and make a real impact.<br/><br/>
        Responsibilities:<br/>
        - Write clean, well-documented, and unit-tested code.<br/>
        - Participate in code reviews and provide constructive feedback.<br/>
        - Collaborate with product managers, designers, and engineers to understand and implement system requirements.<br/>
        - Debug and troubleshoot complex technical issues.<br/>
        - Stay up-to-date with the latest Java technologies and trends.<br/>
        - Contribute to the overall technical direction of the platform.<br/><br/>
        Requirements:<br/>
        - 3+ years of experience as a Java developer.<br/>
        - Strong understanding of object-oriented programming principles.<br/>
        - Experience with popular Java frameworks (e.g., Spring, Hibernate).<br/>
        - Experience with relational databases (e.g., MySQL, PostgreSQL).<br/>
        - Experience with version control systems (e.g., Git).<br/>
        - Excellent written and verbal communication skills.<br/>
        - Ability to work independently and as part of a team.<br/>
        - Passion for building high-quality software.<br/><br/>
        Benefits:<br/>
        - Competitive salary and benefits package.<br/>
        - Opportunity to work on a challenging and impactful project.<br/>
        - Collaborative and supportive work environment.<br/>
        - Continuous learning and development opportunities.<br/><br/>

        Don't miss this chance to join our team and build the future!`
    },
    {
        id: "65cafa34352110471825a469",
        companyname: 'Param Solutions',
        searchFields:["jhb", "developer", "react", "senior", "native","engineer", "part time", "remote"],
        position: 'Intermediate / Senior React Native Engineer',
        salary: 'Salary: Market Related',
        location: 'JHB',
        jobType: 'Part Time',
        img: mailchimp,
        posted: 'today',
        remote: 'remote',
        description:`Become a React Native developer and conquer both iOS & Android with a single codebase! <br/> 
        We're searching for passionate devs (3+ yrs & 5+ experience) to:<br/> 
        - Build intuitive<br/> 
        -Performant mobile apps <br/>
         Collaborate in a dynamic, fast-paced environment<br/> 
         Shape the future of our platform.<br/> <br/> 
         Intermediate or Senior? We've got your level! <br/> <br/>  
         Ready to unleash your React Native skills?  
         `
    },
    
    // {
    //     id: 2,
    //     companyname: 'Tuto',
    //     searchFields:["developer", "intermediate", "pta", "front end", "front", "react", "part time", "remote", "js", "javascript", "front end developer", "front end", "intermediate js", "intermediate js developer", "intermediate js front end developer", "intermediate front end developer", "intermediate front end"],
    //     position: 'Intermediate JS Front End Developer',
    //     salary: 'R500 Hourly',
    //     location: 'PTA',
    //     jobType: 'Part Time',
    //     img: capsule,
    //     posted: 'today',
    //     remote: 'remote',
    //     description:"We are looking for a Senior DevOps Engineer to join our team. You will be responsible for helping to design, develop, and maintain our cloud infrastructure and services. You will be part of a small team of dedicated engineers who are passionate about delivering an exceptional user experience to our customers."
    // },
    // {
    //     id: 3,
    //     companyname: 'Tuto',
    //     searchFields:["cpt", "business analyst", "senior", "part time", "on site", "business", "analyst", "senior business analyst"],
    //     position: 'Senior Business Analyst',
    //     salary: 'R900 Hourly',
    //     location: 'CPT',
    //     jobType: 'Part Time',
    //     img: capsule,
    //     posted: '1 day ago',
    //     remote: 'on-site',
    //     description:"We are looking for a Senior DevOps Engineer to join our team. You will be responsible for helping to design, develop, and maintain our cloud infrastructure and services. You will be part of a small team of dedicated engineers who are passionate about delivering an exceptional user experience to our customers."
  
    // },
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