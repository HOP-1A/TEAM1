import Product from "@/components/product";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type like = {
  id: string;
  productId: string;
  updatedAt: Date;
  createdAt: Date;
  usersId: string;
};

export const POST = async (req: Request) => {
  try {
    const body: like = await req.json();

    const userLike = await prisma.likeItem.findFirst({
      where: {
        productId: body.productId,
        usersId: body.usersId,
      },
    });

    if (!userLike) {
      await prisma.likeItem.create({
        data: {
          productId: body.productId,
          usersId: body.usersId,
        },
      });
    } else {
      await prisma.likeItem.delete({
        where: { id: userLike.id },
      });
    }

    return NextResponse.json({ message: "success" });
  } catch (err) {
    return NextResponse.json({ message: err });
  }
};
