/*
  Warnings:

  - Made the column `userId` on table `Customization` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Customization" ALTER COLUMN "userId" SET NOT NULL;
