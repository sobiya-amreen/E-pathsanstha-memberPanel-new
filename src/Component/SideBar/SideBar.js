import  { useState } from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import {  motion } from "framer-motion"; 

const SideBar = () => {

    
    
    
  
  
 
  
  return (
    
    <div>
      <section>
        {/* <!-- Left Sidebar --> */}
        <aside id="leftsidebar" className="sidebar">
     
    
            <div className="user-info">
      <div><i className="material-icons slideIcon bars" >reorder</i></div>
       
                <div className="image">
                   <img src="http://esanstha.aviratinfotech.com/logo/sr_logo.jpeg" width="100" height="100" alt="User" />
                    
                </div>
                
                {/* <div className="info-container">
                    <div className="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">John Doe</div>
                    <div className="email">john.doe@example.com</div>
                    <div className="btn-group user-helper-dropdown">
                        <i className="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">keyboard_arrow_down</i>
                        <ul className="dropdown-menu pull-right">
                            <li><p ><i className="material-icons">person</i>Profile</p></li>
                            <li role="seperator" className="divider"></li>
                            <li><p ><i className="material-icons">group</i>Followers</p></li>
                            <li><p ><i className="material-icons">shopping_cart</i>Sales</p></li>
                            <li><p ><i className="material-icons">favorite</i>Likes</p></li>
                            <li role="seperator" className="divider"></li>
                            <li><p ><i className="material-icons">input</i>Sign Out</p></li>
                        </ul>
                    </div>
                </div> */}
            </div>
            {/* <!-- #User Info --> */}
          
          
          {/* <!-- Menu -->  */}
          
            
            
              
          <div className="menu">
            <ul className="list">
              <li >
                <Link to="/profilesetting">
                  <p >
                    <i className="material-icons">settings</i>
                    <span>Profile Settings</span>
                    </p>
                </Link>
              </li>
                {" "}
                <li>
              <Link to="/shares">
                  <p>
                    <i className="material-icons">pie_chart</i>
                    <span>Shares</span> 
                  </p>
              </Link>
                </li>
              <li>
              <Link to="/monthlyDeposite">
                <p>
                  <i className="material-icons">monetization_on</i>
                  <span>Monthly Deposite</span> 
                </p>
                </Link>
              </li>

              <li>
              <Link to="/insurence">
                <p>
                  <i className="material-icons">enhanced_encryption</i>
                  
                  <span>Insurence</span>
                </p>
                </Link>
              </li>

              <li>
              <Link to="/fdcomponent">
                <p>
                  <i className="material-icons">payment</i>
                 
                   <span>FD</span> 
                </p>
                </Link>
              </li>

              <li>
              <Link to="/rdcomponent">
                <p>
                  <i className="material-icons">local_activity</i>
                 
                  <span>RD</span> 
                </p>
                </Link>
              </li>








   




              <li>
              <Link to="/regularloan">
                <p>
                  <i className="material-icons">local_atm</i>
                   <span>Regular Loan</span>
                </p>
                </Link>
              </li>

              <li>
              <Link to="/emergencyloan">
                <p>
                  <i className="material-icons">attach_money</i>
                  <span>Emergency Loan</span> 
                </p>
                </Link>
              </li>

              <li>
              <Link to="/anualreport">
                <p>
                  <i className="material-icons">pie_chart</i>
               
                   <span>User Annual Report</span> 
                </p>
                </Link>
              </li>

            
              <li>
              <Link to="/login">
                <p>
                  <i className="material-icons">pie_chart</i>
                 
                  <span>login example</span>
                </p>
                </Link>
              </li>
              
           

            {/* Graph section Start */}
            <li className="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Components">
                        <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#analytics" data-parent="#exampleAccordion">
                        {/* <TbCurrencyDollarOff className="deductionIcon" style={{fontSize:30,color:'D14D72'}}/> */}
                        <i className="material-icons">pie_chart</i>
                            <span className="nav-link-text">Analytics</span><i className="material-icons dropdown-icons">arrow_drop_down</i>
                        </a>
                        <ul className="sidenav-second-level collapse" id="analytics">
                            <li>
                                <Link to="/totalsharechart">Total Shares Chart</Link>
                            </li>           
						                <li>
                                <Link to="/monthlydepositechart">Monthly Deposite Chart</Link>
                            </li> 
                            <li>
                                <Link to="/insurencechart">Insurence Chart</Link>
                            </li> 
                            <li>
                                <Link to="/fdchart">FD Chart</Link>
                            </li>
                            <li>
                                <Link to="/rdchart">RD Chart</Link>
                            </li>
                            <li>
                                <Link to="/regularloanchart">Regular Loan Chart</Link>
                            </li>
                            <li>
                                <Link to="/emergencyloanchart">Emergency Loan Chart</Link>
                            </li>
                            <li>
                                <Link to="/piechart">Pie Chart</Link>
                            </li>
                        </ul>
                    </li>
              {/* Graph section ends */}




            
              
              {/* <div className="btn-group user-helper-dropdown "><div className="graph"><i className="material-icons">equalizer</i>Graph</div>
  
              <i className="material-icons" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">keyboard_arrow_down</i>
                          <ul className="dropdown-menu pull-right">
                           <Link to="/totalsharechart">   <li><p ><i className="material-icons">pie_chart</i>Total Shares Chart</p></li>  </Link>
                              <li role="seperator" className="divider"></li>

                              <Link to="/monthlydepositechart">  <li><p ><i className="material-icons">monetization_on</i>Monthly Deposite Chart</p></li>   </Link>
                             
                              <Link to="/insurencechart"> <li><p ><i className="material-icons">enhanced_encryption</i>Insurence Chart</p></li>   </Link>
                             
                              <Link to="/fdchart"> <li><p ><i className="material-icons">payment</i>FD Chart</p></li>   </Link>
                              <Link to="/rdchart"> <li><p ><i className="material-icons">local_activity</i>RD Chart</p></li>  </Link>
                             
                              <Link to="/regularloanchart">  <li><p ><i className="material-icons">local_atm</i>Regular Loan Chart</p></li>  </Link>
                              <Link to="/emergencyloanchart">  <li><p ><i className="material-icons">attach_money</i>Emergency Loan Chart</p></li> </Link>
                              <Link to="/piechart">  <li><p ><i className="material-icons">pie_chart</i>Pie Chart</p></li> </Link>
                              <li role="seperator" className="divider"></li>
                              <li><p ><i className="material-icons">input</i>Sign Out</p></li>
                          </ul>
                      </div> */}

  


                      <li>
              <Link to="/notification">
                <p>
                  <i className="material-icons">alarm_on</i>
                  
                <span>Notification</span>
                </p>
                </Link>
              </li>
             



                     </ul>







          </div>
          
          
          {/* <!-- #Menu --> */}
         
          
     
        </aside>
        {/* <!-- #END# Left Sidebar --> */}
      </section>
      
    </div>
  );
};

export default SideBar;
