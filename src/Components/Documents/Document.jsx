import React from 'react'
import "./Document.css"
function Document() {
    return (
        <div className='document'>
            <div className="heading">

                <h3>Document</h3>
            </div>
            <div className="heading2">
                <span>Document</span> 
            </div>
            <div className='form7'>
            <div className="parents">
                   <label htmlFor="">Upload Insurance Card (Front)</label>
                   <input type="file" className='p1' placeholder='Upload Insurance Card (Front)' />
                   </div>
                   <div className="line"></div>

                   <div className="parents">
                   <label htmlFor="">Upload Insurance Card (Back)</label>
                   <input type="file" className='p1' placeholder='Upload Insurance Card (Back)' />
                   </div>
                   <div className="line"></div>

                   <div className="parents">
                   <label htmlFor="">Upload X-rays 1 </label>
                   <input type="file" className='p1' placeholder='Upload X-rays 1' />
                   </div>
                   <div className="line"></div>
                   <div className="parents">
                   <label htmlFor="">Upload X-rays 2</label>
                   <input type="file" className='p1' placeholder='Upload X-rays' />
                   </div>
                   <div className="line"></div>
                   <div className="parents">
                   <label htmlFor="">Upload X-rays 3</label>
                   <input type="file" className='p1' placeholder='Upload X-rays' />
                   </div>
                   <div className="line"></div>
            </div>

        </div>
    )
}
export default Document