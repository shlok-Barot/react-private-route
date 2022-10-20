import React, { Component } from "react";
import "./App.css";
import "./Assets/css/custom.css";
import "antd/dist/antd.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Products from "./components/Products";
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import "react-notifications/lib/notifications.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Routes>
              <Route element={<Login />} path="/" exact />
              <Route element={<PrivateRoutes />}>
                <Route element={<Home />} path="/home" />
                <Route element={<Products />} path="/products" />
                <Route element={<ContactUs />} path="/contactus" />
              </Route>
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
