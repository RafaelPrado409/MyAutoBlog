import React from 'react';

import './styles.css';

interface InputProps {
  placeholder: string;
  label: string;
  name: string;
  type: string;
}

const input: React.FC<InputProps> = ({
  placeholder,
  label,
  name,
  type,
  ...rest
}) => {
  return (
    <div className="page-signin">
      <label htmlFor="">{label}</label>
      <input type={type} id={name} placeholder={placeholder} {...rest} />
    </div>
  );
};

export default input;
