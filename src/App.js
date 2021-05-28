
import './App.css';

import BarraMenu from './components/inicio/BarraMenu';
import Profesor from './components/forms/profesor';

function App() {
  return (
    <div className="container">
      <BarraMenu />
      <hr/>
      <Profesor/>
    <h1> Esta es la pagina principal</h1>
    <h1>Pagina de prueba</h1>
    </div>
  );
}

export default App;
