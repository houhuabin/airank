// components/ImageGrid.tsx
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
import ImageCard, { ImageCardProps } from "./ImageCard";

interface ImageGridProps {
  initialImages: ImageCardProps[];
  logo?: boolean;
}

const ImageGrid = ({ initialImages, logo }: ImageGridProps) => {
  //const [isLiked, setIsLiked] = useState(false);
  // const [isBookmarked, setIsBookmarked] = useState(false);
  const [imagesState, setImagesState] = useState(initialImages);
  const handleActivityClick = async (
    image: ImageCardProps,
    activityType: string
  ) => {
    try {
      // setIsLiked(!isLiked);
      // Replace '/like' with your actual API endpoint for liking an item
      const appId = image.appId;
      await axios.patch("/api/userActivities", {
        userId: "clr5r7lrs0000ev7a05vu12mj",
        appId,
        activityType,
      });

      // 更新images数组
      const updatedImages = imagesState.map((img) =>
        img.appId === image.appId
          ? {
              ...img,
              isLiked: activityType === "LIKE" ? !img.isLiked : img.isLiked,
              isBookmarked:
                activityType === "BOOKMARK"
                  ? !img.isBookmarked
                  : img.isBookmarked,
            }
          : img
      );

      // 设置新的imagesState数组
      setImagesState(updatedImages);
    } catch (error) {
      console.error("Error handling activity:", error);
      // Handle errors (e.g., revert state changes, display error messages)
    }
  };
  return (
    <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4 ">
      {imagesState.map((image, index) => (
        <div
          key={index}
          className="border bg-opacity-90 border-slate-300 shadow-lg break-inside-avoid rounded-lg after:content group relative mb-5 block w-full after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
        >
          <ImageCard image={image} onActivityClick={handleActivityClick} />
        </div>
      ))}
    </div>
  );
};

const LogoComponent = () => {
  return (
    <div className=" border border-slate-300  after:content relative mb-5 flex h-[360px]   flex-col items-center justify-end gap-4 overflow-hidden rounded-lg  px-6 pb-16 pt-64 text-center  shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20">
        <span className="flex max-h-full max-w-full items-center justify-center">
          <Bridge />
        </span>
        <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
      </div>

      <h1 className="mt-8 mb-4 text-base font-bold uppercase tracking-widest">
        POWERED BY AI RANK
      </h1>
      <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]"></p>
    </div>
  );
};

export default ImageGrid;
