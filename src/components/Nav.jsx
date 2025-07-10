import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <a href="/">
            <img src={headerLogo} alt="Logo" width={205} height={29} />
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div
            className="max-lg:block lg:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            <img src={hamburger} alt="Hamburger" width={25} height={25} />
          </div>
        </nav>
      </header>

      {/* Animasyonlu overlay menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={toggleMenu}
            aria-label="Close menu"
            className="text-white text-4xl font-bold"
          >
            &times;
          </button>
        </div>
        <ul className="flex flex-col items-center gap-12 mt-20">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={toggleMenu}
                className="text-white text-2xl font-montserrat hover:text-red-500 transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Nav;
