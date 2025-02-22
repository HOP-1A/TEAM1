import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export const POST = async(req:Request)=>{
    try{
        const body = await req.json()

        const category = await prisma.category.create({
            data:{
                categoryType: body?.categoryType
            }
        })

        return NextResponse.json({message: category})

    }catch(err){
        NextResponse.json({error:err})
    }
}

export const GET = async()=>{
    try{
        const getCategories = await prisma.category.findMany();
        return NextResponse.json(getCategories)
    }catch(err){
        NextResponse.json({error:err})
    }
}