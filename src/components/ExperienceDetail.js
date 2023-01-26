import React, { useContext } from 'react'
import CvContext from '../context/CvContext'

function ExperienceDetail() {
    const fetchedData = useContext(CvContext)
    const { cvData, updateCvData } = fetchedData
    const handleExperienceChange = (e) => {
        updateCvData({ ...cvData, [e.target.name]: e.target.value })
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
            <h4 className="my-4 ms-2">Experience Details : <div className="float-end mt-2 d-inline-block fs-5 form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked onClick={() => { toggleElement("experience") }} />
            </div></h4>
            <div className="container-fluid px-4">
                <div className="form-group mb-3">
                    <label htmlFor="work1year">Year 1 : </label>
                    <input type="text" name="work1year" id="work1year" className="form-control mt-2" onChange={handleExperienceChange} />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="work1designation">Job Designation 1 : </label>
                    <input type="text" name="work1designation" id="work1designation" className="form-control mt-2" onChange={handleExperienceChange} />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="work1company">Job Company 1 : </label>
                    <input type="text" name="work1company" id="work1company" className="form-control mt-2" onChange={handleExperienceChange} />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="work1description">Job Description 1 : </label>
                    <textarea type="text" name="work1description" id="work1description" className="form-control mt-2" onChange={handleExperienceChange} />
                </div>
            </div>
            <h4 className='ms-2 my-4'>Experience 2 : <div className="float-end mt-2  d-inline-block fs-5  form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked onClick={() => { toggleElement("experience2") }} />
            </div></h4>
            <div className="container-fluid">
                <div className="form-group mb-3">
                    <label htmlFor="work2year">Year 2 : </label>
                    <input type="text" name="work2year" id="work2year" className="form-control mt-2" onChange={handleExperienceChange} />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="work2designation">Job Designation 2 : </label>
                    <input type="text" name="work2designation" id="work2designation" className="form-control mt-2" onChange={handleExperienceChange} />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="work2company">Job Company 2 : </label>
                    <input type="text" name="work2company" id="work2company" className="form-control mt-2" onChange={handleExperienceChange} />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="work2description">Job Description 2 : </label>
                    <textarea type="text" name="work2description" id="work2description" className="form-control mt-2" onChange={handleExperienceChange} />
                </div>
            </div>
        </>
    )
}

export default ExperienceDetail
