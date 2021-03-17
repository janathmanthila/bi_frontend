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