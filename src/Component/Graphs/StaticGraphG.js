import React, { useState } from "react";
import Chart from "react-apexcharts";


const StaticGraphG=()=>{
     const [state, setState] = useState({
        options: {
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          },
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
          },
        ],
      });


    return(
        <>
        
        
          <Chart
                    options={state.options}
                    series={state.series}
                    type="bar"
                    width="110%"
                  />
        
        
        </>
    )
}

export default StaticGraphG