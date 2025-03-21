import { useState } from "react";

export function MyButton() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter((p) => p + 1);
  }

  return (
    <div onClick={handleClick} data-testid="my-counter-component">
      Counter: {counter}
    </div>
  );
}
