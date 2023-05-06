import { useState } from "react";
import "./campo.css";

const Campo = (props) => {
    //console.log("Datos: ",props);
    const placeHolderModificado = `${props.placeholder}...`;
    //Desestructuracion
    const { type = "text" } = props // text valor por defecto
    
    const manejarCambio = (e) => {
        //console.log("cambio ", e.target.value)
        props.actualizarValor(e.target.value)
    }
    
    return <div className={`campo campo-${type}`}>
            <label>{ props.titulo }</label>
            <input 
                placeholder={ placeHolderModificado } 
                required={props.required} 
                value={props.valor} 
                onChange={manejarCambio}
                type={type}
            />
        </div>
}

export default Campo;