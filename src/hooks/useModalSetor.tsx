import { useState } from "react";

export default function useModalSetor() {
  const [isOpenSetor, setisOpenSetor] = useState(false);

  const toggleSetor = () => {
    setisOpenSetor(!isOpenSetor);
  };

  return {
    isOpenSetor,
    toggleSetor,
  };
}
