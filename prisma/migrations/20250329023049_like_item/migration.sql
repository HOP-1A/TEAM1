-- CreateTable
CREATE TABLE "LikeItem" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "usersId" TEXT NOT NULL,

    CONSTRAINT "LikeItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "LikeItem" ADD CONSTRAINT "LikeItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LikeItem" ADD CONSTRAINT "LikeItem_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
