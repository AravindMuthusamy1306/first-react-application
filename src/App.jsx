import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const planets = [
    {name : "Mars", isGasPlanet : false},
    {name : "Earth", isGasPlanet : false},
    {name : "Jupiter", isGasPlanet : true},
    {name : "Venus", isGasPlanet : false},
    {name : "Neptune", isGasPlanet : true},
    {name : "Uranus", isGasPlanet : true}
  ]
  return (
    <div>
      {
        planets
          .filter((planet) => planet.isGasPlanet)
          .map((planet, key) =>{
          return <h1 key = {key}> {planet.name} </h1>;
        })
      } 
    </div>
  );

}
export default App
