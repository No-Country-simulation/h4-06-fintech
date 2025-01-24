
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.2.1
 * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
 */
Prisma.prismaVersion = {
  client: "6.2.1",
  engine: "4123509d24aa4dede1e864b46351bf2790323b69"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  firstName: 'firstName',
  lastName: 'lastName',
  password: 'password',
  avatarUrl: 'avatarUrl',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  isEmailVerified: 'isEmailVerified'
};

exports.Prisma.TargetScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  progress: 'progress',
  montoTarget: 'montoTarget',
  dateTarget: 'dateTarget',
  userId: 'userId'
};

exports.Prisma.FinancialRadiographyScalarFieldEnum = {
  id: 'id',
  monthlyIncome: 'monthlyIncome',
  monthlyExpenses: 'monthlyExpenses',
  savingCapacity: 'savingCapacity',
  debts: 'debts',
  savings: 'savings',
  userId: 'userId'
};

exports.Prisma.InvestmentPortfolioScalarFieldEnum = {
  id: 'id',
  profileRisk: 'profileRisk',
  performanceCurrent: 'performanceCurrent',
  coin: 'coin',
  userId: 'userId'
};

exports.Prisma.FinancialInstrumentScalarFieldEnum = {
  id: 'id',
  name: 'name',
  type: 'type',
  category: 'category',
  performance: 'performance',
  levelRisk: 'levelRisk',
  deadline: 'deadline',
  currency: 'currency'
};

exports.Prisma.InvestmentScalarFieldEnum = {
  id: 'id',
  amountInvested: 'amountInvested',
  performance: 'performance',
  dateInvestment: 'dateInvestment',
  portfolioId: 'portfolioId',
  instrumentId: 'instrumentId'
};

exports.Prisma.NewsScalarFieldEnum = {
  id: 'id',
  title: 'title',
  content: 'content',
  source: 'source',
  dateNews: 'dateNews',
  category: 'category',
  createdAt: 'createdAt'
};

exports.Prisma.CommentScalarFieldEnum = {
  id: 'id',
  content: 'content',
  dateComment: 'dateComment',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId',
  newsId: 'newsId'
};

exports.Prisma.WalletScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  balancePesos: 'balancePesos',
  balanceDollars: 'balanceDollars',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.WalletTransactionScalarFieldEnum = {
  id: 'id',
  walletId: 'walletId',
  type: 'type',
  amount: 'amount',
  currency: 'currency',
  description: 'description',
  createdAt: 'createdAt'
};

exports.Prisma.AdministradorScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  role: 'role',
  name: 'name'
};

exports.Prisma.SupportScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  subject: 'subject',
  message: 'message',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProfileScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  mainGoal: 'mainGoal',
  financialSkills: 'financialSkills',
  riskTolerance: 'riskTolerance',
  monthlyInvestment: 'monthlyInvestment',
  savingsOrInvestmentReason: 'savingsOrInvestmentReason',
  investmentTimeframe: 'investmentTimeframe',
  hasInvestedBefore: 'hasInvestedBefore',
  financialGoalNextYear: 'financialGoalNextYear'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.UserRole = exports.$Enums.UserRole = {
  USER: 'USER',
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR'
};

exports.CurrencyType = exports.$Enums.CurrencyType = {
  PESOS: 'PESOS',
  DOLLARS: 'DOLLARS'
};

exports.TransactionType = exports.$Enums.TransactionType = {
  DEPOSIT: 'DEPOSIT',
  WITHDRAWAL: 'WITHDRAWAL',
  TRANSFER: 'TRANSFER'
};

exports.Status = exports.$Enums.Status = {
  open: 'open',
  inProgress: 'inProgress',
  closed: 'closed'
};

exports.MainGoal = exports.$Enums.MainGoal = {
  SAVE: 'SAVE',
  INVEST: 'INVEST',
  INCOME: 'INCOME',
  RETIREMENT: 'RETIREMENT',
  OTHER: 'OTHER'
};

exports.FinancialSkills = exports.$Enums.FinancialSkills = {
  BEGINNER: 'BEGINNER',
  LEARNER: 'LEARNER',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED'
};

exports.RiskTolerance = exports.$Enums.RiskTolerance = {
  CONSERVATIVE: 'CONSERVATIVE',
  MODERATE: 'MODERATE',
  AGGRESSIVE: 'AGGRESSIVE'
};

exports.MonthlyInvestment = exports.$Enums.MonthlyInvestment = {
  LESS_THAN_30000: 'LESS_THAN_30000',
  BETWEEN_30000_50000: 'BETWEEN_30000_50000',
  MORE_THAN_50000: 'MORE_THAN_50000'
};

exports.SavingsReason = exports.$Enums.SavingsReason = {
  BUY_HOUSE: 'BUY_HOUSE',
  BUY_CAR: 'BUY_CAR',
  PLAN_VACATION: 'PLAN_VACATION',
  PERSONAL_PROJECT: 'PERSONAL_PROJECT',
  EDUCATION: 'EDUCATION',
  NO_SPECIFIC_REASON: 'NO_SPECIFIC_REASON',
  LEARNING: 'LEARNING'
};

exports.InvestmentTimeframe = exports.$Enums.InvestmentTimeframe = {
  SHORT_TERM: 'SHORT_TERM',
  MEDIUM_TERM: 'MEDIUM_TERM',
  LONG_TERM: 'LONG_TERM'
};

exports.Prisma.ModelName = {
  User: 'User',
  Target: 'Target',
  FinancialRadiography: 'FinancialRadiography',
  InvestmentPortfolio: 'InvestmentPortfolio',
  FinancialInstrument: 'FinancialInstrument',
  Investment: 'Investment',
  News: 'News',
  Comment: 'Comment',
  wallet: 'wallet',
  WalletTransaction: 'WalletTransaction',
  Administrador: 'Administrador',
  Support: 'Support',
  Profile: 'Profile'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
