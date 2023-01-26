import React, { useContext } from 'react'
import CvContext from '../context/CvContext'
import EducationDetail from './EducationDetail'
import ExperienceDetail from './ExperienceDetail'
import PersonalInfo from './PersonalInfo'
import RefrenceDetail from './RefrenceDetail'
import SoftwareInputs from './SoftwareInputs'
import html2canvas from 'html2canvas';

function Input() {
    const fetchedData = useContext(CvContext)
    const { cvData, updateCvData } = fetchedData
    const updateImage = (event) => {
        // console.log(event.target.files)
        var output = document.getElementById('dp');
        output.src = URL.createObjectURL(event.target.files[0]);
        console.log(output.src);
        setTimeout(() => {
            
            html2canvas(document.querySelector("#dp")).then((canvas) => {
                let base64image=canvas.toDataURL('images/jpg')
                // console.log(base64image)
                document.getElementById('dp').src=base64image;
                // console.log(output.src);
            })
        }, 1000);
        
    }

    const handleBanner = (e) => {
        updateCvData({ ...cvData, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="col-md-6  pb-5 px-0" style={{ height: "100vh", boxSizing: "border-box", overflowX: "hidden", overflowY: "scroll", backgroundColor: "#d6d5d2" }}>

                <div className="container-fluid sticky-top bg-light mx-0 ">

                    <h3 className="text-start  mt-1 d-inline-block "> <i className="bi bi-file-earmark-pdf text-primary me-2 fs-1"></i>cvmkr</h3>
                    <button className="btn btn-danger mt-2 float-end" onClick={() => window.location.reload()}> <i className="bi bi-arrow-clockwise"></i> Reset</button>
                </div>


                <div className="row px-4 mb-2 mt-3">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="fname">First name : </label>
                            <input type="text" name="fname" id="fname" className="form-control" onChange={handleBanner} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="lname">Last name : </label>
                            <input type="text" name="lname" id="lname" className="form-control" onChange={handleBanner} />
                        </div>
                    </div>
                </div>
                <div className="row px-4 mb-4">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label htmlFor="professionalTitle">Profession Title : </label>
                            <input type="text" name="professionalTitle" id="professionalTitle" className="form-control" onChange={handleBanner} />
                        </div>
                    </div>
                </div>
                <h4 className="ms-2">Image : </h4>
                <div className="mb-3 form-group px-4">
                    <input className="form-control" type="file" id="formFile" onChange={updateImage} />
                </div>

                <EducationDetail />

                <RefrenceDetail />

                <PersonalInfo />

                <h4 className='my-4 ms-2'>About me : </h4>
                <div className="form-group px-4">
                    <textarea name="aboutMe" id="" cols="30" rows="3" className="form-control" onChange={handleBanner} />
                </div>

                <ExperienceDetail />

                <h4 className='my-4 ms-2'>Skills Title : </h4>
                <div className="form-group px-4">
                    <input type="text" className="form-control " name="skillsTitle" id="" onChange={handleBanner} />
                </div>

                <SoftwareInputs />
            </div>
        </>
    )
}

export default Input
