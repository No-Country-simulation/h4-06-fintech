/*
  Warnings:

  - You are about to drop the column `typw` on the `FinancialInstrument` table. All the data in the column will be lost.
  - Added the required column `category` to the `FinancialInstrument` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currency` to the `FinancialInstrument` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `FinancialInstrument` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `performance` on the `FinancialInstrument` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `levelRisk` on the `FinancialInstrument` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `deadline` on the `FinancialInstrument` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `profileRisk` on the `InvestmentPortfolio` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `performanceCurrent` on the `InvestmentPortfolio` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('DEPOSIT', 'WITHDRAWAL', 'TRANSFER');

-- CreateEnum
CREATE TYPE "CurrencyType" AS ENUM ('PESOS', 'DOLLARS');

-- AlterTable
ALTER TABLE "FinancialInstrument" DROP COLUMN "typw",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "currency" "CurrencyType" NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL,
DROP COLUMN "performance",
ADD COLUMN     "performance" DOUBLE PRECISION NOT NULL,
DROP COLUMN "levelRisk",
ADD COLUMN     "levelRisk" INTEGER NOT NULL,
DROP COLUMN "deadline",
ADD COLUMN     "deadline" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "InvestmentPortfolio" DROP COLUMN "profileRisk",
ADD COLUMN     "profileRisk" INTEGER NOT NULL,
DROP COLUMN "performanceCurrent",
ADD COLUMN     "performanceCurrent" DOUBLE PRECISION NOT NULL;

-- CreateTable
CREATE TABLE "WalletTransaction" (
    "id" TEXT NOT NULL,
    "walletId" TEXT NOT NULL,
    "type" "TransactionType" NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" "CurrencyType" NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WalletTransaction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WalletTransaction" ADD CONSTRAINT "WalletTransaction_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "wallet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
