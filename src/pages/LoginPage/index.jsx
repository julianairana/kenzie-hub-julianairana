import { Login } from "./loginPage";
import logo from "../../img/Logo.svg"

export const LoginPage = () => {
  return (
    <Login>
        <img src={logo} alt="" />
      <div>
        <h2>Login</h2>
        <form>
          <label htmlFor="">Email</label>
          <input type="text" />
          <label htmlFor="">Senha</label>
          <input type="text" />
          <button>Entrar</button>
        </form>
        <span>Ainda não possui uma conta?</span>
        <a href="">Cadastre-se</a>
      </div>
    </Login>
  );
};
