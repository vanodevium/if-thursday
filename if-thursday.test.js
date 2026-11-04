import { afterEach, describe, expect, test, vi } from "vitest";
import ifThursday from "./src/if-thursday.js";

describe("if-thursday", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  test("function is defined", () => {
    expect(ifThursday).toBeDefined();
    expect(ifThursday).toBeTypeOf("function");
  });

  test("returns boolean", () => {
    expect(ifThursday()).toBeTypeOf("boolean");
  });

  test("returns True if today is Thursday", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2022, 1, 24));

    expect(ifThursday()).toBeTypeOf("boolean");
    expect(ifThursday()).toBe(true);
  });

  test("returns True if today is the start of Russia's full-scale military invasion of Ukraine", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2022, 1, 24));

    expect(ifThursday()).toBeTypeOf("boolean");
    expect(ifThursday()).toBe(true);
  });

  test("returns False if today isn't Thursday, day before", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2022, 1, 23));

    expect(ifThursday()).toBeTypeOf("boolean");
    expect(ifThursday()).toBe(false);
  });

  test("returns False if today isn't Thursday, day after", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2022, 1, 25));

    expect(ifThursday()).toBeTypeOf("boolean");
    expect(ifThursday()).toBe(false);
  });
});
