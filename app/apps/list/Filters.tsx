"use client";

import React, { useState, useEffect } from "react";
import CollapsibleCheckboxList from "@/app/components/CollapsibleCheckboxList";
import { Flex } from "@radix-ui/themes";
import { AppQuery } from "./page";
import { TagItem } from "@/app/components/CheckboxMultiple";
import { Tag } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";

function Filters({ tags }: { tags: Tag[] }) {
  const platformItems: TagItem[] = [
    {
      id: "Website",
      label: "Website",
      checked: false,
    },
    {
      id: "API",
      label: "API",
      checked: false,
    },
    {
      id: "GPT",
      label: "GPTs",
      checked: false,
    },
    {
      id: "IOS",
      label: "IOS",
      checked: false,
    },
    {
      id: "Android",
      label: "Android",
      checked: false,
    },
    {
      id: "Windows",
      label: "Windows",
      checked: false,
    },
    {
      id: "MAC",
      label: "MAC",
      checked: false,
    },
    {
      id: "Linux",
      label: "Linux",
      checked: false,
    },
    {
      id: "Discord",
      label: "Discord",
      checked: false,
    },
    {
      id: "ChromeExtension",
      label: "Chrome Extention",
      checked: false,
    },
  ];

  const activityItems: TagItem[] = [
    {
      id: "BOOKMARK",
      label: "Bookmarks",
      checked: false,
    },
    {
      id: "LIKE",
      label: "Likes",
      checked: false,
    },
    {
      id: "HISTORY",
      label: "Histories",
      checked: false,
    },
  ];

  const tagItems: TagItem[] = tags.map((tag) => ({
    id: tag.id.toString(), // Assuming id is a number, convert to string
    label: tag.name,
    checked: false,
  }));
  const [platformChecks, setPlatformChecks] = useState(platformItems);
  const [tagChecks, setTagChecks] = useState(tagItems);
  const [activityChecks, setActivityChecks] = useState(activityItems);

  const searchParams = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    const selectedPlatforms = platformChecks
      .filter((item) => item.checked)
      .map((item) => item.id)
      .join(",");
    const selectedTags = tagChecks
      .filter((item) => item.checked)
      .map((item) => item.id)
      .join(",");
    const selectedActivities = activityChecks
      .filter((item) => item.checked)
      .map((item) => item.id)
      .join(",");

    const params = new URLSearchParams(searchParams);
    params.set("plats", selectedPlatforms);
    params.set("tags", selectedTags);
    params.set("acts", selectedActivities);
    console.log(selectedActivities, selectedTags);
    const queryString = params.toString();
    router.push("?" + queryString); // Update URL query string
  }, [platformChecks, tagChecks, activityChecks, router]);

  const handleItemChange = (
    changedItem: TagItem,
    setChecks: React.Dispatch<React.SetStateAction<TagItem[]>>
  ) => {
    setChecks((checks) =>
      checks.map((item) =>
        item.id === changedItem.id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <Flex direction="column" justify="center">
      <CollapsibleCheckboxList
        title="Hotest TAGs"
        initialItems={tagItems}
        onCheckboxChange={(item) => handleItemChange(item, setTagChecks)}
      />
      <CollapsibleCheckboxList
        title="Platforms"
        initialItems={platformItems}
        onCheckboxChange={(item) => handleItemChange(item, setPlatformChecks)}
      />
      <CollapsibleCheckboxList
        title="My Activities"
        initialItems={activityItems}
        onCheckboxChange={(item) => handleItemChange(item, setActivityChecks)}
      />
    </Flex>
  );
}

export default Filters;
