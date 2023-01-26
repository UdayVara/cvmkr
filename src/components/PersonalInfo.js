import React, { useContext } from 'react'
import CvContext from '../context/CvContext'

function PersonalInfo() {
    const fetchedData = useContext(CvContext)
    const { cvData, updateCvData } = fetchedData
    const handlePersonalInfo = (e) => {
        updateCvData({ ...cvData, [e.target.name]: e.target.value });
    }
    const toggleElement = (id) => {
        if (document.getElementById(id).style.display === "none") {
            document.getElementById(id).style.display = "block"
        } else {
            document.getElementById(id).style.display = "none"
        }
    }
    return (
        <>
            <h4 className="my-4 ms-2">Personal Info : </h4>
            <div className="container-fluid px-4">
                <div className="mb-3 form-group">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Phone : </label>
                    <input type="text" className="form-control" name='phone' onChange={handlePersonalInfo} />
                </div>
                <div className="mb-3 form-group">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email : </label>
                    <input type="email" className="form-control" name='email' onChange={handlePersonalInfo} />
                </div>
                <div className="mb-3 form-group">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Website : <div className="ms-auto d-inline-block">
                        <input className="ms-2 form-check-input fs-5 mt-1 mb-1" type="checkbox" value="" id="flexCheckChecked" defaultChecked  onClick={() => { toggleElement("website") }}/>
                    </div></label>
                    <input type="url" className="form-control" name='siteurl' onChange={handlePersonalInfo} />
                </div>
                <div className="mb-3 form-group">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Address : </label>
                    <textarea className="form-control" name='address' onChange={handlePersonalInfo} />
                </div>

            </div>
        </>
    )
}

export default PersonalInfo
