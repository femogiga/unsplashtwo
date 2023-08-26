import { useEffect, useState } from 'react';

const TextInput = ({
  icon,
  placeholder,
  borderColor,
  labelText,
  width,
  value,
  onChange,
  type
}) => {
  const [addClass, setAddlass] = useState<boolean>(true);
  const inputStyle = {
    padding: '.6rem 1rem .6rem 3rem',
    borderRadius: '8px',
    borderStyle: 'solid',
    borderColor: borderColor || '',
    outline: 'unset',
    width: width || '0rem',
    display: 'block',
  };

  const contStyle = {
    position: 'relative',
    color: borderColor,
    bottom: '.45rem',
  };

  return (
    <div>
      <p>{labelText}</p>
      <div className={icon ? `input-cont` : ''} style={contStyle}>
        {icon && icon}
        <input
          type={type}
          placeholder={placeholder}
          style={inputStyle}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default TextInput;
