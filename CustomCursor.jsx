import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    let cx = 0, cy = 0, rx = 0, ry = 0;

    const handleMouseMove = (e) => {
      cx = e.clientX;
      cy = e.clientY;
      dot.style.left = cx + 'px';
      dot.style.top = cy + 'px';
    };

    const loop = () => {
      rx += (cx - rx) * 0.12;
      ry += (cy - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const animationFrameId = requestAnimationFrame(loop);

    const handleMouseOver = () => { dot.classList.add('hover'); ring.classList.add('hover'); };
    const handleMouseOut = () => { dot.classList.remove('hover'); ring.classList.remove('hover'); };

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseover', handleMouseOver);
      el.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      document.querySelectorAll('a, button').forEach(el => {
        el.removeEventListener('mouseover', handleMouseOver);
        el.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={ringRef} className="cursor-ring"></div>
    </>
  );
};

export default CustomCursor;