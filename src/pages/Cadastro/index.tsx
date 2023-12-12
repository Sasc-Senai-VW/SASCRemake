import "./style.cadastro.css";

import ModalEquipamento from "../../components/ModalEquipamento";
import useModalEquipamento from "../../hooks/useModalEquipamento";
import ModalSetor from "../../components/ModalSetor";
import useModalSetor from "../../hooks/useModalSetor";
import ModalFuncionario from "../../components/ModalFuncionario";
import useModalFuncionario from "../../hooks/useModalFuncionario";
import ModalEndereco from "../../components/ModalEndereco";
import useModalEndereco from "../../hooks/useModalEndereco";
import ModalFabricante from "../../components/ModalFabricante";
import useModalFabricante from "../../hooks/useModalFabricante";
import ModalUnidade from "../../components/ModalUnidade";
import useModalUnidade from "../../hooks/useModalUnidade";
import ModalModelo from "../../components/ModalModelo";
import useModalModelo from "../../hooks/useModalModelo";
import { useEffect, useState } from "react";
import axios from "axios";
import api from "../../utils/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cadastro() {
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

  const [titulo, setTitulo] = useState("");
  const [id_unidade, setUnidade] = useState("");

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [id_tipofuncionario, setTipoFuncionario] = useState("");
  const [id_endereco, setEndereco] = useState("");

  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  const [titulofabricante, setTituloFabricante] = useState("");
  const [cnpj, setCnpj] = useState("");

  const [modelo, setMudelo] = useState("");
  const [consumo_nominal, setConsumoNominal] = useState("");
  const [id_fabricante, setFabricante] = useState("");
  const [id_tipoequipamento, setTipoEquipamento] = useState("");

  const handleSubmitEquipamento = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/equipamento", {
        id_modelo,
        data_compra,
        id_setor,
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  const handleSubmitSetor = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/setor", {
        titulo,
        id_unidade,
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  const handleSubmitFuncionario = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/funcionario", {
        nome,
        email,
        senha,
        id_setor,
        id_tipofuncionario,
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  const handleSubmitEndereco = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/endereco", {
        cep,
        logradouro,
        numero,
        bairro,
        cidade,
        estado,
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  const handleSubmitFabricante = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/fabricante", {
        titulo,
        cnpj,
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  const handleSubmitUnidade = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/unidade", {
        nome,
        id_endereco,
      })
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  };

  const handleSubmitModelo = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/modelo", {
        modelo,
        consumo_nominal,
        id_fabricante,
        id_tipoequipamento,
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

  const [unidades, setUnidades] = useState<any[]>([]);

  function listarUnidades() {
    api.get("unidade").then((response: any) => {
      console.log(response.data);
      setUnidades(response.data);
    });
  }

  const [tiposfuncionarios, setTiposFuncionarios] = useState<any[]>([]);

  function listarTiposFuncionarios() {
    api.get("tipofuncionario").then((response: any) => {
      console.log(response.data);
      setTiposFuncionarios(response.data);
    });
  }

  const [enderecos, setEnderecos] = useState<any[]>([]);

  function listarEnderecos() {
    api.get("endereco").then((response: any) => {
      console.log(response.data);
      setEnderecos(response.data);
    });
  }

  const [fabricantes, setFabricantes] = useState<any[]>([]);

  function listarFabricantes() {
    api.get("fabricante").then((response: any) => {
      console.log(response.data);
      setFabricantes(response.data);
    });
  }

  const [tiposequipamentos, setTiposEquipamentos] = useState<any[]>([]);

  function listarTiposEquipamentos() {
    api.get("tipoequipamento").then((response: any) => {
      console.log(response.data);
      setTiposEquipamentos(response.data);
    });
  }

  useEffect(() => {
    document.title = "Cadastro - SASC";

    listarModelos();
    listarSetores();
    listarUnidades();
    listarTiposFuncionarios();
    listarEnderecos();
    listarFabricantes();
    listarTiposEquipamentos();
  }, []);

  const { isOpenEquipamento, toggleEquipamento } = useModalEquipamento();
  const { isOpenSetor, toggleSetor } = useModalSetor();
  const { isOpenFuncionario, toggleFuncionario } = useModalFuncionario();
  const { isOpenEndereco, toggleEndereco } = useModalEndereco();
  const { isOpenFabricante, toggleFabricante } = useModalFabricante();
  const { isOpenUnidade, toggleUnidade } = useModalUnidade();
  const { isOpenModelo, toggleModelo } = useModalModelo();

  return (
    <>
      <ModalEquipamento
        isOpenEquipamento={isOpenEquipamento}
        toggleEquipamento={toggleEquipamento}
      >
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

      <ModalSetor isOpenSetor={isOpenSetor} toggleSetor={toggleSetor}>
        <div id="divformEquipamento">
          <h1>Cadastro de Setores</h1>
          <form id="formEquipamento" onSubmit={handleSubmitSetor}>
            <label>Titulo</label>
            <input
              className="inputEquipamento"
              type="string"
              value={titulo}
              onChange={(event) => setTitulo(event.target.value)}
            />

            <label>Unidade</label>
            <select
              className="selectEquipamento"
              name=""
              id="selectsetor"
              onChange={(event) => setUnidade(event.target.value)}
            >
              <option selected disabled value="">
                Selecione
              </option>
              {unidades.map((unidade: any, index: number) => {
                return (
                  <option key={index} value={unidade.id}>
                    {unidade.nome}
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
      </ModalSetor>

      <ModalFuncionario
        isOpenFuncionario={isOpenFuncionario}
        toggleFuncionario={toggleFuncionario}
      >
        <div id="divformEquipamento">
          <h1>Cadastro de Funcionarios</h1>
          <form id="formEquipamento" onSubmit={handleSubmitFuncionario}>
            <label>Nome</label>
            <input
              className="inputEquipamento"
              type="string"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />

            <label>Email</label>
            <input
              className="inputEquipamento"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <label>Senha</label>
            <input
              className="inputEquipamento"
              type="password"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
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

            <label>Tipo Funcionario</label>
            <select
              className="selectEquipamento"
              name=""
              id="selectsetor"
              onChange={(event) => setTipoFuncionario(event.target.value)}
            >
              <option selected disabled value="">
                Selecione
              </option>
              {tiposfuncionarios.map((tipofuncionario: any, index: number) => {
                return (
                  <option key={index} value={tipofuncionario.id}>
                    {tipofuncionario.categoria}
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
      </ModalFuncionario>

      <ModalEndereco
        isOpenEndereco={isOpenEndereco}
        toggleEndereco={toggleEndereco}
      >
        <div id="divformEquipamento">
          <h1>Cadastro de Endereço</h1>
          <form id="formEquipamento" onSubmit={handleSubmitEndereco}>
            <label>CEP</label>
            <input
              className="inputEquipamento"
              type="string"
              value={cep}
              onChange={(event) => setCep(event.target.value)}
            />

            <label>Logradouro</label>
            <input
              className="inputEquipamento"
              type="string"
              value={logradouro}
              onChange={(event) => setLogradouro(event.target.value)}
            />

            <label>Numero</label>
            <input
              className="inputEquipamento"
              type="string"
              value={numero}
              onChange={(event) => setNumero(event.target.value)}
            />

            <label>Bairro</label>
            <input
              className="inputEquipamento"
              type="string"
              value={bairro}
              onChange={(event) => setBairro(event.target.value)}
            />

            <label>Cidade</label>
            <input
              className="inputEquipamento"
              type="string"
              value={cidade}
              onChange={(event) => setCidade(event.target.value)}
            />

            <label>Estado</label>
            <input
              className="inputEquipamento"
              type="string"
              value={estado}
              onChange={(event) => setEstado(event.target.value)}
            />

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
      </ModalEndereco>

      <ModalFabricante
        isOpenFabricante={isOpenFabricante}
        toggleFabricante={toggleFabricante}
      >
        <div id="divformEquipamento">
          <h1>Cadastro de Fabricante</h1>
          <form id="formEquipamento" onSubmit={handleSubmitFabricante}>
            <label>Titulo</label>
            <input
              className="inputEquipamento"
              type="string"
              value={titulo}
              onChange={(event) => setTitulo(event.target.value)}
            />

            <label>Cnpj</label>
            <input
              className="inputEquipamento"
              type="string"
              value={cnpj}
              onChange={(event) => setCnpj(event.target.value)}
            />

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
      </ModalFabricante>

      <ModalUnidade isOpenUnidade={isOpenUnidade} toggleUnidade={toggleUnidade}>
        <div id="divformEquipamento">
          <h1>Cadastro de Unidades</h1>
          <form id="formEquipamento" onSubmit={handleSubmitUnidade}>
            <label>Nome</label>
            <input
              className="inputEquipamento"
              type="string"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />

            <label>Endereço</label>
            <select
              className="selectEquipamento"
              name=""
              id="selectsetor"
              onChange={(event) => setEndereco(event.target.value)}
            >
              <option selected disabled value="">
                Selecione
              </option>
              {enderecos.map((endereco: any, index: number) => {
                return (
                  <option key={index} value={endereco.id}>
                    {endereco.logradouro}
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
      </ModalUnidade>

      <ModalModelo isOpenModelo={isOpenModelo} toggleModelo={toggleModelo}>
        <div id="divformEquipamento">
          <h1>Cadastro de Modelos</h1>
          <form id="formEquipamento" onSubmit={handleSubmitModelo}>
            <label>Modelo</label>
            <input
              className="inputEquipamento"
              type="string"
              value={modelo}
              onChange={(event) => setMudelo(event.target.value)}
            />

            <label>Consumo Nominal</label>
            <input
              className="inputEquipamento"
              type="decimal"
              value={consumo_nominal}
              onChange={(event) => setConsumoNominal(event.target.value)}
            />

            <label>Fabricante</label>
            <select
              className="selectEquipamento"
              name=""
              id="selectsetor"
              onChange={(event) => setFabricante(event.target.value)}
            >
              <option selected disabled value="">
                Selecione
              </option>
              {fabricantes.map((fabricante: any, index: number) => {
                return (
                  <option key={index} value={fabricante.id}>
                    {fabricante.titulo}
                  </option>
                );
              })}
            </select>

            <label>Tipo Equipamento</label>
            <select
              className="selectEquipamento"
              name=""
              id="selectsetor"
              onChange={(event) => setTipoEquipamento(event.target.value)}
            >
              <option selected disabled value="">
                Selecione
              </option>
              {tiposequipamentos.map((tipoequipamento: any, index: number) => {
                return (
                  <option key={index} value={tipoequipamento.id}>
                    {tipoequipamento.tipo}
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
      </ModalModelo>

      <div id="cadastro">
        <div className="centering">
          <div className="articles">
            <article onClick={toggleEquipamento}>
              <figure>
                <img
                  src="https://img.freepik.com/fotos-gratis/fundo-de-armazenamento-em-nuvem-remixado-do-dominio-publico-pela-nasa_53876-104240.jpg?w=740&t=st=1701032336~exp=1701032936~hmac=2dae78e2e1f87548a4858ab01f691503ecdcb476746fa75947b97c0a9517c423"
                  alt="Preview"
                />
              </figure>
              <div className="article-preview">
                <h2>Equipamento</h2>
                <p>
                  Cadastro de equipamentos como: Servidores, switches, desktops,
                  acess points, etc.
                </p>
              </div>
            </article>

            <article onClick={toggleSetor}>
              <figure>
                <img
                  src="https://img.freepik.com/fotos-gratis/design-de-escritorio-moderno-com-equipamento-de-computador-gerado-por-ai_188544-22422.jpg?w=826&t=st=1701032456~exp=1701033056~hmac=681e741200b5fbd2be5bd0fb6a8b010b93e11a29a5f96e6b5a3c5ab04dfd0acb"
                  alt="Preview"
                />
              </figure>
              <div className="article-preview">
                <h2>Setor</h2>
                <p>
                  Cadastro de equipamentos como: Servidores, switches, desktops,
                  acess points, etc.
                </p>
              </div>
            </article>

            <article onClick={toggleFuncionario}>
              <figure>
                <img
                  src="https://img.freepik.com/fotos-gratis/empregados-jovens-sentados-no-escritorio-a-mesa-e-usando-um-laptop-uma-equipe-trabalham-brainstorming-reuniao-conceito_146671-15624.jpg?w=740&t=st=1701032487~exp=1701033087~hmac=6ecfbef85f3ff2daf47ca313f990607bc4232f7e4f137344ba9d890dca3401ec"
                  alt="Preview"
                />
              </figure>
              <div className="article-preview">
                <h2>Funcionário</h2>
                <p>
                  Cadastro de equipamentos como: Servidores, switches, desktops,
                  acess points, etc.
                </p>
              </div>
            </article>

            <article onClick={toggleEndereco}>
              <figure>
                <img
                  src="https://img.freepik.com/fotos-gratis/pinos-vermelhos-turva-no-mapa_23-2148510530.jpg?w=740&t=st=1701210263~exp=1701210863~hmac=f093f00ccb4da518ee553de1257cdbedfcdca02e520a4cb26c15a1bc5115ea7d"
                  alt="Preview"
                />
              </figure>
              <div className="article-preview">
                <h2>Endereço</h2>
                <p>
                  Cadastro de equipamentos como: Servidores, switches, desktops,
                  acess points, etc.
                </p>
              </div>
            </article>

            <article onClick={toggleFabricante}>
              <figure>
                <img
                  src="https://img.freepik.com/vetores-gratis/fundo-realista-do-processador-de-microchip_23-2148885300.jpg?w=740&t=st=1701210313~exp=1701210913~hmac=acbc81ff2dbefbebbc9eb85b099c72298eb39834bc53dda2c29ae6ab045a0b5b"
                  alt="Preview"
                />
              </figure>
              <div className="article-preview">
                <h2>Fabricante</h2>
                <p>
                  Cadastro de equipamentos como: Servidores, switches, desktops,
                  acess points, etc.
                </p>
              </div>
            </article>

            <article onClick={toggleUnidade}>
              <figure>
                <img
                  src="https://img.freepik.com/fotos-gratis/interior-de-um-grande-armazem-logistico-ai-generative_123827-23884.jpg?w=740&t=st=1701210441~exp=1701211041~hmac=33f44cb8698515f32ab41634904650dec2269bdb8f85cd80ba4b36bc6840659f"
                  alt="Preview"
                />
              </figure>
              <div className="article-preview">
                <h2>Unidade</h2>
                <p>
                  Cadastro de equipamentos como: Servidores, switches, desktops,
                  acess points, etc.
                </p>
              </div>
            </article>

            <article onClick={toggleModelo}>
              <figure>
                <img
                  src="https://img.freepik.com/fotos-gratis/interior-de-um-grande-armazem-logistico-ai-generative_123827-23884.jpg?w=740&t=st=1701210441~exp=1701211041~hmac=33f44cb8698515f32ab41634904650dec2269bdb8f85cd80ba4b36bc6840659f"
                  alt="Preview"
                />
              </figure>
              <div className="article-preview">
                <h2>Modelo</h2>
                <p>
                  Cadastro de equipamentos como: Servidores, switches, desktops,
                  acess points, etc.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
