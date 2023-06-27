import React from 'react'
import "./Insurance.css"
import { useRef } from 'react'

function Insurance() {
  const divRef = useRef(null);
  const divRef1 = useRef(null);
  const divRef2 = useRef(null);



  const addInsurance = () => {
      const newLabel = document.createElement('label');
      const newInput = document.createElement('input'); <br />
      const newLabel1 = document.createElement('label');
      const newInput1 = document.createElement('input');
      const newLabel2 = document.createElement('label');
      const newInput2 = document.createElement('input');
      const newLabel3 = document.createElement('label');
      const newInput3 = document.createElement('input');



      newLabel.innerText = 'Primary Insurance Company:';
      newLabel1.innerText = "Insurance Id / SS#";
      newLabel2.innerText = "SS#";
      newLabel3.innerText = "Primary Insured Date Of Birth";
      newInput1.placeholder = "Insurance Id"
      newInput2.placeholder = "SS#"
      newInput3.type = "date"
      newInput.className = "i1"
      newInput1.className = "id1"
      newInput2.className = "id1"
      newInput3.className = "d1"

      divRef.current.appendChild(newLabel);
      divRef.current.appendChild(newInput);
      divRef.current.appendChild(document.createElement('br'));
      divRef1.current.appendChild(newLabel1);
      divRef1.current.appendChild(newInput1);
      
      divRef1.current.appendChild(newInput2);
      divRef2.current.appendChild(document.createElement('br'));

      divRef2.current.appendChild(newLabel3);
      divRef2.current.appendChild(newInput3);


  }



  return (
    <div className="main1" id='insurance'>

        <div className="heading">
            <h3>Insurance Details</h3>
        </div>
        <div className="heading2">
            <span>Insurance Details</span>

        </div>
        <div className="form1">
            <div className="insuranceCompany">
                  <label htmlFor="">Primary Insurance Company</label>
                      <input type="text" name="" id="" className='i1' placeholder='Insurance Company' />
            </div>
            <div className="line"></div>
            <div className="insuranceId"> 
                <label htmlFor="">Primary Insurance ID / SS#</label>
                <div className="input1">
                <input type="text" className='id1' placeholder='Insurance ID' />
                <input type="text" className='id1' placeholder='SS#' />
                </div>
            </div>
            <div className="line"></div>
            <div className="insuranceDOB">
                <label htmlFor="">Primary Insurance Date Of Birth</label>
                <input type="date" name="" id="" className='d1'  placeholder=' Insurance Date Of Birth'/>
            </div>
              <div className="line"></div>
              <div className='insurance'>
                  <div  ref={divRef} className='insuranceCompany'></div>
                  <div className='line'></div>
                  <div ref={divRef1} className='insuranceId'></div>
                  <div className='line'></div>
                      <div ref={divRef2} className='insuranceDOB'></div>

              </div>
                
              <div className="insuranceButton">
                <label htmlFor="">Want To Add Another Insurance</label>
                <button className='btn1' onClick={addInsurance} >ADD</button>
              </div>
              <div className="line"></div>
        </div>
    </div>
  )
}

export default Insurance