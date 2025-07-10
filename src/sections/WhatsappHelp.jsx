import React from "react";
import Button from "../components/Button";
import WhatsAppButton from "../components/WhatsAppButton";
import { arrowRight } from "../assets/icons";

const WhatsappHelp = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Bizimle
        <span className="text-coral-red"> Whatsapp </span> üzerinden iletişime
        geçiniz.
      </h3>

      <div className="lg:max-w-[40%] w-full sm:border sm:border-slate-gray rounded-2xl p-6 flex flex-col items-center text-center gap-4 bg-white shadow-md">
        <p className="text-base text-slate-gray">
          Sipariş vermek, bilgi almak veya destek için hemen bize ulaşın.
        </p>

        <WhatsAppButton
          label="Whatsapp destek hattı."
          iconURL={arrowRight}
          fullWidth
        />

        <p className="text-sm text-slate-500 italic">
          Ortalama yanıt süresi: 5-15 dakika
        </p>
      </div>
    </section>
  );
};

export default WhatsappHelp;
