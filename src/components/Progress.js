import React from 'react'

function Progress(props) {
    return (
        <>
        <div id={props.id}>

            <h6 style={{ fontSize: "0.7rem" }} className="mt-2">
                {props.title}
            </h6>
            <div className="progress border border-1 border-secondary my-1" style={{ height: "0.6rem" }}>
                <div className="progress-bar" role="progressbar" aria-label="Basic example" style={{ width: `${props.value}%` }} aria-valuemax="100"></div>
            </div>
        </div>
        </>
    )
}

export default Progress
