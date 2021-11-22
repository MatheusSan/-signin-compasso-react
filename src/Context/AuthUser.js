import React, { createContext, useEffect, useState } from "react";

const Context = createContext();

function AuthProvider({ children }){
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  async function handleLogin(email, senha, time){
    localStorage.setItem('user', JSON.stringify({email: email, senha: senha, time: time}));
    setUser({email: email, senha: senha, time: time});
    setAuthenticated(true);
  }

  useEffect(() => {
    if(localStorage.getItem('user') !== null){
      setUser(localStorage.getItem('user'));
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);

  if(loading){ //loading começa true até que seja feita a busca do user no localStorage
    return <div/>; 
  }

  return ( //Esse componetne só renderiza quando o loading for false, isto é, quando já tiver sido buscado o user no localStorage
    <Context.Provider value={{authenticated, handleLogin, loading, user}} >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };