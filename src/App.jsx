import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <Job salary = {20000} position = "Software Engineer" company = "Accenture" />
      <Job salary = {30000} position = "Data Analyst" company = "GuideHouse" />
      <Job salary = {15000} position = "Customer Care Executive" company = "AGS Health" />
    </div>
  );
}
function Job (props){
  return(
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
} 


export default App
