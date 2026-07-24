import "./MenuRetirada.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function MenuRetirada() {
  const navigate = useNavigate();

  return (
    <div className="menu-retirada-page">

      <header className="menu-retirada-header">

        <button
          className="btn-voltar"
          onClick={() => navigate("/")}
        >
          <FaArrowLeft />
        </button>

        <h1>Retirada</h1>

      </header>

      <main className="menu-retirada-content">

        <h2>Selecione uma opção:</h2>

        <div className="opcoes-container">

          <button
            className="opcao-btn"
            onClick={() =>
              navigate("/retirada-email")
            }
          >
            Enviar e-mail
          </button>

          <button
            className="opcao-btn"
            onClick={() =>
              navigate("/retirada-presencial")
            }
          >
            Retirada
            <br />
            presencial
          </button>

        </div>

      </main>

    </div>
  );
}

export default MenuRetirada;