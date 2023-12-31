// components/SearchBox.js
"use client";

import { useState } from "react";
import styles from "./SearchBox.module.css";

interface SearchBoxProps {
  onSearch: (searchTerm: string) => void;
}

export default function SearchBox({ onSearch }: SearchBoxProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const target = e.target as HTMLInputElement; // Safely cast to HTMLInputElement
      const searchTerm = target.value;
      // Convert search term into a page number (dummy logic, replace with actual logic)
     
      onSearch(searchTerm);
    }
  };

  const handleClick = () => {
    //
    onSearch(searchTerm);
  };

  return (
    <div className="flex justify-center p-4 relative mb-3">
      
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`${styles.searchInput} h-10 w-96 pl-3  rounded-lg bg-gray-200 z-0 focus:shadow focus:outline-none`}
          placeholder="Search something..."
          onKeyDown={handleKeyDown}
        />
    
          <a className={`${styles.searchLink} ml-8 `} onClick={handleClick}>
            Search
          </a>
       
    </div>
  );
}
