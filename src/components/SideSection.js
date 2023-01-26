import React, { useContext } from 'react'
import CvContext from '../context/CvContext'

function SideSection() {
    const fetchedData = useContext(CvContext)
    const { cvData } = fetchedData
    return (
        <>
            <div className="col-md-3 bg-primary text-light px-0" style={{ height: "85vh", maxWidth: "35rem" }}>

                <img src="cv.jpg" className="img-fluid w-100 " id='dp' alt=" unavailable" style={{ minHeight: "9.4rem" }} />
                <div className="mt-3 px-lg-3 px-2" >
                    <h5 style={{ fontSize: "1rem" }}>Education</h5>
                    <hr className="my-1 text-light" />
                    <h6 className="ms-lg-2 ms-2 my-1" style={{ fontSize: "0.7rem", wordWrap: 'break-word' }}>{cvData.qh1 === "" ? "Enter your Major" : cvData.qh1}</h6>
                    <h6 className="ms-lg-2 ms-2 my-1" style={{ fontSize: "0.4rem", wordWrap: 'break-word' }}>{cvData.un1 === "" ? "Name of your University" : cvData.un1}</h6>
                    <h6 className="ms-lg-2 ms-2 " style={{ fontSize: "0.4rem", wordWrap: 'break-word' }}>{cvData.year1 === "" ? "2017-2020" : cvData.year1}</h6>


                    <h6 className="ms-lg-2 ms-2 my-1" style={{ fontSize: "0.7rem", wordWrap: 'break-word' }}>{cvData.qh2 === "" ? "Enter your Major" : cvData.qh2}</h6>
                    <h6 className="ms-lg-2 ms-2 my-1" style={{ fontSize: "0.4rem", wordWrap: 'break-word' }}>{cvData.un2 === "" ? "Name of your University" : cvData.un2}</h6>
                    <h6 className="ms-lg-2 ms-2 " style={{ fontSize: "0.4rem", wordWrap: 'break-word' }}>{cvData.year2 === "" ? "2017-2020" : cvData.year2}</h6>
                </div>
                <div className="mt-2 px-lg-3 px-2" id='outputRefrenceSection'>
                    <h5 style={{ fontSize: "1rem" }}>Reference</h5>
                    <hr className="my-1 text-light" />
                    <h6 className="ms-lg-2 ms-2 my-1" style={{ fontSize: "0.7rem", wordWrap: 'break-word' }}>{cvData.name1 === "" ? "Sara Taylore" : cvData.name1}</h6>
                    <h6 className="ms-lg-2 ms-2 my-1" style={{ fontSize: "0.4rem", wordWrap: 'break-word' }}>{cvData.designation1 === "" ? "Director | Company Name" : cvData.designation1}</h6>
                    <h6 className="ms-lg-2 ms-2 " style={{ fontSize: "0.4rem", wordWrap: 'break-word' }}>{cvData.contact1 === "" ? "+1234 56789" : cvData.contact1}</h6>

                    <div id="refrence2">
                        <h6 className="ms-lg-2 ms-2 my-1" style={{ fontSize: "0.7rem", wordWrap: 'break-word' }}>{cvData.name2 === "" ? "Mike Anderson" : cvData.name2}</h6>
                        <h6 className="ms-lg-2 ms-2 my-1" style={{ fontSize: "0.4rem", wordWrap: 'break-word' }}>{cvData.designation2 === "" ? "Web Developer | Company" : cvData.designation2}</h6>
                        <h6 className="ms-lg-2 ms-2 " style={{ fontSize: "0.4rem", wordWrap: 'break-word' }}>{cvData.contact2 === "" ? "+1234 56789" : cvData.contact2}</h6>
                    </div>
                </div>

                <div className="mt-3 px-lg-3 px-2">
                    <hr className="my-1 text-light" />
                    <h6 className="ms-lg-2 ms-2 my-0" style={{ fontSize: "0.7rem", wordWrap: 'break-word' }}>Phone</h6>
                    <h6 className="ms-lg-2 ms-2 " style={{ fontSize: "0.4rem", wordWrap: 'break-word' }}>{cvData.phone === "" ? "+1234 56789" : cvData.phone}</h6>

                    <h6 className="ms-lg-2 ms-2 my-0" style={{ fontSize: "0.7rem", wordWrap: 'break-word' }}>Email</h6>
                    <h6 className="ms-lg-2 ms-2 " style={{ fontSize: "0.4rem", wordWrap: 'break-word' }}>{cvData.email === "" ? "youremail@gmail.com" : cvData.email}</h6>

                    <div id="website" className="my-0">

                        <h6 className="ms-lg-2 ms-2 my-0" style={{ fontSize: "0.7rem", wordWrap: 'break-word' }}>Website</h6>
                        <h6 className="ms-lg-2 ms-2 " style={{ fontSize: "0.4rem", wordWrap: 'break-word' }}>{cvData.siteurl === "" ? "yourwebsite.com" : cvData.siteurl}</h6>
                    </div>

                    <h6 className="ms-lg-2 ms-2 my-0" style={{ fontSize: "0.7rem", wordWrap: 'break-word' }}>Address</h6>
                    <h6 className="ms-lg-2 ms-2 my-0" style={{ fontSize: "0.4rem", wordWrap: 'break-word' }}>{cvData.address === "" ? "permanent address,<br>State City/Zip Code-454" : cvData.address} </h6>
                </div>
            </div>
        </>
    )
}

export default SideSection
