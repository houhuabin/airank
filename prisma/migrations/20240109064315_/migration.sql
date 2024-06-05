/*
  Warnings:

  - Changed the type of `name` on the `Platform` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "PlatformType" AS ENUM ('Website', 'API', 'GPT', 'IOS', 'Android', 'Windows', 'MAC', 'Linux', 'ChromeExtension');

-- AlterTable
ALTER TABLE "Platform" DROP COLUMN "name",
ADD COLUMN     "name" "PlatformType" NOT NULL;

-- DropEnum
DROP TYPE "Plat";

-- CreateIndex
CREATE UNIQUE INDEX "Platform_name_key" ON "Platform"("name");
