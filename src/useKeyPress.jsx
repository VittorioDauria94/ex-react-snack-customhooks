import { useEffect, useState } from "react";

export default function useKeyPress(key = "") {
  const [isEnterPressed, setIsEnterPressed] = useState(false);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === key) {
        setIsEnterPressed(true);
      }
    }

    function handleKeyUp(event) {
      if (event.key === key) {
        setIsEnterPressed(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [key]);

  return isEnterPressed;
}
