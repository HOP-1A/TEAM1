import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

const categoryHashmap = {
  "makeup": "c51f9fb4-666b-4d8e-8029-132a761e4ec6",
  "technology": "b75aea26-481e-4920-97df-2d36f928b76f",
  "esports": "73870441-8f0f-4516-a3b6-5cb662c8c642",
  "housing": "138706cc-1bfe-4c73-b786-277d1780c9b8",
  "perfume": "785475ff-1bfe-4c73-b786-277d1780c9b8",
}

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const { price, quantity, description, imgUrl, category, name, delivery, usersId} = body;
    
    const key: keyof typeof categoryHashmap = category;
    
    const payload = {
      price,
      quantity,
      description,
      productImg: imgUrl,
      categoryId: categoryHashmap[key],
      name,
      delivery,
      usersId
    }
    
    const product = await prisma.product.create({
      data: payload,
    });


    return NextResponse.json({ message: product });
  } catch (err) {
    return NextResponse.json({ error: err });
  }
};

export const GET = async () => {
  try {
    const product = await prisma.product.findMany({
      include: {
        LikeItem: true,
      },
    });
    return NextResponse.json(product);
  } catch (err) {
    return NextResponse.json(err);
  }
};
