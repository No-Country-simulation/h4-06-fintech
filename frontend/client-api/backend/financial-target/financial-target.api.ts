// TODO - aca habria que hacer llamados al backend, por ahora se usan las funciones
// para obtener los objetivos guardados en local storageº

import {
  getFinancialTargetById,
  getFinancialTargets,
} from '@/lib/local-financial-targets';
import { FinancialTargetAPI } from './interface/api.interface';

const financialTargetApi: FinancialTargetAPI = {
  async getAll() {
    const target = getFinancialTargets();
    return target;
  },
  async getOne({ id }) {
    const target = getFinancialTargetById(id);
    if (!target) {
      throw new Error('Target no encontrado');
    }
    return target;
  },
  async addFunds(params) {
    console.log({ params });
  },
  async toggleStatus(params) {
    console.log({ params });
  },
};

export { financialTargetApi };
