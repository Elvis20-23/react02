import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useAuth} from "./ruteo/AuthContext";
import BarraRutasProtected from './ruteo/BarraRutasProtected';
import BarraRutasPublic from './ruteo/BarraRutasPublic';


const App = () => {
  const { user } = useAuth();
  return (
    <div>
      
      <h1>App.js</h1>
      <h2>Hola Soy Checya Aragón, Erick Saúl </h2>
      <h3>Fecha: 08/11/2023 / Turno: noche</h3>
      <Router>
      { user ? <BarraRutasProtected /> : <BarraRutasPublic />}
      </Router>
    </div>
  )
}

export default App
