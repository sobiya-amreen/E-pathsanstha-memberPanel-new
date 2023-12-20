import React from "react";
import Loader from "../Loader/Loader";
import TopBar from "../TopBar/TopBar";
import SideBar from "../SideBar/SideBar";
import { Link } from "react-router-dom";
import PieChart from "../PieChart/PieChart";
import PiChartG from "../Graphs/PiChartG";
import StaticGraphG from "../Graphs/StaticGraphG";

const Dashboard = (isOpen) => {
  return (
    <div>
      <div className="theme-red">
        {/* <!-- Page Loader --> */}
        {/* <Loader /> */}
        {/* <!-- #END# Page Loader -->
   
   
   
   
   
  <!-- Search Bar --> */}
        <div className="search-bar">
          <div className="search-icon">
            <i className="material-icons">search</i>
          </div>
          <input type="text" placeholder="START TYPING..." />
          <div className="close-search">
            <i className="material-icons">close</i>
          </div>

        </div>
        {/* <!-- #END# Search Bar -->
   
   
   
   
  <!-- Top Bar --> */}
        <TopBar />
        {/* <!-- #Top Bar --> */}



        {/* sideBar */}


        <SideBar />
        {/* end sideBar */}

        <section className="content">
          <Link to="/">  <h4 >DASHBOARD</h4></Link>
          <div className="container-fluid">
            <div className="block-header">

            </div>

            {/* <!-- Widgets --> */}
            <div className="row clearfix">

              <Link to="totalshareamount">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="info-box bg-pink hover-expand-effect">
                    <div className="icon">
                      <i className="material-icons">playlist_add_check</i>
                    </div>
                    <div className="content">
                      <div className="text">Total Share Amount(सभासद भाग) : 64434.0</div>
                      <p>View Detail</p>
                      <div
                        className="number count-to"
                        data-from="0"
                        data-to="125"
                        data-speed="15"
                        data-fresh-interval="20"
                      ></div>
                    </div>
                  </div>
                </div>
              </Link>



              <Link to="monthlybalance">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="info-box bg-cyan hover-expand-effect">
                    <div className="icon">
                      <i className="material-icons">monetization_on</i>
                    </div>
                    <div className="content">
                      <div className="text">Total Monthly Balance (सभासद कायम ठेव) : 19800.0</div>
                      <p>View Detail</p>
                      <div
                        className="number count-to"
                        data-from="0"
                        data-to="257"
                        data-speed="1000"
                        data-fresh-interval="20"
                      ></div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="dashboardinsurence">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="info-box bg-light-green hover-expand-effect">
                    <div className="icon">
                      <i className="material-icons">enhanced_encryption</i>
                    </div>
                    <div className="content">
                      <div className="text">Insurance(सभासद कल्याण निधी) : 27600.0</div>
                      <p>View Detail</p>
                      <div
                        className="number count-to"
                        data-from="0"
                        data-to="243"
                        data-speed="1000"
                        data-fresh-interval="20"
                      ></div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="dashboardfd">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="info-box bg-orange hover-expand-effect">
                    <div className="icon">
                      <i className="material-icons">person_add</i>
                    </div>
                    <div className="content">
                      <div className="text">FD Amount(कायम मुदत ठेव) : 195000.0</div>
                      <p>View Detail</p>
                      <div
                        className="number count-to"
                        data-from="0"
                        data-to="1225"
                        data-speed="1000"
                        data-fresh-interval="20"
                      ></div>
                    </div>
                  </div>
                </div>
              </Link>



              <Link to="dashboardrd">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="info-box bg-blue hover-expand-effect">
                    <div className="icon">
                      <i className="material-icons">local_activity</i>
                    </div>
                    <div className="content">
                      <div className="text">RD Amount(सभासद बचत ठेव) : 175000.0</div>
                      <p>View Detail</p>
                      <div
                        className="number count-to"
                        data-from="0"
                        data-to="1225"
                        data-speed="1000"
                        data-fresh-interval="20"
                      ></div>
                    </div>
                  </div>
                </div>
              </Link>



              <Link to="dashboardregularloan">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="info-box bg-indigo hover-expand-effect">
                    <div className="icon">
                      <i className="material-icons">local_activity</i>
                    </div>
                    <div className="content">
                      <div className="text">Regular Loan Balance Amount(नियमित कर्ज) :</div>
                      <p>View Detail</p>
                      <div
                        className="number count-to"
                        data-from="0"
                        data-to="1225"
                        data-speed="1000"
                        data-fresh-interval="20"
                      ></div>
                    </div>
                  </div>
                </div>
              </Link>



              {/* <Link to="dashboardregularloan">
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="info-box bg-red hover-expand-effect">
                  <div className="icon">
                    <i className="material-icons">local_atm</i>
                  </div>
                  <div className="content">
                    <div className="text">Regular Loan Balance Amount(नियमित कर्ज) :</div>
                    <p>View Detail</p>
                    <div
                      className="number count-to"
                      data-from="0"
                      data-to="1225"
                      data-speed="1000"
                      data-fresh-interval="20"
                    ></div>
                  </div>
                </div>
              </div>
              </Link> */}


              <Link to="dashboardemergencyloan">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                  <div className="info-box bg-purple hover-expand-effect">
                    <div className="icon">
                      <i className="material-icons">attach_money</i>
                    </div>
                    <div className="content">
                      <div className="text">Emergency Loan Balance Amount(आकस्मिक कर्ज) : 15000.0</div>
                      <p>View Detail</p>
                      <div
                        className="number count-to"
                        data-from="0"
                        data-to="1225"
                        data-speed="1000"
                        data-fresh-interval="20"
                      ></div>
                    </div>
                  </div>
                </div>
              </Link>







            </div>
            {/* <!-- #END# Widgets --> */}


            <div>
              {/* Loan Graph start */}
              {/* <Chart  className="loanchart"
                   options={state.options} 
                   series={state.series}
                    type="donut"
                     width="500" /> */}

              <div className="graph">

                <h3 > FD Account Graph</h3>
                <PiChartG />
              </div>

              <div className="graph">
                <h3>Loan Graph </h3>
                <StaticGraphG />

              </div>
            </div>



          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
