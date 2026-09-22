import React from "react";
import Link from "next/link";
import Image from "next/image";
import hero from "@/app/assets/Iphone.png";
import logo1 from "@/app/assets/Ellipse 24.png";
import logo2 from "@/app/assets/Ellipse 25.png";
import logo3 from "@/app/assets/Ellipse 26.png";
import logo4 from "@/app/assets/Ellipse 27.png";
import logo5 from "@/app/assets/Ellipse 28.png";
import logo6 from "@/app/assets/Ellipse 29.png";

const Banner = () => {
  return (
    <section className="w-full bg-[#f8fafc] pt-8 sm:pt-12 text-center overflow-hidden">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          We Build <br /> <span className="text-purple-600">Productive</span>{" "}
          Apps
        </h1>

        <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        <div className="mt-5 sm:mt-6 flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="https://play.google.com"
            target="_blank"
            className="flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-gray-300 text-slate-800 font-medium px-4 py-2 rounded-lg shadow-sm transition-all hover:shadow w-full max-w-[180px] sm:w-auto"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.3 0 .58.09.82.25l13.5 8.5c.57.36.74 1.12.38 1.69-.1.16-.24.3-.4.41l-13.48 8.4c-.25.16-.53.25-.82.25-.83 0-1.5-.67-1.5-1.5z" />
            </svg>
            <span className="text-sm">Google Play</span>
          </Link>

          <Link
            href="https://apple.com/app-store"
            target="_blank"
            className="flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-gray-300 text-slate-800 font-medium px-4 py-2 rounded-lg shadow-sm transition-all hover:shadow w-full max-w-[180px] sm:w-auto"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.66-.8 1.11-1.92.99-3.04-1 .04-2.21.67-2.9 1.48-.61.71-1.15 1.86-1.01 2.96 1.12.09 2.26-.59 2.92-1.4" />
            </svg>
            <span className="text-sm">App Store</span>
          </Link>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto mt-8 sm:mt-12 px-4 flex justify-center items-center">
        <div className="hidden sm:flex flex-col gap-5 md:gap-6 absolute left-4 md:left-24 top-4 z-10 items-center">
          <Image
            src={logo1}
            alt="App logo 1"
            width={48}
            height={48}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full shadow-md hover:scale-110 transition-transform translate-x-4"
          />

          <Image
            src={logo2}
            alt="App logo 2"
            width={48}
            height={48}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full shadow-md hover:scale-110 transition-transform -translate-x-2"
          />

          <Image
            src={logo3}
            alt="App logo 3"
            width={48}
            height={48}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full shadow-md hover:scale-110 transition-transform translate-x-2"
          />
        </div>

        <div className="relative z-0 w-full max-w-[250px] sm:max-w-[320px] flex justify-center">
          <Image
            src={hero}
            alt="Main mobile preview"
            width={320}
            height={640}
            className="w-full h-auto object-contain block leading-none"
            priority
          />
        </div>

        <div className="hidden sm:flex flex-col gap-5 md:gap-6 absolute right-4 md:right-24 top-4 z-10 items-center">
          <Image
            src={logo4}
            alt="App logo 4"
            width={48}
            height={48}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full shadow-md hover:scale-110 transition-transform -translate-x-4"
          />

          <Image
            src={logo5}
            alt="App logo 5"
            width={48}
            height={48}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full shadow-md hover:scale-110 transition-transform translate-x-2"
          />

          <Image
            src={logo6}
            alt="App logo 6"
            width={48}
            height={48}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full shadow-md hover:scale-110 transition-transform -translate-x-2"
          />
        </div>
      </div>

      <div
        className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-700 py-8 sm:py-12 px-4 text-white relative z-20"
        style={{ marginTop: "-2px" }}
      >
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-center">
          Trusted By Millions, Built For You
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div>
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-purple-200">
              Total Downloads
            </p>

            <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold my-2">
              29.6M
            </p>

            <p className="text-[10px] sm:text-xs text-purple-200">
              21% More Than Last Month
            </p>
          </div>

          <div>
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-purple-200">
              Total Reviews
            </p>

            <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold my-2">
              906K
            </p>

            <p className="text-[10px] sm:text-xs text-purple-200">
              40% More Than Last Month
            </p>
          </div>

          <div>
            <p className="text-[10px] sm:text-xs uppercase tracking-wider text-purple-200">
              Active Apps
            </p>

            <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold my-2">
              132+
            </p>

            <p className="text-[10px] sm:text-xs text-purple-200">
              31 More Will Launch
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
