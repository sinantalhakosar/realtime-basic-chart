import React, { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";
import {Line} from 'react-chartjs-2'
import './App.css';

function App() {  
  const [chartData, setChartData] = useState({});

  const Chart = () => {
    let ecgData = new Array(100).fill({ x: 0, y:0 });
    let ecgTime = new Array(100).fill(0);
    const socket = socketIOClient('http://localhost:8080');
    socket.on("FromAPI", socketData => {
      ecgData.push(socketData)
      ecgData.shift();

      ecgTime.push(new Date().toISOString().substr(11, 8))
      ecgTime.shift();

      setChartData({
        labels:  ecgTime,
        datasets: [{
          label: 'ECG Data',
          data: ecgData,
          pointRadius: 0, 
          borderWidth: 2,
          borderColor: "#000",
        }]
      });
    });
}
useEffect(() => {
  Chart();
}, []);
  
  return (
    <div className="App">
      <h1>Chart.js Realtime Data</h1>
      <div>
        <Line
          data={chartData}
          options={{
            responsive:true,
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

export default App;