import { render, fireEvent, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  it("should count", () => {
    render(<Counter/>);

    fireEvent.click(screen.getByText("Count"));

    expect(screen.getByText("count: 1")).toBeInTheDocument();
  });
});
