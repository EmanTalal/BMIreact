import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { text } from 'body-parser'
import React, { useState } from "react";

function App() {
  const [wigth,setWigth]=useState()
  const[higth,sethigth]=useState()
  const[bim,setIbm]=useState('')
const [mess,setMess]=useState('')


let culclue=()=>{
  let bim=(wigth/(higth * higth))
  setIbm(bim);
  

  if(bim<18.5){
    setMess('نقص في الوزن')
}else if( bim<24.9){
  setMess('  وزن طبيعي')
}else if( bim<29.9){
  setMess('   زيادة في الوزن')
}else if( bim<34.9){
  setMess(' بدانه ')
}else if( bim<39.0){
  setMess(' بدانه مفرطه ')
}
}

  return (
    <>
    <label className='text'>Weight</label>
    <input type='text' value={wigth}onChange={(e) => setWigth(e.target.value)}/>
    <label className='text'>Height</label>
    <input type='text' value={higth} onChange={(e) => sethigth(e.target.value)}/>
    <button className='btn'onClick={culclue}>  Click to Calculate BMI </button>
    
    <h3>Your BMI is: {bim}</h3>
    <p></p>
    </>
  )
}

export default App
