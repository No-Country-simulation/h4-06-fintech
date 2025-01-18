-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "financialGoal" "FinancialGoal",
ADD COLUMN     "hasDebts" BOOLEAN,
ADD COLUMN     "instrumentsUsed" TEXT[],
ADD COLUMN     "investmentHorizon" "InvestmentHorizon",
ADD COLUMN     "knowledgeLevel" "KnowledgeLevel",
ADD COLUMN     "monthlyAllocation" DOUBLE PRECISION,
ADD COLUMN     "reactionToLoss" "ReactionToLoss",
ADD COLUMN     "riskTolerance" "RiskTolerance";
