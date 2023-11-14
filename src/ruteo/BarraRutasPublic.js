import React from 'react'
import { Routes, Route, Link, Outlet, Switch, Redirect} from 'react-router-dom';
    
import { useAuth } from './AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import "./BarraNavegacion.css";
import { useNavigate } from 'react-router-dom';

import Home from '../public/Home';
import Dashboard from '../public/Dashboard';
import Informacion from '../public/Informacion';
import Noticia from '../public/Noticia';
import Contacto from '../public/Contacto';
import LoginForm from '../login/LoginForm';

const BarraRutasPublic = () => {
    const { user } = useAuth();
    const auth = getAuth();
    const navigate = useNavigate();
  
    const handleSignOut = () => {
    }
  
    return (
      <div style={{ background:"greenyellow", }}>
        <nav>
          <div id="login">
            <ul>
              <li><Link to="/nuevoregistro">Registrar</Link></li>
  
              <li><Link onClick={handleSignOut} >Cerrar sesión</Link> </li>
              <li> <Link to="/iniciarsesion">Iniciar sesión</Link> </li>
              
            </ul>
          </div>
          
          <div id="menu">
            <ul>
              <li><Link to="/home">Inicio(Home)</Link> </li>
              <li><Link to="/Informacion">Informacion</Link> </li>
              <li><Link to="/Noticia">Noticias</Link> </li>
              <li><Link to="/Contacto">Contacto</Link> </li>
              

            </ul>
          </div>
        </nav>
  
        <Routes>
        <Route path="/iniciarsesion" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Informacion" element={<Informacion />} />
        <Route path="/Noticia" element={<Noticia />} />
        <Route path="/Contacto" element={<Contacto />} />

        </Routes> 
      </div>
    )
}

export default BarraRutasPublic;

/*
  
                {user ? (         ////////  Para cerrar sesión   ///////////
                <li><Link onClick={handleSignOut} > Cerrar sesión </Link> </li> 
                ) : (
                <li> <Link to="/Iniciarsesion">Iniciar sesión</Link> </li>
              )}
  
  
  /*


/*
const handleSignOut = () => {
    if (user) {
      signOut(auth)
        .then(() => {
          // Cierre de sesión exitoso
          navigate('/home'); // Redirigir a ruta /home
        })
        .catch((error) => {
          console.error('Error al cerrar sesión:', error);
        });
    }
  }
*/