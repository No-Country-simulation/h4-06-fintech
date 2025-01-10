/*
  Warnings:

  - You are about to drop the column `nombre` on the `Administrador` table. All the data in the column will be lost.
  - You are about to drop the column `saldoDolares` on the `wallet` table. All the data in the column will be lost.
  - You are about to drop the column `saldoPesos` on the `wallet` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioId` on the `wallet` table. All the data in the column will be lost.
  - You are about to drop the `Comentario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `InstrumentoFinanciero` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Inversion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Noticia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Objetivo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PortafolioDeInversion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RdiografiaFinanciera` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Soporte` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `Administrador` table without a default value. This is not possible if the table is not empty.
  - Added the required column `balanceDollars` to the `wallet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `balancePesos` to the `wallet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `wallet` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comentario" DROP CONSTRAINT "Comentario_noticiaId_fkey";

-- DropForeignKey
ALTER TABLE "Comentario" DROP CONSTRAINT "Comentario_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Inversion" DROP CONSTRAINT "Inversion_instrumentoId_fkey";

-- DropForeignKey
ALTER TABLE "Inversion" DROP CONSTRAINT "Inversion_portafolioId_fkey";

-- DropForeignKey
ALTER TABLE "Objetivo" DROP CONSTRAINT "Objetivo_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "PortafolioDeInversion" DROP CONSTRAINT "PortafolioDeInversion_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "RdiografiaFinanciera" DROP CONSTRAINT "RdiografiaFinanciera_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Soporte" DROP CONSTRAINT "Soporte_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "wallet" DROP CONSTRAINT "wallet_usuarioId_fkey";

-- AlterTable
ALTER TABLE "Administrador" DROP COLUMN "nombre",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "wallet" DROP COLUMN "saldoDolares",
DROP COLUMN "saldoPesos",
DROP COLUMN "usuarioId",
ADD COLUMN     "balanceDollars" INTEGER NOT NULL,
ADD COLUMN     "balancePesos" INTEGER NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Comentario";

-- DropTable
DROP TABLE "InstrumentoFinanciero";

-- DropTable
DROP TABLE "Inversion";

-- DropTable
DROP TABLE "Noticia";

-- DropTable
DROP TABLE "Objetivo";

-- DropTable
DROP TABLE "PortafolioDeInversion";

-- DropTable
DROP TABLE "RdiografiaFinanciera";

-- DropTable
DROP TABLE "Soporte";

-- DropTable
DROP TABLE "Usuario";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "educationLevel" TEXT NOT NULL,
    "levelKnowledgeFinancial" TEXT NOT NULL,
    "riskPreferences" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Target" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "progress" TEXT NOT NULL,
    "montoTarget" INTEGER NOT NULL,
    "dateTarget" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Target_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinancialRadiography" (
    "id" TEXT NOT NULL,
    "incomeMonthly" INTEGER NOT NULL,
    "expensesMonthly" INTEGER NOT NULL,
    "debts" INTEGER NOT NULL,
    "savings" INTEGER NOT NULL,
    "capitalFinanced" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "FinancialRadiography_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InvestmentPortfolio" (
    "id" TEXT NOT NULL,
    "profileRisk" TEXT NOT NULL,
    "performanceCurrent" TEXT NOT NULL,
    "coin" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "InvestmentPortfolio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinancialInstrument" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "typw" TEXT NOT NULL,
    "performance" TEXT NOT NULL,
    "levelRisk" TEXT NOT NULL,
    "deadline" TEXT NOT NULL,

    CONSTRAINT "FinancialInstrument_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Investment" (
    "id" TEXT NOT NULL,
    "amountInvested" INTEGER NOT NULL,
    "performance" TEXT NOT NULL,
    "dateInvestment" TIMESTAMP(3) NOT NULL,
    "portfolioId" TEXT NOT NULL,
    "instrumentId" TEXT NOT NULL,

    CONSTRAINT "Investment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "News" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "dateNews" TIMESTAMP(3) NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "dateComment" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "newsId" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Support" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "state" TEXT NOT NULL,

    CONSTRAINT "Support_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Target" ADD CONSTRAINT "Target_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FinancialRadiography" ADD CONSTRAINT "FinancialRadiography_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InvestmentPortfolio" ADD CONSTRAINT "InvestmentPortfolio_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Investment" ADD CONSTRAINT "Investment_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "InvestmentPortfolio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Investment" ADD CONSTRAINT "Investment_instrumentId_fkey" FOREIGN KEY ("instrumentId") REFERENCES "FinancialInstrument"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "News"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wallet" ADD CONSTRAINT "wallet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Support" ADD CONSTRAINT "Support_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
