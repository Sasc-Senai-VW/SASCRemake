import "./style.menu.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/LogoSASCBasic1 2.svg";
import { FaHome } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { FaServer } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { RiLogoutCircleFill } from "react-icons/ri";
import { FaChartArea } from "react-icons/fa";
import secureLocalStorage from "react-secure-storage";

export default function Menu() {
  const navigate = useNavigate();

  function deslogar() {
    secureLocalStorage.removeItem("user");
    navigate("/login");
    navigate(0);
  }
  return (
    <>
      <nav id="menuLateral">
        <div id="sidebarCima">
          <img id="logoMenu" src={logo} alt="SASC LOGO" />
          <h3>SASC</h3>
        </div>
        <div id="sidebarLinks">
          <ul>
            <li className="normalLink">
              <Link className="linkAtivo" to="/home">
                <div className="iconMenu">
                  <FaHome className="linkHide" />
                </div>
                <span className="linkHide">Home</span>
              </Link>
            </li>
            <li className="normalLink">
              <Link to="/dashboard">
                <div className="iconMenu">
                  <FaChartArea className="linkHide" />
                </div>
                <span className="linkHide">Dashboard</span>
              </Link>
            </li>
            <li className="normalLink">
              <Link to="/cadastro">
                <div className="iconMenu">
                  <FaCirclePlus className="linkHide" />
                </div>
                <span className="linkHide">Cadastro</span>
              </Link>
            </li>
            <li className="normalLink">
              <Link to="/equipamento">
                <div className="iconMenu">
                  <FaServer className="linkHide" />
                </div>
                <span className="linkHide">Equipamento</span>
              </Link>
            </li>
            <li className="normalLink">
              <Link to="/setor">
                <div className="iconMenu">
                  <FaBuilding className="linkHide" />
                </div>
                <span className="linkHide">Setor</span>
              </Link>
            </li>
            <li className="normalLink">
              <Link to="/funcionario">
                <div className="iconMenu">
                  <FaUser className="linkHide" />
                </div>
                <span className="linkHide">Funcionário</span>
              </Link>
            </li>
            <li id="sairLink">
              <Link to={"/"} onClick={deslogar}>
                <div className="iconMenu">
                  <RiLogoutCircleFill />
                </div>
                <span className="linkHide">Sair</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
