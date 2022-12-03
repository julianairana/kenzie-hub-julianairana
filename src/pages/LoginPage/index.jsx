import { Login } from "./loginPage";
import logo from "../../img/Logo.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { loginSchema } from "./loginSchema";

export const LoginPage = ({loginUser}) => {

 
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const submit = async (data) => {
    await loginUser(data);
   
    setTimeout(()=> {
      navigate("/home")

    }, 5000)
    reset();
  }


  return (
    <>
    <Login>
        <img src={logo} alt="" />
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(submit)} noValidate>
          <label htmlFor="email">Email</label>
          <input type="email"
              placeholder="Digite aqui seu email"
              {...register("email")}/>
                {errors.email?.message && <span>{errors.email.message}</span>}

          <label htmlFor="password">Senha</label>
          <input type="password"
              placeholder="Digite aqui sua senha"
              {...register("password")} />
               {errors.password?.message && <span>{errors.password.message}</span>}

          <button type="submit" disabled={loading}>{loading ? "Entrando..." : "Entrar"}</button>
        </form>
        <span>Ainda não possui uma conta?</span>
        <Link to={`/register`}>Cadastre-se</Link>
      </div>
    </Login>
    </>
  );
};
