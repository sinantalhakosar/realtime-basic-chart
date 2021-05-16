import React, { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";
import {Line} from 'react-chartjs-2'
import './App.css';
import {Realtime} from './views/Realtime'
import {Historical} from './views/Historical'

function App() {  
  
  const [currentPage, setCurrentPage] = useState('realtime');
  const handlePageChange = (page) => {
    if(page === 0){
      setCurrentPage('realtime')
    }else{
      setCurrentPage('history')
    }
  }
  return (
    <div className="App">
      <h1>Chart.js Data Representation</h1>
      <button 
        style={{width:'10%', color:'white', backgroundColor:'#00e', marginRight:'8%'}}
        onClick={()=>handlePageChange(0)}
        >
          Realtime
        </button>
      <button 
        style={{width:'10%', color:'white', backgroundColor:'green'}}
        onClick={()=>handlePageChange(1)}
        >
          Historical
        </button>
        {currentPage === 'realtime' ? <Realtime/> : <Historical/>}
    </div>
  );
}

export default App;