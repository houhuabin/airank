// components/ImageGrid.tsx
import React from 'react';
import Image from 'next/image'; // Import the next/image component

interface ImageGridProps {
  page?: number; // Dynamic page number
}

const ImageGrid= ({ page = 1 }: ImageGridProps) => {
  const folder = "/"; // Public folder path including page

  return (
    <div className="grid grid-cols-3 grid-rows-4 gap-4">
      {Array.from({ length: 9 }, (_, index) => (
        <div key={index} className="p-2">
          {/* Generate the image path with the dynamic "page" parameter and filename */}
          <Image
            src={`/images/${page}/${index+1}.png`}
            alt={`Image ${index + 1}`}
            width={300}
            height={200}
            objectFit="cover"
            className="rounded"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;

