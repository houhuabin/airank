import { z } from "zod";

import { ActivityType } from "@prisma/client"; // 假设这是你的 Prisma 枚举

export const issueSchema = z.object({
  title: z.string().min(1, "Title is required!").max(255),
  description: z.string().min(1, "Description is required!").max(65535),
});

export const appSchema = z.object({
  name: z.string().min(1, "Title is required!").max(255),
  title: z.string().min(1, "Title is required!").max(255),
  description: z.string().min(1, "Description is required!").max(65535),
});

export const patchIssueSchema = z.object({
  title: z.string().min(1, "Title is required!").max(255).optional(),
  description: z
    .string()
    .min(1, "Description is required!")
    .max(65535)
    .optional(),
  assignedToUserId: z
    .string()
    .min(1, "Assigned User Id is required!")
    .max(255)
    .optional()
    .nullable(),
});

export const patchUserActivitySchema = z.object({
  userId: z.string().min(1, "User id is required!").max(255),
  appId: z.string().min(1, "App id is required!").max(255),
  activityType: z
    .enum(Object.values(ActivityType) as ["LIKE", "BOOKMARK", "HISTORY"])
    .optional(),
});
