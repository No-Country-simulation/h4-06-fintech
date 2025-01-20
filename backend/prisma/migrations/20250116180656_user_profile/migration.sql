/*
  Warnings:

  - You are about to drop the column `financialGoal` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `investmentHorizon` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `knowledgeLevel` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `reactionToLoss` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `riskTolerance` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "financialGoal",
DROP COLUMN "investmentHorizon",
DROP COLUMN "knowledgeLevel",
DROP COLUMN "reactionToLoss",
DROP COLUMN "riskTolerance";
