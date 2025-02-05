/*
  Warnings:

  - You are about to drop the column `fecha_creacion` on the `InvestmentPortfolio` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Customization" ALTER COLUMN "userId" DROP NOT NULL,
ALTER COLUMN "categories" DROP NOT NULL,
ALTER COLUMN "strategy" DROP NOT NULL,
ALTER COLUMN "method" DROP NOT NULL,
ALTER COLUMN "newsSource" DROP NOT NULL,
ALTER COLUMN "instrument" DROP NOT NULL,
ALTER COLUMN "age" DROP NOT NULL,
ALTER COLUMN "age" SET DATA TYPE TEXT,
ALTER COLUMN "investingYears" DROP NOT NULL,
ALTER COLUMN "investingYears" SET DATA TYPE TEXT,
ALTER COLUMN "goal" DROP NOT NULL,
ALTER COLUMN "monthlyAmount" DROP NOT NULL,
ALTER COLUMN "incomeSource" DROP NOT NULL;

-- AlterTable
ALTER TABLE "InvestmentPortfolio" DROP COLUMN "fecha_creacion",
ALTER COLUMN "name" DROP NOT NULL;
