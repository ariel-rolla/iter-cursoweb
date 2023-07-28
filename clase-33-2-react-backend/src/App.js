//rfc - plantilla de react
//npm install react-router-dom-v5.2.0 - Para navegacion de paginas

import BarraDeNavegacion from "./components/BarraDeNavegacion";
import ProductosPage from "./pages/ProductosPage";
import ClientesPage from "./pages/ClientesPage";

function App() {

  return (
    <> 
      <BarraDeNavegacion />
      <ClientesPage />
      <ProductosPage />
    </>
  );
}

