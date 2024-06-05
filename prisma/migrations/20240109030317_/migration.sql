/*
  Warnings:

  - You are about to drop the `Collect` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Dislike` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Like` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Collect" DROP CONSTRAINT "Collect_userID_fkey";

-- DropForeignKey
ALTER TABLE "Dislike" DROP CONSTRAINT "Dislike_userID_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_userID_fkey";

-- DropTable
DROP TABLE "Collect";

-- DropTable
DROP TABLE "Dislike";

-- DropTable
DROP TABLE "Like";

-- CreateTable
CREATE TABLE "UserLikes" (
    "userId" TEXT NOT NULL,
    "appId" INTEGER NOT NULL,

    CONSTRAINT "UserLikes_pkey" PRIMARY KEY ("userId","appId")
);

-- CreateTable
CREATE TABLE "UserCollects" (
    "userId" TEXT NOT NULL,
    "appId" INTEGER NOT NULL,

    CONSTRAINT "UserCollects_pkey" PRIMARY KEY ("userId","appId")
);

-- CreateTable
CREATE TABLE "UserHistory" (
    "userId" TEXT NOT NULL,
    "appId" INTEGER NOT NULL,

    CONSTRAINT "UserHistory_pkey" PRIMARY KEY ("userId","appId")
);

-- AddForeignKey
ALTER TABLE "UserLikes" ADD CONSTRAINT "UserLikes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLikes" ADD CONSTRAINT "UserLikes_appId_fkey" FOREIGN KEY ("appId") REFERENCES "App"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCollects" ADD CONSTRAINT "UserCollects_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCollects" ADD CONSTRAINT "UserCollects_appId_fkey" FOREIGN KEY ("appId") REFERENCES "App"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserHistory" ADD CONSTRAINT "UserHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserHistory" ADD CONSTRAINT "UserHistory_appId_fkey" FOREIGN KEY ("appId") REFERENCES "App"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
