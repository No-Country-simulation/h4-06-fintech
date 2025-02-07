import { isActive } from './ping';

// Modules
import { authApi } from './modules/auth/auth.api';
import { financialTargetApi } from './modules/financial-target/financial-target.api';
import { stockApi } from './modules/investment/stock/stock.api';
import { walletApi } from './modules/wallet/wallet.api';
import { newsApi } from './modules/community/news/news.api';
import { commentApi } from './modules/community/comment/comment.api';
import { customizationApi } from './modules/customization/customization';
import { portfolioApi } from './modules/investment/portfolio/portfolio.api';
import { chatbotApi } from './modules/chatbot/chatbot-api';

export const backend = {
  isActive,
  authApi,
  financialTargetApi,
  customizationApi,
  walletApi,
  chatbotApi,
  investment: {
    stockApi,
    portfolioApi,
  },
  community: {
    newsApi,
    commentApi,
  },
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
