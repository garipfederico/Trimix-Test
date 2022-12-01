import "./App.css";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import PersonasBusqueda from "./components/PersonasBusqueda/PersonasBusqueda";
import PersonaAE from './components/PersonaAE/PersonaAE'
import "@fontsource/roboto/300.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="home" element={<PersonasBusqueda />} />
                <Route path="/personas/:idPersona" element={<PersonaAE />} />
                <Route path="/*" element={<Navigate to="/home" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
