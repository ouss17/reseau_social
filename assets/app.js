import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import React, { useState } from 'react';


import './styles/app.css';
import './bootstrap';

import Layout from './components/Layout';
import Home from './pages/Home';
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";
import Profil from "./pages/Profil";
import Parametres from "./pages/parametres";
import Admin from "./pages/Admin";

function App() {

    const [miniUser, setMiniUser] = useState({
        avatar: "",
        pseudo: "pseudo",
        username: "@username"
    })
    
    return (
        <Routes>
            <Route path="/" element={<Layout miniUser={miniUser} />}>
                <Route path="/" element={<Home />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/parametres" element={<Parametres />} />
                <Route path="/admin" element={<Admin />} />
            </Route>
            <Route path="/login" element={<Login />} />
        </Routes>

    );
}

export default App;