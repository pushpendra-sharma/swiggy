import { describe, expect, test } from '@jest/globals';
import { sum } from '../sum';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(10, 2)).toBe(12);
  });
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(0, 0)).toBe(0);
  });
});
