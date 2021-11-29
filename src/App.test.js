import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";

describe("Componente principal", () => {
  it("Mostrar o login",  () => {
    render(<App/>);
    expect(screen.getByText("Continuar")).toBeInTheDocument();
  });
  it("O componente App deve ser sempre o mesmo", () => {
    const { container } = render(<App/>);
    expect(container.firstChild).toMatchSnapshot();
  });
});





