import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

type ProductWithQuantity = {
  id: string;
  price: number;
  quantity: number;
  description: string;
  productImg: string[];
  name: string;
  delivery: boolean;
  updatedAt: Date;
  createdAt: Date;
  usersId: string;
  categoryId: string;
};

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    console.log(body);
    const order = await prisma.order.create({
      data: {
        usersId: body.userId,
        totalPrice: 1000,
      },
    });
    console.log(order);
    const products: ProductWithQuantity[] = body.orders;
    console.log(products);
    products.map(async (product) => {
      await prisma.orderItem.create({
        data: {
          productId: product.id,
          quantity: product.quantity,
          usersId: body.userId,
          orderId: order.id,
        },
      });
    });

    return NextResponse.json({ message: products });
  } catch (err) {
    return NextResponse.json({ message: err });
  }
};

export const GET = async () => {
  try {
    const order = await prisma.order.findMany();
    return NextResponse.json({ message: order });
  } catch (err) {
    return NextResponse.json({ message: err });
  }
};
