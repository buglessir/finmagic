# 💰 finmagic

A TypeScript library for essential financial, technical, and statistical calculations. Designed for Node.js and browser environments, `finmagic` provides fast and reliable methods for traders, analysts, and developers.

![npm version](https://img.shields.io/npm/v/finmagic)
![npm license](https://img.shields.io/github/license/buglessir/finmagic)
![npm downloads](https://img.shields.io/npm/dm/finmagic)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/finmagic)

## Features

- Price calculations:
  - `percentChange(current: number, previous: number): number`
  - `dailyReturn(current: number, previous: number): number`
  - `cumulativeReturn(returns: number[]): number`
- Moving averages:
  - `SMA(values: number[], period: number): number`
  - `EMA(values: number[], period: number): number`
- Financial calculations:
  - `PV(futureValue: number, rate: number, periods: number): number`
  - `FV(presentValue: number, rate: number, periods: number): number`
  - `NPV(rate: number, cashFlows: number[]): number`
  - `IRR(cashFlows: number[], guess?: number): number`
- Financial ratios:
  - `PE(price: number, earnings: number): number`
  - `PB(price: number, bookValue: number): number`
  - `DividendYield(dividend: number, price: number): number`
  - `Beta(portfolioReturn: number, marketReturn: number): number`
  - `Alpha(expectedReturn: number, actualReturn: number): number`
  - `Sharpe(returns: number[]): number`
- Risk management:
  - `volatility(returns: number[]): number`
  - `positionSizing(capital: number, risk: number, stopLossPoints: number): number`
  - `stopLoss(entryPrice: number, percent: number): number`
  - `takeProfit(entryPrice: number, percent: number): number`
- Volume indicators:
  - `VWAP(prices: number[], volumes: number[]): number`
  - `accumulationDistribution(close: number[], open: number[], volume: number[]): number`
- Statistical functions:
  - `covariance(a: number[], b: number[]): number`
  - `correlation(a: number[], b: number[]): number`

## Installation

```bash
npm install finmagic
```

## Test

```bash
npm run tests
```

## Build

```bash
npm run build
```

## Usage
```javascript
import { SMA, PV, Sharpe } from 'finmagic';

const prices = [10, 12, 11, 13, 15];
const average = SMA(prices, 5);

const presentValue = PV(1000, 0.05, 3);

const returns = [0.01, 0.02, 0.03];
const sharpeRatio = Sharpe(returns);
```

### Contributing

Contributions, bug reports, and feature requests are welcome. Please submit via GitHub issues or pull requests.
