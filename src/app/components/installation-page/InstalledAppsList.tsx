"use client";

import Image from "next/image";
import { useState, useMemo } from "react";
import { useAppContext } from "@/app/context/appContext";

export default function InstalledAppsList() {
  const { installedApps, uninstallApp } = useAppContext();
  const [sortBy, setSortBy] = useState("size");

  const sortedApps = useMemo(() => {
    return [...installedApps].sort((a, b) => {
      if (sortBy === "size") {
        return b.size - a.size;
      }

      if (sortBy === "rating") {
        return (b.ratingAvg || 0) - (a.ratingAvg || 0);
      }

      if (sortBy === "name") {
        return (a.title || "").localeCompare(b.title || "");
      }

      return 0;
    });
  }, [installedApps, sortBy]);

  if (installedApps.length === 0) {
    return (
      <div className="hero bg-white rounded-2xl border border-gray-100 shadow-sm py-12 sm:py-20 px-4">
        <div className="hero-content text-center">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              No Apps Installed
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-2 mb-6">
              Install your favorite apps and they will appear here.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <span className="font-semibold text-gray-800 text-sm sm:text-base">
          {installedApps.length} Apps Found
        </span>

        <div className="flex items-center gap-1.5 whitespace-nowrap text-xs text-gray-500">
          <span>Sort By :</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="select select-ghost select-xs focus:bg-transparent font-medium text-gray-700 focus:outline-none cursor-pointer pl-1 pr-6"
          >
            <option value="size">Size</option>
            <option value="name">Name</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {sortedApps.map((app) => (
          <div
            key={app.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl border border-gray-100 shadow-sm"
          >
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={app.image}
                  alt={app.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="min-w-0">
                <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                  {app.title}
                </h3>

                <div className="flex flex-wrap items-center gap-x-2 sm:gap-x-3 gap-y-1 text-[11px] sm:text-xs text-gray-400 mt-1">
                  <span className="flex items-center gap-1 text-emerald-500 font-medium">
                    ▲ {app.downloads || "5M"}
                  </span>

                  <span className="flex items-center gap-1 text-amber-500">
                    ★ {app.ratingAvg}
                  </span>

                  <span>{app.size || "256 MB"}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => uninstallApp(app.id)}
              className="btn btn-sm w-full sm:w-auto bg-emerald-400 hover:bg-emerald-500 text-white border-none normal-case rounded-md px-5"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
