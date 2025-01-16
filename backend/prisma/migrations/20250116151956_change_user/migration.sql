/*
  Warnings:

  - You are about to drop the column `age` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `educationLevel` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `levelKnowledgeFinancial` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `riskPreferences` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "age",
DROP COLUMN "educationLevel",
DROP COLUMN "isActive",
DROP COLUMN "levelKnowledgeFinancial",
DROP COLUMN "riskPreferences";
