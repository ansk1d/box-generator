import { useState } from 'react';
import './App.css';
import Boxs from './components/Boxs';
import BoxsDisplay from './components/BoxsDisplay'

function App() {
  const [pastColor,setPastColor]=useState([])
  const box = (newColor)=>{
    setPastColor([...pastColor,newColor])
  }
  return (
    <div className="App">
      <Boxs onNewColor={box}/>
      <BoxsDisplay colorList={pastColor} className="box"/>
    </div>
  );
}

export default App;
