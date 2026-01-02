import { SMA, EMA } from '../src/moving';

describe('Moving averages', () => {
  test('SMA calculates simple moving average', () => {
    expect(SMA([1,2,3,4,5], 5)).toBe(3);
  });

  test('EMA calculates exponential moving average', () => {
    expect(EMA([1,2,3,4,5], 3)).toBeCloseTo(4.0625, 4);
  });
});
