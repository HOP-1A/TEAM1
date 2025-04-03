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

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const userId = url.searchParams.get("userId");

  if (!userId) {
    throw new Error("Please sign in");
  }
  const likedProducts = await prisma.likeItem.findMany({
    where: {
      usersId: userId,
    },
    select: {
      product: true,
    },
  });
  return NextResponse.json({ data: likedProducts });
};
