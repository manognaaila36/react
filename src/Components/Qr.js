import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import qr from './images/qr.jpeg'

import './Qr.css'

export default function Qr(){
    return(
        <>
      <br />
          
       
        

      <h1 className='bl1'>---------------------------------Blood Donation Community---------------------------------</h1>
    <img className="qrimg" src={qr} />
      <h2 className='he'>Your Blood Can Save Lives !!</h2>
        <p className='wel'> Welcome to our Blood Donation Community! Your decision to donate blood can make a significant impact on the lives of those in need. Every drop counts, and together we can contribute to a healthier and happier community.</p>

        <h2 className='jo'>Join Our WhatsApp Group !!</h2>
        <p className='stay'>Stay connected with our passionate community of blood donors! Join our WhatsApp group to receive updates on donation drives, urgent requests, and to share your experiences with fellow donors.</p>

        <p className='scan'>Scan the QR code to join now!</p><br /><br />
        <p className='line'>---------------------------------------------------------------------------------------------------------------------------------</p>


       
      
      

       
        </>
    )
}