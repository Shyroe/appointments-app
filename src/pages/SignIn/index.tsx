import React from "react";
import { useHistory } from "react-router-dom";

import { Container, LoginBox } from "./styles";

import logoImg from "../../assets/images/logo-credpago.svg";

const SignIn: React.FC = () => {
  const history = useHistory();

  function handleSignIn() {
    history.push("/dashboard");
  }

  return (
    <Container>
      <img src={logoImg} alt="CredPago" />
      <LoginBox>
        <form onSubmit={handleSignIn}>
          <div>
            <label htmlFor="email">
              Email: <span>*</span>
            </label>
            <input type="email" name="email" placeholder="seu@email.com" />
          </div>
          <div>
            <label htmlFor="password">
              Senha: <span>*</span>
            </label>
            <input type="password" name="password" placeholder="*******" />
          </div>
          <div>
            <button type="submit">Entrar</button>
          </div>
          <div>
            <a href="/">Esqueci minha senha</a>
          </div>
        </form>
      </LoginBox>
    </Container>
  );
};

export default SignIn;
