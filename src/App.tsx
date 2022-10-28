import { FC } from "react";
import { Route, Switch } from "react-router-dom";
import MainHeader from "./components/MainHeader";
// These are still regular React components
// They serve specific route purpose as pages and thus can be saved in a separate pages directory
// This is just a recommended practice, not required by React-router-dom library
import Home from "./pages/Home";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import BasicsAndComponents from "./pages/BasicsAndComponents";

import "./App.css";

const App: FC = (): JSX.Element => {
  return (
    <div>
      <MainHeader />
      {/* Switch component avoids multiple routes being active at the same time, e.g. by default of react-router, /products and /products/:id can be active at the same time */}
      <Switch>
        {/* 
          by default, switch matches routes that begins with the designated path, 
          e.g. "/welcome" matches "/" immediately
          e.g.2 "/products/:id" matches "/products" immediately ignoring the subsequent product id
          Adding the exact props allows only exact match of user input route with designated path for router to route the page
        */}
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/basics-and-components">
          <BasicsAndComponents />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
