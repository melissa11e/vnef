import "./Button.css";

function Button({ texto, onClick, tipo = "primary" }) {
  return (
    <button
      className={`custom-button ${tipo}`}
      onClick={onClick}
    >
      {texto}
    </button>
  );
}

export default Button;