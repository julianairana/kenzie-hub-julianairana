import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { TechnologyContext } from "../../contexts/TechnologyContext";
import { StyleEditModal } from "./style.js";
import { modalSchemaEditDelet } from "./modalEditDeletSchema";

Modal.setAppElement("#root");

export const ModalEdit = ({element}) => {
  const { modalIsEditOpen, handleEditModal, EditTechnology, editSelect, deletTechnology } =
    useContext(TechnologyContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      id: editSelect.id,
      title: editSelect.title,
      status: editSelect.status,
    },
    resolver: yupResolver(modalSchemaEditDelet),
  });

  async function submit(data) {
    await EditTechnology(data);
    console.log(data);
    reset();
  }

  return (
    <StyleEditModal>
      <div
        isOpen={modalIsEditOpen}
        onRequestClose={handleEditModal}
        className="containerModalEdit"
      >
        <div className="divModalHeader">
          <h2 className="modalTitle">Tecnologia Detalhes</h2>
          <button
            onClick={() => handleEditModal()}
            className="buttonCloseModal"
          >
            X
          </button>
        </div>
        <form className="modalFormEdit" onSubmit={handleSubmit(submit)} noValidate>
          <label htmlFor="title" className="modalLabel">
            Nome do projeto
          </label>
          <input
            type="text"
            name="title"
            placeholder="Nome da tecnologia"
            className="modalInput"
            {...register("title")}
          />
          {errors.title?.message && <span>{errors.title.message}</span>}
          <label htmlFor="status" className="modalLabel">
            Status
          </label>
          <select
            name="status"
            id="status"
            className="modalSelect"
            {...register("status")}
          >
            <option value="">Selecione</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          {errors.status?.message && <span>{errors.status.message}</span>}
          <div className="areaButtons">
          <button type="submit" className="buttonSalvar">
            Salvar alterações
          </button>
          <button type="submit" className="buttonExcluir" onClick={() => {
            deletTechnology(element.id)
          }}>
            Excluir
          </button>
          </div>
        </form>
      </div>
    </StyleEditModal>
  );
};
