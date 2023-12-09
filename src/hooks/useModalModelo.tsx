import { useState } from "react";

export default function useModalModelo() {
  const [isOpenModelo, setisOpenModelo] = useState(false);

  const toggleModelo = () => {
    setisOpenModelo(!isOpenModelo);
  };

  return {
    isOpenModelo,
    toggleModelo,
  };
}
