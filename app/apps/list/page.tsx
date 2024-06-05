import ImageGrid from "@/app/components/ImageGrid";

import React from "react";
import { ActivityType, App, PlatformType, Prisma } from "@prisma/client";
import prisma from "@/prisma/client";
import Pagination from "@/app/components/Pagination";
import { Flex } from "@radix-ui/themes";
import Filters from "@/app/apps/list/Filters";
import SearchBox from "./SearchBox";
import { fetchHotTags } from "../uitls/prismaUtils";
interface Props {
  term: String;
  orderBy: keyof App;
  page: string;
}

interface Props {
  searchParams: AppQuery;
}

export interface AppQuery {
  // status: IssueStatus;
  orderBy: keyof App;
  page: string;
  query: string;
  tags?: string;
  plats?: string;
  acts?: string;
}

const fetchAppBySearchterms = async (searchParams: AppQuery) => {
  const queryTerm = searchParams.query;
  const columnNames = ["id", "title", "description"];
  const orderBy = columnNames.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : { [columnNames[0]]: "asc" };

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 9;
  const plats = searchParams.plats?.split(",") || [];
  const validPlats: PlatformType[] = plats.filter((plat) =>
    Object.values(PlatformType).includes(plat as any)
  ) as PlatformType[];
  const tags = searchParams.tags?.split(",") || [];
  const validTagIds = tags
    .map((tag) => parseInt(tag.trim())) // 将每个元素转换为整数
    .filter((tagId) => !isNaN(tagId)); // 过滤掉非整数值
  const acts = searchParams.acts?.split(",") || [];
  const validActs: ActivityType[] = acts.filter((act) =>
    Object.values(ActivityType).includes(act as any)
  ) as ActivityType[];

  const userId = "clr5r7lrs0000ev7a05vu12mj";

  const whereClause: Prisma.AppWhereInput = {
    AND: [
      {
        OR: [
          {
            title: {
              contains: queryTerm,
              mode: "insensitive",
            },
          },
          {
            description: {
              contains: queryTerm,
              mode: "insensitive",
            },
          },
        ],
      },
      ...(validActs.length > 0
        ? [
            {
              userActivities: {
                some: {
                  userId: userId,
                  activityType: {
                    in: validActs,
                  },
                },
              },
            },
          ]
        : []), ///
      // Adding platforms filter as a separate condition in the AND array
      ...(validPlats.length > 0
        ? [
            {
              appPlatforms: {
                some: {
                  platform: {
                    name: {
                      in: validPlats,
                    },
                  },
                },
              },
            },
          ]
        : []), ///

      ...(validTagIds.length > 0
        ? [
            {
              appTags: {
                some: {
                  tag: {
                    id: {
                      in: validTagIds,
                    },
                  },
                },
              },
            },
          ]
        : []), ///
    ],
  };
  //console.log(whereClause, "  ", validActs, "   ==========================");
  const searchResults = await prisma.app.findMany({
    where:
      queryTerm || validTagIds.length > 0 || validPlats.length > 0
        ? whereClause
        : undefined,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
    include: {
      userActivities: true, // Include UserActivities in the result
    },
  });

  const appCount = await prisma.app.count({});

  return {
    searchResults,
    appCount,
    pageSize,
    page,
  };
};

const AppPages = async ({ searchParams }: Props) => {
  const { searchResults, appCount, pageSize, page } =
    await fetchAppBySearchterms(searchParams);

  const imagesForGrid = searchResults.map((app) => {
    // 查找对应的 LIKE 活动
    const likeActivity = app.userActivities.find(
      (activity) => activity.activityType === "LIKE"
    );

    // 查找对应的 BOOKMARK 活动
    const bookmarkActivity = app.userActivities.find(
      (activity) => activity.activityType === "BOOKMARK"
    );

    return {
      websiteUrl: app.url,
      title: app.title,
      description: app.description,
      imageUrl: app.image,
      iconUrl: app.icon,
      appId: app.id.toString(),
      isLiked: likeActivity ? true : false,
      isBookmarked: bookmarkActivity ? true : false,
    };
  });

  // console.log(imagesForGrid);
  const hotestTags = await fetchHotTags();

  return (
    <main className="mx-auto max-w-[1960px] p-4">
      <Flex gap="6" className="flex flex-col md:flex-row ">
        <Flex direction="column" gap="4">
          <SearchBox />
          <Filters tags={hotestTags} />
        </Flex>
        <Flex direction="column" gap="6">
          {<ImageGrid initialImages={imagesForGrid} />}
          <Pagination
            pageSize={pageSize}
            currentPage={page}
            itemCount={appCount}
          />
        </Flex>
      </Flex>
    </main>
  );
};

export default AppPages;
