import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Workouts from "../Workouts";

describe("Workouts Page", () => {
  test("renders workouts heading", () => {
    render(
      <MemoryRouter>
        <Workouts />
      </MemoryRouter>
    );

    expect(screen.getByText(/ways to train/i)).toBeInTheDocument();
  });
});