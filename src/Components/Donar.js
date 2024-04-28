import './Donar.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bgro from './images/bgro.webp';




export default function Donar() {
  

  return (
    <>
      <img className="bgroo" src={bgro} />

      <h2 className='y'>Why Donate?</h2>
        <p className='don'>
            Blood donation is a selfless act of kindness. It helps patients undergoing surgeries, trauma victims, and individuals with medical conditions that require blood transfusions. By donating blood, you become a lifesaver, providing hope and healing to those in critical situations.
        </p>


     <Link className='button' to="/Add">Include Donar Dtails</Link>
      <Link className='button' to="/Read">Access Donar Dtails</Link>


      </>
  );
}