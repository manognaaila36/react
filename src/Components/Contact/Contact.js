import './Contact.css'
import g from '../images/gro.jpg'
export default function Contact(){
    return(
        <>
        <div class="col-sm-6 col-md-6">
                
                <div className="card">

                    <h5 class="card-header danger-color white-text text-center py-4">
                        <strong>REQUEST APPOINTMENT</strong>
                    </h5>

                    <div class="card-body px-lg-5 pt-0">

                    
                        <form class="text-center" style={{color: '#757575'}} action="#!">

                            <div class="form-row">
                                <div class="col">
                                 
                                    <div class="md-form">
                                        <input type="text" id="materialRegisterFormFirstName" class="form-control"></input>
                                        <label for="materialRegisterFormFirstName">First name</label>
                                    </div>
                                </div>
                                <div class="col">
                                   
                                    <div class="md-form">
                                        <input type="email" id="materialRegisterFormLastName" class="form-control"></input>
                                        <label for="materialRegisterFormLastName">Last name</label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="col">
                                    
                                    <div class="md-form">
                                        <input type="email" id="materialRegisterFormEmail" class="form-control"></input>
                                        <label for="materialRegisterFormEmail">E-mail</label>
                                    </div>
                                </div>
                                <div class="col">
                                    
                                    <div class="md-form">
                                        <input type="password" id="materialRegisterFormPhone" class="form-control"
                                            aria-describedby="materialRegisterFormPhoneHelpBlock"></input>
                                        <label for="materialRegisterFormPhone">Phone number</label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="col">
                                   
                                    <div class="md-form">
                                        <input type="date" id="materialRegisterFormDate" class="form-control"></input>
                                        <label for="materialRegisterFormEmail">Date</label>
                                    </div>
                                </div>
                                <div class="col">
                                   
                                    <div class="md-form">
                                        <input type="time" id="materialRegisterFormTime" class="form-control"
                                            aria-describedby="materialRegisterFormPhoneHelpBlock"></input>
                                        <label for="materialRegisterFormPhone">Time</label>
                                    </div>
                                </div>
                            </div>

                            <div class="md-form">
                                <textarea id="materialContactFormMessage" class="form-control md-textarea"
                                    rows="3"></textarea>
                                <label for="materialContactFormMessage">Message</label>
                            </div>

                            
                            <button class="btn btn-danger btn-rounded btn-block my-4 waves-effect z-depth-0"
                                type="submit">GET APPOINTMENT</button>

                        </form>
                        

                    </div>

                </div>
                
            </div>
            <img src={g} className='groups' alt="" srcset="" />


        

        </>
    )
}