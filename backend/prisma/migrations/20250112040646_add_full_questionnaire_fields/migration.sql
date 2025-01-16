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
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "financialGoal" "FinancialGoal" NOT NULL,
    "investmentHorizon" "InvestmentHorizon" NOT NULL,
    "knowledgeLevel" "KnowledgeLevel" NOT NULL,
    "riskTolerance" "RiskTolerance" NOT NULL,
    "monthlyAllocation" DOUBLE PRECISION,
    "specificPurpose" TEXT,
    "instrumentsUsed" TEXT[],
    "hasDebts" BOOLEAN NOT NULL,
    "reactionToLoss" "ReactionToLoss" NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
