export const volatility = (returns: number[]): number => {
  const mean = returns.reduce((a, b) => a + b, 0) / returns.length;
  return Math.sqrt(returns.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / returns.length);
}

export const positionSizing = (accountBalance: number, riskPercent: number, stopLossDistance: number): number => {
  return (accountBalance * riskPercent) / stopLossDistance;
}

export const stopLoss = (entryPrice: number, riskDistance: number): number => {
  return entryPrice - riskDistance;
}

export const takeProfit = (entryPrice: number, profitDistance: number): number => {
  return entryPrice + profitDistance;
}
