import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const fadeUp = (element) => {
  gsap.from(element, {
    y: 100,
    opacity: 0,
    duration: 1.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
    },
  });
};

export const slideLeft = (element) => {
  gsap.from(element, {
    x: -120,
    opacity: 0,
    duration: 1.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
    },
  });
};

export const slideRight = (element) => {
  gsap.from(element, {
    x: 120,
    opacity: 0,
    duration: 1.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
    },
  });
};

export const zoomIn = (element) => {
  gsap.from(element, {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
    },
  });
};