'use server';

import { backend } from '@api';
import zod from 'zod';

const investStockSchema = zod.object({
  amountInvested: zod.coerce.number(),
  stockSymbol: zod.string(),
  portfolioId: zod.string(),
});

export type InvestStockSchema = zod.infer<typeof investStockSchema>;

export type InvestStockState = {
  message?: {
    amountInvested?: string[];
    stockSymbol?: string[];
    portfolioId?: string[];
  };
  success?: boolean;
  actionErrorMessage?: string;
};

export async function investStockAction(
  prevState: InvestStockState,
  formData: FormData,
): Promise<InvestStockState> {
  const amountInvested = formData.get('amountInvested');
  const stockSymbol = formData.get('stockSymbol');
  const portfolioId = formData.get('portfolioId');
  const data = { amountInvested, stockSymbol, portfolioId };

  const result = investStockSchema.safeParse(data);

  if (!result.success) {
    return {
      message: result.error.flatten().fieldErrors,
      success: false,
    };
  }

  try {
    await backend.investment.stockApi.invest({
      amountInvested: result.data.amountInvested,
      portfolioId: result.data.portfolioId,
      stockSymbol: result.data.stockSymbol,
    });

    return { success: true };
  } catch (e) {
    const errorMessage =
      e instanceof Error ? e.message : 'Ocurrió un error desconocido.';

    return { success: false, actionErrorMessage: errorMessage };
  }
}
