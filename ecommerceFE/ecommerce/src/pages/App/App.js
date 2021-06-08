import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../HomePage/HomePage";
import Registration from "../Registration/Registration";
import NavBar from "../../component/NavBar/NavBar";
import Footer from "../../component/Footer/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/registration" component={Registration} />
      </Switch>
      <Footer />
    </>
  );
};
export default App;
