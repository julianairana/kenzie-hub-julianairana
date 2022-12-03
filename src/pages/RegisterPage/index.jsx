import { Register } from "./registerPage";
import logo from "../../img/Logo.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const RegisterPage = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const registerUser = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("users", data);
      toast.success("Conta criada com sucesso!");

      setTimeout(() => {
        navigate("/");
      }, 5000);
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const submit = async (data) => {
    console.log(data);
    const dataNew = { ...data };
    delete dataNew.passwordConfirm;
    await registerUser(dataNew);
    reset();
  };

  return (
    <>
      <Register>
        <div className="divLogo">
          <img src={logo} alt="" />
          <Link to={`/`}>Voltar</Link>
        </div>
        <div>
          <h2>Crie sua conta</h2>
          <span>Rapido e grátis, vamos nessa</span>
          <form onSubmit={handleSubmit(submit)} noValidate>
            <label htmlFor="name">Nome</label>
            <input
              type="name"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            {errors.name?.message && <span>{errors.name.message}</span>}

            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            {errors.email?.message && <span>{errors.email.message}</span>}

            <label htmlFor="password">Senha</label>
            <input
              type="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            {errors.password?.message && <span>{errors.password.message}</span>}

            <label htmlFor="passwordConfirm">Confirmar Senha</label>
            <input
              type="password"
              placeholder="Digite novamente sua senha"
              {...register("passwordConfirm")}
            />
            {errors.passwordConfirm?.message && (
              <span>{errors.passwordConfirm.message}</span>
            )}

            <label htmlFor="bio">Bio</label>
            <input
              type="text"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            {errors.bio?.message && <span>{errors.bio.message}</span>}

            <label htmlFor="contact">Contato</label>
            <input
              type="text"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            {errors.contact?.message && <span>{errors.contact.message}</span>}

            <select id="course_module" {...register("course_module")}>
              <option value="">Escolha o Módulo</option>
              <option value=" Primeiro Módulo (Introdução ao Frontend)">
                Primeiro módulo (Introdução ao Frontend)
              </option>
              <option value="Segundo Módulo (Frontend Avançado)">
                Segundo módulo (Frontend Avançado)
              </option>
              <option value="Terceiro Módulo (Introdução ao Backend)">
                Terceiro módulo (Introdução ao Backend)
              </option>
              <option value="Quarto Módulo (Backend Avançado)">
                Quarto módulo (Backend Avançado)
              </option>
            </select>
            {errors.course_module?.message && (
              <span>{errors.course_module.message}</span>
            )}
            <button type="submit" disabled={loading}>
              {loading ? "Cadastrando..." : "Cadastrar"}
            </button>
          </form>
        </div>
      </Register>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
