import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar/Navbar';
import Logo from './Components/Logo/Logo';
import Address from './Components/Addresss/Address';
import Patient from './Components/Patient Info/Patient';
import Insurance from './Components/Insurance/Insurance';
import Refferal from './Components/Refferfal/Refferal';
import Reason from './Components/Reasons/Reason';
import Extraction from './Components/Extraction/Extraction';
import Instruction from './Components/Instruction/Instruction';
import Medication from './Components/Patient Info/Medications/Medication';
import Documents from './Components/Documents/Document';  
import PatientInstruction from './Components/Patient-Instruction/PatientInstruction';
import Footer from './Components/Footer/Footer';
import Appointment from './Components/Appointment/Appointment';
import Pdf from './Components/Pdf/Pdf';
import { useState } from 'react';

function App() {
 
  return (
  
    <div className="App">
    
        
       <Navbar/>
       <Logo/>
       <Address/>
       <Appointment/>
       <Patient/>
       <Insurance/>
       <Refferal/>
       <Reason/>
       <Extraction/>
       <Instruction />
       <Medication/>
       <Documents/>
       <PatientInstruction/>
       <Footer/> 
       <Pdf />
           
    </div>
  );
}

export default App;
