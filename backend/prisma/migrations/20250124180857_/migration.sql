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
  - Added the required column `financialGoalNextYear` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `financialSkills` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hasInvestedBefore` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `investmentTimeframe` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mainGoal` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `monthlyInvestment` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `savingsOrInvestmentReason` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Made the column `riskTolerance` on table `Profile` required. This step will fail if there are existing NULL values in that column.

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
ADD COLUMN     "financialGoalNextYear" BOOLEAN NOT NULL,
ADD COLUMN     "financialSkills" "FinancialSkills" NOT NULL,
ADD COLUMN     "hasInvestedBefore" BOOLEAN NOT NULL,
ADD COLUMN     "investmentTimeframe" "InvestmentTimeframe" NOT NULL,
ADD COLUMN     "mainGoal" "MainGoal" NOT NULL,
ADD COLUMN     "monthlyInvestment" "MonthlyInvestment" NOT NULL,
ADD COLUMN     "savingsOrInvestmentReason" "SavingsReason" NOT NULL,
ALTER COLUMN "riskTolerance" SET NOT NULL;
