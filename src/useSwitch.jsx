import { useState } from "react";

export default function useSwitch(initialvalue) {
  const [isOn, setIsOn] = useState(initialvalue);

  const toggle = () => setIsOn(!isOn);

  return [isOn, toggle];
}
