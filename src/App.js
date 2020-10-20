//import React, { Component } from 'react';
import React from 'react';

import Formulario from './components/Formulario'
//import './App.css'; //import tasks from './sample/task.json'; //console.log(tasks);
/*{ this.state.tasks.map(e => <p key={e.id}>{e.title} - {e.done}</p>) }
        <h3>BIENVENIDO</h3>
      <p>Ingrese su nombre, ctm:</p>
      <input placeholder="Escribe tu nombre aquí" name="identificacion" type="text" tabindex="2" required></input>      
      */

function App(){
  return (
    <div className="container mt-5">
      <Formulario />
    </div>
  )
}
export default App;