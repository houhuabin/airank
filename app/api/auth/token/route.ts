import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(request: NextRequest) {
    console.log(request);
    const token = await getToken({ req: request });
    return NextResponse.json(token);
}