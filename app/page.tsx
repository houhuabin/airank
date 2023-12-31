"use client";

import ImageGrid from "./components/ImageGrid";
import SearchBox from "./components/SearchBox";
import { Image } from "@prisma/client";
/*
import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import girl from '@/public/images/girl.jpg'
import { Metadata } from 'next'

import { useState } from 'react'
import dynamic from 'next/dynamic';
//import HeavyComponent from './components/HeavyComponent'
{
const HeavyComponent = dynamic(() => import('./components/HeavyComponent')
  , { ssr: false, loading: () => <p>Loading...</p> });
}
*/
//import _ from 'lodash'

import React, { useState } from "react";

export default function Home() {
  const imageUrls = [
    { url: "/images/1/1.png" },
    { url: "/images/1/2.png" },
    { url: "/images/1/3.png" },
    { url: "/images/1/4.png" },
    { url: "/images/1/5.png" },
    { url: "/images/1/6.png" },
    { url: "/images/1/7.png" },
    { url: "/images/1/8.png" },
    { url: "/images/1/9.png" },
    { url: "/images/1/10.png" },
  ];
  const [images, setImages] = useState(imageUrls);
  /*
  const handleSearch = (searchTerm: string) => {
    // 根据页码生成新的图片 URL 数组
    const pageNum = parseInt(searchTerm, 10) || 1;
    const newImageUrls = Array.from({ length: 5 }, (_, index) => ({
      url: `/images/${pageNum}/${index + 1}.png`
    }));

    setImages(newImageUrls);
  };

  */
  const handleSearch = async (searchTerm: string) => {
    // 将搜索词转换为整数，表示期号
    // const issueNumber = parseInt(searchTerm, 10) || 1;

    try {
      const response = await fetch(
        `/api/image?issue=${encodeURIComponent(searchTerm)}`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const imagesFromDb: Image[] = await response.json();
      // 在数据库中查询特定期号的图片

      // 转换 imagesFromDb 为与 imageUrls 相同格式的数组
      const formattedImages = imagesFromDb.map((image) => ({ url: image.url }));
      setImages(formattedImages);
    } catch (error) {
      console.error("Error fetching images:", error);
      // 处理错误或设置一个错误状态
    }
  };

  return (
    <main className="mx-auto max-w-[1960px] p-4">
      <SearchBox onSearch={handleSearch} />
      <ImageGrid images={images} />
    </main>
  );
}
{
  /*<Image src="https://bit.ly/react-cover" alt="girl" fill className='object-cover'sizes="(max-width:480px) 100vw,(max-wdith:768) 50vw, 33vw" />
      
      <h1 className='font-poppins'>Hello {session && <span>{session.user!.name}</span>}</h1>
      <h1 >Hello {session && <span>{session.user!.name}</span>}</h1> 
      

      <button className='btn' onClick={async () => {
        const _ = (await import('lodash')).default;
        const user = [
          { name: 'b' },
          { name: 'a' },
          { name: 'c' },

        ];
        const sortedUser = _.orderBy(user, ['name']);
        console.log(sortedUser);

      }}>show</button>
    /*isVisable && <HeavyComponent />
      <button className='btn' onClick={() => { setVisable(true) }}>show</button>
      {//<ProductCard />
      }
    */
}
/*
export const metadata: Metadata = {
  title: 'AI Rank',
  description: 'Created by Huabin Hou',
  openGraph: {
    title: "",
    description: ""
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const product = await fetch('');// or get data from database
  return {
    title: 'product.title',
    description: 'product.description'
  }
}
*/
