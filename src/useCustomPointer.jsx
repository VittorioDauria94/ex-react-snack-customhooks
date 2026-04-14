import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function useCustomPointer(pointerContent) {
  const pointerRef = useRef(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    function handleMouseMove(e) {
      if (!pointerRef.current) return;

      pointerRef.current.style.left = `${e.clientX}px`;
      pointerRef.current.style.top = `${e.clientY}px`;
      pointerRef.current.style.opacity = "1";
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.head.removeChild(style);
    };
  }, []);

  return createPortal(
    <div
      ref={pointerRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 999999,
        opacity: 0,
      }}
    >
      {pointerContent}
    </div>,
    document.body,
  );
}
