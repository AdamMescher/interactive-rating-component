import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Rating from "./Rating";

describe("Rating Component", () => {
  it("Should render without errors", () => {
    render(<Rating />);
    expect(screen.getByText(/how did we do/i)).toBeInTheDocument();
  });
  it("Should allow a user to choose and submit a rating", async () => {
    render(<Rating />);
    expect(screen.getByText(/how did we do?/i)).toBeInTheDocument();
    expect(screen.getByText(/Please let us know/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "1" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "2" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "3" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "4" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "5" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: /1/i }));
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));
    expect(screen.getByText(/thank you/i)).toBeInTheDocument();
    expect(screen.getByText(/You selected 1 out of 5/i)).toBeInTheDocument();
  });
  it("Should not allow a user to submit if no rating is selected", async () => {
    render(<Rating />);
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));
    expect(screen.getByText(/Please choose a rating/i)).toBeInTheDocument();
  });
  it("Should allow a user to submit a rating after unsuccessful submit", async () => {
    render(<Rating />);
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));
    expect(screen.getByText(/Please choose a rating/i)).toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: /3/i }));
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));
    expect(screen.getByText(/You selected 3 out of 5/i)).toBeInTheDocument();
  });
});
