export type GetTickersResponse = Ticker[];

export type Ticker = {
  symbol: string;
  companyName: string;
  price: {
    current: number;
    previousClose: number;
  };
  riskLevel: string;
  timeHorizon: string;
  expectedReturn: string;
};
