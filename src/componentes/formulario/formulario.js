import { useState } from "react";
import "./formulario.css";
import Campo from "../campo"; /* se dirige a index.js automaticamente*/
import ListaOpciones from "../Lista-opciones";
import Boton from "../boton";

const Formulario = (props) => {

    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")
    const [equipo,actualizarEquipo] = useState("")

    const [titulo,actualizarTitulo] = useState("")
    const [color,actualizarColor] = useState("")
    //Desestructuracion
    const { registrarColaborador, crearEquipo } = props


    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("Manejar el envio ")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        props.registrarColaborador(datosAEnviar)//console.log(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})//console.log(titulo, color)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
            titulo="Nombre" 
            placeholder="Ingresar Nombre" 
            required 
            valor={nombre} 
            actualizarValor={actualizarNombre}
            />
            <Campo 
            titulo="Puesto" 
            placeholder="Ingresar Puesto" 
            required 
            valor={puesto} 
            actualizarValor={actualizarPuesto}
            />
            <Campo 
            titulo="Foto" 
            placeholder="Ingresar enlace de Foto" 
            required
            valor={foto} 
            actualizarValor={actualizarFoto}
            />
            <ListaOpciones 
            valor={equipo} 
            actualizarEquipo={actualizarEquipo} 
            equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el Equipo.</h2>
            <Campo 
            titulo="Titulo" 
            placeholder="Ingresar Titulo" 
            required 
            valor={titulo} 
            actualizarValor={actualizarTitulo}
            />
            <Campo 
            titulo="Color" 
            placeholder="Ingresar el color en hexadecimal" 
            required 
            valor={color} 
            actualizarValor={actualizarColor}
            type="color"
            />
            <Boton>
                Registrar equipo
            </Boton>
        </form>
        </section>
}

export default Formulario;