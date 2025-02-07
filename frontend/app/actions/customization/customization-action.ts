'use server';

export type CustomizationState = {
  message?: {
    [key: string]: never[];
  };
  success?: boolean;
  actionErrorMessage?: string;
};

export async function customizationAction(prevState: CustomizationState, formData: FormData) {
 
    // Try to get existing customization
   
    const data = {
      categories: formData.get('category'),
      strategy: formData.get('strategy'),
      method: formData.get('method'),
      newsSource: formData.get('newsSource'),
      instrument: formData.get('financialInstrument'),
      age: formData.get('age'),
      investingYears: formData.get('timeInvesting'),
      goal: formData.get('goal'),
      monthlyAmount: formData.get('monthlyInvestments'),
      incomeSource: formData.get('incomeSource'),
    };

    console.log(data);
   
    
    return {
     
      success: true,
      
    };

  } 
