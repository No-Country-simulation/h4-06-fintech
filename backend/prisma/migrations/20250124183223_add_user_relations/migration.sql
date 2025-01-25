-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "riskTolerance" DROP NOT NULL,
ALTER COLUMN "financialGoalNextYear" DROP NOT NULL,
ALTER COLUMN "financialGoalNextYear" SET DEFAULT false,
ALTER COLUMN "financialSkills" DROP NOT NULL,
ALTER COLUMN "hasInvestedBefore" DROP NOT NULL,
ALTER COLUMN "investmentTimeframe" DROP NOT NULL,
ALTER COLUMN "mainGoal" DROP NOT NULL,
ALTER COLUMN "monthlyInvestment" DROP NOT NULL,
ALTER COLUMN "savingsOrInvestmentReason" DROP NOT NULL;
