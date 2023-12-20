import React from 'react'
import './TopBar.css'
import { Link } from 'react-router-dom'


const TopBar = () => {
  return (
    <div>
       {/* <!-- Top Bar --> */} 
       


       <nav className="navbar">
        <div className="container-fluid">
            <div className="navbar-header">
                <a  className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="true"></a>





                
                <a className="navbar-brand" ><span className='logo'>स्वामी रामानंद तीर्थ मराठवाडा विद्यापीठ  कर्मचारी सहकारी पतसंस्था मर्यादित,</span> विष्णुपुरी, नांदेड</a>
                <a className="navbar-brand"><span className='userName'>User Name</span></a>
            </div>
            <div className="navbar-collapse collapse in" id="navbar-collapse" aria-expanded="true" >
                <ul className="nav navbar-nav navbar-right">
                   
                 
                 
                    {/* <!-- Notifications --> */}
                    <li className="dropdown notification">
                        <a  className="dropdown-toggle" data-toggle="dropdown" role="button">
                            <i className="material-icons">notifications</i>
                            <span className="label-count">7</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="header">NOTIFICATIONS</li>
                            <li className="body">
                                <div className="slimScrollDiv t2" ><ul className="menu t3">
                                    <li>
                                        <a  className=" waves-effect waves-block">
                                            <div className="icon-circle bg-light-green">
                                                <i className="material-icons">person_add</i>
                                            </div>
                                            <div className="menu-info">
                                                <h4>12 new members joined</h4>
                                                <p>
                                                    <i className="material-icons">access_time</i> 14 mins ago
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a  className=" waves-effect waves-block">
                                            <div className="icon-circle bg-cyan">
                                                <i className="material-icons">add_shopping_cart</i>
                                            </div>
                                            <div className="menu-info">
                                                <h4>4 sales made</h4>
                                                <p>
                                                    <i className="material-icons">access_time</i> 22 mins ago
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a  className=" waves-effect waves-block">
                                            <div className="icon-circle bg-red">
                                                <i className="material-icons">delete_forever</i>
                                            </div>
                                            <div className="menu-info">
                                                <h4><b>Nancy Doe</b> deleted account</h4>
                                                <p>
                                                    <i className="material-icons">access_time</i> 3 hours ago
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a  className=" waves-effect waves-block">
                                            <div className="icon-circle bg-orange">
                                                <i className="material-icons">mode_edit</i>
                                            </div>
                                            <div className="menu-info">
                                                <h4><b>Nancy</b> changed name</h4>
                                                <p>
                                                    <i className="material-icons">access_time</i> 2 hours ago
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a  className=" waves-effect waves-block">
                                            <div className="icon-circle bg-blue-grey">
                                                <i className="material-icons">comment</i>
                                            </div>
                                            <div className="menu-info">
                                                <h4><b>John</b> commented your post</h4>
                                                <p>
                                                    <i className="material-icons">access_time</i> 4 hours ago
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a  className=" waves-effect waves-block">
                                            <div className="icon-circle bg-light-green">
                                                <i className="material-icons">cached</i>
                                            </div>
                                            <div className="menu-info">
                                                <h4><b>John</b> updated status</h4>
                                                <p>
                                                    <i className="material-icons">access_time</i> 3 hours ago
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a  className=" waves-effect waves-block">
                                            <div className="icon-circle bg-purple">
                                                <i className="material-icons">settings</i>
                                            </div>
                                            <div className="menu-info">
                                                <h4>Settings updated</h4>
                                                <p>
                                                    <i className="material-icons">access_time</i> Yesterday
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                </ul><div className="slimScrollBar t4" ></div><div className="slimScrollRail t5" ></div></div>
                            </li>
                            <li className="footer">
                                <a  className=" waves-effect waves-block">View All Notifications</a>
                            </li>
                        </ul>
                    </li>
                    {/* <!-- #END# Notifications --> */}
                 
                 
                    {/* <!-- Tasks --> */}
                    <li className="dropdown notification">
                        <a  className="dropdown-toggle" data-toggle="dropdown" role="button">
                            <i className="material-icons">flag</i>
                            <span className="label-count">9</span>
                        </a>
                        <ul className="dropdown-menu">
                            <li className="header">TASKS</li>
                            <li className="body">
                                <div className="slimScrollDiv t6" ><ul className="menu tasks t7" >
                                    <li>
                                        <a  className=" waves-effect waves-block">
                                            <h4>
                                                Footer display issue
                                                <small>32%</small>
                                            </h4>
                                            <div className="progress">
                                                <div className="progress-bar bg-pink t8" role="progressbar"  >
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a  className=" waves-effect waves-block">
                                            <h4>
                                                Make new buttons
                                                <small>45%</small>
                                            </h4>
                                            <div className="progress">
                                                <div className="progress-bar bg-cyan t14" role="progressbar"  >
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a  className=" waves-effect waves-block">
                                            <h4>
                                                Create new dashboard
                                                <small>54%</small>
                                            </h4>
                                            <div className="progress">
                                                <div className="progress-bar bg-teal t9" role="progressbar" >
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a  className=" waves-effect waves-block">
                                            <h4>
                                                Solve transition issue
                                                <small>65%</small>
                                            </h4>
                                            <div className="progress">
                                                <div className="progress-bar bg-orange t10" role="progressbar" >
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a  className=" waves-effect waves-block">
                                            <h4>
                                                Answer GitHub questions
                                                <small>92%</small>
                                            </h4>
                                            <div className="progress">
                                                <div className="progress-bar bg-purple t11" role="progressbar" >
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul><div className="slimScrollBar t12" ></div><div className="slimScrollRail t13" ></div></div>
                            </li>
                            <li className="footer">
                                <a  className=" waves-effect waves-block">View All Tasks</a>
                            </li>
                        </ul>
                    </li>
                    {/* <!-- #END# Tasks --> */}

                    {/* Logout start */}
                    <li className="signOutButton">
                         <i className="material-icons">input</i>Sign Out
                    </li>
                    {/* Logout end */}

                       {/* <!-- Left Sidebar --> */}
                   <div className='hidedesktop'>         
          {/* <!-- Menu -->  */}
          <div className="menu">
            <ul className="list">
              <li className="active">



                  {/* Chart dropdown start */}
             <li className="menu-item-has-children dropdown ">
                        <a
                          className="dropdown-toggle "
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          Analytics{" "}
                          <i className="material-icons dropIcon">
                            arrow_drop_down
                          </i>
                        </a>
                        <ul className="sub-menu children dropdown-menu ">


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
                      {/* Chart dropdown ends */}





                <Link to="/profilesetting">
                  <p className='menuLinks'>
                    
                    <span>Profile Settings</span>
                    </p>
                </Link>
              </li>
                {" "}
                <li>
              <Link to="/shares">
                  <p className='menuLinks'>
                 
                    <span>Shares</span>
                  </p>
              </Link>
                </li>
              <li>
              <Link to="/monthlyDeposite">
                <p className='menuLinks'>
                
                  <span>Monthly Deposite</span>
                </p>
                </Link>
              </li>

              <li>
              <Link to="/insurence">
                <p className='menuLinks'>
                
                  <span>Insurence</span>
                </p>
                </Link>
              </li>

              <li>
              <Link to="/fdcomponent">
                <p className='menuLinks'>
                
                  <span>FD</span>
                </p>
                </Link>
              </li>

              <li>
              <Link to="/rdcomponent">
                <p className='menuLinks'>
                
                  <span>RD</span>
                </p>
                </Link>
              </li>





              <li>
              <Link to="/regularloan">
                <p className='menuLinks'>
                 
                  <span>Regular Loan</span>
                </p>
                </Link>
              </li>

              <li>
              <Link to="/emergencyloan">
                <p className='menuLinks'>
                 
                  <span>Emergency Loan</span>
                </p>
                </Link>
              </li>

              <li>
              <Link to="/anualreport">
                <p className='menuLinks'>
                 
                  <span>User Annual Report</span>
                </p>
                </Link>
              </li>

             

              <li>
              <Link to="/login">
                <p className='menuLinks'>
                 
                  <span>login example</span>
                </p>
                </Link>
              </li>


           


            

              {/* <div className="btn-group user-helper-dropdown"><div className="graph menuLinks"><i className="material-icons gra">equalizer</i>Graph</div>
  
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
                <p className='menuLinks'>
                 
                  <span>Notification</span>
                </p>
                </Link>
              </li>
             



            
            </ul>
          </div>
         
        
     


                   </div>



















                    
                    {/* <li className="pull-right"><a  className="js-right-sidebar" data-close="true"><i className="material-icons">more_vert</i></a></li> */}
                </ul>
            </div>
        </div>
    </nav>


        {/* <!-- #Top Bar --> */}
    </div>
  )
}

export default TopBar
