import { ReactNode } from "react";
import "./style.modalfuncionario.css";

interface ModalType {
  children?: ReactNode;
  isOpenFuncionario: boolean;
  toggleFuncionario: () => void;
}

export default function ModalFuncionario(props: ModalType) {
  return (
    <>
      {props.isOpenFuncionario && (
        <div id="modalBackgroundFuncionario" onClick={props.toggleFuncionario}>
          <div onClick={(e) => e.stopPropagation()} id="modalFuncionario">
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
