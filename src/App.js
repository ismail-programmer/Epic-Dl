import React from "react";
import { BrowserRouter, Route } from "react-router-dom";


//contexts
// import AuthContextProvider from './contexts/AuthContext'

// Components
import Home from "./components/Home";

import Products from "./components/Products/products";
import Contact from "./components/Contact";

import Login from "./components/Login/index";
import Signup from "./components/Signup/index";
import Forgot from "./components/Forgot/index";

//css
import "./App.css";
import "./resources/css/main.css";
import "./resources/css/util.css";

function App() {
  return (
    // <AuthContextProvider>

    <BrowserRouter>
      <div className="App">
        <Route exact path="/signin" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/forgot" component={Forgot} />

        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />

        <Route exact path="/products" component={Products} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </BrowserRouter>
    // </AuthContextProvider>
  );
}

export default App;
