-- AlterTable
ALTER TABLE "Spawn" ALTER COLUMN "birth_date" DROP NOT NULL,
ALTER COLUMN "birth_date" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "price" DROP NOT NULL,
ALTER COLUMN "delete_count" DROP NOT NULL;