import { PrismaClient } from "@prisma/client";
 
const prisma = new PrismaClient();
 
export default async function getUsers() {
  try {
    return await prisma.users.findMany();
  } catch (error) {
    console.error(error);
    return [];
  }
}
 
 
 
 