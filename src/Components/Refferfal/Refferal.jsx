import React from 'react'
import "./Refferal.css"
import { useState } from 'react';

const Refferal = () => {
    const [errors, setErrors] = useState({});

    
   
    const [isFieldEmpty, setIsFieldEmpty] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
      
        phone1: "",
        docName:"",
        

    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setIsFieldEmpty(false);
    };
    const phone1Validation = () => {
        const {phone1} = formData;
        if (!phone1.trim()) {
            errors.phone1 = "phone is required"
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    } 

    const docNameValidation = () =>{
        const {docName} = formData;
        if (!docName.trim()) {
            errors.docName = " Name  is required"
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }
    const phoneValidation = () => {
        const {phone} = formData;
        if (!phone.trim()) {
            errors.phone = "phone is required"
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    } 
    const emailValidation = () => {
        const {email } = formData;
        if (!email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid';
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;

    }
    return (
        <div className="main" id='reffer'>
            <div className="heading">
                <h3>Reffering Information</h3>
            </div>
            <div className="heading2">
                <span>Reffering Information</span>

            </div>
            <div className='form2'>
                <div className='refferal'>
                    <label htmlFor="">Reffered By</label>
                    <input type="text" name="" id="" className='i1' placeholder='Reffered By' />
                </div>
                <div className="line"></div>
                <div className='refferal-doctor'>
                <label htmlFor="">Reffered Doctor Name </label>
                <input type="text" 
                    name='docName'
                    value={formData.docName}
                    onChange={docNameValidation}
                    onClick={docNameValidation}
                    onBlur={docNameValidation}
                 className='i1' placeholder='Reffered Doctor Name' />
            
            </div>
            <div className="line"></div>
            
            <div className="phone">
                    <label htmlFor="">Phone</label>
                    <div className="input">
                    <input type="number" className='ph1'
                      value={formData.phone1}
                      onChange={handleChange}
                      onClick={phone1Validation}
                      onBlur={docNameValidation}
                      
                      name='phone1'

                    placeholder='Phone No' />
                    <input type="number" className='ph1' placeholder='Secondary Phone No' />
                    </div>
                   
                   </div>
                   <div className="line"></div>

                   <div className="email">
                    <label htmlFor="">Email Address</label>
                    <input type="email" className='e1' 
                        
                            name='email'

                            value={formData.email}
                            onChange={handleChange}
                            onClick={emailValidation}
                            onBlur={docNameValidation}
                     id="" placeholder='Email' />
                   </div>
                   <div className="line"></div>
                   <div className="errors">
                   {errors.phone1 && <span style={{ color: "white", border: '2px solid white', width:"250px"  }}>{errors.phone1}</span>} 
                    {errors.docName && <span style={{ color: "white", border: '2px solid white' , width:"250px"  }}>{errors.docName}</span>}
                    {errors.email && <span style={{ color: "white", border: '2px solid white' , width:"250px"  }}>{errors.email}</span>}
                   </div>
                   
            </div>
           
        </div>
    
    
  )
}

export default Refferal