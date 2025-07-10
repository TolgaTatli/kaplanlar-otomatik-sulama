import React, { useState } from "react";

const FAQSection = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-32 pt-20 lg:pb-[120px] lg:pt-[120px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-16 max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-red-600">
                S.S.S.
              </span>
              <h2 className="mb-4 text-3xl font-bold text-black sm:text-[40px]/[48px]">
                Sıkça Sorulan Sorular
              </h2>
              <p className="text-base text-gray-700">
                Otomatik sulama sistemleri hakkında sıkça sorulan sorulara
                cevaplar. Sorularınız varsa, lütfen bizimle iletişime geçin.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2 space-y-6">
            <AccordionItem
              header="Sulama sistemim çalışmıyor. Sadece bir bölge sulanıyor."
              text="Bölgesel arızalar genellikle selenoid vana ya da kablolama problemlerinden kaynaklanır. Tespit ve onarım için bizimle iletişime geçin."
            />
            <AccordionItem
              header="Çimlerim sararıyor, bazı yerler yeşil kalıyor."
              text="Sprinkler başlıklarınız tıkanmış veya su basıncı dengesiz olabilir. Ekiplerimiz sorunu kısa sürede çözer."
            />
            <AccordionItem
              header="Bahçemden sürekli su çıkıyor, toprağım çok ıslak."
              text="Borularda patlak veya vana arızası olabilir. Gözlem ve müdahale için hemen destek alın."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2 space-y-6 mt-6 lg:mt-0">
            <AccordionItem
              header="Zamanlayıcıyı kuruyorum ama sulama başlamıyor."
              text="Zamanlayıcınızın elektrik bağlantıları veya program ayarları kontrol edilmelidir. Teknik servisimize danışın."
            />
            <AccordionItem
              header="Sistem çalışıyor ama bazı bölgeler kuru kalıyor."
              text="Sprink yerleşimi hatalı olabilir. Bu, sistem tasarımı ile ilgili bir sorundur. Eksik kalan alanlar için yerinde keşif öneririz."
            />
            <AccordionItem
              header="Sistemi kapatsam bile su akışı devam ediyor."
              text="Vana arızası olabilir veya su kaynağından gelen basınç çok yüksek olabilir. Hızlı çözüm için bize ulaşın."
            />
          </div>
        </div>
      </div>

      {/* SVG arka plan, padding yok, footer hemen başlasın diye */}
      <div className="absolute bottom-0 right-0 left-0 z-[-1] pointer-events-none">
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
    </section>
  );
};

export default FAQSection;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  return (
    <div
      className={`mb-6 w-full rounded-lg border-2 border-red-600 bg-white p-6 shadow-lg
        transition-transform duration-300 ease-in-out
        ${
          active
            ? "scale-[0.98] shadow-red-600/50"
            : "hover:scale-[0.98] hover:shadow-red-400/40"
        }
      `}
    >
      <button
        className="faq-btn flex w-full items-center text-left"
        onClick={handleToggle}
        aria-expanded={active}
      >
        <div
          className={`mr-5 flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-red-600
          transition-transform duration-300 ease-in-out
          ${active ? "rotate-180" : ""}
          `}
        >
          <svg
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M1 1l7.5 7 7.5-7" />
          </svg>
        </div>

        <h4 className="text-lg font-semibold text-black">{header}</h4>
      </button>

      <div
        className={`pl-[52px] pt-4 text-base leading-relaxed text-gray-800 transition-max-height duration-300 ease-in-out
          ${active ? "max-h-[500px]" : "max-h-0 overflow-hidden"}
        `}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};
