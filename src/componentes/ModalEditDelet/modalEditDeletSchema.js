import * as yup from "yup";

export const modalSchemaEditDelet = yup.object().shape({
  title: yup.string().required("É necessário fornecer o nome do projeto."),
  status: yup.string().required("A opção de status é obrigatória!"),
});
