import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const getUsers = await prisma.users.findMany();
    return NextResponse.json(getUsers);
  } catch (err) {
    return NextResponse.json({ error: err });
  }
};
