import { useEffect } from "react";

export default function magneticButton(ref) {

  useEffect(() => {

    const element = ref.current;

    if (!element) return;

    const move = (e) => {

      const rect = element.getBoundingClientRect();

      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      element.style.transform =
        `translate(${x * 0.18}px, ${y * 0.18}px)`;

    };

    const reset = () => {

      element.style.transform = "translate(0,0)";

    };

    element.addEventListener("mousemove", move);
    element.addEventListener("mouseleave", reset);

    return () => {

      element.removeEventListener("mousemove", move);
      element.removeEventListener("mouseleave", reset);

    };

  }, [ref]);

}