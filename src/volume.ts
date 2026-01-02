export const VWAP = (prices: number[], volumes: number[]): number => {
  const totalVolume = volumes.reduce((a, b) => a + b, 0);
  const weightedSum = prices.reduce((sum, price, i) => sum + price * volumes[i], 0);
  return weightedSum / totalVolume;
}

export const accumulationDistribution = (priceClose: number[], priceOpen: number[], volume: number[]): number => {
  return priceClose.reduce((acc, close, i) => {
    const mfm = ((close - priceOpen[i]) / (priceClose[i] - priceOpen[i])) || 0;
    return acc + mfm * volume[i];
  }, 0);
}
