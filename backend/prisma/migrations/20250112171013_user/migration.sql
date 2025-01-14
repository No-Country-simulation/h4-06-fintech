/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_userId_fkey";

-- DropForeignKey
ALTER TABLE "FinancialRadiography" DROP CONSTRAINT "FinancialRadiography_userId_fkey";

-- DropForeignKey
ALTER TABLE "InvestmentPortfolio" DROP CONSTRAINT "InvestmentPortfolio_userId_fkey";

-- DropForeignKey
ALTER TABLE "Target" DROP CONSTRAINT "Target_userId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");
