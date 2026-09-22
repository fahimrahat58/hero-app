import React from 'react';
import Image from 'next/image';

const AppProductCard = ({ app }) => {
  return (
    /* max-w-[200px] ব্যবহার করে কার্ডের সর্বোচ্চ সাইজ ছোট করা হয়েছে */
    <div className="bg-white rounded-xl p-2.5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 w-full max-w-[200px] flex flex-col justify-between group">
      
      {/* Aspect Square Container for Smaller Image */}
      <div className="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden relative mb-2">
        {app?.image ? (
          <Image
            src={app.image}
            alt={app?.title || "App Banner"}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 text-[10px]">
            No Image
          </div>
        )}
      </div>

      {/* Info Container */}
      <div className="flex flex-col gap-1">
        {/* Title (Text Size Reduced to text-xs) */}
        <h3 className="text-xs font-semibold text-gray-800 line-clamp-1 group-hover:text-purple-600 transition-colors">
          {app?.title || "Forest: Focus For Productivity"}
        </h3>

        {/* Rating and Downloads */}
        <div className="flex items-center justify-between text-[11px] mt-0.5">
          <div className="flex items-center gap-0.5 text-emerald-600 font-medium bg-emerald-50 px-1.5 py-0.5 rounded">
            <span className="text-[9px]">↓</span>
            <span>{app?.downloads || "4.1M"}</span>
          </div>

          <div className="flex items-center gap-0.5 text-amber-500 font-medium bg-amber-50 px-1.5 py-0.5 rounded">
            <span className="text-[9px]">★</span>
            <span>{app?.rating || "4.8"}</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AppProductCard;