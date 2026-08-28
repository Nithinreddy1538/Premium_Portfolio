import { useEffect, useRef, useState } from "react";
import "./Cursor.css";

function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [active, setActive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouch) {
      setIsTouchDevice(true);
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const render = () => {
      // Smooth lerping for trailing ring
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    const mouseEnter = () => setActive(true);
    const mouseLeave = () => setActive(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animId = requestAnimationFrame(render);

    const elements = document.querySelectorAll(
      "a, button, .project-card, .card, .floating-card, input, textarea, .menu-icon"
    );

    elements.forEach((el) => {
      el.addEventListener("mouseenter", mouseEnter);
      el.addEventListener("mouseleave", mouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", mouseEnter);
        el.removeEventListener("mouseleave", mouseLeave);
      });
    };
  }, []);

  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      <div ref={dotRef} className={`cursor-dot ${active ? "active" : ""}`} />
      <div ref={ringRef} className={`cursor-ring ${active ? "active" : ""}`} />
    </>
  );
}

export default Cursor;