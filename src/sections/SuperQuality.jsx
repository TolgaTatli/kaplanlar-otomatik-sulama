import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { sulama_placeholder4 } from "../assets/images";
import WhatsAppButton from "../components/WhatsAppButton";

const SuperQuality = () => {
  const handleScrollToServices = () => {
    const servicesSection = document.getElementById("contact-us");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col
    gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2
          className="font-palanquin text-4xl capitalize
        font-bold lg:max-w-lg"
        >
          <span className="text-coral-red">{"Kaplanlar"} </span>
          {"Sulama"}
          <span className="text-coral-red"> Kimdir ? </span>
          {""}
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          <span className="font-bold">
            {" "}
            <span className="text-3xl">A</span>nkara
          </span>{" "}
          ve çevresinde yeşil alanlar için otomatik sulama çözümleri sunan
          Kaplanlar Sulama, doğaya saygılı ve teknolojiyi etkin kullanan sulama
          sistemleriyle fark yaratıyor. Çim sulama, damlama sulama ve diğer
          modern sistemlerle, alanların ihtiyacına göre planlanan ve özenle
          uygulanan çözümler sağlanıyor.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Her proje, bölgenin iklim ve toprak koşulları dikkate alınarak
          tasarlanıyor; böylece su tasarrufu maksimize edilirken bitkilerin
          sağlıklı ve canlı kalması garanti altına alınıyor. Kullanılan sistem
          bileşenleri — sprink, rotor, selenoid vana ve zamanlayıcılar — uzun
          vadeli verim ve dayanıklılık için titizlikle seçiliyor.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Ayrıca, Ankara içi{" "}
          <span className="font-bold text-xl text-coral-red">
            aynı gün tamir, bakım ve teknik servis hizmeti{" "}
          </span>
          sunularak, sulama sistemlerinizin kesintisiz ve sorunsuz çalışması
          sağlanıyor.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          <span className="font-bold text-xl text-coral-red">
            Kaplanlar Sulama
          </span>
          , teknoloji ile doğanın dengeli buluşmasını sağlayarak, yeşil
          alanların korunmasına katkı sunuyor.
        </p>
        <div className="mt-11" onClick={handleScrollToServices}>
          <WhatsAppButton
            iconURL={arrowRight}
            label="Destek almak için tıklayınız."
          />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={sulama_placeholder4}
          alt="sulama"
          width={570}
          height={522}
          className="object-contain border-2 border-solid border-coral-red rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
