import React from 'react'
import "./Instruction.css"
import { useState } from 'react'

function Instruction() {



  
    return (
        <div className='instruction' id='instruction'>
            <div className="heading">

                <h3>Special Instructions </h3>
            </div>
            <div className="heading2">
                <span>Special Instructions</span>
            </div>
            <div className='form5'>
                <input type="text" className='s1' 
                   
                placeholder='Comments' />
            </div>
        </div>
    )   
}

export default Instruction