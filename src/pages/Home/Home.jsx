import "./Home.css";
import envelope from "../../assets/images/envelope.png";
import Button from "../../components/Button/Button";

function Home() {
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
              <Button texto="Registrar" />
              <Button texto="Consultar" />
              <Button texto="Retirar" />
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