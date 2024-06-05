/*
  Warnings:

  - The primary key for the `UserActivity` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `type` on the `UserActivity` table. All the data in the column will be lost.
  - Added the required column `activityType` to the `UserActivity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserActivity" DROP CONSTRAINT "UserActivity_pkey",
DROP COLUMN "type",
ADD COLUMN     "activityType" "ActivityType" NOT NULL,
ADD CONSTRAINT "UserActivity_pkey" PRIMARY KEY ("userId", "appId", "activityType");
