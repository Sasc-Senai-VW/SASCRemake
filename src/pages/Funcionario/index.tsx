import { useEffect, useState } from "react";
import "./style.funcionario.css";
import api from "../../utils/api";
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

  function excluirFuncionario(idFuncionario: string) {
    api
      .delete(`funcionario/${idFuncionario}`)
      .then(() => {
        const novaLista = funcionarios.filter(
          (funcionario) => funcionario.id !== idFuncionario
        );
        setFuncionarios(novaLista);
      })
      .catch((error) => {
        console.error("Erro ao excluir funcionário:", error);
      });
  }

  return (
    <>
      <div id="funcionario">
        <table id="tabela">
          <thead>
            <tr id="coluna">
              {/* <th scope="col">ID</th> */}
              <th scope="col">NOME</th>
              <th scope="col">EMAIL</th>
              <th scope="col">UNIDADE</th>
              <th scope="col">TIPO FUNCIONARIO</th>
              <th scope="col">EXCLUIR</th>
            </tr>
          </thead>
          <tbody id="bodyTabela">
            {funcionarios.map((funcionario: any, _index: any) => {
              return (
                <CardFuncionario
                  // id={funcionario.id}
                  nome={funcionario.nome}
                  email={funcionario.email}
                  titulo={funcionario.setor.titulo}
                  tipofuncionario={funcionario.tipofuncionario.categoria}
                  excluirFuncionario={excluirFuncionario}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
