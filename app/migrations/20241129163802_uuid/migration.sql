/*
  Warnings:

  - The primary key for the `Info` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Logs` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Info" DROP CONSTRAINT "Info_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Info_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Info_id_seq";

-- AlterTable
ALTER TABLE "Logs" DROP CONSTRAINT "Logs_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Logs_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Logs_id_seq";
