import React, { useContext } from 'react'
import CvContext from '../context/CvContext'
import Progress from './Progress'

function SoftwareSkills() {
    const fetchedData = useContext(CvContext)
    const {cvData} = fetchedData

    return (
        <>
            <div>
                <h6 style={{ fontSize: "1rem" }}>{cvData.skillsTitle===""?'SOFTWARE SKILLS':cvData.skillsTitle}</h6>
                <hr className="my-1" />
                <div className="container">

                    <div className="row">

                        <div className="col-md-5 offset-md-1">
                            <Progress id="p1" value={cvData.skill1value===""?"60":cvData.skill1value} title={cvData.skill1title===""?"Web Devlopment":cvData.skill1title} />
                            <Progress id="p2" value={cvData.skill2value===""?"70":cvData.skill2value} title={cvData.skill2title===""?"Software Devlopment":cvData.skill2title} />
                            <Progress id="p3" value={cvData.skill3value===""?"50":cvData.skill3value} title={cvData.skill3title===""?"Bootstrap":cvData.skill3title} />
                        </div>
                        <div className="col-md-5 offset-md-1">
                            <Progress id="p4" value={cvData.skill4value===""?"25":cvData.skill4value} title={cvData.skill4title===""?"Figma":cvData.skill4title} />
                            <Progress id="p5" value={cvData.skill5value===""?"40":cvData.skill5value} title={cvData.skill5title===""?"Flask":cvData.skill5title} />
                            <Progress id="p6" value={cvData.skill6value===""?"60":cvData.skill6value} title={cvData.skill6title===""?"Django":cvData.skill6title} />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default SoftwareSkills
