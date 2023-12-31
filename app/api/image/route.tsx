import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export async function GET(   request: NextRequest,
    { params }: { params: { issue: string } }) {
   // const issueNumber = params.issue;
  //  const issueNumber = parseInt(params.issue, 10) || 1;
    const issueNumber = parseInt(request.nextUrl.searchParams.get('issue') || '', 10) || 1;

    try {
      const imagesFromDb = await prisma.image.findMany({
        where: { issue: issueNumber },
        select: { url: true }
      });
      return NextResponse.json(imagesFromDb, { status: 200 });
      
    } catch (error) {
      console.error("Error fetching images:", error);
      return NextResponse.json({ error: 'Issue not found!' }, { status: 404 });
    }

}

export async function POST(request: NextRequest) {
    const bodyArray = await request.json();

    // 确保 body 是一个数组
    if (!Array.isArray(bodyArray)) {
        return NextResponse.json({ error: "Invalid data format, expected an array." }, { status: 400 });
    }

    // 用于存储创建的图片
    const createdImages = [];
    for (const body of bodyArray) {
        const validation = schema.safeParse(body);
        if (!validation.success) {
            // 如果验证失败，可以选择停止处理并返回错误
            return NextResponse.json({ error: validation.error.errors }, { status: 400 });
        }

        // 检查图片是否已存在
        const existingImage = await prisma.image.findUnique({
            where: { id: body.id }
        });
        if (existingImage) {
            // 可以选择跳过已存在的图片，或停止并返回错误
            continue; // 跳过这个图片
        }

        // 创建新图片
        const newImage = await prisma.image.create({
            data: {
                title: body.title,
                issue:body.issue,
                url: body.url,
                tags: body.tags,
                width: parseInt(body.width, 10),
                height: parseInt(body.height, 10),
                description: body.description
            }
        });

        createdImages.push(newImage);
    }

    // 返回创建的所有图片
    return NextResponse.json(createdImages, { status: 201 });
}
