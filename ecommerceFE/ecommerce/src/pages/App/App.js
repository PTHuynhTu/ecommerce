import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../HomePage/HomePage";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import Menu from "../Menu/Menu";
import Contacts from "../Contacts/Contacts";
import NavBar from "../../component/NavBar/NavBar";
import Footer from "../../component/Footer/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/activate/:code" component={Login} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/product" component={Menu} />
      </Switch>
      <Footer />
    </>
  );
};
export default App;
