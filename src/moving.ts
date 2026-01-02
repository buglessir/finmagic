export const SMA = (data: number[], period: number): number => {
  const slice = data.slice(-period);
  const sum = slice.reduce((a, b) => a + b, 0);
  return sum / slice.length;
}

export const EMA = (data: number[], period: number): number => {
  const k = 2 / (period + 1);
  return data.reduce((prev, curr) => curr * k + prev * (1 - k));
}
