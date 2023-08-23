import { useEffect, useState } from "react";

const TextInput = ({ icon, placeholder, borderColor, labelText, width }) => {
  const [addClass, setAddlass] = useState<boolean>(true);
  const inputStyle = {
    padding: ".6rem 1rem .6rem 3rem",
    borderRadius: "8px",
    borderStyle: "solid",
    borderColor: borderColor || "",
    outline: "unset",
    width: width || "0rem",
    display: "block",
  };

  const contStyle = {
    position: "relative",
    color: borderColor,
    bottom: ".45rem",
  };

  // useEffect(() => {
  //    icon ? setAddlass(true) : setAddlass(false);
  // },[])

  //apply Later
  //   const iconStyle = {
  //     position: "absolute",
  //     top: ".5rem",
  //     left: "1rem",
  //   };

  return (
    <div>
      <p>{labelText}</p>
      <div className={icon ? `input-cont` : ""} style={contStyle}>
        {icon && icon}
        <input type="text" placeholder={placeholder} style={inputStyle} />
      </div>
    </div>
  );
};

export default TextInput;
