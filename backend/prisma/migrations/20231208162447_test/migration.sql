/*
  Warnings:

  - You are about to drop the column `authorId` on the `tickets` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `tickets` DROP FOREIGN KEY `tickets_authorId_fkey`;

-- AlterTable
ALTER TABLE `tickets` DROP COLUMN `authorId`;
