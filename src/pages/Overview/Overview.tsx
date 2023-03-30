import { Card, Statement, Chart } from '@sapfir0/delta_kit'
import React from 'react'
import styles from './Overview.module.scss'

const chartProps =  {
    options: {
        dataLabels: {
            enabled: false,
        },
        labels: ['Living Room', 'Studio', 'Bedroom', 'Garage', 'Kitchen'],
        legend: {
            fontSize: '14px',
            formatter: function(legend: string, opts: any) {                
                return `${legend} ${opts.w.globals.series[opts.seriesIndex]}%`
            },
            labels: {
                colors: ['white', 'white','white', 'white', 'white'],
                useSeriesColors: false
            },
        },
        plotOptions: {
            pie: {
                donut: {

                }
            }
        }
    },
    series: [44, 55, 41, 17, 15],
}

const simpleChartProps =  {
    options: {
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        }
    },
    series: [80, 20,],
    labels: ['A', 'B',]
}


const barProps = {
    options: {
        grid: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        chart: {
          id: "basic-bar"
        },
        plotOptions: {
            bar: {
                borderRadius: 8,
            }
        },
        xaxis: {
          categories: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
        }
      },
      series: [
        {
          name: "series-1",
          data: [12, 20, 24, 14, 17, 13, 6]
        }
      ]
}

export function Overview() {
    return <><h1>Overview</h1>
    <div className={styles.root}>
    <Card header='Camera'> 
    <>
        <img className={styles.cameraImage} src="/src/images/home.png" /> 
    </>
    </Card>

    <Card header='Consumtion by room'>
            <Chart options={chartProps.options} series={chartProps.series} type="donut" width="380" />
    </Card>

    <Card header='Consumtion by day'>
        <Chart options={barProps.options} series={barProps.series} type="bar" width="250" />
    </Card>

    <Card header='Device limit'>
            <Chart options={simpleChartProps.options} series={simpleChartProps.series} type="donut" width="250" />
    </Card>

    <Card header='Status by units'><div className={styles.longCard}>
            <Statement value={745} dimension='W' size='large' title='On livingroom' isIncreasing={false}  />
            <Statement value={20} dimension='F' size='large' title='Outside' isIncreasing={false} />
            <Statement value={15} dimension='F' size='large' title='Inside' isIncreasing={false} />
            <Statement value={494} dimension='CF' size='large' title='Water' isIncreasing={false} />
            <Statement value={45.3} dimension='MB' size='large' title='Water' isIncreasing={false} />

        </div>
    </Card>






        </div>
    </>
}