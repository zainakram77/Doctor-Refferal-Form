import React from 'react'
import { useState } from 'react';
import "./Medication.css"


function Medication() {
    const [isClicked, setIsClicked] = useState(false);
    const [buttonBgColor, setButtonBgColor] = useState(' #272770');
  const [prevBgColor, setPrevBgColor] = useState('');
  const [isClicked1, setIsClicked1] = useState(false);
  const [buttonBgColor1, setButtonBgColor1] = useState(' #272770');
const [prevBgColor1, setPrevBgColor1] = useState('');
const [isClicked2, setIsClicked2] = useState(false);
const [buttonBgColor2, setButtonBgColor2] = useState(' #272770');
const [prevBgColor2, setPrevBgColor2] = useState('');
const [isClicked3, setIsClicked3] = useState(false);
const [buttonBgColor3, setButtonBgColor3] = useState(' #272770');
const [prevBgColor3, setPrevBgColor3] = useState('');

    const btnFun = () => {
        if (isClicked) {
            setIsClicked(false);
            setButtonBgColor(prevBgColor);
          } else {
            setIsClicked(true);
            setPrevBgColor(buttonBgColor);
            setButtonBgColor(' #000000'); // Change to the desired background color when clicked
          }
    }
    const btnFun1 = () => {
        if (isClicked1) {
            setIsClicked1(false);
            setButtonBgColor1(prevBgColor1);
          } else {
            setIsClicked1(true);
            setPrevBgColor1(buttonBgColor1);
            setButtonBgColor1(' #000000'); // Change to the desired background color when clicked
          }
    }
    const btnFun2 = () => {
        if (isClicked2) {
            setIsClicked2(false);
            setButtonBgColor2(prevBgColor2);
          } else {
            setIsClicked2(true);
            setPrevBgColor2(buttonBgColor2);
            setButtonBgColor2(' #000000'); // Change to the desired background color when clicked
          }
    }
    const btnFun3= () => {
        if (isClicked3) {
            setIsClicked3(false);
            setButtonBgColor3(prevBgColor3);
          } else {
            setIsClicked3(true);
            setPrevBgColor3(buttonBgColor3);
            setButtonBgColor3(' #000000'); // Change to the desired background color when clicked
          }
    }
    return (
        <div className='medication' id='medication'>
            <div className="heading">

                <h3>Medications</h3>
            </div>
            <div className="heading2">
                <span>Medications</span>
            </div>
            <div className='form6'>
            <div className="call1">
                        <label htmlFor="">Does the patient rquire antibiotics prior to dental treatment</label>
                        <div className="button">
                            <button 
                                 className={`customButton ${isClicked ? 'clicked' : ''}`}
                                 style={{ backgroundColor: buttonBgColor }}
                            onClick={btnFun}
                            
                            >Yes</button>
                            <button
                             className={`customButton ${isClicked1 ? 'clicked1' : ''}`}
                             style={{ backgroundColor1: buttonBgColor1 }}
                        onClick={btnFun1}
                            >
                                
                                No</button>
                        </div>
                      </div>
                      <div className="parents">
                   <label htmlFor="">If Yes , please list and explain</label>
                   <input type="text" className='p1' placeholder='If Yes , please list and explain' />
                   </div>
                <div className="line"></div>
                <div className="call1">
                        <label htmlFor="">Is the patient Currently taking or has ben taken a biphosphonate medication in the past 2 years</label>
                        <div className="button">
                            <button
                             className={`customButton ${isClicked2 ? 'clicked2' : ''}`}
                             style={{ backgroundColor2: buttonBgColor2 }}
                        onClick={btnFun2}
                            >Yes</button>
                            <button
                              className={`customButton ${isClicked3 ? 'clicked3' : ''}`}
                              style={{ backgroundColor3: buttonBgColor3 }}
                         onClick={btnFun3}
                            >No</button>
                        </div>   
                      </div>
                      <div className="parents">
                   <label htmlFor="">If Yes , please list medication and date taken</label>
                   <input type="text" className='p1' placeholder='If Yes , please list medication and date taken' />
                   </div>
                <div className="line"></div>

            </div>
        </div>
    )
}

export default Medication