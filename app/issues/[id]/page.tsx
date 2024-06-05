import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";

import delay from "delay";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./DeleteIssueButton";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import authOptions from "@/app/api/auth/[...nextauth]/authOptions";
import AssigneeSelect from "./AssigneeSelect";
import { cache } from "react";
interface Props {
  params: { id: string };
}
const fetchIssue = cache((issueId: number) => {
  return prisma.issue.findUnique({
    where: {
      id: issueId,
    },
  });
});
const IssueDetailPage = async ({ params }: Props) => {
  //await delay(1000);
  const session = await getServerSession(authOptions);
  const issue = await fetchIssue(parseInt(params.id));

  if (!issue) notFound();
  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5" className="mt-8">
      <Box className="md:col-span-4">
        <IssueDetails issue={issue} />
      </Box>
      {session && (
        <Box>
          <Flex direction="column" gap="4">
            <AssigneeSelect issue={issue} />
            <EditIssueButton issueId={issue.id} />
            <DeleteIssueButton issueId={issue.id} />
          </Flex>
        </Box>
      )}
    </Grid>
  );
};

export default IssueDetailPage;

export async function generateMetadata({ params }: Props) {
  const issue = await fetchIssue(parseInt(params.id));

  return { title: issue?.title, description: "Details of issue" + issue?.id };
}
