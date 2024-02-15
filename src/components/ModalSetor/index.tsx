import { ReactNode } from "react";
import "./style.modalsetor.css";

interface ModalType {
  children?: ReactNode;
  isOpenSetor: boolean;
  toggleSetor: () => void;
}

export default function ModalSetor(props: ModalType) {
  return (
    <>
      {props.isOpenSetor && (
        <div id="modalBackgroundSetor" onClick={props.toggleSetor}>
          <div onClick={(e) => e.stopPropagation()} id="modalSetor">
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
