import ProductCard from "./components/home-page/trendingApps";
import Banner from "./components/home-page/banner";
import { getApps } from "./lib/getApps";
import Link from "next/link";
import type { Root2 } from "./type/productType";

const Home = async () => {
  const apps: Root2[] = await getApps();

  return (
    <>
      <Banner />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Trending Apps
          </h1>

          <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-md mx-auto">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 place-items-center w-full">
          {apps.slice(0, 8).map((app: Root2) => (
            <ProductCard key={app.id} app={app} />
          ))}
        </div>

        <div className="mt-8 sm:mt-10 text-center">
          <Link
            href="/apps"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-5 sm:px-6 py-2.5 rounded-lg shadow-sm transition-colors"
          >
            Show All
          </Link>
        </div>
      </main>
    </>
  );
};

export default Home;
