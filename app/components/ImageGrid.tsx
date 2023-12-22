// components/ImageGrid.tsx
import React, { FunctionComponent } from 'react';

interface ImageGridProps {
  page: number; // Dynamic page number
}

const ImageGrid= ({ page }:ImageGridProps) => {
  const folder = "/public/images/page"; // Public folder path including page

  return (
    <div className="grid grid-cols-3 grid-rows-4 gap-4">
      {Array.from({ length: 12 }, (_, index) => (
        <div key={index} className="p-2">
          {/* Generate the image path with the dynamic "page" parameter and filename */}
          <img
            src={`${folder}/${page}/${index + 1}.png`}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover rounded"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
