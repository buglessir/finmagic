export const covariance = (a: number[], b: number[]): number => {
  const meanA = a.reduce((x, y) => x + y, 0) / a.length;
  const meanB = b.reduce((x, y) => x + y, 0) / b.length;
  return a.reduce((acc, val, i) => acc + (val - meanA) * (b[i] - meanB), 0) / a.length;
}

export const correlation = (a: number[], b: number[]): number => {
  const cov = covariance(a, b);
  const stdA = Math.sqrt(a.reduce((acc, val) => acc + Math.pow(val - a.reduce((x,y)=>x+y,0)/a.length,2),0)/a.length);
  const stdB = Math.sqrt(b.reduce((acc, val) => acc + Math.pow(val - b.reduce((x,y)=>x+y,0)/b.length,2),0)/b.length);
  return cov / (stdA * stdB);
}
