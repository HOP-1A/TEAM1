import {prisma} from "@/lib/prisma"
import { NextResponse} from "next/server"
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { Users } from "@prisma/client";

const generateJWT = (users: Users): string=>{
    return sign({userId: users.id, username: users.username}, 'JWT_PASS',{ expiresIn: "24h" })
}

export const POST = async(req:Request) =>{


    try{
        const body = await req.json()
        const hash = await bcrypt.hashSync(body?.password, 10)
        const user = await prisma.users.create({
            data: {
                email: body?.email,
                username: body?.username,
                password: hash,
                phoneNumber: body?.phoneNumber,
            }
        })


        console.log(user)
        return NextResponse.json({user, token: generateJWT(user)})
    }catch(err){
        console.log(err)
        return NextResponse.json({error:" Failed to create user"}, {status:500})
    }
}
