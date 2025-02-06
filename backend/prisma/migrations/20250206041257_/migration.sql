/*
  Warnings:

  - A unique constraint covering the columns `[walletId]` on the table `InvestmentPortfolio` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "InvestmentPortfolio_walletId_key" ON "InvestmentPortfolio"("walletId");
