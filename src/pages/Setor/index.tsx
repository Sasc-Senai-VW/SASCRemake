import { useEffect, useState } from "react";
import "./style.setor.css";
import api from "../../utils/api";
import CardSetor from "../../components/CardSetor";

export default function Setor() {
  const [setores, setSetores] = useState<any[]>([]);

  function listarSetores() {
    api.get("setor").then((response: any) => {
      console.log(response.data);
      setSetores(response.data);
    });
  }

  useEffect(() => {
    document.title = "Setor - SASC";

    listarSetores();
  }, []);

  function excluirsetor(idSetor: string) {
    api
      .delete(`setor/${idSetor}`)
      .then(() => {
        const novaLista = setores.filter((setor) => setor.id !== idSetor);
        setSetores(novaLista);
      })
      .catch((error) => {
        console.error("Erro ao excluir funcionário:", error);
      });
  }

  return (
    <>
      <div id="equipamento">
        <table id="tabela">
          <thead>
            <tr id="coluna">
              {/* <th scope="col">ID</th> */}
              <th scope="col">TITULO</th>
              <th scope="col">UNIDADE</th>
              <th scope="col">CEP</th>
              <th scope="col">LOGRADOURO</th>
              <th scope="col">ESTADO</th>
              <th scope="col">EXCLUIR</th>
            </tr>
          </thead>
          <tbody id="bodyTabela">
            {setores.map((setor: any, _index: any) => {
              return (
                <CardSetor
                  // id={setor.id}
                  titulo={setor.titulo}
                  nomeUnidade={setor.unidade.nome}
                  cep={setor.unidade.endereco.cep}
                  logradouro={setor.unidade.endereco.logradouro}
                  estado={setor.unidade.endereco.estado}
                  excluirsetor={excluirsetor}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
