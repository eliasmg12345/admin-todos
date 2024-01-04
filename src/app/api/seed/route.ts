import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {

    await prisma.todo.deleteMany()

    await prisma.todo.createMany({
        data: [
            { description: 'piedra del alma', complete: true },
            { description: 'del poder' },
            { description: 'del tiempo' },
            { description: 'de la realidad' },
        ]
    })



    return NextResponse.json({ message: 'seed' })
}