import React from "react";
import LatestIssues from "./LatestIssues";
import { Flex, Grid } from "@radix-ui/themes";
import IssueSumary from "./IssueSumary";
import IssueChart from "./IssueChart";
import { Metadata } from "next";

const DashboardPage = async () => {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const closed = await prisma.issue.count({ where: { status: "CLOSE" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="5">
      <Flex direction="column" gap="5">
        <IssueSumary open={open} inProgress={inProgress} closed={closed} />
        <IssueChart open={open} inProgress={inProgress} closed={closed} />
      </Flex>
      <LatestIssues />
    </Grid>
  );
};

export default DashboardPage;

export const metadata: Metadata = {
  title: "Issue Tracker - Dashboard",
  description: "View the summary of the project issues",
};
