import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { MyButton } from "./MyButton";

describe("MyButton", () => {
  const { getByTestId } = render(<MyButton />);

  it("should render", () => {
    const myCounterComponent = getByTestId("my-counter-component");
    expect(myCounterComponent).toBeInTheDocument();
  });

  it("should increment the counter when clicked", async () => {
    const myCounterComponent = getByTestId("my-counter-component");
    expect(myCounterComponent).toHaveTextContent("Counter: 0");
    await myCounterComponent.click();
    expect(myCounterComponent).toHaveTextContent("Counter: 1");
  });
});
