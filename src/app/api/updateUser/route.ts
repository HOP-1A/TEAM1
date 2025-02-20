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
        return NextResponse.json({user})
    }catch(err){
        return NextResponse.json({error: err}, {status:500})
    }
}