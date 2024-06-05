import prisma from "@/prisma/client";
export const fetchHotTags = async () => {
  const hotestTags = await prisma.tag.findMany({
    orderBy: {
      hotScore: "desc",
    },
    take: 20,
  });

  return hotestTags;
};
