import { useState } from "react";
import CvContext from "./CvContext";


const CvState = (props) =>{
    const [cvData,updateCvData]=useState({
        fname:"",
        lname:"",
        qh1:"",
        un1:"",
        year1:"",
        qh2:"",
        un2:"",
        year2:"",
        name1:"",
        designation1:"",
        contact1:"",
        name2:"",
        designation2:"",
        contact2:"",
        phone:"",
        email:"",
        siteurl:"",
        address:"",
        professionalTitle:"",
        aboutMe:"",
        work1year:"",
        work1designation:"",
        work1company:"",
        work1description:"",
        work2year:"",
        work2designation:"",
        work2company:"",
        work2description:"",
        skillsTitle:"",
        skill1title:"",
        skill1value:"",
        skill2title:"",
        skill2value:"",
        skill3title:"",
        skill3value:"",
        skill4title:"",
        skill4value:"",
        skill5title:"",
        skill5value:"",
        skill6title:"",
        skill6value:"",
    })
    return (
        <CvContext.Provider value={{cvData,updateCvData}}>
            {props.children}
        </CvContext.Provider>
    )
}

export default CvState;