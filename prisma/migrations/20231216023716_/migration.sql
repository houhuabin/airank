/*
  Warnings:

  - You are about to drop the column `email` on the `product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Product_email_key` ON `product`;

-- AlterTable
ALTER TABLE `product` DROP COLUMN `email`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Product_name_key` ON `Product`(`name`);
