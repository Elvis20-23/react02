import React, { useState } from 'react'
import { db } from './firebase';
import { addDoc, collection } from 'firebase/firestore';


const AppForm = () => {
 //////GUARDAR / ACTUALIZAR ////
 const campoRegistro = { nombre:"", edad:"", genero:""}
 const [objeto, setObjeto] = useState(campoRegistro);

    const handleSubmit = (e) => {    //manejador de submit
        e.preventDefault();

        try {

            if(validarForm()){
             
                addDoc(collection(db, 'persona'), objeto);
                console.log("Se guardo con exito");
            }else{
                console.log("No se guardo");
            }
        } catch (error) {
            console.error();
            
        }
    }

    //Manejador del estado de cambios
    const handleStatusChange = (e) => {
        const {name,value} = e.target;
        setObjeto({...objeto,[name]:value});
        //console.log({name,value});
    }

    //Validación
    const validarForm = () => {
        if (objeto.nombre === ''){
            alert("Escriba nombre...");
            return false;
        }
    }

    return (
        <div style={{background:"orange",padding:"10px",textAlign:"center"}}>
            <form onSubmit={handleSubmit}>
            <h1>AppForm.js</h1>

            <input onChange = {handleStatusChange}
            value={objeto.nombre} name='nombre'
            type='text' placeholder='Nombre...' /><br/>

            <input onChange = {handleStatusChange}
            value={objeto.edad} name='edad'
            type='text' placeholder='Edad...' /><br/>

            <select onChange = {handleStatusChange}
             name='género'>
                <option value="">Seleccione genero...</option>
                <option value="M"> Masculino </option>
                <option value="F"> Femenino </option>
            </select><br/>
            <button>
                Guardar / Actualizar
            </button>
            </form>
        </div>
    )
}

export default AppForm