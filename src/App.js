import React from "react";

import { AuthProvider } from "./Context/AuthUser";
import Routes from "./routes";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
