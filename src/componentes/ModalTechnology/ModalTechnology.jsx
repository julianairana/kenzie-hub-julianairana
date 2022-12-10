import { ContainerModal } from "./modalTechnolgy";
import Modal from "react-modal";
import { useContext } from "react";
import { TechnologyContext } from "../../contexts/TechnologyContext";
import { useForm } from "react-hook-form";
import { modalSchema } from "./modalSchema";
import { yupResolver } from "@hookform/resolvers/yup";
Modal.setAppElement("#root");

export const ModalTechnology = () => {

    const {modalIsOpen, handleModal, AddTechnology} = useContext(TechnologyContext);

    const {register, handleSubmit, reset, formState: { errors }} = useForm({
        mode: "onBlur",
        defaultValues: {
            title: "",
            status: "",
        },
        resolver: yupResolver(modalSchema),
    });

    async function submit(data) {
        const information = { ...data };
        await AddTechnology(information);
        console.log(information);
        reset();
    }

    return (

<ContainerModal>
      <div
        isOpen={modalIsOpen}
        onRequestClose={handleModal}
        className="divModal"
      >
        <div className="divModalHeader">
          <h2 className="modalTitle">Cadastrar Tecnologia</h2>
          <button onClick={() => handleModal()} className="buttonCloseModal">
            X
          </button>
        </div>
        <form className="modalForm" onSubmit={handleSubmit(submit)} noValidate>
          <label htmlFor="title" className="modalLabel">
            Nome
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
            Selecionar Status
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
          {errors.status?.message && (
              <span>{errors.status.message}</span>
            )}
          <button type="submit" className="buttonRegisterModal">
            Cadastrar Tecnologia
          </button>
        </form>
      </div>
    </ContainerModal>
        )
    }