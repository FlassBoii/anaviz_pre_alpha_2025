import logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-transparent to-[#03045E]/20 text-white text-sm py-10 text-center relative z-10 backdrop-blur-sm">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,rgba(255,255,255,0.1),rgba(255,255,255,0.5),rgba(255,255,255,0.1))] before:absolute">
          <Image
            src={logo}
            alt="Anaviz logo"
            height={110}
            width={110}
            className="relative"
          />
        </div>

        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a
            href="#"
            className="text-white/80 hover:text-white transition-colors"
          >
            Inicio
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-white transition-colors"
          >
            Acerca de
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-white transition-colors"
          >
            Precios
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-white transition-colors"
          >
            Contacto
          </a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedin />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6 text-white/80">
          &copy; 2024 Anaviz. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
