-- CreateTable
CREATE TABLE "Spawn" (
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

    CONSTRAINT "Spawn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpawnSkill" (
    "id" SERIAL NOT NULL,
    "spawn_id" TEXT NOT NULL,
    "skill1" TEXT NOT NULL,
    "skill2" TEXT NOT NULL,
    "skill3" TEXT NOT NULL,

    CONSTRAINT "SpawnSkill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpawnAddress" (
    "spawnId" TEXT NOT NULL,
    "metadata" TEXT NOT NULL,
    "imageAtlas" TEXT NOT NULL,
    "atlas" TEXT NOT NULL,
    "imageAddress" TEXT NOT NULL,

    CONSTRAINT "SpawnAddress_pkey" PRIMARY KEY ("spawnId")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" TEXT NOT NULL,
    "imageAddress" TEXT NOT NULL,
    "metaDataAddress" TEXT NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpawnParts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imageAddress" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "level" INTEGER NOT NULL,

    CONSTRAINT "SpawnParts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BattleInfo" (
    "spawn_id" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "battles_won" INTEGER NOT NULL,
    "battles_lost" INTEGER NOT NULL,

    CONSTRAINT "BattleInfo_pkey" PRIMARY KEY ("spawn_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SpawnAddress_spawnId_key" ON "SpawnAddress"("spawnId");

-- CreateIndex
CREATE UNIQUE INDEX "SpawnParts_id_key" ON "SpawnParts"("id");

-- CreateIndex
CREATE UNIQUE INDEX "BattleInfo_spawn_id_key" ON "BattleInfo"("spawn_id");
