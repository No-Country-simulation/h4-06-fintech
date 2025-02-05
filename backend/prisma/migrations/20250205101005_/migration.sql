/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `InvestmentPortfolio` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "InvestmentPortfolio_userId_key" ON "InvestmentPortfolio"("userId");
