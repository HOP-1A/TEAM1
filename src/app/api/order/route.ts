import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { nanoid } from "nanoid";

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

    const totalPrice = calculateTotalPrice(body.orders);

    const order = await prisma.order.create({
      data: {
        id: nanoid(),
        usersId: body.userId,
        totalPrice,
      },
    });

    const products: ProductWithQuantity[] = body.orders;

    await Promise.all(
      products.map((product) =>
        prisma.orderItem.create({
          data: {
            productId: product.id,
            quantity: product.quantity,
            usersId: body.userId,
            orderId: order.id,
          },
        })
      )
    );

    return NextResponse.json({ message: "Success" });
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

const calculateTotalPrice = (products: any[]) => {
  return products.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
};
