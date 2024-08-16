"use strict";

const { describe, expect, test } = require("@jest/globals");

const ifThursday = require(".");

describe("if-thursday", () => {
  test("function is defined", () => {
    expect(ifThursday).toBeDefined();
    expect(ifThursday).toBeFunction();
  });

  test("returns boolean", () => {
    expect(ifThursday()).toBeBoolean();
  });

  test("returns True if today is Thursday", () => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 1, 24));

    expect(ifThursday()).toBeBoolean();
    expect(ifThursday()).toBeTrue();
  });

  test("returns True if today is the start of Russia's full-scale military invasion of Ukraine", () => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 1, 24));

    expect(ifThursday()).toBeBoolean();
    expect(ifThursday()).toBeTrue();
  });

  test("returns False if today isn't Thursday, day before", () => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 1, 23));

    expect(ifThursday()).toBeBoolean();
    expect(ifThursday()).toBeFalse();
  });

  test("returns False if today isn't Thursday, day after", () => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 1, 25));

    expect(ifThursday()).toBeBoolean();
    expect(ifThursday()).toBeFalse();
  });
});
