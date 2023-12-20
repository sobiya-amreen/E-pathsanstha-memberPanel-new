
import Chart from 'react-apexcharts'
import React, { useState } from "react";
import TopBar from '../TopBar/TopBar';
import SideBar from '../SideBar/SideBar';
import { Link } from 'react-router-dom';

const PieChart = () => {
    
  const [state, setState] = useState({
    options: {},
    // series: [44, 55, 41, 17, 15,45],
    // labels: ['A', 'B', 'C', 'D', 'E','F']

  })

  const chartData = {
    series: [44, 55, 13, 43, 22, 30, 10], // Replace with your data
    labels: ['All Members', 'Retired Members', 'Dead Members', 'FD Account Members', 'RD Account Members',' Regular Loan Members','Emergency Loan Members'], // Replace with your labels
    colors: ['#FF4560', '#008FFB', '#FEB019', '#00E396', '#775DD0', '#e84393', '#833471'], // Replace with your colors
  };



  const chartOptions = {
    chart: {
      type: 'pie',
    },
    labels: chartData.labels,
    colors: chartData.colors,
  };
  return (
    <div>
      {/* <Chart options={this.state.options} series={this.state.series} type="donut" width="380" /> */}
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
            {/* <h2>Year Wise Share Data</h2>
            <h3>Year wise Total Share Amount</h3> */}
              {/*  chart start */}
              <div >
                <div >
                  <div >
                    <h2>Pie For Admin Panel Chart</h2>
                   
                  </div>

                  <Chart
                  //  options={state.options} 
                  //  series={state.series}

                  options={chartOptions}
                  series={chartData.series}
            
                    type="donut"
                     width="600" />
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

export default PieChart
