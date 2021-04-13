import React from 'react';

import './styles.css';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Input from '../../components/input';

import profile from '../../assets/big-profile.png';

const SignUp: React.FC = () => {
  return (
    <div id="page-signup">
      <Header />

      <div className="input-container">
        <Input
          label="USUÁRIO"
          placeholder="Însira um usuário..."
          name="username"
          type="text"
        />
        <Input
          label="SENHA"
          placeholder="Însira uma senha..."
          name="password"
          type="password"
        />
      </div>

      <div className="profile-container">
        <label htmlFor="">PERFIL</label>

        <div className="profile">
          <img src={profile} alt="Profile" />
          <div className="upload-container">
            <p>Escolha uma imagem para seu Perfil direto do seu computador.</p>
            <button type="button">UPLOAD</button>
          </div>
        </div>
      </div>

      <Footer firstButtonText="VOLTAR" secondButtonText="SALVAR" />
    </div>
  );
};

export default SignUp;
