import Image from "next/image";
import { notFound } from "next/navigation";
import { getApps } from "@/app/lib/getApps";
import InstallButton from "@/app/components/app-page/InstallButton";

const AppDetailsPage = async ({ params }) => {
  const { id } = await params;

  const apps = (await getApps()) || [];

  const app = apps.find((item) => String(item.id) === String(id));

  if (!app) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50/50 py-6 sm:py-10">
      <div className="max-w-4xl mx-auto px-3 sm:px-6">
        <div className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 md:p-10 shadow-sm space-y-6 sm:space-y-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-5 sm:gap-6 border-b border-gray-100 pb-6 sm:pb-8 text-center md:text-left">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden relative flex-shrink-0 border border-gray-100 shadow-sm">
              {app.image ? (
                <Image
                  src={app.image}
                  alt={app.title}
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

            <div className="flex-1 w-full space-y-3 sm:space-y-4">
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                  {app.title}
                </h1>

                <p className="text-xs text-gray-400">
                  Developed by{" "}
                  <span className="text-purple-600 font-medium">
                    {app.companyName}
                  </span>
                </p>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-4 sm:gap-8 py-2">
                <div className="text-center min-w-0">
                  <p className="text-lg sm:text-xl font-bold text-gray-900">
                    {app.downloads}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-400">
                    Downloads
                  </p>
                </div>

                <div className="h-8 w-[1px] bg-gray-200 shrink-0" />

                <div className="text-center min-w-0">
                  <p className="text-lg sm:text-xl font-bold text-gray-900 flex items-center justify-center gap-1">
                    <span>★</span>
                    {app.ratingAvg}
                  </p>

                  <p className="text-[10px] sm:text-xs text-gray-400">
                    Average Rating
                  </p>
                </div>

                <div className="h-8 w-[1px] bg-gray-200 shrink-0" />

                <div className="text-center min-w-0">
                  <p className="text-lg sm:text-xl font-bold text-gray-900">
                    {app.reviews}
                  </p>

                  <p className="text-[10px] sm:text-xs text-gray-400">
                    Total Reviews
                  </p>
                </div>
              </div>

              <div className="flex justify-center md:justify-start">
                <InstallButton app={app} />
              </div>
            </div>
          </div>

          <div className="border-b border-gray-100 pb-6 sm:pb-8">
            <h2 className="text-base font-semibold text-gray-900 mb-4">
              Ratings
            </h2>

            <div className="space-y-2 w-full max-w-xl">
              {[
                { stars: "5 star", pct: "w-[80%]" },
                { stars: "4 star", pct: "w-[50%]" },
                { stars: "3 star", pct: "w-[30%]" },
                { stars: "2 star", pct: "w-[15%]" },
                { stars: "1 star", pct: "w-[25%]" },
              ].map((item) => (
                <div
                  key={item.stars}
                  className="flex items-center gap-2 sm:gap-3 text-xs text-gray-500"
                >
                  <span className="w-10 shrink-0 text-right">{item.stars}</span>

                  <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-orange-400 rounded-full ${item.pct}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-base font-semibold text-gray-900 mb-3">
              Description
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
              {app.description}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AppDetailsPage;
