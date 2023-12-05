import { useState } from "react";

export default function useModalEquipamento() {
  const [isOpen, setisOpen] = useState(false);

  const toggleEquipamento = () => {
    setisOpen(!isOpen);
  };

  return {
    isOpen,
    toggleEquipamento,
  };
}
