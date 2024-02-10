import { useState } from "react";

export default function useModalEndereco() {
  const [isOpenEndereco, setisOpenEndereco] = useState(false);

  const toggleEndereco = () => {
    setisOpenEndereco(!isOpenEndereco);
  };

  return {
    isOpenEndereco,
    toggleEndereco,
  };
}
