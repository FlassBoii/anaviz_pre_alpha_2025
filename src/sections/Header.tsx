"use client";

import ArrowRight from "../assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export const Header = () => {
  const { scrollToSection } = useSmoothScroll();

  const handleScrollToProductShowcase = () => {
    scrollToSection("product-showcase", 1200);
  };

  return (
    <header className="sticky top-0 backdrop-blur-md z-20 bg-gradient-to-b from-[#90E0EF]/20 to-[#CAF0F8]/10 border-b border-white/10 shadow-lg shadow-[#03045E]/5">
      <div className="flex justify-center items-center py-3 bg-gradient-to-r from-[#03045E]/80 to-[#00B4D8]/60 text-white text-sm gap-3 backdrop-blur-sm">
        <p className="text-white/80 hidden md:block ">
          Optimiza tu flujo de trabajo y potencia tu productividad
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>2025 V1</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center " />
        </div>
      </div>
      <div className="py-5 bg-gradient-to-b from-transparent to-[#EAEEFE]/5">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={Logo}
                alt="Anaviz Logo"
                height={160}
                width={160}
                className="transform scale-110"
              />
              <h3 className="text-base font-bold bg-gradient-to-r from-[#03045E] to-[#00B4D8] bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%] tracking-wider ml-2">
                Analytics & Visualization
              </h3>
            </div>
            <MenuIcon className="h-5 w-5 md:hidden " />
            <nav className="hidden md:flex gap-6 text-[#03045E]/80 items-center">
              <a href="#" className="hover:text-[#00B4D8] transition-colors">
                Sobre
              </a>
              <a href="#" className="hover:text-[#00B4D8] transition-colors">
                Funciones
              </a>
              <a href="#" className="hover:text-[#00B4D8] transition-colors">
                Updates
              </a>
              <a href="#" className="hover:text-[#00B4D8] transition-colors">
                Contacto
              </a>
              <button
                onClick={handleScrollToProductShowcase}
                className="bg-gradient-to-r from-[#03045E] to-[#00B4D8] text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight hover:shadow-lg hover:shadow-[#00B4D8]/25 transition-all duration-300 transform hover:scale-105"
              >
                2025 V1
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
