import React from 'react'
import { useContext } from 'react'
import CvContext from '../context/CvContext'


function Banner() {
    const fetchedData = useContext(CvContext)
    const {cvData} = fetchedData
    return (
        <>
            <div className="bg-primary text-light mt-3 py-3 px-5 rounded-end">
                        <h3>{cvData.fname===""?"Firstname":cvData.fname} {cvData.lname===""?"Lastname":cvData.lname}</h3>
                        <h6>{cvData.professionalTitle===""?"Profession Heading":cvData.professionalTitle}</h6>
            </div>
        </>
    )
}

export default Banner
