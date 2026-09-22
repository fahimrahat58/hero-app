import { getApps } from "@/app/lib/getApps";
import AppsContainer from "@/app/components/app-page/AppsContainer";

const AppsPage = async () => {
  const apps = (await getApps()) || [];

  return (
    <main className="min-h-screen bg-gray-50/50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
            Our All Applications
          </h1>

          <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed px-2">
            Explore All Apps on the Market developed by us. We code for
            Millions.
          </p>
        </div>

        <AppsContainer initialApps={apps} />
      </div>
    </main>
  );
};

export default AppsPage;
