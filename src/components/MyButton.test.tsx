import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-react";
import { MyButton } from "./MyButton";

describe("MyButton", () => {
  it("should display counter label", () => {
    const result = render(<MyButton />);
    const component = result.getByTestId("my-counter-component");
    expect(result.getByText("Counter:")).toBeInTheDocument();
  });
});
