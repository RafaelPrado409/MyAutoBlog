import React from 'react';

import './styles.css';

const CreateEdit: React.FC = () => {
  return (
    <div id="create-edit">
      <div className="create-edit-container">
        <span>CRIAR POST</span>

        <label htmlFor="">TITULO</label>
        <input className="title" type="text" placeholder="Inserir título..." />

        <label htmlFor="">TEXTO</label>
        <input className="text" type="text" placeholder="Inserir texto..." />

        <label htmlFor="">UPLOAD</label>
        <div className="upload">
          <div className="load-image" />
          <div className="upload-details">
            <p>Escolha uma imagem direto do seu computador para seu Perfil</p>
            <button>UPLOAD</button>
          </div>
        </div>

        <footer className="create-edit-footer">
          <button>SALVAR</button>
          <button>CANCELAR</button>
        </footer>
      </div>
    </div>
  );
};

export default CreateEdit;
