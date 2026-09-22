import Image from "next/image";
import Link from "next/link";
import errImage from "../../assets/4660853_2417235 1.png"

export default function AppNotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-white px-4 py-12">
      <div className="max-w-md w-full text-center">
        {/* Cat Graphic Illustration */}
        <div className="relative w-64 h-64 mx-auto mb-6">
          <Image
            src={errImage} // Public folder-e image-ta rakhun
            alt="App Not Found"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight uppercase">
          OPPS!! APP NOT FOUND
        </h1>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm text-gray-500 mt-2 mb-8 max-w-sm mx-auto">
          The App you are requesting is not found on our system. please try another apps
        </p>

        {/* Go Back Button */}
        <Link
          href="/"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs sm:text-sm px-6 py-2.5 rounded-md transition-colors shadow-sm"
        >
          Go Back
        </Link>
      </div>
    </main>
  );
}