import { FinancialTarget } from 'client-api/backend/modules/financial-target/interface/getOne';

export interface GetProfileResponse {
  id: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  password: string;
  avatarUrl: string | null;
  role: string;
  createdAt: Date;
  updatedAt: Date;
  isEmailVerified: boolean;
  profile: string | null;
  wallet: Wallet[];
  target: FinancialTarget[];
  // TODO - Arreglar los tipos para estos dos campos
  comment: unknown[];
  financialRadiographies: unknown[];
}

export interface Wallet {
  id: string;
  userId: string;
  balancePesos: number;
  balanceDollars: number;
  createdAt: Date;
  updatedAt: Date;
}
