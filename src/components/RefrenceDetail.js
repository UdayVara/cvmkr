import React, { useContext } from 'react'
import CvContext from '../context/CvContext'

function RefrenceDetail() {
    const fetchedData = useContext(CvContext);
    const { cvData, updateCvData } = fetchedData
    const handleChangeRefrenceDetails = (e) => {
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
            <h4 className="my-4 ms-2">Refrence Details : <div className="float-end mt-2 d-inline-block fs-5 form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked onClick={() => { toggleElement("outputRefrenceSection") }} />
            </div></h4>
            <div className="container-fluid px-4">
                <div className="mb-3 form-group">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Refrence Name 1 : </label>
                    <input type="text" className="form-control" name='name1' onChange={handleChangeRefrenceDetails} />
                </div>
                <div className="mb-3 form-group">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Designation of a person 1 : </label>
                    <input type="text" className="form-control" name='designation1' onChange={handleChangeRefrenceDetails} />
                </div>
                <div className="mb-3 form-group">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Contact 1 : </label>
                    <input type="text" className="form-control" name='contact1' onChange={handleChangeRefrenceDetails} />
                </div>
            </div>

                <h3 className='ms-2'>Refrence 2 : <div className="float-end mt-2  d-inline-block fs-5  form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked onClick={() => { toggleElement("refrence2") }} />
                    </div></h3>
            <div className="container-fluid px-4">
                <div className=" mt-3 mb-3 form-group">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Refrence Name 2 : </label>
                    <input type="text" className="form-control" name='name2' onChange={handleChangeRefrenceDetails} />
                </div>
                <div className="mb-3 form-group">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Designation of a person 2 : </label>
                    <input type="text" className="form-control" name='designation2' onChange={handleChangeRefrenceDetails} />
                </div>
                <div className="mb-3 form-group">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Contact 2 : </label>
                    <input type="text" className="form-control" name='contact2' onChange={handleChangeRefrenceDetails} />
                </div>
            </div>
        </>
    )
}

export default RefrenceDetail
