import { percentChange, dailyReturn, cumulativeReturn } from '../src/price';

describe('Price calculations', () => {
  test('percentChange calculates correct percentage', () => {
    expect(percentChange(110, 100)).toBe(10);
    expect(percentChange(90, 100)).toBe(-10);
  });

  test('dailyReturn uses percentChange', () => {
    expect(dailyReturn(105, 100)).toBe(5);
  });

  test('cumulativeReturn calculates cumulative growth', () => {
    const returns = [5, 3, 2];
    expect(cumulativeReturn(returns)).toBeCloseTo(0.107);
  });
});
