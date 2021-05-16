import React, { useState } from "react";
import {Line} from 'react-chartjs-2'

export function Historical() {
    const [chartData, setChartData] = useState({});

    const handleButtonAction = () => {
        fetch('http://localhost:8080/getData')
        .then(response => response.json())
        .then(data => {
            setChartData({
                labels:  new Array(data.length).fill(''),
                datasets: [{
                    label: 'ECG Data',
                    data: data,
                    pointRadius: 0, 
                    borderWidth: 2,
                    borderColor: "#000",
                }]
            });
        });
    }

    return(
        <div>
            <h1>Historical Data</h1>
            <button onClick={handleButtonAction} style={{color:'white', backgroundColor:'red'}}>Load data</button>
            <div style={{height:'600px'}}>
            <Line
            data={chartData}
            options={{
                responsive:true,
                maintainAspectRatio: false,
                title: { display: true },
                animation: {
                duration: 0
                },
                scales: {
                yAxes: [{
                    display: true,
                }]
            }
            }}
            />
            </div>
        </div>
    );
}    
export default Historical;