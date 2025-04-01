import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const id = req.url.split("/").pop();
  const product = await prisma.product.findFirst({
    where: {
      id,
    },
    include: {
      LikeItem: true,
    },
  });
  if (!product) {
    return NextResponse.json({ error: "Product not found", status: 400 });
  }
  return NextResponse.json({ message: product });
};
