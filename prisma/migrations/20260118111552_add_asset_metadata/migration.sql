-- AlterTable
ALTER TABLE "Asset" ADD COLUMN     "duration" DOUBLE PRECISION,
ADD COLUMN     "name" TEXT NOT NULL DEFAULT 'Untitled Asset',
ADD COLUMN     "size" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "thumbnailUrl" TEXT;
