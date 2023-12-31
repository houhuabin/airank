import { Badge, Flex } from "@radix-ui/themes";
import React from "react";
import { IssueStatus } from "@prisma/client";

const statusMap: Record<
  IssueStatus,
  { label: string; color: "red" | "violet" | "green" }
> = {
  OPEN: { label: "Open", color: "red" },
  IN_PROGRESS: { label: "IN PROGRESS", color: "violet" },
  CLOSE: { label: "Closed", color: "green" },
};

const IssueStatusBadge = ({ status }: { status: IssueStatus }) => {
  return (
    <div>
      <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
    </div>
  );
};

export default IssueStatusBadge;
