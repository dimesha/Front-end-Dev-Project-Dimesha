import React from "react";
import Companylogo from '../assets/Logo.png';


const sections = [
    {
      title: "Our Technologies",
      items: ["ReactJS", "Gatsby", "NextJS", "NodeJS", "Cloud"],
    },
   
    {
      title: "Our Services",
      items: ["Social media Marketing", "Web & Mobile App Development", "Data & Analytics"],
    },
   
  ];
  

export default function Footer(){
    return(
        <div className="w-full mt-24 bg-purple-700 text-white py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4  border-b-0 pt-7">
        
         <div className="col-span-2 pt-8 md:pt-2">
            <div className="px-4"> 
            <img
            className="h-7 w-auto"
            src={Companylogo}
            alt="company logo"
          />
            </div>
          {/* <p className="font-bold uppercase px-4">Subscribe to our newsletter</p> */}
          <p className="py-7 px-4">
          Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.
          </p>
        </div>
        
        
        {sections.map((section, index) => (
          <div key={index} className="px-4 ">
            <h6 className="font-bold uppercase pt-2">{section.title}</h6>
            <ul>
              {section.items.map((item, i) => (
                <li key={i} className="py-1 text-white hover:text-amber-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

       
      </div>
<div className="max-w-[800px] mx-auto grid grid-cols-2 md:grid-cols-4 border-b-2  border-white py-8 "></div>
      <div className=" flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-white">
        <p className="py-4">Privacy Policy | Terms & Conditions</p>
      </div>
    </div>
        )}