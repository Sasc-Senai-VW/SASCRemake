import { ReactNode } from "react";
import "./style.modalunidade.css";

interface ModalType {
  children?: ReactNode;
  isOpenUnidade: boolean;
  toggleUnidade: () => void;
}

export default function ModalUnidade(props: ModalType) {
  return (
    <>
      {props.isOpenUnidade && (
        <div id="modalBackgroundUnidade" onClick={props.toggleUnidade}>
          <div onClick={(e) => e.stopPropagation()} id="modalUnidade">
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
