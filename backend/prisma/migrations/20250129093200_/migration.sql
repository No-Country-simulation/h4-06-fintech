/*
  Warnings:

  - Added the required column `typeDisp` to the `Stock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Stock" ADD COLUMN     "typeDisp" TEXT NOT NULL;
