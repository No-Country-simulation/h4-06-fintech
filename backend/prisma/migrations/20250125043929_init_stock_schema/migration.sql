/*
  Warnings:

  - The primary key for the `Dividend` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Earnings` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Price` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Stock` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `marketCap` on the `Stock` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - The primary key for the `Volume` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Week52` table will be changed. If it partially fails, the table could be left without primary key constraint.

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
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Dividend_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Dividend_id_seq";

-- AlterTable
ALTER TABLE "Earnings" DROP CONSTRAINT "Earnings_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Earnings_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Earnings_id_seq";

-- AlterTable
ALTER TABLE "Price" DROP CONSTRAINT "Price_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Price_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Price_id_seq";

-- AlterTable
ALTER TABLE "Stock" DROP CONSTRAINT "Stock_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "priceId" SET DATA TYPE TEXT,
ALTER COLUMN "volumeId" SET DATA TYPE TEXT,
ALTER COLUMN "week52Id" SET DATA TYPE TEXT,
ALTER COLUMN "dividendId" SET DATA TYPE TEXT,
ALTER COLUMN "earningsId" SET DATA TYPE TEXT,
ALTER COLUMN "marketCap" SET DATA TYPE INTEGER,
ADD CONSTRAINT "Stock_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Stock_id_seq";

-- AlterTable
ALTER TABLE "Volume" DROP CONSTRAINT "Volume_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Volume_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Volume_id_seq";

-- AlterTable
ALTER TABLE "Week52" DROP CONSTRAINT "Week52_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Week52_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Week52_id_seq";

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
