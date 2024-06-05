/*
  Warnings:

  - You are about to drop the column `icons` on the `App` table. All the data in the column will be lost.
  - You are about to drop the column `images` on the `App` table. All the data in the column will be lost.
  - Added the required column `icon` to the `App` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `App` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "App" DROP COLUMN "icons",
DROP COLUMN "images",
ADD COLUMN     "icon" VARCHAR(255) NOT NULL,
ADD COLUMN     "image" VARCHAR(255) NOT NULL;
