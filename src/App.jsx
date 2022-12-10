import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { HomePage } from "./pages/HomePage";
import { TechnologyProvider } from "./contexts/TechnologyContext";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/home"
          element={
            <TechnologyProvider>
              <HomePage/>
            </TechnologyProvider>
          }
        />
      </Routes>
  );
}

export default App;
