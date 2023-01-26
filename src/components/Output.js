import React from 'react'
import BodySection from './BodySection'
import SideSection from './SideSection'
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

function Output() {

    const printCv = () => {
        html2canvas(document.querySelector("#originalCv")).then((canvas) => {
            let base64image=canvas.toDataURL('images/jpg')
            console.log(base64image)
            let pdf = new jsPDF("p",'px',[700,760])
            pdf.addImage(base64image,'JPG',0,0,700,760)
            pdf.save("yourcv.pdf")
        })
    }
    return (
        <>
            <div className="col-md-6 bg-dark" style={{ height: "100vh" }}>
                <button className="mt-2 d-block ms-auto btn btn-light" title='Download PDF' onClick={printCv}><i className="bi bi-download text-primary me-1"></i> Download </button>

                <div className="mx-lg-auto mt-4 w-100" style={{ height: "85vh", maxWidth: "35rem" }} id="originalCv">
                    <div className="container-fluid">
                        <div className="row">
                            <SideSection />
                            <BodySection />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Output
