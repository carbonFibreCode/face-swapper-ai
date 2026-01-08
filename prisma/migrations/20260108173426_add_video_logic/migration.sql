/*
  Warnings:

  - The values [PROCESSING] on the enum `JobStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "JobStatus_new" AS ENUM ('QUEUED', 'COMPLETED', 'FAILED');
ALTER TABLE "public"."Generation" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Generation" ALTER COLUMN "status" TYPE "JobStatus_new" USING ("status"::text::"JobStatus_new");
ALTER TYPE "JobStatus" RENAME TO "JobStatus_old";
ALTER TYPE "JobStatus_new" RENAME TO "JobStatus";
DROP TYPE "public"."JobStatus_old";
ALTER TABLE "Generation" ALTER COLUMN "status" SET DEFAULT 'QUEUED';
COMMIT;
