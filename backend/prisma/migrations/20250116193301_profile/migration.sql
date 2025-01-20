-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "financialGoal" "FinancialGoal",
ADD COLUMN     "investmentHorizon" "InvestmentHorizon",
ADD COLUMN     "knowledgeLevel" "KnowledgeLevel",
ADD COLUMN     "reactionToLoss" "ReactionToLoss",
ADD COLUMN     "riskTolerance" "RiskTolerance",
ALTER COLUMN "hasDebts" DROP NOT NULL;
