/*
  Warnings:

  - You are about to drop the `Spawn` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Spawn";

-- CreateTable
CREATE TABLE "spawn" (
    "id" TEXT NOT NULL,
    "owner_id" TEXT NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "chain" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "breed_count" INTEGER NOT NULL,
    "figures" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "token_id" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "delete_count" INTEGER NOT NULL,

    CONSTRAINT "spawn_pkey" PRIMARY KEY ("id")
);
