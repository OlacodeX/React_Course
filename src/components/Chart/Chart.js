import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';
const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);
    return <div className="chart">
        {
            /**
             * Below, I am accepting data points (i.e num of items that should be plotted into corresponding num of bars) from the component responsible for sending the data.
             * Since the props returns an array, I map through it and for each element in the array I output a chartbar.
             *This way the total num of bars outputted will correspond to the respective data.
             */
        }
        {props.dataPoints.map((dataPoint) => (<ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label}/>))}
    </div>
};

export default Chart;