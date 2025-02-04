/*
  Warnings:

  - You are about to drop the `FinancialRadiography` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FinancialRadiography" DROP CONSTRAINT "FinancialRadiography_userId_fkey";

-- DropTable
DROP TABLE "FinancialRadiography";

-- CreateTable
CREATE TABLE "FinancialRadiograp" (
    "id" TEXT NOT NULL,
    "monthlyIncome" DECIMAL(10,2),
    "monthlyExpenses" DECIMAL(10,2),
    "savingCapacity" DECIMAL(10,2),
    "debts" DECIMAL(10,2),
    "savings" DECIMAL(10,2),
    "userId" TEXT,

    CONSTRAINT "FinancialRadiograp_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FinancialRadiograp_userId_key" ON "FinancialRadiograp"("userId");

-- AddForeignKey
ALTER TABLE "FinancialRadiograp" ADD CONSTRAINT "FinancialRadiograp_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
