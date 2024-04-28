


import blc from './images/bloodcheck.jpg';
import bld from './images/blooddonate.jpg';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Home(){
    return(
    <>
    
    <div className="App">
     
    
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"/>
    
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet"/>
    
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.10.1/css/mdb.min.css" rel="stylesheet"/>
    
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    
    <script type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
    
    <script type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
    
    <script type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.10.1/js/mdb.min.js"></script>
    
    <link rel="shortcut icon" type="image/png" href="favicon.ico" />
    
    <link rel="stylesheet" href="css/style-min.css"/>


    

    
    <div class="card card-image img-fluid"
        style={{ backgroundImage: `url(${bld})`, backgroundSize: 'cover' }}>

        <div class="text-white text-center rgba-stylish-strong py-5 px-4">
            <div class="py-5">

               
                <h4 class="card-title h4 my-4 py-2">DONATE BLOOD, SAVE LIFE!</h4>
                <h1 class="mb-4 pb-2 px-md-5 mx-md-5">DONATE YOUR BLOOD AND INSPIRE<br/>OTHERS TO DONATE.</h1>
                <Link class="btn btn-danger" to="/Qr">JOIN WITH US <i class="fas fa-arrow-right"></i></Link>
            </div>
        </div>
    </div>
    
         
    

    <div class="container-fluid" id="container">
        <div class="card text-center" id="prompt">
            <div class="card-body">
                <h4 class="card-title"><strong>WE ARE HERE FOR HELPING PEOPLE</strong></h4>
                <p class="card-text">Blood donation is the real act of humanity. You are giving part of yourself to save someone else.
                    and visit other vanues on various occassions</p>
                <Link class="btn btn-danger" to="/Add">Make Donation</Link>
            </div>
        </div>
    </div>


  

    <div class="container-fluid mb-5">
        <div class="row">
            <div class="col-sm-6 col-md-6">

                <img src="images/quote2.jpg" alt="" srcset="" class="img-fluid"/>
                <section class="p-1">
                    <div class="streak grey lighten-3">
                        <div class="flex-center">
                            <ul class="mb-0 list-unstyled">
                                <li>
                                    <h2 class="h2-responsive"><i class="fas fa-quote-left" aria-hidden="true"></i> A
                                        single pint can save three lives. A single gesture can create a million smiles.
                                        <i class="fas fa-quote-right" aria-hidden="true"></i></h2>
                                </li>

                            </ul>
                        </div>
                    </div>
                </section>
                <section class="p-1">
                    <div class="streak  lighten-3">
                        <div class="flex-center">
                            <ul class="mb-0 list-unstyled">
                                <li>
                                    <h2 class="h2-responsive"><i class="fas fa-quote-left" aria-hidden="true"></i> Bring
                                        a life back to power. Make blood donation your responsibility <i
                                            class="fas fa-quote-right" aria-hidden="true"></i></h2>
                                </li>
                                <li class="mb-0">
                                    <h5 class="text-center font-italic mb-0">~ American Red Cross</h5>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <div class="col-sm-6 col-md-6">
                
                <div class="card">
                <img class="card-img-top" src={blc} alt="Card image cap"/>
                </div>
            </div>
        </div>
    </div>

   
    
    
    

    <div class="container-fluid" id="container2">
    
        <div class="jumbotron text-center grey darken-3 white-text mx-2 mb-5">

         
            <h2 class="card-title h2">JOIN WITH US AND SAVE LIFE</h2>

            <div class="pt-2">
                <button type="button" class="btn btn-danger btn-rounded"><Link to='/Qr'onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} style={{color:'white'}}>BECOME A VOLUNTEER</Link></button>
            </div>

            <hr class="my-4 rgba-white-light"/>
        </div>
        
    </div>


   
    




   
    

    </div></>
    );
}

export default Home