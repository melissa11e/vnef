import "./Home.css";
import envelope from "../../assets/images/envelope.png";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="notification">
        🔔
      </div>

      <div className="home-card">
        <div className="home-content">

          <div className="left-side">

            <h1>Bem vindo(a)!</h1>

            <h2>O que deseja fazer?</h2>

            <div className="buttons-container">

              <Button
                texto="Registrar"
                onClick={() => navigate("/registrar")}
              />

              <Button
                texto="Consultar"
                onClick={() => navigate("/consultar")}
              />

              <Button
                texto="Retirar"
                onClick={() => navigate("/menu-retirada")}
              />
              <Button texto="Postar" />

            </div>

          </div>

          <div className="right-side">

            <button className="import-button">
              Importar Base
            </button>

            {envelope}

          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;