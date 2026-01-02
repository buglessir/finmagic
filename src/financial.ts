export const PV = (futureValue: number, rate: number, periods: number): number => {
  return futureValue / Math.pow(1 + rate, periods);
}

export const FV = (presentValue: number, rate: number, periods: number): number => {
  return presentValue * Math.pow(1 + rate, periods);
}

export const NPV = (rate: number, cashFlows: number[]): number => {
  return cashFlows.reduce((acc, cf, i) => acc + cf / Math.pow(1 + rate, i + 1), 0);
}

export const IRR = (cashFlows: number[], guess = 0.1): number => {
  let rate = guess;
  let iteration = 0;
  const maxIter = 1000;
  const tol = 1e-6;

  while (iteration < maxIter) {
    const npv = cashFlows.reduce((acc, cf, i) => acc + cf / Math.pow(1 + rate, i), 0);
    const derivative = cashFlows.reduce((acc, cf, i) => acc - (i * cf) / Math.pow(1 + rate, i + 1), 0);
    const newRate = rate - npv / derivative;
    if (Math.abs(newRate - rate) < tol) break;
    rate = newRate;
    iteration++;
  }

  return rate;
}
