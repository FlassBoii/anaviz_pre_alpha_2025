import { useCallback } from "react";

export const useSmoothScroll = () => {
  const scrollToSection = useCallback(
    (sectionId: string, duration: number = 1000) => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      const targetPosition = element.offsetTop - 100; // Offset para el header sticky
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutCubic(
          timeElapsed,
          startPosition,
          distance,
          duration
        );
        window.scrollTo(0, run);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    },
    []
  );

  // Función de easing para movimiento suave
  const easeInOutCubic = (
    t: number,
    b: number,
    c: number,
    d: number
  ): number => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  };

  return { scrollToSection };
};
