import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

const Page = async () => {
    const users = await prisma.users.findMany()
    console.log(users)
    return (
        <>
        <div>

        </div>
        </>
    )
}


export default Page