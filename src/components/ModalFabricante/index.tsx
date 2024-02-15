import { ReactNode } from "react";
import "./style.modalfabricante.css";

interface ModalType {
  children?: ReactNode;
  isOpenFabricante: boolean;
  toggleFabricante: () => void;
}

export default function ModalFabricante(props: ModalType) {
  return (
    <>
      {props.isOpenFabricante && (
        <div id="modalBackgroundFabricante" onClick={props.toggleFabricante}>
          <div onClick={(e) => e.stopPropagation()} id="modalFabricante">
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
