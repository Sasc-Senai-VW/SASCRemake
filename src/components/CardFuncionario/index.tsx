import "./style.cardfuncionario.css";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function CardFuncionario(props: any) {
  props.funcionario;

  return (
    <>
      <tr id="linhas">
        <td>{props.id}</td>
        <td>{props.nome}</td>
        <td>{props.email}</td>
        <td>{props.tituloSetor}</td>
        <td>{props.tipofuncionario}</td>
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
