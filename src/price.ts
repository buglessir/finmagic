export const percentChange = (current: number, previous: number): number => {
  return ((current - previous) / previous) * 100;
}

export const dailyReturn = (current: number, previous: number): number => {
  return percentChange(current, previous);
}

export const cumulativeReturn = (returns: number[]): number => {
  return returns.reduce((acc, r) => acc * (1 + r / 100), 1) - 1;
}
