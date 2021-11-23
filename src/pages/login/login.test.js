import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";

describe("Botão Continuar", () => {
  it("Mostrar botão Continuar", () => {
    render(<Login />);
    expect(screen.getByText("Continuar")).toBeInTheDocument;
  });
});

describe("Título Olá", () => {
  it("Mostrar Título Olá", () => {
    render(<Login />);
    expect(screen.getByText("Olá,")).toBeInTheDocument;
  });
});

describe("Subtítulo Login", () => {
  it("Mostrar subtitulo Login", () => {
    render(<Login />);
    expect(screen.getByText("Login")).toBeInTheDocument;
  });
});
