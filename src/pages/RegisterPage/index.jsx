import { Register } from "./registerPage";
import logo from "../../img/Logo.svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export const RegisterPage = () => {

    const registerSchema = yup.object().shape({
        name: yup.string().required("O nome é obitgatório!").min(3, "O nome precisa ter pelo menos 3 caracteres.").max(200, "O nome pode ter no máximo 200 caracteres."),
        email: yup.string().required("E-mail inválido"),
        password: yup.string().required("Este campo é obrigatório!").min(8, "É necessário ter ao menos 8 caracteres.")

    })

    const {register, handleSubmit} = useForm({
        // defaultValues: {
        //     name:"Digite"
        // }
    });

    const submit = (data) => {
        console.log(data)
    }

  return (
    <Register>
      <div className="divLogo">
        <img src={logo} alt="" />
        <a href="">Voltar</a>
      </div>
      <div>
        <h2>Crie sua conta</h2>
        <span>Rapido e grátis, vamos nessa</span>
        <form onSubmit={handleSubmit(submit)} noValidate>
          <label>Nome</label>
          <input type="name" placeholder="Digite aqui seu nome" {...register("name")} />

          <label>Email</label>
          <input type="email" placeholder="Digite aqui seu email" {...register("email")}/>

          <label htmlFor="">Senha</label>
          <input type="password" placeholder="Digite aqui sua senha" {...register("password")}/>

          <label htmlFor="">Confirmar Senha</label>
          <input type="password" placeholder="Digite novamente sua senha" {...register("passwordConfrim")}/>

          <label htmlFor="">Bio</label>
          <input type="text" placeholder="Fale sobre você" {...register("bio")}/>

          <label htmlFor="">Contato</label>
          <input type="number" placeholder="Opção de contato" {...register("contact")}/>

          <select name="course_module" id="">
            <option value="select"></option>
            <option value="primeiro módulo">Primeiro módulo (Introdução ao Frontend)</option>
            <option value="segundo módulo">Segundo módulo (Frontend Avançado)</option>
            <option value="terceiro módulo">Terceiro módulo (Introdução ao Backend)</option>
            <option value="quarto módulo">Quarto módulo (Backend Avançado)</option>
          </select>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </Register>
  );
};
