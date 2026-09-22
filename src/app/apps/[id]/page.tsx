import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getApps } from "@/app/lib/getApps";

const AppDetailsPage = async ({ params }) => {
  const { id } = await params;
  const apps = (await getApps()) || [];

  // ID দিয়ে নির্দিষ্ট অ্যাপ ডাটা বের করা
  const app = apps.find((item) => String(item.id) === String(id));

  // অ্যাপ না পাওয়া গেলে Fallback View
  if (!app) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">App Not Found</h2>
        <p className="text-gray-500 mb-6">The application you are looking for does not exist.</p>
        <Link 
          href="/apps"
          className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
        >
          Back to All Apps
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50/50 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Main App Details Card */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-10 shadow-sm space-y-8">
          
          {/* Header Section: Icon, Title & Key Stats */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 border-b border-gray-100 pb-8 text-center md:text-left">
            
            {/* App Big Icon */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 bg-gray-100 rounded-3xl overflow-hidden relative flex-shrink-0 border border-gray-100 shadow-sm">
              {app?.image ? (
                <Image
                  src={app.image}
                  alt={app?.title || "App Icon"}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                  No Icon
                </div>
              )}
            </div>

            {/* Title & Download Stats */}
            <div className="flex-1 space-y-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                  {app?.title || "SmPlan:ToDo List With Reminder"}
                </h1>
                <p className="text-xs text-gray-400">
                  Developed by <span className="text-purple-600 font-medium">HERO.IO</span>
                </p>
              </div>

              {/* Stats Counters (Downloads, Rating, Reviews) */}
              <div className="flex items-center justify-center md:justify-start gap-8 py-2">
                <div className="text-center">
                  <p className="text-xl font-bold text-gray-900">{app?.downloads || "8M"}</p>
                  <p className="text-xs text-gray-400">Downloads</p>
                </div>

                <div className="h-8 w-[1px] bg-gray-200" />

                <div className="text-center">
                  <p className="text-xl font-bold text-gray-900 flex items-center justify-center gap-1">
                    <span>★</span> {app?.rating || "4.9"}
                  </p>
                  <p className="text-xs text-gray-400">Average Rating</p>
                </div>

                <div className="h-8 w-[1px] bg-gray-200" />

                <div className="text-center">
                  <p className="text-xl font-bold text-gray-900">{app?.reviews || "54K"}</p>
                  <p className="text-xs text-gray-400">Total Reviews</p>
                </div>
              </div>

              {/* Install Button */}
              <div>
                <a
                  href={app?.downloadUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-sm px-6 py-2.5 rounded-xl transition-all shadow-sm active:scale-[0.98]"
                >
                  <span>Install Now ({app?.size || "22MB"})</span>
                </a>
              </div>
            </div>

          </div>

          {/* Ratings Progress Section */}
          <div className="border-b border-gray-100 pb-8">
            <h2 className="text-base font-semibold text-gray-900 mb-4">Ratings</h2>
            <div className="space-y-2 max-w-xl">
              {[
                { stars: "5 star", pct: "w-[80%]" },
                { stars: "4 star", pct: "w-[50%]" },
                { stars: "3 star", pct: "w-[30%]" },
                { stars: "2 star", pct: "w-[15%]" },
                { stars: "1 star", pct: "w-[25%]" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="w-10 text-right">{item.stars}</span>
                  <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full bg-orange-400 rounded-full ${item.pct}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Description Section */}
          <div>
            <h2 className="text-base font-semibold text-gray-900 mb-3">Description</h2>
            <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
              {app?.description ||
                `This home app task list Smart Planner helps you set goals and accomplish daily tasks effortlessly. Streamline your workflow with clean UI, quick task scheduling, and customized reminders.`}
            </p>
          </div>

        </div>

      </div>
    </main>
  );
};

export default AppDetailsPage;