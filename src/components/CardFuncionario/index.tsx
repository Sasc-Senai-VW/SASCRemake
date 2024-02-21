import "./style.cardfuncionario.css";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import Funcionario from "../../pages/Funcionario";

export default function CardFuncionario(props: any) {
  // props.funcionario;

  return (
    <>
      <tr id="linhas">
        <td>{props.id}</td>
        <td>{props.nome}</td>
        <td>{props.email}</td>
        <td>{props.titulo}</td>
        <td>{props.tipofuncionario}</td>
        <td id="acoes">
          <a
            id="delete"
            className="buttonsCardEquipamento"
            onClick={() => props.excluirFuncionario(props.id)}
          >
            <FaTrash />
          </a>
        </td>
      </tr>
    </>
  );
}
