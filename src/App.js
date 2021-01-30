import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./page/Home";
import EntireHomes from "./page/EntireHomes";
import SingleHome from "./page/SingleHome";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />

      <Switch>
        <Route path="/homes">
          <EntireHomes />
        </Route>
        {/* <Route path="/homes/:id" children={<SingleHome />} /> */}
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
