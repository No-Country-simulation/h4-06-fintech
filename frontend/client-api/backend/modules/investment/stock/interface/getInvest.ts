export type GetInvestParams = {
  id: string;
};

export type GetInvestResponse = {
  message: string;
  data: Data;
};

export interface Data {
  amountInvested: number;
  dateInvestment: Date;
  financialInstrumentId: null;
  id: string;
  portfolioId: string;
  stockSymbol: string;
  stock: Stock;
}

export interface Stock {
  symbol: string;
  name: string;
  typeDisp: string;
  marketCap: number;
  price: Price;
}

export interface Price {
  current: number;
  dayHigh: number;
  dayLow: number;
}
