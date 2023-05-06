import "./equipo.css"
import Colaborador from "../colaborador"
import hexToRgba from "hex-to-rgba"

const Equipo = (props) => {
    //Desestructuracion props.datos.titulo, props.datos.colorPrimario, etc
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props


    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)//colorSecundario props.datos.colorSecundario
    }
    //console.log(colaboradores.length > 0)

    const estiloTitulo = {borderColor: colorPrimario}

    return <> 
    { 
        colaboradores.length > 0 &&  //para filtrar equipos que no tengan colaboradores
            <section className="equipo" style={obj}>
            <input
                type="color"
                className="input-color"
                value={colorPrimario}
                onChange={ (evento) =>{
                    //console.log(evento.target.value)
                    actualizarColor(evento.target.value, id) //id reemp titulo
                }}
            />
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map( (colaborador, index) => <Colaborador
                     datos={colaborador} 
                     key={index} 
                     colorPrimario={colorPrimario}
                     eliminarColaborador={eliminarColaborador}
                     like={like}
                      />)
                }
                </div>
            </section> 
        }   
    </> //agregar <> </> para filtrar eq sin colaborador
}

export default Equipo