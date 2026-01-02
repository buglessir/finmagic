import { volatility, positionSizing, stopLoss, takeProfit } from '../src/risk';

describe('Risk management', () => {
  test('volatility calculation', () => {
    const returns = [0.01, -0.02, 0.03];
    expect(volatility(returns)).toBeCloseTo(0.025, 2);
  });

  test('positionSizing', () => {
    expect(positionSizing(10000,0.02,5)).toBe(40);
  });

  test('stopLoss', () => {
    expect(stopLoss(100,5)).toBe(95);
  });

  test('takeProfit', () => {
    expect(takeProfit(100,10)).toBe(110);
  });
});
