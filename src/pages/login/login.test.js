import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthUser";

import Login from "./Login";

describe("Botão Continuar", () => {
  it("Mostrar botão Continuar", () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </AuthProvider>
    );
    expect(screen.getByText("Continuar")).toBeInTheDocument();
  });
});

describe("Título Olá", () => {
  it("Mostrar Título Olá", () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </AuthProvider>
    );
    expect(screen.getByText("Olá,")).toBeInTheDocument();
  });
});

describe("Subtítulo Login", () => {
  it("Mostrar subtitulo Login", () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </AuthProvider>
    );
    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});
