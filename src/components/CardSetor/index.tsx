import "./style.cardsetor.css";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function CardSetor(props: any) {
  props.setor;

  return (
    <>
      <tr id="linhas">
        <td>{props.id}</td>
        <td>{props.titulo}</td>
        <td>{props.nomeUnidade}</td>
        <td>{props.cep}</td>
        <td>{props.logradouro}</td>
        <td>{props.estado}</td>
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
