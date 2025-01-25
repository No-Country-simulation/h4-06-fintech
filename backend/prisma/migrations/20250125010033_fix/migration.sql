/*
  Warnings:

  - You are about to drop the column `financialGoal` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `hasDebts` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `instrumentsUsed` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `investmentHorizon` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `knowledgeLevel` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `monthlyAllocation` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `reactionToLoss` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `specificPurpose` on the `Profile` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "MainGoal" AS ENUM ('SAVE', 'INVEST', 'INCOME', 'RETIREMENT', 'OTHER');

-- CreateEnum
CREATE TYPE "FinancialSkills" AS ENUM ('BEGINNER', 'LEARNER', 'INTERMEDIATE', 'ADVANCED');

-- CreateEnum
CREATE TYPE "MonthlyInvestment" AS ENUM ('LESS_THAN_30000', 'BETWEEN_30000_50000', 'MORE_THAN_50000');

-- CreateEnum
CREATE TYPE "SavingsReason" AS ENUM ('BUY_HOUSE', 'BUY_CAR', 'PLAN_VACATION', 'PERSONAL_PROJECT', 'EDUCATION', 'NO_SPECIFIC_REASON', 'LEARNING');

-- CreateEnum
CREATE TYPE "InvestmentTimeframe" AS ENUM ('SHORT_TERM', 'MEDIUM_TERM', 'LONG_TERM');

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "financialGoal",
DROP COLUMN "hasDebts",
DROP COLUMN "instrumentsUsed",
DROP COLUMN "investmentHorizon",
DROP COLUMN "knowledgeLevel",
DROP COLUMN "monthlyAllocation",
DROP COLUMN "reactionToLoss",
DROP COLUMN "specificPurpose",
ADD COLUMN     "financialGoalNextYear" BOOLEAN DEFAULT false,
ADD COLUMN     "financialSkills" "FinancialSkills",
ADD COLUMN     "hasInvestedBefore" BOOLEAN,
ADD COLUMN     "investmentTimeframe" "InvestmentTimeframe",
ADD COLUMN     "mainGoal" "MainGoal",
ADD COLUMN     "monthlyInvestment" "MonthlyInvestment",
ADD COLUMN     "savingsOrInvestmentReason" "SavingsReason";
