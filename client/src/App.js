import "./App.css";
import Home from "./components/Screen/Home";
import Nav from "./components/Nav";
import Carts from "./components/Screen/Carts";
import Checkout from "./components/Screen/Checkout";
import { HashRouter, Route } from "react-router-dom";
import AppState from "./components/context/AppState";
import Shipment from "./components/Screen/shipment";

function App() {
  return (
    <AppState>
      <HashRouter>
        <Route path="/" exact={true}>
          <Nav />
          <Home />
        </Route>
        <Route path="/carts">
          <Carts />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/shipment">
          <Shipment/>
        </Route>
      </HashRouter>
    </AppState>
  );
}

export default App;
