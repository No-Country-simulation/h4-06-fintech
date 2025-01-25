-- AlterTable
ALTER TABLE "Dividend" ALTER COLUMN "rate" DROP NOT NULL,
ALTER COLUMN "yield" DROP NOT NULL,
ALTER COLUMN "date" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Earnings" ALTER COLUMN "nextDate" DROP NOT NULL,
ALTER COLUMN "epsTrailing12Months" DROP NOT NULL,
ALTER COLUMN "epsForward" DROP NOT NULL,
ALTER COLUMN "peRatio" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Price" ALTER COLUMN "current" DROP NOT NULL,
ALTER COLUMN "changePercent" DROP NOT NULL,
ALTER COLUMN "open" DROP NOT NULL,
ALTER COLUMN "dayLow" DROP NOT NULL,
ALTER COLUMN "dayHigh" DROP NOT NULL,
ALTER COLUMN "previousClose" DROP NOT NULL,
ALTER COLUMN "postMarketPrice" DROP NOT NULL,
ALTER COLUMN "postMarketChange" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Volume" ALTER COLUMN "current" DROP NOT NULL,
ALTER COLUMN "average3Months" DROP NOT NULL,
ALTER COLUMN "average10Days" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Week52" ALTER COLUMN "high" DROP NOT NULL,
ALTER COLUMN "low" DROP NOT NULL,
ALTER COLUMN "changeFromHigh" DROP NOT NULL,
ALTER COLUMN "changeFromLow" DROP NOT NULL;
