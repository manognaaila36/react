import bld from '../images/blooddonate.jpg';

import b2 from '../images/b2.jpg';
import b3 from '../images/b3.jpeg';
import b4 from '../images/b4.jpg';
import b5 from '../images/b5.jpg';
import b6 from '../images/b6.jpg';
import b7 from '../images/b7.jpg';
import s from '../images/screening.jpg'

import b from '../images/bstand.webp';
import './Gallery.css'

export default function Gallery(){
    return(
        <>
        <div className='border'></div>
        <p className='boo'>--------------------------------------------------------BloodBankGallery-----------------------------------------------------</p>
        
    <div className='gal'>
       <div class="row">
      <div class="column">
      <img class="card-img-top" src={bld} alt="Card image cap"style={{width:'100%'}}/>
    </div>
     <div class="column">
    <img className="card-img-top  b" src={b} alt="Card image cap"style={{width:'100%'}}/>
  </div>
  <div class="column">
  <img class="card-img-top" src={s} alt="Card image cap"style={{width:'100%'}}/>
  </div>
  <div class="column">
  <img class="card-img-top b4" src={b4} alt="Card image cap"style={{width:'100%'}}/>
  </div>
  <div class="column">
  <img class="card-img-top b6" src={b7} alt="Card image cap"style={{width:'100%'}}/>
  </div>
  <div class="column">
  <img class="card-img-top b3" src={b3} alt="Card image cap"style={{width:'100%'}}/>
  </div>
</div>
</div>


<p className='boo'>-------------------------------------------------------WhyBloodDonation ?---------------------------------------------------</p>
        
<div className='vid'>
<iframe className='v1' width="560" height="320" src="https://www.youtube.com/embed/M5ADyLmmoIc?si=nA-tK3PN-ISSYeBu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<iframe className='v2' width="560" height="320" src="https://www.youtube.com/embed/UOQti3gCmmo?si=JZ-LUAKoFF6gsVds" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
        </>
    )

}
    