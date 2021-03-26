
import './App.css';

import BarraMenu from './components/inicio/BarraMenu';
import Alumnos from './components/forms/Alumnos';

function App() {
  return (
    <div className="container">
      <BarraMenu />
      <hr/>
      <Alumnos/>
    </div>
  );
}

export default App;
