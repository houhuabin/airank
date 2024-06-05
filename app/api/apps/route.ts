import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { issueSchema } from "../../validationSchemas";
import { ActivityType, PlatformType } from "@prisma/client";
//for test only
export async function GET(request: NextRequest) {
  const platform_names: PlatformType[] = ["API"]; // 例如，这里可以是 'Website', 'API' 等

  const userId = "clr5r7lrs0000ev7a05vu12mj"; // Replace with actual user ID
  const acts = [ActivityType.HISTORY]; // Replace with actual activities

  const apps = await prisma.app.findMany({
    where: {
      userActivities: {
        some: {
          userId: userId,
          activityType: {
            in: acts,
          },
        },
      },
    },
  });
  console.log(apps.toLocaleString() + "=========apps=====");
  return NextResponse.json(apps, { status: 201 });
}
