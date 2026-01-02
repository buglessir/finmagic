export const PE = (price: number, eps: number): number => {
  return price / eps;
}

export const PB = (price: number, bookValue: number): number => {
  return price / bookValue;
}

export const DividendYield = (dividend: number, price: number): number => {
  return (dividend / price) * 100;
}

export const Beta = (covariance: number, marketVariance: number): number => {
  return covariance / marketVariance;
}

export const Alpha = (actualReturn: number, expectedReturn: number): number => {
  return actualReturn - expectedReturn;
}

export const Sharpe = (returns: number[], riskFreeRate = 0): number => {
  const avg = returns.reduce((a, b) => a + b, 0) / returns.length;
  const std = Math.sqrt(returns.reduce((a, b) => a + Math.pow(b - avg, 2), 0) / returns.length);
  return (avg - riskFreeRate) / std;
}
