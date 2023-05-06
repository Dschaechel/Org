import { useState } from "react"
import "./miorg.css"

const MiOrg = (props) => {
    // Estado - utilizando hooks (useState)    //useState()
   // const [nombreVariable, funcionActualizar] = useState(valorinicial)
    console.log(props)
   
    /*const [mostrar, actualizarMostrar] = useState(true)
    const manejarClick = () => {
        console.log("Mostrar/ocultar elemento", !mostrar);
        actualizarMostrar(!mostrar);
    }*/

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg