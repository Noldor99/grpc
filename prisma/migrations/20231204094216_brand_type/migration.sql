-- DropForeignKey
ALTER TABLE "Device" DROP CONSTRAINT "Device_brandId_fkey";

-- DropForeignKey
ALTER TABLE "Device" DROP CONSTRAINT "Device_typeId_fkey";

-- AlterTable
ALTER TABLE "Device" ALTER COLUMN "brandId" DROP NOT NULL,
ALTER COLUMN "brandId" DROP DEFAULT,
ALTER COLUMN "typeId" DROP NOT NULL,
ALTER COLUMN "typeId" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "Brand"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;
