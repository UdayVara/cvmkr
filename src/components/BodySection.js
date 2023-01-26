import React from 'react'
import AboutMe from './AboutMe'
import Banner from './Banner'
import Experience from './Experience'
import SoftwareSkills from './SoftwareSkills'

function BodySection() {
    return (
        <>

            <div className="col-md-9 bg-white px-0 mx-0">
                <div className="container-fluid px-0 mx-0">
                    <Banner />
                    <div className="px-5 mt-2">
                        <AboutMe />

                        <Experience />
                        
                        <SoftwareSkills />

                    </div>
                </div>
            </div>

        </>
    )
}

export default BodySection
