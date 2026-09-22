import ProductCard from "./components/home-page/trendingApps";
import Banner from "./components/home-page/banner";
import { getApps } from "./lib/getApps";
import Link from "next/link";

const Home = async () => {
  const apps = await getApps();

  return (
    <>
      <Banner />

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-slate-900">
            Trending Apps
          </h1>
          <p className="text-sm text-slate-500 mt-2">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* 8-App Grid (2 Rows x 4 Columns) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 place-items-center w-full">
          {apps.slice(0, 8).map((app, index) => (
            <ProductCard
              key={
                typeof app.id === "string" || typeof app.id === "number"
                  ? app.id
                  : `app-${index}`
              }
              app={app}
            />
          ))}
        </div>

        {/* Show All Button */}
        <div className="mt-10 text-center">
          <Link
            href="/apps"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-6 py-2.5 rounded-lg shadow-sm transition-colors"
          >
            Show All
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
