import { useEffect } from "react";

export default function useMouseTilt(ref) {

  useEffect(() => {

    const element = ref.current;

    if (!element) return;

    const handleMove = (e) => {

      const rect = element.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY = ((x / rect.width) - 0.5) * 20;
      const rotateX = ((y / rect.height) - 0.5) * -20;

      element.style.transform = `
        perspective(1200px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;
    };

    const reset = () => {
      element.style.transform =
        "perspective(1200px) rotateX(0deg) rotateY(0deg)";
    };

    element.addEventListener("mousemove", handleMove);
    element.addEventListener("mouseleave", reset);

    return () => {
      element.removeEventListener("mousemove", handleMove);
      element.removeEventListener("mouseleave", reset);
    };

  }, [ref]);

}
