/*
  Warnings:

  - You are about to drop the column `capitalFinanced` on the `FinancialRadiography` table. All the data in the column will be lost.
  - You are about to drop the column `expensesMonthly` on the `FinancialRadiography` table. All the data in the column will be lost.
  - You are about to drop the column `incomeMonthly` on the `FinancialRadiography` table. All the data in the column will be lost.
  - You are about to alter the column `debts` on the `FinancialRadiography` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(10,2)`.
  - You are about to alter the column `savings` on the `FinancialRadiography` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(10,2)`.
  - Added the required column `monthlyExpenses` to the `FinancialRadiography` table without a default value. This is not possible if the table is not empty.
  - Added the required column `monthlyIncome` to the `FinancialRadiography` table without a default value. This is not possible if the table is not empty.
  - Added the required column `savingCapacity` to the `FinancialRadiography` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FinancialRadiography" DROP COLUMN "capitalFinanced",
DROP COLUMN "expensesMonthly",
DROP COLUMN "incomeMonthly",
ADD COLUMN     "monthlyExpenses" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "monthlyIncome" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "savingCapacity" DECIMAL(10,2) NOT NULL,
ALTER COLUMN "debts" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "savings" SET DATA TYPE DECIMAL(10,2);

-- AddForeignKey
ALTER TABLE "FinancialRadiography" ADD CONSTRAINT "FinancialRadiography_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
