import { MakeResponseParams } from './makeTransaction';

export interface WalletApi {
  makeTransaction: (params: MakeResponseParams) => Promise<void>;
}
