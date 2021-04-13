import React from 'react';

import './styles.css';

interface InputProps {
  firstButtonText: string;
  secondButtonText: string;
}

const footer: React.FC<InputProps> = ({
  firstButtonText,
  secondButtonText,
}) => {
  return (
    <div className="footer-container">
      <footer>
        <button>{firstButtonText}</button>
        <button>{secondButtonText}</button>
        <div className="rights">
          <p>Todos os direitos reservados</p>
          <span>© 2021 Intercontinental GT Challenge</span>
        </div>
      </footer>
    </div>
  );
};

export default footer;
