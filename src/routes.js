import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Context } from "./Context/AuthUser";
import Login from "./pages/login";
import Logged from "./pages/logged";

function RequireAuth({children}) { // Essa função verifica se há usuário autenticado no context pra liberar ou não acesso a rota home
  const { authenticated } = useContext(Context);
  
  
  if (!authenticated) { //Se usuário não autenticado, redireciona para rota padrão "/"
    return <Navigate to="/" />;
  }
  return children;
}

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Logged />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
