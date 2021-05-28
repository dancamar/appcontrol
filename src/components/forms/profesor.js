import React, { Component } from "react";
import axios from "axios";

class Profesor extends Component {

  constructor(props){
    super(props);

    this.state = {
      clavep: "",
      nombre: "",
      apellidos: "",
      direccion: "",
      telefono: "",
      correo: "",
    };


    this.onSubmit= this.onSubmit.bind(this);
    this.onChange=this.onChange.bind(this);
  }

  

  //const [values, setValues] = useState(variablesInicio);

   onChange (e){
    this.setState({[e.target.name]: e.target.value});
  };

  onSubmit (e){
    e.preventDefault();
     //console.log(value.clavep,values.nombre,values.apellidos,values.direccion,values.telefono,values.correo);
    this.guardar();

     /*axios
      .post(`http://localhost:4001/create`, {
        clavep: this.state.clavep,
        nombre: this.state.nombre,
        apellidos: this.state.apellidos,
        direccion: this.state.direccion,
        telefono: this.state.telefono,
        correo: this.state.correo,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });*/
  };

  guardar = async () => {
    /*let profesor={
  matricula: this.state.matricula,
  nombre: this.state.nombre,
  apepat: this.state.apepat,
  apemat: this.state.apemat,
  sexo: this.state.sexo
}*/

    await axios
      .post(`http://localhost:4001/create`, {
        clavep: this.state.clavep,
        nombre: this.state.nombre,
        apellidos: this.state.apellidos,
        direccion: this.state.direccion,
        telefono: this.state.telefono,
        correo: this.state.correo,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  }
render(){
  return (
    <div>
      <form onSubmit={this.onSubmit}>
        <label>
          Calve Profesor:
          <input
            type="text"
            name="clavep"
            value={this.state.clavep}
            onChange={this.onChange}
          />
        </label>
        <label>
          Nombre Profesor:
          <input
            type="text"
            name="nombre"
            value={this.state.nombre}
            onChange={this.onChange}
          />
        </label>
        <label>
          Apellidos Profesor:
          <input
            type="text"
            name="apellidos"
            value={this.state.apellidos}
            onChange={this.onChange}
          />
        </label>
        <label>
          Direccion Profesor:
          <input
            type="text"
            name="direccion"
            value={this.state.direccion}
            onChange={this.onChange}
          />
        </label>
        <label>
          Telefono:
          <input
            type="text"
            name="telefono"
            value={this.state.telefono}
            onChange={this.onChange}
          />
        </label>
        <label>
          Correo:
          <input
            type="email"
            name="correo"
            value={this.state.correo}
            onChange={this.onChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
}

export default Profesor;
