import { useState } from "react";

export default function useModalEquipamento() {
  const [isOpenEquipamento, setisOpenEquipamento] = useState(false);

  const toggleEquipamento = () => {
    setisOpenEquipamento(!isOpenEquipamento);
  };

  return {
    isOpenEquipamento,
    toggleEquipamento,
  };
}
