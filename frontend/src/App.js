import "./App.css";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import ClienteBusqueda from "./components/ClientesBusqueda/ClientesBusqueda";
import "@fontsource/roboto/300.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="home" element={<ClienteBusqueda />} />
                <Route path="/personas/:idPersona" element={<ClienteBusqueda />} />
                <Route path="/*" element={<Navigate to="/home" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
