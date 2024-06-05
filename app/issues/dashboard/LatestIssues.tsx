import { IssueStatusBadge } from "@/app/components";
import { Avatar, Card, Flex, Heading, Table, TableRow } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const LatestIssues = async () => {
  const lastIssues = await prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
    include: {
      assignedToUser: true,
    },
  });
  return (
    <Card>
      <Heading size="4" mb="3">
        {" "}
        Lastes Issues
      </Heading>
      <Table.Root>
        <Table.Body>
          {lastIssues.map((issue) => (
            <TableRow key={issue.id}>
              <Table.Cell>
                <Flex justify="between">
                  <Flex direction="column" align="start" gap="2">
                    <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                    <IssueStatusBadge status={issue.status} />
                  </Flex>
                  {issue.assignedToUser && (
                    <Avatar
                      src={issue.assignedToUser.image!}
                      fallback="?"
                      size="2"
                      radius="full"
                    />
                  )}
                </Flex>
              </Table.Cell>
            </TableRow>
          ))}
        </Table.Body>
      </Table.Root>
    </Card>
  );
};

export default LatestIssues;