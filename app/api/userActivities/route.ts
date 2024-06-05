import { patchUserActivitySchema } from "@/app/validationSchemas";
import { ActivityType } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
export async function PATCH(request: NextRequest) {
  const body = await request.json();
  const { userId, appId, activityType } = body;
  const validation = patchUserActivitySchema.safeParse(body);
  if (!validation.success) {
    console.log("========invalid parameters===========");
    console.log(validation.error.format());
    return NextResponse.json(validation.error.format(), { status: 400 });
  }
  // 查找用户活动
  const userActivity = await prisma.userActivity.findUnique({
    where: {
      userId_appId_activityType: {
        userId,
        appId: parseInt(appId),
        activityType: activityType as ActivityType,
      },
    },
  });

  let response;
  console.log(userActivity, "-----userActivity--------------");
  if (userActivity) {
    // 如果活动已经存在，删除它
    response = await prisma.userActivity.delete({
      where: {
        userId_appId_activityType: {
          userId,
          appId: parseInt(appId),
          activityType: activityType as ActivityType,
        },
      },
    });
  } else {
    // 如果活动不存在，添加它
    response = await prisma.userActivity.create({
      data: {
        userId,
        appId: parseInt(appId),
        activityType: activityType as ActivityType,
      },
    });
  }

  return NextResponse.json(response);
}
