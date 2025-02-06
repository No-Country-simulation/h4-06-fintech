/*
  Warnings:

  - You are about to drop the column `investmentPortfolioId` on the `wallet` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "wallet" DROP CONSTRAINT "wallet_investmentPortfolioId_fkey";

-- DropIndex
DROP INDEX "wallet_investmentPortfolioId_key";

-- AlterTable
ALTER TABLE "InvestmentPortfolio" ADD COLUMN     "walletId" TEXT;

-- AlterTable
ALTER TABLE "wallet" DROP COLUMN "investmentPortfolioId";

-- AddForeignKey
ALTER TABLE "InvestmentPortfolio" ADD CONSTRAINT "InvestmentPortfolio_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "wallet"("id") ON DELETE CASCADE ON UPDATE CASCADE;
