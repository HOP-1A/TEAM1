import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const POST = async(req:Request)=>{
    try{
        const body = await req.json()

        const product = await prisma.product.create({
            data:{
                price: body?.price,
                quantity: body?.quantity,
                description: body?.description,
                categoryId: body?.categoryId,
                name: body?.name,
                delivery: body?.delivery,
                usersId: body?.usersId,
            }
        })

        return NextResponse.json({message: product})

    }catch(err){
        NextResponse.json({error:err})
    }
}