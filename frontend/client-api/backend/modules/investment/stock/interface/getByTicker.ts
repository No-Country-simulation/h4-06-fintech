export interface GetByTickerParams {
  ticker: string;
}

export type GetByTickerResponse = Stock;

export interface Stock {
  symbol: string;
  name: string;
  currency: string;
  market: string;
  marketCap: number;
  createdAt: Date;
  updatedAt: Date;
  id: number;
  priceId: number;
  volumeId: number;
  week52Id: number;
  dividendId: number;
  earningsId: number;
  price: Price;
  volume: Volume;
  week52: Week52;
  dividend: Dividend;
  earnings: Earnings;
}

export interface Dividend {
  rate: number;
  yield: number;
  date: Date;
  id: number;
}

export interface Earnings {
  nextDate: Date;
  epsTrailing12Months: number;
  epsForward: number;
  peRatio: number;
  id: number;
}

export interface Price {
  current: number;
  changePercent: number;
  open: number;
  dayLow: number;
  dayHigh: number;
  previousClose: number;
  postMarketPrice: number;
  postMarketChange: number;
  id: number;
}

export interface Volume {
  current: number;
  average3Months: number;
  average10Days: number;
  id: number;
}

export interface Week52 {
  high: number;
  low: number;
  changeFromHigh: number;
  changeFromLow: number;
  id: number;
}
