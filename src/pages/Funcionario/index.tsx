import { useEffect, useState } from "react";
import "./style.funcionario.css";
import api from "../../utils/api";
import React from "react";
import CardFuncionario from "../../components/CardFuncionario";

export default function Funcionario() {
  const [funcionarios, setFuncionarios] = useState<any[]>([]);

  function listarFuncionarios() {
    api.get("funcionario").then((response: any) => {
      console.log(response.data);
      setFuncionarios(response.data);
    });
  }

  useEffect(() => {
    document.title = "Funcionario - SASC";

    listarFuncionarios();
  }, []);

  return (
    <>
      <div id="funcionario">
        <table id="tabela">
          <thead>
            <tr id="coluna">
              <th scope="col">ID</th>
              <th scope="col">NOME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">UNIDADE</th>
              <th scope="col">TIPO FUNCIONARIO</th>
              <th scope="col">AÇÕES</th>
            </tr>
          </thead>
          <tbody id="bodyTabela">
            {funcionarios.map((funcionario: any, index: any) => {
              return (
                <CardFuncionario
                  id={funcionario.id}
                  nome={funcionario.nome}
                  email={funcionario.email}
                  tituloSetor={funcionario.setor.titulo}
                  tipofuncionario={funcionario.tipofuncionario.categoria}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
