import { useState } from "react";

export default function useModalUnidade() {
  const [isOpenUnidade, setisOpenUnidade] = useState(false);

  const toggleUnidade = () => {
    setisOpenUnidade(!isOpenUnidade);
  };

  return {
    isOpenUnidade,
    toggleUnidade,
  };
}
