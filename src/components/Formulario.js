import React, {Fragment, useState} from 'react';

const Formulario = () => {

const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    numid: ''
})

const handleInputChange = (event) => {
    //console.log(event.target.value)
    setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })
}

const enviarDatos = (event) => {
    event.preventDefault();
    console.log("Enviado los datos de: " + datos.nombre + ' - ' + datos.apellido + ' - ' + datos.numid)
}

return(
    <Fragment>
        <h1></h1>
        <form className="row" onSubmit={enviarDatos} >
            <div className="col-md-3">
                <input
                    placeholder="Ingrese su nombre."
                    className="form-control"
                    type="text"
                    name="nombre"
                    onChange={handleInputChange}>
                </input>  
            </div>
            <div className="col-md-3">
                <input
                    placeholder="Ingrese su apellido."
                    className="form-control"
                    type="text"
                    name="apellido"
                    onChange={handleInputChange}>
                </input>  
            </div>
            <div className="col-md-3">
                <input
                    placeholder="Ingrese su identificación."
                    className="form-control"
                    type="text"
                    name="numid"
                    onChange={handleInputChange}>
                </input>  
            </div>
            <div className="col-md-3">
                <button
                    className="btn btn-primary"
                    type="submit"
                    >                    
                    Enviar
                </button>  
            </div> 
        </form>        
<h3>{datos.nombre} - {datos.apellido} - {datos.numid}</h3>

    </Fragment>      
    );
}

export default Formulario;