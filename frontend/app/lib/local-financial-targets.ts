// TODO - cambiar esto por llamados al backend, de manera provisoria guardamos
// los objetivos financieros en local storage

import {
  FinancialTargetLocalStorage,
  FinancialTargetSchema,
} from '@/(pages)/(authenticated)/financial-target/_actions/financial-target-action';

export function getFinancialTargets(): FinancialTargetSchema[] {
  const financialTargets: FinancialTargetLocalStorage[] =
    JSON.parse(localStorage.getItem('financialTargets')!) ?? [];

  return financialTargets.map((target) => mapFinancialTarget(target));
}

export function getFinancialTargetById(id: string) {
  const financialTargets: FinancialTargetLocalStorage[] =
    JSON.parse(localStorage.getItem('financialTargets')!) ?? [];

  const selectedTarget = financialTargets.find((target) => target.id === id);

  return selectedTarget;
}

// Transforma el objecto guardado en local storage for uno con las estructura mejor definida.
export function mapFinancialTarget(rawTarget: FinancialTargetLocalStorage) {
  return {
    amount: Number(rawTarget?.amount[0]),
    months: Number(rawTarget?.months[0]),
    name: rawTarget?.name[0] ?? '',
    priority: rawTarget?.priority[0] ?? '',
    id: rawTarget.id,
  };
}
