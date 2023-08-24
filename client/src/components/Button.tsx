const Button = ({ bgColor, color, text, padding, onClick }) => {
  const buttonStyle = {
    background: "transparent",
    backgroundColor: bgColor || "lightgrey",
    color: color || "",
    padding: padding || "0rem",
    borderStyle: "solid",
    borderRadius: "8px",
    borderColor: color || "",
  };
  return (
    <div>
      <button onClick={onClick} type="submit" id="submit" style={buttonStyle}>
        {text}
      </button>
    </div>
  );
};

export default Button;
