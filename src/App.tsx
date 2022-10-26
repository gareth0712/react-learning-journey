import { FC } from "react";
import { Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
// These are still regular React components
// They serve specific route purpose as pages and thus can be saved in a separate pages directory
// This is just a recommended practice, not required by React-router-dom library
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

import "./App.css";

const App: FC = (): JSX.Element => {
  return (
    <div>
      <MainHeader />
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
};

export default App;
