import {
  FinancialTargetLocalStorage,
  FinancialTargetSchema,
} from '@/(pages)/(authenticated)/financial-target/_actions/financial-target-action';

export function getFinancialTargets(): FinancialTargetSchema[] {
  const financialTargets: FinancialTargetLocalStorage[] =
    JSON.parse(localStorage.getItem('financialTargets')!) ?? [];

  return financialTargets.map((target) => ({
    amount: Number(target?.amount[0]),
    months: Number(target?.months[0]),
    name: target?.name[0] ?? '',
    priority: target?.priority[0] ?? '',
  }));
}
