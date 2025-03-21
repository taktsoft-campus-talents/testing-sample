import { beforeEach, describe, expect, it, vi } from "vitest";
import { add } from "./add";
import { fetchData } from "./fetchData";

vi.mock("./fetchData", { spy: true });

describe("add", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should add two numbers", async () => {
    const result = await add(1, 2);
    expect(result).toBe(3);
    expect(fetchData).toHaveBeenCalledTimes(1);
    // expect(fetchData).toBeCalledWith("http://localhost/");
  });

  it("should add 3 and 4", () => {
    const result = add(3, 4);
    expect(result).toBe(7);
  });

  it("should return 100 when a is 0", () => {
    const result = add(0, 5);
    expect(result).toBe(100);
  });
});
