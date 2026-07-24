import "./Button.css";

function Button({
  texto,
  icone,
  onClick,
  tipo = "primary",
  className = ""
}) {
  return (
    <button
      className={`custom-button ${tipo} ${className}`}
      onClick={onClick}
    >
      {icone && (
        <span className="button-icon">
          {icone}
        </span>
      )}

      {texto}
    </button>
  );
}

export default Button;