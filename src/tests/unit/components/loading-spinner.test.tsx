import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { LoadingSpinner } from "@/components/LoadingSpinner";

describe("LoadingSpinner Component", () => {
  it("renders the LoadingSpinner component", () => {
    render(<LoadingSpinner />);

    // Check if the spinner container is rendered
    const spinnerContainer = screen.getByRole("status", { name: /loading/i });
    expect(spinnerContainer).toBeInTheDocument();

    // Check if the visually hidden text "Loading..." is present
    expect(screen.getByText("Loading...")).toBeInTheDocument();

    // Check if the spinner has the proper animation class
    expect(spinnerContainer).toHaveClass("animate-spin");

    // Check if the spinner has the correct size and border classes
    expect(spinnerContainer).toHaveClass(
      "inline-block size-16 border-[3px] border-current border-t-transparent"
    );

    // Check if the spinner is styled correctly for light and dark themes
    expect(spinnerContainer).toHaveClass("text-gray-900 dark:text-gray-700");
  });
});
