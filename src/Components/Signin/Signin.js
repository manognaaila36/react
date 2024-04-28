import { Link } from 'react-router-dom'

import bdrop from '../images/bdrop.jpg'
import './Signin.css'
export default function Signin(){
    return(
        <>
        <h1 style={{marginLeft:'45%',marginTop:'30px'}}><b>Sign In</b></h1>
        
        <div className='signin'>
            
        <div><img src={bdrop} className='drop' alt="" srcset="" /></div>
        <div>
            <form class="mx-1 mx-md-4 signup in" style={{width:"50%"}}>



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






     <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-6">
  <Link type="button" class="btn button btn-primary btn-lg btn-danger" to="/home">Sign In</Link>
</div>
<div class="form-check d-flex justify-content-center mb-5">
  
  <label class="form-check-label" for="form2Example3">
    If don't have an acoount ! <Link to="/Signup" >Signup</Link>
  </label>
</div>

</form></div>
</div>
        </>
    )
}