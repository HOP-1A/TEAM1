import {prisma} from "@/lib/prisma"
import { NextResponse} from "next/server"

export const PUT = async(req:Request) =>{
    try{
        const body = await req.json()
        const user = await prisma.users.update({
            where:{
                email: body?.email
            },
            data:{
                username: body?.username
            }
        })

        console.log(user)
        return NextResponse.json({user})
    }catch(err){
        console.log(err)
        return NextResponse.json({error: "Failed to update user"}, {status:500})
    }
}