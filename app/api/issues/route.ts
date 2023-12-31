import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { issueSchema } from "../../validationSchemas";

export async function POST(request: NextRequest) {
  console.log("start   -add issue-----------------");
  const body = await request.json();
  const validation = issueSchema.safeParse(body);
  if (!validation.success) {
    console.log("validation failed----------------");
    return NextResponse.json(validation.error.format(), { status: 400 });
  }
  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });
  console.log("newIssue  =======" + newIssue);
  return NextResponse.json(newIssue, { status: 201 });
}
