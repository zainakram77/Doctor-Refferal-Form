import React from 'react'
import "./Appointment.css"
import { useState } from 'react';

function Appointment() {
  const [isFieldEmpty, setIsFieldEmpty] = useState(false);
 

  const [formData, setFormData] = useState({
    date: "",
    time: ""

  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsFieldEmpty(false);
  };

  const [errors, setErrors] = useState({});
  const dateValidation = () => {
    const { date } = formData;
    if (!date.trim()) {
      errors.date = "Date is Required"
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }
  const timeValidation = () => {
    const { time } = formData;
    if (!time.trim()) {
      errors.time = "Time is Required"
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }
  return (
    <div className="main">
      <div className="form9">
        <div className="name">
          <label htmlFor="">Appointment Date / Time</label>
          <div className="input">
            <input type="date"

              name='date'
              value={formData.date}
              onChange={handleChange}
              onClick={dateValidation}
              className='n2' placeholder='Date' />


            <input type="time"
              name='time'
              value={formData.time}
              onChange={timeValidation}
              onClick={timeValidation}
              className='n2' placeholder='Time' />
              
           


          </div>
          

        </div>
        <div className="line"></div>
              <div className="errors">
              {errors.time && <span style={{ color: "white", border: '2px solid red' }}>{errors.time}</span>}
            {errors.date && <span style={{ color: "white", border: '2px solid red' }}>{errors.date}</span>}
              </div>
      </div>
    </div>
  )
}

export default Appointment