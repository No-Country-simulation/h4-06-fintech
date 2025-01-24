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
}
