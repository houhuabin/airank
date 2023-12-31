// components/ImageGrid.tsx
import React from "react";
import Image from "next/image"; // Import the next/image component
import Bridge from "./Icons/Bridge";
import Logo from "./Icons/Logo";




interface ImageProps {
  url: string;
}

interface ImageGridProps {
  images: ImageProps[];
}

const ImageGrid = ({ images  }: ImageGridProps) => {
  return (
    
    <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4 ">
      <div className="after:content relative mb-5 flex h-[360px]   flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <span className="flex max-h-full max-w-full items-center justify-center">
            <Bridge />
          </span>
          <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
        </div>
        <Logo />
        <h1 className="mt-8 mb-4 text-base font-bold uppercase tracking-widest">
          World Class Design
        </h1>
        <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]"></p>
      </div>

     

      {images.map((image, index) => (
        <div key={index} className="after:content group relative mb-5 block w-full after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight">
          <Image
            src={image.url}
            alt={`Image ${index + 1}`}
            className="transform rounded-lg brightness-90 cursor-pointer transition will-change-auto group-hover:brightness-110"
            style={{ transform: "translate3d(0, 0, 0)" }}
            width={400}
            height={400}
            sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 50vw,
                  25vw"
          />
        </div>
      ))}
    </div>
   
  );
};

export default ImageGrid;
