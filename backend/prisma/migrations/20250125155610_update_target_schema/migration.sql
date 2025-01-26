/*
  Warnings:

  - You are about to drop the column `montoTarget` on the `Target` table. All the data in the column will be lost.
  - The `progress` column on the `Target` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `amount` to the `Target` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Target` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Target` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Target" DROP COLUMN "montoTarget",
ADD COLUMN     "amount" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "progress",
ADD COLUMN     "progress" DECIMAL(65,30) NOT NULL DEFAULT 0.0;

-- AddForeignKey
ALTER TABLE "Target" ADD CONSTRAINT "Target_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
