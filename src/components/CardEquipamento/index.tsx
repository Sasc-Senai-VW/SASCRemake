import "./style.cardequipamento.css";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import axios from "axios";

export default function CardEquipamento(props: any) {
  props.equipamento;

  const buttonDelete = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    axios
      .delete("https://apisasc.azurewebsites.net/modelo", {})
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <tr id="linhas">
        {/* <td>{props.id}</td> */}
        <td>{props.modelo}</td>
        <td>{props.fabricante}</td>
        <td>{props.consumo_nominal}</td>
        <td>{props.data_compra}</td>
        <td>{props.setor}</td>
        <td id="acoes">
          {/* <span id="edit" className="buttonsCardEquipamento">
            <FaPen />
          </span> */}

          <span
            id="delete"
            className="buttonsCardEquipamento"
            onClick={() => props.excluirEquipamento(props.id)}
          >
            <FaTrash />
          </span>
        </td>
      </tr>
    </>
  );
}
