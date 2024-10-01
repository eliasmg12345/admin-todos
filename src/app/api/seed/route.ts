import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import bcrypt from "bcryptjs";
export async function GET(request: Request) {

    await prisma.todo.deleteMany()
    await prisma.user.deleteMany()

    const user = await prisma.user.create({
        data:{
            email:'test1@google.com',
            password: bcrypt.hashSync('123456'),
            roles:['admin','client','super-user'],
            todos:{
                create:[
                    {description:'Alma', complete:true, day: 'monday'},
                    {description:'Espiritu', complete:true, day: 'sunday'},
                    {description:'Poder', complete:true, day: 'friday'}
                ]
            },
        }
    })



    return NextResponse.json({ message: 'seed' })
}