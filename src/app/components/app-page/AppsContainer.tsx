"use client";

import React, { useState, useMemo } from "react";
import AppSearch from "./AppSearch";
import AppProductCard from "./AppProductCard";

const AppsContainer = ({ initialApps = [] }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // টাইটেল দিয়ে ফিল্টার করা
  const filteredApps = useMemo(() => {
    return initialApps.filter((app) =>
      app?.title?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, initialApps]);

  return (
    <>
      {/* Search Bar Component */}
      <AppSearch
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        totalCount={filteredApps.length}
      />

      {/* Apps Grid */}
      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 place-items-center w-full">
          {filteredApps.map((app, index) => (
            <AppProductCard
              key={app?.id ?? `app-${index}`}
              app={app}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">
          No applications found matching "{searchQuery}".
        </div>
      )}
    </>
  );
};

export default AppsContainer;