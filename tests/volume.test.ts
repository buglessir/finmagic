import { VWAP, accumulationDistribution } from '../src/volume';

describe('Volume calculations', () => {
  test('VWAP calculation', () => {
    const prices = [100,102,101];
    const volumes = [50,60,40];
    expect(VWAP(prices, volumes)).toBeCloseTo(101.0666666667, 4);
  });

  test('AccumulationDistribution', () => {
    const close = [10,12];
    const open = [9,11];
    const volume = [100,200];
    expect(accumulationDistribution(close, open, volume)).toBe(300);
  });
});
