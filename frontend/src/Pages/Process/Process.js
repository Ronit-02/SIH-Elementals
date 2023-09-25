import './Process.css'

import React from 'react'
import Flow from '../../Images/process-flow.svg'

function Process() {
    return (
        <div className='process'>

            <img className='process-img' src={Flow} alt="flowchart" />

            <h1 className="process-heading">
                What is the process?
            </h1>

            <div className="process-content">

                <div className='process-1'>
                    <div className="process-header">
                        <h2>01</h2>
                        <h1>Call Garbage Collector</h1>
                    </div>
                    <div className='process-main' >
                        <img className="process-illustration" src={""} alt="steps" />
                        <div className="process-desc">
                            You call a garbage collector from the nearest loction informing about the 
                            amount of garbage you have collected. 
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Process