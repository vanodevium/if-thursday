'use strict';

const {describe, expect, test} = require('@jest/globals');

const ifThursday = require('.');

describe('if-thursday', () => {
  test('function is defined', () => {
    expect(ifThursday).toBeDefined();
    expect(ifThursday).toBeFunction();
  });

  test('returns boolean', () => {
    expect(ifThursday()).toBeBoolean();
  });

  test('returns True if today is Thursday', () => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date(2021, 4, 13))

    expect(ifThursday()).toBeBoolean();
    expect(ifThursday()).toBeTrue();
  });

  test("returns False if today isn't Thursday", () => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date(2021, 4, 14))

    expect(ifThursday()).toBeBoolean();
    expect(ifThursday()).toBeFalse();
  });
});
