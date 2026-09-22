import InstalledAppsList from "@/app/components/installation-page/InstalledAppsList";

const InstallationPage = () => {
  return (
    <main className="min-h-screen bg-gray-50/50 py-8 sm:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Your Installed Apps
          </h1>

          <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-md mx-auto">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <InstalledAppsList />
      </div>
    </main>
  );
};

export default InstallationPage;
