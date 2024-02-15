import { useEffect, useState } from "react";
import "./style.equipamento.css";
import api from "../../utils/api";
import CardEquipamento from "../../components/CardEquipamento";

import "react-toastify/dist/ReactToastify.css";

export default function Equipamento() {
  const [equipamentos, setEquipamentos] = useState<any[]>([]);

  function listarEquipamento() {
    api.get("equipamento").then((response: any) => {
      console.log(response.data);
      setEquipamentos(response.data);
    });
  }

  useEffect(() => {
    document.title = "Equipamento - SASC";

    listarEquipamento();
    listarModelos();
    listarSetores();
  }, []);

  const [, setModelos] = useState<any[]>([]);

  function listarModelos() {
    api.get("modelo").then((response: any) => {
      console.log(response.data);
      setModelos(response.data);
    });
  }

  const [, setSetores] = useState<any[]>([]);

  function listarSetores() {
    api.get("setor").then((response: any) => {
      console.log(response.data);
      setSetores(response.data);
    });
  }

  return (
    <>
      <div id="equipamento">
        <table id="tabela">
          <thead>
            <tr id="coluna">
              <th scope="col">ID</th>
              <th scope="col">MODELO</th>
              <th scope="col">FABRICANTE</th>
              <th scope="col">CONSUMO NOMINAL</th>
              <th scope="col">DATA</th>
              <th scope="col">SETOR</th>
              <th scope="col">AÇÕES</th>
            </tr>
          </thead>
          <tbody id="bodyTabela">
            {equipamentos.map((equipamento: any) => {
              return (
                <CardEquipamento
                  id={equipamento.id}
                  modelo={equipamento.modelo.modelo}
                  fabricante={equipamento.modelo.fabricante.titulo}
                  consumo_nominal={equipamento.modelo.consumo_nominal}
                  data_compra={equipamento.data_compra}
                  setor={equipamento.setor.titulo}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
