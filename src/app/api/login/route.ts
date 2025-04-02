import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { Users } from "@prisma/client";

const generateJWT = (users: Users): string => {
  return sign({ userId: users.id, username: users.username }, "JWT_PASS", {
    expiresIn: "24h",
  });
};

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const user = await prisma.users.findUnique({
      where: {
        phoneNumber: body.phoneNumber,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "User Not Found" });
    } else {
      const comparePass = await compare(body.password, user.password);

      if (!comparePass) {
        return NextResponse.json({ message: "wrong password" });
      } else {
        return NextResponse.json({
          message: "login success",
          token: generateJWT,
        });
      }
    }
  } catch (err) {
    return NextResponse.json(err);
  }
};
