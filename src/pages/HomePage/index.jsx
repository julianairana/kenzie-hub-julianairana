import { HomeContainer, HomeNavBar, HomeHeader, HomeCards } from "./homePage";
import logo from "../../img/Logo.svg";
import { Link } from "react-router-dom";
import { CardTech } from "../../componentes/CardTech";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ModalTechnology } from "../../componentes/ModalTechnology/ModalTechnology";
import { TechnologyContext } from "../../contexts/TechnologyContext";

export const HomePage = () => {

  const { user, newLoading } = useContext(AuthContext);
  const { modalIsOpen, handleModal, technology } = useContext(TechnologyContext);

  if(newLoading) {
    return null;
  }

  return user? (
    <HomeContainer>
      <HomeNavBar>
        <img src={logo} alt="" />
        <Link to={`/`} onClick={()=>{
          user.user = null;
          localStorage.removeItem("@TOKEN");
        }}>Sair</Link>
      </HomeNavBar>
      <HomeHeader>
        <h2>Olá, {user.name} </h2>
        <span>{user.course_module}</span>
      </HomeHeader>
      <HomeCards>
          <div>
          <h3>Tecnologias</h3>
          <button type="button" onClick={() => handleModal()}>+</button>
          </div>
          <div className="divUl">
          <ul>
            {technology.map((element) => 
          <CardTech key={element.id} element={element} />
          )}
          </ul>
          </div>
        </HomeCards>  
        {modalIsOpen && <ModalTechnology/>}
    </HomeContainer>
  ): <Navigate to={"/"}/>

};
