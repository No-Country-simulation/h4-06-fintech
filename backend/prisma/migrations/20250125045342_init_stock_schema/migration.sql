/*
  Warnings:

  - The primary key for the `Dividend` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Dividend` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Earnings` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Earnings` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Price` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Price` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Stock` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Stock` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `marketCap` on the `Stock` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `Volume` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Volume` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Week52` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Week52` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `priceId` on the `Stock` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `volumeId` on the `Stock` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `week52Id` on the `Stock` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `dividendId` on the `Stock` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `earningsId` on the `Stock` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Stock" DROP CONSTRAINT "Stock_dividendId_fkey";

-- DropForeignKey
ALTER TABLE "Stock" DROP CONSTRAINT "Stock_earningsId_fkey";

-- DropForeignKey
ALTER TABLE "Stock" DROP CONSTRAINT "Stock_priceId_fkey";

-- DropForeignKey
ALTER TABLE "Stock" DROP CONSTRAINT "Stock_volumeId_fkey";

-- DropForeignKey
ALTER TABLE "Stock" DROP CONSTRAINT "Stock_week52Id_fkey";

-- AlterTable
ALTER TABLE "Dividend" DROP CONSTRAINT "Dividend_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Dividend_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Earnings" DROP CONSTRAINT "Earnings_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Earnings_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Price" DROP CONSTRAINT "Price_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Price_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Stock" DROP CONSTRAINT "Stock_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "priceId",
ADD COLUMN     "priceId" INTEGER NOT NULL,
DROP COLUMN "volumeId",
ADD COLUMN     "volumeId" INTEGER NOT NULL,
DROP COLUMN "week52Id",
ADD COLUMN     "week52Id" INTEGER NOT NULL,
DROP COLUMN "dividendId",
ADD COLUMN     "dividendId" INTEGER NOT NULL,
DROP COLUMN "earningsId",
ADD COLUMN     "earningsId" INTEGER NOT NULL,
ALTER COLUMN "marketCap" SET DATA TYPE INTEGER,
ADD CONSTRAINT "Stock_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Volume" DROP CONSTRAINT "Volume_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Volume_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Week52" DROP CONSTRAINT "Week52_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Week52_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Stock" ADD CONSTRAINT "Stock_priceId_fkey" FOREIGN KEY ("priceId") REFERENCES "Price"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stock" ADD CONSTRAINT "Stock_volumeId_fkey" FOREIGN KEY ("volumeId") REFERENCES "Volume"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stock" ADD CONSTRAINT "Stock_week52Id_fkey" FOREIGN KEY ("week52Id") REFERENCES "Week52"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stock" ADD CONSTRAINT "Stock_dividendId_fkey" FOREIGN KEY ("dividendId") REFERENCES "Dividend"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stock" ADD CONSTRAINT "Stock_earningsId_fkey" FOREIGN KEY ("earningsId") REFERENCES "Earnings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
