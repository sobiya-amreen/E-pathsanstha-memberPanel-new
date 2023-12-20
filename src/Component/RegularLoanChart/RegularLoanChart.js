import Chart from "react-apexcharts";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import TopBar from "../TopBar/TopBar";

const RegularLoanChart = () => {
    const [state, setState] = useState({
        options: {
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
          },
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
          },
        ],
      });
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
          <div className="container-fluid">
            <div className="block-header">
              <Link to="/">
                {" "}
                <h2>DASHBOARD</h2>
              </Link>
            </div>

            <div >
            <h2>Month Wise Loan Data</h2>
            <h3>Monthly wise Total Amount</h3>
              {/*  chart start */}
              <div >
                <div >
                  <div >
                    <h2>Regular Loan Chart</h2>
                   
                  </div>

                  <Chart
                    options={state.options}
                    series={state.series}
                    type="bar"
                    width="600"
                  />
                </div>
              </div>
              {/* chart end */}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default RegularLoanChart
