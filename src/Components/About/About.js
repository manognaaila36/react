import bld from '../images/blooddonate.jpg';
import d from '../images/donation.jpg';
import ref from '../images/Refreshment.jpg';
import reg from '../images/registration.jpg';

import './About.css'
export default function About(){
return(
<>
<div class="container-fluid" id="container2">

        
<div class="jumbotron jumbotron-fluid text-center">
    <div class="container">
        <h3 class="display-4">OUR DONATION PROCESS</h3>
        <hr class="dots"/>
        <p class="lead">The donation process from the time you arrive at center until the time you leave</p>
    </div>
</div>

<div class="container-fluid mb-5">
    
    <div class="card-deck">

        
        <div class="card mb-3">

                              <div class="view overlay">
                
                <img class="card-img-top" src={reg} alt="Card image cap"/>
                <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                </a>
            </div>

         
            <div class="card-body">

              
                <h4 class="card-title">REGISTRATION</h4>
                
                <p class="card-text">You need to complete a very simple registration form which contatins all
                    required contact information to enter in the donation process.</p>
            </div>

        </div>
        
        <div class="card mb-3">

            
            <div class="view overlay">
                <img class="card-img-top" src={bld} alt="Card image cap"/>
                <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                </a>
            </div>

            
            <div class="card-body">

                
                <h4 class="card-title">SCREENING</h4>
             
                <p class="card-text">A drop of blood from your finger will be taken for a simple test to ensure
                    that your blood levels are proper enough for donation.</p>
            </div>

        </div>
       
        <div class="card mb-3">

            
            <div class="view overlay">
                <img class="card-img-top" src={d} alt="Card image cap"/>
                <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                </a>
            </div>

            
            <div class="card-body">

                <h4 class="card-title">DONATION</h4>
                
                <p class="card-text">After passing screening test successfully you will be directed to a donor
                    bed for donation. It will take only 6-10 minutes.</p>
            </div>

        </div>
        
        <div class="card mb-3">

           
            <div class="view overlay">
                <img class="card-img-top" src={ref} alt="Card image cap"/>
                <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                </a>
            </div>

            
            <div class="card-body">

                
                <h4 class="card-title">REFRESHMENT</h4>
                
                <p class="card-text">you can also stay in the sitting room until you feel strong enough to leave
                    the center. You will receive refreshments in the donation zone</p>
            </div>

        </div>
        
    </div>
</div>
</div>
<div className='border'></div>
<div class="transbox">
    <div className='bene'>
    <h2 className='benefits'>Benefits of Blood Donation</h2>
        <div class="benefits-section">
            <ul className='fits'>
                <li>Strengthens your immune system.</li>
                <li>Reduces the risk of certain illnesses.</li>
                <li>Improves cardiovascular health.</li>
                <li>Helps in the production of new blood cells.</li>
                <li>Gives you a sense of fulfillment and purpose.</li>
            </ul>
        </div>
        </div>
        
        
  </div>
</>
)
}