export type GetParams = {
  id: string;
};

export type GetResponse = Portfolio;

export interface Portfolio {
  id: string;
  userId: string;
  name: string;
  createdAt: Date;
  investments: Investment[];
}

export interface Investment {
  id: string;
  amountInvested: number;
  dateInvestment: Date;
  portfolioId: string;
  financialInstrumentId: string | null;
  stockSymbol: string;
}
