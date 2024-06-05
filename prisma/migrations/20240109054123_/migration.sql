/*
  Warnings:

  - You are about to drop the `UserCollects` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserHistory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserLikes` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "ActivityType" AS ENUM ('LIKE', 'COLLECT', 'HISTORY');

-- DropForeignKey
ALTER TABLE "UserCollects" DROP CONSTRAINT "UserCollects_appId_fkey";

-- DropForeignKey
ALTER TABLE "UserCollects" DROP CONSTRAINT "UserCollects_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserHistory" DROP CONSTRAINT "UserHistory_appId_fkey";

-- DropForeignKey
ALTER TABLE "UserHistory" DROP CONSTRAINT "UserHistory_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserLikes" DROP CONSTRAINT "UserLikes_appId_fkey";

-- DropForeignKey
ALTER TABLE "UserLikes" DROP CONSTRAINT "UserLikes_userId_fkey";

-- DropTable
DROP TABLE "UserCollects";

-- DropTable
DROP TABLE "UserHistory";

-- DropTable
DROP TABLE "UserLikes";

-- CreateTable
CREATE TABLE "UserActivity" (
    "userId" TEXT NOT NULL,
    "appId" INTEGER NOT NULL,
    "type" "ActivityType" NOT NULL,

    CONSTRAINT "UserActivity_pkey" PRIMARY KEY ("userId","appId","type")
);

-- AddForeignKey
ALTER TABLE "UserActivity" ADD CONSTRAINT "UserActivity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserActivity" ADD CONSTRAINT "UserActivity_appId_fkey" FOREIGN KEY ("appId") REFERENCES "App"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
