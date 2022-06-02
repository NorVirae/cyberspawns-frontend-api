/*
  Warnings:

  - The primary key for the `SpawnAddress` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `spawnId` on the `SpawnAddress` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[spawn_id]` on the table `SpawnAddress` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `spawn_id` to the `SpawnAddress` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "SpawnAddress_spawnId_key";

-- AlterTable
ALTER TABLE "SpawnAddress" DROP CONSTRAINT "SpawnAddress_pkey",
DROP COLUMN "spawnId",
ADD COLUMN     "spawn_id" TEXT NOT NULL,
ADD CONSTRAINT "SpawnAddress_pkey" PRIMARY KEY ("spawn_id");

-- CreateIndex
CREATE UNIQUE INDEX "SpawnAddress_spawn_id_key" ON "SpawnAddress"("spawn_id");
