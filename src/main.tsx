import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Cadastro from "./pages/Cadastro";
import Dashboard from "./pages/Dashboard";
import Equipamento from "./pages/Equipamento";
import Setor from "./pages/Setor";
import Funcionario from "./pages/Funcionario";
import Login from "./pages/Login";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="home"
          element={
            <div className="gambi">
              <Menu />
              <Home />
            </div>
          }
        />

        <Route
          path="dashboard"
          element={
            <div className="gambi">
              <Menu />
              <Dashboard />
            </div>
          }
        />

        <Route
          path="cadastro"
          element={
            <div className="gambi">
              <Menu />
              <Cadastro />
            </div>
          }
        />

        <Route
          path="equipamento"
          element={
            <div className="gambi">
              <Menu />
              <Equipamento />
            </div>
          }
        />

        <Route
          path="setor"
          element={
            <div className="gambi">
              <Menu />
              <Setor />
            </div>
          }
        />

        <Route
          path="funcionario"
          element={
            <div className="gambi">
              <Menu />
              <Funcionario />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
