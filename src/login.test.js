import React from "react";
import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import Login from "./pages/login/Login";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/AuthUser";

jest.mock("react-router-dom", () => {
  // Require the original module to not be mocked...
  const originalModule = jest.requireActual("react-router-dom");

  return {
    __esModule: true,
    ...originalModule,
    useNavigate: jest.fn(() => "routes"),
  };
});

describe("Login Component:", () => {
  it("Should render correctly", () => {
    const { container } = render(
      <AuthProvider>
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      </AuthProvider>
    );
    expect(container).toMatchSnapshot();
  });

  describe("Title Component:", () => {
    it("Have Title Login", () => {
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

  describe("Inputs Component:", () => {
    it("Have Two Inputs", () => {
      render(
        <AuthProvider>
          <BrowserRouter>
            <Login />
          </BrowserRouter>
        </AuthProvider>
      );

      expect(screen.getByPlaceholderText("Usuário")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Senha")).toBeInTheDocument();
    });

    it("Have Two Icons", () => {
      render(
        <AuthProvider>
          <BrowserRouter>
            <Login />
          </BrowserRouter>
        </AuthProvider>
      );

      expect(screen.getByPlaceholderText("Usuário")).toBeInTheDocument();
      expect(screen.getByPlaceholderText("Senha")).toBeInTheDocument();
    });

    it("Input Have Style", () => {
      render(
        <AuthProvider>
          <BrowserRouter>
            <Login />
          </BrowserRouter>
        </AuthProvider>
      );

      expect(screen.getByPlaceholderText("Usuário")).toHaveStyle({
        width: "calc(100% - 42px)",
        borderRadius: "50px",
        color: "#FFF",
      });
      expect(screen.getByPlaceholderText("Senha")).toHaveStyle({
        width: "calc(100% - 42px)",
        borderRadius: "50px",
        color: "#FFF",
      });
    });

    it("Updates onChange", async () => {
      const promise = Promise.resolve();
      const { getByPlaceholderText } = render(
        <AuthProvider>
          <BrowserRouter>
            <Login />
          </BrowserRouter>
        </AuthProvider>
      );

      const userInput = getByPlaceholderText("Usuário");
      const passwordInput = getByPlaceholderText("Senha");

      user.type(userInput, "leonardo@compasso.com.br");
      user.type(passwordInput, "COMPasso#@123");

      expect(userInput.value).toBe("leonardo@compasso.com.br");
      expect(passwordInput.value).toBe("COMPasso#@123");
      await act(() => promise);
    });
  });

  describe("Button Component:", () => {
    it("Have Button", () => {
      render(
        <AuthProvider>
          <BrowserRouter>
            <Login />
          </BrowserRouter>
        </AuthProvider>
      );

      expect(screen.getByText("Continuar")).toBeInTheDocument();
    });
    it("Button Have Style", () => {
      render(
        <AuthProvider>
          <BrowserRouter>
            <Login />
          </BrowserRouter>
        </AuthProvider>
      );

      expect(screen.getByText("Continuar")).toHaveStyle({
        background: "linear-gradient(90deg, #FF2D04 0%, #C13216 100%)",
        width: "100%",
        borderRadius: "50px",
        height: "67px",
        cursor: "pointer",
        border: "2px solid #ff2d04",
      });
    });
  });
});
