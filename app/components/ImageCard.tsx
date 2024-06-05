"use client";
import React, { useState } from "react";
import Image from "next/image"; // Import the next/image component
import Bridge from "./Icons/Bridge";
import Logo from "./Icons/Logo";
import { Text, Flex, Grid, Link, Badge } from "@radix-ui/themes";
import { IoHeartOutline } from "react-icons/io5";
import { GoHeartFill } from "react-icons/go";
import { IoStarOutline } from "react-icons/io5";
import { IoStarSharp } from "react-icons/io5";
import { MdOpenInNew } from "react-icons/md";
import { LuExternalLink } from "react-icons/lu";
import { HiOutlineExternalLink } from "react-icons/hi";
import axios from "axios";
import { UserActivity } from "@prisma/client";

export interface ImageCardProps {
  websiteUrl?: string;
  title?: string;
  description?: string;
  imageUrl: string;
  iconUrl?: string;
  isLiked: boolean;
  isBookmarked: boolean;
  appId: string;
}

const ImageCard = ({
  image,
  onActivityClick,
}: {
  image: ImageCardProps;
  onActivityClick: Function;
}) => {
  const [isLiked, setIsLiked] = useState(image.isLiked);
  const [isBookmarked, setIsBookmarked] = useState(image.isBookmarked);

  return (
    <Flex direction="column" gap="2">
      <Link href={image.websiteUrl}>
        <Image
          src={image.imageUrl}
          alt={`Image `}
          className="transform rounded-lg brightness-90 cursor-pointer transition will-change-auto hover:brightness-95"
          style={{ transform: "translate3d(0, 0, 0)" }}
          width={400}
          height={400}
          sizes="(max-width: 640px) 100vw,
          (max-width: 1280px) 50vw,
          (max-width: 1536px) 50vw,
          25vw"
        />
      </Link>
      <Flex className="p-4" gap="2" direction="column">
        <Flex align="center" gap="2">
          <Text weight="bold" size="3">
            {" "}
            {image.title}
          </Text>
        </Flex>
        <Flex justify="between">
          <Text weight="medium" size="1" className="line-clamp-3 w-2/3">
            {" "}
            {image.description}
          </Text>
          <Flex direction="column" gap="1">
            <Badge color="green">Free</Badge>
            <Badge color="violet">Image</Badge>
            <Badge color="blue">LLM</Badge>
          </Flex>
        </Flex>
        <Flex gap="2" justify="between" className="mt-2">
          {" "}
          <Flex gap="2">
            <div onClick={() => onActivityClick(image, "LIKE")} className="">
              {image.isLiked ? (
                <GoHeartFill className="text-pink-300 cursor-pointer hover:brightness-110  hover:bg-slate-300" />
              ) : (
                <IoHeartOutline className="text-pink-400 cursor-pointer hover:brightness-120 hover:bg-slate-300" />
              )}
            </div>
            <div
              onClick={() => onActivityClick(image, "BOOKMARK")}
              className="cursor-pointer hover:brightness-150 hover:bg-slate-300"
            >
              {image.isBookmarked ? (
                <IoStarSharp className="text-blue-800 cursor-pointer hover:brightness-130 hhover:bg-slate-300" />
              ) : (
                <IoStarOutline className="text-blue-900" />
              )}
            </div>
          </Flex>
          <Link
            href={image.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiOutlineExternalLink />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ImageCard;
