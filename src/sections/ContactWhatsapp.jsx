import React from "react";
import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="relative max-container flex justify-between items-center max-lg:flex-col gap-10 overflow-hidden"
      id="contact-us"
    >
      {/* Arka plan SVG */}
      <div className="absolute inset-0 z-[-1] pointer-events-none">
        <svg
          width="100%"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B91C1C" stopOpacity="0.36" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold text-black">
        Bizimle
        <span className="text-coral-red"> Whatsapp </span> üzerinden iletişime
        geçiniz.
      </h3>

      <div className="lg:max-w-[40%] w-full border-2 sm:border-red-600 rounded-2xl p-6 flex flex-col items-center text-center gap-4 bg-white shadow-lg">
        <p className="text-base text-slate-gray">
          Sipariş vermek, bilgi almak veya destek için hemen bize ulaşın.
        </p>

        <Button label="Whatsapp destek hattı." fullWidth />

        <p className="text-sm text-slate-500 italic">
          Ortalama yanıt süresi: 5-15 dakika
        </p>
      </div>
    </section>
  );
};

export default Subscribe;
