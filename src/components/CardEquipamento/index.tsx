import "./style.cardequipamento.css";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function CardEquipamento(props: any) {
  props.equipamento;

  return (
    <>
      <tr id="linhas">
        <td>{props.id}</td>
        <td>{props.modelo}</td>
        <td>{props.fabricante}</td>
        <td>{props.consumo_nominal}</td>
        <td>{props.data_compra}</td>
        <td>{props.setor}</td>
        <td id="acoes">
          <span id="edit" className="buttonsCardEquipamento">
            <FaPen />
          </span>
          <span id="delete" className="buttonsCardEquipamento">
            <FaTrash />
          </span>
        </td>
      </tr>
    </>
  );
}
