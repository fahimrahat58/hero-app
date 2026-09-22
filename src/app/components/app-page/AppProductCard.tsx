import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AppProductCard = ({ app }) => {
  // Safe Fallbacks
  const id = app?.id || app?._id;
  const title = app?.title || app?.name || "Untitled App";
  const downloads = app?.downloads || app?.totalDownloads || "0";
  const rating = app?.rating || app?.stars || "0.0";
  const imageUrl = app?.image || app?.icon || app?.thumbnail;

  return (
    /* dynamic route-এ নিয়ে যাওয়ার জন্য Link ব্যবহার করা হয়েছে */
    <Link 
      href={`/apps/${id}`} 
      className="block w-full max-w-[200px]"
    >
      <div className="bg-white rounded-xl p-2.5 border border-gray-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-200 w-full flex flex-col justify-between group cursor-pointer">
        
        {/* Image Container */}
        <div className="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden relative mb-2">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 200px"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 text-[10px] font-medium">
              No Image
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="flex flex-col gap-1">
          {/* App Title */}
          <h3 
            title={title} 
            className="text-xs font-semibold text-gray-800 line-clamp-1 group-hover:text-purple-600 transition-colors"
          >
            {title}
          </h3>

          {/* Stats */}
          <div className="flex items-center justify-between text-[11px] mt-0.5">
            <div className="flex items-center gap-0.5 text-emerald-600 font-medium bg-emerald-50 px-1.5 py-0.5 rounded">
              <span className="text-[9px]">↓</span>
              <span>{downloads}</span>
            </div>

            <div className="flex items-center gap-0.5 text-amber-500 font-medium bg-amber-50 px-1.5 py-0.5 rounded">
              <span className="text-[9px]">★</span>
              <span>{rating}</span>
            </div>
          </div>
        </div>

      </div>
    </Link>
  );
};

export default AppProductCard;