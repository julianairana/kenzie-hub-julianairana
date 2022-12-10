import * as yup from "yup";

export const modalSchema = yup.object().shape({
  title: yup.string().required("É necessário fornecer o nome da Tecnologia."),
  status: yup.string().required("A opção de status é obrigatória!"),
});
