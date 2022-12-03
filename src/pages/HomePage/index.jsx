import { HomeContainer, HomeNavBar, HomeHeader, HomeText } from "./homePage";
import logo from "../../img/Logo.svg";
import { Link } from "react-router-dom";

export const HomePage = ({user}) => {

  return (
    <HomeContainer>
      <HomeNavBar>
        <img src={logo} alt="" />
        <Link to={`/`} onClick={()=>{
          user = null;
          localStorage.removeItem("@TOKEN");
        }}>Sair</Link>
      </HomeNavBar>
      <HomeHeader>
        <h2>Olá, {user.user.name} </h2>
        <span>{user.user.course_module}</span>
      </HomeHeader>
      <HomeText>
        <p>Que pena! Estamos em desenvolvimento :( </p>
        <span>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </span>
      </HomeText>
    </HomeContainer>
  );
};
