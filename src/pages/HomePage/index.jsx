import { HomeContainer, HomeNavBar, HomeHeader, HomeCards } from "./homePage";
import logo from "../../img/Logo.svg";
import sinal from "../../img/sinalmais.svg";
import trash from "../../img/trash.svg";

export const HomePage = () => {
  return (
    <HomeContainer>
      <HomeNavBar>
        <img src={logo} alt="" />
        <button>Sair</button>
      </HomeNavBar>
      <HomeHeader>
        <h2>Olá, Samuel Leão</h2>
        <span>Primeiro módulo (Introdução ao Frontend)</span>
      </HomeHeader>
      <HomeCards>
        <div>
        <h3>Tecnologias</h3>
        <button><img src={sinal} alt="" /></button>
        </div>
        <div className="divUl">
        <ul>
        <li>
                <h3>React JS</h3>
                <div className="divSpan">
                <span>Intermediário</span>
                <button className="buttonTrash"><img src={trash} alt="" /></button>
                </div>
            </li>
            <li>
                <h3>React JS</h3>
                <div className="divSpan">
                <span>Intermediário</span>
                <button className="buttonTrash"><img src={trash} alt="" /></button>
                </div>
            </li>
            <li>
                <h3>React JS</h3>
                <div className="divSpan">
                <span>Intermediário</span>
                <button className="buttonTrash"><img src={trash} alt="" /></button>
                </div>
            </li>
        </ul>
        </div>
     
  
      </HomeCards>
    </HomeContainer>
  );
};
