import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Marmita from "./pages/Marmita";
import Myprofile from "./pages/Myprofile";
import Register from "./pages/Register";

const usuario = JSON.parse(localStorage.getItem("@user"))
const MarmitaRoute = () => {

  if (!usuario) {
    alert("Necessita logar");
    return <Navigate to="/" replace />;
  }

  return <Marmita />;
};

const ProfileRoute = () => {

  if (!usuario) {
    alert("Necessita logar");
    return <Navigate to="/" replace />;
  }

  return <Myprofile usuario={usuario} />;
};

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home usuario={usuario} />} />
        <Route path="/marmita/:tipoMarmita" exact element={<MarmitaRoute />} />
        <Route path="/profile" exact element={<ProfileRoute />} />
        <Route path="/register" exact element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
