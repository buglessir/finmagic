import { PV, FV, NPV, IRR } from '../src/financial';

describe('Financial calculations', () => {
  test('PV calculates present value', () => {
    expect(PV(1000, 0.1, 5)).toBeCloseTo(620.921, 2);
  });

  test('FV calculates future value', () => {
    expect(FV(1000, 0.1, 5)).toBeCloseTo(1610.51, 2);
  });

  test('NPV calculates net present value', () => {
    expect(NPV(0.1, [-1000, 200, 300, 500])).toBeCloseTo(-176.9, 1);
  });

  test('IRR calculates internal rate of return', () => {
    const rate = IRR([-1000, 200, 300, 500]);
    expect(rate).toBeCloseTo(-0.000000668, 6);
  });
});
