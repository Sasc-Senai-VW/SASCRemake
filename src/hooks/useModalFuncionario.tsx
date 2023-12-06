import { useState } from "react";

export default function useModalFuncionario() {
  const [isOpenFuncionario, setisOpenSetorFuncionario] = useState(false);

  const toggleFuncionario = () => {
    setisOpenSetorFuncionario(!isOpenFuncionario);
  };

  return {
    isOpenFuncionario,
    toggleFuncionario,
  };
}
