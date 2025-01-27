export interface GetProfileResponse {
  id: string;
  name: null;
  email: string;
  password: string;
  age: null | number;
  educationLevel: null | string;
  levelKnowledgeFinancial: null | string;
  riskPreferences: null | string;
  isActive: boolean;
  firstName: null;
  lastName: null;
  avatarUrl: null;
  role: 'USER';
  createdAt: string;
  updatedAt: string;
  isEmailVerified: boolean;
  profile: {
    id: string;
    userId: string;
    riskTolerance: string;
    investmentHorizon: string;
    financialSkills: string;
    hasInvestedBefore: string;
    financialGoal: string;
    mainGoal: string;
    monthlyInvestment: string;
    savingsOrInvestmentReason: string;
  },
  wallet: [
    {
      id: string;
      userId: string;
      balancePesos: number;
      balanceDollars: number;
      createdAt: string;
      updatedAt: string;
    }
  ],
  comment: [],
  financialRadiographies: []
}
