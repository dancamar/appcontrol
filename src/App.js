
import './App.css';

import BarraMenu from './components/inicio/BarraMenu';
import Alumnos from './components/forms/Alumnos';

function App() {
  return (
    <div className="container">
      <BarraMenu />
      <hr/>
      <Alumnos/>
    <h1> Esta es la pagina principal</h1>
    </div>
  );
}

export default App;
