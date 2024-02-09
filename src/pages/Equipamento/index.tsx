import { useEffect, useState } from "react";
import "./style.equipamento.css";
import api from "../../utils/api";
import CardEquipamento from "../../components/CardEquipamento";
import React from "react";

import ModalEquipamento from "../../components/ModalEquipamento";
import useModalEquipamento from "../../hooks/useModalEquipamento";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
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

  const notify = () =>
    toast.success("Cadastrado", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const [id_modelo, setModelo] = useState("");
  const [data_compra, setData] = useState("");
  const [id_setor, setSetor] = useState("");

  const handleSubmitEquipamento = (event) => {
    event.preventDefault();

    axios
      .post("https://apisasc.azurewebsites.net/equipamento", {
        id_modelo,
        data_compra,
        id_setor,
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  const [modelos, setModelos] = useState<any[]>([]);

  function listarModelos() {
    api.get("modelo").then((response: any) => {
      console.log(response.data);
      setModelos(response.data);
    });
  }

  const [setores, setSetores] = useState<any[]>([]);

  function listarSetores() {
    api.get("setor").then((response: any) => {
      console.log(response.data);
      setSetores(response.data);
    });
  }

  const { isOpen, toggleEquipamento } = useModalEquipamento();

  return (
    <>
      <ModalEquipamento isOpen={isOpen} toggleEquipamento={toggleEquipamento}>
        <div id="divformEquipamento">
          <h1>Cadastro de Equipamentos</h1>
          <form id="formEquipamento" onSubmit={handleSubmitEquipamento}>
            <label>Modelo</label>
            <select
              className="selectEquipamento"
              name=""
              id="selectModelo"
              onChange={(event) => setModelo(event.target.value)}
            >
              <option selected disabled value="">
                Selecione
              </option>
              {modelos.map((modelo: any, index: number) => {
                return (
                  <option key={index} value={modelo.id}>
                    {modelo.modelo}
                  </option>
                );
              })}
            </select>

            <label>Data</label>
            <input
              className="inputEquipamento"
              type="date"
              value={data_compra}
              onChange={(event) => setData(event.target.value)}
            />

            <label>Setor</label>
            <select
              className="selectEquipamento"
              name=""
              id="selectsetor"
              onChange={(event) => setSetor(event.target.value)}
            >
              <option selected disabled value="">
                Selecione
              </option>
              {setores.map((setor: any, index: number) => {
                return (
                  <option key={index} value={setor.id}>
                    {setor.titulo}
                  </option>
                );
              })}
            </select>

            <button onClick={notify} id="submitEquipamento" type="submit">
              CADASTRAR
            </button>
            <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </form>
        </div>
      </ModalEquipamento>
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
            {equipamentos.map((equipamento: any, index: any) => {
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
