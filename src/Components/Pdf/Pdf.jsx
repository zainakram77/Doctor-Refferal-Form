import React from 'react'
import "./Pdf.css"
import Logo from "../../img/HARAZ DENTAL GROUP.png"
import T1 from "../../img/1.svg"
import T2 from "../../img/2.svg"
import T3 from "../../img/3.svg"
import T4 from "../../img/4.svg"
import T5 from "../../img/5.svg"
import T6 from "../../img/6.svg"
import T7 from "../../img/7.svg"
import T8 from "../../img/8-01.svg"
import T9 from "../../img/9.svg"
import T10 from "../../img/10.svg"
import T11 from "../../img/11.svg"
import T12 from "../../img/12.svg"
import T13 from "../../img/13.svg"
import T14 from "../../img/14.svg"
import T15 from "../../img/15.svg"
import T16 from "../../img/16.svg"
import T17 from "../../img/17.svg"
import T18 from "../../img/18.svg"
import T19 from "../../img/19.svg"
import T20 from "../../img/20.svg"
import T21 from "../../img/21.svg"
import T22 from "../../img/22.svg"
import T23 from "../../img/23.svg"
import T24 from "../../img/24.svg"
import T25 from "../../img/25.svg"
import T26 from "../../img/26.svg"
import T27 from "../../img/27.svg"
import T28 from "../../img/28.svg"
import T29 from "../../img/29.svg"
import T30 from "../../img/30.svg"
import T31 from "../../img/31.svg"
import T32 from "../../img/32.svg"
import A from "../../img/A.svg"
import B from "../../img/B.svg"
import C from "../../img/C.svg"
import D from "../../img/D.svg"
import E from "../../img/E.svg"
import F from "../../img/F.svg"
import G from "../../img/G.svg"
import H from "../../img/H.svg"
import I from "../../img/I.svg"
import J from "../../img/J.svg"
import K from "../../img/K.svg"
import L from "../../img/L.svg"
import M from "../../img/M.svg"
import N from "../../img/N.svg"
import O from "../../img/O.svg"
import P from "../../img/P.svg"
import Q from "../../img/Q.svg"
import R from "../../img/R.svg"
import S from "../../img/S.svg"
import T from "../../img/T.svg"
const Pdf = (formData) => {
    return (
        <div className="pdf">
            <div className="pdfheader">
                <div className="Logo">
                    <img src={Logo} width={200} alt="" />
                </div>
                <div className="text">
                    <span>5640 N. Fresno Street Suite 101 • Fresno, CA 93710</span><br />
                    <span>Phone: 559-447-5781 • Fax: 559-272-0370</span><br />
                    <span>daralztedds@gmail.com  • www.wisdomteethaway.com</span>
                </div>
            </div>
            <div className="pdfPatient">
                <div className="header3">
                    <span>PATIENT INFORMATION:</span>
                </div>
                <div className="pdfForm">
                    <label htmlFor="">Today Date</label>
                    <input type="text" />
                    <label htmlFor="">First Name</label>
                    <input type="text" value={formData.namefirst} />

                    <label htmlFor="">Last Name</label>
                    <input type="text" />
                    <label htmlFor="">Date of Birth</label>
                    <input type="text" /><br />
                    <label htmlFor="">Parents/Guardians Name</label>
                    <input type="text" id='g1' /><br />
                    <label htmlFor=""></label>
                    <label htmlFor="">Phone</label>
                    <input type="text" />
                    <label htmlFor="">Seconary Phone</label>
                    <input type="text" />
                    <label htmlFor="">Email</label>
                    <input type="text" />
                    <label htmlFor="">Address</label>
                    <input type="text" id='a1' /><br />
                    <div className='check'>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Please Call Patient</label>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Patient Will Call</label>
                    </div>


                </div>
            </div>
            <div className="pdfInsurance">
                <div className="header3">
                    <span>Insurance Details</span>
                </div>
                <div className="pdfForm">
                    <label htmlFor="">Primary Insurance Company Name</label>
                    <input type="text" id='i1' /><br />
                    <label htmlFor="">Primary Insured ID</label>
                    <input type="text" id='i2' />
                    <label htmlFor="">Primary Insured SS#</label>
                    <input type="text" />
                    <label htmlFor="">Primary Insured DOB</label>
                    <input type="text" name="" id="" /><br />
                    <label htmlFor="">Primary Insured ID(If applicable)</label>
                    <input type="text" id='i3' />

                    <label htmlFor="">Primary Insured DOB (If applicable)</label>
                    <input type="text" name="" id="" /><br />


                </div>

            </div>
            <div className="pdfReffer">
                <div className="header3">
                    <span>REFFERING INFORMATION:</span>
                </div>
                <div className="pdfForm2">
                    <label htmlFor="">Refferd By</label>
                    <input type="text" id='r1' />
                    <label htmlFor="">Reffering Doctor Name</label>
                    <input type="text" name="" id="r2" />
                    <br />
                    <label htmlFor="">Phone</label>
                    <input type="text" id='r3' />
                    <label htmlFor="">Email</label>
                    <input type="text" id='r4' />
                </div>
            </div>
            <div className="pdfReason">
                <div className="header3">
                    <span>REASONS FOR REFFERAL:</span>
                </div>
                <div className="pdfForm3">
                    <div className="oral">
                        <input type="radio" name="" id="" />

                        <label htmlFor="">ORAL SURGERY</label><br />
                        <input type="checkbox" name="" id="" />
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
                        <label htmlFor="">Sinus Lift/Close</label><br />
                    </div>
                    <div className="endo">

                        <input type="radio" name="" id="" />

                        <label htmlFor="">ENDO</label><br />

                        <input type="checkbox" name="" id="" />
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
                        <label htmlFor="">Retrograde filling</label><br />


                    </div>
                    <div className="pedo">
                        <input type="radio" name="" id="" />

                        <label htmlFor="">PEDO</label><br />

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
                    <div className="perio">
                        <input type="radio" name="" id="" />

                        <label htmlFor="">PERIO</label><br />

                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">GT Regeneration</label><br />
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Gingivectomy/plasty</label><br />
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Scalling/ Root Planing</label><br />
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Perio Maintenance</label><br />



                    </div>
                    <div className="other">
                        <input type="radio" name="" id="" />

                        <label htmlFor="">OTHER</label><br />

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

                </div>
            </div>
            <div className="pdfExtraction">
               
                <div className="pdfForm4">
                    <div className="teeths2">
                        <div className="above">
                            <div className="t">
                                <img src={T1} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">1</label>
                            </div>
                            <div className="t">
                                <img src={T2} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">2</label>
                            </div>
                            <div className="t">
                                <img src={T3} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">3</label>
                            </div>
                            <div className="t">
                                <img src={T4} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">4</label>
                            </div>
                            <div className="t">
                                <img src={T5} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">5</label>
                            </div>
                            <div className="t">
                                <img src={T6} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">6</label>
                            </div>
                            <div className="t">
                                <img src={T7} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">7</label>
                            </div>
                            <div className="t">
                                <img src={T8} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">8</label>
                            </div>
                            <div className="t">
                                <img src={T9} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">9</label>
                            </div>
                            <div className="t">
                                <img src={T10} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">10</label>
                            </div>
                            <div className="t">
                                <img src={T11} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">11</label>
                            </div>
                            <div className="t">
                                <img src={T12} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">12</label>
                            </div>
                            <div className="t">
                                <img src={T13} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">13</label>
                            </div>
                            <div className="t">
                                <img src={T14} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">14</label>
                            </div>
                            <div className="t">
                                <img src={T15} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">15</label>
                            </div>
                            <div className="t">
                                <img src={T16} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">16</label>
                            </div>
                        </div>
                        <div className="below">
                            <div className="t1">
                                <img src={T32} alt="" />
                                <input id="" type="checkbox" name="" />
                                <label htmlFor="">32</label>
                            </div>
                            <div className="t1">
                                <img src={T31} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">31</label>
                            </div>
                            <div className="t1">
                                <img src={T30} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">30</label>
                            </div>
                            <div className="t1">
                                <img src={T29} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">29</label>
                            </div>
                            <div className="t1">
                                <img src={T28} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">28</label>
                            </div>
                            <div className="t1">
                                <img src={T27} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">27</label>
                            </div>
                            <div className="t1">
                                <img src={T26} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">26</label>
                            </div>
                            <div className="t1">
                                <img src={T25} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">25</label>
                            </div>
                            <div className="t1">
                                <img src={T24} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">24</label>
                            </div>
                            <div className="t1">
                                <img src={T23} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">23</label>
                            </div>
                            <div className="t1">
                                <img src={T22} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">22</label>
                            </div>
                            <div className="t1">
                                <img src={T21} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">21</label>
                            </div>
                            <div className="t1">
                                <img src={T20} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">20</label>
                            </div>
                            <div className="t1">
                                <img src={T19} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">19</label>
                            </div>
                            <div className="t1">
                                <img src={T18} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">18</label>
                            </div>
                            <div className="t1">
                                <img src={T17} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">17</label>
                            </div>
                        </div>
                    </div>
                    <div className='teeths1'>
          <div className="above1"> 
                            <div className="t">
                                <img src={A} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">A</label>
                            </div>
                            <div className="t">
                                <img src={B} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">B</label>
                            </div>
                            <div className="t">
                                <img src={C} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">C</label>
                            </div>
                            <div className="t">
                                <img src={D} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">D</label>
                            </div>
                            <div className="t">
                                <img src={E} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">E</label>
                            </div>
                            <div className="t">
                                <img src={F} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">F</label>
                            </div>
                            <div className="t">
                                <img src={G} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">G</label>
                            </div>
                            <div className="t">
                                <img src={H} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">H</label>
                            </div>
                            <div className="t">
                                <img src={I} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">I</label>
                            </div>
                            <div className="t">
                                <img src={J} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">J</label>
                            </div>
                        </div>
                        <div className="below1">
                            <div className="t1">
                                <img src={T} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">T</label>
                            </div>
                            <div className="t1">
                                <img src={S} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">S</label>
                            </div>
                            <div className="t1">
                                <img src={R} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">R</label>
                            </div>
                            <div className="t1">
                                <img src={Q} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Q</label>
                            </div>
                            <div className="t1">
                                <img src={P} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">P</label>
                            </div>
                            <div className="t1">
                                <img src={O} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">O</label>
                            </div>
                            <div className="t1">
                                <img src={N} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">N</label>
                            </div>
                            <div className="t1">
                                <img src={M} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">M</label>
                            </div>
                            <div className="t1">
                                <img src={L} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">L</label>
                            </div>
                            <div className="t1">
                                <img src={K} alt="" />
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">K</label>
                            </div>


                        </div>
                        


          </div>
                </div>
            </div>
            <div className="pdfSpecial">
            <div className="header3">
                    <span>SPECIAL INSTRUCTIONS:</span>
                </div>
                <div className="pdfForm5">
                    <input type="text"  name="" id="s1" />
                </div>
            </div>
            <div className="pdfMedications">
            <div className="header3">
                    <span>MEDICATIONS:</span>
                </div>
                <div className="pdfForm">
                    <div className="check">
                    <label htmlFor="">Does the patient require antibiotics prior to dental treatment?</label>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Yes</label>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">No</label>
                    <label htmlFor="">please list and explain:</label>
                    <input type="text" id='l1' /><br />
                    </div>
                    <div className="check">
                    <label htmlFor="">Is the patient currently taking or has taken a bisphosphonate medication in the past 2 years?</label>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Yes</label>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">No</label>
                    <label htmlFor="">; if Yes, please list medication and date taken:</label>
                    <input type="text" id='l2' /><br />
                    </div>
                   
                </div>
            </div>
              <div className="pdfInstruc">
              <div className="header3">
                    <span>PATIENT INSTRUCTIONS:</span>
                </div>
                <div className="pdfForm7">
                <ul>
                                <li>Please notify our office at least 48 hours in advance if you must cancel your appointment.</li>
                                <li>Please email refferals and X-rays to <span>fresno@fresnooralsurgery.com</span></li>
                                <li>If undergoing IV anerthesia , do not eat or drinnk anything for atleast 8 hours before the time of our surgery. </li>
                                <li>If undergoing IV anerthesia , please remove contact lenses</li>
                                <li>If undergoing IV anerthesia , you must arrangments someone have with you who can remain in the office during your surgery and then drive your home and look after you the day of surgery</li>
                                <li>Minors must be accompanied by a parent or legal guardien </li>
                            </ul>
                </div>
              </div>
        </div>
    )
}

export default Pdf