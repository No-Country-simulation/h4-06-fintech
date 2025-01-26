/*
  Warnings:

  - You are about to drop the column `financialGoalNextYear` on the `Profile` table. All the data in the column will be lost.
  - You are about to drop the column `investmentTimeframe` on the `Profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "financialGoalNextYear",
DROP COLUMN "investmentTimeframe",
ADD COLUMN     "financialGoal" TEXT,
ADD COLUMN     "investmentHorizon" TEXT;
