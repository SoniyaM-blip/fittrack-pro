import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "../Login";

describe("Login Page", () => {
  test("renders login form", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(screen.getByText(/login/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  });

  test("updates input fields", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const email = screen.getByPlaceholderText(/email/i);
    const password = screen.getByPlaceholderText(/password/i);

    fireEvent.change(email, { target: { value: "test@test.com" } });
    fireEvent.change(password, { target: { value: "123456" } });

    expect(email.value).toBe("test@test.com");
    expect(password.value).toBe("123456");
  });
});