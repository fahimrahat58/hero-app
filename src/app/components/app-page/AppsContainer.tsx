"use client";

import React, { useMemo, useState } from "react";
import AppSearch from "./AppSearch";
import AppProductCard from "./AppProductCard";
import type { Root2 } from "@/app/type/productType";

type AppsContainerProps = {
  initialApps: Root2[];
};

const AppsContainer = ({ initialApps }: AppsContainerProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredApps = useMemo(() => {
    return initialApps.filter((app: Root2) =>
      app.title.toLowerCase().includes(searchQuery.toLowerCase()),
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
          {filteredApps.map((app: Root2) => (
            <AppProductCard key={app.id} app={app} />
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
