
import React from 'react'
import Home from './Home'
import Donar from './Donar/Donar'
import Read from './Read'
import Readall from './Readall'
import Contact from './Contact/Contact'
import Gallery from './Gallery/Gallery'
import About from './About/About'
import Add from './Add/Add'
import Qr from './Qr'
import Signup from './Signup/Signup'
import Signin from './Signin/Signin'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Navbar(){

    return(
        <>
        
<head>
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
    </head>

<nav class="mb-1 navbar navbar-expand-lg navbar-dark danger-color">
        <Link class="navbar-brand" >BloodBankManagementSystem<i class="fa-regular fa-droplet"></i></Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
            aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
            <ul class="navbar-nav mr-auto">
                
                    
                
                <li class="nav-item " >
                <Link className="nav-link" to="/Home">Home</Link>
                </li>
                <li class="nav-item ">
                <Link className="nav-link" to="/Donar">Donar</Link>
                </li>
                <li class="nav-item">
                <Link className="nav-link" to="/Gallery" >Gallery</Link>
                </li>
                <li class="nav-item">
                <Link className="nav-link" to="/Contact">Contact</Link>
                </li>
                <li class="nav-item">
                <Link className="nav-link" to="/About">About</Link>
                </li>
                <li class="nav-item">
                <Link className="nav-link" to="/Signin">Signout</Link>
                </li>

                


            </ul>
            <ul class="navbar-nav ml-auto nav-flex-icons">
                <li class="nav-item">
                    <a class="nav-link waves-effect waves-light">
                        <i class="fab fa-twitter"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link waves-effect waves-light">
                        <i class="fab fa-google-plus-g"></i>
                    </a>
                </li>
                
            </ul>
        </div>
    </nav>


    <Routes>
    <Route exact path='/' element={<Signup />}></Route>
    <Route exact path='/Signin' element={<Signin />}></Route>
<Route exact path='/Home' element={<Home />}></Route>
<Route exact path='/Donar' element={<Donar />}></Route>
<Route exact path='/About' element={<About />}></Route>
<Route exact path='/Contact' element={<Contact />}></Route>
<Route exact path='/Qr' element={<Qr />}></Route>
<Route exact path='/Add' element={<Add />}></Route>
<Route exact path='/Gallery' element={<Gallery />}></Route>
<Route exact path='/Read' element={<Read />}></Route>
<Route exact path='/Readall' element={<Readall />}></Route>
</Routes>
     







         
    <footer class="page-footer  danger-color pt-4">
    <div class="container">

    
      <div class="row" >
        <div class="col-md-12 py-5" >
        <div class="mb-5 flex-center">----------------------------------------------------------

          
            <a class="fb-ic">
                <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
           
            <a class="tw-ic">
                <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
           
            <a class="gplus-ic">
                <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            
            <a class="li-ic">
                <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
          
            <a class="ins-ic">
                <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
            </a>
            
            <a  class="pin-ic">
                <i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
            </a>--------------------------------------------------
        </div>
    </div>
   

</div>

        
<div class="container-fluid text-center text-md-left">

   
    <div class="row">


        <div class="col-md-6 mt-md-0 mt-3">

           
            <h5 class="text-uppercase" style={{fontWeight:'bold'}}>Give Blood Give Life</h5>
            <p>Blood donation is a crucial and life-saving practice that plays a vital role in healthcare systems around the world.Donating blood is a simple thing to do, but it can make a big difference in the lives of others.Your blood donation can give a precious smile to someone's face.Blood donation is the real act of humanity. You are giving part of yourself to save someone else.Your blood is precious: Donate, and let it circulate again. </p>

        </div>
       

        <hr class="clearfix w-100 d-md-none pb-3"/>

     
        <div class="col-md-3 mb-md-0 mb-3">

           
            <h5 class="text-uppercase"style={{fontWeight:'bold'}}>Contact Us</h5>

            <ul class="list-unstyled">
                <li>
                    <a href="mailto:webmetry@post.com"><i
                            class="fas fa-envelope-open mr-3"></i>manogna.aila36@gmail.com</a>
                </li>
                <li>
                    <a href="#!"><i class="fas fa-location-arrow mr-3"></i>Narasaraopet Engineering College</a>
                </li>
                <li>
                    <a href="#!"><i class="fas fa-tty mr-3"></i>+91-9059266974</a>
                </li>
            </ul>

        </div>
       
        
       

    </div>
    

</div>

    
</div>



</footer>

        </>


    )}

    export default Navbar