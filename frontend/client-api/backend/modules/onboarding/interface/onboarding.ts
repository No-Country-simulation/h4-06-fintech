export interface Onboarding { 
    profile: {
        mainGoal: string;
        financialSkills: string;
        riskTolerance: string;
        monthlyInvestment: string;
        savingsOrInvestmentReason: string;
        hasInvestedBefore: string;
        investmentHorizon: string;
        financialGoal: string;
    }
}

export interface OnboardingAPI {
    createOnboarding(params: Onboarding, userId: string): Promise<Response>;
}

export type OnboardingFormData = {
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;
    question_6: string;
    question_7: string;
    question_8: string;
  };