import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import List from "./pages/List";
import Count from "./pages/Count";
import Form from "./pages/Form";
import Money from "./pages/Money";
import './App.css';


const Router = () => {
    return(
        <BrowserRouter>
            <Header></Header>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route  path="/count" component={Count}></Route>
                <Route  path="/form" component={Form}></Route>
                <Route  path="/list" component={List}></Route>
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
    )
}

export default Router;