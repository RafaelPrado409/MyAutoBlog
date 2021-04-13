import React from 'react';

import './styles.css';

import Header from '../../components/header';
import Input from '../../components/input';
import Footer from '../../components/footer';

const SignIn: React.FC = () => {
  return (
    <div id="page-signin">
      <Header />
      <Input
        label="USUÁRIO"
        placeholder="Inserir nome do usuário..."
        name="username"
        type="text"
      />
      <Input
        label="SENHA"
        placeholder="Inserir senha..."
        name="password"
        type="password"
      />

      <Footer firstButtonText="ENTRAR" secondButtonText="CADASTRAR" />
    </div>
  );
};

export default SignIn;
