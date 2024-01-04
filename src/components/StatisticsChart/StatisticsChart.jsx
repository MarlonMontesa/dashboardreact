import React from 'react'

import EChartsReact from 'echarts-for-react'
import * as echarts from 'echarts'

const StatisticsChart = () => {
    const option ={

        color: ['var(--orange)'],

        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross"
            },
            backgroundColor: "rgba(0, 0, 0, 0.59)",
            borderWidth: 0,
        },
        xAxis: [
            {
                type: "category",
                boundaryGap: false,
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
            }
        ],

        yAxis: [
            {
                type: "value",
                splitLine: {
                    show: false,
                }
            }
        ],

        series: [
            {
                type: "line",
                smooth: true,
                lineStyle: {
                    color: new echarts.graphic.LinearGradient( 0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: "rgb(255, 191, 0)",
                        },
                        {
                            offset: 1,
                            color: "#F450D3"
                        }
                    ]),
                    width: 4
                },
                areaStyle: {
                    opacity: .5,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8,[
                        {
                            offset: 0,
                            color: "#FE4C00",
                        },
                        {
                            offset: 1,
                            color: "rgba(255, 144, 70, 0.1)"
                        }
                    ])
                },
                emphasis: {
                    focus: "series",
                },
                showSymbol: false,
                data: [8000, 19000, 32000, 18000, 41000, 30000, 50000]
            }
        ]

        
    }
  return (
    <EChartsReact option={option}/>
  )
}

export default StatisticsChart