import "@testing-library/jest-dom/extend-expect"; // Learn more: https://github.com/testing-library/jest-dom
import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders the 'coming soon' text", () => {
    render(<Home />);

    const heading = screen.getByText(/Coming soon/i);

    expect(heading).toBeInTheDocument();
  });
});
