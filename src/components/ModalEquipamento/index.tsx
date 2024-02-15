import { ReactNode } from "react";
import "./style.modalequipamento.css";

interface ModalType {
  children?: ReactNode;
  isOpenEquipamento: boolean;
  toggleEquipamento: () => void;
}

export default function ModalEquipamento(props: ModalType) {
  return (
    <>
      {props.isOpenEquipamento && (
        <div id="modalBackgroundEquipamento" onClick={props.toggleEquipamento}>
          <div onClick={(e) => e.stopPropagation()} id="modalEquipamento">
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
