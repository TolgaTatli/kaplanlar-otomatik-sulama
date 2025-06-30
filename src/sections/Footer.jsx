import React from "react";
import { footerLogo } from "../assets/images";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="max-container mt-20 border-t border-slate-300 pt-8 pb-4">
      <div className="flex flex-col items-center text-center gap-4">
        <a href="/">
          <img src={footerLogo} width={180} height={50} alt="logo" />
        </a>
        <p className="text-sm text-slate-500 font-montserrat">
          Ankara içi otomatik sulama sistemleri hizmeti.
        </p>
        <div className="flex items-center gap-2 text-slate-400 text-xs mt-2">
          <img
            src={copyrightSign}
            alt="copyright"
            width={16}
            height={16}
            className="rounded-full"
          />
          <p>2025 Kaplanlar Sulama. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
