//npx create-react-app clase-31-2-React para instalar el proyecto
import Encabezado from "./components/Encabezado";
import ListadoDeProductos from "./components/ListadoDeProductos";
import Footer from "./components/Footer";

function App() {
  // <> Framgent
  return (
    <> 
      <Encabezado nombreDeLaEmpresa="Empresa T" domicilio="xxx 222" />
      <ListadoDeProductos />
      <Footer />
    </>
  );
}

export default App;
