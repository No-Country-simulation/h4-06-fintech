/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "RdiografiaFinanciera" (
    "id" TEXT NOT NULL,
    "ingresosMensuales" INTEGER NOT NULL,
    "gastosMensuales" INTEGER NOT NULL,
    "deudas" INTEGER NOT NULL,
    "ahorros" INTEGER NOT NULL,
    "capitalFinanciado" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,

    CONSTRAINT "RdiografiaFinanciera_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PortafolioDeInversion" (
    "id" TEXT NOT NULL,
    "perfilRiesgo" TEXT NOT NULL,
    "rendimientoActual" TEXT NOT NULL,
    "moneda" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,

    CONSTRAINT "PortafolioDeInversion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InstrumentoFinanciero" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "rendimiento" TEXT NOT NULL,
    "nivelRiesgo" TEXT NOT NULL,
    "plazo" TEXT NOT NULL,

    CONSTRAINT "InstrumentoFinanciero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Inversion" (
    "id" TEXT NOT NULL,
    "montoInvertido" INTEGER NOT NULL,
    "rendimiento" TEXT NOT NULL,
    "fechaInversion" TIMESTAMP(3) NOT NULL,
    "portafolioId" TEXT NOT NULL,
    "instrumentoId" TEXT NOT NULL,

    CONSTRAINT "Inversion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Noticia" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "contenido" TEXT NOT NULL,
    "fuente" TEXT NOT NULL,
    "fechaNoticia" TIMESTAMP(3) NOT NULL,
    "categoria" TEXT NOT NULL,

    CONSTRAINT "Noticia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comentario" (
    "id" TEXT NOT NULL,
    "contenido" TEXT NOT NULL,
    "fechaComentario" TIMESTAMP(3) NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "noticiaId" TEXT NOT NULL,

    CONSTRAINT "Comentario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "wallet" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "saldoPesos" INTEGER NOT NULL,
    "saldoDolares" INTEGER NOT NULL,

    CONSTRAINT "wallet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Administrador" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rol" TEXT NOT NULL,

    CONSTRAINT "Administrador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Soporte" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "asunto" TEXT NOT NULL,
    "mensaje" TEXT NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "Soporte_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Administrador_email_key" ON "Administrador"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "RdiografiaFinanciera" ADD CONSTRAINT "RdiografiaFinanciera_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PortafolioDeInversion" ADD CONSTRAINT "PortafolioDeInversion_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inversion" ADD CONSTRAINT "Inversion_portafolioId_fkey" FOREIGN KEY ("portafolioId") REFERENCES "PortafolioDeInversion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inversion" ADD CONSTRAINT "Inversion_instrumentoId_fkey" FOREIGN KEY ("instrumentoId") REFERENCES "InstrumentoFinanciero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentario" ADD CONSTRAINT "Comentario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentario" ADD CONSTRAINT "Comentario_noticiaId_fkey" FOREIGN KEY ("noticiaId") REFERENCES "Noticia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wallet" ADD CONSTRAINT "wallet_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Soporte" ADD CONSTRAINT "Soporte_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
