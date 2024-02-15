import { ReactNode } from "react";
import "./style.modalmodelo.css";

interface ModalType {
  children?: ReactNode;
  isOpenModelo: boolean;
  toggleModelo: () => void;
}

export default function ModalModelo(props: ModalType) {
  return (
    <>
      {props.isOpenModelo && (
        <div id="modalBackgroundModelo" onClick={props.toggleModelo}>
          <div onClick={(e) => e.stopPropagation()} id="modalModelo">
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
