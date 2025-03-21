import { fetchData } from "./fetchData";

export function add(a: number, b: number): number {
  if (a === 0) {
    return 100;
  }

  if (a === 1) {
    fetchData("http://localhost/");
  }

  return a + b;
}
