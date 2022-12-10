import { useContext } from "react";
import { TechnologyContext } from "../../contexts/TechnologyContext";
import { ModalEdit } from "../ModalEditDelet";

import { StyledCardTech } from "./cardTech";

export const CardTech = ({ element }) => {
  const { modalIsEditOpen, handleEditModal, setEditSelect } =
    useContext(TechnologyContext);

  return (
    <StyledCardTech key={element.id}>
      <h3>{element.title}</h3>
      <div className="divSpan">
        <span>{element.status}</span>
        <button
          type="button"
          className="buttonTrash"
          onClick={() => {
            handleEditModal();
            setEditSelect(element);
          }}
        ></button>
      </div>
      {modalIsEditOpen && <ModalEdit element={element} />}
    </StyledCardTech>
  );
};
