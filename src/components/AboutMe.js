import React, { useContext } from 'react'
import CvContext from '../context/CvContext'

function AboutMe() {
    const fetchedData = useContext(CvContext)
    const {cvData} = fetchedData

    return (
        <>
        <div id="about">
        
            <h6  style={{ fontSize: "1rem" }}>ABOUT ME</h6>
            <hr className="my-1" />
            <p className="" style={{ fontSize: "0.5rem" }}>
                {cvData.aboutMe===""?"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, assumenda, omnis aperiam nobis, similique nihil esse magnam sint tempora veniam nostrum exercitationem repellendus harum numquam nisi inventore fuga debitis ":cvData.aboutMe} 
            </p>
        </div>
        </>
    )
}

export default AboutMe
