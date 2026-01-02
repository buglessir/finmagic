import { PE, PB, DividendYield, Beta, Alpha, Sharpe } from '../src/ratios';

describe('Financial ratios', () => {
  test('PE ratio', () => {
    expect(PE(50,5)).toBe(10);
  });

  test('PB ratio', () => {
    expect(PB(50,20)).toBe(2.5);
  });

  test('DividendYield', () => {
    expect(DividendYield(2,50)).toBe(4);
  });

  test('Beta calculation', () => {
    expect(Beta(0.2,0.1)).toBe(2);
  });

  test('Alpha calculation', () => {
    expect(Alpha(0.15,0.1)).toBeCloseTo(0.049999, 5);
  });

  test('Sharpe ratio', () => {
    const returns = [0.01,0.02,0.03];
    expect(Sharpe(returns)).toBeCloseTo(2.4495, 4);
  });
});
