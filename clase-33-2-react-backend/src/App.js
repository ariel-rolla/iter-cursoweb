//npx create-react-app clase-31-2-React para instalar el proyecto
import Encabezado from "./components/Encabezado";
import ListadoDeProductos from "./components/ListadoDeProductos";
import Footer from "./components/Footer";
import Button from "./components/Button";
import {useState, useEffect} from "react"; //hooks 

function App() {
  //let nombre = "Elon";
  const [nombre, setNombre] = useState("Elon") //useState - Cambiar estado de variable en vivo
  const [cantidad, setCantidad] = useState(0);

  const cambiarNombre = () => {
    //nombre = "pepe";
    setNombre("pepe");
  }

  function actualizarCantidad(){
    setCantidad(cantidad + 1);
  }

  function mostrarMensajeDeBienvenida(){
    console.log("Bienvenido")
  }

  useEffect(actualizarCantidad, [nombre]); // detecta un efecto debido a un cambio de estado de variable

  useEffect(mostrarMensajeDeBienvenida, []);

  // <> Framgent
  // se puede pasar variables como props hacia componentes
  return (
    <> 
      Cantidad de veces que cambio el nombre: {cantidad}
      <div>{nombre}</div>
      <button onClick={cambiarNombre}>Cambiar nombre</button>
      <Button variant="danger" />

      <Encabezado nombreDeLaEmpresa="Empresa T" nombreDueño={nombre} domicilio="xxx 222" />
      <ListadoDeProductos />
      <Footer />
    </>
  );
}

export default App;
