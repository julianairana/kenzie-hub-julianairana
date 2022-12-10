import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import Modal from "react-modal";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
Modal.setAppElement("#root");

export const TechnologyContext = createContext({});

export const TechnologyProvider = ({ children }) => {
  const { user, getUser } = useContext(AuthContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsEditOpen, setIsEditOpen] = useState(false);
  const [editSelect, setEditSelect] = useState(null);
  const [loading, setLoading] = useState(false);

  const technology = user?.techs;

  async function AddTechnology(data) {
    try {
      setLoading(true);
      await api.post("/users/techs", data);
      getUser();
      setIsOpen(false);
      toast.success("Tecnologia criada com sucesso!");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    } finally {
      setLoading(false);
    }
  }

  function handleModal() {
    setIsOpen(!modalIsOpen);
  }

  function handleEditModal() {
    setIsEditOpen(!modalIsEditOpen);
  }

  async function EditTechnology(data) {
    try {
      setLoading(true);
      await api.put(`/users/techs/${data.id}`, data);
      getUser();
      setIsEditOpen(false);
      toast.success("Tecnologia alterada com sucesso!");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function deletTechnology(id) {
    try {
      setLoading(true);

      await api.delete(`/users/techs/${id}`);
      getUser();

      toast.info("Tecnologia removida com sucesso!");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }



  return (
    <TechnologyContext.Provider
      value={{
        handleModal,
        modalIsOpen,
        setIsOpen,
        AddTechnology,
        setLoading,
        loading,
        user,
        technology,
        EditTechnology,
        editSelect,
        setEditSelect,
        modalIsEditOpen,
        setIsEditOpen,
        handleEditModal,
        deletTechnology
      }}
    >
      {children}
    </TechnologyContext.Provider>
  );
};
