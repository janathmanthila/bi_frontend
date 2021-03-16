import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'



const Chart = ({name,series, yAxis, xAxis}) => {
  const options = {
    title: {
      text: name
    },
    series: series,
    yAxis: yAxis,

    xAxis: xAxis,

    // series: [{
    //   name: 'sub',
    //   type: 'column',
    //   data: [1,4,7],
    //   color:'grey',
    //   lineWidth: 3
    // },
    //   {
    //     name: 'average',
    //     data: [1, 2, 3]
    //   }
    // ]


  }

  return (
      <div>
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
      </div>
  )
}

export default Chart;