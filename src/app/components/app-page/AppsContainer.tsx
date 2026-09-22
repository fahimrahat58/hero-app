"use client";

import React, { useState, useMemo } from "react";
import AppSearch from "./AppSearch";
import AppProductCard from "./AppProductCard";

const AppsContainer = ({ initialApps = [] }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredApps = useMemo(() => {
    return initialApps.filter((app) =>
      app?.title?.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery, initialApps]);

  return (
    <>
      <AppSearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        totalCount={filteredApps.length}
      />

      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 place-items-center w-full">
          {filteredApps.map((app, index) => (
            <AppProductCard key={app?.id ?? `app-${index}`} app={app} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 sm:py-12 px-4 text-gray-500 text-sm sm:text-base">
          No applications found matching "{searchQuery}".
        </div>
      )}
    </>
  );
};

export default AppsContainer;
