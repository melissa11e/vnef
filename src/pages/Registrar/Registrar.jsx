import "./Registrar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function Registrar() {
  const navigate = useNavigate();
  
  const [empresa, setEmpresa] = useState("Hitss");
  const [beneficio, setBeneficio] = useState("Alelo");
  const [acao, setAcao] = useState("Retirar");

  const [tipoBusca, setTipoBusca] = useState("matricula");

  const [busca, setBusca] = useState("");

  const [colaborador, setColaborador] = useState(null);

  const [mostrarModal, setMostrarModal] = useState(false);

  const pesquisar = () => {
    setColaborador({
      nome: "Melissa Alvarenga",
      cidade: "São Paulo - SP"
    });
  };

  const alternarBusca = () => {
    setBusca("");

    setTipoBusca(
      tipoBusca === "matricula"
        ? "nome"
        : "matricula"
    );

    setColaborador(null);
  };

  return (
    <div className="registrar-page">

      <header className="registrar-header">

        <button
          className="btn-voltar"
          onClick={() => navigate("/")}
        >
          <FaArrowLeft />
        </button>

        <h1>Registrar</h1>

      </header>

      <div className="registrar-content">

        <div className="lado-esquerdo">
          <div className="painel-esquerdo">

            <h3>Empresa:</h3>

            <div className="switch-container">
              <div
                className={`switch-slider ${
                  empresa === "Claro" ? "direita" : ""
                }`}
              ></div>

              <button
                className="switch-option"
                onClick={() => setEmpresa("Hitss")}
              >
                Hitss
              </button>

              <button
                className="switch-option"
                onClick={() => setEmpresa("Claro")}
              >
                Claro
              </button>
            </div>

            <h3>Benefício:</h3>

            <div className="beneficios">
              <button
                className={beneficio === "Alelo" ? "ativo" : ""}
                onClick={() => setBeneficio("Alelo")}
              >
                Alelo
              </button>

              <button
                className={beneficio === "Pod" ? "ativo" : ""}
                onClick={() => setBeneficio("Pod")}
              >
                Pod
              </button>

              <button
                className={beneficio === "VT" ? "ativo" : ""}
                onClick={() => setBeneficio("VT")}
              >
                VT
              </button>
            </div>

            <h3>O que fazer?</h3>

            <div className="switch-container">
              <div
                className={`switch-slider ${
                  acao === "Postar" ? "direita" : ""
                }`}
              ></div>

              <button
                className="switch-option"
                onClick={() => setAcao("Retirar")}
              >
                Retirar
              </button>

              <button
                className="switch-option"
                onClick={() => setAcao("Postar")}
              >
                Postar
              </button>
            </div>

          </div>
        </div>

        <div className="lado-direito">
          <div className="painel-direito">

            <h2>
              {tipoBusca === "matricula"
                ? "Matrícula"
                : "Nome"}
            </h2>

            <div className="search-box">

              <input
                type="text"
                placeholder={
                  tipoBusca === "matricula"
                    ? "Digite aqui a matrícula"
                    : "Digite aqui o nome"
                }
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && pesquisar()
                }
              />

              <button onClick={pesquisar}>
                🔍
              </button>

            </div>

            <p
              className="trocar-busca"
              onClick={alternarBusca}
            >
              {tipoBusca === "matricula"
                ? "Ou clique aqui para pesquisar pelo nome."
                : "Ou clique aqui para pesquisar pela matrícula."}
            </p>

            {colaborador && (
              <div className="card-colaborador">
                <strong>{colaborador.nome}</strong>
                <p>{colaborador.cidade}</p>
              </div>
            )}

            <button
              className="registrar-btn"
              onClick={() => setMostrarModal(true)}
            >
              Registrar
            </button>

          </div>
        </div>

      </div>

    </div>
  );
}

export default Registrar;