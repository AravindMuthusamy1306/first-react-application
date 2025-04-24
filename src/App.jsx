import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <Profile name ="Aravind" age={21} />
    </div>
  );
}
function Profile (props){
  return(
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
    </div>
  );
} 


export default App
