import { isActive } from './ping';

// Modules
import { authApi } from './modules/auth/auth.api';
import { financialTargetApi } from './modules/financial-target/financial-target.api';

export const backend = {
  authApi,
  isActive,
  financialTargetApi,
};

// Exporta un objecto que tiene mas objectos con funciones, para usarlos seria algo asi
//
// **/signup-action.ts**
//
// const response = await backend.auth.signup({...})
//
// **(fetch desde un server component)
//
// export async function WalletComponent(){
//   const data = await backend.wallet.getRecentMovements
//
//   return (
//     <div>
//      ...
//     </div>
//   )
// }
