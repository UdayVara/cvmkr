import React, { useContext } from 'react'
import CvContext from '../context/CvContext'

function Experience() {
    const fetchedData = useContext(CvContext)
    const { cvData } = fetchedData
    return (
        <>
            <div id="experience">


                <h6 style={{ fontSize: "1rem" }}>WORK EXPERIENCE</h6>
                <hr className="my-1" />
                <div className="row" id="experience1">
                    <div className="col-md-3 mt-1">
                        <h6 style={{ fontSize: "0.6rem" }}>{cvData.work1year === "" ? "2009-2012" : cvData.work1year}</h6>
                    </div>
                    <div className="col-md-9 mt-1">
                        <h6 className="mb-0" style={{ fontSize: "0.6rem" }}>
                            {cvData.work1designation === "" ? "JOB POSITION HERE" : cvData.work1designation}
                        </h6>
                        <h6 style={{ fontSize: "0.6rem" }}>
                            {cvData.work1company === "" ? "Company Name/California USA" : cvData.work1company}
                        </h6>
                        <p className="" style={{ fontSize: "0.5rem" }}>
                            {cvData.work1description === "" ? ` Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Illum consequuntur architecto minima
                        consectetur quaerat quos fuga nostrum in? Cupiditate
                        quod architecto eveniet? Voluptatibus`: cvData.work1description}
                        </p>
                    </div>
                </div>
                <div id="experience2">


                    <div className="row" >
                        <div className="col-md-3 mt-1">
                            <h6 style={{ fontSize: "0.6rem" }}> {cvData.work2year === "" ? "2014-Present" : cvData.work2year} </h6>
                        </div>
                        <div className="col-md-9 mt-1">
                            <h6 className="mb-0" style={{ fontSize: "0.6rem" }}>
                                {cvData.work2designation === "" ? "JOB POSITION HERE" : cvData.work2designation}
                            </h6>
                            <h6 style={{ fontSize: "0.6rem" }}>
                                {cvData.work2company === "" ? "Company Name/California USA" : cvData.work2company}
                            </h6>
                            <p className="" style={{ fontSize: "0.5rem" }}>
                                {cvData.work2description === "" ? ` Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Illum consequuntur architecto minima
                        consectetur quaerat quos fuga nostrum in? Cupiditate
                        quod architecto eveniet? Voluptatibus`: cvData.work2description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience
