import "./Consultar.css";
import registros from "../../mock/registros";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function Consultar() {
  const navigate = useNavigate();

  const [registroSelecionado, setRegistroSelecionado] =
    useState(null);

  useEffect(() => {
    const fecharPainel = () => {
      setRegistroSelecionado(null);
    };

    document.addEventListener("click", fecharPainel);

    return () => {
      document.removeEventListener(
        "click",
        fecharPainel
      );
    };
  }, []);

  return (
    <div className="consultar-page">

      <header className="consultar-header">

            <button
            className="btn-voltar"
            onClick={() => navigate("/")}
            >
            <FaArrowLeft />
            </button>

        <h1>Consultar</h1>

      </header>

      <div className="consultar-topo">

        <div>

          <h2>Matrícula</h2>

          <div className="search-box">

            <input
              placeholder="Digite aqui a matrícula"
            />

            <button>🔍</button>

          </div>

          <p className="trocar-busca">
            Ou clique aqui para pesquisar pelo nome
          </p>

        </div>

        <button className="exportar-btn">
          Exportar Base
        </button>

      </div>

      <div className="consultar-main">

        <div className="tabela-area">

          <table>

            <thead>

              <tr>

                <th>Matrícula</th>
                <th>Empresa</th>
                <th>Nome</th>
                <th>Cidade</th>
                <th>Data de Chegada</th>
                <th>Benefício</th>
                <th>Fazer</th>
                <th>Data de Saída</th>
                <th></th>

              </tr>

            </thead>

            <tbody>

              {registros.map((registro) => (

                <tr key={registro.id}>

                  <td>{registro.matriculaRegistrada}</td>

                  <td>{registro.empresa}</td>

                  <td>{registro.nomeCompleto}</td>

                  <td>{registro.cidade}</td>

                  <td>{registro.dataChegada}</td>

                  <td>{registro.beneficio}</td>

                  <td>{registro.fazer}</td>

                  <td>{registro.dataSaida}</td>

                  <td>

                    <button
                      className="menu-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setRegistroSelecionado(
                          registro
                        );
                      }}
                    >
                      ⋮
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

      {registroSelecionado && (

        <aside
          className="painel-lateral"
          onClick={(e) =>
            e.stopPropagation()
          }
        >

          <div className="painel-card">

            <div className="painel-topo">

              <h3>DADOS PESSOAIS</h3>

              <button className="editar-btn">
                ✏️
              </button>

            </div>

            <div className="dados-pessoais">

              <p>
                <strong>
                  {
                    registroSelecionado
                      .dadosPessoais
                      .nomeCompleto
                  }
                </strong>
              </p>

              <p>
                <strong>Matrícula:</strong>{" "}
                {
                  registroSelecionado
                    .dadosPessoais
                    .matricula
                }
              </p>

              <p>
                <strong>Rua:</strong>{" "}
                {
                  registroSelecionado
                    .dadosPessoais
                    .rua
                }
              </p>

              <p>
                <strong>Número:</strong>{" "}
                {
                  registroSelecionado
                    .dadosPessoais
                    .numero
                }
              </p>

              <p>
                <strong>Complemento:</strong>{" "}
                {
                  registroSelecionado
                    .dadosPessoais
                    .complemento
                }
              </p>

              <p>
                <strong>CEP:</strong>{" "}
                {
                  registroSelecionado
                    .dadosPessoais
                    .cep
                }
              </p>

              <p>
                <strong>Bairro:</strong>{" "}
                {
                  registroSelecionado
                    .dadosPessoais
                    .bairro
                }
              </p>

              <p>
                <strong>Cidade:</strong>{" "}
                {
                  registroSelecionado
                    .dadosPessoais
                    .cidade
                }
              </p>

              <p>
                <strong>Estado:</strong>{" "}
                {
                  registroSelecionado
                    .dadosPessoais
                    .estado
                }
              </p>

            </div>

            <button className="excluir-btn">
              🗑️
            </button>

          </div>

        </aside>

      )}

    </div>
  );
}

export default Consultar;