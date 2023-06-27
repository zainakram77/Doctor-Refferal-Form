import React from 'react'
import "./Patient.css"
import { useState } from 'react'
function Patient() {
    const [isFieldEmpty, setIsFieldEmpty] = useState(false);

    const [formData, setFormData] = useState({
        namefirst: "",
        namelast:"",
        email: "",
        dob: "",
        phone: "",
        phone1: "",
        docName:"",
        

    })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setIsFieldEmpty(false);
    };
    const [errors, setErrors] = useState({});
       
        const namefirstValidation = () => {
            const {namefirst} = formData;
            if (!namefirst.trim() === "") {
                // errors.namefirst = ' First Name is required';
                setIsFieldEmpty(true);
                return;
            }
            setErrors(errors);
            return Object.keys(errors).length === 0;
        }
        const namelastValidation = () => {
            const {namelast} = formData;
            if (!namelast.trim()) {
                errors.namelast = ' Last  Name is required';
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
        const dobValidation = () => {
            const {dob} = formData;
            if (!dob.trim()) {
                errors.dob = "DOB is required"
            } else if (dob.length > 10) {
                errors.dob = "enter a valid dob like 10-12-2024 "
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
  return (
         <div className="main" id='patient'>
               <div className="heading">
   
                <h3>Patient Information</h3>
               </div>
               <div className="heading2">
                <span>Patient Information</span>
               </div>
               <div className="form">
                <div className="name">
                    <label htmlFor="">Name</label>
                    <div className="input">
                        <input type="text" className='n1' placeholder='First Name'
                            name='namefirst'
                            
                            value={formData.namefirst}
                            onChange={handleChange}
                            onClick={namefirstValidation}
                        />
                        <input type="text" className='n1'
                           name='namelast'
                           value={formData.namelast}
                           onChange={handleChange}
                           onClick={namelastValidation}
                        placeholder='Second Name' />
                    </div>
                    
                </div>
                <div className="line"></div>
                   <div className="dob">
                    <label htmlFor="">Date Of Birth</label>
                    <input type="date" className='d1'
                     name='dob'
                     value={formData.dob}
                     onChange={handleChange}
                     onClick={dobValidation}
                    id="" />
                   </div>
                   <div className="line"></div>
                   <div className="parents">
                   <label htmlFor="">Parents/Guardian</label>
                   <input type="text" className='p1' placeholder='Parents/ Guardian' />
                   </div>
                   <div className="line"></div>
                   <div className="phone">
                    <label htmlFor="">Phone</label>
                    <div className="input">
                    <input type="number" className='ph1' 
                    
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    onClick={phoneValidation}
                    placeholder='Phone No' />
                    <input type="number" className='ph1' placeholder='Secondary Phone No' />
                    </div>
                   
                   </div>
                   <div className="line"></div>
                   <div className="email">
                    <label htmlFor="">Email Address</label>
                    <input type="email" className='e1' name="" id="" placeholder='Email' />
                   </div>
                   <div className="line"></div>
                   <div className="Paddress">
                    <label htmlFor="">Address</label>
                    <input type="text" className='a1' placeholder='Address' />
                   </div>
                   <div className="line"></div>
                   
                      <div className="call1">
                        <div>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Please Call Patient</label>
                        </div>
                  
                         <div>
                         <input type="checkbox" name="" id="" />
                        <label htmlFor=""> Patient Wil Call </label>
                         </div>
                  
                      </div>
                      <div className="line"></div>
                      <div className="errors">
                      {errors.namelast && <span style={{ color: "white", border: '2px solid white' , width:"250px"  }}>{errors.namelast}</span>}
                   {errors.namefirst && <span style={{ color: "white", border: '2px solid white' , width:"250px" }}>{errors.namefirst}</span>}
                   {errors.dob && <span style={{ color: "white", border: '2px solid white' , width:"250px"  }}>{errors.dob}</span>}
                   {errors.phone && <span style={{ color: "white", border: '2px solid white', width:"250px"  }}>{errors.phone}</span>}
                      </div>
                    
                      
                       
                       
                        
                    
                      
                   
               </div>
         </div>
    )
}

export default Patient