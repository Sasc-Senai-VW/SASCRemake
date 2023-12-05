import React, { ReactNode } from "react";
import "./style.modalequipamento.css";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggleEquipamento: () => void;
}

export default function ModalEquipamento(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <div id="modalBackground" onClick={props.toggleEquipamento}>
          <div onClick={(e) => e.stopPropagation()} id="modal">
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
