import React, { useContext } from 'react'
import CvContext from '../context/CvContext'

function EducationDetail() {
    const fetchedData = useContext(CvContext)
    const {cvData,updateCvData} = fetchedData
    
    const handleChangeEducationDetails = (e) =>{
        
        updateCvData({ ...cvData, [e.target.name]: e.target.value })
        // console.log(cvData)
    }
    return (
        <>
            <h4 className="my-4 ms-2">Education Details : </h4>
            <div className="container-fluid px-4">
                <div className="mb-3 form-group">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Qualification Heading 1 : </label>
                    <input type="text" className="form-control" name='qh1' onChange={handleChangeEducationDetails} />
                </div>
                <div className="mb-3 form-group">
                    <label htmlFor="exampleFormControlInput1" className="form-label">University name 1 : </label>
                    <input type="text" className="form-control" name='un1' onChange={handleChangeEducationDetails} />
                </div>
                <div className="mb-3 form-group">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Year 1 : </label>
                    <input type="text" className="form-control" name='year1' onChange={handleChangeEducationDetails} />
                </div>
            </div>
            <div className="container-fluid px-4">
                <div className="mb-3 form-group">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Qualification Heading 2 : </label>
                    <input type="text" className="form-control" name='qh2' onChange={handleChangeEducationDetails} />
                </div>
                <div className="mb-3 form-group">
                    <label htmlFor="exampleFormControlInput1" className="form-label">University name 2 : </label>
                    <input type="text" className="form-control" name='un2' onChange={handleChangeEducationDetails} />
                </div>
                <div className="mb-3 form-group">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Year 2 : </label>
                    <input type="text" className="form-control" name='year2' onChange={handleChangeEducationDetails} />
                </div>
            </div>
        </>
    )
}

export default EducationDetail
