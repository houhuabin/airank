// components/SearchBox.js
"use client";
import React, { useState, useContext } from "react";
import { Flex } from "@radix-ui/themes";
import { Input } from "@/components/ui/input";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AppQuery } from "./page";
interface Props {
  searchParams: AppQuery;
}
export default function SearchBox() {
  // const { searchParams, setSearchParams } = useSearchParams();
  //const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [localSearchTerm, setLocalSearchTerm] = useState(
    searchParams.get("query") || ""
  );
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // if (e.key === "Enter") {
    // 设置 searchTerm 参数
    const params = new URLSearchParams(searchParams);
    params.set("query", localSearchTerm);

    // 构建新的查询字符串
    const queryString = params.toString();

    // 导航到新的 URL
    router.push("?" + queryString);
    // setSearchParams({ ...searchParams, searchTerm: localSearchTerm });
    // }
  };

  return (
    <Flex gap="4" justify="center" className=" md:w-56">
      <Input
        type="text"
        value={localSearchTerm}
        onChange={(e) => setLocalSearchTerm(e.target.value)}
        placeholder="Search..."
        onKeyDown={handleKeyDown}
      />
    </Flex>
  );
}

{
  /*
      <a className={`${styles.searchLink} ml-3 `} onClick={handleClick}>
        <svg
          fill="none"
          height="24"
          shapeRendering="geometricPrecision"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path>
          <path d="M16 16l4.5 4.5"></path>
  </svg>
        Search
      </a>*/
}
