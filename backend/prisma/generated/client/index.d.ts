
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Target
 * 
 */
export type Target = $Result.DefaultSelection<Prisma.$TargetPayload>
/**
 * Model FinancialRadiography
 * 
 */
export type FinancialRadiography = $Result.DefaultSelection<Prisma.$FinancialRadiographyPayload>
/**
 * Model InvestmentPortfolio
 * 
 */
export type InvestmentPortfolio = $Result.DefaultSelection<Prisma.$InvestmentPortfolioPayload>
/**
 * Model FinancialInstrument
 * 
 */
export type FinancialInstrument = $Result.DefaultSelection<Prisma.$FinancialInstrumentPayload>
/**
 * Model Investment
 * 
 */
export type Investment = $Result.DefaultSelection<Prisma.$InvestmentPayload>
/**
 * Model News
 * 
 */
export type News = $Result.DefaultSelection<Prisma.$NewsPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model wallet
 * 
 */
export type wallet = $Result.DefaultSelection<Prisma.$walletPayload>
/**
 * Model WalletTransaction
 * 
 */
export type WalletTransaction = $Result.DefaultSelection<Prisma.$WalletTransactionPayload>
/**
 * Model Administrador
 * 
 */
export type Administrador = $Result.DefaultSelection<Prisma.$AdministradorPayload>
/**
 * Model Support
 * 
 */
export type Support = $Result.DefaultSelection<Prisma.$SupportPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TransactionType: {
  DEPOSIT: 'DEPOSIT',
  WITHDRAWAL: 'WITHDRAWAL',
  TRANSFER: 'TRANSFER'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const CurrencyType: {
  PESOS: 'PESOS',
  DOLLARS: 'DOLLARS'
};

export type CurrencyType = (typeof CurrencyType)[keyof typeof CurrencyType]


export const UserRole: {
  USER: 'USER',
  ADMIN: 'ADMIN',
  MODERATOR: 'MODERATOR'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const Status: {
  open: 'open',
  inProgress: 'inProgress',
  closed: 'closed'
};

export type Status = (typeof Status)[keyof typeof Status]


export const FinancialGoal: {
  SAVINGS: 'SAVINGS',
  INVESTMENT: 'INVESTMENT',
  RETIREMENT: 'RETIREMENT',
  EDUCATION: 'EDUCATION',
  EMERGENCY_FUND: 'EMERGENCY_FUND',
  PASSIVE_INCOME: 'PASSIVE_INCOME',
  OTHER: 'OTHER'
};

export type FinancialGoal = (typeof FinancialGoal)[keyof typeof FinancialGoal]


export const InvestmentHorizon: {
  SHORT_TERM: 'SHORT_TERM',
  MEDIUM_TERM: 'MEDIUM_TERM',
  LONG_TERM: 'LONG_TERM'
};

export type InvestmentHorizon = (typeof InvestmentHorizon)[keyof typeof InvestmentHorizon]


export const KnowledgeLevel: {
  BASIC: 'BASIC',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED'
};

export type KnowledgeLevel = (typeof KnowledgeLevel)[keyof typeof KnowledgeLevel]


export const RiskTolerance: {
  CONSERVATIVE: 'CONSERVATIVE',
  MODERATE: 'MODERATE',
  AGGRESSIVE: 'AGGRESSIVE'
};

export type RiskTolerance = (typeof RiskTolerance)[keyof typeof RiskTolerance]


export const ReactionToLoss: {
  WITHDRAW_IMMEDIATELY: 'WITHDRAW_IMMEDIATELY',
  WAIT_RECOVERY: 'WAIT_RECOVERY',
  INVEST_MORE: 'INVEST_MORE'
};

export type ReactionToLoss = (typeof ReactionToLoss)[keyof typeof ReactionToLoss]


export const MainGoal: {
  SAVE: 'SAVE',
  INVEST: 'INVEST',
  INCOME: 'INCOME',
  RETIREMENT: 'RETIREMENT',
  OTHER: 'OTHER'
};

export type MainGoal = (typeof MainGoal)[keyof typeof MainGoal]


export const FinancialSkills: {
  BEGINNER: 'BEGINNER',
  LEARNER: 'LEARNER',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED'
};

export type FinancialSkills = (typeof FinancialSkills)[keyof typeof FinancialSkills]


export const MonthlyInvestment: {
  LESS_THAN_30000: 'LESS_THAN_30000',
  BETWEEN_30000_50000: 'BETWEEN_30000_50000',
  MORE_THAN_50000: 'MORE_THAN_50000'
};

export type MonthlyInvestment = (typeof MonthlyInvestment)[keyof typeof MonthlyInvestment]


export const SavingsReason: {
  BUY_HOUSE: 'BUY_HOUSE',
  BUY_CAR: 'BUY_CAR',
  PLAN_VACATION: 'PLAN_VACATION',
  PERSONAL_PROJECT: 'PERSONAL_PROJECT',
  EDUCATION: 'EDUCATION',
  NO_SPECIFIC_REASON: 'NO_SPECIFIC_REASON',
  LEARNING: 'LEARNING'
};

export type SavingsReason = (typeof SavingsReason)[keyof typeof SavingsReason]


export const InvestmentTimeframe: {
  SHORT_TERM: 'SHORT_TERM',
  MEDIUM_TERM: 'MEDIUM_TERM',
  LONG_TERM: 'LONG_TERM'
};

export type InvestmentTimeframe = (typeof InvestmentTimeframe)[keyof typeof InvestmentTimeframe]

}

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type CurrencyType = $Enums.CurrencyType

export const CurrencyType: typeof $Enums.CurrencyType

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type FinancialGoal = $Enums.FinancialGoal

export const FinancialGoal: typeof $Enums.FinancialGoal

export type InvestmentHorizon = $Enums.InvestmentHorizon

export const InvestmentHorizon: typeof $Enums.InvestmentHorizon

export type KnowledgeLevel = $Enums.KnowledgeLevel

export const KnowledgeLevel: typeof $Enums.KnowledgeLevel

export type RiskTolerance = $Enums.RiskTolerance

export const RiskTolerance: typeof $Enums.RiskTolerance

export type ReactionToLoss = $Enums.ReactionToLoss

export const ReactionToLoss: typeof $Enums.ReactionToLoss

export type MainGoal = $Enums.MainGoal

export const MainGoal: typeof $Enums.MainGoal

export type FinancialSkills = $Enums.FinancialSkills

export const FinancialSkills: typeof $Enums.FinancialSkills

export type MonthlyInvestment = $Enums.MonthlyInvestment

export const MonthlyInvestment: typeof $Enums.MonthlyInvestment

export type SavingsReason = $Enums.SavingsReason

export const SavingsReason: typeof $Enums.SavingsReason

export type InvestmentTimeframe = $Enums.InvestmentTimeframe

export const InvestmentTimeframe: typeof $Enums.InvestmentTimeframe

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.target`: Exposes CRUD operations for the **Target** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Targets
    * const targets = await prisma.target.findMany()
    * ```
    */
  get target(): Prisma.TargetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.financialRadiography`: Exposes CRUD operations for the **FinancialRadiography** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinancialRadiographies
    * const financialRadiographies = await prisma.financialRadiography.findMany()
    * ```
    */
  get financialRadiography(): Prisma.FinancialRadiographyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.investmentPortfolio`: Exposes CRUD operations for the **InvestmentPortfolio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InvestmentPortfolios
    * const investmentPortfolios = await prisma.investmentPortfolio.findMany()
    * ```
    */
  get investmentPortfolio(): Prisma.InvestmentPortfolioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.financialInstrument`: Exposes CRUD operations for the **FinancialInstrument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinancialInstruments
    * const financialInstruments = await prisma.financialInstrument.findMany()
    * ```
    */
  get financialInstrument(): Prisma.FinancialInstrumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.investment`: Exposes CRUD operations for the **Investment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Investments
    * const investments = await prisma.investment.findMany()
    * ```
    */
  get investment(): Prisma.InvestmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.news`: Exposes CRUD operations for the **News** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more News
    * const news = await prisma.news.findMany()
    * ```
    */
  get news(): Prisma.NewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wallet`: Exposes CRUD operations for the **wallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallets
    * const wallets = await prisma.wallet.findMany()
    * ```
    */
  get wallet(): Prisma.walletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.walletTransaction`: Exposes CRUD operations for the **WalletTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WalletTransactions
    * const walletTransactions = await prisma.walletTransaction.findMany()
    * ```
    */
  get walletTransaction(): Prisma.WalletTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.administrador`: Exposes CRUD operations for the **Administrador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Administradors
    * const administradors = await prisma.administrador.findMany()
    * ```
    */
  get administrador(): Prisma.AdministradorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.support`: Exposes CRUD operations for the **Support** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Supports
    * const supports = await prisma.support.findMany()
    * ```
    */
  get support(): Prisma.SupportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.2.1
   * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "target" | "financialRadiography" | "investmentPortfolio" | "financialInstrument" | "investment" | "news" | "comment" | "wallet" | "walletTransaction" | "administrador" | "support" | "profile"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Target: {
        payload: Prisma.$TargetPayload<ExtArgs>
        fields: Prisma.TargetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TargetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TargetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetPayload>
          }
          findFirst: {
            args: Prisma.TargetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TargetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetPayload>
          }
          findMany: {
            args: Prisma.TargetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetPayload>[]
          }
          create: {
            args: Prisma.TargetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetPayload>
          }
          createMany: {
            args: Prisma.TargetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TargetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetPayload>[]
          }
          delete: {
            args: Prisma.TargetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetPayload>
          }
          update: {
            args: Prisma.TargetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetPayload>
          }
          deleteMany: {
            args: Prisma.TargetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TargetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TargetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetPayload>[]
          }
          upsert: {
            args: Prisma.TargetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetPayload>
          }
          aggregate: {
            args: Prisma.TargetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTarget>
          }
          groupBy: {
            args: Prisma.TargetGroupByArgs<ExtArgs>
            result: $Utils.Optional<TargetGroupByOutputType>[]
          }
          count: {
            args: Prisma.TargetCountArgs<ExtArgs>
            result: $Utils.Optional<TargetCountAggregateOutputType> | number
          }
        }
      }
      FinancialRadiography: {
        payload: Prisma.$FinancialRadiographyPayload<ExtArgs>
        fields: Prisma.FinancialRadiographyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinancialRadiographyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialRadiographyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinancialRadiographyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialRadiographyPayload>
          }
          findFirst: {
            args: Prisma.FinancialRadiographyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialRadiographyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinancialRadiographyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialRadiographyPayload>
          }
          findMany: {
            args: Prisma.FinancialRadiographyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialRadiographyPayload>[]
          }
          create: {
            args: Prisma.FinancialRadiographyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialRadiographyPayload>
          }
          createMany: {
            args: Prisma.FinancialRadiographyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinancialRadiographyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialRadiographyPayload>[]
          }
          delete: {
            args: Prisma.FinancialRadiographyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialRadiographyPayload>
          }
          update: {
            args: Prisma.FinancialRadiographyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialRadiographyPayload>
          }
          deleteMany: {
            args: Prisma.FinancialRadiographyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinancialRadiographyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FinancialRadiographyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialRadiographyPayload>[]
          }
          upsert: {
            args: Prisma.FinancialRadiographyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialRadiographyPayload>
          }
          aggregate: {
            args: Prisma.FinancialRadiographyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinancialRadiography>
          }
          groupBy: {
            args: Prisma.FinancialRadiographyGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinancialRadiographyGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinancialRadiographyCountArgs<ExtArgs>
            result: $Utils.Optional<FinancialRadiographyCountAggregateOutputType> | number
          }
        }
      }
      InvestmentPortfolio: {
        payload: Prisma.$InvestmentPortfolioPayload<ExtArgs>
        fields: Prisma.InvestmentPortfolioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvestmentPortfolioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPortfolioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvestmentPortfolioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPortfolioPayload>
          }
          findFirst: {
            args: Prisma.InvestmentPortfolioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPortfolioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvestmentPortfolioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPortfolioPayload>
          }
          findMany: {
            args: Prisma.InvestmentPortfolioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPortfolioPayload>[]
          }
          create: {
            args: Prisma.InvestmentPortfolioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPortfolioPayload>
          }
          createMany: {
            args: Prisma.InvestmentPortfolioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvestmentPortfolioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPortfolioPayload>[]
          }
          delete: {
            args: Prisma.InvestmentPortfolioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPortfolioPayload>
          }
          update: {
            args: Prisma.InvestmentPortfolioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPortfolioPayload>
          }
          deleteMany: {
            args: Prisma.InvestmentPortfolioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvestmentPortfolioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvestmentPortfolioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPortfolioPayload>[]
          }
          upsert: {
            args: Prisma.InvestmentPortfolioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPortfolioPayload>
          }
          aggregate: {
            args: Prisma.InvestmentPortfolioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvestmentPortfolio>
          }
          groupBy: {
            args: Prisma.InvestmentPortfolioGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvestmentPortfolioGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvestmentPortfolioCountArgs<ExtArgs>
            result: $Utils.Optional<InvestmentPortfolioCountAggregateOutputType> | number
          }
        }
      }
      FinancialInstrument: {
        payload: Prisma.$FinancialInstrumentPayload<ExtArgs>
        fields: Prisma.FinancialInstrumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinancialInstrumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialInstrumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinancialInstrumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialInstrumentPayload>
          }
          findFirst: {
            args: Prisma.FinancialInstrumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialInstrumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinancialInstrumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialInstrumentPayload>
          }
          findMany: {
            args: Prisma.FinancialInstrumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialInstrumentPayload>[]
          }
          create: {
            args: Prisma.FinancialInstrumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialInstrumentPayload>
          }
          createMany: {
            args: Prisma.FinancialInstrumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinancialInstrumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialInstrumentPayload>[]
          }
          delete: {
            args: Prisma.FinancialInstrumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialInstrumentPayload>
          }
          update: {
            args: Prisma.FinancialInstrumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialInstrumentPayload>
          }
          deleteMany: {
            args: Prisma.FinancialInstrumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinancialInstrumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FinancialInstrumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialInstrumentPayload>[]
          }
          upsert: {
            args: Prisma.FinancialInstrumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialInstrumentPayload>
          }
          aggregate: {
            args: Prisma.FinancialInstrumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinancialInstrument>
          }
          groupBy: {
            args: Prisma.FinancialInstrumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinancialInstrumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinancialInstrumentCountArgs<ExtArgs>
            result: $Utils.Optional<FinancialInstrumentCountAggregateOutputType> | number
          }
        }
      }
      Investment: {
        payload: Prisma.$InvestmentPayload<ExtArgs>
        fields: Prisma.InvestmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvestmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvestmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          findFirst: {
            args: Prisma.InvestmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvestmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          findMany: {
            args: Prisma.InvestmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          create: {
            args: Prisma.InvestmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          createMany: {
            args: Prisma.InvestmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvestmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          delete: {
            args: Prisma.InvestmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          update: {
            args: Prisma.InvestmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          deleteMany: {
            args: Prisma.InvestmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvestmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvestmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>[]
          }
          upsert: {
            args: Prisma.InvestmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvestmentPayload>
          }
          aggregate: {
            args: Prisma.InvestmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvestment>
          }
          groupBy: {
            args: Prisma.InvestmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvestmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvestmentCountArgs<ExtArgs>
            result: $Utils.Optional<InvestmentCountAggregateOutputType> | number
          }
        }
      }
      News: {
        payload: Prisma.$NewsPayload<ExtArgs>
        fields: Prisma.NewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findFirst: {
            args: Prisma.NewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findMany: {
            args: Prisma.NewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          create: {
            args: Prisma.NewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          createMany: {
            args: Prisma.NewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          delete: {
            args: Prisma.NewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          update: {
            args: Prisma.NewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          deleteMany: {
            args: Prisma.NewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          upsert: {
            args: Prisma.NewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          aggregate: {
            args: Prisma.NewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNews>
          }
          groupBy: {
            args: Prisma.NewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsCountArgs<ExtArgs>
            result: $Utils.Optional<NewsCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      wallet: {
        payload: Prisma.$walletPayload<ExtArgs>
        fields: Prisma.walletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.walletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.walletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload>
          }
          findFirst: {
            args: Prisma.walletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.walletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload>
          }
          findMany: {
            args: Prisma.walletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload>[]
          }
          create: {
            args: Prisma.walletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload>
          }
          createMany: {
            args: Prisma.walletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.walletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload>[]
          }
          delete: {
            args: Prisma.walletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload>
          }
          update: {
            args: Prisma.walletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload>
          }
          deleteMany: {
            args: Prisma.walletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.walletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.walletUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload>[]
          }
          upsert: {
            args: Prisma.walletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$walletPayload>
          }
          aggregate: {
            args: Prisma.WalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallet>
          }
          groupBy: {
            args: Prisma.walletGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.walletCountArgs<ExtArgs>
            result: $Utils.Optional<WalletCountAggregateOutputType> | number
          }
        }
      }
      WalletTransaction: {
        payload: Prisma.$WalletTransactionPayload<ExtArgs>
        fields: Prisma.WalletTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          findFirst: {
            args: Prisma.WalletTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          findMany: {
            args: Prisma.WalletTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>[]
          }
          create: {
            args: Prisma.WalletTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          createMany: {
            args: Prisma.WalletTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WalletTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>[]
          }
          delete: {
            args: Prisma.WalletTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          update: {
            args: Prisma.WalletTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          deleteMany: {
            args: Prisma.WalletTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WalletTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>[]
          }
          upsert: {
            args: Prisma.WalletTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletTransactionPayload>
          }
          aggregate: {
            args: Prisma.WalletTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWalletTransaction>
          }
          groupBy: {
            args: Prisma.WalletTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<WalletTransactionCountAggregateOutputType> | number
          }
        }
      }
      Administrador: {
        payload: Prisma.$AdministradorPayload<ExtArgs>
        fields: Prisma.AdministradorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdministradorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdministradorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          findFirst: {
            args: Prisma.AdministradorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdministradorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          findMany: {
            args: Prisma.AdministradorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>[]
          }
          create: {
            args: Prisma.AdministradorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          createMany: {
            args: Prisma.AdministradorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdministradorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>[]
          }
          delete: {
            args: Prisma.AdministradorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          update: {
            args: Prisma.AdministradorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          deleteMany: {
            args: Prisma.AdministradorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdministradorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdministradorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>[]
          }
          upsert: {
            args: Prisma.AdministradorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          aggregate: {
            args: Prisma.AdministradorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdministrador>
          }
          groupBy: {
            args: Prisma.AdministradorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdministradorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdministradorCountArgs<ExtArgs>
            result: $Utils.Optional<AdministradorCountAggregateOutputType> | number
          }
        }
      }
      Support: {
        payload: Prisma.$SupportPayload<ExtArgs>
        fields: Prisma.SupportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPayload>
          }
          findFirst: {
            args: Prisma.SupportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPayload>
          }
          findMany: {
            args: Prisma.SupportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPayload>[]
          }
          create: {
            args: Prisma.SupportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPayload>
          }
          createMany: {
            args: Prisma.SupportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPayload>[]
          }
          delete: {
            args: Prisma.SupportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPayload>
          }
          update: {
            args: Prisma.SupportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPayload>
          }
          deleteMany: {
            args: Prisma.SupportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPayload>[]
          }
          upsert: {
            args: Prisma.SupportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupportPayload>
          }
          aggregate: {
            args: Prisma.SupportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupport>
          }
          groupBy: {
            args: Prisma.SupportGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupportGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupportCountArgs<ExtArgs>
            result: $Utils.Optional<SupportCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    target?: TargetOmit
    financialRadiography?: FinancialRadiographyOmit
    investmentPortfolio?: InvestmentPortfolioOmit
    financialInstrument?: FinancialInstrumentOmit
    investment?: InvestmentOmit
    news?: NewsOmit
    comment?: CommentOmit
    wallet?: walletOmit
    walletTransaction?: WalletTransactionOmit
    administrador?: AdministradorOmit
    support?: SupportOmit
    profile?: ProfileOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    wallet: number
    financialRadiographies: number
    comment: number
    Support: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | UserCountOutputTypeCountWalletArgs
    financialRadiographies?: boolean | UserCountOutputTypeCountFinancialRadiographiesArgs
    comment?: boolean | UserCountOutputTypeCountCommentArgs
    Support?: boolean | UserCountOutputTypeCountSupportArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWalletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: walletWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFinancialRadiographiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialRadiographyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSupportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupportWhereInput
  }


  /**
   * Count Type InvestmentPortfolioCountOutputType
   */

  export type InvestmentPortfolioCountOutputType = {
    investment: number
  }

  export type InvestmentPortfolioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investment?: boolean | InvestmentPortfolioCountOutputTypeCountInvestmentArgs
  }

  // Custom InputTypes
  /**
   * InvestmentPortfolioCountOutputType without action
   */
  export type InvestmentPortfolioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentPortfolioCountOutputType
     */
    select?: InvestmentPortfolioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InvestmentPortfolioCountOutputType without action
   */
  export type InvestmentPortfolioCountOutputTypeCountInvestmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentWhereInput
  }


  /**
   * Count Type FinancialInstrumentCountOutputType
   */

  export type FinancialInstrumentCountOutputType = {
    Investment: number
  }

  export type FinancialInstrumentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Investment?: boolean | FinancialInstrumentCountOutputTypeCountInvestmentArgs
  }

  // Custom InputTypes
  /**
   * FinancialInstrumentCountOutputType without action
   */
  export type FinancialInstrumentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialInstrumentCountOutputType
     */
    select?: FinancialInstrumentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FinancialInstrumentCountOutputType without action
   */
  export type FinancialInstrumentCountOutputTypeCountInvestmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentWhereInput
  }


  /**
   * Count Type NewsCountOutputType
   */

  export type NewsCountOutputType = {
    comment: number
  }

  export type NewsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment?: boolean | NewsCountOutputTypeCountCommentArgs
  }

  // Custom InputTypes
  /**
   * NewsCountOutputType without action
   */
  export type NewsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCountOutputType
     */
    select?: NewsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsCountOutputType without action
   */
  export type NewsCountOutputTypeCountCommentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type WalletCountOutputType
   */

  export type WalletCountOutputType = {
    transactions: number
  }

  export type WalletCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | WalletCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletCountOutputType
     */
    select?: WalletCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WalletCountOutputType without action
   */
  export type WalletCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletTransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    password: string | null
    avatarUrl: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
    isEmailVerified: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    password: string | null
    avatarUrl: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
    isEmailVerified: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    firstName: number
    lastName: number
    password: number
    avatarUrl: number
    role: number
    createdAt: number
    updatedAt: number
    isEmailVerified: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    password?: true
    avatarUrl?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    isEmailVerified?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    password?: true
    avatarUrl?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    isEmailVerified?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    password?: true
    avatarUrl?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    isEmailVerified?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    firstName: string | null
    lastName: string | null
    password: string
    avatarUrl: string | null
    role: $Enums.UserRole | null
    createdAt: Date
    updatedAt: Date
    isEmailVerified: boolean
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    password?: boolean
    avatarUrl?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isEmailVerified?: boolean
    wallet?: boolean | User$walletArgs<ExtArgs>
    financialRadiographies?: boolean | User$financialRadiographiesArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    comment?: boolean | User$commentArgs<ExtArgs>
    Support?: boolean | User$SupportArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    password?: boolean
    avatarUrl?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isEmailVerified?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    password?: boolean
    avatarUrl?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isEmailVerified?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    password?: boolean
    avatarUrl?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isEmailVerified?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "firstName" | "lastName" | "password" | "avatarUrl" | "role" | "createdAt" | "updatedAt" | "isEmailVerified", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | User$walletArgs<ExtArgs>
    financialRadiographies?: boolean | User$financialRadiographiesArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    comment?: boolean | User$commentArgs<ExtArgs>
    Support?: boolean | User$SupportArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      wallet: Prisma.$walletPayload<ExtArgs>[]
      financialRadiographies: Prisma.$FinancialRadiographyPayload<ExtArgs>[]
      profile: Prisma.$ProfilePayload<ExtArgs> | null
      comment: Prisma.$CommentPayload<ExtArgs>[]
      Support: Prisma.$SupportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      firstName: string | null
      lastName: string | null
      password: string
      avatarUrl: string | null
      role: $Enums.UserRole | null
      createdAt: Date
      updatedAt: Date
      isEmailVerified: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallet<T extends User$walletArgs<ExtArgs> = {}>(args?: Subset<T, User$walletArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    financialRadiographies<T extends User$financialRadiographiesArgs<ExtArgs> = {}>(args?: Subset<T, User$financialRadiographiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialRadiographyPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    comment<T extends User$commentArgs<ExtArgs> = {}>(args?: Subset<T, User$commentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Support<T extends User$SupportArgs<ExtArgs> = {}>(args?: Subset<T, User$SupportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.wallet
   */
  export type User$walletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
    where?: walletWhereInput
    orderBy?: walletOrderByWithRelationInput | walletOrderByWithRelationInput[]
    cursor?: walletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * User.financialRadiographies
   */
  export type User$financialRadiographiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialRadiography
     */
    select?: FinancialRadiographySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialRadiography
     */
    omit?: FinancialRadiographyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialRadiographyInclude<ExtArgs> | null
    where?: FinancialRadiographyWhereInput
    orderBy?: FinancialRadiographyOrderByWithRelationInput | FinancialRadiographyOrderByWithRelationInput[]
    cursor?: FinancialRadiographyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinancialRadiographyScalarFieldEnum | FinancialRadiographyScalarFieldEnum[]
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User.comment
   */
  export type User$commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.Support
   */
  export type User$SupportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Support
     */
    select?: SupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Support
     */
    omit?: SupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportInclude<ExtArgs> | null
    where?: SupportWhereInput
    orderBy?: SupportOrderByWithRelationInput | SupportOrderByWithRelationInput[]
    cursor?: SupportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupportScalarFieldEnum | SupportScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Target
   */

  export type AggregateTarget = {
    _count: TargetCountAggregateOutputType | null
    _avg: TargetAvgAggregateOutputType | null
    _sum: TargetSumAggregateOutputType | null
    _min: TargetMinAggregateOutputType | null
    _max: TargetMaxAggregateOutputType | null
  }

  export type TargetAvgAggregateOutputType = {
    montoTarget: number | null
  }

  export type TargetSumAggregateOutputType = {
    montoTarget: number | null
  }

  export type TargetMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    progress: string | null
    montoTarget: number | null
    dateTarget: Date | null
    userId: string | null
  }

  export type TargetMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    progress: string | null
    montoTarget: number | null
    dateTarget: Date | null
    userId: string | null
  }

  export type TargetCountAggregateOutputType = {
    id: number
    name: number
    description: number
    progress: number
    montoTarget: number
    dateTarget: number
    userId: number
    _all: number
  }


  export type TargetAvgAggregateInputType = {
    montoTarget?: true
  }

  export type TargetSumAggregateInputType = {
    montoTarget?: true
  }

  export type TargetMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    progress?: true
    montoTarget?: true
    dateTarget?: true
    userId?: true
  }

  export type TargetMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    progress?: true
    montoTarget?: true
    dateTarget?: true
    userId?: true
  }

  export type TargetCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    progress?: true
    montoTarget?: true
    dateTarget?: true
    userId?: true
    _all?: true
  }

  export type TargetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Target to aggregate.
     */
    where?: TargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Targets to fetch.
     */
    orderBy?: TargetOrderByWithRelationInput | TargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Targets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Targets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Targets
    **/
    _count?: true | TargetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TargetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TargetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TargetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TargetMaxAggregateInputType
  }

  export type GetTargetAggregateType<T extends TargetAggregateArgs> = {
        [P in keyof T & keyof AggregateTarget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTarget[P]>
      : GetScalarType<T[P], AggregateTarget[P]>
  }




  export type TargetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TargetWhereInput
    orderBy?: TargetOrderByWithAggregationInput | TargetOrderByWithAggregationInput[]
    by: TargetScalarFieldEnum[] | TargetScalarFieldEnum
    having?: TargetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TargetCountAggregateInputType | true
    _avg?: TargetAvgAggregateInputType
    _sum?: TargetSumAggregateInputType
    _min?: TargetMinAggregateInputType
    _max?: TargetMaxAggregateInputType
  }

  export type TargetGroupByOutputType = {
    id: string
    name: string
    description: string
    progress: string
    montoTarget: number
    dateTarget: Date
    userId: string
    _count: TargetCountAggregateOutputType | null
    _avg: TargetAvgAggregateOutputType | null
    _sum: TargetSumAggregateOutputType | null
    _min: TargetMinAggregateOutputType | null
    _max: TargetMaxAggregateOutputType | null
  }

  type GetTargetGroupByPayload<T extends TargetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TargetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TargetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TargetGroupByOutputType[P]>
            : GetScalarType<T[P], TargetGroupByOutputType[P]>
        }
      >
    >


  export type TargetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    progress?: boolean
    montoTarget?: boolean
    dateTarget?: boolean
    userId?: boolean
  }, ExtArgs["result"]["target"]>

  export type TargetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    progress?: boolean
    montoTarget?: boolean
    dateTarget?: boolean
    userId?: boolean
  }, ExtArgs["result"]["target"]>

  export type TargetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    progress?: boolean
    montoTarget?: boolean
    dateTarget?: boolean
    userId?: boolean
  }, ExtArgs["result"]["target"]>

  export type TargetSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    progress?: boolean
    montoTarget?: boolean
    dateTarget?: boolean
    userId?: boolean
  }

  export type TargetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "progress" | "montoTarget" | "dateTarget" | "userId", ExtArgs["result"]["target"]>

  export type $TargetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Target"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      progress: string
      montoTarget: number
      dateTarget: Date
      userId: string
    }, ExtArgs["result"]["target"]>
    composites: {}
  }

  type TargetGetPayload<S extends boolean | null | undefined | TargetDefaultArgs> = $Result.GetResult<Prisma.$TargetPayload, S>

  type TargetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TargetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TargetCountAggregateInputType | true
    }

  export interface TargetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Target'], meta: { name: 'Target' } }
    /**
     * Find zero or one Target that matches the filter.
     * @param {TargetFindUniqueArgs} args - Arguments to find a Target
     * @example
     * // Get one Target
     * const target = await prisma.target.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TargetFindUniqueArgs>(args: SelectSubset<T, TargetFindUniqueArgs<ExtArgs>>): Prisma__TargetClient<$Result.GetResult<Prisma.$TargetPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Target that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TargetFindUniqueOrThrowArgs} args - Arguments to find a Target
     * @example
     * // Get one Target
     * const target = await prisma.target.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TargetFindUniqueOrThrowArgs>(args: SelectSubset<T, TargetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TargetClient<$Result.GetResult<Prisma.$TargetPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Target that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetFindFirstArgs} args - Arguments to find a Target
     * @example
     * // Get one Target
     * const target = await prisma.target.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TargetFindFirstArgs>(args?: SelectSubset<T, TargetFindFirstArgs<ExtArgs>>): Prisma__TargetClient<$Result.GetResult<Prisma.$TargetPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Target that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetFindFirstOrThrowArgs} args - Arguments to find a Target
     * @example
     * // Get one Target
     * const target = await prisma.target.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TargetFindFirstOrThrowArgs>(args?: SelectSubset<T, TargetFindFirstOrThrowArgs<ExtArgs>>): Prisma__TargetClient<$Result.GetResult<Prisma.$TargetPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Targets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Targets
     * const targets = await prisma.target.findMany()
     * 
     * // Get first 10 Targets
     * const targets = await prisma.target.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const targetWithIdOnly = await prisma.target.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TargetFindManyArgs>(args?: SelectSubset<T, TargetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TargetPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Target.
     * @param {TargetCreateArgs} args - Arguments to create a Target.
     * @example
     * // Create one Target
     * const Target = await prisma.target.create({
     *   data: {
     *     // ... data to create a Target
     *   }
     * })
     * 
     */
    create<T extends TargetCreateArgs>(args: SelectSubset<T, TargetCreateArgs<ExtArgs>>): Prisma__TargetClient<$Result.GetResult<Prisma.$TargetPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Targets.
     * @param {TargetCreateManyArgs} args - Arguments to create many Targets.
     * @example
     * // Create many Targets
     * const target = await prisma.target.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TargetCreateManyArgs>(args?: SelectSubset<T, TargetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Targets and returns the data saved in the database.
     * @param {TargetCreateManyAndReturnArgs} args - Arguments to create many Targets.
     * @example
     * // Create many Targets
     * const target = await prisma.target.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Targets and only return the `id`
     * const targetWithIdOnly = await prisma.target.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TargetCreateManyAndReturnArgs>(args?: SelectSubset<T, TargetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TargetPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Target.
     * @param {TargetDeleteArgs} args - Arguments to delete one Target.
     * @example
     * // Delete one Target
     * const Target = await prisma.target.delete({
     *   where: {
     *     // ... filter to delete one Target
     *   }
     * })
     * 
     */
    delete<T extends TargetDeleteArgs>(args: SelectSubset<T, TargetDeleteArgs<ExtArgs>>): Prisma__TargetClient<$Result.GetResult<Prisma.$TargetPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Target.
     * @param {TargetUpdateArgs} args - Arguments to update one Target.
     * @example
     * // Update one Target
     * const target = await prisma.target.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TargetUpdateArgs>(args: SelectSubset<T, TargetUpdateArgs<ExtArgs>>): Prisma__TargetClient<$Result.GetResult<Prisma.$TargetPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Targets.
     * @param {TargetDeleteManyArgs} args - Arguments to filter Targets to delete.
     * @example
     * // Delete a few Targets
     * const { count } = await prisma.target.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TargetDeleteManyArgs>(args?: SelectSubset<T, TargetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Targets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Targets
     * const target = await prisma.target.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TargetUpdateManyArgs>(args: SelectSubset<T, TargetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Targets and returns the data updated in the database.
     * @param {TargetUpdateManyAndReturnArgs} args - Arguments to update many Targets.
     * @example
     * // Update many Targets
     * const target = await prisma.target.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Targets and only return the `id`
     * const targetWithIdOnly = await prisma.target.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TargetUpdateManyAndReturnArgs>(args: SelectSubset<T, TargetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TargetPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Target.
     * @param {TargetUpsertArgs} args - Arguments to update or create a Target.
     * @example
     * // Update or create a Target
     * const target = await prisma.target.upsert({
     *   create: {
     *     // ... data to create a Target
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Target we want to update
     *   }
     * })
     */
    upsert<T extends TargetUpsertArgs>(args: SelectSubset<T, TargetUpsertArgs<ExtArgs>>): Prisma__TargetClient<$Result.GetResult<Prisma.$TargetPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Targets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetCountArgs} args - Arguments to filter Targets to count.
     * @example
     * // Count the number of Targets
     * const count = await prisma.target.count({
     *   where: {
     *     // ... the filter for the Targets we want to count
     *   }
     * })
    **/
    count<T extends TargetCountArgs>(
      args?: Subset<T, TargetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TargetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Target.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TargetAggregateArgs>(args: Subset<T, TargetAggregateArgs>): Prisma.PrismaPromise<GetTargetAggregateType<T>>

    /**
     * Group by Target.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TargetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TargetGroupByArgs['orderBy'] }
        : { orderBy?: TargetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TargetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTargetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Target model
   */
  readonly fields: TargetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Target.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TargetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Target model
   */ 
  interface TargetFieldRefs {
    readonly id: FieldRef<"Target", 'String'>
    readonly name: FieldRef<"Target", 'String'>
    readonly description: FieldRef<"Target", 'String'>
    readonly progress: FieldRef<"Target", 'String'>
    readonly montoTarget: FieldRef<"Target", 'Int'>
    readonly dateTarget: FieldRef<"Target", 'DateTime'>
    readonly userId: FieldRef<"Target", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Target findUnique
   */
  export type TargetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Target
     */
    select?: TargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Target
     */
    omit?: TargetOmit<ExtArgs> | null
    /**
     * Filter, which Target to fetch.
     */
    where: TargetWhereUniqueInput
  }

  /**
   * Target findUniqueOrThrow
   */
  export type TargetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Target
     */
    select?: TargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Target
     */
    omit?: TargetOmit<ExtArgs> | null
    /**
     * Filter, which Target to fetch.
     */
    where: TargetWhereUniqueInput
  }

  /**
   * Target findFirst
   */
  export type TargetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Target
     */
    select?: TargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Target
     */
    omit?: TargetOmit<ExtArgs> | null
    /**
     * Filter, which Target to fetch.
     */
    where?: TargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Targets to fetch.
     */
    orderBy?: TargetOrderByWithRelationInput | TargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Targets.
     */
    cursor?: TargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Targets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Targets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Targets.
     */
    distinct?: TargetScalarFieldEnum | TargetScalarFieldEnum[]
  }

  /**
   * Target findFirstOrThrow
   */
  export type TargetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Target
     */
    select?: TargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Target
     */
    omit?: TargetOmit<ExtArgs> | null
    /**
     * Filter, which Target to fetch.
     */
    where?: TargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Targets to fetch.
     */
    orderBy?: TargetOrderByWithRelationInput | TargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Targets.
     */
    cursor?: TargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Targets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Targets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Targets.
     */
    distinct?: TargetScalarFieldEnum | TargetScalarFieldEnum[]
  }

  /**
   * Target findMany
   */
  export type TargetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Target
     */
    select?: TargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Target
     */
    omit?: TargetOmit<ExtArgs> | null
    /**
     * Filter, which Targets to fetch.
     */
    where?: TargetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Targets to fetch.
     */
    orderBy?: TargetOrderByWithRelationInput | TargetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Targets.
     */
    cursor?: TargetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Targets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Targets.
     */
    skip?: number
    distinct?: TargetScalarFieldEnum | TargetScalarFieldEnum[]
  }

  /**
   * Target create
   */
  export type TargetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Target
     */
    select?: TargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Target
     */
    omit?: TargetOmit<ExtArgs> | null
    /**
     * The data needed to create a Target.
     */
    data: XOR<TargetCreateInput, TargetUncheckedCreateInput>
  }

  /**
   * Target createMany
   */
  export type TargetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Targets.
     */
    data: TargetCreateManyInput | TargetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Target createManyAndReturn
   */
  export type TargetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Target
     */
    select?: TargetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Target
     */
    omit?: TargetOmit<ExtArgs> | null
    /**
     * The data used to create many Targets.
     */
    data: TargetCreateManyInput | TargetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Target update
   */
  export type TargetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Target
     */
    select?: TargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Target
     */
    omit?: TargetOmit<ExtArgs> | null
    /**
     * The data needed to update a Target.
     */
    data: XOR<TargetUpdateInput, TargetUncheckedUpdateInput>
    /**
     * Choose, which Target to update.
     */
    where: TargetWhereUniqueInput
  }

  /**
   * Target updateMany
   */
  export type TargetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Targets.
     */
    data: XOR<TargetUpdateManyMutationInput, TargetUncheckedUpdateManyInput>
    /**
     * Filter which Targets to update
     */
    where?: TargetWhereInput
  }

  /**
   * Target updateManyAndReturn
   */
  export type TargetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Target
     */
    select?: TargetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Target
     */
    omit?: TargetOmit<ExtArgs> | null
    /**
     * The data used to update Targets.
     */
    data: XOR<TargetUpdateManyMutationInput, TargetUncheckedUpdateManyInput>
    /**
     * Filter which Targets to update
     */
    where?: TargetWhereInput
  }

  /**
   * Target upsert
   */
  export type TargetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Target
     */
    select?: TargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Target
     */
    omit?: TargetOmit<ExtArgs> | null
    /**
     * The filter to search for the Target to update in case it exists.
     */
    where: TargetWhereUniqueInput
    /**
     * In case the Target found by the `where` argument doesn't exist, create a new Target with this data.
     */
    create: XOR<TargetCreateInput, TargetUncheckedCreateInput>
    /**
     * In case the Target was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TargetUpdateInput, TargetUncheckedUpdateInput>
  }

  /**
   * Target delete
   */
  export type TargetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Target
     */
    select?: TargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Target
     */
    omit?: TargetOmit<ExtArgs> | null
    /**
     * Filter which Target to delete.
     */
    where: TargetWhereUniqueInput
  }

  /**
   * Target deleteMany
   */
  export type TargetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Targets to delete
     */
    where?: TargetWhereInput
  }

  /**
   * Target without action
   */
  export type TargetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Target
     */
    select?: TargetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Target
     */
    omit?: TargetOmit<ExtArgs> | null
  }


  /**
   * Model FinancialRadiography
   */

  export type AggregateFinancialRadiography = {
    _count: FinancialRadiographyCountAggregateOutputType | null
    _avg: FinancialRadiographyAvgAggregateOutputType | null
    _sum: FinancialRadiographySumAggregateOutputType | null
    _min: FinancialRadiographyMinAggregateOutputType | null
    _max: FinancialRadiographyMaxAggregateOutputType | null
  }

  export type FinancialRadiographyAvgAggregateOutputType = {
    monthlyIncome: Decimal | null
    monthlyExpenses: Decimal | null
    savingCapacity: Decimal | null
    debts: Decimal | null
    savings: Decimal | null
  }

  export type FinancialRadiographySumAggregateOutputType = {
    monthlyIncome: Decimal | null
    monthlyExpenses: Decimal | null
    savingCapacity: Decimal | null
    debts: Decimal | null
    savings: Decimal | null
  }

  export type FinancialRadiographyMinAggregateOutputType = {
    id: string | null
    monthlyIncome: Decimal | null
    monthlyExpenses: Decimal | null
    savingCapacity: Decimal | null
    debts: Decimal | null
    savings: Decimal | null
    userId: string | null
  }

  export type FinancialRadiographyMaxAggregateOutputType = {
    id: string | null
    monthlyIncome: Decimal | null
    monthlyExpenses: Decimal | null
    savingCapacity: Decimal | null
    debts: Decimal | null
    savings: Decimal | null
    userId: string | null
  }

  export type FinancialRadiographyCountAggregateOutputType = {
    id: number
    monthlyIncome: number
    monthlyExpenses: number
    savingCapacity: number
    debts: number
    savings: number
    userId: number
    _all: number
  }


  export type FinancialRadiographyAvgAggregateInputType = {
    monthlyIncome?: true
    monthlyExpenses?: true
    savingCapacity?: true
    debts?: true
    savings?: true
  }

  export type FinancialRadiographySumAggregateInputType = {
    monthlyIncome?: true
    monthlyExpenses?: true
    savingCapacity?: true
    debts?: true
    savings?: true
  }

  export type FinancialRadiographyMinAggregateInputType = {
    id?: true
    monthlyIncome?: true
    monthlyExpenses?: true
    savingCapacity?: true
    debts?: true
    savings?: true
    userId?: true
  }

  export type FinancialRadiographyMaxAggregateInputType = {
    id?: true
    monthlyIncome?: true
    monthlyExpenses?: true
    savingCapacity?: true
    debts?: true
    savings?: true
    userId?: true
  }

  export type FinancialRadiographyCountAggregateInputType = {
    id?: true
    monthlyIncome?: true
    monthlyExpenses?: true
    savingCapacity?: true
    debts?: true
    savings?: true
    userId?: true
    _all?: true
  }

  export type FinancialRadiographyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialRadiography to aggregate.
     */
    where?: FinancialRadiographyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialRadiographies to fetch.
     */
    orderBy?: FinancialRadiographyOrderByWithRelationInput | FinancialRadiographyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinancialRadiographyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialRadiographies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialRadiographies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinancialRadiographies
    **/
    _count?: true | FinancialRadiographyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinancialRadiographyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinancialRadiographySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinancialRadiographyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinancialRadiographyMaxAggregateInputType
  }

  export type GetFinancialRadiographyAggregateType<T extends FinancialRadiographyAggregateArgs> = {
        [P in keyof T & keyof AggregateFinancialRadiography]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinancialRadiography[P]>
      : GetScalarType<T[P], AggregateFinancialRadiography[P]>
  }




  export type FinancialRadiographyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialRadiographyWhereInput
    orderBy?: FinancialRadiographyOrderByWithAggregationInput | FinancialRadiographyOrderByWithAggregationInput[]
    by: FinancialRadiographyScalarFieldEnum[] | FinancialRadiographyScalarFieldEnum
    having?: FinancialRadiographyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinancialRadiographyCountAggregateInputType | true
    _avg?: FinancialRadiographyAvgAggregateInputType
    _sum?: FinancialRadiographySumAggregateInputType
    _min?: FinancialRadiographyMinAggregateInputType
    _max?: FinancialRadiographyMaxAggregateInputType
  }

  export type FinancialRadiographyGroupByOutputType = {
    id: string
    monthlyIncome: Decimal | null
    monthlyExpenses: Decimal | null
    savingCapacity: Decimal | null
    debts: Decimal | null
    savings: Decimal | null
    userId: string
    _count: FinancialRadiographyCountAggregateOutputType | null
    _avg: FinancialRadiographyAvgAggregateOutputType | null
    _sum: FinancialRadiographySumAggregateOutputType | null
    _min: FinancialRadiographyMinAggregateOutputType | null
    _max: FinancialRadiographyMaxAggregateOutputType | null
  }

  type GetFinancialRadiographyGroupByPayload<T extends FinancialRadiographyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinancialRadiographyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinancialRadiographyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinancialRadiographyGroupByOutputType[P]>
            : GetScalarType<T[P], FinancialRadiographyGroupByOutputType[P]>
        }
      >
    >


  export type FinancialRadiographySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monthlyIncome?: boolean
    monthlyExpenses?: boolean
    savingCapacity?: boolean
    debts?: boolean
    savings?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialRadiography"]>

  export type FinancialRadiographySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monthlyIncome?: boolean
    monthlyExpenses?: boolean
    savingCapacity?: boolean
    debts?: boolean
    savings?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialRadiography"]>

  export type FinancialRadiographySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    monthlyIncome?: boolean
    monthlyExpenses?: boolean
    savingCapacity?: boolean
    debts?: boolean
    savings?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialRadiography"]>

  export type FinancialRadiographySelectScalar = {
    id?: boolean
    monthlyIncome?: boolean
    monthlyExpenses?: boolean
    savingCapacity?: boolean
    debts?: boolean
    savings?: boolean
    userId?: boolean
  }

  export type FinancialRadiographyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "monthlyIncome" | "monthlyExpenses" | "savingCapacity" | "debts" | "savings" | "userId", ExtArgs["result"]["financialRadiography"]>
  export type FinancialRadiographyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FinancialRadiographyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FinancialRadiographyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FinancialRadiographyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FinancialRadiography"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      monthlyIncome: Prisma.Decimal | null
      monthlyExpenses: Prisma.Decimal | null
      savingCapacity: Prisma.Decimal | null
      debts: Prisma.Decimal | null
      savings: Prisma.Decimal | null
      userId: string
    }, ExtArgs["result"]["financialRadiography"]>
    composites: {}
  }

  type FinancialRadiographyGetPayload<S extends boolean | null | undefined | FinancialRadiographyDefaultArgs> = $Result.GetResult<Prisma.$FinancialRadiographyPayload, S>

  type FinancialRadiographyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinancialRadiographyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinancialRadiographyCountAggregateInputType | true
    }

  export interface FinancialRadiographyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinancialRadiography'], meta: { name: 'FinancialRadiography' } }
    /**
     * Find zero or one FinancialRadiography that matches the filter.
     * @param {FinancialRadiographyFindUniqueArgs} args - Arguments to find a FinancialRadiography
     * @example
     * // Get one FinancialRadiography
     * const financialRadiography = await prisma.financialRadiography.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinancialRadiographyFindUniqueArgs>(args: SelectSubset<T, FinancialRadiographyFindUniqueArgs<ExtArgs>>): Prisma__FinancialRadiographyClient<$Result.GetResult<Prisma.$FinancialRadiographyPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one FinancialRadiography that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinancialRadiographyFindUniqueOrThrowArgs} args - Arguments to find a FinancialRadiography
     * @example
     * // Get one FinancialRadiography
     * const financialRadiography = await prisma.financialRadiography.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinancialRadiographyFindUniqueOrThrowArgs>(args: SelectSubset<T, FinancialRadiographyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinancialRadiographyClient<$Result.GetResult<Prisma.$FinancialRadiographyPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first FinancialRadiography that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialRadiographyFindFirstArgs} args - Arguments to find a FinancialRadiography
     * @example
     * // Get one FinancialRadiography
     * const financialRadiography = await prisma.financialRadiography.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinancialRadiographyFindFirstArgs>(args?: SelectSubset<T, FinancialRadiographyFindFirstArgs<ExtArgs>>): Prisma__FinancialRadiographyClient<$Result.GetResult<Prisma.$FinancialRadiographyPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first FinancialRadiography that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialRadiographyFindFirstOrThrowArgs} args - Arguments to find a FinancialRadiography
     * @example
     * // Get one FinancialRadiography
     * const financialRadiography = await prisma.financialRadiography.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinancialRadiographyFindFirstOrThrowArgs>(args?: SelectSubset<T, FinancialRadiographyFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinancialRadiographyClient<$Result.GetResult<Prisma.$FinancialRadiographyPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more FinancialRadiographies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialRadiographyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinancialRadiographies
     * const financialRadiographies = await prisma.financialRadiography.findMany()
     * 
     * // Get first 10 FinancialRadiographies
     * const financialRadiographies = await prisma.financialRadiography.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financialRadiographyWithIdOnly = await prisma.financialRadiography.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinancialRadiographyFindManyArgs>(args?: SelectSubset<T, FinancialRadiographyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialRadiographyPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a FinancialRadiography.
     * @param {FinancialRadiographyCreateArgs} args - Arguments to create a FinancialRadiography.
     * @example
     * // Create one FinancialRadiography
     * const FinancialRadiography = await prisma.financialRadiography.create({
     *   data: {
     *     // ... data to create a FinancialRadiography
     *   }
     * })
     * 
     */
    create<T extends FinancialRadiographyCreateArgs>(args: SelectSubset<T, FinancialRadiographyCreateArgs<ExtArgs>>): Prisma__FinancialRadiographyClient<$Result.GetResult<Prisma.$FinancialRadiographyPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many FinancialRadiographies.
     * @param {FinancialRadiographyCreateManyArgs} args - Arguments to create many FinancialRadiographies.
     * @example
     * // Create many FinancialRadiographies
     * const financialRadiography = await prisma.financialRadiography.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinancialRadiographyCreateManyArgs>(args?: SelectSubset<T, FinancialRadiographyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FinancialRadiographies and returns the data saved in the database.
     * @param {FinancialRadiographyCreateManyAndReturnArgs} args - Arguments to create many FinancialRadiographies.
     * @example
     * // Create many FinancialRadiographies
     * const financialRadiography = await prisma.financialRadiography.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FinancialRadiographies and only return the `id`
     * const financialRadiographyWithIdOnly = await prisma.financialRadiography.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinancialRadiographyCreateManyAndReturnArgs>(args?: SelectSubset<T, FinancialRadiographyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialRadiographyPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a FinancialRadiography.
     * @param {FinancialRadiographyDeleteArgs} args - Arguments to delete one FinancialRadiography.
     * @example
     * // Delete one FinancialRadiography
     * const FinancialRadiography = await prisma.financialRadiography.delete({
     *   where: {
     *     // ... filter to delete one FinancialRadiography
     *   }
     * })
     * 
     */
    delete<T extends FinancialRadiographyDeleteArgs>(args: SelectSubset<T, FinancialRadiographyDeleteArgs<ExtArgs>>): Prisma__FinancialRadiographyClient<$Result.GetResult<Prisma.$FinancialRadiographyPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one FinancialRadiography.
     * @param {FinancialRadiographyUpdateArgs} args - Arguments to update one FinancialRadiography.
     * @example
     * // Update one FinancialRadiography
     * const financialRadiography = await prisma.financialRadiography.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinancialRadiographyUpdateArgs>(args: SelectSubset<T, FinancialRadiographyUpdateArgs<ExtArgs>>): Prisma__FinancialRadiographyClient<$Result.GetResult<Prisma.$FinancialRadiographyPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more FinancialRadiographies.
     * @param {FinancialRadiographyDeleteManyArgs} args - Arguments to filter FinancialRadiographies to delete.
     * @example
     * // Delete a few FinancialRadiographies
     * const { count } = await prisma.financialRadiography.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinancialRadiographyDeleteManyArgs>(args?: SelectSubset<T, FinancialRadiographyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialRadiographies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialRadiographyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinancialRadiographies
     * const financialRadiography = await prisma.financialRadiography.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinancialRadiographyUpdateManyArgs>(args: SelectSubset<T, FinancialRadiographyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialRadiographies and returns the data updated in the database.
     * @param {FinancialRadiographyUpdateManyAndReturnArgs} args - Arguments to update many FinancialRadiographies.
     * @example
     * // Update many FinancialRadiographies
     * const financialRadiography = await prisma.financialRadiography.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FinancialRadiographies and only return the `id`
     * const financialRadiographyWithIdOnly = await prisma.financialRadiography.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FinancialRadiographyUpdateManyAndReturnArgs>(args: SelectSubset<T, FinancialRadiographyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialRadiographyPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one FinancialRadiography.
     * @param {FinancialRadiographyUpsertArgs} args - Arguments to update or create a FinancialRadiography.
     * @example
     * // Update or create a FinancialRadiography
     * const financialRadiography = await prisma.financialRadiography.upsert({
     *   create: {
     *     // ... data to create a FinancialRadiography
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinancialRadiography we want to update
     *   }
     * })
     */
    upsert<T extends FinancialRadiographyUpsertArgs>(args: SelectSubset<T, FinancialRadiographyUpsertArgs<ExtArgs>>): Prisma__FinancialRadiographyClient<$Result.GetResult<Prisma.$FinancialRadiographyPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of FinancialRadiographies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialRadiographyCountArgs} args - Arguments to filter FinancialRadiographies to count.
     * @example
     * // Count the number of FinancialRadiographies
     * const count = await prisma.financialRadiography.count({
     *   where: {
     *     // ... the filter for the FinancialRadiographies we want to count
     *   }
     * })
    **/
    count<T extends FinancialRadiographyCountArgs>(
      args?: Subset<T, FinancialRadiographyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinancialRadiographyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinancialRadiography.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialRadiographyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FinancialRadiographyAggregateArgs>(args: Subset<T, FinancialRadiographyAggregateArgs>): Prisma.PrismaPromise<GetFinancialRadiographyAggregateType<T>>

    /**
     * Group by FinancialRadiography.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialRadiographyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FinancialRadiographyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinancialRadiographyGroupByArgs['orderBy'] }
        : { orderBy?: FinancialRadiographyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FinancialRadiographyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinancialRadiographyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinancialRadiography model
   */
  readonly fields: FinancialRadiographyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinancialRadiography.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinancialRadiographyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FinancialRadiography model
   */ 
  interface FinancialRadiographyFieldRefs {
    readonly id: FieldRef<"FinancialRadiography", 'String'>
    readonly monthlyIncome: FieldRef<"FinancialRadiography", 'Decimal'>
    readonly monthlyExpenses: FieldRef<"FinancialRadiography", 'Decimal'>
    readonly savingCapacity: FieldRef<"FinancialRadiography", 'Decimal'>
    readonly debts: FieldRef<"FinancialRadiography", 'Decimal'>
    readonly savings: FieldRef<"FinancialRadiography", 'Decimal'>
    readonly userId: FieldRef<"FinancialRadiography", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FinancialRadiography findUnique
   */
  export type FinancialRadiographyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialRadiography
     */
    select?: FinancialRadiographySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialRadiography
     */
    omit?: FinancialRadiographyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialRadiographyInclude<ExtArgs> | null
    /**
     * Filter, which FinancialRadiography to fetch.
     */
    where: FinancialRadiographyWhereUniqueInput
  }

  /**
   * FinancialRadiography findUniqueOrThrow
   */
  export type FinancialRadiographyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialRadiography
     */
    select?: FinancialRadiographySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialRadiography
     */
    omit?: FinancialRadiographyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialRadiographyInclude<ExtArgs> | null
    /**
     * Filter, which FinancialRadiography to fetch.
     */
    where: FinancialRadiographyWhereUniqueInput
  }

  /**
   * FinancialRadiography findFirst
   */
  export type FinancialRadiographyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialRadiography
     */
    select?: FinancialRadiographySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialRadiography
     */
    omit?: FinancialRadiographyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialRadiographyInclude<ExtArgs> | null
    /**
     * Filter, which FinancialRadiography to fetch.
     */
    where?: FinancialRadiographyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialRadiographies to fetch.
     */
    orderBy?: FinancialRadiographyOrderByWithRelationInput | FinancialRadiographyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialRadiographies.
     */
    cursor?: FinancialRadiographyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialRadiographies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialRadiographies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialRadiographies.
     */
    distinct?: FinancialRadiographyScalarFieldEnum | FinancialRadiographyScalarFieldEnum[]
  }

  /**
   * FinancialRadiography findFirstOrThrow
   */
  export type FinancialRadiographyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialRadiography
     */
    select?: FinancialRadiographySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialRadiography
     */
    omit?: FinancialRadiographyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialRadiographyInclude<ExtArgs> | null
    /**
     * Filter, which FinancialRadiography to fetch.
     */
    where?: FinancialRadiographyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialRadiographies to fetch.
     */
    orderBy?: FinancialRadiographyOrderByWithRelationInput | FinancialRadiographyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialRadiographies.
     */
    cursor?: FinancialRadiographyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialRadiographies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialRadiographies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialRadiographies.
     */
    distinct?: FinancialRadiographyScalarFieldEnum | FinancialRadiographyScalarFieldEnum[]
  }

  /**
   * FinancialRadiography findMany
   */
  export type FinancialRadiographyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialRadiography
     */
    select?: FinancialRadiographySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialRadiography
     */
    omit?: FinancialRadiographyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialRadiographyInclude<ExtArgs> | null
    /**
     * Filter, which FinancialRadiographies to fetch.
     */
    where?: FinancialRadiographyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialRadiographies to fetch.
     */
    orderBy?: FinancialRadiographyOrderByWithRelationInput | FinancialRadiographyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinancialRadiographies.
     */
    cursor?: FinancialRadiographyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialRadiographies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialRadiographies.
     */
    skip?: number
    distinct?: FinancialRadiographyScalarFieldEnum | FinancialRadiographyScalarFieldEnum[]
  }

  /**
   * FinancialRadiography create
   */
  export type FinancialRadiographyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialRadiography
     */
    select?: FinancialRadiographySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialRadiography
     */
    omit?: FinancialRadiographyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialRadiographyInclude<ExtArgs> | null
    /**
     * The data needed to create a FinancialRadiography.
     */
    data: XOR<FinancialRadiographyCreateInput, FinancialRadiographyUncheckedCreateInput>
  }

  /**
   * FinancialRadiography createMany
   */
  export type FinancialRadiographyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinancialRadiographies.
     */
    data: FinancialRadiographyCreateManyInput | FinancialRadiographyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinancialRadiography createManyAndReturn
   */
  export type FinancialRadiographyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialRadiography
     */
    select?: FinancialRadiographySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialRadiography
     */
    omit?: FinancialRadiographyOmit<ExtArgs> | null
    /**
     * The data used to create many FinancialRadiographies.
     */
    data: FinancialRadiographyCreateManyInput | FinancialRadiographyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialRadiographyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinancialRadiography update
   */
  export type FinancialRadiographyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialRadiography
     */
    select?: FinancialRadiographySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialRadiography
     */
    omit?: FinancialRadiographyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialRadiographyInclude<ExtArgs> | null
    /**
     * The data needed to update a FinancialRadiography.
     */
    data: XOR<FinancialRadiographyUpdateInput, FinancialRadiographyUncheckedUpdateInput>
    /**
     * Choose, which FinancialRadiography to update.
     */
    where: FinancialRadiographyWhereUniqueInput
  }

  /**
   * FinancialRadiography updateMany
   */
  export type FinancialRadiographyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinancialRadiographies.
     */
    data: XOR<FinancialRadiographyUpdateManyMutationInput, FinancialRadiographyUncheckedUpdateManyInput>
    /**
     * Filter which FinancialRadiographies to update
     */
    where?: FinancialRadiographyWhereInput
  }

  /**
   * FinancialRadiography updateManyAndReturn
   */
  export type FinancialRadiographyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialRadiography
     */
    select?: FinancialRadiographySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialRadiography
     */
    omit?: FinancialRadiographyOmit<ExtArgs> | null
    /**
     * The data used to update FinancialRadiographies.
     */
    data: XOR<FinancialRadiographyUpdateManyMutationInput, FinancialRadiographyUncheckedUpdateManyInput>
    /**
     * Filter which FinancialRadiographies to update
     */
    where?: FinancialRadiographyWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialRadiographyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinancialRadiography upsert
   */
  export type FinancialRadiographyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialRadiography
     */
    select?: FinancialRadiographySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialRadiography
     */
    omit?: FinancialRadiographyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialRadiographyInclude<ExtArgs> | null
    /**
     * The filter to search for the FinancialRadiography to update in case it exists.
     */
    where: FinancialRadiographyWhereUniqueInput
    /**
     * In case the FinancialRadiography found by the `where` argument doesn't exist, create a new FinancialRadiography with this data.
     */
    create: XOR<FinancialRadiographyCreateInput, FinancialRadiographyUncheckedCreateInput>
    /**
     * In case the FinancialRadiography was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinancialRadiographyUpdateInput, FinancialRadiographyUncheckedUpdateInput>
  }

  /**
   * FinancialRadiography delete
   */
  export type FinancialRadiographyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialRadiography
     */
    select?: FinancialRadiographySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialRadiography
     */
    omit?: FinancialRadiographyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialRadiographyInclude<ExtArgs> | null
    /**
     * Filter which FinancialRadiography to delete.
     */
    where: FinancialRadiographyWhereUniqueInput
  }

  /**
   * FinancialRadiography deleteMany
   */
  export type FinancialRadiographyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialRadiographies to delete
     */
    where?: FinancialRadiographyWhereInput
  }

  /**
   * FinancialRadiography without action
   */
  export type FinancialRadiographyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialRadiography
     */
    select?: FinancialRadiographySelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialRadiography
     */
    omit?: FinancialRadiographyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialRadiographyInclude<ExtArgs> | null
  }


  /**
   * Model InvestmentPortfolio
   */

  export type AggregateInvestmentPortfolio = {
    _count: InvestmentPortfolioCountAggregateOutputType | null
    _avg: InvestmentPortfolioAvgAggregateOutputType | null
    _sum: InvestmentPortfolioSumAggregateOutputType | null
    _min: InvestmentPortfolioMinAggregateOutputType | null
    _max: InvestmentPortfolioMaxAggregateOutputType | null
  }

  export type InvestmentPortfolioAvgAggregateOutputType = {
    profileRisk: number | null
    performanceCurrent: number | null
  }

  export type InvestmentPortfolioSumAggregateOutputType = {
    profileRisk: number | null
    performanceCurrent: number | null
  }

  export type InvestmentPortfolioMinAggregateOutputType = {
    id: string | null
    profileRisk: number | null
    performanceCurrent: number | null
    coin: string | null
    userId: string | null
  }

  export type InvestmentPortfolioMaxAggregateOutputType = {
    id: string | null
    profileRisk: number | null
    performanceCurrent: number | null
    coin: string | null
    userId: string | null
  }

  export type InvestmentPortfolioCountAggregateOutputType = {
    id: number
    profileRisk: number
    performanceCurrent: number
    coin: number
    userId: number
    _all: number
  }


  export type InvestmentPortfolioAvgAggregateInputType = {
    profileRisk?: true
    performanceCurrent?: true
  }

  export type InvestmentPortfolioSumAggregateInputType = {
    profileRisk?: true
    performanceCurrent?: true
  }

  export type InvestmentPortfolioMinAggregateInputType = {
    id?: true
    profileRisk?: true
    performanceCurrent?: true
    coin?: true
    userId?: true
  }

  export type InvestmentPortfolioMaxAggregateInputType = {
    id?: true
    profileRisk?: true
    performanceCurrent?: true
    coin?: true
    userId?: true
  }

  export type InvestmentPortfolioCountAggregateInputType = {
    id?: true
    profileRisk?: true
    performanceCurrent?: true
    coin?: true
    userId?: true
    _all?: true
  }

  export type InvestmentPortfolioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvestmentPortfolio to aggregate.
     */
    where?: InvestmentPortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestmentPortfolios to fetch.
     */
    orderBy?: InvestmentPortfolioOrderByWithRelationInput | InvestmentPortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvestmentPortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestmentPortfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestmentPortfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InvestmentPortfolios
    **/
    _count?: true | InvestmentPortfolioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvestmentPortfolioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvestmentPortfolioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvestmentPortfolioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvestmentPortfolioMaxAggregateInputType
  }

  export type GetInvestmentPortfolioAggregateType<T extends InvestmentPortfolioAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestmentPortfolio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestmentPortfolio[P]>
      : GetScalarType<T[P], AggregateInvestmentPortfolio[P]>
  }




  export type InvestmentPortfolioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentPortfolioWhereInput
    orderBy?: InvestmentPortfolioOrderByWithAggregationInput | InvestmentPortfolioOrderByWithAggregationInput[]
    by: InvestmentPortfolioScalarFieldEnum[] | InvestmentPortfolioScalarFieldEnum
    having?: InvestmentPortfolioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvestmentPortfolioCountAggregateInputType | true
    _avg?: InvestmentPortfolioAvgAggregateInputType
    _sum?: InvestmentPortfolioSumAggregateInputType
    _min?: InvestmentPortfolioMinAggregateInputType
    _max?: InvestmentPortfolioMaxAggregateInputType
  }

  export type InvestmentPortfolioGroupByOutputType = {
    id: string
    profileRisk: number
    performanceCurrent: number
    coin: string
    userId: string
    _count: InvestmentPortfolioCountAggregateOutputType | null
    _avg: InvestmentPortfolioAvgAggregateOutputType | null
    _sum: InvestmentPortfolioSumAggregateOutputType | null
    _min: InvestmentPortfolioMinAggregateOutputType | null
    _max: InvestmentPortfolioMaxAggregateOutputType | null
  }

  type GetInvestmentPortfolioGroupByPayload<T extends InvestmentPortfolioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvestmentPortfolioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvestmentPortfolioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvestmentPortfolioGroupByOutputType[P]>
            : GetScalarType<T[P], InvestmentPortfolioGroupByOutputType[P]>
        }
      >
    >


  export type InvestmentPortfolioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileRisk?: boolean
    performanceCurrent?: boolean
    coin?: boolean
    userId?: boolean
    investment?: boolean | InvestmentPortfolio$investmentArgs<ExtArgs>
    _count?: boolean | InvestmentPortfolioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investmentPortfolio"]>

  export type InvestmentPortfolioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileRisk?: boolean
    performanceCurrent?: boolean
    coin?: boolean
    userId?: boolean
  }, ExtArgs["result"]["investmentPortfolio"]>

  export type InvestmentPortfolioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileRisk?: boolean
    performanceCurrent?: boolean
    coin?: boolean
    userId?: boolean
  }, ExtArgs["result"]["investmentPortfolio"]>

  export type InvestmentPortfolioSelectScalar = {
    id?: boolean
    profileRisk?: boolean
    performanceCurrent?: boolean
    coin?: boolean
    userId?: boolean
  }

  export type InvestmentPortfolioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileRisk" | "performanceCurrent" | "coin" | "userId", ExtArgs["result"]["investmentPortfolio"]>
  export type InvestmentPortfolioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    investment?: boolean | InvestmentPortfolio$investmentArgs<ExtArgs>
    _count?: boolean | InvestmentPortfolioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InvestmentPortfolioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type InvestmentPortfolioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $InvestmentPortfolioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InvestmentPortfolio"
    objects: {
      investment: Prisma.$InvestmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileRisk: number
      performanceCurrent: number
      coin: string
      userId: string
    }, ExtArgs["result"]["investmentPortfolio"]>
    composites: {}
  }

  type InvestmentPortfolioGetPayload<S extends boolean | null | undefined | InvestmentPortfolioDefaultArgs> = $Result.GetResult<Prisma.$InvestmentPortfolioPayload, S>

  type InvestmentPortfolioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvestmentPortfolioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvestmentPortfolioCountAggregateInputType | true
    }

  export interface InvestmentPortfolioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InvestmentPortfolio'], meta: { name: 'InvestmentPortfolio' } }
    /**
     * Find zero or one InvestmentPortfolio that matches the filter.
     * @param {InvestmentPortfolioFindUniqueArgs} args - Arguments to find a InvestmentPortfolio
     * @example
     * // Get one InvestmentPortfolio
     * const investmentPortfolio = await prisma.investmentPortfolio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvestmentPortfolioFindUniqueArgs>(args: SelectSubset<T, InvestmentPortfolioFindUniqueArgs<ExtArgs>>): Prisma__InvestmentPortfolioClient<$Result.GetResult<Prisma.$InvestmentPortfolioPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one InvestmentPortfolio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvestmentPortfolioFindUniqueOrThrowArgs} args - Arguments to find a InvestmentPortfolio
     * @example
     * // Get one InvestmentPortfolio
     * const investmentPortfolio = await prisma.investmentPortfolio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvestmentPortfolioFindUniqueOrThrowArgs>(args: SelectSubset<T, InvestmentPortfolioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvestmentPortfolioClient<$Result.GetResult<Prisma.$InvestmentPortfolioPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first InvestmentPortfolio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentPortfolioFindFirstArgs} args - Arguments to find a InvestmentPortfolio
     * @example
     * // Get one InvestmentPortfolio
     * const investmentPortfolio = await prisma.investmentPortfolio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvestmentPortfolioFindFirstArgs>(args?: SelectSubset<T, InvestmentPortfolioFindFirstArgs<ExtArgs>>): Prisma__InvestmentPortfolioClient<$Result.GetResult<Prisma.$InvestmentPortfolioPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first InvestmentPortfolio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentPortfolioFindFirstOrThrowArgs} args - Arguments to find a InvestmentPortfolio
     * @example
     * // Get one InvestmentPortfolio
     * const investmentPortfolio = await prisma.investmentPortfolio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvestmentPortfolioFindFirstOrThrowArgs>(args?: SelectSubset<T, InvestmentPortfolioFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvestmentPortfolioClient<$Result.GetResult<Prisma.$InvestmentPortfolioPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more InvestmentPortfolios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentPortfolioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InvestmentPortfolios
     * const investmentPortfolios = await prisma.investmentPortfolio.findMany()
     * 
     * // Get first 10 InvestmentPortfolios
     * const investmentPortfolios = await prisma.investmentPortfolio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investmentPortfolioWithIdOnly = await prisma.investmentPortfolio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvestmentPortfolioFindManyArgs>(args?: SelectSubset<T, InvestmentPortfolioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPortfolioPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a InvestmentPortfolio.
     * @param {InvestmentPortfolioCreateArgs} args - Arguments to create a InvestmentPortfolio.
     * @example
     * // Create one InvestmentPortfolio
     * const InvestmentPortfolio = await prisma.investmentPortfolio.create({
     *   data: {
     *     // ... data to create a InvestmentPortfolio
     *   }
     * })
     * 
     */
    create<T extends InvestmentPortfolioCreateArgs>(args: SelectSubset<T, InvestmentPortfolioCreateArgs<ExtArgs>>): Prisma__InvestmentPortfolioClient<$Result.GetResult<Prisma.$InvestmentPortfolioPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many InvestmentPortfolios.
     * @param {InvestmentPortfolioCreateManyArgs} args - Arguments to create many InvestmentPortfolios.
     * @example
     * // Create many InvestmentPortfolios
     * const investmentPortfolio = await prisma.investmentPortfolio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvestmentPortfolioCreateManyArgs>(args?: SelectSubset<T, InvestmentPortfolioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InvestmentPortfolios and returns the data saved in the database.
     * @param {InvestmentPortfolioCreateManyAndReturnArgs} args - Arguments to create many InvestmentPortfolios.
     * @example
     * // Create many InvestmentPortfolios
     * const investmentPortfolio = await prisma.investmentPortfolio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InvestmentPortfolios and only return the `id`
     * const investmentPortfolioWithIdOnly = await prisma.investmentPortfolio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvestmentPortfolioCreateManyAndReturnArgs>(args?: SelectSubset<T, InvestmentPortfolioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPortfolioPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a InvestmentPortfolio.
     * @param {InvestmentPortfolioDeleteArgs} args - Arguments to delete one InvestmentPortfolio.
     * @example
     * // Delete one InvestmentPortfolio
     * const InvestmentPortfolio = await prisma.investmentPortfolio.delete({
     *   where: {
     *     // ... filter to delete one InvestmentPortfolio
     *   }
     * })
     * 
     */
    delete<T extends InvestmentPortfolioDeleteArgs>(args: SelectSubset<T, InvestmentPortfolioDeleteArgs<ExtArgs>>): Prisma__InvestmentPortfolioClient<$Result.GetResult<Prisma.$InvestmentPortfolioPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one InvestmentPortfolio.
     * @param {InvestmentPortfolioUpdateArgs} args - Arguments to update one InvestmentPortfolio.
     * @example
     * // Update one InvestmentPortfolio
     * const investmentPortfolio = await prisma.investmentPortfolio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvestmentPortfolioUpdateArgs>(args: SelectSubset<T, InvestmentPortfolioUpdateArgs<ExtArgs>>): Prisma__InvestmentPortfolioClient<$Result.GetResult<Prisma.$InvestmentPortfolioPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more InvestmentPortfolios.
     * @param {InvestmentPortfolioDeleteManyArgs} args - Arguments to filter InvestmentPortfolios to delete.
     * @example
     * // Delete a few InvestmentPortfolios
     * const { count } = await prisma.investmentPortfolio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvestmentPortfolioDeleteManyArgs>(args?: SelectSubset<T, InvestmentPortfolioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvestmentPortfolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentPortfolioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InvestmentPortfolios
     * const investmentPortfolio = await prisma.investmentPortfolio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvestmentPortfolioUpdateManyArgs>(args: SelectSubset<T, InvestmentPortfolioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InvestmentPortfolios and returns the data updated in the database.
     * @param {InvestmentPortfolioUpdateManyAndReturnArgs} args - Arguments to update many InvestmentPortfolios.
     * @example
     * // Update many InvestmentPortfolios
     * const investmentPortfolio = await prisma.investmentPortfolio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InvestmentPortfolios and only return the `id`
     * const investmentPortfolioWithIdOnly = await prisma.investmentPortfolio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvestmentPortfolioUpdateManyAndReturnArgs>(args: SelectSubset<T, InvestmentPortfolioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPortfolioPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one InvestmentPortfolio.
     * @param {InvestmentPortfolioUpsertArgs} args - Arguments to update or create a InvestmentPortfolio.
     * @example
     * // Update or create a InvestmentPortfolio
     * const investmentPortfolio = await prisma.investmentPortfolio.upsert({
     *   create: {
     *     // ... data to create a InvestmentPortfolio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InvestmentPortfolio we want to update
     *   }
     * })
     */
    upsert<T extends InvestmentPortfolioUpsertArgs>(args: SelectSubset<T, InvestmentPortfolioUpsertArgs<ExtArgs>>): Prisma__InvestmentPortfolioClient<$Result.GetResult<Prisma.$InvestmentPortfolioPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of InvestmentPortfolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentPortfolioCountArgs} args - Arguments to filter InvestmentPortfolios to count.
     * @example
     * // Count the number of InvestmentPortfolios
     * const count = await prisma.investmentPortfolio.count({
     *   where: {
     *     // ... the filter for the InvestmentPortfolios we want to count
     *   }
     * })
    **/
    count<T extends InvestmentPortfolioCountArgs>(
      args?: Subset<T, InvestmentPortfolioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvestmentPortfolioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InvestmentPortfolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentPortfolioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvestmentPortfolioAggregateArgs>(args: Subset<T, InvestmentPortfolioAggregateArgs>): Prisma.PrismaPromise<GetInvestmentPortfolioAggregateType<T>>

    /**
     * Group by InvestmentPortfolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentPortfolioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvestmentPortfolioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvestmentPortfolioGroupByArgs['orderBy'] }
        : { orderBy?: InvestmentPortfolioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvestmentPortfolioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestmentPortfolioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InvestmentPortfolio model
   */
  readonly fields: InvestmentPortfolioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InvestmentPortfolio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvestmentPortfolioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    investment<T extends InvestmentPortfolio$investmentArgs<ExtArgs> = {}>(args?: Subset<T, InvestmentPortfolio$investmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InvestmentPortfolio model
   */ 
  interface InvestmentPortfolioFieldRefs {
    readonly id: FieldRef<"InvestmentPortfolio", 'String'>
    readonly profileRisk: FieldRef<"InvestmentPortfolio", 'Int'>
    readonly performanceCurrent: FieldRef<"InvestmentPortfolio", 'Float'>
    readonly coin: FieldRef<"InvestmentPortfolio", 'String'>
    readonly userId: FieldRef<"InvestmentPortfolio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * InvestmentPortfolio findUnique
   */
  export type InvestmentPortfolioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentPortfolio
     */
    select?: InvestmentPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentPortfolio
     */
    omit?: InvestmentPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentPortfolioInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentPortfolio to fetch.
     */
    where: InvestmentPortfolioWhereUniqueInput
  }

  /**
   * InvestmentPortfolio findUniqueOrThrow
   */
  export type InvestmentPortfolioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentPortfolio
     */
    select?: InvestmentPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentPortfolio
     */
    omit?: InvestmentPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentPortfolioInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentPortfolio to fetch.
     */
    where: InvestmentPortfolioWhereUniqueInput
  }

  /**
   * InvestmentPortfolio findFirst
   */
  export type InvestmentPortfolioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentPortfolio
     */
    select?: InvestmentPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentPortfolio
     */
    omit?: InvestmentPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentPortfolioInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentPortfolio to fetch.
     */
    where?: InvestmentPortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestmentPortfolios to fetch.
     */
    orderBy?: InvestmentPortfolioOrderByWithRelationInput | InvestmentPortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvestmentPortfolios.
     */
    cursor?: InvestmentPortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestmentPortfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestmentPortfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvestmentPortfolios.
     */
    distinct?: InvestmentPortfolioScalarFieldEnum | InvestmentPortfolioScalarFieldEnum[]
  }

  /**
   * InvestmentPortfolio findFirstOrThrow
   */
  export type InvestmentPortfolioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentPortfolio
     */
    select?: InvestmentPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentPortfolio
     */
    omit?: InvestmentPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentPortfolioInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentPortfolio to fetch.
     */
    where?: InvestmentPortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestmentPortfolios to fetch.
     */
    orderBy?: InvestmentPortfolioOrderByWithRelationInput | InvestmentPortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InvestmentPortfolios.
     */
    cursor?: InvestmentPortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestmentPortfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestmentPortfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InvestmentPortfolios.
     */
    distinct?: InvestmentPortfolioScalarFieldEnum | InvestmentPortfolioScalarFieldEnum[]
  }

  /**
   * InvestmentPortfolio findMany
   */
  export type InvestmentPortfolioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentPortfolio
     */
    select?: InvestmentPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentPortfolio
     */
    omit?: InvestmentPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentPortfolioInclude<ExtArgs> | null
    /**
     * Filter, which InvestmentPortfolios to fetch.
     */
    where?: InvestmentPortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InvestmentPortfolios to fetch.
     */
    orderBy?: InvestmentPortfolioOrderByWithRelationInput | InvestmentPortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InvestmentPortfolios.
     */
    cursor?: InvestmentPortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InvestmentPortfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InvestmentPortfolios.
     */
    skip?: number
    distinct?: InvestmentPortfolioScalarFieldEnum | InvestmentPortfolioScalarFieldEnum[]
  }

  /**
   * InvestmentPortfolio create
   */
  export type InvestmentPortfolioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentPortfolio
     */
    select?: InvestmentPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentPortfolio
     */
    omit?: InvestmentPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentPortfolioInclude<ExtArgs> | null
    /**
     * The data needed to create a InvestmentPortfolio.
     */
    data: XOR<InvestmentPortfolioCreateInput, InvestmentPortfolioUncheckedCreateInput>
  }

  /**
   * InvestmentPortfolio createMany
   */
  export type InvestmentPortfolioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InvestmentPortfolios.
     */
    data: InvestmentPortfolioCreateManyInput | InvestmentPortfolioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InvestmentPortfolio createManyAndReturn
   */
  export type InvestmentPortfolioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentPortfolio
     */
    select?: InvestmentPortfolioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentPortfolio
     */
    omit?: InvestmentPortfolioOmit<ExtArgs> | null
    /**
     * The data used to create many InvestmentPortfolios.
     */
    data: InvestmentPortfolioCreateManyInput | InvestmentPortfolioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InvestmentPortfolio update
   */
  export type InvestmentPortfolioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentPortfolio
     */
    select?: InvestmentPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentPortfolio
     */
    omit?: InvestmentPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentPortfolioInclude<ExtArgs> | null
    /**
     * The data needed to update a InvestmentPortfolio.
     */
    data: XOR<InvestmentPortfolioUpdateInput, InvestmentPortfolioUncheckedUpdateInput>
    /**
     * Choose, which InvestmentPortfolio to update.
     */
    where: InvestmentPortfolioWhereUniqueInput
  }

  /**
   * InvestmentPortfolio updateMany
   */
  export type InvestmentPortfolioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InvestmentPortfolios.
     */
    data: XOR<InvestmentPortfolioUpdateManyMutationInput, InvestmentPortfolioUncheckedUpdateManyInput>
    /**
     * Filter which InvestmentPortfolios to update
     */
    where?: InvestmentPortfolioWhereInput
  }

  /**
   * InvestmentPortfolio updateManyAndReturn
   */
  export type InvestmentPortfolioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentPortfolio
     */
    select?: InvestmentPortfolioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentPortfolio
     */
    omit?: InvestmentPortfolioOmit<ExtArgs> | null
    /**
     * The data used to update InvestmentPortfolios.
     */
    data: XOR<InvestmentPortfolioUpdateManyMutationInput, InvestmentPortfolioUncheckedUpdateManyInput>
    /**
     * Filter which InvestmentPortfolios to update
     */
    where?: InvestmentPortfolioWhereInput
  }

  /**
   * InvestmentPortfolio upsert
   */
  export type InvestmentPortfolioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentPortfolio
     */
    select?: InvestmentPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentPortfolio
     */
    omit?: InvestmentPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentPortfolioInclude<ExtArgs> | null
    /**
     * The filter to search for the InvestmentPortfolio to update in case it exists.
     */
    where: InvestmentPortfolioWhereUniqueInput
    /**
     * In case the InvestmentPortfolio found by the `where` argument doesn't exist, create a new InvestmentPortfolio with this data.
     */
    create: XOR<InvestmentPortfolioCreateInput, InvestmentPortfolioUncheckedCreateInput>
    /**
     * In case the InvestmentPortfolio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvestmentPortfolioUpdateInput, InvestmentPortfolioUncheckedUpdateInput>
  }

  /**
   * InvestmentPortfolio delete
   */
  export type InvestmentPortfolioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentPortfolio
     */
    select?: InvestmentPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentPortfolio
     */
    omit?: InvestmentPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentPortfolioInclude<ExtArgs> | null
    /**
     * Filter which InvestmentPortfolio to delete.
     */
    where: InvestmentPortfolioWhereUniqueInput
  }

  /**
   * InvestmentPortfolio deleteMany
   */
  export type InvestmentPortfolioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InvestmentPortfolios to delete
     */
    where?: InvestmentPortfolioWhereInput
  }

  /**
   * InvestmentPortfolio.investment
   */
  export type InvestmentPortfolio$investmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    where?: InvestmentWhereInput
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    cursor?: InvestmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * InvestmentPortfolio without action
   */
  export type InvestmentPortfolioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InvestmentPortfolio
     */
    select?: InvestmentPortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InvestmentPortfolio
     */
    omit?: InvestmentPortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentPortfolioInclude<ExtArgs> | null
  }


  /**
   * Model FinancialInstrument
   */

  export type AggregateFinancialInstrument = {
    _count: FinancialInstrumentCountAggregateOutputType | null
    _avg: FinancialInstrumentAvgAggregateOutputType | null
    _sum: FinancialInstrumentSumAggregateOutputType | null
    _min: FinancialInstrumentMinAggregateOutputType | null
    _max: FinancialInstrumentMaxAggregateOutputType | null
  }

  export type FinancialInstrumentAvgAggregateOutputType = {
    performance: number | null
    levelRisk: number | null
    deadline: number | null
  }

  export type FinancialInstrumentSumAggregateOutputType = {
    performance: number | null
    levelRisk: number | null
    deadline: number | null
  }

  export type FinancialInstrumentMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    category: string | null
    performance: number | null
    levelRisk: number | null
    deadline: number | null
    currency: $Enums.CurrencyType | null
  }

  export type FinancialInstrumentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    category: string | null
    performance: number | null
    levelRisk: number | null
    deadline: number | null
    currency: $Enums.CurrencyType | null
  }

  export type FinancialInstrumentCountAggregateOutputType = {
    id: number
    name: number
    type: number
    category: number
    performance: number
    levelRisk: number
    deadline: number
    currency: number
    _all: number
  }


  export type FinancialInstrumentAvgAggregateInputType = {
    performance?: true
    levelRisk?: true
    deadline?: true
  }

  export type FinancialInstrumentSumAggregateInputType = {
    performance?: true
    levelRisk?: true
    deadline?: true
  }

  export type FinancialInstrumentMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    category?: true
    performance?: true
    levelRisk?: true
    deadline?: true
    currency?: true
  }

  export type FinancialInstrumentMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    category?: true
    performance?: true
    levelRisk?: true
    deadline?: true
    currency?: true
  }

  export type FinancialInstrumentCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    category?: true
    performance?: true
    levelRisk?: true
    deadline?: true
    currency?: true
    _all?: true
  }

  export type FinancialInstrumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialInstrument to aggregate.
     */
    where?: FinancialInstrumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialInstruments to fetch.
     */
    orderBy?: FinancialInstrumentOrderByWithRelationInput | FinancialInstrumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinancialInstrumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialInstruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialInstruments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinancialInstruments
    **/
    _count?: true | FinancialInstrumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinancialInstrumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinancialInstrumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinancialInstrumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinancialInstrumentMaxAggregateInputType
  }

  export type GetFinancialInstrumentAggregateType<T extends FinancialInstrumentAggregateArgs> = {
        [P in keyof T & keyof AggregateFinancialInstrument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinancialInstrument[P]>
      : GetScalarType<T[P], AggregateFinancialInstrument[P]>
  }




  export type FinancialInstrumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialInstrumentWhereInput
    orderBy?: FinancialInstrumentOrderByWithAggregationInput | FinancialInstrumentOrderByWithAggregationInput[]
    by: FinancialInstrumentScalarFieldEnum[] | FinancialInstrumentScalarFieldEnum
    having?: FinancialInstrumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinancialInstrumentCountAggregateInputType | true
    _avg?: FinancialInstrumentAvgAggregateInputType
    _sum?: FinancialInstrumentSumAggregateInputType
    _min?: FinancialInstrumentMinAggregateInputType
    _max?: FinancialInstrumentMaxAggregateInputType
  }

  export type FinancialInstrumentGroupByOutputType = {
    id: string
    name: string
    type: string
    category: string
    performance: number
    levelRisk: number
    deadline: number
    currency: $Enums.CurrencyType
    _count: FinancialInstrumentCountAggregateOutputType | null
    _avg: FinancialInstrumentAvgAggregateOutputType | null
    _sum: FinancialInstrumentSumAggregateOutputType | null
    _min: FinancialInstrumentMinAggregateOutputType | null
    _max: FinancialInstrumentMaxAggregateOutputType | null
  }

  type GetFinancialInstrumentGroupByPayload<T extends FinancialInstrumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinancialInstrumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinancialInstrumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinancialInstrumentGroupByOutputType[P]>
            : GetScalarType<T[P], FinancialInstrumentGroupByOutputType[P]>
        }
      >
    >


  export type FinancialInstrumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    category?: boolean
    performance?: boolean
    levelRisk?: boolean
    deadline?: boolean
    currency?: boolean
    Investment?: boolean | FinancialInstrument$InvestmentArgs<ExtArgs>
    _count?: boolean | FinancialInstrumentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialInstrument"]>

  export type FinancialInstrumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    category?: boolean
    performance?: boolean
    levelRisk?: boolean
    deadline?: boolean
    currency?: boolean
  }, ExtArgs["result"]["financialInstrument"]>

  export type FinancialInstrumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    category?: boolean
    performance?: boolean
    levelRisk?: boolean
    deadline?: boolean
    currency?: boolean
  }, ExtArgs["result"]["financialInstrument"]>

  export type FinancialInstrumentSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    category?: boolean
    performance?: boolean
    levelRisk?: boolean
    deadline?: boolean
    currency?: boolean
  }

  export type FinancialInstrumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "category" | "performance" | "levelRisk" | "deadline" | "currency", ExtArgs["result"]["financialInstrument"]>
  export type FinancialInstrumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Investment?: boolean | FinancialInstrument$InvestmentArgs<ExtArgs>
    _count?: boolean | FinancialInstrumentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FinancialInstrumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FinancialInstrumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FinancialInstrumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FinancialInstrument"
    objects: {
      Investment: Prisma.$InvestmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      category: string
      performance: number
      levelRisk: number
      deadline: number
      currency: $Enums.CurrencyType
    }, ExtArgs["result"]["financialInstrument"]>
    composites: {}
  }

  type FinancialInstrumentGetPayload<S extends boolean | null | undefined | FinancialInstrumentDefaultArgs> = $Result.GetResult<Prisma.$FinancialInstrumentPayload, S>

  type FinancialInstrumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinancialInstrumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinancialInstrumentCountAggregateInputType | true
    }

  export interface FinancialInstrumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinancialInstrument'], meta: { name: 'FinancialInstrument' } }
    /**
     * Find zero or one FinancialInstrument that matches the filter.
     * @param {FinancialInstrumentFindUniqueArgs} args - Arguments to find a FinancialInstrument
     * @example
     * // Get one FinancialInstrument
     * const financialInstrument = await prisma.financialInstrument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinancialInstrumentFindUniqueArgs>(args: SelectSubset<T, FinancialInstrumentFindUniqueArgs<ExtArgs>>): Prisma__FinancialInstrumentClient<$Result.GetResult<Prisma.$FinancialInstrumentPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one FinancialInstrument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinancialInstrumentFindUniqueOrThrowArgs} args - Arguments to find a FinancialInstrument
     * @example
     * // Get one FinancialInstrument
     * const financialInstrument = await prisma.financialInstrument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinancialInstrumentFindUniqueOrThrowArgs>(args: SelectSubset<T, FinancialInstrumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinancialInstrumentClient<$Result.GetResult<Prisma.$FinancialInstrumentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first FinancialInstrument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialInstrumentFindFirstArgs} args - Arguments to find a FinancialInstrument
     * @example
     * // Get one FinancialInstrument
     * const financialInstrument = await prisma.financialInstrument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinancialInstrumentFindFirstArgs>(args?: SelectSubset<T, FinancialInstrumentFindFirstArgs<ExtArgs>>): Prisma__FinancialInstrumentClient<$Result.GetResult<Prisma.$FinancialInstrumentPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first FinancialInstrument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialInstrumentFindFirstOrThrowArgs} args - Arguments to find a FinancialInstrument
     * @example
     * // Get one FinancialInstrument
     * const financialInstrument = await prisma.financialInstrument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinancialInstrumentFindFirstOrThrowArgs>(args?: SelectSubset<T, FinancialInstrumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinancialInstrumentClient<$Result.GetResult<Prisma.$FinancialInstrumentPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more FinancialInstruments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialInstrumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinancialInstruments
     * const financialInstruments = await prisma.financialInstrument.findMany()
     * 
     * // Get first 10 FinancialInstruments
     * const financialInstruments = await prisma.financialInstrument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financialInstrumentWithIdOnly = await prisma.financialInstrument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinancialInstrumentFindManyArgs>(args?: SelectSubset<T, FinancialInstrumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialInstrumentPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a FinancialInstrument.
     * @param {FinancialInstrumentCreateArgs} args - Arguments to create a FinancialInstrument.
     * @example
     * // Create one FinancialInstrument
     * const FinancialInstrument = await prisma.financialInstrument.create({
     *   data: {
     *     // ... data to create a FinancialInstrument
     *   }
     * })
     * 
     */
    create<T extends FinancialInstrumentCreateArgs>(args: SelectSubset<T, FinancialInstrumentCreateArgs<ExtArgs>>): Prisma__FinancialInstrumentClient<$Result.GetResult<Prisma.$FinancialInstrumentPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many FinancialInstruments.
     * @param {FinancialInstrumentCreateManyArgs} args - Arguments to create many FinancialInstruments.
     * @example
     * // Create many FinancialInstruments
     * const financialInstrument = await prisma.financialInstrument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinancialInstrumentCreateManyArgs>(args?: SelectSubset<T, FinancialInstrumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FinancialInstruments and returns the data saved in the database.
     * @param {FinancialInstrumentCreateManyAndReturnArgs} args - Arguments to create many FinancialInstruments.
     * @example
     * // Create many FinancialInstruments
     * const financialInstrument = await prisma.financialInstrument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FinancialInstruments and only return the `id`
     * const financialInstrumentWithIdOnly = await prisma.financialInstrument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinancialInstrumentCreateManyAndReturnArgs>(args?: SelectSubset<T, FinancialInstrumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialInstrumentPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a FinancialInstrument.
     * @param {FinancialInstrumentDeleteArgs} args - Arguments to delete one FinancialInstrument.
     * @example
     * // Delete one FinancialInstrument
     * const FinancialInstrument = await prisma.financialInstrument.delete({
     *   where: {
     *     // ... filter to delete one FinancialInstrument
     *   }
     * })
     * 
     */
    delete<T extends FinancialInstrumentDeleteArgs>(args: SelectSubset<T, FinancialInstrumentDeleteArgs<ExtArgs>>): Prisma__FinancialInstrumentClient<$Result.GetResult<Prisma.$FinancialInstrumentPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one FinancialInstrument.
     * @param {FinancialInstrumentUpdateArgs} args - Arguments to update one FinancialInstrument.
     * @example
     * // Update one FinancialInstrument
     * const financialInstrument = await prisma.financialInstrument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinancialInstrumentUpdateArgs>(args: SelectSubset<T, FinancialInstrumentUpdateArgs<ExtArgs>>): Prisma__FinancialInstrumentClient<$Result.GetResult<Prisma.$FinancialInstrumentPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more FinancialInstruments.
     * @param {FinancialInstrumentDeleteManyArgs} args - Arguments to filter FinancialInstruments to delete.
     * @example
     * // Delete a few FinancialInstruments
     * const { count } = await prisma.financialInstrument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinancialInstrumentDeleteManyArgs>(args?: SelectSubset<T, FinancialInstrumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialInstruments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialInstrumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinancialInstruments
     * const financialInstrument = await prisma.financialInstrument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinancialInstrumentUpdateManyArgs>(args: SelectSubset<T, FinancialInstrumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialInstruments and returns the data updated in the database.
     * @param {FinancialInstrumentUpdateManyAndReturnArgs} args - Arguments to update many FinancialInstruments.
     * @example
     * // Update many FinancialInstruments
     * const financialInstrument = await prisma.financialInstrument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FinancialInstruments and only return the `id`
     * const financialInstrumentWithIdOnly = await prisma.financialInstrument.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FinancialInstrumentUpdateManyAndReturnArgs>(args: SelectSubset<T, FinancialInstrumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialInstrumentPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one FinancialInstrument.
     * @param {FinancialInstrumentUpsertArgs} args - Arguments to update or create a FinancialInstrument.
     * @example
     * // Update or create a FinancialInstrument
     * const financialInstrument = await prisma.financialInstrument.upsert({
     *   create: {
     *     // ... data to create a FinancialInstrument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinancialInstrument we want to update
     *   }
     * })
     */
    upsert<T extends FinancialInstrumentUpsertArgs>(args: SelectSubset<T, FinancialInstrumentUpsertArgs<ExtArgs>>): Prisma__FinancialInstrumentClient<$Result.GetResult<Prisma.$FinancialInstrumentPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of FinancialInstruments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialInstrumentCountArgs} args - Arguments to filter FinancialInstruments to count.
     * @example
     * // Count the number of FinancialInstruments
     * const count = await prisma.financialInstrument.count({
     *   where: {
     *     // ... the filter for the FinancialInstruments we want to count
     *   }
     * })
    **/
    count<T extends FinancialInstrumentCountArgs>(
      args?: Subset<T, FinancialInstrumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinancialInstrumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinancialInstrument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialInstrumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FinancialInstrumentAggregateArgs>(args: Subset<T, FinancialInstrumentAggregateArgs>): Prisma.PrismaPromise<GetFinancialInstrumentAggregateType<T>>

    /**
     * Group by FinancialInstrument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialInstrumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FinancialInstrumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinancialInstrumentGroupByArgs['orderBy'] }
        : { orderBy?: FinancialInstrumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FinancialInstrumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinancialInstrumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinancialInstrument model
   */
  readonly fields: FinancialInstrumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinancialInstrument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinancialInstrumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Investment<T extends FinancialInstrument$InvestmentArgs<ExtArgs> = {}>(args?: Subset<T, FinancialInstrument$InvestmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FinancialInstrument model
   */ 
  interface FinancialInstrumentFieldRefs {
    readonly id: FieldRef<"FinancialInstrument", 'String'>
    readonly name: FieldRef<"FinancialInstrument", 'String'>
    readonly type: FieldRef<"FinancialInstrument", 'String'>
    readonly category: FieldRef<"FinancialInstrument", 'String'>
    readonly performance: FieldRef<"FinancialInstrument", 'Float'>
    readonly levelRisk: FieldRef<"FinancialInstrument", 'Int'>
    readonly deadline: FieldRef<"FinancialInstrument", 'Int'>
    readonly currency: FieldRef<"FinancialInstrument", 'CurrencyType'>
  }
    

  // Custom InputTypes
  /**
   * FinancialInstrument findUnique
   */
  export type FinancialInstrumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialInstrument
     */
    select?: FinancialInstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialInstrument
     */
    omit?: FinancialInstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInstrumentInclude<ExtArgs> | null
    /**
     * Filter, which FinancialInstrument to fetch.
     */
    where: FinancialInstrumentWhereUniqueInput
  }

  /**
   * FinancialInstrument findUniqueOrThrow
   */
  export type FinancialInstrumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialInstrument
     */
    select?: FinancialInstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialInstrument
     */
    omit?: FinancialInstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInstrumentInclude<ExtArgs> | null
    /**
     * Filter, which FinancialInstrument to fetch.
     */
    where: FinancialInstrumentWhereUniqueInput
  }

  /**
   * FinancialInstrument findFirst
   */
  export type FinancialInstrumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialInstrument
     */
    select?: FinancialInstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialInstrument
     */
    omit?: FinancialInstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInstrumentInclude<ExtArgs> | null
    /**
     * Filter, which FinancialInstrument to fetch.
     */
    where?: FinancialInstrumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialInstruments to fetch.
     */
    orderBy?: FinancialInstrumentOrderByWithRelationInput | FinancialInstrumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialInstruments.
     */
    cursor?: FinancialInstrumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialInstruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialInstruments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialInstruments.
     */
    distinct?: FinancialInstrumentScalarFieldEnum | FinancialInstrumentScalarFieldEnum[]
  }

  /**
   * FinancialInstrument findFirstOrThrow
   */
  export type FinancialInstrumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialInstrument
     */
    select?: FinancialInstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialInstrument
     */
    omit?: FinancialInstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInstrumentInclude<ExtArgs> | null
    /**
     * Filter, which FinancialInstrument to fetch.
     */
    where?: FinancialInstrumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialInstruments to fetch.
     */
    orderBy?: FinancialInstrumentOrderByWithRelationInput | FinancialInstrumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialInstruments.
     */
    cursor?: FinancialInstrumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialInstruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialInstruments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialInstruments.
     */
    distinct?: FinancialInstrumentScalarFieldEnum | FinancialInstrumentScalarFieldEnum[]
  }

  /**
   * FinancialInstrument findMany
   */
  export type FinancialInstrumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialInstrument
     */
    select?: FinancialInstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialInstrument
     */
    omit?: FinancialInstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInstrumentInclude<ExtArgs> | null
    /**
     * Filter, which FinancialInstruments to fetch.
     */
    where?: FinancialInstrumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialInstruments to fetch.
     */
    orderBy?: FinancialInstrumentOrderByWithRelationInput | FinancialInstrumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinancialInstruments.
     */
    cursor?: FinancialInstrumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialInstruments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialInstruments.
     */
    skip?: number
    distinct?: FinancialInstrumentScalarFieldEnum | FinancialInstrumentScalarFieldEnum[]
  }

  /**
   * FinancialInstrument create
   */
  export type FinancialInstrumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialInstrument
     */
    select?: FinancialInstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialInstrument
     */
    omit?: FinancialInstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInstrumentInclude<ExtArgs> | null
    /**
     * The data needed to create a FinancialInstrument.
     */
    data: XOR<FinancialInstrumentCreateInput, FinancialInstrumentUncheckedCreateInput>
  }

  /**
   * FinancialInstrument createMany
   */
  export type FinancialInstrumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinancialInstruments.
     */
    data: FinancialInstrumentCreateManyInput | FinancialInstrumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinancialInstrument createManyAndReturn
   */
  export type FinancialInstrumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialInstrument
     */
    select?: FinancialInstrumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialInstrument
     */
    omit?: FinancialInstrumentOmit<ExtArgs> | null
    /**
     * The data used to create many FinancialInstruments.
     */
    data: FinancialInstrumentCreateManyInput | FinancialInstrumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinancialInstrument update
   */
  export type FinancialInstrumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialInstrument
     */
    select?: FinancialInstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialInstrument
     */
    omit?: FinancialInstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInstrumentInclude<ExtArgs> | null
    /**
     * The data needed to update a FinancialInstrument.
     */
    data: XOR<FinancialInstrumentUpdateInput, FinancialInstrumentUncheckedUpdateInput>
    /**
     * Choose, which FinancialInstrument to update.
     */
    where: FinancialInstrumentWhereUniqueInput
  }

  /**
   * FinancialInstrument updateMany
   */
  export type FinancialInstrumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinancialInstruments.
     */
    data: XOR<FinancialInstrumentUpdateManyMutationInput, FinancialInstrumentUncheckedUpdateManyInput>
    /**
     * Filter which FinancialInstruments to update
     */
    where?: FinancialInstrumentWhereInput
  }

  /**
   * FinancialInstrument updateManyAndReturn
   */
  export type FinancialInstrumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialInstrument
     */
    select?: FinancialInstrumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialInstrument
     */
    omit?: FinancialInstrumentOmit<ExtArgs> | null
    /**
     * The data used to update FinancialInstruments.
     */
    data: XOR<FinancialInstrumentUpdateManyMutationInput, FinancialInstrumentUncheckedUpdateManyInput>
    /**
     * Filter which FinancialInstruments to update
     */
    where?: FinancialInstrumentWhereInput
  }

  /**
   * FinancialInstrument upsert
   */
  export type FinancialInstrumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialInstrument
     */
    select?: FinancialInstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialInstrument
     */
    omit?: FinancialInstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInstrumentInclude<ExtArgs> | null
    /**
     * The filter to search for the FinancialInstrument to update in case it exists.
     */
    where: FinancialInstrumentWhereUniqueInput
    /**
     * In case the FinancialInstrument found by the `where` argument doesn't exist, create a new FinancialInstrument with this data.
     */
    create: XOR<FinancialInstrumentCreateInput, FinancialInstrumentUncheckedCreateInput>
    /**
     * In case the FinancialInstrument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinancialInstrumentUpdateInput, FinancialInstrumentUncheckedUpdateInput>
  }

  /**
   * FinancialInstrument delete
   */
  export type FinancialInstrumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialInstrument
     */
    select?: FinancialInstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialInstrument
     */
    omit?: FinancialInstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInstrumentInclude<ExtArgs> | null
    /**
     * Filter which FinancialInstrument to delete.
     */
    where: FinancialInstrumentWhereUniqueInput
  }

  /**
   * FinancialInstrument deleteMany
   */
  export type FinancialInstrumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialInstruments to delete
     */
    where?: FinancialInstrumentWhereInput
  }

  /**
   * FinancialInstrument.Investment
   */
  export type FinancialInstrument$InvestmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    where?: InvestmentWhereInput
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    cursor?: InvestmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * FinancialInstrument without action
   */
  export type FinancialInstrumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialInstrument
     */
    select?: FinancialInstrumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialInstrument
     */
    omit?: FinancialInstrumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialInstrumentInclude<ExtArgs> | null
  }


  /**
   * Model Investment
   */

  export type AggregateInvestment = {
    _count: InvestmentCountAggregateOutputType | null
    _avg: InvestmentAvgAggregateOutputType | null
    _sum: InvestmentSumAggregateOutputType | null
    _min: InvestmentMinAggregateOutputType | null
    _max: InvestmentMaxAggregateOutputType | null
  }

  export type InvestmentAvgAggregateOutputType = {
    amountInvested: number | null
  }

  export type InvestmentSumAggregateOutputType = {
    amountInvested: number | null
  }

  export type InvestmentMinAggregateOutputType = {
    id: string | null
    amountInvested: number | null
    performance: string | null
    dateInvestment: Date | null
    portfolioId: string | null
    instrumentId: string | null
  }

  export type InvestmentMaxAggregateOutputType = {
    id: string | null
    amountInvested: number | null
    performance: string | null
    dateInvestment: Date | null
    portfolioId: string | null
    instrumentId: string | null
  }

  export type InvestmentCountAggregateOutputType = {
    id: number
    amountInvested: number
    performance: number
    dateInvestment: number
    portfolioId: number
    instrumentId: number
    _all: number
  }


  export type InvestmentAvgAggregateInputType = {
    amountInvested?: true
  }

  export type InvestmentSumAggregateInputType = {
    amountInvested?: true
  }

  export type InvestmentMinAggregateInputType = {
    id?: true
    amountInvested?: true
    performance?: true
    dateInvestment?: true
    portfolioId?: true
    instrumentId?: true
  }

  export type InvestmentMaxAggregateInputType = {
    id?: true
    amountInvested?: true
    performance?: true
    dateInvestment?: true
    portfolioId?: true
    instrumentId?: true
  }

  export type InvestmentCountAggregateInputType = {
    id?: true
    amountInvested?: true
    performance?: true
    dateInvestment?: true
    portfolioId?: true
    instrumentId?: true
    _all?: true
  }

  export type InvestmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investment to aggregate.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Investments
    **/
    _count?: true | InvestmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvestmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvestmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvestmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvestmentMaxAggregateInputType
  }

  export type GetInvestmentAggregateType<T extends InvestmentAggregateArgs> = {
        [P in keyof T & keyof AggregateInvestment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvestment[P]>
      : GetScalarType<T[P], AggregateInvestment[P]>
  }




  export type InvestmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvestmentWhereInput
    orderBy?: InvestmentOrderByWithAggregationInput | InvestmentOrderByWithAggregationInput[]
    by: InvestmentScalarFieldEnum[] | InvestmentScalarFieldEnum
    having?: InvestmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvestmentCountAggregateInputType | true
    _avg?: InvestmentAvgAggregateInputType
    _sum?: InvestmentSumAggregateInputType
    _min?: InvestmentMinAggregateInputType
    _max?: InvestmentMaxAggregateInputType
  }

  export type InvestmentGroupByOutputType = {
    id: string
    amountInvested: number
    performance: string
    dateInvestment: Date
    portfolioId: string
    instrumentId: string
    _count: InvestmentCountAggregateOutputType | null
    _avg: InvestmentAvgAggregateOutputType | null
    _sum: InvestmentSumAggregateOutputType | null
    _min: InvestmentMinAggregateOutputType | null
    _max: InvestmentMaxAggregateOutputType | null
  }

  type GetInvestmentGroupByPayload<T extends InvestmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvestmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvestmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvestmentGroupByOutputType[P]>
            : GetScalarType<T[P], InvestmentGroupByOutputType[P]>
        }
      >
    >


  export type InvestmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amountInvested?: boolean
    performance?: boolean
    dateInvestment?: boolean
    portfolioId?: boolean
    instrumentId?: boolean
    instrument?: boolean | FinancialInstrumentDefaultArgs<ExtArgs>
    portfolio?: boolean | InvestmentPortfolioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amountInvested?: boolean
    performance?: boolean
    dateInvestment?: boolean
    portfolioId?: boolean
    instrumentId?: boolean
    instrument?: boolean | FinancialInstrumentDefaultArgs<ExtArgs>
    portfolio?: boolean | InvestmentPortfolioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amountInvested?: boolean
    performance?: boolean
    dateInvestment?: boolean
    portfolioId?: boolean
    instrumentId?: boolean
    instrument?: boolean | FinancialInstrumentDefaultArgs<ExtArgs>
    portfolio?: boolean | InvestmentPortfolioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["investment"]>

  export type InvestmentSelectScalar = {
    id?: boolean
    amountInvested?: boolean
    performance?: boolean
    dateInvestment?: boolean
    portfolioId?: boolean
    instrumentId?: boolean
  }

  export type InvestmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amountInvested" | "performance" | "dateInvestment" | "portfolioId" | "instrumentId", ExtArgs["result"]["investment"]>
  export type InvestmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instrument?: boolean | FinancialInstrumentDefaultArgs<ExtArgs>
    portfolio?: boolean | InvestmentPortfolioDefaultArgs<ExtArgs>
  }
  export type InvestmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instrument?: boolean | FinancialInstrumentDefaultArgs<ExtArgs>
    portfolio?: boolean | InvestmentPortfolioDefaultArgs<ExtArgs>
  }
  export type InvestmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instrument?: boolean | FinancialInstrumentDefaultArgs<ExtArgs>
    portfolio?: boolean | InvestmentPortfolioDefaultArgs<ExtArgs>
  }

  export type $InvestmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Investment"
    objects: {
      instrument: Prisma.$FinancialInstrumentPayload<ExtArgs>
      portfolio: Prisma.$InvestmentPortfolioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amountInvested: number
      performance: string
      dateInvestment: Date
      portfolioId: string
      instrumentId: string
    }, ExtArgs["result"]["investment"]>
    composites: {}
  }

  type InvestmentGetPayload<S extends boolean | null | undefined | InvestmentDefaultArgs> = $Result.GetResult<Prisma.$InvestmentPayload, S>

  type InvestmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvestmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvestmentCountAggregateInputType | true
    }

  export interface InvestmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Investment'], meta: { name: 'Investment' } }
    /**
     * Find zero or one Investment that matches the filter.
     * @param {InvestmentFindUniqueArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvestmentFindUniqueArgs>(args: SelectSubset<T, InvestmentFindUniqueArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Investment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvestmentFindUniqueOrThrowArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvestmentFindUniqueOrThrowArgs>(args: SelectSubset<T, InvestmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Investment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindFirstArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvestmentFindFirstArgs>(args?: SelectSubset<T, InvestmentFindFirstArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Investment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindFirstOrThrowArgs} args - Arguments to find a Investment
     * @example
     * // Get one Investment
     * const investment = await prisma.investment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvestmentFindFirstOrThrowArgs>(args?: SelectSubset<T, InvestmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Investments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Investments
     * const investments = await prisma.investment.findMany()
     * 
     * // Get first 10 Investments
     * const investments = await prisma.investment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const investmentWithIdOnly = await prisma.investment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvestmentFindManyArgs>(args?: SelectSubset<T, InvestmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Investment.
     * @param {InvestmentCreateArgs} args - Arguments to create a Investment.
     * @example
     * // Create one Investment
     * const Investment = await prisma.investment.create({
     *   data: {
     *     // ... data to create a Investment
     *   }
     * })
     * 
     */
    create<T extends InvestmentCreateArgs>(args: SelectSubset<T, InvestmentCreateArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Investments.
     * @param {InvestmentCreateManyArgs} args - Arguments to create many Investments.
     * @example
     * // Create many Investments
     * const investment = await prisma.investment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvestmentCreateManyArgs>(args?: SelectSubset<T, InvestmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Investments and returns the data saved in the database.
     * @param {InvestmentCreateManyAndReturnArgs} args - Arguments to create many Investments.
     * @example
     * // Create many Investments
     * const investment = await prisma.investment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Investments and only return the `id`
     * const investmentWithIdOnly = await prisma.investment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvestmentCreateManyAndReturnArgs>(args?: SelectSubset<T, InvestmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Investment.
     * @param {InvestmentDeleteArgs} args - Arguments to delete one Investment.
     * @example
     * // Delete one Investment
     * const Investment = await prisma.investment.delete({
     *   where: {
     *     // ... filter to delete one Investment
     *   }
     * })
     * 
     */
    delete<T extends InvestmentDeleteArgs>(args: SelectSubset<T, InvestmentDeleteArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Investment.
     * @param {InvestmentUpdateArgs} args - Arguments to update one Investment.
     * @example
     * // Update one Investment
     * const investment = await prisma.investment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvestmentUpdateArgs>(args: SelectSubset<T, InvestmentUpdateArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Investments.
     * @param {InvestmentDeleteManyArgs} args - Arguments to filter Investments to delete.
     * @example
     * // Delete a few Investments
     * const { count } = await prisma.investment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvestmentDeleteManyArgs>(args?: SelectSubset<T, InvestmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Investments
     * const investment = await prisma.investment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvestmentUpdateManyArgs>(args: SelectSubset<T, InvestmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Investments and returns the data updated in the database.
     * @param {InvestmentUpdateManyAndReturnArgs} args - Arguments to update many Investments.
     * @example
     * // Update many Investments
     * const investment = await prisma.investment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Investments and only return the `id`
     * const investmentWithIdOnly = await prisma.investment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvestmentUpdateManyAndReturnArgs>(args: SelectSubset<T, InvestmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Investment.
     * @param {InvestmentUpsertArgs} args - Arguments to update or create a Investment.
     * @example
     * // Update or create a Investment
     * const investment = await prisma.investment.upsert({
     *   create: {
     *     // ... data to create a Investment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Investment we want to update
     *   }
     * })
     */
    upsert<T extends InvestmentUpsertArgs>(args: SelectSubset<T, InvestmentUpsertArgs<ExtArgs>>): Prisma__InvestmentClient<$Result.GetResult<Prisma.$InvestmentPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Investments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentCountArgs} args - Arguments to filter Investments to count.
     * @example
     * // Count the number of Investments
     * const count = await prisma.investment.count({
     *   where: {
     *     // ... the filter for the Investments we want to count
     *   }
     * })
    **/
    count<T extends InvestmentCountArgs>(
      args?: Subset<T, InvestmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvestmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Investment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvestmentAggregateArgs>(args: Subset<T, InvestmentAggregateArgs>): Prisma.PrismaPromise<GetInvestmentAggregateType<T>>

    /**
     * Group by Investment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvestmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvestmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvestmentGroupByArgs['orderBy'] }
        : { orderBy?: InvestmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvestmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Investment model
   */
  readonly fields: InvestmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Investment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvestmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instrument<T extends FinancialInstrumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FinancialInstrumentDefaultArgs<ExtArgs>>): Prisma__FinancialInstrumentClient<$Result.GetResult<Prisma.$FinancialInstrumentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    portfolio<T extends InvestmentPortfolioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InvestmentPortfolioDefaultArgs<ExtArgs>>): Prisma__InvestmentPortfolioClient<$Result.GetResult<Prisma.$InvestmentPortfolioPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Investment model
   */ 
  interface InvestmentFieldRefs {
    readonly id: FieldRef<"Investment", 'String'>
    readonly amountInvested: FieldRef<"Investment", 'Int'>
    readonly performance: FieldRef<"Investment", 'String'>
    readonly dateInvestment: FieldRef<"Investment", 'DateTime'>
    readonly portfolioId: FieldRef<"Investment", 'String'>
    readonly instrumentId: FieldRef<"Investment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Investment findUnique
   */
  export type InvestmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment findUniqueOrThrow
   */
  export type InvestmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment findFirst
   */
  export type InvestmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investments.
     */
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment findFirstOrThrow
   */
  export type InvestmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investment to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Investments.
     */
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment findMany
   */
  export type InvestmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter, which Investments to fetch.
     */
    where?: InvestmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Investments to fetch.
     */
    orderBy?: InvestmentOrderByWithRelationInput | InvestmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Investments.
     */
    cursor?: InvestmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Investments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Investments.
     */
    skip?: number
    distinct?: InvestmentScalarFieldEnum | InvestmentScalarFieldEnum[]
  }

  /**
   * Investment create
   */
  export type InvestmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Investment.
     */
    data: XOR<InvestmentCreateInput, InvestmentUncheckedCreateInput>
  }

  /**
   * Investment createMany
   */
  export type InvestmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Investments.
     */
    data: InvestmentCreateManyInput | InvestmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Investment createManyAndReturn
   */
  export type InvestmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * The data used to create many Investments.
     */
    data: InvestmentCreateManyInput | InvestmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Investment update
   */
  export type InvestmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Investment.
     */
    data: XOR<InvestmentUpdateInput, InvestmentUncheckedUpdateInput>
    /**
     * Choose, which Investment to update.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment updateMany
   */
  export type InvestmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Investments.
     */
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyInput>
    /**
     * Filter which Investments to update
     */
    where?: InvestmentWhereInput
  }

  /**
   * Investment updateManyAndReturn
   */
  export type InvestmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * The data used to update Investments.
     */
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyInput>
    /**
     * Filter which Investments to update
     */
    where?: InvestmentWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Investment upsert
   */
  export type InvestmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Investment to update in case it exists.
     */
    where: InvestmentWhereUniqueInput
    /**
     * In case the Investment found by the `where` argument doesn't exist, create a new Investment with this data.
     */
    create: XOR<InvestmentCreateInput, InvestmentUncheckedCreateInput>
    /**
     * In case the Investment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvestmentUpdateInput, InvestmentUncheckedUpdateInput>
  }

  /**
   * Investment delete
   */
  export type InvestmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
    /**
     * Filter which Investment to delete.
     */
    where: InvestmentWhereUniqueInput
  }

  /**
   * Investment deleteMany
   */
  export type InvestmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Investments to delete
     */
    where?: InvestmentWhereInput
  }

  /**
   * Investment without action
   */
  export type InvestmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Investment
     */
    select?: InvestmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Investment
     */
    omit?: InvestmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvestmentInclude<ExtArgs> | null
  }


  /**
   * Model News
   */

  export type AggregateNews = {
    _count: NewsCountAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  export type NewsMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    source: string | null
    dateNews: Date | null
    category: string | null
    createdAt: Date | null
  }

  export type NewsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    source: string | null
    dateNews: Date | null
    category: string | null
    createdAt: Date | null
  }

  export type NewsCountAggregateOutputType = {
    id: number
    title: number
    content: number
    source: number
    dateNews: number
    category: number
    createdAt: number
    _all: number
  }


  export type NewsMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    source?: true
    dateNews?: true
    category?: true
    createdAt?: true
  }

  export type NewsMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    source?: true
    dateNews?: true
    category?: true
    createdAt?: true
  }

  export type NewsCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    source?: true
    dateNews?: true
    category?: true
    createdAt?: true
    _all?: true
  }

  export type NewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to aggregate.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned News
    **/
    _count?: true | NewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsMaxAggregateInputType
  }

  export type GetNewsAggregateType<T extends NewsAggregateArgs> = {
        [P in keyof T & keyof AggregateNews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNews[P]>
      : GetScalarType<T[P], AggregateNews[P]>
  }




  export type NewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithAggregationInput | NewsOrderByWithAggregationInput[]
    by: NewsScalarFieldEnum[] | NewsScalarFieldEnum
    having?: NewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCountAggregateInputType | true
    _min?: NewsMinAggregateInputType
    _max?: NewsMaxAggregateInputType
  }

  export type NewsGroupByOutputType = {
    id: string
    title: string
    content: string
    source: string
    dateNews: Date
    category: string
    createdAt: Date
    _count: NewsCountAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  type GetNewsGroupByPayload<T extends NewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsGroupByOutputType[P]>
        }
      >
    >


  export type NewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    source?: boolean
    dateNews?: boolean
    category?: boolean
    createdAt?: boolean
    comment?: boolean | News$commentArgs<ExtArgs>
    _count?: boolean | NewsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    source?: boolean
    dateNews?: boolean
    category?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["news"]>

  export type NewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    source?: boolean
    dateNews?: boolean
    category?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["news"]>

  export type NewsSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    source?: boolean
    dateNews?: boolean
    category?: boolean
    createdAt?: boolean
  }

  export type NewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "source" | "dateNews" | "category" | "createdAt", ExtArgs["result"]["news"]>
  export type NewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comment?: boolean | News$commentArgs<ExtArgs>
    _count?: boolean | NewsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "News"
    objects: {
      comment: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      source: string
      dateNews: Date
      category: string
      createdAt: Date
    }, ExtArgs["result"]["news"]>
    composites: {}
  }

  type NewsGetPayload<S extends boolean | null | undefined | NewsDefaultArgs> = $Result.GetResult<Prisma.$NewsPayload, S>

  type NewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsCountAggregateInputType | true
    }

  export interface NewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['News'], meta: { name: 'News' } }
    /**
     * Find zero or one News that matches the filter.
     * @param {NewsFindUniqueArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsFindUniqueArgs>(args: SelectSubset<T, NewsFindUniqueArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one News that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsFindUniqueOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsFindFirstArgs>(args?: SelectSubset<T, NewsFindFirstArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first News that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all News
     * const news = await prisma.news.findMany()
     * 
     * // Get first 10 News
     * const news = await prisma.news.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsWithIdOnly = await prisma.news.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsFindManyArgs>(args?: SelectSubset<T, NewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a News.
     * @param {NewsCreateArgs} args - Arguments to create a News.
     * @example
     * // Create one News
     * const News = await prisma.news.create({
     *   data: {
     *     // ... data to create a News
     *   }
     * })
     * 
     */
    create<T extends NewsCreateArgs>(args: SelectSubset<T, NewsCreateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many News.
     * @param {NewsCreateManyArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsCreateManyArgs>(args?: SelectSubset<T, NewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many News and returns the data saved in the database.
     * @param {NewsCreateManyAndReturnArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many News and only return the `id`
     * const newsWithIdOnly = await prisma.news.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a News.
     * @param {NewsDeleteArgs} args - Arguments to delete one News.
     * @example
     * // Delete one News
     * const News = await prisma.news.delete({
     *   where: {
     *     // ... filter to delete one News
     *   }
     * })
     * 
     */
    delete<T extends NewsDeleteArgs>(args: SelectSubset<T, NewsDeleteArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one News.
     * @param {NewsUpdateArgs} args - Arguments to update one News.
     * @example
     * // Update one News
     * const news = await prisma.news.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsUpdateArgs>(args: SelectSubset<T, NewsUpdateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more News.
     * @param {NewsDeleteManyArgs} args - Arguments to filter News to delete.
     * @example
     * // Delete a few News
     * const { count } = await prisma.news.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsDeleteManyArgs>(args?: SelectSubset<T, NewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many News
     * const news = await prisma.news.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsUpdateManyArgs>(args: SelectSubset<T, NewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News and returns the data updated in the database.
     * @param {NewsUpdateManyAndReturnArgs} args - Arguments to update many News.
     * @example
     * // Update many News
     * const news = await prisma.news.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more News and only return the `id`
     * const newsWithIdOnly = await prisma.news.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewsUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one News.
     * @param {NewsUpsertArgs} args - Arguments to update or create a News.
     * @example
     * // Update or create a News
     * const news = await prisma.news.upsert({
     *   create: {
     *     // ... data to create a News
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the News we want to update
     *   }
     * })
     */
    upsert<T extends NewsUpsertArgs>(args: SelectSubset<T, NewsUpsertArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCountArgs} args - Arguments to filter News to count.
     * @example
     * // Count the number of News
     * const count = await prisma.news.count({
     *   where: {
     *     // ... the filter for the News we want to count
     *   }
     * })
    **/
    count<T extends NewsCountArgs>(
      args?: Subset<T, NewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsAggregateArgs>(args: Subset<T, NewsAggregateArgs>): Prisma.PrismaPromise<GetNewsAggregateType<T>>

    /**
     * Group by News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsGroupByArgs['orderBy'] }
        : { orderBy?: NewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the News model
   */
  readonly fields: NewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for News.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comment<T extends News$commentArgs<ExtArgs> = {}>(args?: Subset<T, News$commentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the News model
   */ 
  interface NewsFieldRefs {
    readonly id: FieldRef<"News", 'String'>
    readonly title: FieldRef<"News", 'String'>
    readonly content: FieldRef<"News", 'String'>
    readonly source: FieldRef<"News", 'String'>
    readonly dateNews: FieldRef<"News", 'DateTime'>
    readonly category: FieldRef<"News", 'String'>
    readonly createdAt: FieldRef<"News", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * News findUnique
   */
  export type NewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findUniqueOrThrow
   */
  export type NewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findFirst
   */
  export type NewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findFirstOrThrow
   */
  export type NewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findMany
   */
  export type NewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News create
   */
  export type NewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to create a News.
     */
    data: XOR<NewsCreateInput, NewsUncheckedCreateInput>
  }

  /**
   * News createMany
   */
  export type NewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * News createManyAndReturn
   */
  export type NewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * News update
   */
  export type NewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to update a News.
     */
    data: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
    /**
     * Choose, which News to update.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News updateMany
   */
  export type NewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
  }

  /**
   * News updateManyAndReturn
   */
  export type NewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
  }

  /**
   * News upsert
   */
  export type NewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The filter to search for the News to update in case it exists.
     */
    where: NewsWhereUniqueInput
    /**
     * In case the News found by the `where` argument doesn't exist, create a new News with this data.
     */
    create: XOR<NewsCreateInput, NewsUncheckedCreateInput>
    /**
     * In case the News was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
  }

  /**
   * News delete
   */
  export type NewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter which News to delete.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News deleteMany
   */
  export type NewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to delete
     */
    where?: NewsWhereInput
  }

  /**
   * News.comment
   */
  export type News$commentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * News without action
   */
  export type NewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    content: string | null
    dateComment: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    newsId: string | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    content: string | null
    dateComment: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    newsId: string | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    content: number
    dateComment: number
    createdAt: number
    updatedAt: number
    userId: number
    newsId: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    content?: true
    dateComment?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    newsId?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    content?: true
    dateComment?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    newsId?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    content?: true
    dateComment?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    newsId?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    content: string
    dateComment: Date
    createdAt: Date
    updatedAt: Date
    userId: string | null
    newsId: string | null
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    dateComment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    newsId?: boolean
    user?: boolean | Comment$userArgs<ExtArgs>
    news?: boolean | Comment$newsArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    dateComment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    newsId?: boolean
    user?: boolean | Comment$userArgs<ExtArgs>
    news?: boolean | Comment$newsArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    dateComment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    newsId?: boolean
    user?: boolean | Comment$userArgs<ExtArgs>
    news?: boolean | Comment$newsArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    content?: boolean
    dateComment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    newsId?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "dateComment" | "createdAt" | "updatedAt" | "userId" | "newsId", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Comment$userArgs<ExtArgs>
    news?: boolean | Comment$newsArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Comment$userArgs<ExtArgs>
    news?: boolean | Comment$newsArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Comment$userArgs<ExtArgs>
    news?: boolean | Comment$newsArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      news: Prisma.$NewsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      dateComment: Date
      createdAt: Date
      updatedAt: Date
      userId: string | null
      newsId: string | null
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Comment$userArgs<ExtArgs> = {}>(args?: Subset<T, Comment$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    news<T extends Comment$newsArgs<ExtArgs> = {}>(args?: Subset<T, Comment$newsArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */ 
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly dateComment: FieldRef<"Comment", 'DateTime'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
    readonly userId: FieldRef<"Comment", 'String'>
    readonly newsId: FieldRef<"Comment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
  }

  /**
   * Comment.user
   */
  export type Comment$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Comment.news
   */
  export type Comment$newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    where?: NewsWhereInput
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model wallet
   */

  export type AggregateWallet = {
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  export type WalletAvgAggregateOutputType = {
    balancePesos: number | null
    balanceDollars: number | null
  }

  export type WalletSumAggregateOutputType = {
    balancePesos: number | null
    balanceDollars: number | null
  }

  export type WalletMinAggregateOutputType = {
    id: string | null
    userId: string | null
    balancePesos: number | null
    balanceDollars: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WalletMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    balancePesos: number | null
    balanceDollars: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WalletCountAggregateOutputType = {
    id: number
    userId: number
    balancePesos: number
    balanceDollars: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WalletAvgAggregateInputType = {
    balancePesos?: true
    balanceDollars?: true
  }

  export type WalletSumAggregateInputType = {
    balancePesos?: true
    balanceDollars?: true
  }

  export type WalletMinAggregateInputType = {
    id?: true
    userId?: true
    balancePesos?: true
    balanceDollars?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WalletMaxAggregateInputType = {
    id?: true
    userId?: true
    balancePesos?: true
    balanceDollars?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WalletCountAggregateInputType = {
    id?: true
    userId?: true
    balancePesos?: true
    balanceDollars?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which wallet to aggregate.
     */
    where?: walletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: walletOrderByWithRelationInput | walletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: walletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned wallets
    **/
    _count?: true | WalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletMaxAggregateInputType
  }

  export type GetWalletAggregateType<T extends WalletAggregateArgs> = {
        [P in keyof T & keyof AggregateWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallet[P]>
      : GetScalarType<T[P], AggregateWallet[P]>
  }




  export type walletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: walletWhereInput
    orderBy?: walletOrderByWithAggregationInput | walletOrderByWithAggregationInput[]
    by: WalletScalarFieldEnum[] | WalletScalarFieldEnum
    having?: walletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletCountAggregateInputType | true
    _avg?: WalletAvgAggregateInputType
    _sum?: WalletSumAggregateInputType
    _min?: WalletMinAggregateInputType
    _max?: WalletMaxAggregateInputType
  }

  export type WalletGroupByOutputType = {
    id: string
    userId: string
    balancePesos: number
    balanceDollars: number
    createdAt: Date
    updatedAt: Date
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  type GetWalletGroupByPayload<T extends walletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletGroupByOutputType[P]>
            : GetScalarType<T[P], WalletGroupByOutputType[P]>
        }
      >
    >


  export type walletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balancePesos?: boolean
    balanceDollars?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | wallet$transactionsArgs<ExtArgs>
    _count?: boolean | WalletCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type walletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balancePesos?: boolean
    balanceDollars?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type walletSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    balancePesos?: boolean
    balanceDollars?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type walletSelectScalar = {
    id?: boolean
    userId?: boolean
    balancePesos?: boolean
    balanceDollars?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type walletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "balancePesos" | "balanceDollars" | "createdAt" | "updatedAt", ExtArgs["result"]["wallet"]>
  export type walletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    transactions?: boolean | wallet$transactionsArgs<ExtArgs>
    _count?: boolean | WalletCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type walletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type walletIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $walletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "wallet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      transactions: Prisma.$WalletTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      balancePesos: number
      balanceDollars: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["wallet"]>
    composites: {}
  }

  type walletGetPayload<S extends boolean | null | undefined | walletDefaultArgs> = $Result.GetResult<Prisma.$walletPayload, S>

  type walletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<walletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalletCountAggregateInputType | true
    }

  export interface walletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['wallet'], meta: { name: 'wallet' } }
    /**
     * Find zero or one Wallet that matches the filter.
     * @param {walletFindUniqueArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends walletFindUniqueArgs>(args: SelectSubset<T, walletFindUniqueArgs<ExtArgs>>): Prisma__walletClient<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Wallet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {walletFindUniqueOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends walletFindUniqueOrThrowArgs>(args: SelectSubset<T, walletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__walletClient<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Wallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletFindFirstArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends walletFindFirstArgs>(args?: SelectSubset<T, walletFindFirstArgs<ExtArgs>>): Prisma__walletClient<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Wallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletFindFirstOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends walletFindFirstOrThrowArgs>(args?: SelectSubset<T, walletFindFirstOrThrowArgs<ExtArgs>>): Prisma__walletClient<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallets
     * const wallets = await prisma.wallet.findMany()
     * 
     * // Get first 10 Wallets
     * const wallets = await prisma.wallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletWithIdOnly = await prisma.wallet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends walletFindManyArgs>(args?: SelectSubset<T, walletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Wallet.
     * @param {walletCreateArgs} args - Arguments to create a Wallet.
     * @example
     * // Create one Wallet
     * const Wallet = await prisma.wallet.create({
     *   data: {
     *     // ... data to create a Wallet
     *   }
     * })
     * 
     */
    create<T extends walletCreateArgs>(args: SelectSubset<T, walletCreateArgs<ExtArgs>>): Prisma__walletClient<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Wallets.
     * @param {walletCreateManyArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends walletCreateManyArgs>(args?: SelectSubset<T, walletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wallets and returns the data saved in the database.
     * @param {walletCreateManyAndReturnArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wallets and only return the `id`
     * const walletWithIdOnly = await prisma.wallet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends walletCreateManyAndReturnArgs>(args?: SelectSubset<T, walletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Wallet.
     * @param {walletDeleteArgs} args - Arguments to delete one Wallet.
     * @example
     * // Delete one Wallet
     * const Wallet = await prisma.wallet.delete({
     *   where: {
     *     // ... filter to delete one Wallet
     *   }
     * })
     * 
     */
    delete<T extends walletDeleteArgs>(args: SelectSubset<T, walletDeleteArgs<ExtArgs>>): Prisma__walletClient<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Wallet.
     * @param {walletUpdateArgs} args - Arguments to update one Wallet.
     * @example
     * // Update one Wallet
     * const wallet = await prisma.wallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends walletUpdateArgs>(args: SelectSubset<T, walletUpdateArgs<ExtArgs>>): Prisma__walletClient<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Wallets.
     * @param {walletDeleteManyArgs} args - Arguments to filter Wallets to delete.
     * @example
     * // Delete a few Wallets
     * const { count } = await prisma.wallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends walletDeleteManyArgs>(args?: SelectSubset<T, walletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends walletUpdateManyArgs>(args: SelectSubset<T, walletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets and returns the data updated in the database.
     * @param {walletUpdateManyAndReturnArgs} args - Arguments to update many Wallets.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wallets and only return the `id`
     * const walletWithIdOnly = await prisma.wallet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends walletUpdateManyAndReturnArgs>(args: SelectSubset<T, walletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Wallet.
     * @param {walletUpsertArgs} args - Arguments to update or create a Wallet.
     * @example
     * // Update or create a Wallet
     * const wallet = await prisma.wallet.upsert({
     *   create: {
     *     // ... data to create a Wallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallet we want to update
     *   }
     * })
     */
    upsert<T extends walletUpsertArgs>(args: SelectSubset<T, walletUpsertArgs<ExtArgs>>): Prisma__walletClient<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletCountArgs} args - Arguments to filter Wallets to count.
     * @example
     * // Count the number of Wallets
     * const count = await prisma.wallet.count({
     *   where: {
     *     // ... the filter for the Wallets we want to count
     *   }
     * })
    **/
    count<T extends walletCountArgs>(
      args?: Subset<T, walletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WalletAggregateArgs>(args: Subset<T, WalletAggregateArgs>): Prisma.PrismaPromise<GetWalletAggregateType<T>>

    /**
     * Group by Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {walletGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends walletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: walletGroupByArgs['orderBy'] }
        : { orderBy?: walletGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, walletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the wallet model
   */
  readonly fields: walletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for wallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__walletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    transactions<T extends wallet$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, wallet$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the wallet model
   */ 
  interface walletFieldRefs {
    readonly id: FieldRef<"wallet", 'String'>
    readonly userId: FieldRef<"wallet", 'String'>
    readonly balancePesos: FieldRef<"wallet", 'Int'>
    readonly balanceDollars: FieldRef<"wallet", 'Int'>
    readonly createdAt: FieldRef<"wallet", 'DateTime'>
    readonly updatedAt: FieldRef<"wallet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * wallet findUnique
   */
  export type walletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
    /**
     * Filter, which wallet to fetch.
     */
    where: walletWhereUniqueInput
  }

  /**
   * wallet findUniqueOrThrow
   */
  export type walletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
    /**
     * Filter, which wallet to fetch.
     */
    where: walletWhereUniqueInput
  }

  /**
   * wallet findFirst
   */
  export type walletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
    /**
     * Filter, which wallet to fetch.
     */
    where?: walletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: walletOrderByWithRelationInput | walletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wallets.
     */
    cursor?: walletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * wallet findFirstOrThrow
   */
  export type walletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
    /**
     * Filter, which wallet to fetch.
     */
    where?: walletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: walletOrderByWithRelationInput | walletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for wallets.
     */
    cursor?: walletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * wallet findMany
   */
  export type walletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
    /**
     * Filter, which wallets to fetch.
     */
    where?: walletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of wallets to fetch.
     */
    orderBy?: walletOrderByWithRelationInput | walletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing wallets.
     */
    cursor?: walletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` wallets.
     */
    skip?: number
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * wallet create
   */
  export type walletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
    /**
     * The data needed to create a wallet.
     */
    data: XOR<walletCreateInput, walletUncheckedCreateInput>
  }

  /**
   * wallet createMany
   */
  export type walletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many wallets.
     */
    data: walletCreateManyInput | walletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * wallet createManyAndReturn
   */
  export type walletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * The data used to create many wallets.
     */
    data: walletCreateManyInput | walletCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * wallet update
   */
  export type walletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
    /**
     * The data needed to update a wallet.
     */
    data: XOR<walletUpdateInput, walletUncheckedUpdateInput>
    /**
     * Choose, which wallet to update.
     */
    where: walletWhereUniqueInput
  }

  /**
   * wallet updateMany
   */
  export type walletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update wallets.
     */
    data: XOR<walletUpdateManyMutationInput, walletUncheckedUpdateManyInput>
    /**
     * Filter which wallets to update
     */
    where?: walletWhereInput
  }

  /**
   * wallet updateManyAndReturn
   */
  export type walletUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * The data used to update wallets.
     */
    data: XOR<walletUpdateManyMutationInput, walletUncheckedUpdateManyInput>
    /**
     * Filter which wallets to update
     */
    where?: walletWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * wallet upsert
   */
  export type walletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
    /**
     * The filter to search for the wallet to update in case it exists.
     */
    where: walletWhereUniqueInput
    /**
     * In case the wallet found by the `where` argument doesn't exist, create a new wallet with this data.
     */
    create: XOR<walletCreateInput, walletUncheckedCreateInput>
    /**
     * In case the wallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<walletUpdateInput, walletUncheckedUpdateInput>
  }

  /**
   * wallet delete
   */
  export type walletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
    /**
     * Filter which wallet to delete.
     */
    where: walletWhereUniqueInput
  }

  /**
   * wallet deleteMany
   */
  export type walletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which wallets to delete
     */
    where?: walletWhereInput
  }

  /**
   * wallet.transactions
   */
  export type wallet$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    where?: WalletTransactionWhereInput
    orderBy?: WalletTransactionOrderByWithRelationInput | WalletTransactionOrderByWithRelationInput[]
    cursor?: WalletTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WalletTransactionScalarFieldEnum | WalletTransactionScalarFieldEnum[]
  }

  /**
   * wallet without action
   */
  export type walletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the wallet
     */
    select?: walletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the wallet
     */
    omit?: walletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: walletInclude<ExtArgs> | null
  }


  /**
   * Model WalletTransaction
   */

  export type AggregateWalletTransaction = {
    _count: WalletTransactionCountAggregateOutputType | null
    _avg: WalletTransactionAvgAggregateOutputType | null
    _sum: WalletTransactionSumAggregateOutputType | null
    _min: WalletTransactionMinAggregateOutputType | null
    _max: WalletTransactionMaxAggregateOutputType | null
  }

  export type WalletTransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type WalletTransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type WalletTransactionMinAggregateOutputType = {
    id: string | null
    walletId: string | null
    type: $Enums.TransactionType | null
    amount: number | null
    currency: $Enums.CurrencyType | null
    description: string | null
    createdAt: Date | null
  }

  export type WalletTransactionMaxAggregateOutputType = {
    id: string | null
    walletId: string | null
    type: $Enums.TransactionType | null
    amount: number | null
    currency: $Enums.CurrencyType | null
    description: string | null
    createdAt: Date | null
  }

  export type WalletTransactionCountAggregateOutputType = {
    id: number
    walletId: number
    type: number
    amount: number
    currency: number
    description: number
    createdAt: number
    _all: number
  }


  export type WalletTransactionAvgAggregateInputType = {
    amount?: true
  }

  export type WalletTransactionSumAggregateInputType = {
    amount?: true
  }

  export type WalletTransactionMinAggregateInputType = {
    id?: true
    walletId?: true
    type?: true
    amount?: true
    currency?: true
    description?: true
    createdAt?: true
  }

  export type WalletTransactionMaxAggregateInputType = {
    id?: true
    walletId?: true
    type?: true
    amount?: true
    currency?: true
    description?: true
    createdAt?: true
  }

  export type WalletTransactionCountAggregateInputType = {
    id?: true
    walletId?: true
    type?: true
    amount?: true
    currency?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type WalletTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalletTransaction to aggregate.
     */
    where?: WalletTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransactions to fetch.
     */
    orderBy?: WalletTransactionOrderByWithRelationInput | WalletTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WalletTransactions
    **/
    _count?: true | WalletTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletTransactionMaxAggregateInputType
  }

  export type GetWalletTransactionAggregateType<T extends WalletTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateWalletTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWalletTransaction[P]>
      : GetScalarType<T[P], AggregateWalletTransaction[P]>
  }




  export type WalletTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletTransactionWhereInput
    orderBy?: WalletTransactionOrderByWithAggregationInput | WalletTransactionOrderByWithAggregationInput[]
    by: WalletTransactionScalarFieldEnum[] | WalletTransactionScalarFieldEnum
    having?: WalletTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletTransactionCountAggregateInputType | true
    _avg?: WalletTransactionAvgAggregateInputType
    _sum?: WalletTransactionSumAggregateInputType
    _min?: WalletTransactionMinAggregateInputType
    _max?: WalletTransactionMaxAggregateInputType
  }

  export type WalletTransactionGroupByOutputType = {
    id: string
    walletId: string
    type: $Enums.TransactionType
    amount: number
    currency: $Enums.CurrencyType
    description: string | null
    createdAt: Date
    _count: WalletTransactionCountAggregateOutputType | null
    _avg: WalletTransactionAvgAggregateOutputType | null
    _sum: WalletTransactionSumAggregateOutputType | null
    _min: WalletTransactionMinAggregateOutputType | null
    _max: WalletTransactionMaxAggregateOutputType | null
  }

  type GetWalletTransactionGroupByPayload<T extends WalletTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], WalletTransactionGroupByOutputType[P]>
        }
      >
    >


  export type WalletTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletId?: boolean
    type?: boolean
    amount?: boolean
    currency?: boolean
    description?: boolean
    createdAt?: boolean
    wallet?: boolean | walletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["walletTransaction"]>

  export type WalletTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletId?: boolean
    type?: boolean
    amount?: boolean
    currency?: boolean
    description?: boolean
    createdAt?: boolean
    wallet?: boolean | walletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["walletTransaction"]>

  export type WalletTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletId?: boolean
    type?: boolean
    amount?: boolean
    currency?: boolean
    description?: boolean
    createdAt?: boolean
    wallet?: boolean | walletDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["walletTransaction"]>

  export type WalletTransactionSelectScalar = {
    id?: boolean
    walletId?: boolean
    type?: boolean
    amount?: boolean
    currency?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type WalletTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "walletId" | "type" | "amount" | "currency" | "description" | "createdAt", ExtArgs["result"]["walletTransaction"]>
  export type WalletTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | walletDefaultArgs<ExtArgs>
  }
  export type WalletTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | walletDefaultArgs<ExtArgs>
  }
  export type WalletTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | walletDefaultArgs<ExtArgs>
  }

  export type $WalletTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WalletTransaction"
    objects: {
      wallet: Prisma.$walletPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      walletId: string
      type: $Enums.TransactionType
      amount: number
      currency: $Enums.CurrencyType
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["walletTransaction"]>
    composites: {}
  }

  type WalletTransactionGetPayload<S extends boolean | null | undefined | WalletTransactionDefaultArgs> = $Result.GetResult<Prisma.$WalletTransactionPayload, S>

  type WalletTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WalletTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalletTransactionCountAggregateInputType | true
    }

  export interface WalletTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WalletTransaction'], meta: { name: 'WalletTransaction' } }
    /**
     * Find zero or one WalletTransaction that matches the filter.
     * @param {WalletTransactionFindUniqueArgs} args - Arguments to find a WalletTransaction
     * @example
     * // Get one WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletTransactionFindUniqueArgs>(args: SelectSubset<T, WalletTransactionFindUniqueArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one WalletTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WalletTransactionFindUniqueOrThrowArgs} args - Arguments to find a WalletTransaction
     * @example
     * // Get one WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first WalletTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionFindFirstArgs} args - Arguments to find a WalletTransaction
     * @example
     * // Get one WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletTransactionFindFirstArgs>(args?: SelectSubset<T, WalletTransactionFindFirstArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first WalletTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionFindFirstOrThrowArgs} args - Arguments to find a WalletTransaction
     * @example
     * // Get one WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more WalletTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WalletTransactions
     * const walletTransactions = await prisma.walletTransaction.findMany()
     * 
     * // Get first 10 WalletTransactions
     * const walletTransactions = await prisma.walletTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletTransactionWithIdOnly = await prisma.walletTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WalletTransactionFindManyArgs>(args?: SelectSubset<T, WalletTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a WalletTransaction.
     * @param {WalletTransactionCreateArgs} args - Arguments to create a WalletTransaction.
     * @example
     * // Create one WalletTransaction
     * const WalletTransaction = await prisma.walletTransaction.create({
     *   data: {
     *     // ... data to create a WalletTransaction
     *   }
     * })
     * 
     */
    create<T extends WalletTransactionCreateArgs>(args: SelectSubset<T, WalletTransactionCreateArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many WalletTransactions.
     * @param {WalletTransactionCreateManyArgs} args - Arguments to create many WalletTransactions.
     * @example
     * // Create many WalletTransactions
     * const walletTransaction = await prisma.walletTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletTransactionCreateManyArgs>(args?: SelectSubset<T, WalletTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WalletTransactions and returns the data saved in the database.
     * @param {WalletTransactionCreateManyAndReturnArgs} args - Arguments to create many WalletTransactions.
     * @example
     * // Create many WalletTransactions
     * const walletTransaction = await prisma.walletTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WalletTransactions and only return the `id`
     * const walletTransactionWithIdOnly = await prisma.walletTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WalletTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, WalletTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a WalletTransaction.
     * @param {WalletTransactionDeleteArgs} args - Arguments to delete one WalletTransaction.
     * @example
     * // Delete one WalletTransaction
     * const WalletTransaction = await prisma.walletTransaction.delete({
     *   where: {
     *     // ... filter to delete one WalletTransaction
     *   }
     * })
     * 
     */
    delete<T extends WalletTransactionDeleteArgs>(args: SelectSubset<T, WalletTransactionDeleteArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one WalletTransaction.
     * @param {WalletTransactionUpdateArgs} args - Arguments to update one WalletTransaction.
     * @example
     * // Update one WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletTransactionUpdateArgs>(args: SelectSubset<T, WalletTransactionUpdateArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more WalletTransactions.
     * @param {WalletTransactionDeleteManyArgs} args - Arguments to filter WalletTransactions to delete.
     * @example
     * // Delete a few WalletTransactions
     * const { count } = await prisma.walletTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletTransactionDeleteManyArgs>(args?: SelectSubset<T, WalletTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WalletTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WalletTransactions
     * const walletTransaction = await prisma.walletTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletTransactionUpdateManyArgs>(args: SelectSubset<T, WalletTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WalletTransactions and returns the data updated in the database.
     * @param {WalletTransactionUpdateManyAndReturnArgs} args - Arguments to update many WalletTransactions.
     * @example
     * // Update many WalletTransactions
     * const walletTransaction = await prisma.walletTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WalletTransactions and only return the `id`
     * const walletTransactionWithIdOnly = await prisma.walletTransaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WalletTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, WalletTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one WalletTransaction.
     * @param {WalletTransactionUpsertArgs} args - Arguments to update or create a WalletTransaction.
     * @example
     * // Update or create a WalletTransaction
     * const walletTransaction = await prisma.walletTransaction.upsert({
     *   create: {
     *     // ... data to create a WalletTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WalletTransaction we want to update
     *   }
     * })
     */
    upsert<T extends WalletTransactionUpsertArgs>(args: SelectSubset<T, WalletTransactionUpsertArgs<ExtArgs>>): Prisma__WalletTransactionClient<$Result.GetResult<Prisma.$WalletTransactionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of WalletTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionCountArgs} args - Arguments to filter WalletTransactions to count.
     * @example
     * // Count the number of WalletTransactions
     * const count = await prisma.walletTransaction.count({
     *   where: {
     *     // ... the filter for the WalletTransactions we want to count
     *   }
     * })
    **/
    count<T extends WalletTransactionCountArgs>(
      args?: Subset<T, WalletTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WalletTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WalletTransactionAggregateArgs>(args: Subset<T, WalletTransactionAggregateArgs>): Prisma.PrismaPromise<GetWalletTransactionAggregateType<T>>

    /**
     * Group by WalletTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WalletTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletTransactionGroupByArgs['orderBy'] }
        : { orderBy?: WalletTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WalletTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WalletTransaction model
   */
  readonly fields: WalletTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WalletTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallet<T extends walletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, walletDefaultArgs<ExtArgs>>): Prisma__walletClient<$Result.GetResult<Prisma.$walletPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WalletTransaction model
   */ 
  interface WalletTransactionFieldRefs {
    readonly id: FieldRef<"WalletTransaction", 'String'>
    readonly walletId: FieldRef<"WalletTransaction", 'String'>
    readonly type: FieldRef<"WalletTransaction", 'TransactionType'>
    readonly amount: FieldRef<"WalletTransaction", 'Float'>
    readonly currency: FieldRef<"WalletTransaction", 'CurrencyType'>
    readonly description: FieldRef<"WalletTransaction", 'String'>
    readonly createdAt: FieldRef<"WalletTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WalletTransaction findUnique
   */
  export type WalletTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransaction to fetch.
     */
    where: WalletTransactionWhereUniqueInput
  }

  /**
   * WalletTransaction findUniqueOrThrow
   */
  export type WalletTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransaction to fetch.
     */
    where: WalletTransactionWhereUniqueInput
  }

  /**
   * WalletTransaction findFirst
   */
  export type WalletTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransaction to fetch.
     */
    where?: WalletTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransactions to fetch.
     */
    orderBy?: WalletTransactionOrderByWithRelationInput | WalletTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalletTransactions.
     */
    cursor?: WalletTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalletTransactions.
     */
    distinct?: WalletTransactionScalarFieldEnum | WalletTransactionScalarFieldEnum[]
  }

  /**
   * WalletTransaction findFirstOrThrow
   */
  export type WalletTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransaction to fetch.
     */
    where?: WalletTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransactions to fetch.
     */
    orderBy?: WalletTransactionOrderByWithRelationInput | WalletTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WalletTransactions.
     */
    cursor?: WalletTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WalletTransactions.
     */
    distinct?: WalletTransactionScalarFieldEnum | WalletTransactionScalarFieldEnum[]
  }

  /**
   * WalletTransaction findMany
   */
  export type WalletTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter, which WalletTransactions to fetch.
     */
    where?: WalletTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WalletTransactions to fetch.
     */
    orderBy?: WalletTransactionOrderByWithRelationInput | WalletTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WalletTransactions.
     */
    cursor?: WalletTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WalletTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WalletTransactions.
     */
    skip?: number
    distinct?: WalletTransactionScalarFieldEnum | WalletTransactionScalarFieldEnum[]
  }

  /**
   * WalletTransaction create
   */
  export type WalletTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a WalletTransaction.
     */
    data: XOR<WalletTransactionCreateInput, WalletTransactionUncheckedCreateInput>
  }

  /**
   * WalletTransaction createMany
   */
  export type WalletTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WalletTransactions.
     */
    data: WalletTransactionCreateManyInput | WalletTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WalletTransaction createManyAndReturn
   */
  export type WalletTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many WalletTransactions.
     */
    data: WalletTransactionCreateManyInput | WalletTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WalletTransaction update
   */
  export type WalletTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a WalletTransaction.
     */
    data: XOR<WalletTransactionUpdateInput, WalletTransactionUncheckedUpdateInput>
    /**
     * Choose, which WalletTransaction to update.
     */
    where: WalletTransactionWhereUniqueInput
  }

  /**
   * WalletTransaction updateMany
   */
  export type WalletTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WalletTransactions.
     */
    data: XOR<WalletTransactionUpdateManyMutationInput, WalletTransactionUncheckedUpdateManyInput>
    /**
     * Filter which WalletTransactions to update
     */
    where?: WalletTransactionWhereInput
  }

  /**
   * WalletTransaction updateManyAndReturn
   */
  export type WalletTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * The data used to update WalletTransactions.
     */
    data: XOR<WalletTransactionUpdateManyMutationInput, WalletTransactionUncheckedUpdateManyInput>
    /**
     * Filter which WalletTransactions to update
     */
    where?: WalletTransactionWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WalletTransaction upsert
   */
  export type WalletTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the WalletTransaction to update in case it exists.
     */
    where: WalletTransactionWhereUniqueInput
    /**
     * In case the WalletTransaction found by the `where` argument doesn't exist, create a new WalletTransaction with this data.
     */
    create: XOR<WalletTransactionCreateInput, WalletTransactionUncheckedCreateInput>
    /**
     * In case the WalletTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletTransactionUpdateInput, WalletTransactionUncheckedUpdateInput>
  }

  /**
   * WalletTransaction delete
   */
  export type WalletTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
    /**
     * Filter which WalletTransaction to delete.
     */
    where: WalletTransactionWhereUniqueInput
  }

  /**
   * WalletTransaction deleteMany
   */
  export type WalletTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WalletTransactions to delete
     */
    where?: WalletTransactionWhereInput
  }

  /**
   * WalletTransaction without action
   */
  export type WalletTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WalletTransaction
     */
    select?: WalletTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WalletTransaction
     */
    omit?: WalletTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletTransactionInclude<ExtArgs> | null
  }


  /**
   * Model Administrador
   */

  export type AggregateAdministrador = {
    _count: AdministradorCountAggregateOutputType | null
    _min: AdministradorMinAggregateOutputType | null
    _max: AdministradorMaxAggregateOutputType | null
  }

  export type AdministradorMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    name: string | null
  }

  export type AdministradorMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    name: string | null
  }

  export type AdministradorCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    name: number
    _all: number
  }


  export type AdministradorMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    name?: true
  }

  export type AdministradorMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    name?: true
  }

  export type AdministradorCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    name?: true
    _all?: true
  }

  export type AdministradorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administrador to aggregate.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Administradors
    **/
    _count?: true | AdministradorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdministradorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdministradorMaxAggregateInputType
  }

  export type GetAdministradorAggregateType<T extends AdministradorAggregateArgs> = {
        [P in keyof T & keyof AggregateAdministrador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdministrador[P]>
      : GetScalarType<T[P], AggregateAdministrador[P]>
  }




  export type AdministradorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdministradorWhereInput
    orderBy?: AdministradorOrderByWithAggregationInput | AdministradorOrderByWithAggregationInput[]
    by: AdministradorScalarFieldEnum[] | AdministradorScalarFieldEnum
    having?: AdministradorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdministradorCountAggregateInputType | true
    _min?: AdministradorMinAggregateInputType
    _max?: AdministradorMaxAggregateInputType
  }

  export type AdministradorGroupByOutputType = {
    id: string
    email: string
    password: string
    role: $Enums.UserRole
    name: string
    _count: AdministradorCountAggregateOutputType | null
    _min: AdministradorMinAggregateOutputType | null
    _max: AdministradorMaxAggregateOutputType | null
  }

  type GetAdministradorGroupByPayload<T extends AdministradorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdministradorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdministradorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdministradorGroupByOutputType[P]>
            : GetScalarType<T[P], AdministradorGroupByOutputType[P]>
        }
      >
    >


  export type AdministradorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
  }, ExtArgs["result"]["administrador"]>

  export type AdministradorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
  }, ExtArgs["result"]["administrador"]>

  export type AdministradorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
  }, ExtArgs["result"]["administrador"]>

  export type AdministradorSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    name?: boolean
  }

  export type AdministradorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "name", ExtArgs["result"]["administrador"]>

  export type $AdministradorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Administrador"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      role: $Enums.UserRole
      name: string
    }, ExtArgs["result"]["administrador"]>
    composites: {}
  }

  type AdministradorGetPayload<S extends boolean | null | undefined | AdministradorDefaultArgs> = $Result.GetResult<Prisma.$AdministradorPayload, S>

  type AdministradorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdministradorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdministradorCountAggregateInputType | true
    }

  export interface AdministradorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Administrador'], meta: { name: 'Administrador' } }
    /**
     * Find zero or one Administrador that matches the filter.
     * @param {AdministradorFindUniqueArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdministradorFindUniqueArgs>(args: SelectSubset<T, AdministradorFindUniqueArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Administrador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdministradorFindUniqueOrThrowArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdministradorFindUniqueOrThrowArgs>(args: SelectSubset<T, AdministradorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Administrador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindFirstArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdministradorFindFirstArgs>(args?: SelectSubset<T, AdministradorFindFirstArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Administrador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindFirstOrThrowArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdministradorFindFirstOrThrowArgs>(args?: SelectSubset<T, AdministradorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Administradors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Administradors
     * const administradors = await prisma.administrador.findMany()
     * 
     * // Get first 10 Administradors
     * const administradors = await prisma.administrador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const administradorWithIdOnly = await prisma.administrador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdministradorFindManyArgs>(args?: SelectSubset<T, AdministradorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Administrador.
     * @param {AdministradorCreateArgs} args - Arguments to create a Administrador.
     * @example
     * // Create one Administrador
     * const Administrador = await prisma.administrador.create({
     *   data: {
     *     // ... data to create a Administrador
     *   }
     * })
     * 
     */
    create<T extends AdministradorCreateArgs>(args: SelectSubset<T, AdministradorCreateArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Administradors.
     * @param {AdministradorCreateManyArgs} args - Arguments to create many Administradors.
     * @example
     * // Create many Administradors
     * const administrador = await prisma.administrador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdministradorCreateManyArgs>(args?: SelectSubset<T, AdministradorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Administradors and returns the data saved in the database.
     * @param {AdministradorCreateManyAndReturnArgs} args - Arguments to create many Administradors.
     * @example
     * // Create many Administradors
     * const administrador = await prisma.administrador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Administradors and only return the `id`
     * const administradorWithIdOnly = await prisma.administrador.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdministradorCreateManyAndReturnArgs>(args?: SelectSubset<T, AdministradorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Administrador.
     * @param {AdministradorDeleteArgs} args - Arguments to delete one Administrador.
     * @example
     * // Delete one Administrador
     * const Administrador = await prisma.administrador.delete({
     *   where: {
     *     // ... filter to delete one Administrador
     *   }
     * })
     * 
     */
    delete<T extends AdministradorDeleteArgs>(args: SelectSubset<T, AdministradorDeleteArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Administrador.
     * @param {AdministradorUpdateArgs} args - Arguments to update one Administrador.
     * @example
     * // Update one Administrador
     * const administrador = await prisma.administrador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdministradorUpdateArgs>(args: SelectSubset<T, AdministradorUpdateArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Administradors.
     * @param {AdministradorDeleteManyArgs} args - Arguments to filter Administradors to delete.
     * @example
     * // Delete a few Administradors
     * const { count } = await prisma.administrador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdministradorDeleteManyArgs>(args?: SelectSubset<T, AdministradorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Administradors
     * const administrador = await prisma.administrador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdministradorUpdateManyArgs>(args: SelectSubset<T, AdministradorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administradors and returns the data updated in the database.
     * @param {AdministradorUpdateManyAndReturnArgs} args - Arguments to update many Administradors.
     * @example
     * // Update many Administradors
     * const administrador = await prisma.administrador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Administradors and only return the `id`
     * const administradorWithIdOnly = await prisma.administrador.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdministradorUpdateManyAndReturnArgs>(args: SelectSubset<T, AdministradorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Administrador.
     * @param {AdministradorUpsertArgs} args - Arguments to update or create a Administrador.
     * @example
     * // Update or create a Administrador
     * const administrador = await prisma.administrador.upsert({
     *   create: {
     *     // ... data to create a Administrador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Administrador we want to update
     *   }
     * })
     */
    upsert<T extends AdministradorUpsertArgs>(args: SelectSubset<T, AdministradorUpsertArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Administradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorCountArgs} args - Arguments to filter Administradors to count.
     * @example
     * // Count the number of Administradors
     * const count = await prisma.administrador.count({
     *   where: {
     *     // ... the filter for the Administradors we want to count
     *   }
     * })
    **/
    count<T extends AdministradorCountArgs>(
      args?: Subset<T, AdministradorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdministradorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Administrador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdministradorAggregateArgs>(args: Subset<T, AdministradorAggregateArgs>): Prisma.PrismaPromise<GetAdministradorAggregateType<T>>

    /**
     * Group by Administrador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdministradorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdministradorGroupByArgs['orderBy'] }
        : { orderBy?: AdministradorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdministradorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdministradorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Administrador model
   */
  readonly fields: AdministradorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Administrador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdministradorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Administrador model
   */ 
  interface AdministradorFieldRefs {
    readonly id: FieldRef<"Administrador", 'String'>
    readonly email: FieldRef<"Administrador", 'String'>
    readonly password: FieldRef<"Administrador", 'String'>
    readonly role: FieldRef<"Administrador", 'UserRole'>
    readonly name: FieldRef<"Administrador", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Administrador findUnique
   */
  export type AdministradorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador findUniqueOrThrow
   */
  export type AdministradorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador findFirst
   */
  export type AdministradorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administradors.
     */
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador findFirstOrThrow
   */
  export type AdministradorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administradors.
     */
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador findMany
   */
  export type AdministradorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Filter, which Administradors to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador create
   */
  export type AdministradorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * The data needed to create a Administrador.
     */
    data: XOR<AdministradorCreateInput, AdministradorUncheckedCreateInput>
  }

  /**
   * Administrador createMany
   */
  export type AdministradorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Administradors.
     */
    data: AdministradorCreateManyInput | AdministradorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Administrador createManyAndReturn
   */
  export type AdministradorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * The data used to create many Administradors.
     */
    data: AdministradorCreateManyInput | AdministradorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Administrador update
   */
  export type AdministradorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * The data needed to update a Administrador.
     */
    data: XOR<AdministradorUpdateInput, AdministradorUncheckedUpdateInput>
    /**
     * Choose, which Administrador to update.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador updateMany
   */
  export type AdministradorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Administradors.
     */
    data: XOR<AdministradorUpdateManyMutationInput, AdministradorUncheckedUpdateManyInput>
    /**
     * Filter which Administradors to update
     */
    where?: AdministradorWhereInput
  }

  /**
   * Administrador updateManyAndReturn
   */
  export type AdministradorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * The data used to update Administradors.
     */
    data: XOR<AdministradorUpdateManyMutationInput, AdministradorUncheckedUpdateManyInput>
    /**
     * Filter which Administradors to update
     */
    where?: AdministradorWhereInput
  }

  /**
   * Administrador upsert
   */
  export type AdministradorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * The filter to search for the Administrador to update in case it exists.
     */
    where: AdministradorWhereUniqueInput
    /**
     * In case the Administrador found by the `where` argument doesn't exist, create a new Administrador with this data.
     */
    create: XOR<AdministradorCreateInput, AdministradorUncheckedCreateInput>
    /**
     * In case the Administrador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdministradorUpdateInput, AdministradorUncheckedUpdateInput>
  }

  /**
   * Administrador delete
   */
  export type AdministradorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Filter which Administrador to delete.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador deleteMany
   */
  export type AdministradorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administradors to delete
     */
    where?: AdministradorWhereInput
  }

  /**
   * Administrador without action
   */
  export type AdministradorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
  }


  /**
   * Model Support
   */

  export type AggregateSupport = {
    _count: SupportCountAggregateOutputType | null
    _min: SupportMinAggregateOutputType | null
    _max: SupportMaxAggregateOutputType | null
  }

  export type SupportMinAggregateOutputType = {
    id: string | null
    userId: string | null
    subject: string | null
    message: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupportMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    subject: string | null
    message: string | null
    status: $Enums.Status | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupportCountAggregateOutputType = {
    id: number
    userId: number
    subject: number
    message: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupportMinAggregateInputType = {
    id?: true
    userId?: true
    subject?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupportMaxAggregateInputType = {
    id?: true
    userId?: true
    subject?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupportCountAggregateInputType = {
    id?: true
    userId?: true
    subject?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Support to aggregate.
     */
    where?: SupportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supports to fetch.
     */
    orderBy?: SupportOrderByWithRelationInput | SupportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Supports
    **/
    _count?: true | SupportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupportMaxAggregateInputType
  }

  export type GetSupportAggregateType<T extends SupportAggregateArgs> = {
        [P in keyof T & keyof AggregateSupport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupport[P]>
      : GetScalarType<T[P], AggregateSupport[P]>
  }




  export type SupportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupportWhereInput
    orderBy?: SupportOrderByWithAggregationInput | SupportOrderByWithAggregationInput[]
    by: SupportScalarFieldEnum[] | SupportScalarFieldEnum
    having?: SupportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupportCountAggregateInputType | true
    _min?: SupportMinAggregateInputType
    _max?: SupportMaxAggregateInputType
  }

  export type SupportGroupByOutputType = {
    id: string
    userId: string
    subject: string
    message: string
    status: $Enums.Status
    createdAt: Date
    updatedAt: Date
    _count: SupportCountAggregateOutputType | null
    _min: SupportMinAggregateOutputType | null
    _max: SupportMaxAggregateOutputType | null
  }

  type GetSupportGroupByPayload<T extends SupportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupportGroupByOutputType[P]>
            : GetScalarType<T[P], SupportGroupByOutputType[P]>
        }
      >
    >


  export type SupportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subject?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["support"]>

  export type SupportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subject?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["support"]>

  export type SupportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subject?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["support"]>

  export type SupportSelectScalar = {
    id?: boolean
    userId?: boolean
    subject?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SupportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "subject" | "message" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["support"]>
  export type SupportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SupportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SupportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SupportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Support"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      subject: string
      message: string
      status: $Enums.Status
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["support"]>
    composites: {}
  }

  type SupportGetPayload<S extends boolean | null | undefined | SupportDefaultArgs> = $Result.GetResult<Prisma.$SupportPayload, S>

  type SupportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupportCountAggregateInputType | true
    }

  export interface SupportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Support'], meta: { name: 'Support' } }
    /**
     * Find zero or one Support that matches the filter.
     * @param {SupportFindUniqueArgs} args - Arguments to find a Support
     * @example
     * // Get one Support
     * const support = await prisma.support.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupportFindUniqueArgs>(args: SelectSubset<T, SupportFindUniqueArgs<ExtArgs>>): Prisma__SupportClient<$Result.GetResult<Prisma.$SupportPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Support that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupportFindUniqueOrThrowArgs} args - Arguments to find a Support
     * @example
     * // Get one Support
     * const support = await prisma.support.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupportFindUniqueOrThrowArgs>(args: SelectSubset<T, SupportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupportClient<$Result.GetResult<Prisma.$SupportPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Support that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportFindFirstArgs} args - Arguments to find a Support
     * @example
     * // Get one Support
     * const support = await prisma.support.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupportFindFirstArgs>(args?: SelectSubset<T, SupportFindFirstArgs<ExtArgs>>): Prisma__SupportClient<$Result.GetResult<Prisma.$SupportPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Support that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportFindFirstOrThrowArgs} args - Arguments to find a Support
     * @example
     * // Get one Support
     * const support = await prisma.support.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupportFindFirstOrThrowArgs>(args?: SelectSubset<T, SupportFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupportClient<$Result.GetResult<Prisma.$SupportPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Supports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Supports
     * const supports = await prisma.support.findMany()
     * 
     * // Get first 10 Supports
     * const supports = await prisma.support.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supportWithIdOnly = await prisma.support.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupportFindManyArgs>(args?: SelectSubset<T, SupportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Support.
     * @param {SupportCreateArgs} args - Arguments to create a Support.
     * @example
     * // Create one Support
     * const Support = await prisma.support.create({
     *   data: {
     *     // ... data to create a Support
     *   }
     * })
     * 
     */
    create<T extends SupportCreateArgs>(args: SelectSubset<T, SupportCreateArgs<ExtArgs>>): Prisma__SupportClient<$Result.GetResult<Prisma.$SupportPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Supports.
     * @param {SupportCreateManyArgs} args - Arguments to create many Supports.
     * @example
     * // Create many Supports
     * const support = await prisma.support.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupportCreateManyArgs>(args?: SelectSubset<T, SupportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Supports and returns the data saved in the database.
     * @param {SupportCreateManyAndReturnArgs} args - Arguments to create many Supports.
     * @example
     * // Create many Supports
     * const support = await prisma.support.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Supports and only return the `id`
     * const supportWithIdOnly = await prisma.support.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupportCreateManyAndReturnArgs>(args?: SelectSubset<T, SupportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Support.
     * @param {SupportDeleteArgs} args - Arguments to delete one Support.
     * @example
     * // Delete one Support
     * const Support = await prisma.support.delete({
     *   where: {
     *     // ... filter to delete one Support
     *   }
     * })
     * 
     */
    delete<T extends SupportDeleteArgs>(args: SelectSubset<T, SupportDeleteArgs<ExtArgs>>): Prisma__SupportClient<$Result.GetResult<Prisma.$SupportPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Support.
     * @param {SupportUpdateArgs} args - Arguments to update one Support.
     * @example
     * // Update one Support
     * const support = await prisma.support.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupportUpdateArgs>(args: SelectSubset<T, SupportUpdateArgs<ExtArgs>>): Prisma__SupportClient<$Result.GetResult<Prisma.$SupportPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Supports.
     * @param {SupportDeleteManyArgs} args - Arguments to filter Supports to delete.
     * @example
     * // Delete a few Supports
     * const { count } = await prisma.support.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupportDeleteManyArgs>(args?: SelectSubset<T, SupportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Supports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Supports
     * const support = await prisma.support.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupportUpdateManyArgs>(args: SelectSubset<T, SupportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Supports and returns the data updated in the database.
     * @param {SupportUpdateManyAndReturnArgs} args - Arguments to update many Supports.
     * @example
     * // Update many Supports
     * const support = await prisma.support.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Supports and only return the `id`
     * const supportWithIdOnly = await prisma.support.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SupportUpdateManyAndReturnArgs>(args: SelectSubset<T, SupportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupportPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Support.
     * @param {SupportUpsertArgs} args - Arguments to update or create a Support.
     * @example
     * // Update or create a Support
     * const support = await prisma.support.upsert({
     *   create: {
     *     // ... data to create a Support
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Support we want to update
     *   }
     * })
     */
    upsert<T extends SupportUpsertArgs>(args: SelectSubset<T, SupportUpsertArgs<ExtArgs>>): Prisma__SupportClient<$Result.GetResult<Prisma.$SupportPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Supports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportCountArgs} args - Arguments to filter Supports to count.
     * @example
     * // Count the number of Supports
     * const count = await prisma.support.count({
     *   where: {
     *     // ... the filter for the Supports we want to count
     *   }
     * })
    **/
    count<T extends SupportCountArgs>(
      args?: Subset<T, SupportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Support.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupportAggregateArgs>(args: Subset<T, SupportAggregateArgs>): Prisma.PrismaPromise<GetSupportAggregateType<T>>

    /**
     * Group by Support.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupportGroupByArgs['orderBy'] }
        : { orderBy?: SupportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Support model
   */
  readonly fields: SupportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Support.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Support model
   */ 
  interface SupportFieldRefs {
    readonly id: FieldRef<"Support", 'String'>
    readonly userId: FieldRef<"Support", 'String'>
    readonly subject: FieldRef<"Support", 'String'>
    readonly message: FieldRef<"Support", 'String'>
    readonly status: FieldRef<"Support", 'Status'>
    readonly createdAt: FieldRef<"Support", 'DateTime'>
    readonly updatedAt: FieldRef<"Support", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Support findUnique
   */
  export type SupportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Support
     */
    select?: SupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Support
     */
    omit?: SupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportInclude<ExtArgs> | null
    /**
     * Filter, which Support to fetch.
     */
    where: SupportWhereUniqueInput
  }

  /**
   * Support findUniqueOrThrow
   */
  export type SupportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Support
     */
    select?: SupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Support
     */
    omit?: SupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportInclude<ExtArgs> | null
    /**
     * Filter, which Support to fetch.
     */
    where: SupportWhereUniqueInput
  }

  /**
   * Support findFirst
   */
  export type SupportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Support
     */
    select?: SupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Support
     */
    omit?: SupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportInclude<ExtArgs> | null
    /**
     * Filter, which Support to fetch.
     */
    where?: SupportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supports to fetch.
     */
    orderBy?: SupportOrderByWithRelationInput | SupportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Supports.
     */
    cursor?: SupportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Supports.
     */
    distinct?: SupportScalarFieldEnum | SupportScalarFieldEnum[]
  }

  /**
   * Support findFirstOrThrow
   */
  export type SupportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Support
     */
    select?: SupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Support
     */
    omit?: SupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportInclude<ExtArgs> | null
    /**
     * Filter, which Support to fetch.
     */
    where?: SupportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supports to fetch.
     */
    orderBy?: SupportOrderByWithRelationInput | SupportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Supports.
     */
    cursor?: SupportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Supports.
     */
    distinct?: SupportScalarFieldEnum | SupportScalarFieldEnum[]
  }

  /**
   * Support findMany
   */
  export type SupportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Support
     */
    select?: SupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Support
     */
    omit?: SupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportInclude<ExtArgs> | null
    /**
     * Filter, which Supports to fetch.
     */
    where?: SupportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Supports to fetch.
     */
    orderBy?: SupportOrderByWithRelationInput | SupportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Supports.
     */
    cursor?: SupportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Supports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Supports.
     */
    skip?: number
    distinct?: SupportScalarFieldEnum | SupportScalarFieldEnum[]
  }

  /**
   * Support create
   */
  export type SupportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Support
     */
    select?: SupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Support
     */
    omit?: SupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportInclude<ExtArgs> | null
    /**
     * The data needed to create a Support.
     */
    data: XOR<SupportCreateInput, SupportUncheckedCreateInput>
  }

  /**
   * Support createMany
   */
  export type SupportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Supports.
     */
    data: SupportCreateManyInput | SupportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Support createManyAndReturn
   */
  export type SupportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Support
     */
    select?: SupportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Support
     */
    omit?: SupportOmit<ExtArgs> | null
    /**
     * The data used to create many Supports.
     */
    data: SupportCreateManyInput | SupportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Support update
   */
  export type SupportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Support
     */
    select?: SupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Support
     */
    omit?: SupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportInclude<ExtArgs> | null
    /**
     * The data needed to update a Support.
     */
    data: XOR<SupportUpdateInput, SupportUncheckedUpdateInput>
    /**
     * Choose, which Support to update.
     */
    where: SupportWhereUniqueInput
  }

  /**
   * Support updateMany
   */
  export type SupportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Supports.
     */
    data: XOR<SupportUpdateManyMutationInput, SupportUncheckedUpdateManyInput>
    /**
     * Filter which Supports to update
     */
    where?: SupportWhereInput
  }

  /**
   * Support updateManyAndReturn
   */
  export type SupportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Support
     */
    select?: SupportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Support
     */
    omit?: SupportOmit<ExtArgs> | null
    /**
     * The data used to update Supports.
     */
    data: XOR<SupportUpdateManyMutationInput, SupportUncheckedUpdateManyInput>
    /**
     * Filter which Supports to update
     */
    where?: SupportWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Support upsert
   */
  export type SupportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Support
     */
    select?: SupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Support
     */
    omit?: SupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportInclude<ExtArgs> | null
    /**
     * The filter to search for the Support to update in case it exists.
     */
    where: SupportWhereUniqueInput
    /**
     * In case the Support found by the `where` argument doesn't exist, create a new Support with this data.
     */
    create: XOR<SupportCreateInput, SupportUncheckedCreateInput>
    /**
     * In case the Support was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupportUpdateInput, SupportUncheckedUpdateInput>
  }

  /**
   * Support delete
   */
  export type SupportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Support
     */
    select?: SupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Support
     */
    omit?: SupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportInclude<ExtArgs> | null
    /**
     * Filter which Support to delete.
     */
    where: SupportWhereUniqueInput
  }

  /**
   * Support deleteMany
   */
  export type SupportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supports to delete
     */
    where?: SupportWhereInput
  }

  /**
   * Support without action
   */
  export type SupportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Support
     */
    select?: SupportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Support
     */
    omit?: SupportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupportInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    mainGoal: $Enums.MainGoal | null
    financialSkills: $Enums.FinancialSkills | null
    riskTolerance: $Enums.RiskTolerance | null
    monthlyInvestment: $Enums.MonthlyInvestment | null
    savingsOrInvestmentReason: $Enums.SavingsReason | null
    investmentTimeframe: $Enums.InvestmentTimeframe | null
    hasInvestedBefore: boolean | null
    financialGoalNextYear: boolean | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    mainGoal: $Enums.MainGoal | null
    financialSkills: $Enums.FinancialSkills | null
    riskTolerance: $Enums.RiskTolerance | null
    monthlyInvestment: $Enums.MonthlyInvestment | null
    savingsOrInvestmentReason: $Enums.SavingsReason | null
    investmentTimeframe: $Enums.InvestmentTimeframe | null
    hasInvestedBefore: boolean | null
    financialGoalNextYear: boolean | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    userId: number
    mainGoal: number
    financialSkills: number
    riskTolerance: number
    monthlyInvestment: number
    savingsOrInvestmentReason: number
    investmentTimeframe: number
    hasInvestedBefore: number
    financialGoalNextYear: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    userId?: true
    mainGoal?: true
    financialSkills?: true
    riskTolerance?: true
    monthlyInvestment?: true
    savingsOrInvestmentReason?: true
    investmentTimeframe?: true
    hasInvestedBefore?: true
    financialGoalNextYear?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    mainGoal?: true
    financialSkills?: true
    riskTolerance?: true
    monthlyInvestment?: true
    savingsOrInvestmentReason?: true
    investmentTimeframe?: true
    hasInvestedBefore?: true
    financialGoalNextYear?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    userId?: true
    mainGoal?: true
    financialSkills?: true
    riskTolerance?: true
    monthlyInvestment?: true
    savingsOrInvestmentReason?: true
    investmentTimeframe?: true
    hasInvestedBefore?: true
    financialGoalNextYear?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    userId: string
    mainGoal: $Enums.MainGoal | null
    financialSkills: $Enums.FinancialSkills | null
    riskTolerance: $Enums.RiskTolerance | null
    monthlyInvestment: $Enums.MonthlyInvestment | null
    savingsOrInvestmentReason: $Enums.SavingsReason | null
    investmentTimeframe: $Enums.InvestmentTimeframe | null
    hasInvestedBefore: boolean | null
    financialGoalNextYear: boolean | null
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mainGoal?: boolean
    financialSkills?: boolean
    riskTolerance?: boolean
    monthlyInvestment?: boolean
    savingsOrInvestmentReason?: boolean
    investmentTimeframe?: boolean
    hasInvestedBefore?: boolean
    financialGoalNextYear?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mainGoal?: boolean
    financialSkills?: boolean
    riskTolerance?: boolean
    monthlyInvestment?: boolean
    savingsOrInvestmentReason?: boolean
    investmentTimeframe?: boolean
    hasInvestedBefore?: boolean
    financialGoalNextYear?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mainGoal?: boolean
    financialSkills?: boolean
    riskTolerance?: boolean
    monthlyInvestment?: boolean
    savingsOrInvestmentReason?: boolean
    investmentTimeframe?: boolean
    hasInvestedBefore?: boolean
    financialGoalNextYear?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    mainGoal?: boolean
    financialSkills?: boolean
    riskTolerance?: boolean
    monthlyInvestment?: boolean
    savingsOrInvestmentReason?: boolean
    investmentTimeframe?: boolean
    hasInvestedBefore?: boolean
    financialGoalNextYear?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "mainGoal" | "financialSkills" | "riskTolerance" | "monthlyInvestment" | "savingsOrInvestmentReason" | "investmentTimeframe" | "hasInvestedBefore" | "financialGoalNextYear", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      mainGoal: $Enums.MainGoal | null
      financialSkills: $Enums.FinancialSkills | null
      riskTolerance: $Enums.RiskTolerance | null
      monthlyInvestment: $Enums.MonthlyInvestment | null
      savingsOrInvestmentReason: $Enums.SavingsReason | null
      investmentTimeframe: $Enums.InvestmentTimeframe | null
      hasInvestedBefore: boolean | null
      financialGoalNextYear: boolean | null
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */ 
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly userId: FieldRef<"Profile", 'String'>
    readonly mainGoal: FieldRef<"Profile", 'MainGoal'>
    readonly financialSkills: FieldRef<"Profile", 'FinancialSkills'>
    readonly riskTolerance: FieldRef<"Profile", 'RiskTolerance'>
    readonly monthlyInvestment: FieldRef<"Profile", 'MonthlyInvestment'>
    readonly savingsOrInvestmentReason: FieldRef<"Profile", 'SavingsReason'>
    readonly investmentTimeframe: FieldRef<"Profile", 'InvestmentTimeframe'>
    readonly hasInvestedBefore: FieldRef<"Profile", 'Boolean'>
    readonly financialGoalNextYear: FieldRef<"Profile", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TargetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    progress: 'progress',
    montoTarget: 'montoTarget',
    dateTarget: 'dateTarget',
    userId: 'userId'
  };

  export type TargetScalarFieldEnum = (typeof TargetScalarFieldEnum)[keyof typeof TargetScalarFieldEnum]


  export const FinancialRadiographyScalarFieldEnum: {
    id: 'id',
    monthlyIncome: 'monthlyIncome',
    monthlyExpenses: 'monthlyExpenses',
    savingCapacity: 'savingCapacity',
    debts: 'debts',
    savings: 'savings',
    userId: 'userId'
  };

  export type FinancialRadiographyScalarFieldEnum = (typeof FinancialRadiographyScalarFieldEnum)[keyof typeof FinancialRadiographyScalarFieldEnum]


  export const InvestmentPortfolioScalarFieldEnum: {
    id: 'id',
    profileRisk: 'profileRisk',
    performanceCurrent: 'performanceCurrent',
    coin: 'coin',
    userId: 'userId'
  };

  export type InvestmentPortfolioScalarFieldEnum = (typeof InvestmentPortfolioScalarFieldEnum)[keyof typeof InvestmentPortfolioScalarFieldEnum]


  export const FinancialInstrumentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    category: 'category',
    performance: 'performance',
    levelRisk: 'levelRisk',
    deadline: 'deadline',
    currency: 'currency'
  };

  export type FinancialInstrumentScalarFieldEnum = (typeof FinancialInstrumentScalarFieldEnum)[keyof typeof FinancialInstrumentScalarFieldEnum]


  export const InvestmentScalarFieldEnum: {
    id: 'id',
    amountInvested: 'amountInvested',
    performance: 'performance',
    dateInvestment: 'dateInvestment',
    portfolioId: 'portfolioId',
    instrumentId: 'instrumentId'
  };

  export type InvestmentScalarFieldEnum = (typeof InvestmentScalarFieldEnum)[keyof typeof InvestmentScalarFieldEnum]


  export const NewsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    source: 'source',
    dateNews: 'dateNews',
    category: 'category',
    createdAt: 'createdAt'
  };

  export type NewsScalarFieldEnum = (typeof NewsScalarFieldEnum)[keyof typeof NewsScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    dateComment: 'dateComment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    newsId: 'newsId'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const WalletScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    balancePesos: 'balancePesos',
    balanceDollars: 'balanceDollars',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WalletScalarFieldEnum = (typeof WalletScalarFieldEnum)[keyof typeof WalletScalarFieldEnum]


  export const WalletTransactionScalarFieldEnum: {
    id: 'id',
    walletId: 'walletId',
    type: 'type',
    amount: 'amount',
    currency: 'currency',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type WalletTransactionScalarFieldEnum = (typeof WalletTransactionScalarFieldEnum)[keyof typeof WalletTransactionScalarFieldEnum]


  export const AdministradorScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    name: 'name'
  };

  export type AdministradorScalarFieldEnum = (typeof AdministradorScalarFieldEnum)[keyof typeof AdministradorScalarFieldEnum]


  export const SupportScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    subject: 'subject',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SupportScalarFieldEnum = (typeof SupportScalarFieldEnum)[keyof typeof SupportScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
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

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'CurrencyType'
   */
  export type EnumCurrencyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurrencyType'>
    


  /**
   * Reference to a field of type 'CurrencyType[]'
   */
  export type ListEnumCurrencyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurrencyType[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'MainGoal'
   */
  export type EnumMainGoalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MainGoal'>
    


  /**
   * Reference to a field of type 'MainGoal[]'
   */
  export type ListEnumMainGoalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MainGoal[]'>
    


  /**
   * Reference to a field of type 'FinancialSkills'
   */
  export type EnumFinancialSkillsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FinancialSkills'>
    


  /**
   * Reference to a field of type 'FinancialSkills[]'
   */
  export type ListEnumFinancialSkillsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FinancialSkills[]'>
    


  /**
   * Reference to a field of type 'RiskTolerance'
   */
  export type EnumRiskToleranceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RiskTolerance'>
    


  /**
   * Reference to a field of type 'RiskTolerance[]'
   */
  export type ListEnumRiskToleranceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RiskTolerance[]'>
    


  /**
   * Reference to a field of type 'MonthlyInvestment'
   */
  export type EnumMonthlyInvestmentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MonthlyInvestment'>
    


  /**
   * Reference to a field of type 'MonthlyInvestment[]'
   */
  export type ListEnumMonthlyInvestmentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MonthlyInvestment[]'>
    


  /**
   * Reference to a field of type 'SavingsReason'
   */
  export type EnumSavingsReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SavingsReason'>
    


  /**
   * Reference to a field of type 'SavingsReason[]'
   */
  export type ListEnumSavingsReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SavingsReason[]'>
    


  /**
   * Reference to a field of type 'InvestmentTimeframe'
   */
  export type EnumInvestmentTimeframeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvestmentTimeframe'>
    


  /**
   * Reference to a field of type 'InvestmentTimeframe[]'
   */
  export type ListEnumInvestmentTimeframeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvestmentTimeframe[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleNullableFilter<"User"> | $Enums.UserRole | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isEmailVerified?: BoolFilter<"User"> | boolean
    wallet?: WalletListRelationFilter
    financialRadiographies?: FinancialRadiographyListRelationFilter
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    comment?: CommentListRelationFilter
    Support?: SupportListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    password?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isEmailVerified?: SortOrder
    wallet?: walletOrderByRelationAggregateInput
    financialRadiographies?: FinancialRadiographyOrderByRelationAggregateInput
    profile?: ProfileOrderByWithRelationInput
    comment?: CommentOrderByRelationAggregateInput
    Support?: SupportOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleNullableFilter<"User"> | $Enums.UserRole | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isEmailVerified?: BoolFilter<"User"> | boolean
    wallet?: WalletListRelationFilter
    financialRadiographies?: FinancialRadiographyListRelationFilter
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    comment?: CommentListRelationFilter
    Support?: SupportListRelationFilter
  }, "id" | "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    password?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isEmailVerified?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleNullableWithAggregatesFilter<"User"> | $Enums.UserRole | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type TargetWhereInput = {
    AND?: TargetWhereInput | TargetWhereInput[]
    OR?: TargetWhereInput[]
    NOT?: TargetWhereInput | TargetWhereInput[]
    id?: StringFilter<"Target"> | string
    name?: StringFilter<"Target"> | string
    description?: StringFilter<"Target"> | string
    progress?: StringFilter<"Target"> | string
    montoTarget?: IntFilter<"Target"> | number
    dateTarget?: DateTimeFilter<"Target"> | Date | string
    userId?: StringFilter<"Target"> | string
  }

  export type TargetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    progress?: SortOrder
    montoTarget?: SortOrder
    dateTarget?: SortOrder
    userId?: SortOrder
  }

  export type TargetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TargetWhereInput | TargetWhereInput[]
    OR?: TargetWhereInput[]
    NOT?: TargetWhereInput | TargetWhereInput[]
    name?: StringFilter<"Target"> | string
    description?: StringFilter<"Target"> | string
    progress?: StringFilter<"Target"> | string
    montoTarget?: IntFilter<"Target"> | number
    dateTarget?: DateTimeFilter<"Target"> | Date | string
    userId?: StringFilter<"Target"> | string
  }, "id">

  export type TargetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    progress?: SortOrder
    montoTarget?: SortOrder
    dateTarget?: SortOrder
    userId?: SortOrder
    _count?: TargetCountOrderByAggregateInput
    _avg?: TargetAvgOrderByAggregateInput
    _max?: TargetMaxOrderByAggregateInput
    _min?: TargetMinOrderByAggregateInput
    _sum?: TargetSumOrderByAggregateInput
  }

  export type TargetScalarWhereWithAggregatesInput = {
    AND?: TargetScalarWhereWithAggregatesInput | TargetScalarWhereWithAggregatesInput[]
    OR?: TargetScalarWhereWithAggregatesInput[]
    NOT?: TargetScalarWhereWithAggregatesInput | TargetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Target"> | string
    name?: StringWithAggregatesFilter<"Target"> | string
    description?: StringWithAggregatesFilter<"Target"> | string
    progress?: StringWithAggregatesFilter<"Target"> | string
    montoTarget?: IntWithAggregatesFilter<"Target"> | number
    dateTarget?: DateTimeWithAggregatesFilter<"Target"> | Date | string
    userId?: StringWithAggregatesFilter<"Target"> | string
  }

  export type FinancialRadiographyWhereInput = {
    AND?: FinancialRadiographyWhereInput | FinancialRadiographyWhereInput[]
    OR?: FinancialRadiographyWhereInput[]
    NOT?: FinancialRadiographyWhereInput | FinancialRadiographyWhereInput[]
    id?: StringFilter<"FinancialRadiography"> | string
    monthlyIncome?: DecimalNullableFilter<"FinancialRadiography"> | Decimal | DecimalJsLike | number | string | null
    monthlyExpenses?: DecimalNullableFilter<"FinancialRadiography"> | Decimal | DecimalJsLike | number | string | null
    savingCapacity?: DecimalNullableFilter<"FinancialRadiography"> | Decimal | DecimalJsLike | number | string | null
    debts?: DecimalNullableFilter<"FinancialRadiography"> | Decimal | DecimalJsLike | number | string | null
    savings?: DecimalNullableFilter<"FinancialRadiography"> | Decimal | DecimalJsLike | number | string | null
    userId?: StringFilter<"FinancialRadiography"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FinancialRadiographyOrderByWithRelationInput = {
    id?: SortOrder
    monthlyIncome?: SortOrderInput | SortOrder
    monthlyExpenses?: SortOrderInput | SortOrder
    savingCapacity?: SortOrderInput | SortOrder
    debts?: SortOrderInput | SortOrder
    savings?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FinancialRadiographyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FinancialRadiographyWhereInput | FinancialRadiographyWhereInput[]
    OR?: FinancialRadiographyWhereInput[]
    NOT?: FinancialRadiographyWhereInput | FinancialRadiographyWhereInput[]
    monthlyIncome?: DecimalNullableFilter<"FinancialRadiography"> | Decimal | DecimalJsLike | number | string | null
    monthlyExpenses?: DecimalNullableFilter<"FinancialRadiography"> | Decimal | DecimalJsLike | number | string | null
    savingCapacity?: DecimalNullableFilter<"FinancialRadiography"> | Decimal | DecimalJsLike | number | string | null
    debts?: DecimalNullableFilter<"FinancialRadiography"> | Decimal | DecimalJsLike | number | string | null
    savings?: DecimalNullableFilter<"FinancialRadiography"> | Decimal | DecimalJsLike | number | string | null
    userId?: StringFilter<"FinancialRadiography"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FinancialRadiographyOrderByWithAggregationInput = {
    id?: SortOrder
    monthlyIncome?: SortOrderInput | SortOrder
    monthlyExpenses?: SortOrderInput | SortOrder
    savingCapacity?: SortOrderInput | SortOrder
    debts?: SortOrderInput | SortOrder
    savings?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: FinancialRadiographyCountOrderByAggregateInput
    _avg?: FinancialRadiographyAvgOrderByAggregateInput
    _max?: FinancialRadiographyMaxOrderByAggregateInput
    _min?: FinancialRadiographyMinOrderByAggregateInput
    _sum?: FinancialRadiographySumOrderByAggregateInput
  }

  export type FinancialRadiographyScalarWhereWithAggregatesInput = {
    AND?: FinancialRadiographyScalarWhereWithAggregatesInput | FinancialRadiographyScalarWhereWithAggregatesInput[]
    OR?: FinancialRadiographyScalarWhereWithAggregatesInput[]
    NOT?: FinancialRadiographyScalarWhereWithAggregatesInput | FinancialRadiographyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FinancialRadiography"> | string
    monthlyIncome?: DecimalNullableWithAggregatesFilter<"FinancialRadiography"> | Decimal | DecimalJsLike | number | string | null
    monthlyExpenses?: DecimalNullableWithAggregatesFilter<"FinancialRadiography"> | Decimal | DecimalJsLike | number | string | null
    savingCapacity?: DecimalNullableWithAggregatesFilter<"FinancialRadiography"> | Decimal | DecimalJsLike | number | string | null
    debts?: DecimalNullableWithAggregatesFilter<"FinancialRadiography"> | Decimal | DecimalJsLike | number | string | null
    savings?: DecimalNullableWithAggregatesFilter<"FinancialRadiography"> | Decimal | DecimalJsLike | number | string | null
    userId?: StringWithAggregatesFilter<"FinancialRadiography"> | string
  }

  export type InvestmentPortfolioWhereInput = {
    AND?: InvestmentPortfolioWhereInput | InvestmentPortfolioWhereInput[]
    OR?: InvestmentPortfolioWhereInput[]
    NOT?: InvestmentPortfolioWhereInput | InvestmentPortfolioWhereInput[]
    id?: StringFilter<"InvestmentPortfolio"> | string
    profileRisk?: IntFilter<"InvestmentPortfolio"> | number
    performanceCurrent?: FloatFilter<"InvestmentPortfolio"> | number
    coin?: StringFilter<"InvestmentPortfolio"> | string
    userId?: StringFilter<"InvestmentPortfolio"> | string
    investment?: InvestmentListRelationFilter
  }

  export type InvestmentPortfolioOrderByWithRelationInput = {
    id?: SortOrder
    profileRisk?: SortOrder
    performanceCurrent?: SortOrder
    coin?: SortOrder
    userId?: SortOrder
    investment?: InvestmentOrderByRelationAggregateInput
  }

  export type InvestmentPortfolioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvestmentPortfolioWhereInput | InvestmentPortfolioWhereInput[]
    OR?: InvestmentPortfolioWhereInput[]
    NOT?: InvestmentPortfolioWhereInput | InvestmentPortfolioWhereInput[]
    profileRisk?: IntFilter<"InvestmentPortfolio"> | number
    performanceCurrent?: FloatFilter<"InvestmentPortfolio"> | number
    coin?: StringFilter<"InvestmentPortfolio"> | string
    userId?: StringFilter<"InvestmentPortfolio"> | string
    investment?: InvestmentListRelationFilter
  }, "id">

  export type InvestmentPortfolioOrderByWithAggregationInput = {
    id?: SortOrder
    profileRisk?: SortOrder
    performanceCurrent?: SortOrder
    coin?: SortOrder
    userId?: SortOrder
    _count?: InvestmentPortfolioCountOrderByAggregateInput
    _avg?: InvestmentPortfolioAvgOrderByAggregateInput
    _max?: InvestmentPortfolioMaxOrderByAggregateInput
    _min?: InvestmentPortfolioMinOrderByAggregateInput
    _sum?: InvestmentPortfolioSumOrderByAggregateInput
  }

  export type InvestmentPortfolioScalarWhereWithAggregatesInput = {
    AND?: InvestmentPortfolioScalarWhereWithAggregatesInput | InvestmentPortfolioScalarWhereWithAggregatesInput[]
    OR?: InvestmentPortfolioScalarWhereWithAggregatesInput[]
    NOT?: InvestmentPortfolioScalarWhereWithAggregatesInput | InvestmentPortfolioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InvestmentPortfolio"> | string
    profileRisk?: IntWithAggregatesFilter<"InvestmentPortfolio"> | number
    performanceCurrent?: FloatWithAggregatesFilter<"InvestmentPortfolio"> | number
    coin?: StringWithAggregatesFilter<"InvestmentPortfolio"> | string
    userId?: StringWithAggregatesFilter<"InvestmentPortfolio"> | string
  }

  export type FinancialInstrumentWhereInput = {
    AND?: FinancialInstrumentWhereInput | FinancialInstrumentWhereInput[]
    OR?: FinancialInstrumentWhereInput[]
    NOT?: FinancialInstrumentWhereInput | FinancialInstrumentWhereInput[]
    id?: StringFilter<"FinancialInstrument"> | string
    name?: StringFilter<"FinancialInstrument"> | string
    type?: StringFilter<"FinancialInstrument"> | string
    category?: StringFilter<"FinancialInstrument"> | string
    performance?: FloatFilter<"FinancialInstrument"> | number
    levelRisk?: IntFilter<"FinancialInstrument"> | number
    deadline?: IntFilter<"FinancialInstrument"> | number
    currency?: EnumCurrencyTypeFilter<"FinancialInstrument"> | $Enums.CurrencyType
    Investment?: InvestmentListRelationFilter
  }

  export type FinancialInstrumentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    category?: SortOrder
    performance?: SortOrder
    levelRisk?: SortOrder
    deadline?: SortOrder
    currency?: SortOrder
    Investment?: InvestmentOrderByRelationAggregateInput
  }

  export type FinancialInstrumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FinancialInstrumentWhereInput | FinancialInstrumentWhereInput[]
    OR?: FinancialInstrumentWhereInput[]
    NOT?: FinancialInstrumentWhereInput | FinancialInstrumentWhereInput[]
    name?: StringFilter<"FinancialInstrument"> | string
    type?: StringFilter<"FinancialInstrument"> | string
    category?: StringFilter<"FinancialInstrument"> | string
    performance?: FloatFilter<"FinancialInstrument"> | number
    levelRisk?: IntFilter<"FinancialInstrument"> | number
    deadline?: IntFilter<"FinancialInstrument"> | number
    currency?: EnumCurrencyTypeFilter<"FinancialInstrument"> | $Enums.CurrencyType
    Investment?: InvestmentListRelationFilter
  }, "id">

  export type FinancialInstrumentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    category?: SortOrder
    performance?: SortOrder
    levelRisk?: SortOrder
    deadline?: SortOrder
    currency?: SortOrder
    _count?: FinancialInstrumentCountOrderByAggregateInput
    _avg?: FinancialInstrumentAvgOrderByAggregateInput
    _max?: FinancialInstrumentMaxOrderByAggregateInput
    _min?: FinancialInstrumentMinOrderByAggregateInput
    _sum?: FinancialInstrumentSumOrderByAggregateInput
  }

  export type FinancialInstrumentScalarWhereWithAggregatesInput = {
    AND?: FinancialInstrumentScalarWhereWithAggregatesInput | FinancialInstrumentScalarWhereWithAggregatesInput[]
    OR?: FinancialInstrumentScalarWhereWithAggregatesInput[]
    NOT?: FinancialInstrumentScalarWhereWithAggregatesInput | FinancialInstrumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FinancialInstrument"> | string
    name?: StringWithAggregatesFilter<"FinancialInstrument"> | string
    type?: StringWithAggregatesFilter<"FinancialInstrument"> | string
    category?: StringWithAggregatesFilter<"FinancialInstrument"> | string
    performance?: FloatWithAggregatesFilter<"FinancialInstrument"> | number
    levelRisk?: IntWithAggregatesFilter<"FinancialInstrument"> | number
    deadline?: IntWithAggregatesFilter<"FinancialInstrument"> | number
    currency?: EnumCurrencyTypeWithAggregatesFilter<"FinancialInstrument"> | $Enums.CurrencyType
  }

  export type InvestmentWhereInput = {
    AND?: InvestmentWhereInput | InvestmentWhereInput[]
    OR?: InvestmentWhereInput[]
    NOT?: InvestmentWhereInput | InvestmentWhereInput[]
    id?: StringFilter<"Investment"> | string
    amountInvested?: IntFilter<"Investment"> | number
    performance?: StringFilter<"Investment"> | string
    dateInvestment?: DateTimeFilter<"Investment"> | Date | string
    portfolioId?: StringFilter<"Investment"> | string
    instrumentId?: StringFilter<"Investment"> | string
    instrument?: XOR<FinancialInstrumentScalarRelationFilter, FinancialInstrumentWhereInput>
    portfolio?: XOR<InvestmentPortfolioScalarRelationFilter, InvestmentPortfolioWhereInput>
  }

  export type InvestmentOrderByWithRelationInput = {
    id?: SortOrder
    amountInvested?: SortOrder
    performance?: SortOrder
    dateInvestment?: SortOrder
    portfolioId?: SortOrder
    instrumentId?: SortOrder
    instrument?: FinancialInstrumentOrderByWithRelationInput
    portfolio?: InvestmentPortfolioOrderByWithRelationInput
  }

  export type InvestmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvestmentWhereInput | InvestmentWhereInput[]
    OR?: InvestmentWhereInput[]
    NOT?: InvestmentWhereInput | InvestmentWhereInput[]
    amountInvested?: IntFilter<"Investment"> | number
    performance?: StringFilter<"Investment"> | string
    dateInvestment?: DateTimeFilter<"Investment"> | Date | string
    portfolioId?: StringFilter<"Investment"> | string
    instrumentId?: StringFilter<"Investment"> | string
    instrument?: XOR<FinancialInstrumentScalarRelationFilter, FinancialInstrumentWhereInput>
    portfolio?: XOR<InvestmentPortfolioScalarRelationFilter, InvestmentPortfolioWhereInput>
  }, "id">

  export type InvestmentOrderByWithAggregationInput = {
    id?: SortOrder
    amountInvested?: SortOrder
    performance?: SortOrder
    dateInvestment?: SortOrder
    portfolioId?: SortOrder
    instrumentId?: SortOrder
    _count?: InvestmentCountOrderByAggregateInput
    _avg?: InvestmentAvgOrderByAggregateInput
    _max?: InvestmentMaxOrderByAggregateInput
    _min?: InvestmentMinOrderByAggregateInput
    _sum?: InvestmentSumOrderByAggregateInput
  }

  export type InvestmentScalarWhereWithAggregatesInput = {
    AND?: InvestmentScalarWhereWithAggregatesInput | InvestmentScalarWhereWithAggregatesInput[]
    OR?: InvestmentScalarWhereWithAggregatesInput[]
    NOT?: InvestmentScalarWhereWithAggregatesInput | InvestmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Investment"> | string
    amountInvested?: IntWithAggregatesFilter<"Investment"> | number
    performance?: StringWithAggregatesFilter<"Investment"> | string
    dateInvestment?: DateTimeWithAggregatesFilter<"Investment"> | Date | string
    portfolioId?: StringWithAggregatesFilter<"Investment"> | string
    instrumentId?: StringWithAggregatesFilter<"Investment"> | string
  }

  export type NewsWhereInput = {
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    id?: StringFilter<"News"> | string
    title?: StringFilter<"News"> | string
    content?: StringFilter<"News"> | string
    source?: StringFilter<"News"> | string
    dateNews?: DateTimeFilter<"News"> | Date | string
    category?: StringFilter<"News"> | string
    createdAt?: DateTimeFilter<"News"> | Date | string
    comment?: CommentListRelationFilter
  }

  export type NewsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    source?: SortOrder
    dateNews?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    comment?: CommentOrderByRelationAggregateInput
  }

  export type NewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    title?: StringFilter<"News"> | string
    content?: StringFilter<"News"> | string
    source?: StringFilter<"News"> | string
    dateNews?: DateTimeFilter<"News"> | Date | string
    category?: StringFilter<"News"> | string
    createdAt?: DateTimeFilter<"News"> | Date | string
    comment?: CommentListRelationFilter
  }, "id">

  export type NewsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    source?: SortOrder
    dateNews?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    _count?: NewsCountOrderByAggregateInput
    _max?: NewsMaxOrderByAggregateInput
    _min?: NewsMinOrderByAggregateInput
  }

  export type NewsScalarWhereWithAggregatesInput = {
    AND?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    OR?: NewsScalarWhereWithAggregatesInput[]
    NOT?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"News"> | string
    title?: StringWithAggregatesFilter<"News"> | string
    content?: StringWithAggregatesFilter<"News"> | string
    source?: StringWithAggregatesFilter<"News"> | string
    dateNews?: DateTimeWithAggregatesFilter<"News"> | Date | string
    category?: StringWithAggregatesFilter<"News"> | string
    createdAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    dateComment?: DateTimeFilter<"Comment"> | Date | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    userId?: StringNullableFilter<"Comment"> | string | null
    newsId?: StringNullableFilter<"Comment"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    news?: XOR<NewsNullableScalarRelationFilter, NewsWhereInput> | null
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    dateComment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    newsId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    news?: NewsOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    content?: StringFilter<"Comment"> | string
    dateComment?: DateTimeFilter<"Comment"> | Date | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    userId?: StringNullableFilter<"Comment"> | string | null
    newsId?: StringNullableFilter<"Comment"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    news?: XOR<NewsNullableScalarRelationFilter, NewsWhereInput> | null
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    dateComment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    newsId?: SortOrderInput | SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    dateComment?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    newsId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
  }

  export type walletWhereInput = {
    AND?: walletWhereInput | walletWhereInput[]
    OR?: walletWhereInput[]
    NOT?: walletWhereInput | walletWhereInput[]
    id?: StringFilter<"wallet"> | string
    userId?: StringFilter<"wallet"> | string
    balancePesos?: IntFilter<"wallet"> | number
    balanceDollars?: IntFilter<"wallet"> | number
    createdAt?: DateTimeFilter<"wallet"> | Date | string
    updatedAt?: DateTimeFilter<"wallet"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: WalletTransactionListRelationFilter
  }

  export type walletOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    balancePesos?: SortOrder
    balanceDollars?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    transactions?: WalletTransactionOrderByRelationAggregateInput
  }

  export type walletWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: walletWhereInput | walletWhereInput[]
    OR?: walletWhereInput[]
    NOT?: walletWhereInput | walletWhereInput[]
    userId?: StringFilter<"wallet"> | string
    balancePesos?: IntFilter<"wallet"> | number
    balanceDollars?: IntFilter<"wallet"> | number
    createdAt?: DateTimeFilter<"wallet"> | Date | string
    updatedAt?: DateTimeFilter<"wallet"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    transactions?: WalletTransactionListRelationFilter
  }, "id">

  export type walletOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    balancePesos?: SortOrder
    balanceDollars?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: walletCountOrderByAggregateInput
    _avg?: walletAvgOrderByAggregateInput
    _max?: walletMaxOrderByAggregateInput
    _min?: walletMinOrderByAggregateInput
    _sum?: walletSumOrderByAggregateInput
  }

  export type walletScalarWhereWithAggregatesInput = {
    AND?: walletScalarWhereWithAggregatesInput | walletScalarWhereWithAggregatesInput[]
    OR?: walletScalarWhereWithAggregatesInput[]
    NOT?: walletScalarWhereWithAggregatesInput | walletScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"wallet"> | string
    userId?: StringWithAggregatesFilter<"wallet"> | string
    balancePesos?: IntWithAggregatesFilter<"wallet"> | number
    balanceDollars?: IntWithAggregatesFilter<"wallet"> | number
    createdAt?: DateTimeWithAggregatesFilter<"wallet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"wallet"> | Date | string
  }

  export type WalletTransactionWhereInput = {
    AND?: WalletTransactionWhereInput | WalletTransactionWhereInput[]
    OR?: WalletTransactionWhereInput[]
    NOT?: WalletTransactionWhereInput | WalletTransactionWhereInput[]
    id?: StringFilter<"WalletTransaction"> | string
    walletId?: StringFilter<"WalletTransaction"> | string
    type?: EnumTransactionTypeFilter<"WalletTransaction"> | $Enums.TransactionType
    amount?: FloatFilter<"WalletTransaction"> | number
    currency?: EnumCurrencyTypeFilter<"WalletTransaction"> | $Enums.CurrencyType
    description?: StringNullableFilter<"WalletTransaction"> | string | null
    createdAt?: DateTimeFilter<"WalletTransaction"> | Date | string
    wallet?: XOR<WalletScalarRelationFilter, walletWhereInput>
  }

  export type WalletTransactionOrderByWithRelationInput = {
    id?: SortOrder
    walletId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    wallet?: walletOrderByWithRelationInput
  }

  export type WalletTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WalletTransactionWhereInput | WalletTransactionWhereInput[]
    OR?: WalletTransactionWhereInput[]
    NOT?: WalletTransactionWhereInput | WalletTransactionWhereInput[]
    walletId?: StringFilter<"WalletTransaction"> | string
    type?: EnumTransactionTypeFilter<"WalletTransaction"> | $Enums.TransactionType
    amount?: FloatFilter<"WalletTransaction"> | number
    currency?: EnumCurrencyTypeFilter<"WalletTransaction"> | $Enums.CurrencyType
    description?: StringNullableFilter<"WalletTransaction"> | string | null
    createdAt?: DateTimeFilter<"WalletTransaction"> | Date | string
    wallet?: XOR<WalletScalarRelationFilter, walletWhereInput>
  }, "id">

  export type WalletTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    walletId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: WalletTransactionCountOrderByAggregateInput
    _avg?: WalletTransactionAvgOrderByAggregateInput
    _max?: WalletTransactionMaxOrderByAggregateInput
    _min?: WalletTransactionMinOrderByAggregateInput
    _sum?: WalletTransactionSumOrderByAggregateInput
  }

  export type WalletTransactionScalarWhereWithAggregatesInput = {
    AND?: WalletTransactionScalarWhereWithAggregatesInput | WalletTransactionScalarWhereWithAggregatesInput[]
    OR?: WalletTransactionScalarWhereWithAggregatesInput[]
    NOT?: WalletTransactionScalarWhereWithAggregatesInput | WalletTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WalletTransaction"> | string
    walletId?: StringWithAggregatesFilter<"WalletTransaction"> | string
    type?: EnumTransactionTypeWithAggregatesFilter<"WalletTransaction"> | $Enums.TransactionType
    amount?: FloatWithAggregatesFilter<"WalletTransaction"> | number
    currency?: EnumCurrencyTypeWithAggregatesFilter<"WalletTransaction"> | $Enums.CurrencyType
    description?: StringNullableWithAggregatesFilter<"WalletTransaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WalletTransaction"> | Date | string
  }

  export type AdministradorWhereInput = {
    AND?: AdministradorWhereInput | AdministradorWhereInput[]
    OR?: AdministradorWhereInput[]
    NOT?: AdministradorWhereInput | AdministradorWhereInput[]
    id?: StringFilter<"Administrador"> | string
    email?: StringFilter<"Administrador"> | string
    password?: StringFilter<"Administrador"> | string
    role?: EnumUserRoleFilter<"Administrador"> | $Enums.UserRole
    name?: StringFilter<"Administrador"> | string
  }

  export type AdministradorOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
  }

  export type AdministradorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdministradorWhereInput | AdministradorWhereInput[]
    OR?: AdministradorWhereInput[]
    NOT?: AdministradorWhereInput | AdministradorWhereInput[]
    password?: StringFilter<"Administrador"> | string
    role?: EnumUserRoleFilter<"Administrador"> | $Enums.UserRole
    name?: StringFilter<"Administrador"> | string
  }, "id" | "email">

  export type AdministradorOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
    _count?: AdministradorCountOrderByAggregateInput
    _max?: AdministradorMaxOrderByAggregateInput
    _min?: AdministradorMinOrderByAggregateInput
  }

  export type AdministradorScalarWhereWithAggregatesInput = {
    AND?: AdministradorScalarWhereWithAggregatesInput | AdministradorScalarWhereWithAggregatesInput[]
    OR?: AdministradorScalarWhereWithAggregatesInput[]
    NOT?: AdministradorScalarWhereWithAggregatesInput | AdministradorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Administrador"> | string
    email?: StringWithAggregatesFilter<"Administrador"> | string
    password?: StringWithAggregatesFilter<"Administrador"> | string
    role?: EnumUserRoleWithAggregatesFilter<"Administrador"> | $Enums.UserRole
    name?: StringWithAggregatesFilter<"Administrador"> | string
  }

  export type SupportWhereInput = {
    AND?: SupportWhereInput | SupportWhereInput[]
    OR?: SupportWhereInput[]
    NOT?: SupportWhereInput | SupportWhereInput[]
    id?: StringFilter<"Support"> | string
    userId?: StringFilter<"Support"> | string
    subject?: StringFilter<"Support"> | string
    message?: StringFilter<"Support"> | string
    status?: EnumStatusFilter<"Support"> | $Enums.Status
    createdAt?: DateTimeFilter<"Support"> | Date | string
    updatedAt?: DateTimeFilter<"Support"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SupportOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SupportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SupportWhereInput | SupportWhereInput[]
    OR?: SupportWhereInput[]
    NOT?: SupportWhereInput | SupportWhereInput[]
    userId?: StringFilter<"Support"> | string
    subject?: StringFilter<"Support"> | string
    message?: StringFilter<"Support"> | string
    status?: EnumStatusFilter<"Support"> | $Enums.Status
    createdAt?: DateTimeFilter<"Support"> | Date | string
    updatedAt?: DateTimeFilter<"Support"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SupportOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupportCountOrderByAggregateInput
    _max?: SupportMaxOrderByAggregateInput
    _min?: SupportMinOrderByAggregateInput
  }

  export type SupportScalarWhereWithAggregatesInput = {
    AND?: SupportScalarWhereWithAggregatesInput | SupportScalarWhereWithAggregatesInput[]
    OR?: SupportScalarWhereWithAggregatesInput[]
    NOT?: SupportScalarWhereWithAggregatesInput | SupportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Support"> | string
    userId?: StringWithAggregatesFilter<"Support"> | string
    subject?: StringWithAggregatesFilter<"Support"> | string
    message?: StringWithAggregatesFilter<"Support"> | string
    status?: EnumStatusWithAggregatesFilter<"Support"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Support"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Support"> | Date | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    userId?: StringFilter<"Profile"> | string
    mainGoal?: EnumMainGoalNullableFilter<"Profile"> | $Enums.MainGoal | null
    financialSkills?: EnumFinancialSkillsNullableFilter<"Profile"> | $Enums.FinancialSkills | null
    riskTolerance?: EnumRiskToleranceNullableFilter<"Profile"> | $Enums.RiskTolerance | null
    monthlyInvestment?: EnumMonthlyInvestmentNullableFilter<"Profile"> | $Enums.MonthlyInvestment | null
    savingsOrInvestmentReason?: EnumSavingsReasonNullableFilter<"Profile"> | $Enums.SavingsReason | null
    investmentTimeframe?: EnumInvestmentTimeframeNullableFilter<"Profile"> | $Enums.InvestmentTimeframe | null
    hasInvestedBefore?: BoolNullableFilter<"Profile"> | boolean | null
    financialGoalNextYear?: BoolNullableFilter<"Profile"> | boolean | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    mainGoal?: SortOrderInput | SortOrder
    financialSkills?: SortOrderInput | SortOrder
    riskTolerance?: SortOrderInput | SortOrder
    monthlyInvestment?: SortOrderInput | SortOrder
    savingsOrInvestmentReason?: SortOrderInput | SortOrder
    investmentTimeframe?: SortOrderInput | SortOrder
    hasInvestedBefore?: SortOrderInput | SortOrder
    financialGoalNextYear?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    mainGoal?: EnumMainGoalNullableFilter<"Profile"> | $Enums.MainGoal | null
    financialSkills?: EnumFinancialSkillsNullableFilter<"Profile"> | $Enums.FinancialSkills | null
    riskTolerance?: EnumRiskToleranceNullableFilter<"Profile"> | $Enums.RiskTolerance | null
    monthlyInvestment?: EnumMonthlyInvestmentNullableFilter<"Profile"> | $Enums.MonthlyInvestment | null
    savingsOrInvestmentReason?: EnumSavingsReasonNullableFilter<"Profile"> | $Enums.SavingsReason | null
    investmentTimeframe?: EnumInvestmentTimeframeNullableFilter<"Profile"> | $Enums.InvestmentTimeframe | null
    hasInvestedBefore?: BoolNullableFilter<"Profile"> | boolean | null
    financialGoalNextYear?: BoolNullableFilter<"Profile"> | boolean | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    mainGoal?: SortOrderInput | SortOrder
    financialSkills?: SortOrderInput | SortOrder
    riskTolerance?: SortOrderInput | SortOrder
    monthlyInvestment?: SortOrderInput | SortOrder
    savingsOrInvestmentReason?: SortOrderInput | SortOrder
    investmentTimeframe?: SortOrderInput | SortOrder
    hasInvestedBefore?: SortOrderInput | SortOrder
    financialGoalNextYear?: SortOrderInput | SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    userId?: StringWithAggregatesFilter<"Profile"> | string
    mainGoal?: EnumMainGoalNullableWithAggregatesFilter<"Profile"> | $Enums.MainGoal | null
    financialSkills?: EnumFinancialSkillsNullableWithAggregatesFilter<"Profile"> | $Enums.FinancialSkills | null
    riskTolerance?: EnumRiskToleranceNullableWithAggregatesFilter<"Profile"> | $Enums.RiskTolerance | null
    monthlyInvestment?: EnumMonthlyInvestmentNullableWithAggregatesFilter<"Profile"> | $Enums.MonthlyInvestment | null
    savingsOrInvestmentReason?: EnumSavingsReasonNullableWithAggregatesFilter<"Profile"> | $Enums.SavingsReason | null
    investmentTimeframe?: EnumInvestmentTimeframeNullableWithAggregatesFilter<"Profile"> | $Enums.InvestmentTimeframe | null
    hasInvestedBefore?: BoolNullableWithAggregatesFilter<"Profile"> | boolean | null
    financialGoalNextYear?: BoolNullableWithAggregatesFilter<"Profile"> | boolean | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    password: string
    avatarUrl?: string | null
    role?: $Enums.UserRole | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    wallet?: walletCreateNestedManyWithoutUserInput
    financialRadiographies?: FinancialRadiographyCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    Support?: SupportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    password: string
    avatarUrl?: string | null
    role?: $Enums.UserRole | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    wallet?: walletUncheckedCreateNestedManyWithoutUserInput
    financialRadiographies?: FinancialRadiographyUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    Support?: SupportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    wallet?: walletUpdateManyWithoutUserNestedInput
    financialRadiographies?: FinancialRadiographyUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    comment?: CommentUpdateManyWithoutUserNestedInput
    Support?: SupportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    wallet?: walletUncheckedUpdateManyWithoutUserNestedInput
    financialRadiographies?: FinancialRadiographyUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    Support?: SupportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    password: string
    avatarUrl?: string | null
    role?: $Enums.UserRole | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TargetCreateInput = {
    id?: string
    name: string
    description: string
    progress: string
    montoTarget: number
    dateTarget: Date | string
    userId: string
  }

  export type TargetUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    progress: string
    montoTarget: number
    dateTarget: Date | string
    userId: string
  }

  export type TargetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    progress?: StringFieldUpdateOperationsInput | string
    montoTarget?: IntFieldUpdateOperationsInput | number
    dateTarget?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TargetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    progress?: StringFieldUpdateOperationsInput | string
    montoTarget?: IntFieldUpdateOperationsInput | number
    dateTarget?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TargetCreateManyInput = {
    id?: string
    name: string
    description: string
    progress: string
    montoTarget: number
    dateTarget: Date | string
    userId: string
  }

  export type TargetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    progress?: StringFieldUpdateOperationsInput | string
    montoTarget?: IntFieldUpdateOperationsInput | number
    dateTarget?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TargetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    progress?: StringFieldUpdateOperationsInput | string
    montoTarget?: IntFieldUpdateOperationsInput | number
    dateTarget?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type FinancialRadiographyCreateInput = {
    id?: string
    monthlyIncome?: Decimal | DecimalJsLike | number | string | null
    monthlyExpenses?: Decimal | DecimalJsLike | number | string | null
    savingCapacity?: Decimal | DecimalJsLike | number | string | null
    debts?: Decimal | DecimalJsLike | number | string | null
    savings?: Decimal | DecimalJsLike | number | string | null
    user: UserCreateNestedOneWithoutFinancialRadiographiesInput
  }

  export type FinancialRadiographyUncheckedCreateInput = {
    id?: string
    monthlyIncome?: Decimal | DecimalJsLike | number | string | null
    monthlyExpenses?: Decimal | DecimalJsLike | number | string | null
    savingCapacity?: Decimal | DecimalJsLike | number | string | null
    debts?: Decimal | DecimalJsLike | number | string | null
    savings?: Decimal | DecimalJsLike | number | string | null
    userId: string
  }

  export type FinancialRadiographyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthlyIncome?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monthlyExpenses?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    savingCapacity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    debts?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    savings?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    user?: UserUpdateOneRequiredWithoutFinancialRadiographiesNestedInput
  }

  export type FinancialRadiographyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthlyIncome?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monthlyExpenses?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    savingCapacity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    debts?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    savings?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type FinancialRadiographyCreateManyInput = {
    id?: string
    monthlyIncome?: Decimal | DecimalJsLike | number | string | null
    monthlyExpenses?: Decimal | DecimalJsLike | number | string | null
    savingCapacity?: Decimal | DecimalJsLike | number | string | null
    debts?: Decimal | DecimalJsLike | number | string | null
    savings?: Decimal | DecimalJsLike | number | string | null
    userId: string
  }

  export type FinancialRadiographyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthlyIncome?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monthlyExpenses?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    savingCapacity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    debts?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    savings?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type FinancialRadiographyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthlyIncome?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monthlyExpenses?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    savingCapacity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    debts?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    savings?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type InvestmentPortfolioCreateInput = {
    id?: string
    profileRisk: number
    performanceCurrent: number
    coin: string
    userId: string
    investment?: InvestmentCreateNestedManyWithoutPortfolioInput
  }

  export type InvestmentPortfolioUncheckedCreateInput = {
    id?: string
    profileRisk: number
    performanceCurrent: number
    coin: string
    userId: string
    investment?: InvestmentUncheckedCreateNestedManyWithoutPortfolioInput
  }

  export type InvestmentPortfolioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileRisk?: IntFieldUpdateOperationsInput | number
    performanceCurrent?: FloatFieldUpdateOperationsInput | number
    coin?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    investment?: InvestmentUpdateManyWithoutPortfolioNestedInput
  }

  export type InvestmentPortfolioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileRisk?: IntFieldUpdateOperationsInput | number
    performanceCurrent?: FloatFieldUpdateOperationsInput | number
    coin?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    investment?: InvestmentUncheckedUpdateManyWithoutPortfolioNestedInput
  }

  export type InvestmentPortfolioCreateManyInput = {
    id?: string
    profileRisk: number
    performanceCurrent: number
    coin: string
    userId: string
  }

  export type InvestmentPortfolioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileRisk?: IntFieldUpdateOperationsInput | number
    performanceCurrent?: FloatFieldUpdateOperationsInput | number
    coin?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type InvestmentPortfolioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileRisk?: IntFieldUpdateOperationsInput | number
    performanceCurrent?: FloatFieldUpdateOperationsInput | number
    coin?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type FinancialInstrumentCreateInput = {
    id?: string
    name: string
    type: string
    category: string
    performance: number
    levelRisk: number
    deadline: number
    currency: $Enums.CurrencyType
    Investment?: InvestmentCreateNestedManyWithoutInstrumentInput
  }

  export type FinancialInstrumentUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    category: string
    performance: number
    levelRisk: number
    deadline: number
    currency: $Enums.CurrencyType
    Investment?: InvestmentUncheckedCreateNestedManyWithoutInstrumentInput
  }

  export type FinancialInstrumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    performance?: FloatFieldUpdateOperationsInput | number
    levelRisk?: IntFieldUpdateOperationsInput | number
    deadline?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
    Investment?: InvestmentUpdateManyWithoutInstrumentNestedInput
  }

  export type FinancialInstrumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    performance?: FloatFieldUpdateOperationsInput | number
    levelRisk?: IntFieldUpdateOperationsInput | number
    deadline?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
    Investment?: InvestmentUncheckedUpdateManyWithoutInstrumentNestedInput
  }

  export type FinancialInstrumentCreateManyInput = {
    id?: string
    name: string
    type: string
    category: string
    performance: number
    levelRisk: number
    deadline: number
    currency: $Enums.CurrencyType
  }

  export type FinancialInstrumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    performance?: FloatFieldUpdateOperationsInput | number
    levelRisk?: IntFieldUpdateOperationsInput | number
    deadline?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
  }

  export type FinancialInstrumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    performance?: FloatFieldUpdateOperationsInput | number
    levelRisk?: IntFieldUpdateOperationsInput | number
    deadline?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
  }

  export type InvestmentCreateInput = {
    id?: string
    amountInvested: number
    performance: string
    dateInvestment: Date | string
    instrument: FinancialInstrumentCreateNestedOneWithoutInvestmentInput
    portfolio: InvestmentPortfolioCreateNestedOneWithoutInvestmentInput
  }

  export type InvestmentUncheckedCreateInput = {
    id?: string
    amountInvested: number
    performance: string
    dateInvestment: Date | string
    portfolioId: string
    instrumentId: string
  }

  export type InvestmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountInvested?: IntFieldUpdateOperationsInput | number
    performance?: StringFieldUpdateOperationsInput | string
    dateInvestment?: DateTimeFieldUpdateOperationsInput | Date | string
    instrument?: FinancialInstrumentUpdateOneRequiredWithoutInvestmentNestedInput
    portfolio?: InvestmentPortfolioUpdateOneRequiredWithoutInvestmentNestedInput
  }

  export type InvestmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountInvested?: IntFieldUpdateOperationsInput | number
    performance?: StringFieldUpdateOperationsInput | string
    dateInvestment?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolioId?: StringFieldUpdateOperationsInput | string
    instrumentId?: StringFieldUpdateOperationsInput | string
  }

  export type InvestmentCreateManyInput = {
    id?: string
    amountInvested: number
    performance: string
    dateInvestment: Date | string
    portfolioId: string
    instrumentId: string
  }

  export type InvestmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountInvested?: IntFieldUpdateOperationsInput | number
    performance?: StringFieldUpdateOperationsInput | string
    dateInvestment?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountInvested?: IntFieldUpdateOperationsInput | number
    performance?: StringFieldUpdateOperationsInput | string
    dateInvestment?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolioId?: StringFieldUpdateOperationsInput | string
    instrumentId?: StringFieldUpdateOperationsInput | string
  }

  export type NewsCreateInput = {
    id?: string
    title: string
    content: string
    source: string
    dateNews: Date | string
    category: string
    createdAt?: Date | string
    comment?: CommentCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    source: string
    dateNews: Date | string
    category: string
    createdAt?: Date | string
    comment?: CommentUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    dateNews?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: CommentUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    dateNews?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comment?: CommentUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type NewsCreateManyInput = {
    id?: string
    title: string
    content: string
    source: string
    dateNews: Date | string
    category: string
    createdAt?: Date | string
  }

  export type NewsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    dateNews?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    dateNews?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    id?: string
    content: string
    dateComment: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutCommentInput
    news?: NewsCreateNestedOneWithoutCommentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    content: string
    dateComment: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    newsId?: string | null
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    dateComment?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutCommentNestedInput
    news?: NewsUpdateOneWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    dateComment?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    newsId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentCreateManyInput = {
    id?: string
    content: string
    dateComment: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    newsId?: string | null
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    dateComment?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    dateComment?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    newsId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type walletCreateInput = {
    id?: string
    balancePesos: number
    balanceDollars: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWalletInput
    transactions?: WalletTransactionCreateNestedManyWithoutWalletInput
  }

  export type walletUncheckedCreateInput = {
    id?: string
    userId: string
    balancePesos: number
    balanceDollars: number
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: WalletTransactionUncheckedCreateNestedManyWithoutWalletInput
  }

  export type walletUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balancePesos?: IntFieldUpdateOperationsInput | number
    balanceDollars?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWalletNestedInput
    transactions?: WalletTransactionUpdateManyWithoutWalletNestedInput
  }

  export type walletUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    balancePesos?: IntFieldUpdateOperationsInput | number
    balanceDollars?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: WalletTransactionUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type walletCreateManyInput = {
    id?: string
    userId: string
    balancePesos: number
    balanceDollars: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type walletUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    balancePesos?: IntFieldUpdateOperationsInput | number
    balanceDollars?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type walletUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    balancePesos?: IntFieldUpdateOperationsInput | number
    balanceDollars?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionCreateInput = {
    id?: string
    type: $Enums.TransactionType
    amount: number
    currency: $Enums.CurrencyType
    description?: string | null
    createdAt?: Date | string
    wallet: walletCreateNestedOneWithoutTransactionsInput
  }

  export type WalletTransactionUncheckedCreateInput = {
    id?: string
    walletId: string
    type: $Enums.TransactionType
    amount: number
    currency: $Enums.CurrencyType
    description?: string | null
    createdAt?: Date | string
  }

  export type WalletTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: walletUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type WalletTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionCreateManyInput = {
    id?: string
    walletId: string
    type: $Enums.TransactionType
    amount: number
    currency: $Enums.CurrencyType
    description?: string | null
    createdAt?: Date | string
  }

  export type WalletTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletId?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministradorCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    name: string
  }

  export type AdministradorUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    name: string
  }

  export type AdministradorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AdministradorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AdministradorCreateManyInput = {
    id?: string
    email: string
    password: string
    role?: $Enums.UserRole
    name: string
  }

  export type AdministradorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AdministradorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SupportCreateInput = {
    id?: string
    subject: string
    message: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSupportInput
  }

  export type SupportUncheckedCreateInput = {
    id?: string
    userId: string
    subject: string
    message: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSupportNestedInput
  }

  export type SupportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportCreateManyInput = {
    id?: string
    userId: string
    subject: string
    message: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateInput = {
    id?: string
    mainGoal?: $Enums.MainGoal | null
    financialSkills?: $Enums.FinancialSkills | null
    riskTolerance?: $Enums.RiskTolerance | null
    monthlyInvestment?: $Enums.MonthlyInvestment | null
    savingsOrInvestmentReason?: $Enums.SavingsReason | null
    investmentTimeframe?: $Enums.InvestmentTimeframe | null
    hasInvestedBefore?: boolean | null
    financialGoalNextYear?: boolean | null
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    userId: string
    mainGoal?: $Enums.MainGoal | null
    financialSkills?: $Enums.FinancialSkills | null
    riskTolerance?: $Enums.RiskTolerance | null
    monthlyInvestment?: $Enums.MonthlyInvestment | null
    savingsOrInvestmentReason?: $Enums.SavingsReason | null
    investmentTimeframe?: $Enums.InvestmentTimeframe | null
    hasInvestedBefore?: boolean | null
    financialGoalNextYear?: boolean | null
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mainGoal?: NullableEnumMainGoalFieldUpdateOperationsInput | $Enums.MainGoal | null
    financialSkills?: NullableEnumFinancialSkillsFieldUpdateOperationsInput | $Enums.FinancialSkills | null
    riskTolerance?: NullableEnumRiskToleranceFieldUpdateOperationsInput | $Enums.RiskTolerance | null
    monthlyInvestment?: NullableEnumMonthlyInvestmentFieldUpdateOperationsInput | $Enums.MonthlyInvestment | null
    savingsOrInvestmentReason?: NullableEnumSavingsReasonFieldUpdateOperationsInput | $Enums.SavingsReason | null
    investmentTimeframe?: NullableEnumInvestmentTimeframeFieldUpdateOperationsInput | $Enums.InvestmentTimeframe | null
    hasInvestedBefore?: NullableBoolFieldUpdateOperationsInput | boolean | null
    financialGoalNextYear?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    mainGoal?: NullableEnumMainGoalFieldUpdateOperationsInput | $Enums.MainGoal | null
    financialSkills?: NullableEnumFinancialSkillsFieldUpdateOperationsInput | $Enums.FinancialSkills | null
    riskTolerance?: NullableEnumRiskToleranceFieldUpdateOperationsInput | $Enums.RiskTolerance | null
    monthlyInvestment?: NullableEnumMonthlyInvestmentFieldUpdateOperationsInput | $Enums.MonthlyInvestment | null
    savingsOrInvestmentReason?: NullableEnumSavingsReasonFieldUpdateOperationsInput | $Enums.SavingsReason | null
    investmentTimeframe?: NullableEnumInvestmentTimeframeFieldUpdateOperationsInput | $Enums.InvestmentTimeframe | null
    hasInvestedBefore?: NullableBoolFieldUpdateOperationsInput | boolean | null
    financialGoalNextYear?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProfileCreateManyInput = {
    id?: string
    userId: string
    mainGoal?: $Enums.MainGoal | null
    financialSkills?: $Enums.FinancialSkills | null
    riskTolerance?: $Enums.RiskTolerance | null
    monthlyInvestment?: $Enums.MonthlyInvestment | null
    savingsOrInvestmentReason?: $Enums.SavingsReason | null
    investmentTimeframe?: $Enums.InvestmentTimeframe | null
    hasInvestedBefore?: boolean | null
    financialGoalNextYear?: boolean | null
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mainGoal?: NullableEnumMainGoalFieldUpdateOperationsInput | $Enums.MainGoal | null
    financialSkills?: NullableEnumFinancialSkillsFieldUpdateOperationsInput | $Enums.FinancialSkills | null
    riskTolerance?: NullableEnumRiskToleranceFieldUpdateOperationsInput | $Enums.RiskTolerance | null
    monthlyInvestment?: NullableEnumMonthlyInvestmentFieldUpdateOperationsInput | $Enums.MonthlyInvestment | null
    savingsOrInvestmentReason?: NullableEnumSavingsReasonFieldUpdateOperationsInput | $Enums.SavingsReason | null
    investmentTimeframe?: NullableEnumInvestmentTimeframeFieldUpdateOperationsInput | $Enums.InvestmentTimeframe | null
    hasInvestedBefore?: NullableBoolFieldUpdateOperationsInput | boolean | null
    financialGoalNextYear?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    mainGoal?: NullableEnumMainGoalFieldUpdateOperationsInput | $Enums.MainGoal | null
    financialSkills?: NullableEnumFinancialSkillsFieldUpdateOperationsInput | $Enums.FinancialSkills | null
    riskTolerance?: NullableEnumRiskToleranceFieldUpdateOperationsInput | $Enums.RiskTolerance | null
    monthlyInvestment?: NullableEnumMonthlyInvestmentFieldUpdateOperationsInput | $Enums.MonthlyInvestment | null
    savingsOrInvestmentReason?: NullableEnumSavingsReasonFieldUpdateOperationsInput | $Enums.SavingsReason | null
    investmentTimeframe?: NullableEnumInvestmentTimeframeFieldUpdateOperationsInput | $Enums.InvestmentTimeframe | null
    hasInvestedBefore?: NullableBoolFieldUpdateOperationsInput | boolean | null
    financialGoalNextYear?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserRoleNullableFilter<$PrismaModel> | $Enums.UserRole | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type WalletListRelationFilter = {
    every?: walletWhereInput
    some?: walletWhereInput
    none?: walletWhereInput
  }

  export type FinancialRadiographyListRelationFilter = {
    every?: FinancialRadiographyWhereInput
    some?: FinancialRadiographyWhereInput
    none?: FinancialRadiographyWhereInput
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type SupportListRelationFilter = {
    every?: SupportWhereInput
    some?: SupportWhereInput
    none?: SupportWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type walletOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FinancialRadiographyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isEmailVerified?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isEmailVerified?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isEmailVerified?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.UserRole | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUserRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumUserRoleNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type TargetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    progress?: SortOrder
    montoTarget?: SortOrder
    dateTarget?: SortOrder
    userId?: SortOrder
  }

  export type TargetAvgOrderByAggregateInput = {
    montoTarget?: SortOrder
  }

  export type TargetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    progress?: SortOrder
    montoTarget?: SortOrder
    dateTarget?: SortOrder
    userId?: SortOrder
  }

  export type TargetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    progress?: SortOrder
    montoTarget?: SortOrder
    dateTarget?: SortOrder
    userId?: SortOrder
  }

  export type TargetSumOrderByAggregateInput = {
    montoTarget?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FinancialRadiographyCountOrderByAggregateInput = {
    id?: SortOrder
    monthlyIncome?: SortOrder
    monthlyExpenses?: SortOrder
    savingCapacity?: SortOrder
    debts?: SortOrder
    savings?: SortOrder
    userId?: SortOrder
  }

  export type FinancialRadiographyAvgOrderByAggregateInput = {
    monthlyIncome?: SortOrder
    monthlyExpenses?: SortOrder
    savingCapacity?: SortOrder
    debts?: SortOrder
    savings?: SortOrder
  }

  export type FinancialRadiographyMaxOrderByAggregateInput = {
    id?: SortOrder
    monthlyIncome?: SortOrder
    monthlyExpenses?: SortOrder
    savingCapacity?: SortOrder
    debts?: SortOrder
    savings?: SortOrder
    userId?: SortOrder
  }

  export type FinancialRadiographyMinOrderByAggregateInput = {
    id?: SortOrder
    monthlyIncome?: SortOrder
    monthlyExpenses?: SortOrder
    savingCapacity?: SortOrder
    debts?: SortOrder
    savings?: SortOrder
    userId?: SortOrder
  }

  export type FinancialRadiographySumOrderByAggregateInput = {
    monthlyIncome?: SortOrder
    monthlyExpenses?: SortOrder
    savingCapacity?: SortOrder
    debts?: SortOrder
    savings?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type InvestmentListRelationFilter = {
    every?: InvestmentWhereInput
    some?: InvestmentWhereInput
    none?: InvestmentWhereInput
  }

  export type InvestmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvestmentPortfolioCountOrderByAggregateInput = {
    id?: SortOrder
    profileRisk?: SortOrder
    performanceCurrent?: SortOrder
    coin?: SortOrder
    userId?: SortOrder
  }

  export type InvestmentPortfolioAvgOrderByAggregateInput = {
    profileRisk?: SortOrder
    performanceCurrent?: SortOrder
  }

  export type InvestmentPortfolioMaxOrderByAggregateInput = {
    id?: SortOrder
    profileRisk?: SortOrder
    performanceCurrent?: SortOrder
    coin?: SortOrder
    userId?: SortOrder
  }

  export type InvestmentPortfolioMinOrderByAggregateInput = {
    id?: SortOrder
    profileRisk?: SortOrder
    performanceCurrent?: SortOrder
    coin?: SortOrder
    userId?: SortOrder
  }

  export type InvestmentPortfolioSumOrderByAggregateInput = {
    profileRisk?: SortOrder
    performanceCurrent?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumCurrencyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyType | EnumCurrencyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyType[] | ListEnumCurrencyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyType[] | ListEnumCurrencyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyTypeFilter<$PrismaModel> | $Enums.CurrencyType
  }

  export type FinancialInstrumentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    category?: SortOrder
    performance?: SortOrder
    levelRisk?: SortOrder
    deadline?: SortOrder
    currency?: SortOrder
  }

  export type FinancialInstrumentAvgOrderByAggregateInput = {
    performance?: SortOrder
    levelRisk?: SortOrder
    deadline?: SortOrder
  }

  export type FinancialInstrumentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    category?: SortOrder
    performance?: SortOrder
    levelRisk?: SortOrder
    deadline?: SortOrder
    currency?: SortOrder
  }

  export type FinancialInstrumentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    category?: SortOrder
    performance?: SortOrder
    levelRisk?: SortOrder
    deadline?: SortOrder
    currency?: SortOrder
  }

  export type FinancialInstrumentSumOrderByAggregateInput = {
    performance?: SortOrder
    levelRisk?: SortOrder
    deadline?: SortOrder
  }

  export type EnumCurrencyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyType | EnumCurrencyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyType[] | ListEnumCurrencyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyType[] | ListEnumCurrencyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyTypeWithAggregatesFilter<$PrismaModel> | $Enums.CurrencyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyTypeFilter<$PrismaModel>
    _max?: NestedEnumCurrencyTypeFilter<$PrismaModel>
  }

  export type FinancialInstrumentScalarRelationFilter = {
    is?: FinancialInstrumentWhereInput
    isNot?: FinancialInstrumentWhereInput
  }

  export type InvestmentPortfolioScalarRelationFilter = {
    is?: InvestmentPortfolioWhereInput
    isNot?: InvestmentPortfolioWhereInput
  }

  export type InvestmentCountOrderByAggregateInput = {
    id?: SortOrder
    amountInvested?: SortOrder
    performance?: SortOrder
    dateInvestment?: SortOrder
    portfolioId?: SortOrder
    instrumentId?: SortOrder
  }

  export type InvestmentAvgOrderByAggregateInput = {
    amountInvested?: SortOrder
  }

  export type InvestmentMaxOrderByAggregateInput = {
    id?: SortOrder
    amountInvested?: SortOrder
    performance?: SortOrder
    dateInvestment?: SortOrder
    portfolioId?: SortOrder
    instrumentId?: SortOrder
  }

  export type InvestmentMinOrderByAggregateInput = {
    id?: SortOrder
    amountInvested?: SortOrder
    performance?: SortOrder
    dateInvestment?: SortOrder
    portfolioId?: SortOrder
    instrumentId?: SortOrder
  }

  export type InvestmentSumOrderByAggregateInput = {
    amountInvested?: SortOrder
  }

  export type NewsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    source?: SortOrder
    dateNews?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    source?: SortOrder
    dateNews?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type NewsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    source?: SortOrder
    dateNews?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type NewsNullableScalarRelationFilter = {
    is?: NewsWhereInput | null
    isNot?: NewsWhereInput | null
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    dateComment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    newsId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    dateComment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    newsId?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    dateComment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    newsId?: SortOrder
  }

  export type WalletTransactionListRelationFilter = {
    every?: WalletTransactionWhereInput
    some?: WalletTransactionWhereInput
    none?: WalletTransactionWhereInput
  }

  export type WalletTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type walletCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balancePesos?: SortOrder
    balanceDollars?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type walletAvgOrderByAggregateInput = {
    balancePesos?: SortOrder
    balanceDollars?: SortOrder
  }

  export type walletMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balancePesos?: SortOrder
    balanceDollars?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type walletMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    balancePesos?: SortOrder
    balanceDollars?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type walletSumOrderByAggregateInput = {
    balancePesos?: SortOrder
    balanceDollars?: SortOrder
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type WalletScalarRelationFilter = {
    is?: walletWhereInput
    isNot?: walletWhereInput
  }

  export type WalletTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type WalletTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type WalletTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type WalletTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    walletId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type WalletTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type AdministradorCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
  }

  export type AdministradorMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
  }

  export type AdministradorMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    name?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type SupportCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupportMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupportMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type EnumMainGoalNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MainGoal | EnumMainGoalFieldRefInput<$PrismaModel> | null
    in?: $Enums.MainGoal[] | ListEnumMainGoalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MainGoal[] | ListEnumMainGoalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMainGoalNullableFilter<$PrismaModel> | $Enums.MainGoal | null
  }

  export type EnumFinancialSkillsNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.FinancialSkills | EnumFinancialSkillsFieldRefInput<$PrismaModel> | null
    in?: $Enums.FinancialSkills[] | ListEnumFinancialSkillsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FinancialSkills[] | ListEnumFinancialSkillsFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFinancialSkillsNullableFilter<$PrismaModel> | $Enums.FinancialSkills | null
  }

  export type EnumRiskToleranceNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskTolerance | EnumRiskToleranceFieldRefInput<$PrismaModel> | null
    in?: $Enums.RiskTolerance[] | ListEnumRiskToleranceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RiskTolerance[] | ListEnumRiskToleranceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRiskToleranceNullableFilter<$PrismaModel> | $Enums.RiskTolerance | null
  }

  export type EnumMonthlyInvestmentNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MonthlyInvestment | EnumMonthlyInvestmentFieldRefInput<$PrismaModel> | null
    in?: $Enums.MonthlyInvestment[] | ListEnumMonthlyInvestmentFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MonthlyInvestment[] | ListEnumMonthlyInvestmentFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMonthlyInvestmentNullableFilter<$PrismaModel> | $Enums.MonthlyInvestment | null
  }

  export type EnumSavingsReasonNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SavingsReason | EnumSavingsReasonFieldRefInput<$PrismaModel> | null
    in?: $Enums.SavingsReason[] | ListEnumSavingsReasonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SavingsReason[] | ListEnumSavingsReasonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSavingsReasonNullableFilter<$PrismaModel> | $Enums.SavingsReason | null
  }

  export type EnumInvestmentTimeframeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.InvestmentTimeframe | EnumInvestmentTimeframeFieldRefInput<$PrismaModel> | null
    in?: $Enums.InvestmentTimeframe[] | ListEnumInvestmentTimeframeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.InvestmentTimeframe[] | ListEnumInvestmentTimeframeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumInvestmentTimeframeNullableFilter<$PrismaModel> | $Enums.InvestmentTimeframe | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mainGoal?: SortOrder
    financialSkills?: SortOrder
    riskTolerance?: SortOrder
    monthlyInvestment?: SortOrder
    savingsOrInvestmentReason?: SortOrder
    investmentTimeframe?: SortOrder
    hasInvestedBefore?: SortOrder
    financialGoalNextYear?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mainGoal?: SortOrder
    financialSkills?: SortOrder
    riskTolerance?: SortOrder
    monthlyInvestment?: SortOrder
    savingsOrInvestmentReason?: SortOrder
    investmentTimeframe?: SortOrder
    hasInvestedBefore?: SortOrder
    financialGoalNextYear?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mainGoal?: SortOrder
    financialSkills?: SortOrder
    riskTolerance?: SortOrder
    monthlyInvestment?: SortOrder
    savingsOrInvestmentReason?: SortOrder
    investmentTimeframe?: SortOrder
    hasInvestedBefore?: SortOrder
    financialGoalNextYear?: SortOrder
  }

  export type EnumMainGoalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MainGoal | EnumMainGoalFieldRefInput<$PrismaModel> | null
    in?: $Enums.MainGoal[] | ListEnumMainGoalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MainGoal[] | ListEnumMainGoalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMainGoalNullableWithAggregatesFilter<$PrismaModel> | $Enums.MainGoal | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMainGoalNullableFilter<$PrismaModel>
    _max?: NestedEnumMainGoalNullableFilter<$PrismaModel>
  }

  export type EnumFinancialSkillsNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FinancialSkills | EnumFinancialSkillsFieldRefInput<$PrismaModel> | null
    in?: $Enums.FinancialSkills[] | ListEnumFinancialSkillsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FinancialSkills[] | ListEnumFinancialSkillsFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFinancialSkillsNullableWithAggregatesFilter<$PrismaModel> | $Enums.FinancialSkills | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumFinancialSkillsNullableFilter<$PrismaModel>
    _max?: NestedEnumFinancialSkillsNullableFilter<$PrismaModel>
  }

  export type EnumRiskToleranceNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskTolerance | EnumRiskToleranceFieldRefInput<$PrismaModel> | null
    in?: $Enums.RiskTolerance[] | ListEnumRiskToleranceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RiskTolerance[] | ListEnumRiskToleranceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRiskToleranceNullableWithAggregatesFilter<$PrismaModel> | $Enums.RiskTolerance | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRiskToleranceNullableFilter<$PrismaModel>
    _max?: NestedEnumRiskToleranceNullableFilter<$PrismaModel>
  }

  export type EnumMonthlyInvestmentNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MonthlyInvestment | EnumMonthlyInvestmentFieldRefInput<$PrismaModel> | null
    in?: $Enums.MonthlyInvestment[] | ListEnumMonthlyInvestmentFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MonthlyInvestment[] | ListEnumMonthlyInvestmentFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMonthlyInvestmentNullableWithAggregatesFilter<$PrismaModel> | $Enums.MonthlyInvestment | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMonthlyInvestmentNullableFilter<$PrismaModel>
    _max?: NestedEnumMonthlyInvestmentNullableFilter<$PrismaModel>
  }

  export type EnumSavingsReasonNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SavingsReason | EnumSavingsReasonFieldRefInput<$PrismaModel> | null
    in?: $Enums.SavingsReason[] | ListEnumSavingsReasonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SavingsReason[] | ListEnumSavingsReasonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSavingsReasonNullableWithAggregatesFilter<$PrismaModel> | $Enums.SavingsReason | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSavingsReasonNullableFilter<$PrismaModel>
    _max?: NestedEnumSavingsReasonNullableFilter<$PrismaModel>
  }

  export type EnumInvestmentTimeframeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvestmentTimeframe | EnumInvestmentTimeframeFieldRefInput<$PrismaModel> | null
    in?: $Enums.InvestmentTimeframe[] | ListEnumInvestmentTimeframeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.InvestmentTimeframe[] | ListEnumInvestmentTimeframeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumInvestmentTimeframeNullableWithAggregatesFilter<$PrismaModel> | $Enums.InvestmentTimeframe | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumInvestmentTimeframeNullableFilter<$PrismaModel>
    _max?: NestedEnumInvestmentTimeframeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type walletCreateNestedManyWithoutUserInput = {
    create?: XOR<walletCreateWithoutUserInput, walletUncheckedCreateWithoutUserInput> | walletCreateWithoutUserInput[] | walletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: walletCreateOrConnectWithoutUserInput | walletCreateOrConnectWithoutUserInput[]
    createMany?: walletCreateManyUserInputEnvelope
    connect?: walletWhereUniqueInput | walletWhereUniqueInput[]
  }

  export type FinancialRadiographyCreateNestedManyWithoutUserInput = {
    create?: XOR<FinancialRadiographyCreateWithoutUserInput, FinancialRadiographyUncheckedCreateWithoutUserInput> | FinancialRadiographyCreateWithoutUserInput[] | FinancialRadiographyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinancialRadiographyCreateOrConnectWithoutUserInput | FinancialRadiographyCreateOrConnectWithoutUserInput[]
    createMany?: FinancialRadiographyCreateManyUserInputEnvelope
    connect?: FinancialRadiographyWhereUniqueInput | FinancialRadiographyWhereUniqueInput[]
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type SupportCreateNestedManyWithoutUserInput = {
    create?: XOR<SupportCreateWithoutUserInput, SupportUncheckedCreateWithoutUserInput> | SupportCreateWithoutUserInput[] | SupportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SupportCreateOrConnectWithoutUserInput | SupportCreateOrConnectWithoutUserInput[]
    createMany?: SupportCreateManyUserInputEnvelope
    connect?: SupportWhereUniqueInput | SupportWhereUniqueInput[]
  }

  export type walletUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<walletCreateWithoutUserInput, walletUncheckedCreateWithoutUserInput> | walletCreateWithoutUserInput[] | walletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: walletCreateOrConnectWithoutUserInput | walletCreateOrConnectWithoutUserInput[]
    createMany?: walletCreateManyUserInputEnvelope
    connect?: walletWhereUniqueInput | walletWhereUniqueInput[]
  }

  export type FinancialRadiographyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FinancialRadiographyCreateWithoutUserInput, FinancialRadiographyUncheckedCreateWithoutUserInput> | FinancialRadiographyCreateWithoutUserInput[] | FinancialRadiographyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinancialRadiographyCreateOrConnectWithoutUserInput | FinancialRadiographyCreateOrConnectWithoutUserInput[]
    createMany?: FinancialRadiographyCreateManyUserInputEnvelope
    connect?: FinancialRadiographyWhereUniqueInput | FinancialRadiographyWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type SupportUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SupportCreateWithoutUserInput, SupportUncheckedCreateWithoutUserInput> | SupportCreateWithoutUserInput[] | SupportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SupportCreateOrConnectWithoutUserInput | SupportCreateOrConnectWithoutUserInput[]
    createMany?: SupportCreateManyUserInputEnvelope
    connect?: SupportWhereUniqueInput | SupportWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type walletUpdateManyWithoutUserNestedInput = {
    create?: XOR<walletCreateWithoutUserInput, walletUncheckedCreateWithoutUserInput> | walletCreateWithoutUserInput[] | walletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: walletCreateOrConnectWithoutUserInput | walletCreateOrConnectWithoutUserInput[]
    upsert?: walletUpsertWithWhereUniqueWithoutUserInput | walletUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: walletCreateManyUserInputEnvelope
    set?: walletWhereUniqueInput | walletWhereUniqueInput[]
    disconnect?: walletWhereUniqueInput | walletWhereUniqueInput[]
    delete?: walletWhereUniqueInput | walletWhereUniqueInput[]
    connect?: walletWhereUniqueInput | walletWhereUniqueInput[]
    update?: walletUpdateWithWhereUniqueWithoutUserInput | walletUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: walletUpdateManyWithWhereWithoutUserInput | walletUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: walletScalarWhereInput | walletScalarWhereInput[]
  }

  export type FinancialRadiographyUpdateManyWithoutUserNestedInput = {
    create?: XOR<FinancialRadiographyCreateWithoutUserInput, FinancialRadiographyUncheckedCreateWithoutUserInput> | FinancialRadiographyCreateWithoutUserInput[] | FinancialRadiographyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinancialRadiographyCreateOrConnectWithoutUserInput | FinancialRadiographyCreateOrConnectWithoutUserInput[]
    upsert?: FinancialRadiographyUpsertWithWhereUniqueWithoutUserInput | FinancialRadiographyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FinancialRadiographyCreateManyUserInputEnvelope
    set?: FinancialRadiographyWhereUniqueInput | FinancialRadiographyWhereUniqueInput[]
    disconnect?: FinancialRadiographyWhereUniqueInput | FinancialRadiographyWhereUniqueInput[]
    delete?: FinancialRadiographyWhereUniqueInput | FinancialRadiographyWhereUniqueInput[]
    connect?: FinancialRadiographyWhereUniqueInput | FinancialRadiographyWhereUniqueInput[]
    update?: FinancialRadiographyUpdateWithWhereUniqueWithoutUserInput | FinancialRadiographyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FinancialRadiographyUpdateManyWithWhereWithoutUserInput | FinancialRadiographyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FinancialRadiographyScalarWhereInput | FinancialRadiographyScalarWhereInput[]
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type SupportUpdateManyWithoutUserNestedInput = {
    create?: XOR<SupportCreateWithoutUserInput, SupportUncheckedCreateWithoutUserInput> | SupportCreateWithoutUserInput[] | SupportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SupportCreateOrConnectWithoutUserInput | SupportCreateOrConnectWithoutUserInput[]
    upsert?: SupportUpsertWithWhereUniqueWithoutUserInput | SupportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SupportCreateManyUserInputEnvelope
    set?: SupportWhereUniqueInput | SupportWhereUniqueInput[]
    disconnect?: SupportWhereUniqueInput | SupportWhereUniqueInput[]
    delete?: SupportWhereUniqueInput | SupportWhereUniqueInput[]
    connect?: SupportWhereUniqueInput | SupportWhereUniqueInput[]
    update?: SupportUpdateWithWhereUniqueWithoutUserInput | SupportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SupportUpdateManyWithWhereWithoutUserInput | SupportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SupportScalarWhereInput | SupportScalarWhereInput[]
  }

  export type walletUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<walletCreateWithoutUserInput, walletUncheckedCreateWithoutUserInput> | walletCreateWithoutUserInput[] | walletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: walletCreateOrConnectWithoutUserInput | walletCreateOrConnectWithoutUserInput[]
    upsert?: walletUpsertWithWhereUniqueWithoutUserInput | walletUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: walletCreateManyUserInputEnvelope
    set?: walletWhereUniqueInput | walletWhereUniqueInput[]
    disconnect?: walletWhereUniqueInput | walletWhereUniqueInput[]
    delete?: walletWhereUniqueInput | walletWhereUniqueInput[]
    connect?: walletWhereUniqueInput | walletWhereUniqueInput[]
    update?: walletUpdateWithWhereUniqueWithoutUserInput | walletUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: walletUpdateManyWithWhereWithoutUserInput | walletUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: walletScalarWhereInput | walletScalarWhereInput[]
  }

  export type FinancialRadiographyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FinancialRadiographyCreateWithoutUserInput, FinancialRadiographyUncheckedCreateWithoutUserInput> | FinancialRadiographyCreateWithoutUserInput[] | FinancialRadiographyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinancialRadiographyCreateOrConnectWithoutUserInput | FinancialRadiographyCreateOrConnectWithoutUserInput[]
    upsert?: FinancialRadiographyUpsertWithWhereUniqueWithoutUserInput | FinancialRadiographyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FinancialRadiographyCreateManyUserInputEnvelope
    set?: FinancialRadiographyWhereUniqueInput | FinancialRadiographyWhereUniqueInput[]
    disconnect?: FinancialRadiographyWhereUniqueInput | FinancialRadiographyWhereUniqueInput[]
    delete?: FinancialRadiographyWhereUniqueInput | FinancialRadiographyWhereUniqueInput[]
    connect?: FinancialRadiographyWhereUniqueInput | FinancialRadiographyWhereUniqueInput[]
    update?: FinancialRadiographyUpdateWithWhereUniqueWithoutUserInput | FinancialRadiographyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FinancialRadiographyUpdateManyWithWhereWithoutUserInput | FinancialRadiographyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FinancialRadiographyScalarWhereInput | FinancialRadiographyScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type SupportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SupportCreateWithoutUserInput, SupportUncheckedCreateWithoutUserInput> | SupportCreateWithoutUserInput[] | SupportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SupportCreateOrConnectWithoutUserInput | SupportCreateOrConnectWithoutUserInput[]
    upsert?: SupportUpsertWithWhereUniqueWithoutUserInput | SupportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SupportCreateManyUserInputEnvelope
    set?: SupportWhereUniqueInput | SupportWhereUniqueInput[]
    disconnect?: SupportWhereUniqueInput | SupportWhereUniqueInput[]
    delete?: SupportWhereUniqueInput | SupportWhereUniqueInput[]
    connect?: SupportWhereUniqueInput | SupportWhereUniqueInput[]
    update?: SupportUpdateWithWhereUniqueWithoutUserInput | SupportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SupportUpdateManyWithWhereWithoutUserInput | SupportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SupportScalarWhereInput | SupportScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutFinancialRadiographiesInput = {
    create?: XOR<UserCreateWithoutFinancialRadiographiesInput, UserUncheckedCreateWithoutFinancialRadiographiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFinancialRadiographiesInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutFinancialRadiographiesNestedInput = {
    create?: XOR<UserCreateWithoutFinancialRadiographiesInput, UserUncheckedCreateWithoutFinancialRadiographiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFinancialRadiographiesInput
    upsert?: UserUpsertWithoutFinancialRadiographiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFinancialRadiographiesInput, UserUpdateWithoutFinancialRadiographiesInput>, UserUncheckedUpdateWithoutFinancialRadiographiesInput>
  }

  export type InvestmentCreateNestedManyWithoutPortfolioInput = {
    create?: XOR<InvestmentCreateWithoutPortfolioInput, InvestmentUncheckedCreateWithoutPortfolioInput> | InvestmentCreateWithoutPortfolioInput[] | InvestmentUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutPortfolioInput | InvestmentCreateOrConnectWithoutPortfolioInput[]
    createMany?: InvestmentCreateManyPortfolioInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type InvestmentUncheckedCreateNestedManyWithoutPortfolioInput = {
    create?: XOR<InvestmentCreateWithoutPortfolioInput, InvestmentUncheckedCreateWithoutPortfolioInput> | InvestmentCreateWithoutPortfolioInput[] | InvestmentUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutPortfolioInput | InvestmentCreateOrConnectWithoutPortfolioInput[]
    createMany?: InvestmentCreateManyPortfolioInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InvestmentUpdateManyWithoutPortfolioNestedInput = {
    create?: XOR<InvestmentCreateWithoutPortfolioInput, InvestmentUncheckedCreateWithoutPortfolioInput> | InvestmentCreateWithoutPortfolioInput[] | InvestmentUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutPortfolioInput | InvestmentCreateOrConnectWithoutPortfolioInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutPortfolioInput | InvestmentUpsertWithWhereUniqueWithoutPortfolioInput[]
    createMany?: InvestmentCreateManyPortfolioInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutPortfolioInput | InvestmentUpdateWithWhereUniqueWithoutPortfolioInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutPortfolioInput | InvestmentUpdateManyWithWhereWithoutPortfolioInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type InvestmentUncheckedUpdateManyWithoutPortfolioNestedInput = {
    create?: XOR<InvestmentCreateWithoutPortfolioInput, InvestmentUncheckedCreateWithoutPortfolioInput> | InvestmentCreateWithoutPortfolioInput[] | InvestmentUncheckedCreateWithoutPortfolioInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutPortfolioInput | InvestmentCreateOrConnectWithoutPortfolioInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutPortfolioInput | InvestmentUpsertWithWhereUniqueWithoutPortfolioInput[]
    createMany?: InvestmentCreateManyPortfolioInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutPortfolioInput | InvestmentUpdateWithWhereUniqueWithoutPortfolioInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutPortfolioInput | InvestmentUpdateManyWithWhereWithoutPortfolioInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type InvestmentCreateNestedManyWithoutInstrumentInput = {
    create?: XOR<InvestmentCreateWithoutInstrumentInput, InvestmentUncheckedCreateWithoutInstrumentInput> | InvestmentCreateWithoutInstrumentInput[] | InvestmentUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutInstrumentInput | InvestmentCreateOrConnectWithoutInstrumentInput[]
    createMany?: InvestmentCreateManyInstrumentInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type InvestmentUncheckedCreateNestedManyWithoutInstrumentInput = {
    create?: XOR<InvestmentCreateWithoutInstrumentInput, InvestmentUncheckedCreateWithoutInstrumentInput> | InvestmentCreateWithoutInstrumentInput[] | InvestmentUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutInstrumentInput | InvestmentCreateOrConnectWithoutInstrumentInput[]
    createMany?: InvestmentCreateManyInstrumentInputEnvelope
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
  }

  export type EnumCurrencyTypeFieldUpdateOperationsInput = {
    set?: $Enums.CurrencyType
  }

  export type InvestmentUpdateManyWithoutInstrumentNestedInput = {
    create?: XOR<InvestmentCreateWithoutInstrumentInput, InvestmentUncheckedCreateWithoutInstrumentInput> | InvestmentCreateWithoutInstrumentInput[] | InvestmentUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutInstrumentInput | InvestmentCreateOrConnectWithoutInstrumentInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutInstrumentInput | InvestmentUpsertWithWhereUniqueWithoutInstrumentInput[]
    createMany?: InvestmentCreateManyInstrumentInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutInstrumentInput | InvestmentUpdateWithWhereUniqueWithoutInstrumentInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutInstrumentInput | InvestmentUpdateManyWithWhereWithoutInstrumentInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type InvestmentUncheckedUpdateManyWithoutInstrumentNestedInput = {
    create?: XOR<InvestmentCreateWithoutInstrumentInput, InvestmentUncheckedCreateWithoutInstrumentInput> | InvestmentCreateWithoutInstrumentInput[] | InvestmentUncheckedCreateWithoutInstrumentInput[]
    connectOrCreate?: InvestmentCreateOrConnectWithoutInstrumentInput | InvestmentCreateOrConnectWithoutInstrumentInput[]
    upsert?: InvestmentUpsertWithWhereUniqueWithoutInstrumentInput | InvestmentUpsertWithWhereUniqueWithoutInstrumentInput[]
    createMany?: InvestmentCreateManyInstrumentInputEnvelope
    set?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    disconnect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    delete?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    connect?: InvestmentWhereUniqueInput | InvestmentWhereUniqueInput[]
    update?: InvestmentUpdateWithWhereUniqueWithoutInstrumentInput | InvestmentUpdateWithWhereUniqueWithoutInstrumentInput[]
    updateMany?: InvestmentUpdateManyWithWhereWithoutInstrumentInput | InvestmentUpdateManyWithWhereWithoutInstrumentInput[]
    deleteMany?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
  }

  export type FinancialInstrumentCreateNestedOneWithoutInvestmentInput = {
    create?: XOR<FinancialInstrumentCreateWithoutInvestmentInput, FinancialInstrumentUncheckedCreateWithoutInvestmentInput>
    connectOrCreate?: FinancialInstrumentCreateOrConnectWithoutInvestmentInput
    connect?: FinancialInstrumentWhereUniqueInput
  }

  export type InvestmentPortfolioCreateNestedOneWithoutInvestmentInput = {
    create?: XOR<InvestmentPortfolioCreateWithoutInvestmentInput, InvestmentPortfolioUncheckedCreateWithoutInvestmentInput>
    connectOrCreate?: InvestmentPortfolioCreateOrConnectWithoutInvestmentInput
    connect?: InvestmentPortfolioWhereUniqueInput
  }

  export type FinancialInstrumentUpdateOneRequiredWithoutInvestmentNestedInput = {
    create?: XOR<FinancialInstrumentCreateWithoutInvestmentInput, FinancialInstrumentUncheckedCreateWithoutInvestmentInput>
    connectOrCreate?: FinancialInstrumentCreateOrConnectWithoutInvestmentInput
    upsert?: FinancialInstrumentUpsertWithoutInvestmentInput
    connect?: FinancialInstrumentWhereUniqueInput
    update?: XOR<XOR<FinancialInstrumentUpdateToOneWithWhereWithoutInvestmentInput, FinancialInstrumentUpdateWithoutInvestmentInput>, FinancialInstrumentUncheckedUpdateWithoutInvestmentInput>
  }

  export type InvestmentPortfolioUpdateOneRequiredWithoutInvestmentNestedInput = {
    create?: XOR<InvestmentPortfolioCreateWithoutInvestmentInput, InvestmentPortfolioUncheckedCreateWithoutInvestmentInput>
    connectOrCreate?: InvestmentPortfolioCreateOrConnectWithoutInvestmentInput
    upsert?: InvestmentPortfolioUpsertWithoutInvestmentInput
    connect?: InvestmentPortfolioWhereUniqueInput
    update?: XOR<XOR<InvestmentPortfolioUpdateToOneWithWhereWithoutInvestmentInput, InvestmentPortfolioUpdateWithoutInvestmentInput>, InvestmentPortfolioUncheckedUpdateWithoutInvestmentInput>
  }

  export type CommentCreateNestedManyWithoutNewsInput = {
    create?: XOR<CommentCreateWithoutNewsInput, CommentUncheckedCreateWithoutNewsInput> | CommentCreateWithoutNewsInput[] | CommentUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutNewsInput | CommentCreateOrConnectWithoutNewsInput[]
    createMany?: CommentCreateManyNewsInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutNewsInput = {
    create?: XOR<CommentCreateWithoutNewsInput, CommentUncheckedCreateWithoutNewsInput> | CommentCreateWithoutNewsInput[] | CommentUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutNewsInput | CommentCreateOrConnectWithoutNewsInput[]
    createMany?: CommentCreateManyNewsInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentUpdateManyWithoutNewsNestedInput = {
    create?: XOR<CommentCreateWithoutNewsInput, CommentUncheckedCreateWithoutNewsInput> | CommentCreateWithoutNewsInput[] | CommentUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutNewsInput | CommentCreateOrConnectWithoutNewsInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutNewsInput | CommentUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: CommentCreateManyNewsInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutNewsInput | CommentUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutNewsInput | CommentUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutNewsNestedInput = {
    create?: XOR<CommentCreateWithoutNewsInput, CommentUncheckedCreateWithoutNewsInput> | CommentCreateWithoutNewsInput[] | CommentUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutNewsInput | CommentCreateOrConnectWithoutNewsInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutNewsInput | CommentUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: CommentCreateManyNewsInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutNewsInput | CommentUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutNewsInput | CommentUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCommentInput = {
    create?: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput
    connect?: UserWhereUniqueInput
  }

  export type NewsCreateNestedOneWithoutCommentInput = {
    create?: XOR<NewsCreateWithoutCommentInput, NewsUncheckedCreateWithoutCommentInput>
    connectOrCreate?: NewsCreateOrConnectWithoutCommentInput
    connect?: NewsWhereUniqueInput
  }

  export type UserUpdateOneWithoutCommentNestedInput = {
    create?: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput
    upsert?: UserUpsertWithoutCommentInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentInput, UserUpdateWithoutCommentInput>, UserUncheckedUpdateWithoutCommentInput>
  }

  export type NewsUpdateOneWithoutCommentNestedInput = {
    create?: XOR<NewsCreateWithoutCommentInput, NewsUncheckedCreateWithoutCommentInput>
    connectOrCreate?: NewsCreateOrConnectWithoutCommentInput
    upsert?: NewsUpsertWithoutCommentInput
    disconnect?: NewsWhereInput | boolean
    delete?: NewsWhereInput | boolean
    connect?: NewsWhereUniqueInput
    update?: XOR<XOR<NewsUpdateToOneWithWhereWithoutCommentInput, NewsUpdateWithoutCommentInput>, NewsUncheckedUpdateWithoutCommentInput>
  }

  export type UserCreateNestedOneWithoutWalletInput = {
    create?: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletInput
    connect?: UserWhereUniqueInput
  }

  export type WalletTransactionCreateNestedManyWithoutWalletInput = {
    create?: XOR<WalletTransactionCreateWithoutWalletInput, WalletTransactionUncheckedCreateWithoutWalletInput> | WalletTransactionCreateWithoutWalletInput[] | WalletTransactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutWalletInput | WalletTransactionCreateOrConnectWithoutWalletInput[]
    createMany?: WalletTransactionCreateManyWalletInputEnvelope
    connect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
  }

  export type WalletTransactionUncheckedCreateNestedManyWithoutWalletInput = {
    create?: XOR<WalletTransactionCreateWithoutWalletInput, WalletTransactionUncheckedCreateWithoutWalletInput> | WalletTransactionCreateWithoutWalletInput[] | WalletTransactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutWalletInput | WalletTransactionCreateOrConnectWithoutWalletInput[]
    createMany?: WalletTransactionCreateManyWalletInputEnvelope
    connect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutWalletNestedInput = {
    create?: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletInput
    upsert?: UserUpsertWithoutWalletInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWalletInput, UserUpdateWithoutWalletInput>, UserUncheckedUpdateWithoutWalletInput>
  }

  export type WalletTransactionUpdateManyWithoutWalletNestedInput = {
    create?: XOR<WalletTransactionCreateWithoutWalletInput, WalletTransactionUncheckedCreateWithoutWalletInput> | WalletTransactionCreateWithoutWalletInput[] | WalletTransactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutWalletInput | WalletTransactionCreateOrConnectWithoutWalletInput[]
    upsert?: WalletTransactionUpsertWithWhereUniqueWithoutWalletInput | WalletTransactionUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: WalletTransactionCreateManyWalletInputEnvelope
    set?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    disconnect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    delete?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    connect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    update?: WalletTransactionUpdateWithWhereUniqueWithoutWalletInput | WalletTransactionUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: WalletTransactionUpdateManyWithWhereWithoutWalletInput | WalletTransactionUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: WalletTransactionScalarWhereInput | WalletTransactionScalarWhereInput[]
  }

  export type WalletTransactionUncheckedUpdateManyWithoutWalletNestedInput = {
    create?: XOR<WalletTransactionCreateWithoutWalletInput, WalletTransactionUncheckedCreateWithoutWalletInput> | WalletTransactionCreateWithoutWalletInput[] | WalletTransactionUncheckedCreateWithoutWalletInput[]
    connectOrCreate?: WalletTransactionCreateOrConnectWithoutWalletInput | WalletTransactionCreateOrConnectWithoutWalletInput[]
    upsert?: WalletTransactionUpsertWithWhereUniqueWithoutWalletInput | WalletTransactionUpsertWithWhereUniqueWithoutWalletInput[]
    createMany?: WalletTransactionCreateManyWalletInputEnvelope
    set?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    disconnect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    delete?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    connect?: WalletTransactionWhereUniqueInput | WalletTransactionWhereUniqueInput[]
    update?: WalletTransactionUpdateWithWhereUniqueWithoutWalletInput | WalletTransactionUpdateWithWhereUniqueWithoutWalletInput[]
    updateMany?: WalletTransactionUpdateManyWithWhereWithoutWalletInput | WalletTransactionUpdateManyWithWhereWithoutWalletInput[]
    deleteMany?: WalletTransactionScalarWhereInput | WalletTransactionScalarWhereInput[]
  }

  export type walletCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<walletCreateWithoutTransactionsInput, walletUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: walletCreateOrConnectWithoutTransactionsInput
    connect?: walletWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type walletUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<walletCreateWithoutTransactionsInput, walletUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: walletCreateOrConnectWithoutTransactionsInput
    upsert?: walletUpsertWithoutTransactionsInput
    connect?: walletWhereUniqueInput
    update?: XOR<XOR<walletUpdateToOneWithWhereWithoutTransactionsInput, walletUpdateWithoutTransactionsInput>, walletUncheckedUpdateWithoutTransactionsInput>
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type UserCreateNestedOneWithoutSupportInput = {
    create?: XOR<UserCreateWithoutSupportInput, UserUncheckedCreateWithoutSupportInput>
    connectOrCreate?: UserCreateOrConnectWithoutSupportInput
    connect?: UserWhereUniqueInput
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type UserUpdateOneRequiredWithoutSupportNestedInput = {
    create?: XOR<UserCreateWithoutSupportInput, UserUncheckedCreateWithoutSupportInput>
    connectOrCreate?: UserCreateOrConnectWithoutSupportInput
    upsert?: UserUpsertWithoutSupportInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSupportInput, UserUpdateWithoutSupportInput>, UserUncheckedUpdateWithoutSupportInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableEnumMainGoalFieldUpdateOperationsInput = {
    set?: $Enums.MainGoal | null
  }

  export type NullableEnumFinancialSkillsFieldUpdateOperationsInput = {
    set?: $Enums.FinancialSkills | null
  }

  export type NullableEnumRiskToleranceFieldUpdateOperationsInput = {
    set?: $Enums.RiskTolerance | null
  }

  export type NullableEnumMonthlyInvestmentFieldUpdateOperationsInput = {
    set?: $Enums.MonthlyInvestment | null
  }

  export type NullableEnumSavingsReasonFieldUpdateOperationsInput = {
    set?: $Enums.SavingsReason | null
  }

  export type NullableEnumInvestmentTimeframeFieldUpdateOperationsInput = {
    set?: $Enums.InvestmentTimeframe | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserRoleNullableFilter<$PrismaModel> | $Enums.UserRole | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumUserRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.UserRole | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumUserRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumUserRoleNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumCurrencyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyType | EnumCurrencyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyType[] | ListEnumCurrencyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyType[] | ListEnumCurrencyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyTypeFilter<$PrismaModel> | $Enums.CurrencyType
  }

  export type NestedEnumCurrencyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyType | EnumCurrencyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyType[] | ListEnumCurrencyTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyType[] | ListEnumCurrencyTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyTypeWithAggregatesFilter<$PrismaModel> | $Enums.CurrencyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyTypeFilter<$PrismaModel>
    _max?: NestedEnumCurrencyTypeFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumMainGoalNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MainGoal | EnumMainGoalFieldRefInput<$PrismaModel> | null
    in?: $Enums.MainGoal[] | ListEnumMainGoalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MainGoal[] | ListEnumMainGoalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMainGoalNullableFilter<$PrismaModel> | $Enums.MainGoal | null
  }

  export type NestedEnumFinancialSkillsNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.FinancialSkills | EnumFinancialSkillsFieldRefInput<$PrismaModel> | null
    in?: $Enums.FinancialSkills[] | ListEnumFinancialSkillsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FinancialSkills[] | ListEnumFinancialSkillsFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFinancialSkillsNullableFilter<$PrismaModel> | $Enums.FinancialSkills | null
  }

  export type NestedEnumRiskToleranceNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskTolerance | EnumRiskToleranceFieldRefInput<$PrismaModel> | null
    in?: $Enums.RiskTolerance[] | ListEnumRiskToleranceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RiskTolerance[] | ListEnumRiskToleranceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRiskToleranceNullableFilter<$PrismaModel> | $Enums.RiskTolerance | null
  }

  export type NestedEnumMonthlyInvestmentNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.MonthlyInvestment | EnumMonthlyInvestmentFieldRefInput<$PrismaModel> | null
    in?: $Enums.MonthlyInvestment[] | ListEnumMonthlyInvestmentFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MonthlyInvestment[] | ListEnumMonthlyInvestmentFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMonthlyInvestmentNullableFilter<$PrismaModel> | $Enums.MonthlyInvestment | null
  }

  export type NestedEnumSavingsReasonNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SavingsReason | EnumSavingsReasonFieldRefInput<$PrismaModel> | null
    in?: $Enums.SavingsReason[] | ListEnumSavingsReasonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SavingsReason[] | ListEnumSavingsReasonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSavingsReasonNullableFilter<$PrismaModel> | $Enums.SavingsReason | null
  }

  export type NestedEnumInvestmentTimeframeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.InvestmentTimeframe | EnumInvestmentTimeframeFieldRefInput<$PrismaModel> | null
    in?: $Enums.InvestmentTimeframe[] | ListEnumInvestmentTimeframeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.InvestmentTimeframe[] | ListEnumInvestmentTimeframeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumInvestmentTimeframeNullableFilter<$PrismaModel> | $Enums.InvestmentTimeframe | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumMainGoalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MainGoal | EnumMainGoalFieldRefInput<$PrismaModel> | null
    in?: $Enums.MainGoal[] | ListEnumMainGoalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MainGoal[] | ListEnumMainGoalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMainGoalNullableWithAggregatesFilter<$PrismaModel> | $Enums.MainGoal | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMainGoalNullableFilter<$PrismaModel>
    _max?: NestedEnumMainGoalNullableFilter<$PrismaModel>
  }

  export type NestedEnumFinancialSkillsNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FinancialSkills | EnumFinancialSkillsFieldRefInput<$PrismaModel> | null
    in?: $Enums.FinancialSkills[] | ListEnumFinancialSkillsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.FinancialSkills[] | ListEnumFinancialSkillsFieldRefInput<$PrismaModel> | null
    not?: NestedEnumFinancialSkillsNullableWithAggregatesFilter<$PrismaModel> | $Enums.FinancialSkills | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumFinancialSkillsNullableFilter<$PrismaModel>
    _max?: NestedEnumFinancialSkillsNullableFilter<$PrismaModel>
  }

  export type NestedEnumRiskToleranceNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RiskTolerance | EnumRiskToleranceFieldRefInput<$PrismaModel> | null
    in?: $Enums.RiskTolerance[] | ListEnumRiskToleranceFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.RiskTolerance[] | ListEnumRiskToleranceFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRiskToleranceNullableWithAggregatesFilter<$PrismaModel> | $Enums.RiskTolerance | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRiskToleranceNullableFilter<$PrismaModel>
    _max?: NestedEnumRiskToleranceNullableFilter<$PrismaModel>
  }

  export type NestedEnumMonthlyInvestmentNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MonthlyInvestment | EnumMonthlyInvestmentFieldRefInput<$PrismaModel> | null
    in?: $Enums.MonthlyInvestment[] | ListEnumMonthlyInvestmentFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.MonthlyInvestment[] | ListEnumMonthlyInvestmentFieldRefInput<$PrismaModel> | null
    not?: NestedEnumMonthlyInvestmentNullableWithAggregatesFilter<$PrismaModel> | $Enums.MonthlyInvestment | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumMonthlyInvestmentNullableFilter<$PrismaModel>
    _max?: NestedEnumMonthlyInvestmentNullableFilter<$PrismaModel>
  }

  export type NestedEnumSavingsReasonNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SavingsReason | EnumSavingsReasonFieldRefInput<$PrismaModel> | null
    in?: $Enums.SavingsReason[] | ListEnumSavingsReasonFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SavingsReason[] | ListEnumSavingsReasonFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSavingsReasonNullableWithAggregatesFilter<$PrismaModel> | $Enums.SavingsReason | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSavingsReasonNullableFilter<$PrismaModel>
    _max?: NestedEnumSavingsReasonNullableFilter<$PrismaModel>
  }

  export type NestedEnumInvestmentTimeframeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvestmentTimeframe | EnumInvestmentTimeframeFieldRefInput<$PrismaModel> | null
    in?: $Enums.InvestmentTimeframe[] | ListEnumInvestmentTimeframeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.InvestmentTimeframe[] | ListEnumInvestmentTimeframeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumInvestmentTimeframeNullableWithAggregatesFilter<$PrismaModel> | $Enums.InvestmentTimeframe | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumInvestmentTimeframeNullableFilter<$PrismaModel>
    _max?: NestedEnumInvestmentTimeframeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type walletCreateWithoutUserInput = {
    id?: string
    balancePesos: number
    balanceDollars: number
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: WalletTransactionCreateNestedManyWithoutWalletInput
  }

  export type walletUncheckedCreateWithoutUserInput = {
    id?: string
    balancePesos: number
    balanceDollars: number
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: WalletTransactionUncheckedCreateNestedManyWithoutWalletInput
  }

  export type walletCreateOrConnectWithoutUserInput = {
    where: walletWhereUniqueInput
    create: XOR<walletCreateWithoutUserInput, walletUncheckedCreateWithoutUserInput>
  }

  export type walletCreateManyUserInputEnvelope = {
    data: walletCreateManyUserInput | walletCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FinancialRadiographyCreateWithoutUserInput = {
    id?: string
    monthlyIncome?: Decimal | DecimalJsLike | number | string | null
    monthlyExpenses?: Decimal | DecimalJsLike | number | string | null
    savingCapacity?: Decimal | DecimalJsLike | number | string | null
    debts?: Decimal | DecimalJsLike | number | string | null
    savings?: Decimal | DecimalJsLike | number | string | null
  }

  export type FinancialRadiographyUncheckedCreateWithoutUserInput = {
    id?: string
    monthlyIncome?: Decimal | DecimalJsLike | number | string | null
    monthlyExpenses?: Decimal | DecimalJsLike | number | string | null
    savingCapacity?: Decimal | DecimalJsLike | number | string | null
    debts?: Decimal | DecimalJsLike | number | string | null
    savings?: Decimal | DecimalJsLike | number | string | null
  }

  export type FinancialRadiographyCreateOrConnectWithoutUserInput = {
    where: FinancialRadiographyWhereUniqueInput
    create: XOR<FinancialRadiographyCreateWithoutUserInput, FinancialRadiographyUncheckedCreateWithoutUserInput>
  }

  export type FinancialRadiographyCreateManyUserInputEnvelope = {
    data: FinancialRadiographyCreateManyUserInput | FinancialRadiographyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileCreateWithoutUserInput = {
    id?: string
    mainGoal?: $Enums.MainGoal | null
    financialSkills?: $Enums.FinancialSkills | null
    riskTolerance?: $Enums.RiskTolerance | null
    monthlyInvestment?: $Enums.MonthlyInvestment | null
    savingsOrInvestmentReason?: $Enums.SavingsReason | null
    investmentTimeframe?: $Enums.InvestmentTimeframe | null
    hasInvestedBefore?: boolean | null
    financialGoalNextYear?: boolean | null
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: string
    mainGoal?: $Enums.MainGoal | null
    financialSkills?: $Enums.FinancialSkills | null
    riskTolerance?: $Enums.RiskTolerance | null
    monthlyInvestment?: $Enums.MonthlyInvestment | null
    savingsOrInvestmentReason?: $Enums.SavingsReason | null
    investmentTimeframe?: $Enums.InvestmentTimeframe | null
    hasInvestedBefore?: boolean | null
    financialGoalNextYear?: boolean | null
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateWithoutUserInput = {
    id?: string
    content: string
    dateComment: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    news?: NewsCreateNestedOneWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    dateComment: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    newsId?: string | null
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SupportCreateWithoutUserInput = {
    id?: string
    subject: string
    message: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupportUncheckedCreateWithoutUserInput = {
    id?: string
    subject: string
    message: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupportCreateOrConnectWithoutUserInput = {
    where: SupportWhereUniqueInput
    create: XOR<SupportCreateWithoutUserInput, SupportUncheckedCreateWithoutUserInput>
  }

  export type SupportCreateManyUserInputEnvelope = {
    data: SupportCreateManyUserInput | SupportCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type walletUpsertWithWhereUniqueWithoutUserInput = {
    where: walletWhereUniqueInput
    update: XOR<walletUpdateWithoutUserInput, walletUncheckedUpdateWithoutUserInput>
    create: XOR<walletCreateWithoutUserInput, walletUncheckedCreateWithoutUserInput>
  }

  export type walletUpdateWithWhereUniqueWithoutUserInput = {
    where: walletWhereUniqueInput
    data: XOR<walletUpdateWithoutUserInput, walletUncheckedUpdateWithoutUserInput>
  }

  export type walletUpdateManyWithWhereWithoutUserInput = {
    where: walletScalarWhereInput
    data: XOR<walletUpdateManyMutationInput, walletUncheckedUpdateManyWithoutUserInput>
  }

  export type walletScalarWhereInput = {
    AND?: walletScalarWhereInput | walletScalarWhereInput[]
    OR?: walletScalarWhereInput[]
    NOT?: walletScalarWhereInput | walletScalarWhereInput[]
    id?: StringFilter<"wallet"> | string
    userId?: StringFilter<"wallet"> | string
    balancePesos?: IntFilter<"wallet"> | number
    balanceDollars?: IntFilter<"wallet"> | number
    createdAt?: DateTimeFilter<"wallet"> | Date | string
    updatedAt?: DateTimeFilter<"wallet"> | Date | string
  }

  export type FinancialRadiographyUpsertWithWhereUniqueWithoutUserInput = {
    where: FinancialRadiographyWhereUniqueInput
    update: XOR<FinancialRadiographyUpdateWithoutUserInput, FinancialRadiographyUncheckedUpdateWithoutUserInput>
    create: XOR<FinancialRadiographyCreateWithoutUserInput, FinancialRadiographyUncheckedCreateWithoutUserInput>
  }

  export type FinancialRadiographyUpdateWithWhereUniqueWithoutUserInput = {
    where: FinancialRadiographyWhereUniqueInput
    data: XOR<FinancialRadiographyUpdateWithoutUserInput, FinancialRadiographyUncheckedUpdateWithoutUserInput>
  }

  export type FinancialRadiographyUpdateManyWithWhereWithoutUserInput = {
    where: FinancialRadiographyScalarWhereInput
    data: XOR<FinancialRadiographyUpdateManyMutationInput, FinancialRadiographyUncheckedUpdateManyWithoutUserInput>
  }

  export type FinancialRadiographyScalarWhereInput = {
    AND?: FinancialRadiographyScalarWhereInput | FinancialRadiographyScalarWhereInput[]
    OR?: FinancialRadiographyScalarWhereInput[]
    NOT?: FinancialRadiographyScalarWhereInput | FinancialRadiographyScalarWhereInput[]
    id?: StringFilter<"FinancialRadiography"> | string
    monthlyIncome?: DecimalNullableFilter<"FinancialRadiography"> | Decimal | DecimalJsLike | number | string | null
    monthlyExpenses?: DecimalNullableFilter<"FinancialRadiography"> | Decimal | DecimalJsLike | number | string | null
    savingCapacity?: DecimalNullableFilter<"FinancialRadiography"> | Decimal | DecimalJsLike | number | string | null
    debts?: DecimalNullableFilter<"FinancialRadiography"> | Decimal | DecimalJsLike | number | string | null
    savings?: DecimalNullableFilter<"FinancialRadiography"> | Decimal | DecimalJsLike | number | string | null
    userId?: StringFilter<"FinancialRadiography"> | string
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mainGoal?: NullableEnumMainGoalFieldUpdateOperationsInput | $Enums.MainGoal | null
    financialSkills?: NullableEnumFinancialSkillsFieldUpdateOperationsInput | $Enums.FinancialSkills | null
    riskTolerance?: NullableEnumRiskToleranceFieldUpdateOperationsInput | $Enums.RiskTolerance | null
    monthlyInvestment?: NullableEnumMonthlyInvestmentFieldUpdateOperationsInput | $Enums.MonthlyInvestment | null
    savingsOrInvestmentReason?: NullableEnumSavingsReasonFieldUpdateOperationsInput | $Enums.SavingsReason | null
    investmentTimeframe?: NullableEnumInvestmentTimeframeFieldUpdateOperationsInput | $Enums.InvestmentTimeframe | null
    hasInvestedBefore?: NullableBoolFieldUpdateOperationsInput | boolean | null
    financialGoalNextYear?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mainGoal?: NullableEnumMainGoalFieldUpdateOperationsInput | $Enums.MainGoal | null
    financialSkills?: NullableEnumFinancialSkillsFieldUpdateOperationsInput | $Enums.FinancialSkills | null
    riskTolerance?: NullableEnumRiskToleranceFieldUpdateOperationsInput | $Enums.RiskTolerance | null
    monthlyInvestment?: NullableEnumMonthlyInvestmentFieldUpdateOperationsInput | $Enums.MonthlyInvestment | null
    savingsOrInvestmentReason?: NullableEnumSavingsReasonFieldUpdateOperationsInput | $Enums.SavingsReason | null
    investmentTimeframe?: NullableEnumInvestmentTimeframeFieldUpdateOperationsInput | $Enums.InvestmentTimeframe | null
    hasInvestedBefore?: NullableBoolFieldUpdateOperationsInput | boolean | null
    financialGoalNextYear?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    dateComment?: DateTimeFilter<"Comment"> | Date | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    userId?: StringNullableFilter<"Comment"> | string | null
    newsId?: StringNullableFilter<"Comment"> | string | null
  }

  export type SupportUpsertWithWhereUniqueWithoutUserInput = {
    where: SupportWhereUniqueInput
    update: XOR<SupportUpdateWithoutUserInput, SupportUncheckedUpdateWithoutUserInput>
    create: XOR<SupportCreateWithoutUserInput, SupportUncheckedCreateWithoutUserInput>
  }

  export type SupportUpdateWithWhereUniqueWithoutUserInput = {
    where: SupportWhereUniqueInput
    data: XOR<SupportUpdateWithoutUserInput, SupportUncheckedUpdateWithoutUserInput>
  }

  export type SupportUpdateManyWithWhereWithoutUserInput = {
    where: SupportScalarWhereInput
    data: XOR<SupportUpdateManyMutationInput, SupportUncheckedUpdateManyWithoutUserInput>
  }

  export type SupportScalarWhereInput = {
    AND?: SupportScalarWhereInput | SupportScalarWhereInput[]
    OR?: SupportScalarWhereInput[]
    NOT?: SupportScalarWhereInput | SupportScalarWhereInput[]
    id?: StringFilter<"Support"> | string
    userId?: StringFilter<"Support"> | string
    subject?: StringFilter<"Support"> | string
    message?: StringFilter<"Support"> | string
    status?: EnumStatusFilter<"Support"> | $Enums.Status
    createdAt?: DateTimeFilter<"Support"> | Date | string
    updatedAt?: DateTimeFilter<"Support"> | Date | string
  }

  export type UserCreateWithoutFinancialRadiographiesInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    password: string
    avatarUrl?: string | null
    role?: $Enums.UserRole | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    wallet?: walletCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    Support?: SupportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFinancialRadiographiesInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    password: string
    avatarUrl?: string | null
    role?: $Enums.UserRole | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    wallet?: walletUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    Support?: SupportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFinancialRadiographiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFinancialRadiographiesInput, UserUncheckedCreateWithoutFinancialRadiographiesInput>
  }

  export type UserUpsertWithoutFinancialRadiographiesInput = {
    update: XOR<UserUpdateWithoutFinancialRadiographiesInput, UserUncheckedUpdateWithoutFinancialRadiographiesInput>
    create: XOR<UserCreateWithoutFinancialRadiographiesInput, UserUncheckedCreateWithoutFinancialRadiographiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFinancialRadiographiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFinancialRadiographiesInput, UserUncheckedUpdateWithoutFinancialRadiographiesInput>
  }

  export type UserUpdateWithoutFinancialRadiographiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    wallet?: walletUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    comment?: CommentUpdateManyWithoutUserNestedInput
    Support?: SupportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFinancialRadiographiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    wallet?: walletUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    Support?: SupportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type InvestmentCreateWithoutPortfolioInput = {
    id?: string
    amountInvested: number
    performance: string
    dateInvestment: Date | string
    instrument: FinancialInstrumentCreateNestedOneWithoutInvestmentInput
  }

  export type InvestmentUncheckedCreateWithoutPortfolioInput = {
    id?: string
    amountInvested: number
    performance: string
    dateInvestment: Date | string
    instrumentId: string
  }

  export type InvestmentCreateOrConnectWithoutPortfolioInput = {
    where: InvestmentWhereUniqueInput
    create: XOR<InvestmentCreateWithoutPortfolioInput, InvestmentUncheckedCreateWithoutPortfolioInput>
  }

  export type InvestmentCreateManyPortfolioInputEnvelope = {
    data: InvestmentCreateManyPortfolioInput | InvestmentCreateManyPortfolioInput[]
    skipDuplicates?: boolean
  }

  export type InvestmentUpsertWithWhereUniqueWithoutPortfolioInput = {
    where: InvestmentWhereUniqueInput
    update: XOR<InvestmentUpdateWithoutPortfolioInput, InvestmentUncheckedUpdateWithoutPortfolioInput>
    create: XOR<InvestmentCreateWithoutPortfolioInput, InvestmentUncheckedCreateWithoutPortfolioInput>
  }

  export type InvestmentUpdateWithWhereUniqueWithoutPortfolioInput = {
    where: InvestmentWhereUniqueInput
    data: XOR<InvestmentUpdateWithoutPortfolioInput, InvestmentUncheckedUpdateWithoutPortfolioInput>
  }

  export type InvestmentUpdateManyWithWhereWithoutPortfolioInput = {
    where: InvestmentScalarWhereInput
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyWithoutPortfolioInput>
  }

  export type InvestmentScalarWhereInput = {
    AND?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
    OR?: InvestmentScalarWhereInput[]
    NOT?: InvestmentScalarWhereInput | InvestmentScalarWhereInput[]
    id?: StringFilter<"Investment"> | string
    amountInvested?: IntFilter<"Investment"> | number
    performance?: StringFilter<"Investment"> | string
    dateInvestment?: DateTimeFilter<"Investment"> | Date | string
    portfolioId?: StringFilter<"Investment"> | string
    instrumentId?: StringFilter<"Investment"> | string
  }

  export type InvestmentCreateWithoutInstrumentInput = {
    id?: string
    amountInvested: number
    performance: string
    dateInvestment: Date | string
    portfolio: InvestmentPortfolioCreateNestedOneWithoutInvestmentInput
  }

  export type InvestmentUncheckedCreateWithoutInstrumentInput = {
    id?: string
    amountInvested: number
    performance: string
    dateInvestment: Date | string
    portfolioId: string
  }

  export type InvestmentCreateOrConnectWithoutInstrumentInput = {
    where: InvestmentWhereUniqueInput
    create: XOR<InvestmentCreateWithoutInstrumentInput, InvestmentUncheckedCreateWithoutInstrumentInput>
  }

  export type InvestmentCreateManyInstrumentInputEnvelope = {
    data: InvestmentCreateManyInstrumentInput | InvestmentCreateManyInstrumentInput[]
    skipDuplicates?: boolean
  }

  export type InvestmentUpsertWithWhereUniqueWithoutInstrumentInput = {
    where: InvestmentWhereUniqueInput
    update: XOR<InvestmentUpdateWithoutInstrumentInput, InvestmentUncheckedUpdateWithoutInstrumentInput>
    create: XOR<InvestmentCreateWithoutInstrumentInput, InvestmentUncheckedCreateWithoutInstrumentInput>
  }

  export type InvestmentUpdateWithWhereUniqueWithoutInstrumentInput = {
    where: InvestmentWhereUniqueInput
    data: XOR<InvestmentUpdateWithoutInstrumentInput, InvestmentUncheckedUpdateWithoutInstrumentInput>
  }

  export type InvestmentUpdateManyWithWhereWithoutInstrumentInput = {
    where: InvestmentScalarWhereInput
    data: XOR<InvestmentUpdateManyMutationInput, InvestmentUncheckedUpdateManyWithoutInstrumentInput>
  }

  export type FinancialInstrumentCreateWithoutInvestmentInput = {
    id?: string
    name: string
    type: string
    category: string
    performance: number
    levelRisk: number
    deadline: number
    currency: $Enums.CurrencyType
  }

  export type FinancialInstrumentUncheckedCreateWithoutInvestmentInput = {
    id?: string
    name: string
    type: string
    category: string
    performance: number
    levelRisk: number
    deadline: number
    currency: $Enums.CurrencyType
  }

  export type FinancialInstrumentCreateOrConnectWithoutInvestmentInput = {
    where: FinancialInstrumentWhereUniqueInput
    create: XOR<FinancialInstrumentCreateWithoutInvestmentInput, FinancialInstrumentUncheckedCreateWithoutInvestmentInput>
  }

  export type InvestmentPortfolioCreateWithoutInvestmentInput = {
    id?: string
    profileRisk: number
    performanceCurrent: number
    coin: string
    userId: string
  }

  export type InvestmentPortfolioUncheckedCreateWithoutInvestmentInput = {
    id?: string
    profileRisk: number
    performanceCurrent: number
    coin: string
    userId: string
  }

  export type InvestmentPortfolioCreateOrConnectWithoutInvestmentInput = {
    where: InvestmentPortfolioWhereUniqueInput
    create: XOR<InvestmentPortfolioCreateWithoutInvestmentInput, InvestmentPortfolioUncheckedCreateWithoutInvestmentInput>
  }

  export type FinancialInstrumentUpsertWithoutInvestmentInput = {
    update: XOR<FinancialInstrumentUpdateWithoutInvestmentInput, FinancialInstrumentUncheckedUpdateWithoutInvestmentInput>
    create: XOR<FinancialInstrumentCreateWithoutInvestmentInput, FinancialInstrumentUncheckedCreateWithoutInvestmentInput>
    where?: FinancialInstrumentWhereInput
  }

  export type FinancialInstrumentUpdateToOneWithWhereWithoutInvestmentInput = {
    where?: FinancialInstrumentWhereInput
    data: XOR<FinancialInstrumentUpdateWithoutInvestmentInput, FinancialInstrumentUncheckedUpdateWithoutInvestmentInput>
  }

  export type FinancialInstrumentUpdateWithoutInvestmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    performance?: FloatFieldUpdateOperationsInput | number
    levelRisk?: IntFieldUpdateOperationsInput | number
    deadline?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
  }

  export type FinancialInstrumentUncheckedUpdateWithoutInvestmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    performance?: FloatFieldUpdateOperationsInput | number
    levelRisk?: IntFieldUpdateOperationsInput | number
    deadline?: IntFieldUpdateOperationsInput | number
    currency?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
  }

  export type InvestmentPortfolioUpsertWithoutInvestmentInput = {
    update: XOR<InvestmentPortfolioUpdateWithoutInvestmentInput, InvestmentPortfolioUncheckedUpdateWithoutInvestmentInput>
    create: XOR<InvestmentPortfolioCreateWithoutInvestmentInput, InvestmentPortfolioUncheckedCreateWithoutInvestmentInput>
    where?: InvestmentPortfolioWhereInput
  }

  export type InvestmentPortfolioUpdateToOneWithWhereWithoutInvestmentInput = {
    where?: InvestmentPortfolioWhereInput
    data: XOR<InvestmentPortfolioUpdateWithoutInvestmentInput, InvestmentPortfolioUncheckedUpdateWithoutInvestmentInput>
  }

  export type InvestmentPortfolioUpdateWithoutInvestmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileRisk?: IntFieldUpdateOperationsInput | number
    performanceCurrent?: FloatFieldUpdateOperationsInput | number
    coin?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type InvestmentPortfolioUncheckedUpdateWithoutInvestmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileRisk?: IntFieldUpdateOperationsInput | number
    performanceCurrent?: FloatFieldUpdateOperationsInput | number
    coin?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateWithoutNewsInput = {
    id?: string
    content: string
    dateComment: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutCommentInput
  }

  export type CommentUncheckedCreateWithoutNewsInput = {
    id?: string
    content: string
    dateComment: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type CommentCreateOrConnectWithoutNewsInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutNewsInput, CommentUncheckedCreateWithoutNewsInput>
  }

  export type CommentCreateManyNewsInputEnvelope = {
    data: CommentCreateManyNewsInput | CommentCreateManyNewsInput[]
    skipDuplicates?: boolean
  }

  export type CommentUpsertWithWhereUniqueWithoutNewsInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutNewsInput, CommentUncheckedUpdateWithoutNewsInput>
    create: XOR<CommentCreateWithoutNewsInput, CommentUncheckedCreateWithoutNewsInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutNewsInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutNewsInput, CommentUncheckedUpdateWithoutNewsInput>
  }

  export type CommentUpdateManyWithWhereWithoutNewsInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutNewsInput>
  }

  export type UserCreateWithoutCommentInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    password: string
    avatarUrl?: string | null
    role?: $Enums.UserRole | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    wallet?: walletCreateNestedManyWithoutUserInput
    financialRadiographies?: FinancialRadiographyCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    Support?: SupportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    password: string
    avatarUrl?: string | null
    role?: $Enums.UserRole | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    wallet?: walletUncheckedCreateNestedManyWithoutUserInput
    financialRadiographies?: FinancialRadiographyUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    Support?: SupportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
  }

  export type NewsCreateWithoutCommentInput = {
    id?: string
    title: string
    content: string
    source: string
    dateNews: Date | string
    category: string
    createdAt?: Date | string
  }

  export type NewsUncheckedCreateWithoutCommentInput = {
    id?: string
    title: string
    content: string
    source: string
    dateNews: Date | string
    category: string
    createdAt?: Date | string
  }

  export type NewsCreateOrConnectWithoutCommentInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutCommentInput, NewsUncheckedCreateWithoutCommentInput>
  }

  export type UserUpsertWithoutCommentInput = {
    update: XOR<UserUpdateWithoutCommentInput, UserUncheckedUpdateWithoutCommentInput>
    create: XOR<UserCreateWithoutCommentInput, UserUncheckedCreateWithoutCommentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentInput, UserUncheckedUpdateWithoutCommentInput>
  }

  export type UserUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    wallet?: walletUpdateManyWithoutUserNestedInput
    financialRadiographies?: FinancialRadiographyUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    Support?: SupportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    wallet?: walletUncheckedUpdateManyWithoutUserNestedInput
    financialRadiographies?: FinancialRadiographyUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    Support?: SupportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NewsUpsertWithoutCommentInput = {
    update: XOR<NewsUpdateWithoutCommentInput, NewsUncheckedUpdateWithoutCommentInput>
    create: XOR<NewsCreateWithoutCommentInput, NewsUncheckedCreateWithoutCommentInput>
    where?: NewsWhereInput
  }

  export type NewsUpdateToOneWithWhereWithoutCommentInput = {
    where?: NewsWhereInput
    data: XOR<NewsUpdateWithoutCommentInput, NewsUncheckedUpdateWithoutCommentInput>
  }

  export type NewsUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    dateNews?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateWithoutCommentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    dateNews?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutWalletInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    password: string
    avatarUrl?: string | null
    role?: $Enums.UserRole | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    financialRadiographies?: FinancialRadiographyCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    Support?: SupportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWalletInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    password: string
    avatarUrl?: string | null
    role?: $Enums.UserRole | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    financialRadiographies?: FinancialRadiographyUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    Support?: SupportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWalletInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
  }

  export type WalletTransactionCreateWithoutWalletInput = {
    id?: string
    type: $Enums.TransactionType
    amount: number
    currency: $Enums.CurrencyType
    description?: string | null
    createdAt?: Date | string
  }

  export type WalletTransactionUncheckedCreateWithoutWalletInput = {
    id?: string
    type: $Enums.TransactionType
    amount: number
    currency: $Enums.CurrencyType
    description?: string | null
    createdAt?: Date | string
  }

  export type WalletTransactionCreateOrConnectWithoutWalletInput = {
    where: WalletTransactionWhereUniqueInput
    create: XOR<WalletTransactionCreateWithoutWalletInput, WalletTransactionUncheckedCreateWithoutWalletInput>
  }

  export type WalletTransactionCreateManyWalletInputEnvelope = {
    data: WalletTransactionCreateManyWalletInput | WalletTransactionCreateManyWalletInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWalletInput = {
    update: XOR<UserUpdateWithoutWalletInput, UserUncheckedUpdateWithoutWalletInput>
    create: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWalletInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWalletInput, UserUncheckedUpdateWithoutWalletInput>
  }

  export type UserUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    financialRadiographies?: FinancialRadiographyUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    comment?: CommentUpdateManyWithoutUserNestedInput
    Support?: SupportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    financialRadiographies?: FinancialRadiographyUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    Support?: SupportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WalletTransactionUpsertWithWhereUniqueWithoutWalletInput = {
    where: WalletTransactionWhereUniqueInput
    update: XOR<WalletTransactionUpdateWithoutWalletInput, WalletTransactionUncheckedUpdateWithoutWalletInput>
    create: XOR<WalletTransactionCreateWithoutWalletInput, WalletTransactionUncheckedCreateWithoutWalletInput>
  }

  export type WalletTransactionUpdateWithWhereUniqueWithoutWalletInput = {
    where: WalletTransactionWhereUniqueInput
    data: XOR<WalletTransactionUpdateWithoutWalletInput, WalletTransactionUncheckedUpdateWithoutWalletInput>
  }

  export type WalletTransactionUpdateManyWithWhereWithoutWalletInput = {
    where: WalletTransactionScalarWhereInput
    data: XOR<WalletTransactionUpdateManyMutationInput, WalletTransactionUncheckedUpdateManyWithoutWalletInput>
  }

  export type WalletTransactionScalarWhereInput = {
    AND?: WalletTransactionScalarWhereInput | WalletTransactionScalarWhereInput[]
    OR?: WalletTransactionScalarWhereInput[]
    NOT?: WalletTransactionScalarWhereInput | WalletTransactionScalarWhereInput[]
    id?: StringFilter<"WalletTransaction"> | string
    walletId?: StringFilter<"WalletTransaction"> | string
    type?: EnumTransactionTypeFilter<"WalletTransaction"> | $Enums.TransactionType
    amount?: FloatFilter<"WalletTransaction"> | number
    currency?: EnumCurrencyTypeFilter<"WalletTransaction"> | $Enums.CurrencyType
    description?: StringNullableFilter<"WalletTransaction"> | string | null
    createdAt?: DateTimeFilter<"WalletTransaction"> | Date | string
  }

  export type walletCreateWithoutTransactionsInput = {
    id?: string
    balancePesos: number
    balanceDollars: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWalletInput
  }

  export type walletUncheckedCreateWithoutTransactionsInput = {
    id?: string
    userId: string
    balancePesos: number
    balanceDollars: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type walletCreateOrConnectWithoutTransactionsInput = {
    where: walletWhereUniqueInput
    create: XOR<walletCreateWithoutTransactionsInput, walletUncheckedCreateWithoutTransactionsInput>
  }

  export type walletUpsertWithoutTransactionsInput = {
    update: XOR<walletUpdateWithoutTransactionsInput, walletUncheckedUpdateWithoutTransactionsInput>
    create: XOR<walletCreateWithoutTransactionsInput, walletUncheckedCreateWithoutTransactionsInput>
    where?: walletWhereInput
  }

  export type walletUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: walletWhereInput
    data: XOR<walletUpdateWithoutTransactionsInput, walletUncheckedUpdateWithoutTransactionsInput>
  }

  export type walletUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    balancePesos?: IntFieldUpdateOperationsInput | number
    balanceDollars?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWalletNestedInput
  }

  export type walletUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    balancePesos?: IntFieldUpdateOperationsInput | number
    balanceDollars?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutSupportInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    password: string
    avatarUrl?: string | null
    role?: $Enums.UserRole | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    wallet?: walletCreateNestedManyWithoutUserInput
    financialRadiographies?: FinancialRadiographyCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSupportInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    password: string
    avatarUrl?: string | null
    role?: $Enums.UserRole | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    wallet?: walletUncheckedCreateNestedManyWithoutUserInput
    financialRadiographies?: FinancialRadiographyUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSupportInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSupportInput, UserUncheckedCreateWithoutSupportInput>
  }

  export type UserUpsertWithoutSupportInput = {
    update: XOR<UserUpdateWithoutSupportInput, UserUncheckedUpdateWithoutSupportInput>
    create: XOR<UserCreateWithoutSupportInput, UserUncheckedCreateWithoutSupportInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSupportInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSupportInput, UserUncheckedUpdateWithoutSupportInput>
  }

  export type UserUpdateWithoutSupportInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    wallet?: walletUpdateManyWithoutUserNestedInput
    financialRadiographies?: FinancialRadiographyUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    comment?: CommentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSupportInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    wallet?: walletUncheckedUpdateManyWithoutUserNestedInput
    financialRadiographies?: FinancialRadiographyUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    password: string
    avatarUrl?: string | null
    role?: $Enums.UserRole | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    wallet?: walletCreateNestedManyWithoutUserInput
    financialRadiographies?: FinancialRadiographyCreateNestedManyWithoutUserInput
    comment?: CommentCreateNestedManyWithoutUserInput
    Support?: SupportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    email: string
    firstName?: string | null
    lastName?: string | null
    password: string
    avatarUrl?: string | null
    role?: $Enums.UserRole | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isEmailVerified?: boolean
    wallet?: walletUncheckedCreateNestedManyWithoutUserInput
    financialRadiographies?: FinancialRadiographyUncheckedCreateNestedManyWithoutUserInput
    comment?: CommentUncheckedCreateNestedManyWithoutUserInput
    Support?: SupportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    wallet?: walletUpdateManyWithoutUserNestedInput
    financialRadiographies?: FinancialRadiographyUpdateManyWithoutUserNestedInput
    comment?: CommentUpdateManyWithoutUserNestedInput
    Support?: SupportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableEnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    wallet?: walletUncheckedUpdateManyWithoutUserNestedInput
    financialRadiographies?: FinancialRadiographyUncheckedUpdateManyWithoutUserNestedInput
    comment?: CommentUncheckedUpdateManyWithoutUserNestedInput
    Support?: SupportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type walletCreateManyUserInput = {
    id?: string
    balancePesos: number
    balanceDollars: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FinancialRadiographyCreateManyUserInput = {
    id?: string
    monthlyIncome?: Decimal | DecimalJsLike | number | string | null
    monthlyExpenses?: Decimal | DecimalJsLike | number | string | null
    savingCapacity?: Decimal | DecimalJsLike | number | string | null
    debts?: Decimal | DecimalJsLike | number | string | null
    savings?: Decimal | DecimalJsLike | number | string | null
  }

  export type CommentCreateManyUserInput = {
    id?: string
    content: string
    dateComment: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    newsId?: string | null
  }

  export type SupportCreateManyUserInput = {
    id?: string
    subject: string
    message: string
    status?: $Enums.Status
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type walletUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    balancePesos?: IntFieldUpdateOperationsInput | number
    balanceDollars?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: WalletTransactionUpdateManyWithoutWalletNestedInput
  }

  export type walletUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    balancePesos?: IntFieldUpdateOperationsInput | number
    balanceDollars?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: WalletTransactionUncheckedUpdateManyWithoutWalletNestedInput
  }

  export type walletUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    balancePesos?: IntFieldUpdateOperationsInput | number
    balanceDollars?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialRadiographyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthlyIncome?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monthlyExpenses?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    savingCapacity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    debts?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    savings?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type FinancialRadiographyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthlyIncome?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monthlyExpenses?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    savingCapacity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    debts?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    savings?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type FinancialRadiographyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    monthlyIncome?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    monthlyExpenses?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    savingCapacity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    debts?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    savings?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    dateComment?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateOneWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    dateComment?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    dateComment?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    newsId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SupportUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupportUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvestmentCreateManyPortfolioInput = {
    id?: string
    amountInvested: number
    performance: string
    dateInvestment: Date | string
    instrumentId: string
  }

  export type InvestmentUpdateWithoutPortfolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountInvested?: IntFieldUpdateOperationsInput | number
    performance?: StringFieldUpdateOperationsInput | string
    dateInvestment?: DateTimeFieldUpdateOperationsInput | Date | string
    instrument?: FinancialInstrumentUpdateOneRequiredWithoutInvestmentNestedInput
  }

  export type InvestmentUncheckedUpdateWithoutPortfolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountInvested?: IntFieldUpdateOperationsInput | number
    performance?: StringFieldUpdateOperationsInput | string
    dateInvestment?: DateTimeFieldUpdateOperationsInput | Date | string
    instrumentId?: StringFieldUpdateOperationsInput | string
  }

  export type InvestmentUncheckedUpdateManyWithoutPortfolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountInvested?: IntFieldUpdateOperationsInput | number
    performance?: StringFieldUpdateOperationsInput | string
    dateInvestment?: DateTimeFieldUpdateOperationsInput | Date | string
    instrumentId?: StringFieldUpdateOperationsInput | string
  }

  export type InvestmentCreateManyInstrumentInput = {
    id?: string
    amountInvested: number
    performance: string
    dateInvestment: Date | string
    portfolioId: string
  }

  export type InvestmentUpdateWithoutInstrumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountInvested?: IntFieldUpdateOperationsInput | number
    performance?: StringFieldUpdateOperationsInput | string
    dateInvestment?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolio?: InvestmentPortfolioUpdateOneRequiredWithoutInvestmentNestedInput
  }

  export type InvestmentUncheckedUpdateWithoutInstrumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountInvested?: IntFieldUpdateOperationsInput | number
    performance?: StringFieldUpdateOperationsInput | string
    dateInvestment?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolioId?: StringFieldUpdateOperationsInput | string
  }

  export type InvestmentUncheckedUpdateManyWithoutInstrumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amountInvested?: IntFieldUpdateOperationsInput | number
    performance?: StringFieldUpdateOperationsInput | string
    dateInvestment?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolioId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateManyNewsInput = {
    id?: string
    content: string
    dateComment: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type CommentUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    dateComment?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutCommentNestedInput
  }

  export type CommentUncheckedUpdateWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    dateComment?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUncheckedUpdateManyWithoutNewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    dateComment?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WalletTransactionCreateManyWalletInput = {
    id?: string
    type: $Enums.TransactionType
    amount: number
    currency: $Enums.CurrencyType
    description?: string | null
    createdAt?: Date | string
  }

  export type WalletTransactionUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletTransactionUncheckedUpdateManyWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: EnumCurrencyTypeFieldUpdateOperationsInput | $Enums.CurrencyType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}