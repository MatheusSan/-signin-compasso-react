import React, { createContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const Context = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  // let navigate = useNavigate();

  async function handleLogin(email, senha, time) {
    localStorage.setItem(
      "user",
      JSON.stringify({ email: email, senha: senha, time: time })
    );
    setUser({ email: email, senha: senha, time: time });
    setAuthenticated(true);
  }

  async function removeLocalStorage() {
    localStorage.removeItem("User");
    return true; //Quando essa função for chamada na "/home" deve esperar o retorno true para redirecionar para "/"
    // navigate("/");
  }

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      if (JSON.parse(localStorage.getItem("user")).time > Date.now()) {
        setUser(localStorage.getItem("user"));
        setAuthenticated(true);
      } else {
        localStorage.removeItem("user");
      }
    }
    setLoading(false);
  }, []);

  if (loading) {
    //loading começa true até que seja feita a busca do user no localStorage
    return <div />;
  }

  return (
    //Esse componetne só renderiza quando o loading for false, isto é, quando já tiver sido buscado o user no localStorage
    <Context.Provider value={{ authenticated, handleLogin, loading, user, removeLocalStorage }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
