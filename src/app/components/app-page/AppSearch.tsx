"use client";

import React from "react";

type AppSearchProps = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  totalCount: number;
};

const AppSearch = ({
  searchQuery,
  setSearchQuery,
  totalCount,
}: AppSearchProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
      <p className="text-xs sm:text-sm font-medium text-gray-600">
        ({totalCount}) Apps Found
      </p>

      <div className="relative w-full sm:w-72">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search apps..."
          className="w-full pl-9 pr-4 py-2 sm:py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
        />

        <svg
          className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default AppSearch;
