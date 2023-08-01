//rfc - plantilla de react
//npm install react-router-dom-v5.2.0 - Para navegacion de paginas

import BarraDeNavegacion from "./components/BarraDeNavegacion";
import ProductosPage from "./pages/ProductosPage";
import ClientesPage from "./pages/ClientesPage";

import { Switch, Route } from 'react-router-dom';

function App() {

  return (
    <> 
      <BarraDeNavegacion />

      <Switch>
        <Route exact path="/">
          <div>Home</div>
        </Route>
      </Switch>

      <Switch>
        <Route exact path="/clients">
          <ClientesPage />
        </Route>
        <Route exact path="/products">
          <ProductosPage />
        </Route>
      </Switch>

    </>
  );
}

export default App;
