

import Estudiante1 from '../../img/alumnos/est1.jpg';
import './alumnos.css';


function Alumnos() {
    return (
        <div>


            <div class="card">
                <div class="card-header">
                    Alumnos
  </div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese su nombre" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Apellidos</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Ingrese su apellido" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Seleccione el estado</option>
                        <option value="1">Chiapas</option>
                        <option value="2">Tabasco</option>
                        <option value="3">Campeche</option>
                    </select>
                </div>

                <div class="card">
                    <img src={Estudiante1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Alumnos;