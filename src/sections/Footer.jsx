import React from "react";
import { footerLogo } from "../assets/images";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-red-950 to-black pt-14 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          {/* Logo ve kısa açıklama */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <a href="/" className="mb-2">
              <img src={footerLogo} width={170} height={48} alt="Kaplanlar Sulama Logo" className="drop-shadow-lg" />
            </a>
            <p className="text-slate-300 text-base font-montserrat leading-relaxed">
              Ankara ve çevresinde modern otomatik sulama sistemleriyle yeşil alanlarınızı güvenle sulayın.<br />
              <span className="text-coral-red font-semibold">Sürdürülebilir, ekonomik ve hızlı çözümler için buradayız.</span>
            </p>
          </div>
          {/* Menü */}
          <div className="flex flex-col items-center md:items-center gap-1">
            <h4 className="text-xl font-bold text-coral-red mb-3 font-montserrat tracking-wide">Menü</h4>
            <a href="#home" className="text-slate-200 hover:text-coral-red transition font-montserrat py-1">Ana Sayfa</a>
            <a href="#about-us" className="text-slate-200 hover:text-coral-red transition font-montserrat py-1">Hakkımızda</a>
            <a href="#services" className="text-slate-200 hover:text-coral-red transition font-montserrat py-1">Hizmetlerimiz</a>
            <a href="#contact-us" className="text-slate-200 hover:text-coral-red transition font-montserrat py-1">İletişim</a>
          </div>
          {/* İletişim */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <h4 className="text-xl font-bold text-coral-red mb-3 font-montserrat tracking-wide">İletişim</h4>
            <span className="text-slate-200 font-montserrat">
              <strong>Telefon:</strong>{" "}
              <a href="tel:+905317921674" className="hover:text-coral-red transition">+90 531 792 1674</a>
            </span>
            <span className="text-slate-200 font-montserrat">
              <strong>E-posta:</strong>{" "}
              <a href="mailto:kaplanlarsulama@gmail.com" className="hover:text-coral-red transition">kaplanlarsulama@gmail.com</a>
            </span>
            <span className="text-slate-200 font-montserrat">
              <strong>Adres:</strong> Ankara, Türkiye
            </span>
            <div className="flex gap-3 mt-3">
              <a href="https://wa.me/905317921674" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="text-coral-red hover:scale-110 transition-transform"><path fill="currentColor" d="M12.004 2.003A9.997 9.997 0 0 0 2 12c0 1.77.46 3.45 1.33 4.95L2.05 21.95a1 1 0 0 0 1.18 1.18l4.99-1.28A9.997 9.997 0 1 0 12.004 2.003Zm0 2a8 8 0 1 1 0 16 7.96 7.96 0 0 1-4.09-1.15 1 1 0 0 0-.8-.09l-3.1.8.8-3.1a1 1 0 0 0-.09-.8A7.96 7.96 0 0 1 4.004 12c0-4.41 3.59-8 8-8Zm-2.29 4.29c-.27-.27-.68-.36-1.02-.21-.35.15-.57.48-.57.85 0 2.97 2.41 5.38 5.38 5.38.37 0 .7-.22.85-.57.15-.34.06-.75-.21-1.02l-.89-.89a.996.996 0 0 0-1.41 0l-.29.29a3.978 3.978 0 0 1-1.41-1.41l.29-.29a.996.996 0 0 0 0-1.41l-.89-.89Z"/></svg>
              </a>
              <a href="mailto:info@kaplanlarsulama.com" aria-label="Mail">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="text-coral-red hover:scale-110 transition-transform"><path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.01l8 5.99 8-5.99V6H4Zm16 2.25-7.47 5.6a1 1 0 0 1-1.06 0L4 8.25V18h16V8.25Z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-800 pt-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <img
              src={copyrightSign}
              alt="copyright"
              width={18}
              height={18}
              className="rounded-full"
            />
            <span className="font-montserrat">2025 Kaplanlar Sulama. Tüm hakları saklıdır.</span>
          </div>
          <div>
            <a href="#privacy" className="text-slate-400 hover:text-coral-red text-sm font-montserrat transition">Gizlilik Politikası</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;