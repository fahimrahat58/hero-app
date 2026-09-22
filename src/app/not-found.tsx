import Image from "next/image";
import Link from "next/link";
import errImage from "../app/assets/5156006_2689520 1.png";

export default function NotFound() {
  return (
    <main className="min-h-[85vh] flex items-center justify-center bg-white px-4 py-12">
      <div className="max-w-md w-full text-center">
        {/* 404 Illustration */}
        <div className="relative w-64 h-64 mx-auto mb-6">
          <Image
            src={errImage}
            alt="Page Not Found"
            fill
            className="object-contain"
            priority
          />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Oops, page not found!
        </h1>

        <p className="text-sm text-gray-500 mt-2 mb-8">
          The page you are looking for is not available.
        </p>

        <Link
          href="/"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm px-6 py-2.5 rounded-md transition-colors shadow-sm"
        >
          Go Back
        </Link>
      </div>
    </main>
  );
}
