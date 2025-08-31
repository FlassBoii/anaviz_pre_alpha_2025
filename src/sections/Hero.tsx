"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import Lottie from "lottie-react";
import filesAnimation from "@/assets/animations/files_anaviz.json";
import searchingAnimation from "@/assets/animations/searching_anaviz.json";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const { scrollToSection } = useSmoothScroll();

  const handleScrollToProductShowcase = () => {
    scrollToSection("product-showcase", 1200);
  };

  return (
    <>
      {/* Video Background que se extiende hasta el footer */}
      <div className="fixed inset-0 w-full h-full z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/videos/flassrenderallcopyrightsreserved.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlay muy sutil para mejorar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#90E0EF]/10 via-transparent to-[#EAEEFE]/15"></div>
      </div>

      {/* Contenido del Hero */}
      <section className="relative z-10 pt-12 pb-24 md:pt-8 md:pb-16 overflow-x-clip">
        <div className="container">
          <div className="md:flex items-center">
            <div className="md:w-[550px]">
              <motion.div
                className="tag text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                V1 ya está aquí
              </motion.div>
              <motion.h1
                className="text-3xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-[#03045E] to-[#00B4D8] text-transparent bg-clip-text mt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Claridad legal al instante
              </motion.h1>
              <motion.p
                className="text-2xl text-[#03045E] tracking-tight mt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Contratos complejos convertidos en informes claros, en segundos.
              </motion.p>
              <motion.div
                className="flex gap-2 items-center mt-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <motion.button
                  onClick={handleScrollToProductShowcase}
                  className="bg-gradient-to-r from-[#03045E] to-[#00B4D8] hover:from-[#00B4D8] hover:to-[#B8E6B8] text-white text-xl py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#00B4D8]/25 transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  2025 V1
                </motion.button>
                <button className="btn btn-text gap-2 text-xl">
                  <span>Descubre más</span>
                  <ArrowIcon className="h-6 w-6" />
                </button>
              </motion.div>
            </div>
            <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
              <Lottie
                animationData={filesAnimation}
                loop={true}
                className="md:absolute md:h-full md:w-auto md:max-w-none md:left-8 lg:left-16"
              />
              <motion.div className="hidden md:block -top-8 -left-32 md:absolute">
                <Lottie
                  animationData={searchingAnimation}
                  loop={true}
                  className="h-[300px] w-[300px]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
