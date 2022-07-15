import C01componente from "./components/C01componente";
import C02contador from "./components/C02contador";
import C03componenteConCss from "./components/C03compCss";
import EjemploDeEstado from "./components/C04estado";
import EjemploDeDobleEstado from "./components/C05dobleestado";
import ComponenteConVariable from "./components/C06variable";
import OperadorTernario from "./components/C07operador";
import Matriz from "./components/C08matriz";

function App() {
  return (
    <div>
      <C01componente/>
      <hr />
      <C02contador/>
      <hr />
      <C03componenteConCss/>
      <hr/>
      <EjemploDeEstado/>
      <hr/>
      <EjemploDeDobleEstado/>
      <hr/>
      <ComponenteConVariable xVariable="Hola mundo..."/>
      <hr/>
      <OperadorTernario xEdad='50'/>
      <hr/>
      <Matriz/>
    </div>
  );
}

export default App;
