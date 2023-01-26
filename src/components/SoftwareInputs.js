import React, { useContext } from 'react'
import CvContext from '../context/CvContext'

function SoftwareInputs() {
    const fetchedData = useContext(CvContext)
    const { cvData, updateCvData } = fetchedData
    const handleSoftwareSkills = (e) => {
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
            <h4 className="my-4 ms-2">Skill Values : </h4>
            <div className="container-fluid px-4 ">
                <div className="form-group">
                    <label htmlFor="" className='pt-1'>Skill 1 Title : <div className="ms-auto d-inline-block">
                        <input className="ms-2 form-check-input fs-5 mt-1 mb-2" type="checkbox" value="" id="flexCheckChecked" defaultChecked onClick={() => { toggleElement("p1") }} /></div></label>
                    <input type="text" name="skill1title" id="skill1title" className="form-control mt-2" onChange={handleSoftwareSkills} />
                    <label htmlFor="skill1" className="form-label mt-3">Skill 1 value : </label>
                    <input type="range" className="form-range" min="0" max="100" id="skill1" name='skill1value' onChange={handleSoftwareSkills} />
                </div>
                <div className="form-group">
                    <label htmlFor="" className='pt-1'>Skill 2 Title : <div className="ms-auto d-inline-block">
                        <input className="ms-2 form-check-input fs-5 mt-1 mb-2" type="checkbox" value="" id="flexCheckChecked" defaultChecked onClick={() => { toggleElement("p2") }} /></div></label>
                    <input type="text" name="skill2title" id="skill2title" className="form-control mt-2" onChange={handleSoftwareSkills} />
                    <label htmlFor="skill2" className="form-label mt-3">Skill 2 value : </label>
                    <input type="range" className="form-range" min="0" max="100" id="skill2" name='skill2value' onChange={handleSoftwareSkills} />
                </div>
                <div className="form-group">
                    <label htmlFor="" className='pt-1'>Skill 3 Title : <div className="ms-auto d-inline-block">
                        <input className="ms-2 form-check-input fs-5 mt-1 mb-2" type="checkbox" value="" id="flexCheckChecked" defaultChecked onClick={() => { toggleElement("p3") }} /></div></label>
                    <input type="text" name="skill3title" id="skill1title" className="form-control mt-2" onChange={handleSoftwareSkills} />
                    <label htmlFor="skill3" className="form-label mt-3">Skill 3 value : </label>
                    <input type="range" className="form-range" min="0" max="100" id="skill3" name='skill3value' onChange={handleSoftwareSkills} />
                </div>
                <div className="form-group">
                    <label htmlFor="" className='pt-1'>Skill 4 Title : <div className="ms-auto d-inline-block">
                        <input className="ms-2 form-check-input fs-5 mt-1 mb-2" type="checkbox" value="" id="flexCheckChecked" defaultChecked onClick={() => { toggleElement("p4") }} /></div></label>
                    <input type="text" name="skill4title" id="skill1title" className="form-control mt-2" onChange={handleSoftwareSkills} />
                    <label htmlFor="skill4" className="form-label mt-3">Skill 4 value : </label>
                    <input type="range" className="form-range" min="0" max="100" id="skill4" name='skill4value' onChange={handleSoftwareSkills} />
                </div>
                <div className="form-group">
                    <label htmlFor="" className='pt-1'>Skill 5 Title : <div className="ms-auto d-inline-block">
                        <input className="ms-2 form-check-input fs-5 mt-1 mb-2" type="checkbox" value="" id="flexCheckChecked" defaultChecked onClick={() => { toggleElement("p5") }} /></div></label>
                    <input type="text" name="skill5title" id="skill1title" className="form-control mt-2" onChange={handleSoftwareSkills} />
                    <label htmlFor="skill5" className="form-label mt-3">Skill 5 value : </label>
                    <input type="range" className="form-range" min="0" max="100" id="skill5" name='skill5value' onChange={handleSoftwareSkills} />
                </div>
                <div className="form-group">
                    <label htmlFor="" className='pt-1'>Skill 6 Title : <div className="ms-auto d-inline-block">
                        <input className="ms-2 form-check-input fs-5 mt-1 mb-2" type="checkbox" value="" id="flexCheckChecked" defaultChecked onClick={() => { toggleElement("p6") }} /></div></label>
                    <input type="text" name="skill6title" id="skill1title" className="form-control mt-2" onChange={handleSoftwareSkills} />
                    <label htmlFor="skill6" className="form-label mt-3">Skill 6 value : </label>
                    <input type="range" className="form-range" min="0" max="100" id="skill6" name='skill6value' onChange={handleSoftwareSkills} />
                </div>
            </div>
        </>
    )
}

export default SoftwareInputs
