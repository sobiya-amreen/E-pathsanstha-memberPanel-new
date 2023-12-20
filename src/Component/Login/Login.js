import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div>
       


       


            <div className="center">
            <div className="loginimage">
                    <img src="http://esanstha.aviratinfotech.com/logo/sr_logo.jpeg" width="50" height="50" alt="User"  />
                </div>
      <h5>स्वामी रामानंद तीर्थ मराठवाडा विद्यापीठ</h5>
      <h4>कर्मचारी सहकारी पतसंस्था मर्यादित,</h4>
      <h5>विष्णुपुरी, नांदेड</h5>
      <form method="post">
        <hr/>
        {/* <div class="txt_field">
          <input type="text" required/>
          <span></span>
          <label>Username</label>
        </div> */}


                                  <div className="col-md-10">
                                    <b>User Name</b>
                                        <div className="input-group">
                                            <span className="input-group-addon">
                                             
                                                <i className="material-icons">person</i>
                                            </span>
                                            <div className="form-line">
                                             
                                                <input type="text" className="form-control date" placeholder="Enter user name"/>
                                            </div>
                                        </div>
                                    </div>





                                    <div className="col-md-10">
                                    <b>Password</b>
                                        <div className="input-group">
                                            <span className="input-group-addon">
                                             
                                                <i className="material-icons">lock_outline</i>
                                            </span>
                                            <div className="form-line">
                                             
                                                <input type="password" className="form-control date" placeholder="Enter password"/>
                                            </div>
                                        </div>
                                    </div>



        {/* <div class="txt_field">
          <input type="password" required/>
          <span></span>
          <label>Password</label>
        </div> */}
        {/* <div class="pass">Forgot Password?</div> */}
        <input type="submit" value="Login"/>
        <div className="signup_link">
          {/* Not a member? <a href="#">Signup</a> */}
        </div>
      </form>
    </div>





    </div>
  )
}

export default Login
