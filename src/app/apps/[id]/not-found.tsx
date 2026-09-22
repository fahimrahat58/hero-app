import Image from "next/image";
import Link from "next/link";
import errImage from "../../assets/4660853_2417235 1.png";

export default function AppNotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-white px-4 py-8 sm:py-12">
      <div className="w-full max-w-md text-center">
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-5 sm:mb-6">
          <Image
            src={errImage}
            alt="App Not Found"
            fill
            className="object-contain"
            priority
          />
        </div>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight uppercase">
          OPPS!! APP NOT FOUND
        </h1>

        <p className="text-xs sm:text-sm text-gray-500 mt-2 mb-6 sm:mb-8 max-w-sm mx-auto leading-relaxed">
          The App you are requesting is not found on our system. please try
          another apps
        </p>

        <Link
          href="/"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs sm:text-sm px-5 sm:px-6 py-2.5 rounded-md transition-colors shadow-sm"
        >
          Go Back
        </Link>
      </div>
    </main>
  );
}
