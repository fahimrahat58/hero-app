import { getApps } from "@/app/lib/getApps";
import AppsContainer from "@/app/components/app-page/AppsContainer";

const AppsPage = async () => {
  const apps = (await getApps()) || [];

  return (
    <main className="min-h-screen bg-gray-50/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Our All Applications
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">
            Explore All Apps on the Market developed by us. We code for Millions.
          </p>
        </div>

        {/* Dynamic Container Component */}
        <AppsContainer initialApps={apps} />

      </div>
    </main>
  );
};

export default AppsPage;