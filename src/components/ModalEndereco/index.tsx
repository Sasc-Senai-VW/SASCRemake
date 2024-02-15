import { ReactNode } from "react";
import "./style.modalendereco.css";

interface ModalType {
  children?: ReactNode;
  isOpenEndereco: boolean;
  toggleEndereco: () => void;
}

export default function ModalEndereco(props: ModalType) {
  return (
    <>
      {props.isOpenEndereco && (
        <div id="modalBackgroundEndereco" onClick={props.toggleEndereco}>
          <div onClick={(e) => e.stopPropagation()} id="modalEndereco">
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
