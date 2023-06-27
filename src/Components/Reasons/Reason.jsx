import React from 'react'
import "./Reason.css"
import { useState } from 'react';
function Reason() {


    const [showList, setShowList] = useState(false);
    const [showList1, setShowList1] = useState(false);
    const [showList2, setShowList2] = useState(false);
    const [showList3, setShowList3] = useState(false);
    const [showList4, setShowList4] = useState(false);




    const handleRadioClick = () => {
        setShowList(true);

    };
    const handleRadioClick1 = () => {
        setShowList1(true);
    };
    const handleRadioClick2 = () => {
        setShowList2(true);
    };
    const handleRadioClick3 = () => {
        setShowList3(true);
    };
    const handleRadioClick4 = () => {
        setShowList4(true);
    };
    return (
        <div className='main' id='reason'>
            <div className='heading'>
                <h3>Reasons For Referral</h3>
            </div>
            <div className='heading2'>
                <span>Reasons For Referral</span>
            </div>
            <div className='form3'>
                
                    <div className="oral">
                        <input type="radio" name="" onClick={handleRadioClick} id="" />

                        <label htmlFor="">ORAL SURGERY</label><br />
                        {showList && (
                            <div> <input type="checkbox" name="" id="" />
                                <label htmlFor="">Extractions/Wisdoms</label><br />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Impactions</label><br />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Implants</label><br />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Exposure Bond</label><br />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Alveoplasty</label><br />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Blopsy</label><br />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Bone/CT Grafting</label><br />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Tori removal</label><br />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Sinus Lift/Close</label><br /></div>
                        )}

                    </div>
                    <div className="endo">
                        <input type="radio" name="" onClick={handleRadioClick1} id="" />


                        <label htmlFor="">ENDO</label><br />
                        {showList1 && (
                            <div> <input type="checkbox" name="" id="" />ff
                                <label htmlFor="">Root Canal</label><br />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Retreatment</label><br />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Apicoectomy</label><br />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Restorative repair</label><br />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Post removal </label><br />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Retrograde filling</label><br /></div>
                        )}

                    </div>
                    <div className="pedo">
                        <input type="radio" name="" onClick={handleRadioClick2} id="" />

                        <label htmlFor="">PEDO</label><br />
                        {showList2 && (
                            <div>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Uncooperative</label><br />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Caries/Decay</label><br />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">PPY/SSC</label><br />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Extractions</label><br />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Too Young </label><br />
                            </div>
                        )}

                    </div>
                    <div className="perio">
                        <input type="radio" name="" onClick={handleRadioClick3} id="" />
                        <label htmlFor="">PERIO</label><br />
                        {showList3 && (
                            <div>
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">GT Regeneration</label><br />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Gingivectomy/plasty</label><br />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Scalling/ Root Planing</label><br />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Perio Maintenance</label><br />
                            </div>
                        )}

                    </div>
                    <div className="other">
                                <input type="radio" name="" onClick={handleRadioClick4} id="" />

                                <label htmlFor="">OTHER</label><br />
                                {showList4 && (
                                    <div>
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">CBCT Scan</label><br />
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">3D Image</label><br />
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">Proface Image</label><br />
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">Ceph</label><br />
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">Digital Denture</label><br />
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="">Sedation</label><br />
                                    </div>
                                )}


                            </div>
                            
            
                
                
            </div>
        </div>
    )
}

export default Reason