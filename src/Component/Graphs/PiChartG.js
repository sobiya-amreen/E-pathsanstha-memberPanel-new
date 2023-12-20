import React, { useState } from "react";
import Chart from "react-apexcharts";


const PiChartG = () => {
   

    const [state, setState] = useState({
        options: {},
        // series: [44, 55, 41, 17, 15,45],
        // labels: ['A', 'B', 'C', 'D', 'E','F']
      
    })

    const chartData={
        series: [40, 40, 25, 43, 22,30,23], // Replace with your data
  labels: ['All Members', 'Retired Members', 'Dead Members', 'FD Account Members', 'RD Account Members',' Regular Loan Members','Emergency Loan Members'], // Replace with your labels
  colors: ['#FF4560', '#008FFB', '#FEB019', '#00E396', '#775DD0','#e84393','#833471'], // Replace with your colors
};



const chartOptions = {
    chart: {
      type: 'pie',
    },
    labels: chartData.labels,
    colors: chartData.colors,
  };
    

    return (

        <>

            <Chart className="loanchart"
                // options={state.options}
                // series={state.series}
                options={chartOptions}
                series={chartData.series}
          
                type="donut"
                width="480" />

        </>
    )
}

export default PiChartG