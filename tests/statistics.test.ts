import { covariance, correlation } from '../src/statistics';

describe('Statistics', () => {
  test('covariance', () => {
    expect(covariance([1,2,3],[4,5,6])).toBe(0.6666666666666666);
  });

  test('correlation', () => {
    expect(correlation([1,2,3],[4,5,6])).toBeCloseTo(1,2);
  });
});
