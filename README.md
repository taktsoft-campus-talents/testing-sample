# Unit Testing with Vitest

## Setup

- https://vitest.dev/guide/

```ts
// src/filename.ts
// src/filename.test.ts

import { beforeEach, describe, expect, it } from "vitest";

describe("test-suite / filename", () => {
  beforeEach(() => {});

  it("should do ...", () => {
    // ...
    expect(true).toBe(true);
  });

  it("should do something async ...", async () => {});
});
```

Example: src/functions/add.test.ts

## Mocking

- https://vitest.dev/api/mock.html
- https://vitest.dev/api/vi.html

## Coverage

Just run `npx vitest --coverage`.

The script will guide you through the setup process.

Check: coverage/index.html

## Component Testing

https://testing-library.com/docs/react-testing-library/cheatsheet

- Example: src/components/MyButton.test.tsx

https://github.com/vitest-dev/vitest-browser-react

- Example: src/vitest-example/HelloWorld.test.tsx
