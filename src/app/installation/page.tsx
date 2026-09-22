import InstalledAppsList from "@/app/components/installation-page/InstalledAppsList";

const InstallationPage = () => {
  return (
    <main className="min-h-screen bg-gray-50/50 py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">
            Your Installed Apps
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* Client Component Rendering */}
        <InstalledAppsList />
      </div>
    </main>
  );
};

export default InstallationPage;