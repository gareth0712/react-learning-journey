import { Route } from "react-router-dom";
import "./App.css";
// These are still regular React components
// They serve specific route purpose as pages and thus can be saved in a separate pages directory
// This is just a recommended practice, not required by React-router-dom library
import Product from "./pages/Product";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <h2>Nav Bar</h2>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/product">
        <Product />
      </Route>
    </div>
  );
}

export default App;
