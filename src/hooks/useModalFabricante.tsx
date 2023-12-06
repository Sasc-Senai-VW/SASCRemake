import { useState } from "react";

export default function useModalFabricante() {
  const [isOpenFabricante, setisFabricante] = useState(false);

  const toggleFabricante = () => {
    setisFabricante(!isOpenFabricante);
  };

  return {
    isOpenFabricante,
    toggleFabricante,
  };
}
