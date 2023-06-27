import React from 'react'
import "./PatientInstruction.css"
function PatientInstruction() {
    return (
        <div className='patientInstruction'>
            <div className="heading">

                <h3>Patient Instruction</h3>
            </div>
            <div className="heading2">
                <span>Patient Instruction</span>
            </div>
            <div className="form8">
            <ul>
                                <li>Please notify our office at least 48 hours in advance if you must cancel your appointment.</li>
                                <li>Please email refferals and X-rays to <span>fresno@fresnooralsurgery.com</span></li>
                                <li>If undergoing IV anerthesia , do not eat or drinnk anything for atleast 8 hours before the time of our surgery. </li>
                                <li>If undergoing IV anerthesia , please remove contact lenses</li>
                                <li>If undergoing IV anerthesia , you must arrangments someone have with you who can remain in the office during your surgery and then drive your home and look after you the day of surgery</li>
                                <li>Minors must be accompanied by a parent or legal guardien </li>
                            </ul>
                            <div className="line"></div>
    
            </div>

        </div>
    )
}

export default PatientInstruction