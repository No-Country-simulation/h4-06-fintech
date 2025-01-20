-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('DEPOSIT', 'WITHDRAWAL', 'TRANSFER');

-- CreateEnum
CREATE TYPE "CurrencyType" AS ENUM ('PESOS', 'DOLLARS');

-- CreateEnum
CREATE TYPE "FinancialGoal" AS ENUM ('SAVINGS', 'INVESTMENT', 'RETIREMENT', 'EDUCATION', 'EMERGENCY_FUND', 'PASSIVE_INCOME', 'OTHER');

-- CreateEnum
CREATE TYPE "InvestmentHorizon" AS ENUM ('SHORT_TERM', 'MEDIUM_TERM', 'LONG_TERM');

-- CreateEnum
CREATE TYPE "KnowledgeLevel" AS ENUM ('BASIC', 'INTERMEDIATE', 'ADVANCED');

-- CreateEnum
CREATE TYPE "RiskTolerance" AS ENUM ('CONSERVATIVE', 'MODERATE', 'AGGRESSIVE');

-- CreateEnum
CREATE TYPE "ReactionToLoss" AS ENUM ('WITHDRAW_IMMEDIATELY', 'WAIT_RECOVERY', 'INVEST_MORE');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "password" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "role" TEXT DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Target" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "progress" TEXT NOT NULL,
    "montoTarget" INTEGER NOT NULL,
    "dateTarget" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Target_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinancialRadiography" (
    "id" TEXT NOT NULL,
    "incomeMonthly" INTEGER NOT NULL,
    "expensesMonthly" INTEGER NOT NULL,
    "debts" INTEGER NOT NULL,
    "savings" INTEGER NOT NULL,
    "capitalFinanced" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "FinancialRadiography_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvestmentPortfolio" (
    "id" TEXT NOT NULL,
    "profileRisk" INTEGER NOT NULL,
    "performanceCurrent" DOUBLE PRECISION NOT NULL,
    "coin" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "InvestmentPortfolio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinancialInstrument" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "performance" DOUBLE PRECISION NOT NULL,
    "levelRisk" INTEGER NOT NULL,
    "deadline" INTEGER NOT NULL,
    "currency" "CurrencyType" NOT NULL,

    CONSTRAINT "FinancialInstrument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Investment" (
    "id" TEXT NOT NULL,
    "amountInvested" INTEGER NOT NULL,
    "performance" TEXT NOT NULL,
    "dateInvestment" TIMESTAMP(3) NOT NULL,
    "portfolioId" TEXT NOT NULL,
    "instrumentId" TEXT NOT NULL,

    CONSTRAINT "Investment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "News" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "dateNews" TIMESTAMP(3) NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "dateComment" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "newsId" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wallet" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "balancePesos" INTEGER NOT NULL,
    "balanceDollars" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "wallet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WalletTransaction" (
    "id" TEXT NOT NULL,
    "walletId" TEXT NOT NULL,
    "type" "TransactionType" NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" "CurrencyType" NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WalletTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Administrador" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rol" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Administrador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Support" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "state" TEXT NOT NULL,

    CONSTRAINT "Support_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "financialGoal" "FinancialGoal",
    "investmentHorizon" "InvestmentHorizon",
    "knowledgeLevel" "KnowledgeLevel",
    "riskTolerance" "RiskTolerance",
    "monthlyAllocation" DOUBLE PRECISION,
    "specificPurpose" TEXT,
    "instrumentsUsed" TEXT[],
    "hasDebts" BOOLEAN,
    "reactionToLoss" "ReactionToLoss",
    "userId" TEXT NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Administrador_email_key" ON "Administrador"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- AddForeignKey
ALTER TABLE "Investment" ADD CONSTRAINT "Investment_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "FinancialInstrument"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Investment" ADD CONSTRAINT "Investment_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "InvestmentPortfolio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "News"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wallet" ADD CONSTRAINT "wallet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WalletTransaction" ADD CONSTRAINT "WalletTransaction_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "wallet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
