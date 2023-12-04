import React from "react";
import { IOption, getLabelFromValue, getOptionFromValue, projectTeams, techStack, typeOfProject } from '@/app/lib/data';
import { Select } from "@mui/material";
import "./assigned.scss";


interface TableData {
  name: string;
  specs: string;
  assigned : string;
}

const data: TableData[] = [  
    {
      name:"Cristiano Ronaldo",
      specs:"React JS",
      assigned: "project"
    },
    {

      name:"Erling Haaland",
      specs:"Anuglar JS",
      assigned: "project"
    },
    {
   
      name:"Jude Berlingham",
      specs:"SQL, C#",
      assigned: "project"
    },
    {
        name:"Sadio Mane",
        specs:"React JS",
        assigned: "project"
      },
      {
  
        name:"Kevin De Bruyne",
        specs:"Anuglar JS",
        assigned: "project"
      },
      {
     
        name:"Phil Foden",
        specs:"SQL, C#",
        assigned: "project"
      }
    
  
  ]

function Assigned() {

    // function handleSelectTechStack(data: any) {
    //     const _data = data as IOption[];
    //     console.log("tech",_data[0])
    //     setLanguage(_data.map(x=>x.value).join(","));
    
    //   }
  return (
    <div className="assigned">
          {/* <Select isMulti
                      placeholder="Search tech stack/s"
                     value={
                      getOptionFromValue(
                        name== "" ? [] : [name??""],
                        specs
                      )[0]
                    }
                      onChange={handleSelectTechStack}
                       options={techStack} 
                        ={true}
                       /> */}
       <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map(headerText => (
              <th key={headerText}>{headerText}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {Object.entries(item).map(([key, value], idx) => (
                <td key={idx}>
                  {key === 'specs' ? (
                    <span className="specs-text">{value}</span>
                  ) : (
                    value
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Assigned;
