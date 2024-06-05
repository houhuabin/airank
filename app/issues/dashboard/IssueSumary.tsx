import { IssueStatus } from "@prisma/client";
import { Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}
const IssueSumary = ({ open, inProgress, closed }: Props) => {
  const statusDataArray: {
    label: string;
    value: number;
    status: IssueStatus;
  }[] = [
    { label: "Open Issues", value: open, status: "OPEN" },
    { label: "In Progress Issues", value: inProgress, status: "IN_PROGRESS" },
    { label: "CLOSED  Issues", value: closed, status: "CLOSE" },
  ];

  return (
    <Flex gap="4">
      {statusDataArray.map((statusData) => (
        <Card key={statusData.label}>
          <Flex direction="column" gap="1">
            <Link
              className="text-sm font-medium"
              href={`/issues/list?status=${statusData.status}`}
            >
              {statusData.label}
            </Link>
            <Text size="5" className="font-bold">
              {statusData.value}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSumary;
