import { Link } from 'react-router-dom'
import sin from '../images/sinnn.webp'
import './Signup.css'
export default function Signup(){
    return(
        <>
        <h1 style={{marginLeft:'45%',marginTop:'30px'}}><b>Sign Up</b></h1>
      <div className='sign'>
               <div><img src={sin}  alt="" /></div>
               <div>
        <form class="mx-1 mx-md-4 signup" style={{width:"50%"}}>

                  <div class="d-flex flex-row align-items-center mb-4">
                  <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" class="form-control" />
                     
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>&nbsp;&nbsp;&nbsp;
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" class="form-control"/>
                      
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>&nbsp;&nbsp;&nbsp;
                    <div class="form-outline flex-fill mb-0">
                    &nbsp;<input type="password" id="form3Example4c" class="form-control" />
                     
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw fa-danger"></i>&nbsp;&nbsp;&nbsp;
                    <div class="form-outline flex-fill mb-0">
                    &nbsp;&nbsp;<input type="password" id="form3Example4cd" class="form-control"  />
                      
                    </div>
                  </div>

                  

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-6">
                    <Link type="button" class="btn button btn-primary btn-lg btn-danger" to="/Signin">Sign Up</Link>
                  </div>
                  <div class="form-check d-flex justify-content-center mb-5">
                    
                    <label class="form-check-label" for="form2Example3">
                      If already had an acoount ! <Link to="/Signin" >Signin</Link>
                    </label>
                  </div>

                </form></div>
                </div>

        </>
    )
}