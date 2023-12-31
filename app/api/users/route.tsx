import { NextRequest, NextResponse } from "next/server";
import zodSchema from "./zodSchema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);

}

export async function POST(request: NextRequest) {

    const body = await request.json();
    const validation = zodSchema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 });

    const user = await prisma.user.findUnique({
        where: { email: body.email }
    });
    if (user)
        return NextResponse.json({ error: "email already exist!" }, { status: 400 });

    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            role: "user"
        }
    });
    return NextResponse.json(newUser, { status: 201 });

}

