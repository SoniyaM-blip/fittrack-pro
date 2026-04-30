import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Dashboard from "../Dashboard";

describe("Dashboard Page", () => {
  test("renders dashboard page", () => {
    render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    );

    expect(screen.getByTestId("dashboard-title")).toBeInTheDocument();
  });
});